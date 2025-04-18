'use strict';
const BASE_URL =
  'https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD';
const input = document.querySelector('.header__search');
const container = document.querySelector('#hero__items');

let timeOut;

input.addEventListener('input', async (e) => {
  e.preventDefault();
clearTimeout(timeOut);
timeOut = setTimeout(() => {
  await search(input.value.trim());
}, 500);
});

async function getAllEvents(keyword) {
    const allEvents = [];
    let page = 0;
    let totalPages = 1;

    try {
        while (page < totalPages) {
            const r = await fetch(`${BASE_URL}&keyword=${keyword}&size=20&page=${page}`);
            const data = await r.json();
            const events = data._embedded?.events || [];
            allEvents.push(...events);

            totalPages = data.page.totalPages;
            page++;
        }
    } catch (error) {
        console.log(error);
    }

    return allEvents;
}

async function search(value) {
    const events = await getAllEvents(value);
    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(value.toLowerCase())
    );
  if (filtered.length === 0) {
    container.innerHTML = '<h2>There are no such events</h2>';
    return;
  }

    render(filtered.slice(0, 20)); // (filtered.slice(0, 20))
}

function render(events) {
  const templateSource = `
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
    `;
    const template = Handlebars.compile(templateSource);
    const markUp = template(events);
    container.innerHTML = markUp;
}
// async function startApp(){
//     const allEvents = await getEvents();
//     render(allEvents);
// };
// startApp();

