let e,t;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=a.parcelRequire42eb;function l(e,t){return Math.random()*(t-e)+e}null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},a.parcelRequire42eb=s),s.register,Object.assign(s.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((e,t)=>{e.style.left=`${l(0,100)}%`,e.style.top=`${l(0,100)}%`;let a=l(2,4);e.style.width=`${a}px`,e.style.height=`${a}px`,e.style.animationDelay=`${.5*t}s`});let i=1,r=[],c=1;const d={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},m=`
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
`,u=Handlebars.compile(m);async function _(e){try{if(51!=e){var t;let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(a.ok||console.error("Помилка API"),!(r=(null==(t=(await a.json())._embedded)?void 0:t.events)||[]).length){d.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',d.paginationContainer.innerHTML="";return}(function(){let e=u({items:r.map(e=>{var t,a,n,o,s;let l=e.images||[],i=l.find(e=>"16_9"===e.ratio&&e.width>300)||l[0];return{id:e.id,name:e.name||"Без назви",date:(null==(a=e.dates)||null==(t=a.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(s=e._embedded)||null==(o=s.venues)||null==(n=o[0])?void 0:n.name)||"Місце не вказане",image:{url:i?i.url:"#"}}})});d.itemsContainer.innerHTML=e})(),p()}else d.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',p()}catch(e){console.error("Помилка:",e),d.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function p(){d.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=c,a=Math.min(t+5-1,51);for(let n=t;n<=a;n++){let o=document.createElement("button");o.classList.add("hero__btn"),o.textContent=n,n===i?o.classList.add("hero__btn-active"):o.classList.remove("hero__btn-active"),o.addEventListener("click",()=>{_(i=n),n===t+e&&n<51-e?c=Math.min(c+1,47):n===t+e-1&&t>1?c=Math.max(1,t-1):n===a&&n<51?c=n:n===t&&t>1&&(c=Math.max(1,n-5+1)),p()}),d.paginationContainer.appendChild(o)}if(a<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",d.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===i?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{c=47,_(i=51)}),d.paginationContainer.appendChild(t)}}_(i);const h=document.querySelector(".header__search"),v=document.querySelector("#hero__items");async function g(e){let t=[],a=0,n=1;try{for(;a<n;){var o;let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${a}`),l=await s.json(),i=(null==(o=l._embedded)?void 0:o.events)||[];t.push(...i),n=l.page.totalPages,a++}}catch(e){console.log(e)}return t}async function y(e){let t=(await g(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){v.innerHTML="<h2>There are no such events</h2>";return}var a=t.slice(0,20);let n=`
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
    `;v.innerHTML=Handlebars.compile(n)(a)}h.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await y(h.value.trim())},500)});const b=document.getElementById("themeToggle");b.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",b.classList.add("header__btn-light"),b.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",b.classList.add("header__btn-dark"),b.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const f={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function L(){f.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}f.openModalBtn.addEventListener("click",e=>{e.preventDefault(),L()}),f.closeModalBtn.addEventListener("click",L);const k={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function E(){k.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}k.openModalBtn.addEventListener("click",E),k.closeModalBtn.addEventListener("click",E);const w=document.querySelector(".signIn__btn-eye"),S=document.querySelector(".signIn__eye use"),T=document.querySelector("#signIn-password");let M=!1;w.addEventListener("click",()=>{M?(S.setAttribute("href","./images/tabler-icon-eye-closed.png"),T.type="password",M=!1):(S.setAttribute("href","./images/tabler-icon-open-eye.png"),T.type="text",M=!0)});const q=document.querySelector("#eye-password"),C=document.querySelector("#eye-pass use"),H=document.querySelector("#signUp-password");let x=!1;q.addEventListener("click",e=>{e.preventDefault(),x?(C.setAttribute("href","./images/tabler-icon-eye-closed.png"),H.type="password",x=!1):(C.setAttribute("href","./images/tabler-icon-open-eye.png"),H.type="text",x=!0),H.focus()});const A=document.querySelector("#eye-confirm"),I=document.querySelector("#eye-conf use"),B=document.querySelector("#signUp-confirm");let U=!1;A.addEventListener("click",e=>{e.preventDefault(),U?(I.setAttribute("href","./images/tabler-icon-eye-closed.png"),B.type="password",U=!1):(I.setAttribute("href","./images/tabler-icon-open-eye.png"),B.type="text",U=!0),B.focus()});const $="https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext",D=document.querySelector(".header__country"),R=document.querySelector(".hero__list");async function j(e){let t;R.innerHTML="",t=e?`${$}&size=20&page=0&countryCode=${e.toUpperCase()}`:`${$}&size=20&page=0`;try{var a;let e=await fetch(t),n=(null==(a=(await e.json())._embedded)?void 0:a.events)||[];if(0===n.length){R.innerHTML='<li class="hero__country-message">Подій не знайдено.</li>';return}R.innerHTML=n.map(e=>`
          <li class='hero__item' data-id="${e.id}">
            <div class='hero__img-wrap'>
              <img src="${e.images[0].url}" alt="${e.name}" class="hero__img-teg"/>
            </div>
            <h2 class='hero__name'>${e.name}</h2>
            <p class='hero__date'>${e.dates.start.localDate}</p>
            <span class='hero__place'>
              <svg class='hero__place-icon' width='7' height='10'>
                <use href='#'></use>
              </svg>
              ${e._embedded.venues[0].name}
            </span>
          </li>
        `).join("")}catch(e){console.error("Помилка при завантаженні подій:",e),R.innerHTML="<li>Не вдалося знайти події.</li>"}}D.addEventListener("input",e=>{clearTimeout(t),t=setTimeout(async()=>{await j(D.value.trim())},500)});const N={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},O=`<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
    <button class="modal__btn-close">
      <img href="./images/close.png" alt="close">
    </button>
    <img src='{{image}}' alt='Poster Image' class='modal__poster-small' />
    <div class="modal__main-wrap">
        <div class='modal__poster-img'>
          <img src='{{image}}' alt='Poster Image' class='modal__poster-big' />
        </div>
          <div class='modal__wrap'>
            <div class='modal__block'>
                <h2 class='modal__title'>INFO</h2>
                <p class='modal__text'>{{info}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHEN</h2>
                <p class='modal__text'>{{date}}<br />{{time}}
                {{location}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHERE</h2>
                <p class='modal__text'>{{city}},
                {{country}}<br />{{venue}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>WHO</h2>
                <p class='modal__text'>{{artists}}</p>
            </div>
            <div class='modal__block'>
                <h2 class='modal__title'>PRICES</h2>
                <p class='modal__text'><img class="modal__icon" href="/images/ticket1.png" alt="tickets"> {{priceStandard}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
                <p class='modal__text'><img class="modal__icon" href="/images/ticket1.png" alt="tickets"> {{priceVIP}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
            </div>
            <div class='modal__btn-wrap'>
              <button class='modal__button'>MORE FROM THIS AUTHOR</button>
              <button class='modal__button' data-id="{{id}}" id="addBtn">ADD TO FAVOURITE</button>
            </div>
         </div>
    </div>
  </div>
</div>`,z=Handlebars.compile(O);async function F(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),a=await t.json();console.log(a);let n=a?function(e){var t,a,n,o,s,l,i,r,c,d,m,u,_,p,h,v,g,y,b,f,L,k,E,w,S,T,M;return{id:e.id,image:(null==(a=e.images)||null==(t=a[0])?void 0:t.url)||"",info:(M=e.info,M?(M.match(/[^.!?]+[.!?]+/g)||[M]).slice(0,2).join(" ").trim()||M:"No aleviable"),date:(null==(o=e.dates)||null==(n=o.start)?void 0:n.localDate)||"N/A",time:(null==(l=e.dates)||null==(s=l.start)?void 0:s.localTime)?e.dates.start.localTime.slice(0,5):"N/A",location:(null==(c=e._embedded)||null==(r=c.venues)||null==(i=r[0])?void 0:i.name)||"N/A",city:(null==(_=e._embedded)||null==(u=_.venues)||null==(m=u[0])||null==(d=m.city)?void 0:d.name)||"N/A",country:(null==(g=e._embedded)||null==(v=g.venues)||null==(h=v[0])||null==(p=h.country)?void 0:p.name)||"N/A",venue:(null==(f=e._embedded)||null==(b=f.venues)||null==(y=b[0])?void 0:y.name)||"N/A",artists:(null==(k=e._embedded)||null==(L=k.attractions)?void 0:L.map(e=>e.name).join(", "))||"Unknown artist",priceStandard:(null==(w=e.priceRanges)||null==(E=w[0])?void 0:E.min)?`${e.priceRanges[0].min} USD`:"50 USD",priceVIP:(null==(T=e.priceRanges)||null==(S=T[0])?void 0:S.max)?`${e.priceRanges[0].max} USD`:"70 USD"}}(a):{},o=z(n);N.modalContainer.innerHTML=o;let s=document.querySelector(".backdrop__poster"),l=document.querySelector(".modal__btn-close");return s.classList.remove("is-hidden"),l.addEventListener("click",()=>{s.classList.add("is-hidden"),N.modalContainer.innerHTML=""}),s.addEventListener("click",e=>{e.target===s&&(s.classList.add("is-hidden"),N.modalContainer.innerHTML="")}),n}catch(e){console.error(e,"Error with fetch current id item")}}N.dataCards?N.dataCards.addEventListener("click",async e=>{let t=e.target.closest(".hero__item");if(t){let e=t.dataset.id;await F(e)}}):console.error("Element not found");const P=document.querySelectorAll(".footer__team-nav-btn"),J=document.querySelectorAll(".footer__team-item"),K={openModalBtn:document.querySelector("[data-team-open]"),closeModalBtn:document.querySelector(".footer__close-team-modal"),modal:document.querySelector("[data-team]")};function W(){K.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function V(e){J.forEach(e=>{e.classList.add("hide")});let t=document.querySelector(`.footer__team-item:nth-child(${e})`);t&&t.classList.remove("hide")}K.openModalBtn.addEventListener("click",e=>{W(),V(1)}),K.closeModalBtn.addEventListener("click",W),P.forEach(e=>{e.addEventListener("click",e=>{V(parseInt(e.target.id)),P.forEach(e=>e.classList.remove("footer__btn-active")),e.target.classList.add("footer__btn-active")})});
//# sourceMappingURL=event_booster-project4.a8f31a0a.js.map
