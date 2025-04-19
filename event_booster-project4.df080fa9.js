let e;let t=1,n=[],a=1;const s={itemsContainer:document.getElementById("hero__items"),paginationContainer:document.getElementById("hero__pagination")},o=`
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
`,i=Handlebars.compile(o);async function l(e){try{if(51!=e){var t;let a=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ketKoDmJUHl7Ak2zwntgxzeJRJUvRMXS&size=20&page=${e-1}`);if(a.ok||console.error("Помилка API"),!(n=(null==(t=(await a.json())._embedded)?void 0:t.events)||[]).length){s.itemsContainer.innerHTML='<p class="hero__message >Event not found</p>',s.paginationContainer.innerHTML="";return}(function(){let e=i({items:n.map(e=>{var t,n,a,s,o;let i=e.images||[],l=i.find(e=>"16_9"===e.ratio&&e.width>300)||i[0];return{id:e.id,name:e.name||"Без назви",date:(null==(n=e.dates)||null==(t=n.start)?void 0:t.localDate)||"Дата не вказана",place:(null==(o=e._embedded)||null==(s=o.venues)||null==(a=s[0])?void 0:a.name)||"Місце не вказане",image:{url:l?l.url:"#"}}})});s.itemsContainer.innerHTML=e})(),c()}else s.itemsContainer.innerHTML='<p class="hero__message">No more events now</p>',c()}catch(e){console.error("Помилка:",e),s.itemsContainer.innerHTML='<p class="hero__message >Error loading events</p>'}}function c(){s.paginationContainer.innerHTML="";let e=Math.floor(2.5),n=a,o=Math.min(n+5-1,51);for(let i=n;i<=o;i++){let r=document.createElement("button");r.textContent=i,i===t?r.classList.add("hero__btn-active"):r.classList.remove("hero__btn-active"),r.addEventListener("click",()=>{l(t=i),i===n+e&&i<51-e?a=Math.min(a+1,47):i===n+e-1&&n>1?a=Math.max(1,n-1):i===o&&i<51?a=i:i===n&&n>1&&(a=Math.max(1,i-5+1)),c()}),s.paginationContainer.appendChild(r)}if(o<51){let e=document.createElement("span");e.classList.add("hero__dots"),e.textContent="...",s.paginationContainer.appendChild(e);let n=document.createElement("button");n.textContent=51,51===t?n.classList.add("hero__btn-active"):n.classList.remove("hero__btn-active"),n.addEventListener("click",()=>{a=47,l(t=51)}),s.paginationContainer.appendChild(n)}}l(t);const r=document.querySelector(".header__search"),d=document.querySelector("#hero__items");async function m(e){let t=[],n=0,a=1;try{for(;n<a;){var s;let o=await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=L7VlP0GtWQZMHhIkOqz3A3FcxX8k8AWD&keyword=${e}&size=20&page=${n}`),i=await o.json(),l=(null==(s=i._embedded)?void 0:s.events)||[];t.push(...l),a=i.page.totalPages,n++}}catch(e){console.log(e)}return t}async function h(e){let t=(await m(e)).filter(t=>t.name.toLowerCase().includes(e.toLowerCase()));if(0===t.length){d.innerHTML="<h2>There are no such events</h2>";return}var n=t.slice(0,20);let a=`
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
    `;d.innerHTML=Handlebars.compile(a)(n)}r.addEventListener("input",t=>{t.preventDefault(),clearTimeout(e),e=setTimeout(async()=>{await h(r.value.trim())},500)});const u=document.getElementById("themeToggle");u.addEventListener("click",()=>{document.body.classList.toggle("light-theme");let e=document.querySelector(".header__btn-text");document.body.classList.contains("light-theme")?(e.textContent="WHITE THEME",u.classList.add("header__btn-light"),u.classList.remove("header__btn-dark")):(e.textContent="BLACK THEME",u.classList.add("header__btn-dark"),u.classList.remove("header__btn-light"))}),window.addEventListener("scroll",function(){let e=document.getElementById("backToTop");window.scrollY>window.innerHeight/2?e.classList.add("visible"):e.classList.remove("visible")}),document.getElementById("backToTop").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});const _={openModalBtn:document.querySelector("[data-signIn-open]"),closeModalBtn:document.querySelector("[data-signIn-close]"),modal:document.querySelector("[data-signIn]")};function p(){_.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}_.openModalBtn.addEventListener("click",e=>{e.preventDefault(),p()}),_.closeModalBtn.addEventListener("click",p);const g={openModalBtn:document.querySelector("[data-signUp-open]"),closeModalBtn:document.querySelector("[data-signUp-close]"),modal:document.querySelector("[data-signUp]")};function v(){g.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}g.openModalBtn.addEventListener("click",v),g.closeModalBtn.addEventListener("click",v);
//# sourceMappingURL=event_booster-project4.df080fa9.js.map
