$(document).ready(function () {

    let $btns = $('.project-area .button-group button');

    // to get carousel effect in selected images of project area

    $btns.click(function (e) {
        console.log('in click fn')
        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .row').isotope({
            filter: selector
        });
        return false

    })


    // to enable view of images seen after clicking "All" button
    // as the default view, we are triggerig a click as soon as the page loads
    $('.project-area .button-group #btn-1').trigger('click');



    //using magnific popup library 
    // The option : "gallery: { enabled: true }" allows us to view images as part of gllery 
    // and once an image is selected, all others can be accessed by clicking next or previous button"
    $('.project-area .row .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true },
    });

    //using owl carousel library for testimonials part

    $('.site-main .testimonials-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }

    })



    //sticky navigation menu

    let nav_offset_top = $('.header_area').height() - 50;

    function navbarfixed() {
        if ($('.header_area').length) {

            $(window).scroll(function () {

                let scroll = $(window).scrollTop();

                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbarfixed');
                }
                else {

                    $('.header_area .main-menu').removeClass('navbarfixed');

                }

            })
        }
    }


    navbarfixed();
})


