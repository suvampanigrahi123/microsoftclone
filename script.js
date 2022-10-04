const button=document.querySelector('.hamburger');
const menu=document.querySelector('.menulist')

button.addEventListener('click',()=>{
    if(menu.classList.contains('-translate-x-[110vw]')){
        menu.classList.remove('-translate-x-[110vw]')
        menu.classList.add('translate-x-0')
    }else{
        menu.classList.remove('translate-x-0')
        menu.classList.add('-translate-x-[110vw]')
    }
})