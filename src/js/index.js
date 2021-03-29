$(document).ready(function(){
    $('.slick').slick({
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        arrows: true,
        autoplaySpeed: 2000
});
    const date = new Date();
    const year = date.getFullYear()
    $('.copy').text('Copyright ' + year);
});