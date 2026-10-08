
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.navlinks');
if(toggle && nav){
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',(e)=>{
    const parent=a.parentElement;
    if(parent && parent.classList.contains('submenu-item') && parent.querySelector(':scope > .submenu-menu')){
      if(window.innerWidth<=760){ e.preventDefault(); parent.classList.toggle('mobile-open'); }
      return;
    }
    nav.classList.remove('open');
  }));
}
const slides=[...document.querySelectorAll('.slide')];
const dots=[...document.querySelectorAll('.hero-dots button')];
let current=0;
function showSlide(i){
  if(!slides.length) return;
  current=(i+slides.length)%slides.length;
  slides.forEach((s,n)=>s.classList.toggle('active',n===current));
  dots.forEach((d,n)=>d.classList.toggle('active',n===current));
}
dots.forEach((d,i)=>d.addEventListener('click',()=>showSlide(i)));
if(slides.length){showSlide(0);setInterval(()=>showSlide(current+1),5500);}
document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
