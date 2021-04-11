$(".filter .panel-tab").click(function() {
	$(".filter .panel-tab").removeClass("active").eq($(this).index()).addClass("active");
	$(".filter-content__tab-block").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");