"use strict";
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&size=20';
const input = document.querySelector('.header__search');
const container = document.querySelector('#hero__items');

input.addEventListener('input', (e) => {
    e.preventDefault();
    search(input.value);
});

async function getEvents(){
    try {
        const r = await fetch(BASE_URL);
        const data = await r.json();
        return data._embedded?.events || [];
    } catch (error){
        console.error(error);
        return [];
    }
};

async function search(value) {
    const events = await getEvents();
    const filtered = events.filter(event =>
        event.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filtered.length === 0){
        container.innerHTML = '<h2>There are no such events</h2>';
        return;
    }

    render(filtered);
}

function render(events) {
    const templateSource = `
      <div class='hero__template'>
        <ul class='hero__list'>
          {{#each this}}
            <li class='hero__item'>
              <div class='hero__img-wrap'>
                <picture class='hero__img'>
                  <source srcset="{{images.0.url}} 1x, {{images.0.url}} 2x" type="image/jpeg" />
                  <img src="{{images.0.url}}" alt="{{name}}" class="hero__img-teg"/>
                </picture>
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