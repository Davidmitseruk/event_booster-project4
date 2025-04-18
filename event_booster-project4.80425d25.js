let e;let t=1,a=[],n=1;const s={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},i=`
  <div class='hero__template'>
    <ul class='hero__list'>
      {{#each items}}
        <li class='hero__item'  data-id="{{id}}">
          <div class='hero__img-wrap'>
            <img src="{{image.url}}" alt="{{name}}" class="hero__img-teg" />
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
`,o=Handlebars.compile(i);async function l(e){try{if(51!=e){var t;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(n.ok||console.error("Помилка API"),!(a=(null==(t=(await n.json())._embedded)?void 0:t.events)||[]).length){s.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',s.paginationContainer.innerHTML="";return}(function(){let e=o({items:a.map(e=>{var t,a,n,s,i;let o=e.images||[],l=o.find(e=>"16_9"===e.ratio&&e.width>300)||o[0];return{id:e.id,name:e.name||"Без назви",date:(null==(a=e.dates)||null==(t=a.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(i=e._embedded)||null==(s=i.venues)||null==(n=s[0])?void 0:n.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});s.itemsContainer.innerHTML=e})(),r()}else s.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',r()}catch(e){console.error("Помилка:",e),s.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function r(){s.paginationContainer.innerHTML="";let e=Math.floor(2.5),a=n,i=Math.min(a+5-1,51);for(let o=a;o<=i;o++){let c=document.createElement("button");c.textContent=o,o===t?c.classList.add("hero__btn-active"):c.classList.remove("hero__btn-active"),c.addEventListener("click",()=>{l(t=o),o===a+e&&o<51-e?n=Math.min(n+1,47):o===a+e-1&&a>1?n=Math.max(1,a-1):o===i&&o<51?n=o:o===a&&a>1&&(n=Math.max(1,o-5+1)),r()}),s.paginationContainer.appendChild(c)}if(i<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",s.paginationContainer.appendChild(e);let a=document.createElement("button");a.textContent=51,51===t?a.classList.add("hero__btn-active"):a.classList.remove("hero__btn-active"),a.addEventListener("click",()=>{n=47,l(t=51)}),s.paginationContainer.appendChild(a)}}l(t);const c=document.querySelector(".header__search"),d=document.querySelector("#hero__items");async function m(e){let t=[],a=0,n=1;try{for(;a<n;){var s;let i=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${a}`),o=await i.json(),l=(null==(s=o._embedded)?void 0:s.events)||[];t.push(...l),n=o.page.totalPages,a++}}catch(e){console.log(e)}return t}async function h(e){let t=(await m(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){d.innerHTML="<h2>There are no such events</h2>";return}var a=t.slice(0,20);let n=`
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
    `;d.innerHTML=Handlebars.compile(n)(a)}c.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await h(c.value.trim())},500)});const _=document.getElementById("themeToggle");_.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",_.classList.add("header__btn-light"),_.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",_.classList.add("header__btn-dark"),_.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=event_booster-project4.80425d25.js.map
