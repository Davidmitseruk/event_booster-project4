let e;function t(e,t){return Math.random()*(t-e)+e}document.querySelectorAll(".star").forEach((e,n)=>{e.style.left=`${t(0,100)}%`,e.style.top=`${t(0,100)}%`;let a=t(2,4);e.style.width=`${a}px`,e.style.height=`${a}px`,e.style.animationDelay=`${.5*n}s`});let n=1,a=[],s=1;const o={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},i=`
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
`,l=Handlebars.compile(i);async function c(e){try{if(51!=e){var t;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(n.ok||console.error("Помилка API"),!(a=(null==(t=(await n.json())._embedded)?void 0:t.events)||[]).length){o.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',o.paginationContainer.innerHTML="";return}(function(){let e=l({items:a.map(e=>{var t,n,a,s,o;let i=e.images||[],l=i.find(e=>"16_9"===e.ratio&&e.width>300)||i[0];return{id:e.id,name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(o=e._embedded)||null==(s=o.venues)||null==(a=s[0])?void 0:a.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});o.itemsContainer.innerHTML=e})(),r()}else o.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',r()}catch(e){console.error("Помилка:",e),o.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function r(){o.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=s,a=Math.min(t+5-1,51);for(let i=t;i<=a;i++){let l=document.createElement("button");l.classList.add("hero__btn"),l.textContent=i,i===n?l.classList.add("hero__btn-active"):l.classList.remove("hero__btn-active"),l.addEventListener("click",()=>{c(n=i),i===t+e&&i<51-e?s=Math.min(s+1,47):i===t+e-1&&t>1?s=Math.max(1,t-1):i===a&&i<51?s=i:i===t&&t>1&&(s=Math.max(1,i-5+1)),r()}),o.paginationContainer.appendChild(l)}if(a<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",o.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===n?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{s=47,c(n=51)}),o.paginationContainer.appendChild(t)}}c(n);const d=document.querySelector(".header__search"),m=document.querySelector("#hero__items");async function h(e){let t=[],n=0,a=1;try{for(;n<a;){var s;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${n}`),i=await o.json(),l=(null==(s=i._embedded)?void 0:s.events)||[];t.push(...l),a=i.page.totalPages,n++}}catch(e){console.log(e)}return t}async function u(e){let t=(await h(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){m.innerHTML="<h2>There are no such events</h2>";return}var n=t.slice(0,20);let a=`
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
    `;m.innerHTML=Handlebars.compile(a)(n)}d.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await u(d.value.trim())},500)});const _=document.getElementById("themeToggle");_.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",_.classList.add("header__btn-light"),_.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",_.classList.add("header__btn-dark"),_.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const p={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function g(){p.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}p.openModalBtn.addEventListener("click",e=>{e.preventDefault(),g()}),p.closeModalBtn.addEventListener("click",g);const v={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function L(){v.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}v.openModalBtn.addEventListener("click",L),v.closeModalBtn.addEventListener("click",L);
//# sourceMappingURL=event_booster-project4.5bebbcf6.js.map
