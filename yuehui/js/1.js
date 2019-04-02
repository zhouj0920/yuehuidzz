$(function(){
    var first=$('#imgBox li').eq(0).clone(true).appendTo("#imgBox");
    var imgIndex=0;
    $("#arrRight").click(function(){
        // alert(123);
        imgIndex++;
        if(imgIndex>5){
            $('#imgBox').css('left','0');
            imgIndex=1;
        }
        var move=-imgIndex*$(".box").width();
        $("#imgBox").stop().animate({left:move},500);
        if(imgIndex==5){
            $("#dianBox li").eq(0).addClass("current").siblings().removeClass("current");
        }else{
            $("#dianBox li").eq(imgIndex).addClass("current").siblings().removeClass("current");
        }
        
    })
    $("#arrLeft").click(function(){
        // alert(123);
        imgIndex--;
        if(imgIndex<0){
            $("#imgBox").css('left','-2600px');
            imgIndex=4;
        }
        var move=-imgIndex*$(".box").width();
        $("#imgBox").stop().animate({left:move},500);
        $("#dianBox li").eq(imgIndex).addClass("current").siblings().removeClass("current");
    })
    $("#dianBox li").click(function(){
        // alert(123);
        $(this).addClass('current').siblings().removeClass('current');
        imgIndex=$(this).index();
        var move=-imgIndex*$(".box").width();
        $("#imgBox").stop().animate({left:move},500);
    })
    var timer=setInterval(function(){
        $("#arrRight").click();
    },2000)
    $('.box').hover(function(){
        clearInterval(timer);
    },function(){
        timer=setInterval(function(){
            $("#arrRight").click();
        },2000);
    })
})