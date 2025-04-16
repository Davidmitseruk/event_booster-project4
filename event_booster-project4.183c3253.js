let e=1,t=[],a=1;const n={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},s=`
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
`,i=Handlebars.compile(s);async function r(e){try{if(51!=e){var a;let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(s.ok||console.error("Помилка API"),!(t=(null==(a=(await s.json())._embedded)?void 0:a.events)||[]).length){n.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',n.paginationContainer.innerHTML="";return}(function(){let e=i({items:t.map(e=>{var t,a,n,s,i;let r=e.images||[],o=r.find(e=>"16_9"===e.ratio&&e.width>300)||r[0];return{id:e.id,name:e.name||"Без назви",date:(null==(a=e.dates)||null==(t=a.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(i=e._embedded)||null==(s=i.venues)||null==(n=s[0])?void 0:n.name)||"Місце не вказане",image:{url:o?o.url:"#"}}})});n.itemsContainer.innerHTML=e})(),o()}else n.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',o()}catch(e){console.error("Помилка:",e),n.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function o(){n.paginationContainer.innerHTML="";let t=Math.floor(2.5),s=a,i=Math.min(s+5-1,51);for(let l=s;l<=i;l++){let c=document.createElement("button");c.textContent=l,l===e?c.classList.add("hero__btn-active"):c.classList.remove("hero__btn-active"),c.addEventListener("click",()=>{r(e=l),l===s+t&&l<51-t?a=Math.min(a+1,47):l===s+t-1&&s>1?a=Math.max(1,s-1):l===i&&l<51?a=l:l===s&&s>1&&(a=Math.max(1,l-5+1)),o()}),n.paginationContainer.appendChild(c)}if(i<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",n.paginationContainer.appendChild(t);let s=document.createElement("button");s.textContent=51,51===e?s.classList.add("hero__btn-active"):s.classList.remove("hero__btn-active"),s.addEventListener("click",()=>{a=47,r(e=51)}),n.paginationContainer.appendChild(s)}}r(e);const l=document.querySelector(".header__search"),c=document.querySelector("#hero__items");async function d(){try{var e;let t=l.value,a=await fetch(`BASE_URL&keyword=${t}`);return(null==(e=(await a.json())._embedded)?void 0:e.events)||[]}catch(e){return console.error(e),[]}}async function m(e){let t=(await d()).filter(t=>t.keyword.includes(e.toLowerCase()));if(0===t.length){c.innerHTML="<h2>There are no such events</h2>";return}var a=t;let n=`
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
    `;c.innerHTML=Handlebars.compile(n)(a)}l.addEventListener("input",e=>{e.preventDefault(),m(l.value)});
//# sourceMappingURL=event_booster-project4.183c3253.js.map
