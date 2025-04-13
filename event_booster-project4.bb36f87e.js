let e=1,t=1,a=[],n=1;const i={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},s=`
  <div class='hero__template'>
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
`,r=Handlebars.compile(s);async function l(s){try{var o;let c=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${s-1}`);c.ok||console.error("Помилка API");let d=await c.json();if(a=(null==(o=d._embedded)?void 0:o.events)||[],t=d.page.totalPages||1,!a.length){i.itemsContainer.innerHTML="<p>Події не знайдено</p>",i.paginationContainer.innerHTML="";return}(function(){let e=r({items:a.map(e=>{var t,a,n,i,s;let r=e.images||[],l=r.find(e=>"16_9"===e.ratio&&e.width>300)||r[0];return{name:e.name||"Без назви",date:(null==(a=e.dates)||null==(t=a.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(s=e._embedded)||null==(i=s.venues)||null==(n=i[0])?void 0:n.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});i.itemsContainer.innerHTML=e})(),function(){i.paginationContainer.innerHTML="";let a=n,s=Math.min(a+5-1,t);for(let r=a;r<=s;r++){let o=document.createElement("button");o.textContent=r,r===e?o.classList.add("hero__btn-active"):o.classList.remove("hero__btn-active"),o.addEventListener("click",()=>{l(e=r),r===s&&s<t?n=Math.min(n+5,t-5+1):r===a&&a>1&&(n=Math.max(1,a-5))}),i.paginationContainer.appendChild(o)}if(s<t){let a=document.createElement("span");a.classList.add("hero__dots"),a.textContent="...",i.paginationContainer.appendChild(a);let s=document.createElement("button");s.textContent=t,e===t?s.classList.add("hero__btn-active"):s.classList.remove("hero__btn-active"),s.addEventListener("click",()=>{e=t,n=Math.max(1,t-5+1),l(e)}),i.paginationContainer.appendChild(s)}}()}catch(e){console.error("Помилка:",e),i.itemsContainer.innerHTML="<p>Помилка завантаження подій</p>"}}l(e);const o=document.querySelector(".header__search"),c=document.querySelector(".hero__items");async function d(){try{var e;let t=await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=	L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&size=20");return(null==(e=(await t.json())._embedded)?void 0:e.events)||[]}catch(e){console.error(e)}}async function m(e){h((await d()).filter(t=>t.name.toLowerCase().includes(e.toLowerCase())))}function h(e){0===filtered.length&&(c.innerHTML="<h2>There are not such events</h2>");let t=`
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
    `,a=Handlebars.compile(t)(e);c.insertAdjacentHTML("beforeend",a)}o.addEventListener("input",e=>{e.preventDefault(),m(o.value),h()}),async function(){h(await d())}();
//# sourceMappingURL=event_booster-project4.bb36f87e.js.map
