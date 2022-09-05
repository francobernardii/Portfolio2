// Codigo para realizar el efecto de escritura de la section Intro
let options = {
    strings: ['Franco Bernardi', 'a Software Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    startDelay: 500,
    loop: true,
};
let typed = new Typed('.element', options);;

// Animacion que aplican cambios con el scroll
function scrollAnimation(){
    // Obtenemos la posicion del scroll en pantall
    var scrollTop = document.documentElement.scrollTop
    // Elementos a aplicar el efecto
    let header = document.getElementsByTagName('header')
    const animadoScroll = document.getElementsByClassName('animadoScroll');
    const animadoStar = document.getElementsByClassName('animadoStar');
    const animadoTrophy = document.getElementsByClassName('animadoTrophy');
    // El header se modifica cuando el scroll este entre la posicion 300 y 400
    if(scrollTop > 200){
        header[0].classList.add('header-scrolled')
    }else{
        header[0].classList.remove('header-scrolled')
    }
    //Animacion de la estrella de Skill
    if (scrollTop > animadoStar[0].offsetTop - 850){
        animadoStar[0].style.opacity = 1
        animadoStar[0].classList.add('showRight')
    }else{
        animadoStar[0].style.opacity = 0
        animadoStar[0].classList.remove('showRight')
    }
    //Animacion de las cards de Skill
    for(let i = 0; i < animadoScroll.length; i++) {
        if (scrollTop > animadoScroll[i].offsetTop - 850){
            animadoScroll[i].style.opacity = 1
            animadoScroll[i].classList.add('showLeft')
        }else{
            animadoScroll[i].style.opacity = 0
            animadoScroll[i].classList.remove('showLeft')
        }
    }
    //Animacion del trofeo de Project
    if (scrollTop > animadoTrophy[0].offsetTop - 850){
        animadoTrophy[0].style.opacity = 1
        animadoTrophy[0].classList.add('showLeft')
    }else{
        animadoTrophy[0].style.opacity = 0
        animadoTrophy[0].classList.remove('showLeft')
    }
}

document.addEventListener('scroll', () => scrollAnimation())

//Carrousel Project

let carrouselCards = document.getElementsByClassName('card')
let cardSelected = document.getElementsByClassName('card selected')
const carrouselLeft = document.getElementById('controlLeft')
const carrouselRight = document.getElementById('controlRight')

function moveCarrousel(movement) {
    for (let i = 0; i < carrouselCards.length; i++) {
        if(carrouselCards[i] === cardSelected[0]){
            carrouselCards[i].classList.remove('selected')
            if (i + movement > carrouselCards.length - 1) {
                i = 0
            }else if (i + movement < 0){
                i = carrouselCards.length - 1
            }else{
                i = i + movement
            }
            carrouselCards[i].classList.add('selected')
            console.log(i)
        }
    }
}


carrouselLeft.addEventListener('click', () => moveCarrousel(-1))
carrouselRight.addEventListener('click', () => moveCarrousel(1))


