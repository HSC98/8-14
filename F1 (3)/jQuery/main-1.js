$(function(){
    // 메뉴
    $(".main >li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    // 이미지슬라이드 영역

    var n =0 ; // 00    1 -100%   2 -200%
    setInterval( leftmove , 3000);
    
    function leftmove(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }
        pos = n * (-100) + "%";

        $(".fade ").animate({left:pos}, 500);
    }// function

   
    // 탭

    $(".tab h2").click(function(){
        $(".tab h2").removeClass("on");
        $(this).addClass("on");
        $(".tab ul").hide();
        $(this).next().css({display:"flex"});
    })//

    // 팝업

    $(".p_click").click(function(){
        $(".pop").fadeIn();
    })

    $(".close").click(function(){
        $(".pop").fadeOut()
    })






})//jquery