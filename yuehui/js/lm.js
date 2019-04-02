var ww = $(window).width();
var arr = [
	[images_url + "jn1.gif?v=1", "斩空", "普通形态：自身跃起快速对前方范围发动数次攻击<br/>终焉之剑形态：自身跃起在空中连续释放剑气"],
	[images_url + "jn2.gif", "暗刃", "普通形态：用暴虐公挥出强烈的斩击，然后挑飞敌人<br/>终焉之剑形态：自身旋转终焉之剑攻击四周敌人"],
	[images_url + "jn3.gif", "幻灭", "普通形态：快速冲出化为残影快速对大范围区域进行攻击<br/>终焉之剑形态：挥舞终焉之剑形成大范围剑气攻击敌人"],
	[images_url + "jn4.gif", "终焉之剑", "召唤终焉之剑劈砍1次，对前方所有敌人造成大量伤害，之后终焉之剑将会持续一段时间"]
];
var audio = document.getElementById("audio");
$(function(){
	for(var i = 0; i < 4; i++){
		pnav(i, 0);
	}
	pnav(0, -106);
	var num = 0;
	$(".pnav li").click(function(){
		var index = $(this).index();
		pnav(num, 0);
		pnav(index, -106);
		num = index;

		$(".gif").attr("src", arr[index][0]);
		$(".jinLie p").html(arr[index][1]);
		$(".jinLie span").html(arr[index][2]);
		$(".arrow").css({"left": 110 + index*97 + "px"});
	});

	$(window).scroll(function(){
		var scroll = $(this).scrollTop();
		if(scroll < 1100){
			$(".side").hide();
		}else{
			$(".side").show();
		}
	});

	function pnav(index, dir){
		$(".pnav li").eq(index).css({"background": "url('" + images_url + "jn.png') no-repeat", "background-position": -96*index + "px " + dir + "px"});
	}
})