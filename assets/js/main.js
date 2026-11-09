const menuButton=document.querySelector('.menu');
const nav=document.querySelector('nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',nav.classList.contains('open')?'true':'false')})}
const current=location.pathname.replace(/\/+$/,'')||'/home';
document.querySelectorAll('nav a').forEach(a=>{const target=new URL(a.href).pathname.replace(/\/+$/,'');if(target===current)a.classList.add('active')});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const value=button.dataset.copy;try{await navigator.clipboard.writeText(value);button.textContent='COPIED!'}catch{button.textContent=value}}));