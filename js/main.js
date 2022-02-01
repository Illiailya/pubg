$(function () {

	$(window).on("scroll", function() {
		$('.header').toggleClass("header--active", $(this).scrollTop() > 0);
	});
	// Бургер
	$('.burger').on('click', function () {
		$('.burger').toggleClass('burger--active');
		$('.menu').toggleClass('menu--active');
		$('body').toggleClass('lock');
	});

	$('.header__language').styler();

	$('.slider-functional').slick({
		dots: true,
		arrows: true
	});

	$('.about__slider').slick({
		dots: false,
		arrows: true
	});

	$('.price__slider').slick({
		dots: true,
		arrows: false
	});
	


	// accordion c анимаций
	$('.question__link').on('click', function () {
		
		$(this).parent().find('.question__link').toggleClass('question__link--active');
		if ($(this).parent().find('.question__content').length) {
			$(this).parent().find('.question__content').slideToggle(300);
			return false;
		}
	
	});




});



