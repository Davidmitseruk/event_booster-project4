let e,t;var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},s={},o=n.parcelRequire42eb;function l(e,t){return Math.random()*(t-e)+e}null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in s){var t=s[e];delete s[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){s[e]=t},n.parcelRequire42eb=o),o.register,Object.assign(o.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((e,t)=>{e.style.left=`${l(0,100)}%`,e.style.top=`${l(0,100)}%`;let n=l(2,4);e.style.width=`${n}px`,e.style.height=`${n}px`,e.style.animationDelay=`${.5*t}s`});let i=1,c=[],r=1;const d={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},m=`
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
`,u=Handlebars.compile(m);async function _(e){try{if(51!=e){var t;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(n.ok||console.error("Помилка API"),!(c=(null==(t=(await n.json())._embedded)?void 0:t.events)||[]).length){d.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',d.paginationContainer.innerHTML="";return}(function(){let e=u({items:c.map(e=>{var t,n,a,s,o;let l=e.images||[],i=l.find(e=>"16_9"===e.ratio&&e.width>300)||l[0];return{id:e.id,name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(o=e._embedded)||null==(s=o.venues)||null==(a=s[0])?void 0:a.name)||"Місце не вказане",image:{url:i?i.url:"#"}}})});d.itemsContainer.innerHTML=e})(),p()}else d.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',p()}catch(e){console.error("Помилка:",e),d.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function p(){d.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=r,n=Math.min(t+5-1,51);for(let a=t;a<=n;a++){let s=document.createElement("button");s.classList.add("hero__btn"),s.textContent=a,a===i?s.classList.add("hero__btn-active"):s.classList.remove("hero__btn-active"),s.addEventListener("click",()=>{_(i=a),a===t+e&&a<51-e?r=Math.min(r+1,47):a===t+e-1&&t>1?r=Math.max(1,t-1):a===n&&a<51?r=a:a===t&&t>1&&(r=Math.max(1,a-5+1)),p()}),d.paginationContainer.appendChild(s)}if(n<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",d.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===i?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{r=47,_(i=51)}),d.paginationContainer.appendChild(t)}}_(i);const h=document.querySelector(".header__search"),v=document.querySelector("#hero__items");async function g(e){let t=[],n=0,a=1;try{for(;n<a;){var s;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${n}`),l=await o.json(),i=(null==(s=l._embedded)?void 0:s.events)||[];t.push(...i),a=l.page.totalPages,n++}}catch(e){console.log(e)}return t}async function y(e){let t=(await g(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){v.innerHTML="<h2>There are no such events</h2>";return}var n=t.slice(0,20);let a=`
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
    `;v.innerHTML=Handlebars.compile(a)(n)}h.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await y(h.value.trim())},500)});const b=document.getElementById("themeToggle");b.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",b.classList.add("header__btn-light"),b.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",b.classList.add("header__btn-dark"),b.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const f={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function L(){f.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}f.openModalBtn.addEventListener("click",e=>{e.preventDefault(),L()}),f.closeModalBtn.addEventListener("click",L);const E={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function k(){E.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}E.openModalBtn.addEventListener("click",k),E.closeModalBtn.addEventListener("click",k);const w=document.querySelector(".signIn__btn-eye"),S=document.querySelector(".signIn__eye use"),T=document.querySelector("#signIn-password");let M=!1;w.addEventListener("click",()=>{M?(S.setAttribute("href","./images/tabler-icon-eye-closed.png"),T.type="password",M=!1):(S.setAttribute("href","./images/tabler-icon-open-eye.png"),T.type="text",M=!0)});const q=document.querySelector("#eye-password"),C=document.querySelector("#eye-pass use"),H=document.querySelector("#signUp-password");let x=!1;q.addEventListener("click",e=>{e.preventDefault(),x?(C.setAttribute("href","./images/tabler-icon-eye-closed.png"),H.type="password",x=!1):(C.setAttribute("href","./images/tabler-icon-open-eye.png"),H.type="text",x=!0),H.focus()});const A=document.querySelector("#eye-confirm"),I=document.querySelector("#eye-conf use"),B=document.querySelector("#signUp-confirm");let U=!1;A.addEventListener("click",e=>{e.preventDefault(),U?(I.setAttribute("href","./images/tabler-icon-eye-closed.png"),B.type="password",U=!1):(I.setAttribute("href","./images/tabler-icon-open-eye.png"),B.type="text",U=!0),B.focus()});const D=document.querySelector(".header__country"),$=document.querySelector("#hero__items");async function R(e){if(!e){$.innerHTML="<li>Введіть код країни.</li>";return}fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0&countryCode=${e.toUpperCase()}`).then(e=>e.json()).then(e=>{var t;let n=(null==(t=e._embedded)?void 0:t.events)||[];if(0===n.length){$.innerHTML="<li>Подій не знайдено.</li>";return}$.innerHTML=n.map(e=>`
        <div class='hero__template'>
          <ul class='hero__list'>
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
          </ul>
        </div>
      `).join("")}).catch(e=>{console.error("Помилка при завантаженні подій:",e),$.innerHTML="<li>Не вдалося знайти події.</li>"})}D.addEventListener("input",e=>{clearTimeout(t),t=setTimeout(async()=>{await R(D.value.trim())},500)});const j={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},N=`<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
    <button class="modal__btn-close">
      <svg class="modal__close-icon">
        <use href="../src/images/symbol-defs.svg#icon-close-icon"></use>
      </svg>
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
                <p class='modal__text'><svg class="modal__icon">
                  <use href="/src/images/symbol-defs.svg#icon-ticket1icon"></use>
                </svg> {{priceStandard}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
                <p class='modal__text'><svg class="modal__icon">
                  <use href="/src/images/symbol-defs.svg#icon-ticket1icon"></use>
                </svg> {{priceVIP}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
            </div>
            <div class='modal__btn-wrap'>
              <button class='modal__button'>MORE FROM THIS AUTHOR</button>
              <button class='modal__button' data-id="{{id}}" id="addBtn">ADD TO FAVOURITE</button>
            </div>
         </div>
    </div>
  </div>
</div>`,O=Handlebars.compile(N);async function F(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),n=await t.json();console.log(n);let a=n?function(e){var t,n,a,s,o,l,i,c,r,d,m,u,_,p,h,v,g,y,b,f,L,E,k,w,S,T,M;return{id:e.id,image:(null==(n=e.images)||null==(t=n[0])?void 0:t.url)||"",info:(M=e.info,M?(M.match(/[^.!?]+[.!?]+/g)||[M]).slice(0,2).join(" ").trim()||M:"No aleviable"),date:(null==(s=e.dates)||null==(a=s.start)?void 0:a.localDate)||"N/A",time:(null==(l=e.dates)||null==(o=l.start)?void 0:o.localTime)?e.dates.start.localTime.slice(0,5):"N/A",location:(null==(r=e._embedded)||null==(c=r.venues)||null==(i=c[0])?void 0:i.name)||"N/A",city:(null==(_=e._embedded)||null==(u=_.venues)||null==(m=u[0])||null==(d=m.city)?void 0:d.name)||"N/A",country:(null==(g=e._embedded)||null==(v=g.venues)||null==(h=v[0])||null==(p=h.country)?void 0:p.name)||"N/A",venue:(null==(f=e._embedded)||null==(b=f.venues)||null==(y=b[0])?void 0:y.name)||"N/A",artists:(null==(E=e._embedded)||null==(L=E.attractions)?void 0:L.map(e=>e.name).join(", "))||"Unknown artist",priceStandard:(null==(w=e.priceRanges)||null==(k=w[0])?void 0:k.min)?`${e.priceRanges[0].min} USD`:"50 USD",priceVIP:(null==(T=e.priceRanges)||null==(S=T[0])?void 0:S.max)?`${e.priceRanges[0].max} USD`:"70 USD"}}(n):{},s=O(a);j.modalContainer.innerHTML=s;let o=document.querySelector(".backdrop__poster");return o.classList.remove("is-hidden"),o.addEventListener("click",e=>{e.target===o&&(o.classList.add("is-hidden"),j.modalContainer.innerHTML="")}),a}catch(e){console.error(e,"Error with fetch current id item")}}j.dataCards?j.dataCards.addEventListener("click",async e=>{let t=e.target.closest(".hero__item");if(t){let e=t.dataset.id;await F(e)}}):console.error("Element not found");const P=document.querySelectorAll(".footer__team-nav-btn"),z=document.querySelectorAll(".footer__team-item"),J={openModalBtn:document.querySelector("[data-team-open]"),closeModalBtn:document.querySelector(".footer__close-team-modal"),modal:document.querySelector("[data-team]")};function K(){J.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function W(e){z.forEach(e=>{e.classList.add("hide")});let t=document.querySelector(`.footer__team-item:nth-child(${e})`);t&&t.classList.remove("hide")}J.openModalBtn.addEventListener("click",e=>{K(),W(1)}),J.closeModalBtn.addEventListener("click",K),P.forEach(e=>{e.addEventListener("click",e=>{W(parseInt(e.target.id)),P.forEach(e=>e.classList.remove("active")),e.target.classList.add("active")})});
//# sourceMappingURL=event_booster-project4.eded2ffb.js.map
