$(document).ready(function() {
	$('.signup').click(function() {
		$('.popup-signup').addClass('active-signup');
	});
	$('.popup__close').click(function() {
		$('#popupFirst').removeClass('active-signup');
	});
	$('.popup__signup-button').click(function() {
		$('#popupFirst').removeClass('active-signup');
	});
	$('.phone').click(function() {
		$('.popup-phone').addClass('active-phone');
	});
	$('.popup__close').click(function() {
		$('.popup-phone').removeClass('active-phone');
	});
	$('#popup-phone__button').click(function() {
		$('.popup-phone').removeClass('active-phone');
	});
});

/*$(document).ready(function() {
	$('phone').click(function() {
		$('.popup-phone').addClass('active-phone');
	});
	$('.popup__close').click(function() {
		$('.popup-phone').removeClass('active-phone');
	});
	$('.popup__signup-button').click(function() {
		$('#popupFirst').removeClass('active-signup');
	});
});*/