const API_KEY = 'ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS';
const apiUrl = `https://app.ticketmaster.com/discovery/v2/events`;
const endUrl = `.json?apikey=${API_KEY}`;
const refs = {
  backdrop: document.querySelector('.backdrop__poster'),
  dataCards: document.querySelector('.hero__list'),
  modalContainer: document.querySelector('.modal-container'),
};

const template = `<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
    <img src='{{image}}' alt='Poster Image' class='modal__poster-small' />
    <div class="modal__main-wrap">
        <div class='modal__poster-img'>
          <img src='{{image}}' alt='Poster Image' class='modal__poster-big' />
        </div>
          <div class='modal__wrap'>
            <div class='modal__block'>
                <h2 class='modal__title'>INFO</h2>
                <p class='modal__text'>{{info}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHEN</h2>
                <p class='modal__text'>{{date}}<br />{{time}}
                {{location}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHERE</h2>
                <p class='modal__text'>{{city}},
                {{country}}<br />{{venue}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHO</h2>
                <p class='modal__text'>{{artists}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>PRICES</h2>
                <p class='modal__text'>{{priceStandard}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
                <p class='modal__text'>{{priceVIP}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
            </div>
         </div>
    </div>
    <div class='modal__btn-wrap'>
        <button class='modal__button'>MORE FROM THIS AUTHOR</button>
          <button class='modal__button' data-id="{{id}}" id="addBtn">ADD TO FAVOURITE</button>
     </div>
  </div>
</div>`;
const modalTemplate = Handlebars.compile(template);

if (refs.dataCards) {
  refs.dataCards.addEventListener('click', async e => {
    const cardEl = e.target.closest('.hero__item');
    if (cardEl) {
      const cardId = cardEl.dataset.id;
      await fetchItem(cardId);

// const add = document.querySelector('#addBtn');
const list = document.querySelector('.fav__list');
let favsArr = [];

document.body.addEventListener('click', async (e) => {
  if (e.target && e.target.id === 'addBtn'){
  try {
    console.log(e.target.dataset.id);
    const item = await fetchItem(e.target.dataset.id);
    const data = formatEventData(item);
    console.log(data);
    favsArr.push(data);
    render(favsArr);
  }  catch (error) {
    console.log(error);
  }
}
});

function render(events) {
  if (events.length === 0){
    list.innerHTML = '<li><p>There are not favourites events</p></li>';
    return;
  }
  const validEvents = events.filter(event => 
    event?.dates?.start?.localDate && event?._embedded?.venues?.[0]?.name
  );
  const templateSource = `
         {{#each this}}
    <li class='fav__item' data-id="{{id}}">
      <div class='fav__img-wrap'>
        <img src="{{image}}" alt="{{info}}" class="hero__img-teg"/>
      </div>
      <h2 class='fav__name'>{{info}}</h2>
      <p class='fav__date'>{{date}}</p>
      <span class='fav__place'>
        <svg class='fav__place-icon' width='7' height='10'>
          <use href='#'></use>
        </svg>
        {{venue}}
      </span>
    </li>
  {{/each}}
  `;
  
  const template = Handlebars.compile(templateSource);
  const markUp = template(validEvents);
  list.insertAdjacentHTML('beforeend', markUp);
}

    }
  });
} else {
  console.error('Element not found');
}

async function fetchItem(id) {
  try {
    const r = await fetch(`${apiUrl}/${id}${endUrl}`);
      const data = await r.json();
      console.log(data)
      const formattedData = data ? formatEventData(data) : {};
   
    const modalHtml = modalTemplate(formattedData);
    refs.modalContainer.innerHTML = modalHtml;

    const backdrop = document.querySelector('.backdrop__poster');
    //  const modalCloseBtn = document.querySelector('.modal__close');

    backdrop.classList.remove('is-hidden');

    //   modalCloseBtn.addEventListener('click', () => {
    //     backdrop.classList.add('is-hidden');
    //     refs.modalContainer.innerHTML = '';
    //   });

    backdrop.addEventListener('click', e => {
      if (e.target === backdrop) {
        backdrop.classList.add('is-hidden');
        refs.modalContainer.innerHTML = '';
      }
    });
    return formattedData;

  } catch (error) {
    console.error(error, `Error with fetch current id item`);
  };
}

function formatEventData(data) {
  const limitSentences = (text, maxSentences) => {
    if (!text) {
      ('No info available');
    }
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    return sentences.slice(0, maxSentences).join(' ').trim() || text;
  };

  return {
    id: data.id,
    image: data.images?.[0]?.url || '',
    info: limitSentences(data.info, 2),
    date: data.dates?.start?.localDate || 'N/A',
    time: data.dates?.start?.localTime
      ? data.dates.start.localTime.slice(0, 5)
      : 'N/A',
    location: data._embedded?.venues?.[0]?.name || 'N/A',
    city: data._embedded?.venues?.[0]?.city?.name || 'N/A',
    country: data._embedded?.venues?.[0]?.country?.name || 'N/A',
    venue: data._embedded?.venues?.[0]?.name || 'N/A',
    artists:
      data._embedded?.attractions?.map(attr => attr.name).join(', ') ||
      'Unknown artist',
    priceStandard: data.priceRanges?.[0]?.min
      ? `${data.priceRanges[0].min} USD`
      : 'N/A',
    priceVIP: data.priceRanges?.[0]?.max
      ? `${data.priceRanges[0].max} USD`
      : 'N/A',
  };
}
