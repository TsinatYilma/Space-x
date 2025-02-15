
const menu    = document.querySelector('.menu')
const menulog = document.querySelector('.menu-log')
const close   = document.querySelector('.close')

const exploreHover = document.querySelector('.explore-hover')
menu.addEventListener('click', ()=>{
  menulog.style.display = 'block';
})
close.addEventListener('click', ()=>{
   menulog.style.display = 'none';
})

 
