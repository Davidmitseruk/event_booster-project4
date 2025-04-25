let t,n;function s(t,n){return Math.random()*(n-t)+t}document.querySelectorAll(".star").forEach((t,n)=>{t.style.left=`${s(0,100)}%`,t.style.top=`${s(0,100)}%`;let a=s(2,4);t.style.width=`${a}px`,t.style.height=`${a}px`,t.style.animationDelay=`${.5*n}s`});let a=1,o=[],i=1;const l={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},c=`
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
`,r=Handlebars.compile(c);async function d(t){try{if(51!=t){var n;let s=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${t-1}`);if(s.ok||console.error("Помилка API"),!(o=(null==(n=(await s.json())._embedded)?void 0:n.events)||[]).length){l.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',l.paginationContainer.innerHTML="";return}(function(){let t=r({items:o.map(t=>{var n,s,a,o,i;let l=t.images||[],c=l.find(t=>"16_9"===t.ratio&&t.width>300)||l[0];return{id:t.id,name:t.name||"Без назви",date:(null==(s=t.dates)||null==(n=s.start)?void 0:n.localDate)||"Дата не вказана",place:(null==(i=t._embedded)||null==(o=i.venues)||null==(a=o[0])?void 0:a.name)||"Місце не вказане",image:{url:c?c.url:"#"}}})});l.itemsContainer.innerHTML=t})(),m()}else l.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',m()}catch(t){console.error("Помилка:",t),l.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function m(){l.paginationContainer.innerHTML="";let t=Math.floor(2.5),n=i,s=Math.min(n+5-1,51);for(let o=n;o<=s;o++){let c=document.createElement("button");c.classList.add("hero__btn"),c.textContent=o,o===a?c.classList.add("hero__btn-active"):c.classList.remove("hero__btn-active"),c.addEventListener("click",()=>{d(a=o),o===n+t&&o<51-t?i=Math.min(i+1,47):o===n+t-1&&n>1?i=Math.max(1,n-1):o===s&&o<51?i=o:o===n&&n>1&&(i=Math.max(1,o-5+1)),m()}),l.paginationContainer.appendChild(c)}if(s<51){let t=document.createElement("span");t.classList.add("hero__dots"),t.textContent="...",l.paginationContainer.appendChild(t);let n=document.createElement("button");n.classList.add("hero__btn"),n.textContent=51,51===a?n.classList.add("hero__btn-active"):n.classList.remove("hero__btn-active"),n.addEventListener("click",()=>{i=47,d(a=51)}),l.paginationContainer.appendChild(n)}}d(a);const u=document.querySelector(".header__search"),h=document.querySelector("#hero__items");async function p(t){let n=[],s=0,a=1;try{for(;s<a;){var o;let i=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${t}&size=20&page=${s}`),l=await i.json(),c=(null==(o=l._embedded)?void 0:o.events)||[];n.push(...c),a=l.page.totalPages,s++}}catch(t){console.log(t)}return n}async function _(t){let n=(await p(t)).filter(n=>n.name.toLowerCase().includes(t.toLowerCase()));if(0===n.length){h.innerHTML="<h2>There are no such events</h2>";return}var s=n.slice(0,20);let a=`
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
    `;h.innerHTML=Handlebars.compile(a)(s)}u.addEventListener("input",n=>{n.preventDefault(),clearTimeout(t),t=setTimeout(async()=>{await _(u.value.trim())},500)});const g=document.getElementById("themeToggle");g.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let t=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(t.textContent="WHITE THEME",g.classList.add("header__btn-light"),g.classList.remove("header__btn-dark")):(t.textContent="BLACK THEME",g.classList.add("header__btn-dark"),g.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let t=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?t.classList.add("visible"):t.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const v={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function y(){v.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}v.openModalBtn.addEventListener("click",t=>{t.preventDefault(),y()}),v.closeModalBtn.addEventListener("click",y);const f={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function L(){f.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}f.openModalBtn.addEventListener("click",L),f.closeModalBtn.addEventListener("click",L);const b=document.querySelector(".signIn__btn-eye"),w=document.querySelector(".signIn__eye use"),E=document.querySelector("#signIn-password");let k=!1;b.addEventListener("click",()=>{k?(w.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),E.type="password",k=!1):(w.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),E.type="text",k=!0)});const M=document.querySelector("#eye-password"),T=document.querySelector("#eye-pass use"),q=document.querySelector("#signUp-password");let C=!1;M.addEventListener("click",t=>{t.preventDefault(),C?(T.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),q.type="password",C=!1):(T.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),q.type="text",C=!0)});const S=document.querySelector("#eye-confirm"),H=document.querySelector("#eye-conf use"),x=document.querySelector("#signUp-confirm");let B=!1;S.addEventListener("click",t=>{t.preventDefault(),B?(H.setAttribute("href","./images/symbol-defs.svg#icon-closed-eye-icon"),x.type="password",B=!1):(H.setAttribute("href","./images/symbol-defs.svg#icon-open-eye-icon"),x.type="text",B=!0)});const A=document.querySelector(".header__country"),I=document.querySelector("#hero__items");async function D(t){fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=VkBEt0fFcAqySchZPLKAbH98ntFa7ext&size=20&page=0").then(t=>t.json()).then(t=>{var n;I.innerHTML=((null==(n=t._embedded)?void 0:n.events)||[]).map(t=>`
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
      `).join("")}).catch(t=>{console.error("Помилка при завантаженні подій:",t),I.innerHTML="<li>Не вдалося знайти події.</li>"})}A.addEventListener("input",()=>{if(e.preventDefault(),clearTimeout(n),n=setTimeout(async()=>{await D(A.value.trim())},500),!A.value.toLowerCase().trim())return});
//# sourceMappingURL=event_booster-project4.92c62dee.js.map
