let t,a;var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},o={},l=n.parcelRequire42eb;function i(t,a){return Math.random()*(a-t)+t}null==l&&((l=function(t){if(t in s)return s[t].exports;if(t in o){var a=o[t];delete o[t];var n={id:t,exports:{}};return s[t]=n,a.call(n.exports,n,n.exports),n.exports}var l=Error("Cannot find module '"+t+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(t,a){o[t]=a},n.parcelRequire42eb=l),l.register,Object.assign(l.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((t,a)=>{t.style.left=`${i(0,100)}%`,t.style.top=`${i(0,100)}%`;let n=i(2,4);t.style.width=`${n}px`,t.style.height=`${n}px`,t.style.animationDelay=`${.5*a}s`});let c=1,d=[],r=1;const m={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},u=`
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
`,_=Handlebars.compile(u);async function p(t){try{if(51!=t){var a;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${t-1}`);if(n.ok||console.error("Помилка API"),!(d=(null==(a=(await n.json())._embedded)?void 0:a.events)||[]).length){m.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',m.paginationContainer.innerHTML="";return}(function(){let t=_({items:d.map(t=>{var a,n,s,o,l;let i=t.images||[],c=i.find(t=>"16_9"===t.ratio&&t.width>300)||i[0];return{id:t.id,name:t.name||"Без назви",date:(null==(n=t.dates)||null==(a=n.start)?void 0:a.localDate)||"Дата не вказана",place:(null==(l=t._embedded)||null==(o=l.venues)||null==(s=o[0])?void 0:s.name)||"Місце не вказане",image:{url:c?c.url:"#"}}})});m.itemsContainer.innerHTML=t})(),h()}else m.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',h()}catch(t){console.error("Помилка:",t),m.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function h(){m.paginationContainer.innerHTML="";let t=Math.floor(2.5),a=r,n=Math.min(a+5-1,51);for(let s=a;s<=n;s++){let o=document.createElement("button");o.classList.add("hero__btn"),o.textContent=s,s===c?o.classList.add("hero__btn-active"):o.classList.remove("hero__btn-active"),o.addEventListener("click",()=>{p(c=s),s===a+t&&s<51-t?r=Math.min(r+1,47):s===a+t-1&&a>1?r=Math.max(1,a-1):s===n&&s<51?r=s:s===a&&a>1&&(r=Math.max(1,s-5+1)),h()}),m.paginationContainer.appendChild(o)}if(n<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",m.paginationContainer.appendChild(t);let a=document.createElement("button");a.classList.add("hero__btn"),a.textContent=51,51===c?a.classList.add("hero__btn-active"):a.classList.remove("hero__btn-active"),a.addEventListener("click",()=>{r=47,p(c=51)}),m.paginationContainer.appendChild(a)}}p(c);const v=document.querySelector(".header__search"),g=document.querySelector("#hero__items");async function y(t){let a=[],n=0,s=1;try{for(;n<s;){var o;let l=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${t}&size=20&page=${n}`),i=await l.json(),c=(null==(o=i._embedded)?void 0:o.events)||[];a.push(...c),s=i.page.totalPages,n++}}catch(t){console.log(t)}return a}async function f(t){let a=(await y(t)).filter(a=>a.name.toLowerCase().includes(t.toLowerCase()));if(0===a.length){g.innerHTML="<h2>There are no such events</h2>";return}var n=a.slice(0,20);let s=`
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
    `;g.innerHTML=Handlebars.compile(s)(n)}v.addEventListener("input",a=>{a.preventDefault(),clearTimeout(t),t=setTimeout(async()=>{await f(v.value.trim())},500)});const b=document.getElementById("themeToggle");b.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let t=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(t.textContent="WHITE THEME",b.classList.add("header__btn-light"),b.classList.remove("header__btn-dark")):(t.textContent="BLACK THEME",b.classList.add("header__btn-dark"),b.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let t=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?t.classList.add("visible"):t.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const L={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function w(){L.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}L.openModalBtn.addEventListener("click",t=>{t.preventDefault(),w()}),L.closeModalBtn.addEventListener("click",w);const k={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function E(){k.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}k.openModalBtn.addEventListener("click",E),k.closeModalBtn.addEventListener("click",E);const S=document.querySelector(".signIn__btn-eye"),T=document.querySelector(".signIn__eye use"),M=document.querySelector("#signIn-password");let q=!1;S.addEventListener("click",()=>{q?(T.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),M.type="password",q=!1):(T.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),M.type="text",q=!0)});const C=document.querySelector("#eye-password"),H=document.querySelector("#eye-pass use"),x=document.querySelector("#signUp-password");let A=!1;C.addEventListener("click",t=>{t.preventDefault(),A?(H.setAttribute("href",`${{}}#icon-closed-eye-icon`),x.type="password",A=!1):(H.setAttribute("href",`${{}}#icon-open-eye-icon`),x.type="text",A=!0),x.focus()});const I=document.querySelector("#eye-confirm"),B=document.querySelector("#eye-conf use"),D=document.querySelector("#signUp-confirm");let U=!1;I.addEventListener("click",t=>{t.preventDefault(),U?(B.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),D.type="password",U=!1):(B.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),D.type="text",U=!0),D.focus()});const R={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},j=`<div class='backdrop__poster is-hidden'>
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
         </div>
    </div>
    <div class='modal__btn-wrap'>
        <button class='modal__button'>MORE FROM THIS AUTHOR</button>
          <button class='modal__button' data-id="{{id}}" id="addBtn">ADD TO FAVOURITE</button>
     </div>
  </div>
</div>`,N=Handlebars.compile(j);async function $(t){try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${t}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),n=await a.json();console.log(n);let s=n?O(n):{},o=N(s);R.modalContainer.innerHTML=o;let l=document.querySelector(".backdrop__poster");return l.classList.remove("is-hidden"),l.addEventListener("click",t=>{t.target===l&&(l.classList.add("is-hidden"),R.modalContainer.innerHTML="")}),s}catch(t){console.error(t,"Error with fetch current id item")}}function O(t){var a,n,s,o,l,i,c,d,r,m,u,_,p,h,v,g,y,f,b,L,w,k,E,S,T,M,q;return{id:t.id,image:(null==(n=t.images)||null==(a=n[0])?void 0:a.url)||"",info:(q=t.info,(q.match(/[^.!?]+[.!?]+/g)||[q]).slice(0,2).join(" ").trim()||q),date:(null==(o=t.dates)||null==(s=o.start)?void 0:s.localDate)||"N/A",time:(null==(i=t.dates)||null==(l=i.start)?void 0:l.localTime)?t.dates.start.localTime.slice(0,5):"N/A",location:(null==(r=t._embedded)||null==(d=r.venues)||null==(c=d[0])?void 0:c.name)||"N/A",city:(null==(p=t._embedded)||null==(_=p.venues)||null==(u=_[0])||null==(m=u.city)?void 0:m.name)||"N/A",country:(null==(y=t._embedded)||null==(g=y.venues)||null==(v=g[0])||null==(h=v.country)?void 0:h.name)||"N/A",venue:(null==(L=t._embedded)||null==(b=L.venues)||null==(f=b[0])?void 0:f.name)||"N/A",artists:(null==(k=t._embedded)||null==(w=k.attractions)?void 0:w.map(t=>t.name).join(", "))||"Unknown artist",priceStandard:(null==(S=t.priceRanges)||null==(E=S[0])?void 0:E.min)?`${t.priceRanges[0].min} USD`:"N/A",priceVIP:(null==(M=t.priceRanges)||null==(T=M[0])?void 0:T.max)?`${t.priceRanges[0].max} USD`:"N/A"}}R.dataCards?R.dataCards.addEventListener("click",async t=>{let a=t.target.closest(".hero__item");if(a){let t=a.dataset.id;await $(t);let n=document.querySelector(".fav__list"),s=[];document.body.addEventListener("click",async t=>{if(t.target&&"addBtn"===t.target.id)try{console.log(t.target.dataset.id);let a=await $(t.target.dataset.id),o=O(a);console.log(o),s.push(o),function(t){if(0===t.length){n.innerHTML="<li><p>There are not favourites events</p></li>";return}let a=t.filter(t=>{var a,n,s,o,l;return(null==t||null==(n=t.dates)||null==(a=n.start)?void 0:a.localDate)&&(null==t||null==(l=t._embedded)||null==(o=l.venues)||null==(s=o[0])?void 0:s.name)}),s=`
         {{#each this}}
    <li class='fav__item' data-id="{{id}}">
      <div class='fav__img-wrap'>
        <img src="{{image}}" alt="{{info}}" class="hero__img-teg"/>
      </div>
      <h2 class='fav__name'>{{info}}</h2>
      <p class='fav__date'>{{date}}</p>
      <span class='fav__place'>
        <svg class='fav__place-icon' width='7' height='10'>
          <use href='#'></use>
        </svg>
        {{venue}}
      </span>
    </li>
  {{/each}}
  `,o=Handlebars.compile(s)(a);n.insertAdjacentHTML("beforeend",o)}(s)}catch(t){console.log(t)}})}}):console.error("Element not found");const F=document.querySelector(".header__country"),P=document.querySelector("#hero__items");async function z(t){fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0").then(t=>t.json()).then(t=>{var a;P.innerHTML=((null==(a=t._embedded)?void 0:a.events)||[]).map(t=>`
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
      `).join("")}).catch(t=>{console.error("Помилка при завантаженні подій:",t),P.innerHTML="<li>Не вдалося знайти події.</li>"})}F.addEventListener("input",()=>{if(e.preventDefault(),clearTimeout(a),a=setTimeout(async()=>{await z(F.value.trim())},500),!F.value.toLowerCase().trim())return});const J={openModalBtn:document.querySelector("[data-header-open]"),closeModalBtn:document.querySelector(".header-modal__backdrop"),modal:document.querySelector("[data-header-body]")};function K(){J.modal.classList.toggle("header-is-hidden"),document.body.classList.toggle("no-scroll")}J.openModalBtn.addEventListener("click",t=>{t.preventDefault(),K()}),J.closeModalBtn.addEventListener("click",K);
//# sourceMappingURL=event_booster-project4.d7870566.js.map
