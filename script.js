/* responsive navbar menu */
const hambergerToggler=document.querySelector(".hamberger")

const navLinksContainer=document.querySelector(".navlinks-container");


const 
toggleNav=e => { hambergerToggler.classList.toggle("open")
navLinksContainer.classList.toggle("open")
}

hambergerToggler.addEventListener("click",toggleNav)

/* pour le bouton de flèche haut */
const btn=document.querySelector('.btn');
btn.addEventListener('click',()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})
    })