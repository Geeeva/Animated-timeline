/*** Top placing of the scrollbars beforeunload ***/
window.addEventListener('beforeunload', function() {
    window.scrollTo(0,0);
})

const cvr = document.getElementById('cover');
const btnX = document.getElementById('x-wrapper');
const bgSUp = document.getElementById('background-stroke-up');
const fadeInUp = document.querySelector('.fadeInUp');
const letters = document.querySelectorAll('.letter');
const letterM = document.querySelector('.m');

/*** Disappearing cover ***/

/*** Setting opacity of cover to 0 ***/
btnX.addEventListener('click', function() {
    cvr.animate([
        {bacgroundColor: '#fff'},
        {bacgroundColor: '#000'}

        ], { 
            delay: 0,
            duration: 1500,
            fill: 'forwards',
            iterations: 1
        }
    )
    cvr.animate([
        {opacity: '1'},
        {opacity: '0'}
        ], { 
            delay: 600,
            duration: 1500,
            fill: 'forwards',
            iterations: 1
        }
    )
    /*** Setting z-index of cover beyoned exisitng ***/
    cvr.animate([
        {zIndex: '0'},
        {zIndex: '-9999'}

        ], { 
            delay: 600,
            duration: 600,
            fill: 'forwards',
            iterations: 1
        }
    )

    fadeInUp.animate([
        {opacity: '0'},
        {opacity: '1'}
        ], { 
            delay: 3000,
            duration: 700,
            fill: 'forwards',
            iterations: 1
        }
    )
    /*** Animating letters ***/
    for(let i = 0; i < letters.length; i++) {
        if(letters[i].classList.contains('m')) {
            letters[i].animate([
                {strokeDasharray: '225 225'},
                {strokeDasharray: '225 225'}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1
                }
            )

            letters[i].animate([
                {opacity: 0},
                {opacity: 1}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1
                }
            )

            letters[i].animate([
                {strokeDashoffset: 0},
                {strokeDashoffset: 225}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1
                }
            )

        } else {
            letters[i].animate([
                {strokeDasharray: '205 205'},
                {strokeDasharray: '205 205'}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1
                }
            )

            letters[i].animate([
                {strokeDashoffset: 0},
                {strokeDashoffset: 205}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1
                }
            )
    
            letters[i].animate([
                {opacity: 0},
                {opacity: 1}
                ], {
                    delay: 2000,
                    easing: 'ease-out',
                    duration: 4000,
                    fill: 'forwards',
                    iterations: 1,
                }
            )
        }
    }
})

/*** Marking objects as hidden ***/
let screenSSize = window.matchMedia("(max-width: 767px)");
screenSSize.addListener(filteringSize); 
const cont = document.getElementsByClassName('container');
let startPadding = 40;

for(let i = 0; i < cont.length; i++) {
    let top = cont[i].getBoundingClientRect().top;
    let bottomObject = top + cont[i].scrollHeight;
    let bottomWindow = window.outerHeight;

    if(bottomObject > bottomWindow) {
        cont[i].classList.add('hidden');
    }

    if(cont[i].classList.contains('left')) {
        cont[i].style.textAlign = 'left';
        filteringSize(screenSSize);
    }

    if(cont[i].classList.contains('right')){
        cont[i].style.textAlign = 'right';
        filteringSize(screenSSize);
    }
    
    /*** Cheking screen size and incerasing padding depending on size ***/
    function filteringSize(screenSSize) {
        if (screenSSize.matches) { 
            cont[i].style.paddingLeft = startPadding + 'px';
            cont[i].style.paddingRight = startPadding + 'px';
            startPadding = startPadding + 2;
        } else {
            cont[i].style.paddingLeft = startPadding + 'px';
            cont[i].style.paddingRight = startPadding + 'px';
            startPadding = startPadding + 10;
        }
    }
}

/*** Objects/Timeline items appearing ***/
const hidden = document.querySelectorAll('.hidden');
const contH2 = document.querySelectorAll('.content h2');
const contP = document.querySelectorAll('.content p');

window.addEventListener('scroll', function appearing () {
    for(let i = 0; i < hidden.length; i++) {
        let top = hidden[i].getBoundingClientRect().top;
        let bottomObject = top + cont[i].scrollHeight;
        let bottomWindow = window.innerHeight;

        if(bottomObject > bottomWindow){
            hidden[i].animate([
                    { opacity: '0' },
                    { opacity: '1' }
                ], { 
                    duration: 3500,
                    fill: 'forwards',
                    iterations: 1
                }
            )
        } else {
            window.removeEventListener('scroll', appearing);
        }
    }
})

/*** Animating timeline ***/
window.addEventListener('scroll', function() {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    let moved = this.document.getElementById('line-black').style.height = scrolled + '%';

    if(document.documentElement.scrollTop > 30) {
        btnTop.style.display = 'block';
    } else {
        btnTop.style.display = 'none';
    }
})

/*** Scroll to top ***/
let btnTop = document.getElementById('spiral-wrapper');

btnTop.addEventListener('click', function scrollTop() {
    if (document.documentElement.scrollTop !== 0) {
        window.scrollBy(0, -20);
        setTimeout(scrollTop, 5);
    }
})