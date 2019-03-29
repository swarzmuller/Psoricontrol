$('.action__slider').slick({
    infinite: false,
    slidesToShow: 1,
    dots: true,
    fade: true,
    slidesToScroll: 1
});

$('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: false,
                dots: false
            }
        }
    ]
});

var clickBtn = document.querySelectorAll('.click');
for(var i = 0; i < clickBtn.length; i++){
    clickBtn[i].onclick = function () {
        this.previousElementSibling.classList.toggle('active-rew');
    };
}


$('.reviews__slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $( ".open" ).removeClass( "active-rew" );
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top }, 1000);
});