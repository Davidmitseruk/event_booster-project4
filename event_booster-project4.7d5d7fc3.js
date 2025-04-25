let t,n;var s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},i=s.parcelRequire42eb;function r(t,n){return Math.random()*(n-t)+t}null==i&&((i=function(t){if(t in o)return o[t].exports;if(t in a){var n=a[t];delete a[t];var s={id:t,exports:{}};return o[t]=s,n.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,n){a[t]=n},s.parcelRequire42eb=i),i.register,Object.assign(i.i??={},{"9v6fF":"symbol-defs.c5b0f01c.svg"}),document.querySelectorAll(".star").forEach((t,n)=>{t.style.left=`${r(0,100)}%`,t.style.top=`${r(0,100)}%`;let s=r(2,4);t.style.width=`${s}px`,t.style.height=`${s}px`,t.style.animationDelay=`${.5*n}s`});let l=1,c=[],d=1;const m={itemsContainer:document.querySelector(".hero__list"),paginationContainer:document.getElementById("hero__pagination")},u=`
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
`,h=Handlebars.compile(u);async function p(t){try{if(51!=t){var n;let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${t-1}`);if(s.ok||console.error("Помилка API"),!(c=(null==(n=(await s.json())._embedded)?void 0:n.events)||[]).length){m.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',m.paginationContainer.innerHTML="";return}(function(){let t=h({items:c.map(t=>{var n,s,o,a,i;let r=t.images||[],l=r.find(t=>"16_9"===t.ratio&&t.width>300)||r[0];return{id:t.id,name:t.name||"Без назви",date:(null==(s=t.dates)||null==(n=s.start)?void 0:n.localDate)||"Дата не вказана",place:(null==(i=t._embedded)||null==(a=i.venues)||null==(o=a[0])?void 0:o.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});m.itemsContainer.innerHTML=t})(),_()}else m.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',_()}catch(t){console.error("Помилка:",t),m.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function _(){m.paginationContainer.innerHTML="";let t=Math.floor(2.5),n=d,s=Math.min(n+5-1,51);for(let o=n;o<=s;o++){let a=document.createElement("button");a.classList.add("hero__btn"),a.textContent=o,o===l?a.classList.add("hero__btn-active"):a.classList.remove("hero__btn-active"),a.addEventListener("click",()=>{p(l=o),o===n+t&&o<51-t?d=Math.min(d+1,47):o===n+t-1&&n>1?d=Math.max(1,n-1):o===s&&o<51?d=o:o===n&&n>1&&(d=Math.max(1,o-5+1)),_()}),m.paginationContainer.appendChild(a)}if(s<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",m.paginationContainer.appendChild(t);let n=document.createElement("button");n.classList.add("hero__btn"),n.textContent=51,51===l?n.classList.add("hero__btn-active"):n.classList.remove("hero__btn-active"),n.addEventListener("click",()=>{d=47,p(l=51)}),m.paginationContainer.appendChild(n)}}p(l);const g=document.querySelector(".header__search"),v=document.querySelector("#hero__items");async function y(t){let n=[],s=0,o=1;try{for(;s<o;){var a;let i=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${t}&size=20&page=${s}`),r=await i.json(),l=(null==(a=r._embedded)?void 0:a.events)||[];n.push(...l),o=r.page.totalPages,s++}}catch(t){console.log(t)}return n}async function f(t){let n=(await y(t)).filter(n=>n.name.toLowerCase().includes(t.toLowerCase()));if(0===n.length){v.innerHTML="<h2>There are no such events</h2>";return}var s=n.slice(0,20);let o=`
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
    `;v.innerHTML=Handlebars.compile(o)(s)}g.addEventListener("input",n=>{n.preventDefault(),clearTimeout(t),t=setTimeout(async()=>{await f(g.value.trim())},500)});const b=document.getElementById("themeToggle");b.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let t=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(t.textContent="WHITE THEME",b.classList.add("header__btn-light"),b.classList.remove("header__btn-dark")):(t.textContent="BLACK THEME",b.classList.add("header__btn-dark"),b.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let t=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?t.classList.add("visible"):t.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const L={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function w(){L.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}L.openModalBtn.addEventListener("click",t=>{t.preventDefault(),w()}),L.closeModalBtn.addEventListener("click",w);const E={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function k(){E.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}E.openModalBtn.addEventListener("click",k),E.closeModalBtn.addEventListener("click",k);const q=document.querySelector(".signIn__btn-eye"),M=document.querySelector(".signIn__eye use"),C=document.querySelector("#signIn-password");let S=!1;q.addEventListener("click",()=>{S?(M.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),C.type="password",S=!1):(M.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),C.type="text",S=!0)});const T=document.querySelector("#eye-password"),x=document.querySelector("#eye-pass use"),H=document.querySelector("#signUp-password");let A=!1;T.addEventListener("click",t=>{t.preventDefault(),A?(x.setAttribute("href",`${{}}#icon-closed-eye-icon`),H.type="password",A=!1):(x.setAttribute("href",`${{}}#icon-open-eye-icon`),H.type="text",A=!0),H.focus()});const B=document.querySelector("#eye-confirm"),D=document.querySelector("#eye-conf use"),I=document.querySelector("#signUp-confirm");let $=!1;B.addEventListener("click",t=>{t.preventDefault(),$?(D.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),I.type="password",$=!1):(D.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),I.type="text",$=!0),I.focus()});const j={backdrop:document.querySelector(".backdrop"),modalCloseBtn:document.querySelector(".modal__close"),dataCards:document.querySelector(".hero__list")};async function U(t){try{let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events/${t}`);var n=await s.json();let o=n.images||[];o.find(t=>"16_9"===t.ratio&&t.width>300)||o[0],console.log(n)}catch(t){console.error(t,"Error with fetch current id item")}}j.dataCards?j.dataCards.addEventListener("click",async t=>{let n=t.target.closest(".hero__item").dataset.id;n&&await U(n)}):console.error('Element with class "hero__list" not found');const z=document.querySelector(".header__country"),F=document.querySelector("#hero__items");async function O(t){fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0").then(t=>t.json()).then(t=>{var n;F.innerHTML=((null==(n=t._embedded)?void 0:n.events)||[]).map(t=>`
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
      `).join("")}).catch(t=>{console.error("Помилка при завантаженні подій:",t),F.innerHTML="<li>Не вдалося знайти події.</li>"})}z.addEventListener("input",()=>{if(e.preventDefault(),clearTimeout(n),n=setTimeout(async()=>{await O(z.value.trim())},500),!z.value.toLowerCase().trim())return});
//# sourceMappingURL=event_booster-project4.7d5d7fc3.js.map
