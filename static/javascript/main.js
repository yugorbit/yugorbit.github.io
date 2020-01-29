$(function(){
  $(".scroll").click(function(e){
    //non-default moving
    e.preventDefault();

    let url = this.href;
    let parts = url.split("#");
    let target = parts[1];

    let targetOffset = $("#" + target).offset().top - 48;

    $("html, body").animate({scrollTop: targetOffset}, 750, 'swing');
  });
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    var switchPos = $(".contents").offset();
  
    if(scroll > switchPos.top){
      $('.menu').addClass('fixed');
    }else{
      $('.menu').removeClass('fixed');
    }
  });

  $("#stressns").click(function(){
    const portal = document.querySelector('portal');
    $('.portal_demo').addClass("active");
    portal.addEventListener('click', () => portal.activate());

  })

});

