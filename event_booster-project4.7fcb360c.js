let t,n;var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},l=a.parcelRequire42eb;function i(t,n){return Math.random()*(n-t)+t}null==l&&((l=function(t){if(t in s)return s[t].exports;if(t in o){var n=o[t];delete o[t];var a={id:t,exports:{}};return s[t]=a,n.call(a.exports,a,a.exports),a.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,n){o[t]=n},a.parcelRequire42eb=l),l.register,Object.assign(l.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((t,n)=>{t.style.left=`${i(0,100)}%`,t.style.top=`${i(0,100)}%`;let a=i(2,4);t.style.width=`${a}px`,t.style.height=`${a}px`,t.style.animationDelay=`${.5*n}s`});let r=1,c=[],d=1;const m={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},u=`
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
`,_=Handlebars.compile(u);async function p(t){try{if(51!=t){var n;let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${t-1}`);if(a.ok||console.error("Помилка API"),!(c=(null==(n=(await a.json())._embedded)?void 0:n.events)||[]).length){m.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',m.paginationContainer.innerHTML="";return}(function(){let t=_({items:c.map(t=>{var n,a,s,o,l;let i=t.images||[],r=i.find(t=>"16_9"===t.ratio&&t.width>300)||i[0];return{id:t.id,name:t.name||"Без назви",date:(null==(a=t.dates)||null==(n=a.start)?void 0:n.localDate)||"Дата не вказана",place:(null==(l=t._embedded)||null==(o=l.venues)||null==(s=o[0])?void 0:s.name)||"Місце не вказане",image:{url:r?r.url:"#"}}})});m.itemsContainer.innerHTML=t})(),h()}else m.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',h()}catch(t){console.error("Помилка:",t),m.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function h(){m.paginationContainer.innerHTML="";let t=Math.floor(2.5),n=d,a=Math.min(n+5-1,51);for(let s=n;s<=a;s++){let o=document.createElement("button");o.classList.add("hero__btn"),o.textContent=s,s===r?o.classList.add("hero__btn-active"):o.classList.remove("hero__btn-active"),o.addEventListener("click",()=>{p(r=s),s===n+t&&s<51-t?d=Math.min(d+1,47):s===n+t-1&&n>1?d=Math.max(1,n-1):s===a&&s<51?d=s:s===n&&n>1&&(d=Math.max(1,s-5+1)),h()}),m.paginationContainer.appendChild(o)}if(a<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",m.paginationContainer.appendChild(t);let n=document.createElement("button");n.classList.add("hero__btn"),n.textContent=51,51===r?n.classList.add("hero__btn-active"):n.classList.remove("hero__btn-active"),n.addEventListener("click",()=>{d=47,p(r=51)}),m.paginationContainer.appendChild(n)}}p(r);const v=document.querySelector(".header__search"),g=document.querySelector("#hero__items");async function y(t){let n=[],a=0,s=1;try{for(;a<s;){var o;let l=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${t}&size=20&page=${a}`),i=await l.json(),r=(null==(o=i._embedded)?void 0:o.events)||[];n.push(...r),s=i.page.totalPages,a++}}catch(t){console.log(t)}return n}async function b(t){let n=(await y(t)).filter(n=>n.name.toLowerCase().includes(t.toLowerCase()));if(0===n.length){g.innerHTML="<h2>There are no such events</h2>";return}var a=n.slice(0,20);let s=`
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
    `;g.innerHTML=Handlebars.compile(s)(a)}v.addEventListener("input",n=>{n.preventDefault(),clearTimeout(t),t=setTimeout(async()=>{await b(v.value.trim())},500)});const f=document.getElementById("themeToggle");f.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let t=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(t.textContent="WHITE THEME",f.classList.add("header__btn-light"),f.classList.remove("header__btn-dark")):(t.textContent="BLACK THEME",f.classList.add("header__btn-dark"),f.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let t=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?t.classList.add("visible"):t.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const L={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function w(){L.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}L.openModalBtn.addEventListener("click",t=>{t.preventDefault(),w()}),L.closeModalBtn.addEventListener("click",w);const E={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function k(){E.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}E.openModalBtn.addEventListener("click",k),E.closeModalBtn.addEventListener("click",k);const T=document.querySelector(".signIn__btn-eye"),S=document.querySelector(".signIn__eye use"),M=document.querySelector("#signIn-password");let C=!1;T.addEventListener("click",()=>{C?(S.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),M.type="password",C=!1):(S.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),M.type="text",C=!0)});const q=document.querySelector("#eye-password"),x=document.querySelector("#eye-pass use"),H=document.querySelector("#signUp-password");let A=!1;q.addEventListener("click",t=>{t.preventDefault(),A?(x.setAttribute("href",`${{}}#icon-closed-eye-icon`),H.type="password",A=!1):(x.setAttribute("href",`${{}}#icon-open-eye-icon`),H.type="text",A=!0),H.focus()});const I=document.querySelector("#eye-confirm"),D=document.querySelector("#eye-conf use"),U=document.querySelector("#signUp-confirm");let R=!1;I.addEventListener("click",t=>{t.preventDefault(),R?(D.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),U.type="password",R=!1):(D.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),U.type="text",R=!0),U.focus()});const B={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},N=`<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
  <img src='{{image}}' alt='Poster Image' class='poster' />
    <div class="modal__main-wrap">
        <div class='modal__poster-img'>
        <img src='{{image}}' alt='Poster Image' class='poster' />
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
            <p class='modal__text'>{{priceStandard}}</p>
            <button>BUY TICKETS</button>
            <p class='modal__text'>{{priceVIP}}</p>
            <button>BUY TICKETS</button>
        </div>
        <div class='modal__btn-wrap'>
            <button class='modal__button'>MORE FROM THIS AUTHOR</button>
            <button class='modal__button' data-id="{{id}}">ADD TO FAVOURITE</button>
        </div>
    </div>
    </div>
  </div>
</div>`,$=Handlebars.compile(N);async function O(t){try{var n,a,s,o,l,i,r,c,d,m,u,_,p,h,v,g,y,b,f,L,w,E,k,T,S,M,C;let q=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${t}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),x=await q.json();console.log(x);let H={id:(n=x).id,image:(null==(s=n.images)||null==(a=s[0])?void 0:a.url)||"",info:n.info||"No info available",date:(null==(l=n.dates)||null==(o=l.start)?void 0:o.localDate)||"N/A",time:(null==(r=n.dates)||null==(i=r.start)?void 0:i.localTime)?n.dates.start.localTime.slice(0,5):"N/A",location:(null==(m=n._embedded)||null==(d=m.venues)||null==(c=d[0])?void 0:c.name)||"N/A",city:(null==(h=n._embedded)||null==(p=h.venues)||null==(_=p[0])||null==(u=_.city)?void 0:u.name)||"N/A",country:(null==(b=n._embedded)||null==(y=b.venues)||null==(g=y[0])||null==(v=g.country)?void 0:v.name)||"N/A",venue:(null==(w=n._embedded)||null==(L=w.venues)||null==(f=L[0])?void 0:f.name)||"N/A",artists:(null==(k=n._embedded)||null==(E=k.attractions)?void 0:E.map(t=>t.name).join(", "))||"Unknown artist",priceStandard:(null==(S=n.priceRanges)||null==(T=S[0])?void 0:T.min)?`${n.priceRanges[0].min} USD`:"N/A",priceVIP:(null==(C=n.priceRanges)||null==(M=C[0])?void 0:M.max)?`${n.priceRanges[0].max} USD`:"N/A"},A=$(H);B.modalContainer.innerHTML=A;let I=document.querySelector(".backdrop__poster");I.classList.remove("is-hidden"),I.addEventListener("click",t=>{t.target===I&&(I.classList.add("is-hidden"),B.modalContainer.innerHTML="")})}catch(t){console.error(t,"Error with fetch current id item")}}B.dataCards?B.dataCards.addEventListener("click",async t=>{let n=t.target.closest(".hero__item");if(n){let t=n.dataset.id;await O(t)}}):console.error('Element with class "hero__list" not found');const j=document.querySelector(".header__country"),F=document.querySelector("#hero__items");async function P(t){fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0").then(t=>t.json()).then(t=>{var n;F.innerHTML=((null==(n=t._embedded)?void 0:n.events)||[]).map(t=>`
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
      `).join("")}).catch(t=>{console.error("Помилка при завантаженні подій:",t),F.innerHTML="<li>Не вдалося знайти події.</li>"})}j.addEventListener("input",()=>{if(e.preventDefault(),clearTimeout(n),n=setTimeout(async()=>{await P(j.value.trim())},500),!j.value.toLowerCase().trim())return});
//# sourceMappingURL=event_booster-project4.7fcb360c.js.map
