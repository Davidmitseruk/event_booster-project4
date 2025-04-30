const apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext';
const countryInput = document.querySelector('.header__country');
const list = document.querySelector('#hero__items');

let timeOut;

countryInput.addEventListener('input', (e) => {
  clearTimeout(timeOut);
  timeOut = setTimeout(async () => {
    await countrys(countryInput.value.trim());
  }, 500);
});

async function countrys(value) {
  if (!value) {
    list.innerHTML = '<li>Введіть код країни.</li>';
    return;
  }

  let page = 0;
  fetch(`${apiUrl}&size=20&page=${page}&countryCode=${value.toUpperCase()}`)
    .then(res => res.json())
    .then(data => {
      const events = data._embedded?.events || [];
      if (events.length === 0) {
        list.innerHTML = '<li>Подій не знайдено.</li>';
        return;
      }
      list.innerHTML = events.map(event => `
        <div class='hero__template'>
          <ul class='hero__list'>
            <li class='hero__item' data-id="${event.id}">
              <div class='hero__img-wrap'>
                <img src="${event.images[0].url}" alt="${event.name}" class="hero__img-teg"/>
              </div>
              <h2 class='hero__name'>${event.name}</h2>
              <p class='hero__date'>${event.dates.start.localDate}</p>
              <span class='hero__place'>
                <svg class='hero__place-icon' width='7' height='10'>
                  <use href='#'></use>
                </svg>
                ${event._embedded.venues[0].name}
              </span>
            </li>
          </ul>
        </div>
      `).join('');
    })
    .catch(error => {
      console.error('Помилка при завантаженні подій:', error);
      list.innerHTML = '<li>Не вдалося знайти події.</li>';
    });
}
