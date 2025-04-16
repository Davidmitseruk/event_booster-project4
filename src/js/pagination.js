const API_KEY = 'ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS';
const itemsPerPage = 20;
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&size=${itemsPerPage}`;

let currentPage = 1;
let totalPages = 51;
let items = [];
let pageGroupStart = 1;

const refs = {
  itemsContainer: document.getElementById('hero__items'),
  paginationContainer: document.getElementById('hero__pagination'),
};
const templateSource = `
  <div class='hero__template' data-id="{{id}}">
    <ul class='hero__list'>
      {{#each items}}
        <li class='hero__item'>
          <div class='hero__img-wrap'>
            <picture class='hero__img'>
              <source srcset="{{image.url}} 1x, {{image.url}} 2x" type="image/jpeg" />
              <img src="{{image.url}}" alt="{{name}}" class="hero__img-teg" />
            </picture>
          </div>
          <h2 class='hero__name'>{{name}}</h2>
          <p class='hero__date'>{{date}}</p>
          <span class='hero__place'>
            <svg class='hero__place-icon' width='7' height='10'>
              <use href='#'></use>
            </svg>
            {{place}}
          </span>
        </li>
      {{/each}}
    </ul>
  </div>
`;
const template = Handlebars.compile(templateSource);

async function fetchItems(page) {
  try {
    if (page != totalPages) {
      const response = await fetch(`${apiUrl}&page=${page - 1}`);
      if (!response.ok) console.error('Помилка API');
      const data = await response.json();

      items = data._embedded?.events || [];
      // totalPages = data.page.totalPages || 1;

      if (!items.length) {
        refs.itemsContainer.innerHTML =
          '<p class="hero__message >Event not found</p>';
        refs.paginationContainer.innerHTML = '';
        return;
      }

      displayItems();
      setupPagination();
    } else {
      refs.itemsContainer.innerHTML =
        '<p class="hero__message">No more events now</p>';
      setupPagination();
    }
  } catch (error) {
    console.error('Помилка:', error);
    refs.itemsContainer.innerHTML =
      '<p class="hero__message >Error loading events</p>';
  }
}

function displayItems() {
  const formattedItems = items.map(event => {
    const eventImages = event.images || [];
    const image =
      eventImages.find(img => img.ratio === '16_9' && img.width > 300) ||
      eventImages[0];

    return {
      id: event.id,
      name: event.name || 'Без назви',
      date: event.dates?.start?.localDate || 'Дата не вказана',
      place: event._embedded?.venues?.[0]?.name || 'Місце не вказане',
      image: {
        url: image ? image.url : '#',
      },
    };
  });

  const html = template({ items: formattedItems });
  refs.itemsContainer.innerHTML = html;
}
function setupPagination() {
  refs.paginationContainer.innerHTML = '';

  const pagesPerGroup = 5;
  const middlePageIndex = Math.floor(pagesPerGroup / 2);
  let startPage = pageGroupStart;
  let endPage = Math.min(startPage + pagesPerGroup - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    if (i === currentPage) {
      button.classList.add('hero__btn-active');
    } else {
      button.classList.remove('hero__btn-active');
    }

    button.addEventListener('click', () => {
      currentPage = i;
      fetchItems(currentPage);

      if (
        i === startPage + middlePageIndex &&
        i < totalPages - middlePageIndex
      ) {
        pageGroupStart = Math.min(
          pageGroupStart + 1,
          totalPages - pagesPerGroup + 1
        );
      }
      else if (i === startPage + middlePageIndex - 1 && startPage > 1) {
        pageGroupStart = Math.max(1, startPage - 1);
      }
      else if (i === endPage && i < totalPages) {
        pageGroupStart = i;
      }
      else if (i === startPage && startPage > 1) {
        pageGroupStart = Math.max(1, i - pagesPerGroup + 1);
      }

      setupPagination();
    });
    refs.paginationContainer.appendChild(button);
  }

  if (endPage < totalPages) {
    const dots = document.createElement('span');
    dots.classList.add('hero__dots');
    dots.textContent = '...';
    refs.paginationContainer.appendChild(dots);

    const lastButton = document.createElement('button');
    lastButton.textContent = totalPages;
    if (currentPage === totalPages) {
      lastButton.classList.add('hero__btn-active');
    } else {
      lastButton.classList.remove('hero__btn-active');
    }
    lastButton.addEventListener('click', () => {
      currentPage = totalPages;
      pageGroupStart = Math.max(1, totalPages - pagesPerGroup + 1);
      fetchItems(currentPage);
    });
    refs.paginationContainer.appendChild(lastButton);
  }
}

fetchItems(currentPage);
