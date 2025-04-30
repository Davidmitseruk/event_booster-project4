let e,t;var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},o={},s=n.parcelRequire42eb;function l(e,t){return Math.random()*(t-e)+e}null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},n.parcelRequire42eb=s),s.register,Object.assign(s.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((e,t)=>{e.style.left=`${l(0,100)}%`,e.style.top=`${l(0,100)}%`;let n=l(2,4);e.style.width=`${n}px`,e.style.height=`${n}px`,e.style.animationDelay=`${.5*t}s`});let i=1,r=[],c=1;const d={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},m=`
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
`,u=Handlebars.compile(m);async function _(e){try{if(51!=e){var t;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(n.ok||console.error("Помилка API"),!(r=(null==(t=(await n.json())._embedded)?void 0:t.events)||[]).length){d.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',d.paginationContainer.innerHTML="";return}(function(){let e=u({items:r.map(e=>{var t,n,a,o,s;let l=e.images||[],i=l.find(e=>"16_9"===e.ratio&&e.width>300)||l[0];return{id:e.id,name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(s=e._embedded)||null==(o=s.venues)||null==(a=o[0])?void 0:a.name)||"Місце не вказане",image:{url:i?i.url:"#"}}})});d.itemsContainer.innerHTML=e})(),p()}else d.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',p()}catch(e){console.error("Помилка:",e),d.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function p(){d.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=c,n=Math.min(t+5-1,51);for(let a=t;a<=n;a++){let o=document.createElement("button");o.classList.add("hero__btn"),o.textContent=a,a===i?o.classList.add("hero__btn-active"):o.classList.remove("hero__btn-active"),o.addEventListener("click",()=>{_(i=a),a===t+e&&a<51-e?c=Math.min(c+1,47):a===t+e-1&&t>1?c=Math.max(1,t-1):a===n&&a<51?c=a:a===t&&t>1&&(c=Math.max(1,a-5+1)),p()}),d.paginationContainer.appendChild(o)}if(n<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",d.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===i?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{c=47,_(i=51)}),d.paginationContainer.appendChild(t)}}_(i);const h=document.querySelector(".header__search"),v=document.querySelector("#hero__items");async function g(e){let t=[],n=0,a=1;try{for(;n<a;){var o;let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${n}`),l=await s.json(),i=(null==(o=l._embedded)?void 0:o.events)||[];t.push(...i),a=l.page.totalPages,n++}}catch(e){console.log(e)}return t}async function y(e){let t=(await g(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){v.innerHTML="<h2>There are no such events</h2>";return}var n=t.slice(0,20);let a=`
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
    `;v.innerHTML=Handlebars.compile(a)(n)}h.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await y(h.value.trim())},500)});const f=document.getElementById("themeToggle");f.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",f.classList.add("header__btn-light"),f.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",f.classList.add("header__btn-dark"),f.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const b={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function L(){b.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}b.openModalBtn.addEventListener("click",e=>{e.preventDefault(),L()}),b.closeModalBtn.addEventListener("click",L);const k={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function w(){k.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}k.openModalBtn.addEventListener("click",w),k.closeModalBtn.addEventListener("click",w);const E=document.querySelector(".signIn__btn-eye"),S=document.querySelector(".signIn__eye use"),T=document.querySelector("#signIn-password");let M=!1;E.addEventListener("click",()=>{M?(S.setAttribute("href","./images/tabler-icon-eye-closed.png"),T.type="password",M=!1):(S.setAttribute("href","./images/tabler-icon-open-eye.png"),T.type="text",M=!0)});const q=document.querySelector("#eye-password"),H=document.querySelector("#eye-pass use"),C=document.querySelector("#signUp-password");let x=!1;q.addEventListener("click",e=>{e.preventDefault(),x?(H.setAttribute("href","./images/tabler-icon-eye-closed.png"),C.type="password",x=!1):(H.setAttribute("href","./images/tabler-icon-open-eye.png"),C.type="text",x=!0),C.focus()});const A=document.querySelector("#eye-confirm"),I=document.querySelector("#eye-conf use"),B=document.querySelector("#signUp-confirm");let D=!1;A.addEventListener("click",e=>{e.preventDefault(),D?(I.setAttribute("href","./images/tabler-icon-eye-closed.png"),B.type="password",D=!1):(I.setAttribute("href","./images/tabler-icon-open-eye.png"),B.type="text",D=!0),B.focus()});const U=document.querySelector(".header__country"),$=document.querySelector("#hero__items");async function R(e){if(!e){$.innerHTML="<li>Введіть код країни.</li>";return}fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0&countryCode=${e.toUpperCase()}`).then(e=>e.json()).then(e=>{var t;let n=(null==(t=e._embedded)?void 0:t.events)||[];if(0===n.length){$.innerHTML="<li>Подій не знайдено.</li>";return}$.innerHTML=n.map(e=>`
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
      `).join("")}).catch(e=>{console.error("Помилка при завантаженні подій:",e),$.innerHTML="<li>Не вдалося знайти події.</li>"})}U.addEventListener("input",e=>{clearTimeout(t),t=setTimeout(async()=>{await R(U.value.trim())},500)});const N={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},j=`<div class='backdrop__poster is-hidden'>
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
</div>`,O=Handlebars.compile(j);async function F(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),n=await t.json();console.log(n);let a=n?P(n):{},o=O(a);N.modalContainer.innerHTML=o;let s=document.querySelector(".backdrop__poster");return s.classList.remove("is-hidden"),s.addEventListener("click",e=>{e.target===s&&(s.classList.add("is-hidden"),N.modalContainer.innerHTML="")}),a}catch(e){console.error(e,"Error with fetch current id item")}}function P(e){var t,n,a,o,s,l,i,r,c,d,m,u,_,p,h,v,g,y,f,b,L,k,w,E,S,T,M;return{id:e.id,image:(null==(n=e.images)||null==(t=n[0])?void 0:t.url)||"",info:(M=e.info,M?(M.match(/[^.!?]+[.!?]+/g)||[M]).slice(0,2).join(" ").trim()||M:"No aleviable"),date:(null==(o=e.dates)||null==(a=o.start)?void 0:a.localDate)||"N/A",time:(null==(l=e.dates)||null==(s=l.start)?void 0:s.localTime)?e.dates.start.localTime.slice(0,5):"N/A",location:(null==(c=e._embedded)||null==(r=c.venues)||null==(i=r[0])?void 0:i.name)||"N/A",city:(null==(_=e._embedded)||null==(u=_.venues)||null==(m=u[0])||null==(d=m.city)?void 0:d.name)||"N/A",country:(null==(g=e._embedded)||null==(v=g.venues)||null==(h=v[0])||null==(p=h.country)?void 0:p.name)||"N/A",venue:(null==(b=e._embedded)||null==(f=b.venues)||null==(y=f[0])?void 0:y.name)||"N/A",artists:(null==(k=e._embedded)||null==(L=k.attractions)?void 0:L.map(e=>e.name).join(", "))||"Unknown artist",priceStandard:(null==(E=e.priceRanges)||null==(w=E[0])?void 0:w.min)?`${e.priceRanges[0].min} USD`:"N/A",priceVIP:(null==(T=e.priceRanges)||null==(S=T[0])?void 0:S.max)?`${e.priceRanges[0].max} USD`:"N/A"}}N.dataCards?N.dataCards.addEventListener("click",async e=>{let t=e.target.closest(".hero__item");if(t){let e=t.dataset.id;await F(e);let n=document.querySelector(".fav__list"),a=[];document.body.addEventListener("click",async e=>{if(e.target&&"addBtn"===e.target.id)try{console.log(e.target.dataset.id);let t=await F(e.target.dataset.id),o=P(t);console.log(o),a.push(o),function(e){if(0===e.length){n.innerHTML="<li><p>There are not favourites events</p></li>";return}let t=e.filter(e=>{var t,n,a,o,s;return(null==e||null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)&&(null==e||null==(s=e._embedded)||null==(o=s.venues)||null==(a=o[0])?void 0:a.name)}),a=`
         {{#each this}}
    <li class='fav__item' data-id="{{id}}">
      <div class='fav__img-wrap'>
        <img src="{{image}}" alt="{{info}}" class="hero__img-teg"/>
      </div>
      <h2 class='fav__name'>{{info}}</h2>
      <p class='fav__date'>{{date}}</p>
      <span class='fav__place'>
            <img src="./images/gps.png" alt="">
        {{venue}}
      </span>
    </li>
  {{/each}}
  `,o=Handlebars.compile(a)(t);n.insertAdjacentHTML("beforeend",o)}(a)}catch(e){console.log(e)}})}}):console.error("Element not found");const z=document.querySelectorAll(".footer__team-nav-btn"),J={openModalBtn:document.querySelector("[data-team-open]"),closeModalBtn:document.querySelector(".footer__close-team-modal"),modal:document.querySelector("[data-team]")};function K(){J.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function W(e){let t=team.find(t=>t.id===e);document.querySelector("#team-name").innerHTML=t.name,document.querySelector("#team-position").innerHTML=t.position,document.querySelector("#team-contribution").innerHTML=t.contribution,document.querySelector(".footer__team-photo").src=t.image,document.querySelector("#team-additionally").innerHTML=t.additionally}J.openModalBtn.addEventListener("click",e=>{K(),W(1)}),J.closeModalBtn.addEventListener("click",K),z.forEach(e=>{e.addEventListener("click",e=>{W(parseInt(e.target.id))})});
//# sourceMappingURL=event_booster-project4.e2397c45.js.map
