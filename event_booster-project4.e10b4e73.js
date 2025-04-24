let e;function t(e,t){return Math.random()*(t-e)+e}document.querySelectorAll(".star").forEach((e,n)=>{e.style.left=`${t(0,100)}%`,e.style.top=`${t(0,100)}%`;let s=t(2,4);e.style.width=`${s}px`,e.style.height=`${s}px`,e.style.animationDelay=`${.5*n}s`});let n=1,s=[],o=1;const a={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},i=`
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
`,l=Handlebars.compile(i);async function c(e){try{if(51!=e){var t;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(n.ok||console.error("Помилка API"),!(s=(null==(t=(await n.json())._embedded)?void 0:t.events)||[]).length){a.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',a.paginationContainer.innerHTML="";return}(function(){let e=l({items:s.map(e=>{var t,n,s,o,a;let i=e.images||[],l=i.find(e=>"16_9"===e.ratio&&e.width>300)||i[0];return{id:e.id,name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(a=e._embedded)||null==(o=a.venues)||null==(s=o[0])?void 0:s.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});a.itemsContainer.innerHTML=e})(),r()}else a.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',r()}catch(e){console.error("Помилка:",e),a.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function r(){a.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=o,s=Math.min(t+5-1,51);for(let i=t;i<=s;i++){let l=document.createElement("button");l.classList.add("hero__btn"),l.textContent=i,i===n?l.classList.add("hero__btn-active"):l.classList.remove("hero__btn-active"),l.addEventListener("click",()=>{c(n=i),i===t+e&&i<51-e?o=Math.min(o+1,47):i===t+e-1&&t>1?o=Math.max(1,t-1):i===s&&i<51?o=i:i===t&&t>1&&(o=Math.max(1,i-5+1)),r()}),a.paginationContainer.appendChild(l)}if(s<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",a.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===n?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{o=47,c(n=51)}),a.paginationContainer.appendChild(t)}}c(n);const d=document.querySelector(".header__search"),m=document.querySelector("#hero__items");async function u(e){let t=[],n=0,s=1;try{for(;n<s;){var o;let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${n}`),i=await a.json(),l=(null==(o=i._embedded)?void 0:o.events)||[];t.push(...l),s=i.page.totalPages,n++}}catch(e){console.log(e)}return t}async function h(e){let t=(await u(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){m.innerHTML="<h2>There are no such events</h2>";return}var n=t.slice(0,20);let s=`
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
    `;m.innerHTML=Handlebars.compile(s)(n)}d.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await h(d.value.trim())},500)});const p=document.getElementById("themeToggle");p.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",p.classList.add("header__btn-light"),p.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",p.classList.add("header__btn-dark"),p.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const g={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function _(){g.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}g.openModalBtn.addEventListener("click",e=>{e.preventDefault(),_()}),g.closeModalBtn.addEventListener("click",_);const v={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function y(){v.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}v.openModalBtn.addEventListener("click",y),v.closeModalBtn.addEventListener("click",y);const f=document.querySelector(".signIn__btn-eye"),L=document.querySelector(".signIn__eye use"),b=document.querySelector("#signIn-password");let w=!1;f.addEventListener("click",()=>{w?(L.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),b.type="password",w=!1):(L.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),b.type="text",w=!0)});const E=document.querySelector("#eye-password"),M=document.querySelector("#eye-pass use"),k=document.querySelector("#signUp-password");let C=!1;E.addEventListener("click",e=>{e.preventDefault(),C?(M.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),k.type="password",C=!1):(M.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),k.type="text",C=!0)});const q=document.querySelector("#eye-confirm"),S=document.querySelector("#eye-conf use"),T=document.querySelector("#signUp-confirm");let H=!1;q.addEventListener("click",e=>{e.preventDefault(),H?(S.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),T.type="password",H=!1):(S.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),T.type="text",H=!0)});
//# sourceMappingURL=event_booster-project4.e10b4e73.js.map
