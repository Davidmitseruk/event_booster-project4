let t,a;var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},s={},l={},o=n.parcelRequire42eb;function i(t,a){return Math.random()*(a-t)+t}null==o&&((o=function(t){if(t in s)return s[t].exports;if(t in l){var a=l[t];delete l[t];var n={id:t,exports:{}};return s[t]=n,a.call(n.exports,n,n.exports),n.exports}var o=Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,a){l[t]=a},n.parcelRequire42eb=o),o.register,Object.assign(o.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((t,a)=>{t.style.left=`${i(0,100)}%`,t.style.top=`${i(0,100)}%`;let n=i(2,4);t.style.width=`${n}px`,t.style.height=`${n}px`,t.style.animationDelay=`${.5*a}s`});let d=1,c=[],r=1;const m={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},u=`
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
`,_=Handlebars.compile(u);async function p(t){try{if(51!=t){var a;let n=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${t-1}`);if(n.ok||console.error("Помилка API"),!(c=(null==(a=(await n.json())._embedded)?void 0:a.events)||[]).length){m.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',m.paginationContainer.innerHTML="";return}(function(){let t=_({items:c.map(t=>{var a,n,s,l,o;let i=t.images||[],d=i.find(t=>"16_9"===t.ratio&&t.width>300)||i[0];return{id:t.id,name:t.name||"Без назви",date:(null==(n=t.dates)||null==(a=n.start)?void 0:a.localDate)||"Дата не вказана",place:(null==(o=t._embedded)||null==(l=o.venues)||null==(s=l[0])?void 0:s.name)||"Місце не вказане",image:{url:d?d.url:"#"}}})});m.itemsContainer.innerHTML=t})(),h()}else m.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',h()}catch(t){console.error("Помилка:",t),m.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function h(){m.paginationContainer.innerHTML="";let t=Math.floor(2.5),a=r,n=Math.min(a+5-1,51);for(let s=a;s<=n;s++){let l=document.createElement("button");l.classList.add("hero__btn"),l.textContent=s,s===d?l.classList.add("hero__btn-active"):l.classList.remove("hero__btn-active"),l.addEventListener("click",()=>{p(d=s),s===a+t&&s<51-t?r=Math.min(r+1,47):s===a+t-1&&a>1?r=Math.max(1,a-1):s===n&&s<51?r=s:s===a&&a>1&&(r=Math.max(1,s-5+1)),h()}),m.paginationContainer.appendChild(l)}if(n<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",m.paginationContainer.appendChild(t);let a=document.createElement("button");a.classList.add("hero__btn"),a.textContent=51,51===d?a.classList.add("hero__btn-active"):a.classList.remove("hero__btn-active"),a.addEventListener("click",()=>{r=47,p(d=51)}),m.paginationContainer.appendChild(a)}}p(d);const v=document.querySelector(".header__search"),g=document.querySelector("#hero__items");async function y(t){let a=[],n=0,s=1;try{for(;n<s;){var l;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${t}&size=20&page=${n}`),i=await o.json(),d=(null==(l=i._embedded)?void 0:l.events)||[];a.push(...d),s=i.page.totalPages,n++}}catch(t){console.log(t)}return a}async function f(t){let a=(await y(t)).filter(a=>a.name.toLowerCase().includes(t.toLowerCase()));if(0===a.length){g.innerHTML="<h2>There are no such events</h2>";return}var n=a.slice(0,20);let s=`
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
    `;g.innerHTML=Handlebars.compile(s)(n)}v.addEventListener("input",a=>{a.preventDefault(),clearTimeout(t),t=setTimeout(async()=>{await f(v.value.trim())},500)});const b=document.getElementById("themeToggle");b.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let t=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(t.textContent="WHITE THEME",b.classList.add("header__btn-light"),b.classList.remove("header__btn-dark")):(t.textContent="BLACK THEME",b.classList.add("header__btn-dark"),b.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let t=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?t.classList.add("visible"):t.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const L={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function w(){L.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}L.openModalBtn.addEventListener("click",t=>{t.preventDefault(),w()}),L.closeModalBtn.addEventListener("click",w);const k={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function E(){k.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}k.openModalBtn.addEventListener("click",E),k.closeModalBtn.addEventListener("click",E);const T=document.querySelector(".signIn__btn-eye"),S=document.querySelector(".signIn__eye use"),M=document.querySelector("#signIn-password");let C=!1;T.addEventListener("click",()=>{C?(S.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),M.type="password",C=!1):(S.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),M.type="text",C=!0)});const H=document.querySelector("#eye-password"),q=document.querySelector("#eye-pass use"),x=document.querySelector("#signUp-password");let A=!1;H.addEventListener("click",t=>{t.preventDefault(),A?(q.setAttribute("href",`${{}}#icon-closed-eye-icon`),x.type="password",A=!1):(q.setAttribute("href",`${{}}#icon-open-eye-icon`),x.type="text",A=!0),x.focus()});const D=document.querySelector("#eye-confirm"),I=document.querySelector("#eye-conf use"),B=document.querySelector("#signUp-confirm");let U=!1;D.addEventListener("click",t=>{t.preventDefault(),U?(I.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),B.type="password",U=!1):(I.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),B.type="text",U=!0),B.focus()});const R={backdrop:document.querySelector(".backdrop__poster"),dataCards:document.querySelector(".hero__list"),modalContainer:document.querySelector(".modal-container")},N=`<div class='backdrop__poster is-hidden'>
  <div class='modal__poster'>
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
            <button>BUY TICKETS</button>
            <p class='modal__text'>{{priceVIP}}</p>
            <button>BUY TICKETS</button>
        </div>
        <div class='modal__btn-wrap'>
            <button class='modal__button'>MORE FROM THIS AUTHOR</button>
            <button class='modal__button' data-id="{{id}}" id="addBtn" type="button">ADD TO FAVOURITE</button>
        </div>
    </div>
    </div>
  </div>
</div>`,$=Handlebars.compile(N);async function j(t){try{let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${t}.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS`),n=await a.json();console.log(n);let s=n?function(t){var a,n,s,l,o,i,d,c,r,m,u,_,p,h,v,g,y,f,b,L,w,k,E,T,S,M,C;return{id:t.id,image:(null==(n=t.images)||null==(a=n[0])?void 0:a.url)||"",info:(C=t.info,(C.match(/[^.!?]+[.!?]+/g)||[C]).slice(0,2).join(" ").trim()||C),date:(null==(l=t.dates)||null==(s=l.start)?void 0:s.localDate)||"N/A",time:(null==(i=t.dates)||null==(o=i.start)?void 0:o.localTime)?t.dates.start.localTime.slice(0,5):"N/A",location:(null==(r=t._embedded)||null==(c=r.venues)||null==(d=c[0])?void 0:d.name)||"N/A",city:(null==(p=t._embedded)||null==(_=p.venues)||null==(u=_[0])||null==(m=u.city)?void 0:m.name)||"N/A",country:(null==(y=t._embedded)||null==(g=y.venues)||null==(v=g[0])||null==(h=v.country)?void 0:h.name)||"N/A",venue:(null==(L=t._embedded)||null==(b=L.venues)||null==(f=b[0])?void 0:f.name)||"N/A",artists:(null==(k=t._embedded)||null==(w=k.attractions)?void 0:w.map(t=>t.name).join(", "))||"Unknown artist",priceStandard:(null==(T=t.priceRanges)||null==(E=T[0])?void 0:E.min)?`${t.priceRanges[0].min} USD`:"N/A",priceVIP:(null==(M=t.priceRanges)||null==(S=M[0])?void 0:S.max)?`${t.priceRanges[0].max} USD`:"N/A"}}(n):{},l=$(s);R.modalContainer.innerHTML=l;let o=document.querySelector(".backdrop__poster");o.classList.remove("is-hidden"),o.addEventListener("click",t=>{t.target===o&&(o.classList.add("is-hidden"),R.modalContainer.innerHTML="")})}catch(t){console.error(t,"Error with fetch current id item")}}R.dataCards?R.dataCards.addEventListener("click",async t=>{let a=t.target.closest(".hero__item");if(a){let t=a.dataset.id;await j(t);let n=document.querySelector(".fav__list"),s=[];document.body.addEventListener("click",async t=>{if(t.target&&"addBtn"===t.target.id)try{let a=t.target.dataset.id,l=await j(a);s.push(l),function(t){let a=t.filter(t=>{var a,n,s,l,o;return(null==t||null==(n=t.dates)||null==(a=n.start)?void 0:a.localDate)&&(null==t||null==(o=t._embedded)||null==(l=o.venues)||null==(s=l[0])?void 0:s.name)}),s=`
    <div class='fav__template'>
      <ul class='fav__list'>
        {{#each this}}
          <li class='fav__item' data-id="{{id}}">
            <div class='fav__img-wrap'>
              <img src="{{images.0.url}}" alt="{{name}}" class="hero__img-teg"/>
            </div>
            <h2 class='fav__name'>{{name}}</h2>
            <p class='fav__date'>
              {{#if dates.start.localDate}}
                {{dates.start.localDate}}
              {{else}}
                Date unknown
              {{/if}}
            </p>
            <span class='fav__place'>
              <svg class='fav__place-icon' width='7' height='10'>
                <use href='#'></use>
              </svg>
              {{#if _embedded.venues.0.name}}
                {{_embedded.venues.0.name}}
              {{else}}
                Venue unknown
              {{/if}}
            </span>
          </li>
        {{/each}}
      </ul>
    </div>
  `;n.innerHTML=Handlebars.compile(s)(a)}(s)}catch(t){console.log(t)}})}}):console.error('Element with class "hero__list" not found');const O=document.querySelector(".header__country"),F=document.querySelector("#hero__items");async function P(t){fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0").then(t=>t.json()).then(t=>{var a;F.innerHTML=((null==(a=t._embedded)?void 0:a.events)||[]).map(t=>`
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
      `).join("")}).catch(t=>{console.error("Помилка при завантаженні подій:",t),F.innerHTML="<li>Не вдалося знайти події.</li>"})}O.addEventListener("input",()=>{if(e.preventDefault(),clearTimeout(a),a=setTimeout(async()=>{await P(O.value.trim())},500),!O.value.toLowerCase().trim())return});
//# sourceMappingURL=event_booster-project4.dfcb9f43.js.map
