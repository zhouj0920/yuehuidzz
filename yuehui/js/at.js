$(function(){
	$(".nav span").click(function(){
		var index = $(this).index();
		$(this).addClass("navact").siblings().removeClass("navact");
		$(".listbox ul").eq(index).removeClass("hide").siblings().addClass("hide");
	});
	$(".close,.picclose").click(function(){
		$(".pop").hide();
		clicknum = 0;
		len = 0;
		$(".videocont video").attr("src","");
	});

	$(".piclist li .headpic").click(function(){
		linum = $(this).parent().index();
		$(".pop").show();
		$(".picbox").removeClass("hide").siblings().addClass("hide");
		$(".picuser").html("作者："+arr[linum].author);
		if(typeof arr[linum].pic == "string"){
			$(".picimg").attr("src",arr[linum].pic);
			$(".leftbtn,.rightbtn").hide();
			console.log("string")
		}else{
			len = arr[linum].pic.length;
			$(".picimg").attr("src",arr[linum].pic[0]);
			$(".leftbtn,.rightbtn").show();
			console.log("object")
		}
	});
	$(".rankbox .headpic").click(function(){
		linum = parseInt($(this).attr("data"));
		// return;
		if(linum == 100){
			$(".pop").show();
			$(".videobox").removeClass("hide").siblings().addClass("hide");
			$(".videocont video").attr("src",url_pic+ "/video6.mp4");
			return;
		}
		$(".pop").show();
		$(".picbox").removeClass("hide").siblings().addClass("hide");
		$(".picuser").html("作者："+arr[linum].author);
		if(typeof arr[linum].pic == "string"){
			$(".picimg").attr("src",arr[linum].pic);
			$(".leftbtn,.rightbtn").hide();
			console.log("string")
		}else{
			len = arr[linum].pic.length;
			$(".picimg").attr("src",arr[linum].pic[0]);
			$(".leftbtn,.rightbtn").show();
			console.log("object")
		}
	});
	$(".nt li .headpic").click(function(){
		linum = 18;
		$(".pop").show();
		$(".picbox").removeClass("hide").siblings().addClass("hide");
		$(".picuser").html("作者："+arr[linum].author);
		if(typeof arr[linum].pic == "string"){
			$(".picimg").attr("src",arr[linum].pic);
			$(".leftbtn,.rightbtn").hide();
			console.log("string")
		}else{
			len = arr[linum].pic.length;
			$(".picimg").attr("src",arr[linum].pic[0]);
			$(".leftbtn,.rightbtn").show();
			console.log("object")
		}
	})
	$(".leftbtn").click(function(){
		clicknum--;
		if(clicknum < 0){
			clicknum = len - 1;
		}
		$(".picimg").animate({"opacity": "0"},500).show(function(){
			$(this).attr("src",arr[linum].pic[clicknum]).animate({"opacity": "1"},500);
		});
	});
	$(".rightbtn").click(function(){
		clicknum++;
		if(clicknum == len){
			clicknum = 0;
		}
		$(".picimg").animate({"opacity": "0"},500).show(function(){
			$(this).attr("src",arr[linum].pic[clicknum]).animate({"opacity": "1"},500);
		});
	});
	$(".articlelist li .wztitle,.rankbox .wztitle").click(function(){
		var id = $(this).attr("article_id");
		var author = $(this).parent().find(".username").html().split(" ")[1];
		console.log(author);
		// return
		console.log(id);
		$.post("/dal/getFansInfo",{id: id},function(data){
			// console.log(data)
			$(".pop").show();
			$(".articlebox").removeClass("hide").siblings().addClass("hide");
			$(".artcont").html(data.data.content);
			$(".picuser").html("作者："+author)
		},'json')
		// return;

	});
	$(".videolist li .headpic").click(function(){
		$(".pop").show();
		$(".videobox").removeClass("hide").siblings().addClass("hide");
		var index = $(this).parent().index();
		$(".videocont video").attr("src",url_pic+ "/video"+(index+1)+".mp4")
	});

    $(window).scroll(function(){
    	var s = $(window).scrollTop();
    	if(s > 3000){
    		$(".up").show();
    	}else{
    		$(".up").hide();
    	}
    })
    $(".up").click(function(){
    	$("body").animate({"scroll-top":"0px"},500);
    });
    $(".shownav span").click(function(){
    	var index = $(this).index();
    	$(this).addClass("navact").siblings().removeClass("navact");
    	if(index == 0){
    		$(".gift_rank").removeClass("hide");
    		$(".gift_love").addClass("hide");
    	}else{
    		$(".gift_love").removeClass("hide");
    		$(".gift_rank").addClass("hide");
    	}
    })
    var obj = {};
    var isCookie = is_cookie();
    var li = $("li"); 
    if(isCookie){
    	for(var i = 0; i < li.length; i++){
    		var liData = li.eq(i).attr("data");
    		console.log(liData);
    		// return;
    		if(obj[liData]){
    			li.eq(i).find(".zan").attr("src", url_pic+ "/heart2.png");
    			li.eq(i).find(".zan").attr("data","1");
    		}
    	}
    }
    $(".zan").click(function(){
    	var liData = $(this).parents("li").attr("data");
    	var data = $(this).attr("data");
    	if(data == "1"){
    		alert("您已点过赞！")
    		return;
    	}
    	$(this).attr("src", url_pic+ "/heart2.png").attr("data","1");
    	obj[liData] = 1;
    	$.cookie("ht_zan", JSON.stringify(obj), {expire: 1});
    });
    function is_cookie(){
    	if($.cookie("ht_zan")){
    		// console.log($.cookie("ht_zan"))
    		obj = JSON.parse($.cookie("ht_zan"));
    		return true;
    	}else{
    		obj = {};
    		return false;
    	}
    }
})