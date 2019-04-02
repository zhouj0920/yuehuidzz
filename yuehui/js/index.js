
$(function(){
	var ww = $(window).width();
	var sideshow = false;
	$(".cvbtn").click(function(){
		document.getElementById("audio").play();
	});
	$(".bannerimg ul").css("width", "1832px");
	var arr = [
					["images/a1.png","鸢一折纸","Tobiichi Origami",URL_PIC_GAME+"/website/5.0/1/p/audio/yyzz.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/yyzz.mp4","富樫美铃","人设：<br/>一头白发，仿佛人偶一样无性格的少女，身份是陆上自卫队的对精灵部队的队员，阶级是上士。年幼绝望时被男主角士道安慰，对他十分依赖并且有很高的好感度。<br/><br/>特点：<br/>1、在人前一直没有表露出过多的感情，和她说话也会被无视，休息时也一个人在看书。<br/>2、对于恋爱极其缺乏常识，经常做出意义不明的举动。", ["年龄：16岁","身高：152cm","识别名：天使","三围：B75/W55/H79","天使：绝灭天使","灵装：神威灵装-一番"], URL_PIC_GAME+"/website/6.0/1/p/img/yyzz_poster.jpg"],
					["images/a2.png","时崎狂三","Tokisaki Kurumi",URL_PIC_GAME+"/website/5.0/1/p/audio/sqks.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/sqks.mp4","真田麻美","人设：<br/>是唯一没有被男主角士道封印灵力的“最恶的精灵”，对杀人毫不抗拒，也毫不手软，并且会吸收他人的时间。举手投足间流露出大小姐的气息，也会流露出或可爱或色气的神情。<br/><br/>特点：<br/>1、在作品中流露出了对猫咪一定程度的喜爱<br/>2、在男主角士道遭遇险情时会暗中出手相助", ["年龄：16岁","身高：157cm","识别名：梦魇","三围：B85/W59/H87","天使：刻刻帝","灵装：神威灵装-三番"], URL_PIC_GAME+"/website/6.0/1/p/img/sqks_poster.jpg"],
					["images/a3.png","四糸乃","Yoshino",URL_PIC_GAME+"/website/5.0/1/p/audio/smn.wav",URL_PIC_GAME+"/website/5.0/1/p/video/smn.mp4","野水伊织","人设：<br/>长相宛如法国娃娃般美丽的蓝发少女，有梦幻般的外貌和娇小的圣体，外表年龄与士道的妹妹五河琴里相近。生性温驯，胆小怕生，几乎不敢直接与人对话。<br/><br/>特点：<br/>拿着兔子型的手偶四糸奈，四糸奈是独立的人格，也是她最好的朋友。", ["年龄：13岁","身高：144cm","识别名：隐居者","三围：B73/W55/H78","天使：冰结傀儡","灵装：神威灵装-四番"], URL_PIC_GAME+"/website/6.0/1/p/img/smn_poster.jpg"],
					["images/a4.png","五河琴里","Itsuka Kotori",URL_PIC_GAME+"/website/5.0/1/p/audio/whql.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/whql.mp4","竹达彩奈","人设：<br/>男主角士道的义妹，也是精灵组织“Ratatoskr”的的司令官，同时还是拥有精灵之力的人类。精灵化后身着羽衣般的红色和服，并且拥有如同不死鸟一般的再生能力，不过精灵化时，琴里自己会逐渐产生无法控制的破坏冲动，容易失去理智。<br/><br/>特点：<br/>通过变换黑白两色的发带来改变性格：白色发带是粘人爱哭的妹妹模式，黑色发带为抖S、毒舌的司令官模式。", ["年龄：14岁","身高：145cm","识别名：炎魔","三围：B72/W53/H74","天使：灼烂歼鬼","灵装：神威灵装-五番"], URL_PIC_GAME+"/website/6.0/1/p/img/whql_poster.jpg"],
					["images/a5.png","七罪","Natsumi",URL_PIC_GAME+"/website/6.0/1/p/audio/qz.mp3",URL_PIC_GAME+"/website/6.0/1/p/video/qz.mp4","真野步","人设：<br/>绿色的长发蓬松散乱，瞳孔宛如翡翠的纤细少女，能力是变化，初次登场时她使用自己的天使“赝造魔女”的灵力把自己变成一个理想中有飘逸长发的艳丽女性。<br/><br/>特点：<br/>1、对自己本身的容貌极其没有自信，甚至容易把他人的赞扬与负面情绪联系在一起，不惜用一切手段去陷害看过自己本来面貌的人<br/>2、好奇心又十分旺盛，使得她不断的现身并且观察人类世界，十分精通人类社会的知识。", ["年龄：17岁","身高：170cm","识别名：女巫","三围：B94/W62/H90","天使：赝造魔女","灵装：神威灵装-七番"], URL_PIC_GAME+"/website/6.0/1/p/img/qz_poster.jpg"],					
					["images/a6.png","八舞夕弦","Yamai Yuzuru",URL_PIC_GAME+"/website/5.0/1/p/audio/bwxx.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/bwxx.mp4","布里德卡特•塞拉•惠美","人设：<br/>金橙色的长发绑成三股长辫的少女，体态较为丰满，有着和耶俱矢比起来更好的身材，但常常无精打采似的眯起眼睛,与耶倶矢个性相反般的冷静温驯。<br/><br/>特点：<br/>1、与耶俱矢原本是同一个精灵，但在某次现界时分裂成耶倶矢和夕弦两个个体，虽然两者意识个体皆为独立，但严格来讲还算是同一个存在。<br/>2、两人都有著橘色的头发和水银般的眼睛，脸型更像同个模子刻的，但发型体型跟性格却是大不相同。<br/>3、谈吐的方式很文静并有自己的方式，在说话的开头会以两个字来表示主旨，以这样奇特的方式说话。,与耶倶矢个性相反般的冷静温驯。", ["年龄：未知","身高：155cm","识别名：狂战士","三围：B90/W61/H86","天使：束缚者","灵装：神威灵装-八番"], URL_PIC_GAME+"/website/6.0/1/p/img/bwxx_poster.jpg"],
					["images/a7.png","八舞耶俱矢","Yamai Kaguya",URL_PIC_GAME+"/website/5.0/1/p/audio/bwyjs.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/bwyjs.mp4","内田真礼","人设：<br/>与夕弦同被称为“狂战士（Berserk）”的风之精灵，有橙色的头发和水银色的瞳孔，头发在脑后盘起，体态较为纤细，个性活泼，总是女王般高高在上的强势态度<br/><br/>特点：<br/>1、与夕弦原本是同一个精灵，但在某次现界时分裂成耶倶矢和夕弦两个个体，虽然两者意识个体皆为独立，但严格来讲还算是同一个存在。<br/>2、两人都有著橘色的头发和水银般的眼睛，脸型更像同个模子刻的，但发型体型跟性格却是大不相同。<br/>3、会使用戏剧一般的措辞说话，不过这只是为了让自己有精灵的威严而故意为之，情绪激动时就会变回普通的说话方式。", ["年龄：未知","身高：157cm","识别名：狂战士","三围：B79/W56/H81","天使：穿刺者","灵装：神威灵装-八番"], URL_PIC_GAME+"/website/6.0/1/p/img/bwyjs_poster.jpg"],
					["images/a8.png","诱宵美九","Izayoi Miku",URL_PIC_GAME+"/website/5.0/1/p/audio/yxmj.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/yxmj.mp4","茅原实里","人设：<br/>有着紫银的头发和紫银的瞳孔，以及说话不紧不慢的特点，巨乳。有着只是搭话的程度好感度就会降到蟑螂之下的极度厌恶男性的性格，非常喜欢女性即百合的精灵。对自己的声音能力有很强的依赖，担心失去之后便会一无是处。<br/><br/>特点:<br/>1、使用能力时可以为所欲为，操纵他人听从自己的命令。<br/>2、虽然被男主角攻略，不过非常喜欢男主角的女装“士织”，所以本质上还是百合。", ["年龄：17岁","身高：165cm","识别名：歌姬","三围：B94/W63/H88","天使：破军歌姬","灵装：神威灵装-九番"], URL_PIC_GAME+"/website/6.0/1/p/img/yxmj_poster.jpg"],
					["images/a9.png","夜刀神十香","Yatogami Tohka",URL_PIC_GAME+"/website/5.0/1/p/audio/ydssx.mp3",URL_PIC_GAME+"/website/5.0/1/p/video/ydssx.mp4?v=2","井上麻里奈","人设：<br/>初登场时英姿飒爽，持剑而立，拥有一头及膝的长发和水晶般不可思议的眼睛，美丽程度堪称“暴力”。实际上是一位对人类世界充满好奇、性格天真的天然系精灵。<br/><br/>特点：<br/>1、爱吃，人类社会一切美食都在她的喜爱范围之内，尤其喜欢黄豆粉面包<br/>2、在唱歌方面极具天赋", ["年龄：16岁","身高：155cm","识别名：Princess【公主】","三围：84/58/83","天使：鏖杀公","灵装：神威灵装-十番"], URL_PIC_GAME+"/website/6.0/1/p/img/ydssx_poster.jpg"],
					["images/a10.png","万由里","Mayuri",URL_PIC_GAME+"/website/6.0/1/p/audio/wyl.mp3?v=2019012901",URL_PIC_GAME+"/website/6.0/1/p/video/wyl.mp4","雨宫天","人设：<br/>静静注视着男主角士道的精灵，没有类似人类一样的实体，真实身份是复数的精灵灵力在一个地方集中的场合下判断容器的存在是否有问题的类似监视系统一样的存在。<br/><br/>特点：<br/>1、平时虽然没有过多的表情，内心其实也是可爱的女孩，会因其他精灵和士道约会而嫉妒，会因获得了“礼物”而露出可爱的微笑。<br/>2、由于本身是由灵力汇聚，在与男主角士道接吻后，便被封印化为虚无，消失了。", ["年龄：16岁","身高：154cm","识别名：未知","三围：B80.4/W63.7/H89.8","天使：雷霆圣域","灵装：神威灵装-万番"], URL_PIC_GAME+"/website/6.0/1/p/img/wyl_poster.jpg"],
					["images/a11.png","反转十香","Yatogami Tohka",URL_PIC_GAME+"/website/6.0/1/p/audio/fzsx.mp3?v=2019012901",URL_PIC_GAME+"/website/6.0/1/p/video/fzsx.mp4?v=2","井上麻里奈","人设：<br/>初登场时英姿飒爽，持剑而立，拥有一头及膝的长发和水晶般不可思议的眼睛，美丽程度堪称“暴力”。实际上是一位对人类世界充满好奇、性格天真的天然系精灵。<br/><br/>特点：<br/>1、爱吃，人类社会一切美食都在她的喜爱范围之内，尤其喜欢黄豆粉面包<br/>2、在唱歌方面极具天赋", ["年龄：16岁","身高：155cm","识别名：Princess【公主】","三围：84/58/83","天使：鏖杀公","灵装：神威灵装-十番"], URL_PIC_GAME+"/website/6.0/1/p/img/fzsx_poster.jpg"],
					["images/a12.png","艾伦","Ellen Mira Mathers",URL_PIC_GAME+"/website/6.0/1/p/audio/al.mp3",URL_PIC_GAME+"/website/6.0/1/p/video/al.mp4?v=2","伊藤静","人设：<br/>身为人造巫师（魔术师）时只被两个人伤到其身体，第一个是艾略特•鲍德温•伍德曼，第二个是鸢一折纸。五年前成功抓捕本条二亚。将她带到DEM社囚禁。似乎过去和妹妹卡莲•诺拉•梅瑟斯发生一些事情，但是姐妹反目成仇。有些天然呆，很傻，在没有显现装置的时候却几乎与常人无异，甚至被几个高中女生拖住无法行动，其中亚麻美三人组最为出众。从短篇《艾伦马瑟斯最强的一天》可以发现，艾伦意外的有一些中二病，游泳需要名为“普利德文”的浮板，作为最强的魔术师50米跑需要21.5秒，运动神经超差。喜欢艾略特，同时憎恨艾略特叛离时带走了卡莲•诺拉•梅瑟斯而没有带她离开DEM社。", ["年龄：18岁","身高：155cm","种族：巫师","隶属：DEM社 ","名号：世界上最强的魔术师","亲人：卡莲•诺拉•梅瑟斯"]],
					["images/a13.png","灭杀皇十香","Yatogami Tohka",URL_PIC_GAME+"/website/6.0/1/p/audio/mshsx.mp3",URL_PIC_GAME+"/website/6.0/1/p/video/mshsx.mp4?v=2","井上麻里奈","人设：<br/>初登场时英姿飒爽，持剑而立，拥有一头及膝的长发和水晶般不可思议的眼睛，美丽程度堪称“暴力”。实际上是一位对人类世界充满好奇、性格天真的天然系精灵。<br/><br/>特点：<br/>1、爱吃，人类社会一切美食都在她的喜爱范围之内，尤其喜欢黄豆粉面包<br/>2、在唱歌方面极具天赋", ["年龄：16岁","身高：155cm","识别名：Princess【公主】","三围：84/58/83","天使：鏖杀公","灵装：神威灵装-十番"], URL_PIC_GAME+"/website/6.0/1/p/img/mshsx_poster.jpg"],
					["images/a14.png","崇宫真那","Takamiya mana ",URL_PIC_GAME+"/website/6.0/1/p/audio/cgzn.mp3?v=2019012901",URL_PIC_GAME+"/website/6.0/1/p/video/czgn.mp4?v=2","味里","人设：<br/>神韵与五河士道非常相似的少女（经过诱宵美九的发现，散发的真那=小一号的士织），面容伶俐而绑着单马尾，左眼下有个泪痣，身高147cm，看起来年约为14岁左右，用一种夹杂敬语的方式说话，但对除了五河士道及士道身边的人物外对其它的人讲话时语气比较傲。", ["年龄：未知","身高：147cm","性别：女","三围：B74/W56/H80","哥哥：五河士道","其它"], URL_PIC_GAME+"/website/6.0/1/p/img/czgn_poster.jpg"]
				];
	var giftshow = true;
	
	side(0);
	$(".sidenav li").click(function(){
		var index = $(this).index();
		side(index);
		switch(index){
			case 0:
				$("html,body").animate({"scroll-top": "0px"},500);
				break;
			case 1:
				$("html,body").animate({"scroll-top": "1000px"},500);
				break;
			case 2:
				$("html,body").animate({"scroll-top": "2000px"},500);
				break;
			case 3:
				$("html,body").animate({"scroll-top": "3200px"},500);
				break;
			case 4:
				$("html,body").animate({"scroll-top": "4200px"},500);
				break;
		}
	});
	var bannernum = 0;
	$(".bannernav li").click(function(){
		bannernum = $(this).index();
		$(".bannerimg ul").animate({"margin-left": -bannernum*458+"px"});
		$(this).addClass("act").siblings().removeClass("act");
	});
	bannerloop();
	function bannerloop(){
		bannernum++;
		if(bannernum > 3){
			bannernum = 0;
		}
		$(".bannerimg ul").animate({"margin-left": -bannernum*458+"px"});
		$(".bannernav li").eq(bannernum).addClass("act").siblings().removeClass("act");
		setTimeout(bannerloop, 3000);
	}
	$(".goup").click(function(){
		$("html,body").animate({"scroll-top": "0px"},500);
	});
	$(".newsnav li").click(function(){
		var index = $(this).index();
		$(this).addClass("act").siblings().removeClass("act");
		$(".newslist ul").eq(index).removeClass("hide").siblings().addClass("hide");
	});
	$(window).scroll(function(e){
		var scrolltop = $(window).scrollTop();
		// console.log(scrolltop);
		if(scrolltop >= 0 && scrolltop < 1000){
			side(0);
		}else if(scrolltop >= 1000 && scrolltop < 2000){
			side(1);
		}else if(scrolltop >= 2000 && scrolltop < 3200){
			side(2);
		}else if(scrolltop >= 3200 && scrolltop < 4200){
			side(3);
		}else{
			side(4);
		}

		if(scrolltop > 1000){
			if(!sideshow){
				$(".side").show();
			}
		}else{
			$(".side").hide();
		}
	});
	$(".close").click(function(){
		$(".side").hide();
		sideshow = true;
	});
	$(".elfhead li").click(function(){
		var index = $(this).index();
		console.log(index);
		$(this).addClass("act").siblings().removeClass("act");
		$(".person").attr("src", arr[index][0]);
		$(".elfname p").html(arr[index][1]);
		$(".elfname span").html(arr[index][2]);
		$("#audio").attr("src", arr[index][3]);
		$(".elfvideo video").attr("src", arr[index][4]);
		$(".elfname .cv").html("CV:"+arr[index][5]);
		$(".elfwz p").html(arr[index][6]);
		for(var i = 0; i < 6; i++){
			$(".elfmsg li").eq(i).html(arr[index][7][i]);
		}
		$(".elfvideo video").attr("poster", arr[index][8]);
	});
	var elfheadnum = 0;
	var elfheadlen = Math.ceil($(".elfhead li").length/5);
	$(".elfright").click(function(){
		elfheadnum++;
		if(elfheadnum == elfheadlen){
			elfheadnum = 0;
		}
		$(".elfhead ul").animate({"top": -elfheadnum*450+"px"},500);
	});
	$(".elfleft").click(function(){
		elfheadnum--;
		if(elfheadnum < 0){
			elfheadnum = elfheadlen-1;
		}
		$(".elfhead ul").animate({"top": -elfheadnum*450+"px"},500);
	});
	$(".picsize span").click(function(){
		$(this).addClass("act").siblings().removeClass("act");
		var index = $(this).index();
		if(index == 0){
			$(".mobilepic").show();
			$(".pcpic").hide();
		}else{
			$(".mobilepic").hide();
			$(".pcpic").show();
		}
	});
	var pclist = Math.ceil($(".pclist ul li").length/2);
	var pcnum = 0;
	var pclistlen = Math.ceil($(".pclist ul li").length/4);
	$(".pclist ul").css({"width": pclist*430+"px"});
	$(".pcleft").click(function(){
		pcnum++;
		if(pcnum == pclistlen){
			pcnum = 0;
		}
		$(".pclist ul").animate({"left": -pcnum*860+"px"},500);
	});
	$(".pcright").click(function(){
		pcnum--;
		if(pcnum < 0){
			pcnum = pclistlen-1;
		}
		$(".pclist ul").animate({"left": -pcnum*860+"px"},500);
	});
	$(".bzfl").click(function(){
		$(".picbox").show();
		$(".vbox").hide();
	});
	$(".spzy").click(function(){
		$(".picbox").hide();
		$(".vbox").show();
	});


	var picWidth = 600,xzsrc = "pc";
	$(".pclist li").click(function(){
		$(".pop").show();
		var ulHTML = $(this).parent().html();
		var index = $(this).index();

		$(".poploopbox").append('<div class="poploop"><ul>'+ulHTML+'</ul></div>');
		$(".popbox").append('<div class="miniloop"><ul>'+ulHTML+'</ul></div>');
		$(".miniloop").css({"width": 160 * 5 + "px"});
		$(".miniloop ul").css({"width": 160 * $(".miniloop li").length + "px","margin-left":160*2+"px"});
		$(".miniloop li").css({"width": 150 + "px"});
		$(".miniloop li").eq(index).addClass("act").siblings().removeClass("act");
		loop("poploop",false,picWidth,index);

	});
	$(".closepic").click(function(){
		$(".pop").hide();
		$(".poploop").remove();
		$(".miniloop").remove();
	});
	$(".welnav li").click(function(){
		var index = $(this).index();
		$(this).addClass("act").siblings().removeClass("act");
		$(".welpic ul").eq(index).removeClass("hide").siblings().addClass("hide");
	});
	$(".linkbtn").click(function(){
		$(".poplinks").show();
	});
	$(".poplinkclose").click(function(){
		$(".poplinks").hide();
	});

	

	function loop(cls,autoplay,boxwidth,index){
		var actindex = index;
		var box = $("." + cls);
		var len = box.find("li").length;
		box.css({"width": boxwidth + "px"});
		box.find("ul li").css({"width": boxwidth + "px"});
		box.find("ul").css({"width": boxwidth * len + "px"});
		for(var i = 0; i < len; i++){
			box.find(".paging").append("<span></span>");
		}
		box.find(".paging span").eq(0).addClass("act");
		box.find(".paging span").click(function(){
			actindex = $(this).index();
			box.find("ul").animate({"margin-left": -actindex * boxwidth + "px"},500);
			$(this).addClass("act").siblings().removeClass("act");
		});
		if(autoplay){
			setInterval(function(){
				actindex++;
				if(actindex >= len){
					actindex = 0;
				}
				box.find("ul").animate({"margin-left": -actindex * boxwidth + "px"},500);
				box.find(".paging span").eq(actindex).addClass("act").siblings().removeClass("act")
			}, 5000);
		}
		if(actindex > 0){
			box.find("ul").css({"margin-left": -actindex * boxwidth + "px"});
			box.parents(".popbox").find(".miniloop ul").css({"margin-left": 160 * (-actindex + 2) + "px"});
		}
		downUrl(box, index);
		// $(".xzsrc").attr("href",URL_PIC_GAME+"/website/5.0/1/p/img/"+xzsrc+"/pic"+(actindex+1)+".jpg");
		box.parent().find(".poprbtn").click(function(){
			actindex++;
			if(actindex >= len){
				actindex = 0;
			}
			actpop(box,actindex,boxwidth);
		});
		box.parent().find(".poplbtn").click(function(){
			actindex--;
			if(actindex < 0){
				actindex = len - 1;
			}
			actpop(box,actindex,boxwidth);
		});
		box.parents(".popbox").find(".miniloop ul li").click(function(){
			actindex = $(this).index();
			actpop(box,actindex,boxwidth);
		})
	}
	function actpop(box,actindex,boxwidth){
		downUrl(box, actindex);
		// $(".xzsrc").attr("href",URL_PIC_GAME+"/website/5.0/1/p/img/"+xzsrc+"/pic"+(actindex+1)+".jpg");
		box.find("ul").animate({"margin-left": -actindex * boxwidth + "px"},500);
		box.parents(".popbox").find(".miniloop ul").animate({"margin-left": 160 * (-actindex + 2) + "px"},500);
		box.parents(".popbox").find(".miniloop ul li").eq(actindex).addClass("act").siblings().removeClass("act");
	}
	function side(num){
		$(".sidenav li").eq(num).css({"background": "url('"+URL_PIC_GAME+"/website/6.0/1/p/img/btns.png?v=1')","background-position": "-65px " + (-num*126-168) + "px"})
		.siblings().css({"background": "none"});
	}
	function downUrl(box, index){
		var arr = box.find("li").eq(index).find("img").attr("src").split("/");
		console.log(arr);
		$(".xzsrc").attr("href",URL_PIC_GAME+"/website/5.0/1/p/img/"+xzsrc+"/"+arr[arr.length - 1]);
	}

})

