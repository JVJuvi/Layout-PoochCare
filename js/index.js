$('.slider__slide').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:1
        }
    }
})

$('.feedback__slide').owlCarousel({
    loop:false,
    margin:20,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:2
        }
    }
})

// counter
$('.counter').countUp({
    time: 2000,
    delay: 10
})

// event click
document.querySelector('.nav-bars-open').onclick = () => {
    document.querySelector('.nav-bars-open').style.display = 'none';
    document.querySelector('.nav-bars-close').style.display = 'block';
    document.querySelector('.nav-list').style.height = 'auto';
}
document.querySelector('.nav-bars-close').onclick = () => {
    document.querySelector('.nav-bars-close').style.display = 'none';
    document.querySelector('.nav-bars-open').style.display = 'block';
    document.querySelector('.nav-list').style.height = '0';
}