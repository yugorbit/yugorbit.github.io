$(function(){
    $(".scroll").click(function (event) {
		event.preventDefault();

		var url = this.href;

		var parts = url.split("#");
		var target = parts[1];

		var target_offset = $("#" + target).offset();
		var target_top = target_offset.top - 48;

		$('html, body').animate({ scrollTop: target_top }, 1000, 'swing');
	});
});