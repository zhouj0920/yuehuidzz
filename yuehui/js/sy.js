$('.jineng ul li').click(function(){
    var index = $(this).index();
    switch (index) {
        case 0:
            $(this).children().attr('src','../images/wyljn1.png');
            $('.jineng ul').children().eq(1).children().attr('src','../images/wyljn2_1.png');
            $('.jineng ul').children().eq(2).children().attr('src','../images/wyljn3_1.png');
            $('.jineng ul').children().eq(3).children().attr('src','../images/wyljn4_1.png');
            break;
        case 1:
            $(this).children().attr('src','../images/wyljn2.png')
            $('.jineng ul').children().eq(0).children().attr('src','../images/wyljn1_1.png');
            $('.jineng ul').children().eq(2).children().attr('src','../images/wyljn3_1.png');
            $('.jineng ul').children().eq(3).children().attr('src','../images/wyljn4_1.png');
            break;
        case 2:
            $(this).children().attr('src','../images/wyljn3.png')
            $('.jineng ul').children().eq(0).children().attr('src','../images/wyljn1_1.png');
            $('.jineng ul').children().eq(1).children().attr('src','../images/wyljn2_1.png');
            $('.jineng ul').children().eq(3).children().attr('src','../images/wyljn4_1.png');
            break;
        case 3:
            $(this).children().attr('src','../images/wyljn4.png')
            $('.jineng ul').children().eq(0).children().attr('src','../images/wyljn1_1.png');
            $('.jineng ul').children().eq(1).children().attr('src','../images/wyljn2_1.png');
            $('.jineng ul').children().eq(2).children().attr('src','../images/wyljn3_1.png');
            break;
    }
    $('.beiban').children().eq(index).css('display','block').siblings().css('display','none')
})
//----------------------------------------
$('.main-li ul li').click(function(){
    $(this).animate({'width':'660px'},1000).siblings().animate({'width':'128px'},1000)  
})
//-----------------------------------------
$('.main>img').click(function(){
    $('html,body').stop().animate({'scroll-top':'0px'},500)
})