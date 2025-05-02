let e,t;function a(e,t){return Math.random()*(t-e)+e}document.querySelectorAll(".star").forEach((e,t)=>{e.style.left=`${a(0,100)}%`,e.style.top=`${a(0,100)}%`;let n=a(2,4);e.style.width=`${n}px`,e.style.height=`${n}px`,e.style.animationDelay=`${.5*t}s`});let n=1,o=[],l=1;const s={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},i=`
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
`,d=Handlebars.compile(i);async function c(e){try{if(51!=e){var t;let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(a.ok||console.error("Помилка API"),!(o=(null==(t=(await a.json())._embedded)?void 0:t.events)||[]).length){s.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',s.paginationContainer.innerHTML="";return}(function(){let e=d({items:o.map(e=>{var t,a,n,o,l;let s=e.images||[],i=s.find(e=>"16_9"===e.ratio&&e.width>300)||s[0];return{id:e.id,name:e.name||"Без назви",date:(null==(a=e.dates)||null==(t=a.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(l=e._embedded)||null==(o=l.venues)||null==(n=o[0])?void 0:n.name)||"Місце не вказане",image:{url:i?i.url:"#"}}})});s.itemsContainer.innerHTML=e})(),r()}else s.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',r()}catch(e){console.error("Помилка:",e),s.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function r(){s.paginationContainer.innerHTML="";let e=Math.floor(2.5),t=l,a=Math.min(t+5-1,51);for(let o=t;o<=a;o++){let i=document.createElement("button");i.classList.add("hero__btn"),i.textContent=o,o===n?i.classList.add("hero__btn-active"):i.classList.remove("hero__btn-active"),i.addEventListener("click",()=>{c(n=o),o===t+e&&o<51-e?l=Math.min(l+1,47):o===t+e-1&&t>1?l=Math.max(1,t-1):o===a&&o<51?l=o:o===t&&t>1&&(l=Math.max(1,o-5+1)),r()}),s.paginationContainer.appendChild(i)}if(a<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",s.paginationContainer.appendChild(e);let t=document.createElement("button");t.classList.add("hero__btn"),t.textContent=51,51===n?t.classList.add("hero__btn-active"):t.classList.remove("hero__btn-active"),t.addEventListener("click",()=>{l=47,c(n=51)}),s.paginationContainer.appendChild(t)}}c(n);const m=document.querySelector(".header__search"),_=document.querySelector("#hero__items");async function u(e){let t=[],a=0,n=1;try{for(;a<n;){var o;let l=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${a}`),s=await l.json(),i=(null==(o=s._embedded)?void 0:o.events)||[];t.push(...i),n=s.page.totalPages,a++}}catch(e){console.log(e)}return t}async function h(e){let t=(await u(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){_.innerHTML="<h2>There are no such events</h2>";return}var a=t.slice(0,20);let n=`
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
    `;_.innerHTML=Handlebars.compile(n)(a)}m.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await h(m.value.trim())},500)});const p=document.getElementById("themeToggle");p.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",p.classList.add("header__btn-light"),p.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",p.classList.add("header__btn-dark"),p.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const v={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function g(){v.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}v.openModalBtn.addEventListener("click",e=>{e.preventDefault(),g()}),v.closeModalBtn.addEventListener("click",g);const b={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function y(){b.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}b.openModalBtn.addEventListener("click",y),b.closeModalBtn.addEventListener("click",y);const L="https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext",f=document.querySelector(".header__country"),E=document.querySelector(".hero__list");async function k(e){let t;E.innerHTML="",t=e?`${L}&size=20&page=0&countryCode=${e.toUpperCase()}`:`${L}&size=20&page=0`;try{var a;let e=await fetch(t),n=(null==(a=(await e.json())._embedded)?void 0:a.events)||[];if(0===n.length){E.innerHTML='<li class="hero__country-message">Подій не знайдено.</li>';return}E.innerHTML=n.map(e=>`
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
        `).join("")}catch(e){console.error("Помилка при завантаженні подій:",e),E.innerHTML="<li>Не вдалося знайти події.</li>"}}f.addEventListener("input",e=>{clearTimeout(t),t=setTimeout(async()=>{await k(f.value.trim())},500)});const M={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},w=`<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
    <button class="modal__btn-close">
      <img src="./images/close.png" alt="close" />
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
                <p class='modal__text'>{{priceStandard}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
                <p class='modal__text'>{{priceVIP}}</p>
                <button class="modal__poster-btn">BUY TICKETS</button>
            </div>
            <div class='modal__btn-wrap'>
              <button class='modal__button'>MORE FROM THIS AUTHOR</button>
              <button class='modal__button' data-id="{{id}}" id="addBtn">ADD TO FAVOURITE</button>
            </div>
         </div>
    </div>
  </div>
</div>`,T=Handlebars.compile(w);async function S(e){try{let t=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${e}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),a=await t.json();console.log(a);let n=a?function(e){var t,a,n,o,l,s,i,d,c,r,m,_,u,h,p,v,g,b,y,L,f,E,k,M,w,T,S;return{id:e.id,image:(null==(a=e.images)||null==(t=a[0])?void 0:t.url)||"",info:(S=e.info,S?(S.match(/[^.!?]+[.!?]+/g)||[S]).slice(0,2).join(" ").trim()||S:"No aleviable"),date:(null==(o=e.dates)||null==(n=o.start)?void 0:n.localDate)||"N/A",time:(null==(s=e.dates)||null==(l=s.start)?void 0:l.localTime)?e.dates.start.localTime.slice(0,5):"N/A",location:(null==(c=e._embedded)||null==(d=c.venues)||null==(i=d[0])?void 0:i.name)||"N/A",city:(null==(u=e._embedded)||null==(_=u.venues)||null==(m=_[0])||null==(r=m.city)?void 0:r.name)||"N/A",country:(null==(g=e._embedded)||null==(v=g.venues)||null==(p=v[0])||null==(h=p.country)?void 0:h.name)||"N/A",venue:(null==(L=e._embedded)||null==(y=L.venues)||null==(b=y[0])?void 0:b.name)||"N/A",artists:(null==(E=e._embedded)||null==(f=E.attractions)?void 0:f.map(e=>e.name).join(", "))||"Unknown artist",priceStandard:(null==(M=e.priceRanges)||null==(k=M[0])?void 0:k.min)?`${e.priceRanges[0].min} USD`:"50 USD",priceVIP:(null==(T=e.priceRanges)||null==(w=T[0])?void 0:w.max)?`${e.priceRanges[0].max} USD`:"70 USD"}}(a):{},o=T(n);M.modalContainer.innerHTML=o;let l=document.querySelector(".backdrop__poster"),s=document.querySelector(".modal__btn-close");return l.classList.remove("is-hidden"),s.addEventListener("click",()=>{l.classList.add("is-hidden"),M.modalContainer.innerHTML=""}),l.addEventListener("click",e=>{e.target===l&&(l.classList.add("is-hidden"),M.modalContainer.innerHTML="")}),n}catch(e){console.error(e,"Error with fetch current id item")}}M.dataCards?M.dataCards.addEventListener("click",async e=>{let t=e.target.closest(".hero__item");if(t){let e=t.dataset.id;await S(e)}}):console.error("Element not found");const C=document.querySelectorAll(".footer__team-nav-btn"),H=document.querySelectorAll(".footer__team-item"),q={openModalBtn:document.querySelector("[data-team-open]"),closeModalBtn:document.querySelector(".footer__close-team-modal"),modal:document.querySelector("[data-team]")};function x(){q.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}function B(e){H.forEach(e=>{e.classList.add("hide")});let t=document.querySelector(`.footer__team-item:nth-child(${e})`);t&&t.classList.remove("hide")}q.openModalBtn.addEventListener("click",e=>{x(),B(1)}),q.closeModalBtn.addEventListener("click",x),C.forEach(e=>{e.addEventListener("click",e=>{B(parseInt(e.target.id)),C.forEach(e=>e.classList.remove("footer__btn-active")),e.target.classList.add("footer__btn-active")})});
//# sourceMappingURL=event_booster-project4.fdc8d54e.js.map
