"use strict"
import favs from './src/fav.json';
const add = document.querySelector('#addBtn');
const list = document.querySelector('.fav__list');
let favsArr = favs || [];
add.addEventListener('click', (e) => {
    try{
      const item = e.target.dataSet.id;
      const data = JSON.parse(item);
      favsArr.push(data);
      render(favsArr);
    }
    catch(error){
        console.log(error);
    }
});
function render(events) {
    const templateSource = `
        <div class='fav__template' >
          <ul class='fav__list'>
            {{#each this}}
              <li class='fav__item' data-id="{{id}}">
                <div class='fav__img-wrap'>
                    <img src="{{images.0.url}}" alt="{{name}}" class="hero__img-teg"/>
                </div>
                <h2 class='fav__name'>{{name}}</h2>
                <p class='fav__date'>{{dates.start.localDate}}</p>
                <span class='fav__place'>
                  <svg class='fav__place-icon' width='7' height='10'>
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
      list.innerHTML = markUp;
  }