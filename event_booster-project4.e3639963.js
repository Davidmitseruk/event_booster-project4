let e=1,t=1,n=[],a=1;const i={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},s=`
  <div class='hero__template'>
    <ul class='hero__list'>
      {{#each items}}
        <li class='hero__item'>
          <div class='hero__img-wrap'>
            <picture class='hero__img'>
              <source srcset="{{image.url}} 1x, {{image.url}} 2x" type="image/jpeg" />
              <img src="{{image.url}}" alt="{{name}}" />
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
`,o=Handlebars.compile(s);async function l(s){try{var r;let c=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${s-1}`);c.ok||console.error("Помилка API");let m=await c.json();if(n=(null==(r=m._embedded)?void 0:r.events)||[],t=m.page.totalPages||1,!n.length){i.itemsContainer.innerHTML="<p>Події не знайдено</p>",i.paginationContainer.innerHTML="";return}(function(){let e=o({items:n.map(e=>{var t,n,a,i,s;let o=e.images||[],l=o.find(e=>"16_9"===e.ratio&&e.width>300)||o[0];return{name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(s=e._embedded)||null==(i=s.venues)||null==(a=i[0])?void 0:a.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});i.itemsContainer.innerHTML=e})(),function(){i.paginationContainer.innerHTML="";let n=a,s=Math.min(n+5-1,t);for(let o=n;o<=s;o++){let r=document.createElement("button");r.textContent=o,o===e?r.classList.add("hero__btn-active"):r.classList.remove("hero__btn-active"),r.addEventListener("click",()=>{l(e=o),o===s&&s<t?a=Math.min(a+5,t-5+1):o===n&&n>1&&(a=Math.max(1,n-5))}),i.paginationContainer.appendChild(r)}if(s<t){let n=document.createElement("span");n.classList.add("hero__dots"),n.textContent="...",i.paginationContainer.appendChild(n);let s=document.createElement("button");s.textContent=t,e===t?s.classList.add("hero__btn-active"):s.classList.remove("hero__btn-active"),s.addEventListener("click",()=>{e=t,a=Math.max(1,t-5+1),l(e)}),i.paginationContainer.appendChild(s)}}()}catch(e){console.error("Помилка:",e),i.itemsContainer.innerHTML="<p>Помилка завантаження подій</p>"}}l(e);
//# sourceMappingURL=event_booster-project4.e3639963.js.map
