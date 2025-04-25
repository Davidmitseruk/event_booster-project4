const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext'
const countryInput = document.querySelector('.header__country');
const list = document.querySelector('#hero__items');

let timeOut;

countryInput.addEventListener('input', () => {
  e.preventDefault();
  clearTimeout(timeOut);
  timeOut = setTimeout(async () => {
    await countrys(countryInput.value.trim());
  }, 500);
  const countryCode = countryInput.value.toLowerCase().trim();
  if (!countryCode) return;
});

async function countrys(value) {
  let page = 0;
  fetch(`${apiUrl}&size=20&page=${page}`)
    .then(res => res.json())
    .then(data => {
      const events = data._embedded?.events || [];
      list.innerHTML = events.map(event => `
        <div class='hero__template' >
        <ul class='hero__list'>
          {{#each this}}
            <li class='hero__item' data-id="{{id}}">
              <div class='hero__img-wrap'>
                  <img src="{{images.0.url}}" alt="{{name}}" class="hero__img-teg"/>
              </div>
              <h2 class='hero__name'>{{name}}</h2>
              <p class='hero__date'>{{dates.start.localDate}}</p>
              <span class='hero__place'>
                <svg class='hero__place-icon' width='7' height='10'>
                  <use href='#'></use>
                </svg>
                {{_embedded.venues.0.name}}
              </span>
            </li>
          {{/each}}
        </ul>
      </div>
      `).join('');
    })
    .catch(error => {
      console.error('Помилка при завантаженні подій:', error);
      list.innerHTML = '<li>Не вдалося знайти події.</li>';
    });
}