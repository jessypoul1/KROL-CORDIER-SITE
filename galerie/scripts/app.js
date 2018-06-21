$(document).ready(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
});
  $('.slider-nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
  });
});
$('.slick-arrow').on('click', function(){
  $('.slide-track').height($('.slick-active'))
  console.log($('img.slick-active').height())
})
