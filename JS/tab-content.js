$(document).ready(function() {
	$('#tab_2').click(function() {
		$('#tab_1').removeClass('active__content-tab');
		$('#tab_2').addClass('active__content-tab');
		$('.select1').hide(800);
	});
	$('#tab_1').click(function() {
		$('#tab_1').addClass('active__content-tab');
		$('#tab_2').removeClass('active__content-tab');
		$('.select1').show(800);
	});
});