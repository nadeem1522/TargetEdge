$(document).ready(function(){
    const nextbutton = '<svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></g></svg>';
    const backbutton ='<svg width="32" height="32" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"></path></g></svg>';
     $('.latest_buzz').owlCarousel({
        stagePadding: 100,
        margin:20,
        loop: true,
        nav: true,
        navText:[
            backbutton,
            nextbutton
        ],
        dots : false,
        responsive: {
            0: {
                stagePadding: 50,
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
            1020: {
                items: 2,
            }
        }
    });
    $('.testimonials').owlCarousel({
        stagePadding: 100,
        margin:20,
        loop: true,
        nav: true,
        navText:[
            backbutton,
            nextbutton
        ],
        dots : false,
        responsive: {
            0: {
                stagePadding: 50,
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 2,
            },
            1020: {
                items: 2,
            }
        }
    });
    $('.partner').owlCarousel({
        stagePadding: 100,
        margin:20,
        loop: true,
        nav: true,
        navText:[
            backbutton,
            nextbutton
        ],
        dots : false,
        responsive: {
            0: {
                stagePadding: 50,
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 4,
            },
            1024: {
                items: 3,
            }
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const knowMoreBtn = document.getElementById('knowMoreBtn');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    knowMoreBtn.addEventListener('click', function(e) {
        e.preventDefault();
        overlay.classList.add('show');
    });

    closeBtn.addEventListener('click', function() {
        overlay.classList.remove('show');
    });
});