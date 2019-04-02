var ww = $(window).width();
var hh = $(window).height();
var scrollTop = 0;
var roll = true;
var audio = document.getElementById("audio");
var sc2 = 0;
var sc1 = true;
$(function(){
    $(".sec1,.wrap").css({"height": hh + "px"});
    $(".sec1").mousewheel(function(evt, sc){
        if(sc < 0 && roll){
            $(".sec1").animate({"top": -hh + "px"}, 500);
            roll = false;
            sc1 = true;
        }
    });
    $(".section").mousewheel(function(evt, sc){
        console.log(sc);
        // if(sc >= 0 && !scrollTop && !roll){
        //     $(".sec1").animate({"top": "0px"}, 500);
        //     roll = true;
        // }
        if(sc == -1){
            sc2 = 0;
        }
        console.log(roll,scrollTop,sc,sc2,sc1);
        if(!roll && scrollTop == 0 && sc == 1 && sc2 == 0 && sc1){

            sc1 = false;
            setTimeout(function(){
                sc2 = 1;
            },500);
            return;
        }

        if(!roll && scrollTop == 0 && sc==1 && sc2 == 1 && !sc1){
            $(".sec1").animate({"top": "0px"}, 500);
            roll = true;
        }
    });

    $(".section").scroll(function(){
        scrollTop = $(".section").scrollTop();
        
    });
    var slideact = true;
    $(".slidebtn").click(function(){
        if(slideact){
            $(".slide").animate({"left": "-236px"},500).show(function(){
                $(".slidebtn").css({"background": "url('//gamepic.heitao.com/dal/ql0803/p/img/wmopen.png') no-repeat","background-position": "top right"})
            });
            slideact = false;
        }else{
            $(".slide").animate({"left": "0px"},500).show(function(){
                $(".slidebtn").css({"background": "url('//gamepic.heitao.com/dal/ql0803/p/img/wmopen.png') no-repeat","background-position": "top left"})
            });
            slideact = true;
        }
    });
    var danmu = {
        data: {
            color: ["#006000", "#D94600", "#0000E3", "#00BB00", "FF000", "#003E3E", "#600030", "#F9F900"], //显示的颜色
            danmuList: [], //获取弹幕的数组
            reqNum: 0, //请求的次数
            position: [], //弹幕的初始位置
            timer: null, //定时器
            actNum: 0, //加入第几条弹幕
            reqAllNum: 5, //请求的总次数
            isOpen: true,
            id: 0,
            speed: [3,4,5,6,7,8]

        },
        init: function(){
            var _this = this;

            if(this.data.reqNum > this.data.reqAllnum || this.data.id == 1){
                this.data.danmuList = [];
                this.data.id = 0;
                this.data.reqNum = 0;
                this.data.actNum = 0;
            }

            //获取评论
            $.post("//www.datealive.com/ql0803/msglist?id=" + this.data.id, function(d){
                _this.data.reqNum++;
                _this.data.danmuList = _this.data.danmuList.concat(d.data.list);
                // console.log(_this.data.danmuList);
                _this.start();
                _this.data.id = d.data.id;
            }, "json");
        },
        start: function(){
            var _this = this;
            this.data.timer = setInterval(function(){
                var random = Math.random();
                var cor,siz;
                var text = _this.data.danmuList[_this.data.actNum];
                var textlen = 0;
                for(var i = 0; i < text.toString().length; i++){
                    if(text.toString().charCodeAt(i) > 256){
                        textlen ++;
                    }else{
                        textlen += 0.6;
                    }
                }
                if(random < 0.7){
                    cor = "#fff";
                    siz = 24;
                }else{
                    cor = _this.data.color[parseInt(Math.random() * 8) + 1];
                    siz = 26;
                }
                $(".danmu").append("<p id='danmu" + _this.data.actNum +"'>"+ text +"</p>");
                var $danmu = $("#danmu" + _this.data.actNum);
                var $danmuWidth = $danmu.width();
                $danmu.css({width: textlen * siz + "px", "left": ww  + "px", "top": parseInt(random * 15) * 40 + "px", "color": cor, "font-size": siz + "px"});
                var dmTimer = setInterval(function(){
                    if(!_this.data.isOpen){
                        clearInterval(dmTimer);
                        return;
                    }
                    var danmuLeft = parseInt($danmu.css("left"));
                    // console.log(danmuLeft);
                    $danmu.css({"left": danmuLeft - 4 + "px"});
                    if(danmuLeft < -textlen * siz){
                        clearInterval(dmTimer);
                        $danmu.remove();
                    }
                },60);
                _this.data.actNum++;
                if(_this.data.actNum >= _this.data.danmuList.length ){
                    _this.data.actNum = 0;
                    clearInterval(_this.data.timer);
                    if(_this.data.danmuList.length < 50){
                        setTimeout(function(){
                            _this.init();
                        }, (15*26+ww)/4*60 - _this.data.danmuList.length*60);
                    }else{
                        _this.init();
                    }
                    // _this.init();
                }
            }, 1000)
        },
        stop: function(){
            clearInterval(this.data.timer);
        }
    };



    var sendNum = 0;
    var isSave = false;
    var isOpen = true;
    $(".send").click(function(){
        sendDanmu();
    });
    $("#inp").focus(function(){
        // console.log("aaa");
        var aa = 0;
        $("#inp").bind("keydown",function(event){
        　　　if(event.keyCode == 13){
        　　　　　　 $(".send").click();
        　　　}
            
        　});
    })
    function sendDanmu(){
        if(!isOpen){
            alert("请先开启弹幕！");
            return;
        }
        // if(isSave){
        //     alert("您评论过于频繁！");
        //     return;
        // }
        var inplen = 0;
        var inp = $.trim($("#inp").val());
        if(inp == ""){
            alert("请输入内容！");
            return;
        }
        for(var i = 0; i < inp.length; i++){
            if(inp.charCodeAt(i) > 256){
                inplen ++;
            }else{
                inplen += 0.6;
            }
        }
        $(".danmu").append("<p class='usersend usersend"+sendNum+"'>"+inp+"</p>");
        var send = $(".usersend"+sendNum);
        var random = Math.random();
        var color = "#00f7ff";
        send.css({width: 30*inplen + "px","left": ww + "px", "top": random*450 + "px", "font-size": 28 + "px", "color": color, "border": "3px solid " + color, "font-weight": "bold", "background": "rgba(255,255,255,0.4)", "text-align": "center"});
        var dmTimer = setInterval(function(){
            var danmuLeft = parseInt(send.css("left"));
            // console.log(danmuLeft);
            send.css({"left": danmuLeft - 6 + "px"});
            if(danmuLeft < -send.width()){
                clearInterval(dmTimer);
                send.remove();
            }
        },60);
        sendNum ++;

        //将评论存入数据库
        $.post("//www.datealive.com/ql0803/sendmsg", {content:inp}, function(data){})

        isSave = true;
        $("#inp").val("");
    }




    $(".msg1").delay(500).show(function(){
        $(".msg1").animate({"opacity": "0"},1000);
        $(".pen").removeClass("hide").animate({"opacity": "1"},2000);
        $(".msg2,.msg3,.msg4").show().animate({"opacity": "1"},1000).delay(1000).show(function(){
            $(".mbox").removeClass("hide").delay(1500).animate({"opacity": "0.4"},500);
            $(".msg4").removeClass("hide").animate({"margin-top": "-1000px"},800).show(function(){
                $(".msg").removeClass("hide").animate({"margin-top": "-284px"},800);
                $(".p").delay(500).show(function(){
                    $(".p").animate({"margin-top": "-50px","margin-left": "100px","opacity": "1"},500).show(function(){
                        $(".p").addClass("pact");
                    });
                    $(".jr").show().delay(1000).animate({"opacity": "1"},1000);
                });
            });
        });
    });
    $(".jr").click(function(){
        $(".msgbox").hide();
        danmu.init();
    });

    $(".on-off").click(function(){
        if(isOpen){
            $(".on-off").css({"color": "#01fff6"});
            $(".on-off").html("开启屏幕");
            danmu.stop();
            danmu.data.isOpen = false;
            $(".danmu").empty();
            isOpen = false;
            return;
        }else{
            $(".on-off").css({"color": "#fff"});
            $(".on-off").html("关闭屏幕");
            danmu.data.isOpen = true;
            danmu.init();
            isOpen = true;
            return;
        }
    });
    var birth = new Swiper ('.birth .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        effect : 'coverflow',
        slidesPerView: 2,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 30,
            stretch: 20,
            depth: 50,
            modifier: 2,
            slideShadows : true
        },
        on: {
            slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
        },
    });
    var cakebox = new Swiper ('.cakebox .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-right',
            prevEl: '.swiper-button-left',
        },
        slidesPerView: 4,
        on: {
            slideChangeTransitionEnd: function(){
              // console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
        },
    });
    var audioplay = true;
    $(".audio").click(function(){
        if(audioplay){
            $(this).attr("src", "//gamepic.heitao.com/dal/ql0803/p/img/audio2.png");
            audio.pause();
            audioplay = false;
        }else{
            $(this).attr("src", "//gamepic.heitao.com/dal/ql0803/p/img/audio1.png");
            audio.play();
            audioplay = true;
        }
    });
    var closebtn = true;
    $(".closebtn").click(function(){
        if(closebtn){
            $(".sendbox").animate({"bottom": "-122px"},500);
            $(".closebtn").css({"background": "url('//gamepic.heitao.com/dal/ql0803/p/img/wmarrow.png') rgba(169,80,122,0.8) no-repeat","background-position": "86px -24px"});
            closebtn = false;
            $(".closebtn p").html("打开");
        }else{
            $(".sendbox").animate({"bottom": "0px"},500);
            $(".closebtn").css({"background": "url('//gamepic.heitao.com/dal/ql0803/p/img/wmarrow.png') rgba(169,80,122,0.8) no-repeat","background-position": "86px 18px"});
            $(".closebtn p").html("关闭");
            closebtn = true;
        }
    });
    $(".section").scroll(function(){
        var scr = $(".section").scrollTop();
        if(scr > 2550){
            $(".logo").attr("src", "//gamepic.heitao.com/dal/ql0803/p/img/wmlogo1.png");
        }else{
            $(".logo").attr("src", "//gamepic.heitao.com/dal/ql0803/p/img/wmlogo2.png");
        }
    });

})