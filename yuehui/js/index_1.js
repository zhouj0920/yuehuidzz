$(function(){
	console.log(_month);
	var b = 0;
	for(var i = 0; i < 4; i++){
		timeline(i, "bottom");
	}
	if(_month == 201810){
		timeline(0, "top");
		b = 0;
	}else if(_month == 201811){
		timeline(1, "top");
		b = 1;
	}else if(_month == 201812){
		timeline(2, "top");
		b = 2;
	}else{
		timeline(3, "top");
		b = 3;
	}
	$(".list").eq(b).removeClass("hide").siblings().addClass("hide");
	$(".timeline a").click(function(){
		var index = $(this).index();
		if(index < 3){
			timeline(b, "bottom");
			timeline(index, "top");
			$(".list").eq(index).removeClass("hide").siblings().addClass("hide");
			b = index;
		}
	});

	$(".nav li").click(function(){
		var id = $(this).attr('id');
		var index = $(this).index();

		$(".contlist").empty();
		if(2294 == id) {
			$('.contlist').append(' <iframe src="//player.bilibili.com/player.html?aid=39151550&cid=68808639&page=1" width="800" height="600" style="margin-left: 150px" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>');
		}else{
			$.post('/fullmoon/content', {id: id}, function(ret){
				var data = '';
				var obj = $.parseJSON(ret);
				data = ' <div class="time">\
	                        '+obj.pub_time+' | ALL EVENT INFORMATION\
	                    </div>\
	                    <div class="title">\
	                        '+obj.title+'\
	                    </div>\
	                    <div class="content">\
	                        '+obj.content+'\
	                    </div>';
				$(".contlist").append(data);
			});
		}
		$(this).addClass("act").siblings().removeClass("act");
		$(".contlist").eq(index).removeClass("hide").siblings().addClass("hide");
	});

	var index = 0;
	$(".qblist").click(function(){
		index = $(this).index()-1;
		console.log(index);
		$(".pop").show();
		$(".poplist").eq(index).removeClass("hide").siblings().addClass("hide");
	});

	$(".btn1").click(function(){
		index++;
		$(".poplist").eq(index).removeClass("hide").siblings().addClass("hide");
	});
	$(".btn2").click(function(){
		index--;
		$(".poplist").eq(index).removeClass("hide").siblings().addClass("hide");
	});

	$(".qbjs").click(function(){
		$(".pop").show();
		$(".poplist").eq(0).removeClass("hide").siblings().addClass("hide");
	});

	

	$(".close").click(function(){
		$(".pop").hide();
	});

	

	function timeline(num, pos){
		$(".timeline a").eq(num).css({"background": "url('"+url+"/fullmoon/dal3/2/p/timeline.png?v=3') no-repeat", "background-position": -num*971/4+"px "+pos})
	}
})