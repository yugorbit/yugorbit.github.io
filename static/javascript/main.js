$(function(){
  $(".scroll").click(function(e){
    //non-default moving
    e.preventDefault();

    let url = this.href;
    let parts = url.split("#");
    let target = parts[1];

    let targetOffset = $("#" + target).offset().top;

    $("html, body").animate({scrollTop: targetOffset}, 750, 'swing');

  });
});