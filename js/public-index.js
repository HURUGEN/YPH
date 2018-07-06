var index = 0;
var timer = null;
timer = setInterval(headAutoNav,2500);
function headAutoNav(){
	if(index == $(".auto-ann").find("p").size()-1){
		$(".auto-ann").css("top",0);
		index = 0;
	}
	index++;
	$(".auto-ann").animate({"top":-34*index},1000);
}
$(".auto-ann").css("left",$(".head-d").find("span").outerWidth())
$("#head-top").find("dl").hide();
$(".ewm").mouseenter(function(){
	$("#head-top").find("dl").show();
})
$(".ewm").mouseleave(function(){
	$("#head-top").find("dl").hide();
})
$(".auto-ann").mouseenter(function(){
	clearInterval( timer );
	$(this).find("a").css("color","#F70800");
})
$(".auto-ann").mouseleave(function(){
	timer = setInterval(headAutoNav,2500);
	$(this).find("a").css("color","#666");
})
$(".shopcar").mouseenter(function(){
	$(".shopcontent").show();
	$(".icon-jt").css("background-position-y",0)
})
$(".shopcar").mouseleave(function(){
	$(".shopcontent").hide();
	$(".icon-jt").css("background-position-y",-59)
})
$("#head-seach").focus(function(){
	$(this).val("");
})
$("#head-seach").blur(function(){
	$(this).val("请输入商品名或货号");
})
$(".menu-bar").mouseenter(function(){
	$(this).css("background-position-y",-133);
	$(".list-down").show();
})
$(".menu-bar").mouseleave(function(){
	$(this).css("background-position-y",-65);
	$(".list-down").hide();
})
//固定左侧栏

$("#index-fexd1").find("li").mouseenter(function(){
	$(this).css("background-position-x",-46);
	$(this).find("span").css({"background-position-y":-374,color:"#F70800"});
	$(this).find("div").show();
	//$(this).css("background-position-y",-index*46);
})
$("#index-fexd1").find("li").mouseleave(function(){
	$(this).css("background-position-x",0);
	$(this).find("div").hide();
	$(this).find("span").css({"background-position-y":-342,color:"#fff"});
})
$("#index-fexd2").find("li").mouseenter(function(){
	$(this).css("background-position-x",-46);
	$(this).find("div").show();
	$(this).find("dl").show();
})
$("#index-fexd2").find("li").mouseleave(function(){
	$(this).find("dl").hide();
	$(this).find("div").hide();
	$(this).css("background-position-x",0);
})
$("#ctop").click(function(){
	$(document).scrollTop(0);	
})


