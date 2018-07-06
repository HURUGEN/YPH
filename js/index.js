//轮播图；
//$("#index-banner").find("li").css("left",$(this).width()-$(document).innerWidth())
var timer2 = null;
var index2 = 0;
//-index*$(this).find("li").width()-460
//alert($("#index-banner").find("ul").find("div").find("li").width()-460)
timer2 = setInterval(bannerAuto,5000)
function bannerAuto(){
	index2++;
	if(index2>$("#index-banner").find("ul").find("div").find("li").size()){
		$("#index-banner").find("ul").find("div").css("left",-460);
		index2=1;
	}
	$("#index-banner").find("ul").find("div").stop().animate({"left" : -1*$("#index-banner").find("ul").find("div").find("li").width()-460},1000)
}
$("#index-banner").mouseenter(function(){
	clearInterval(timer2)
	index2 = 0;
	$(this).find("span").show();
})
$("#index-banner").mouseleave(function(){
	timer2 = setInterval(bannerAuto,5000);
	$(this).find("span").hide();
})
$("#index-banner").find("span").eq(0).click(function(){
	index2 = 0;
	$("#index-banner").find("ul").find("div").css("left",-index2*$("#index-banner").find("ul").find("div").find("li").width()-460);
	bannerAuto();
})
$("#index-banner").find("span").eq(1).click(function(){
	index2=1;
	$("#index-banner").find("ul").find("div").css("left",-index2*$("#index-banner").find("ul").find("div").find("li").width()-460);
	if(index2>$("#index-banner").find("ul").find("div").find("li").size()){
		index2 = 1;
	}
	$("#index-banner").find("ul").find("div").stop().animate({"left" : -460},1000)
})
//主要商品栏  
//设置每三个没有右填充；
//主要商品动态添加
$.ajax({
	type:"get",
	url:"../combar.json",
	success:function(res){
		//console.log(res)
		var str = "";
		var comBar = res["commbar"];
		for(var i=0;i<comBar.length;i++){
			str += `<div>
						<dl>
							<dt><a href="###"><img src="images/${comBar[i].src}"/></a></dt>
							<dd>
								<p>${comBar[i].jieshao}</p>
								<p>${comBar[i].xiangxijs}</p>
								<p><span>¥998</span><span>${comBar[i].people}</span><span>已购买</span></p>
							</dd>
						</dl>
					</div>`
		}
		$(".commodity-bar").html(str);
		var $combar = $(".commodity-bar>div").filter(function(index){
			if(index%3==2){
				return index
			}
		})
		$combar.css("margin-right",0);
	}
})
//倒计时
function countDown(){
	var now = new Date();
	var overTime = new Date("2018-7-6");
	var deff = (overTime.getTime()-now.getTime())/1000;

	console.log(parseInt(deff/3600));
	var timer = setInterval(function(){
		deff--;
		if(deff<=0){
			clearInterval(timer);
		}
		var deffh = parseInt(deff/3600);
		var deffm = parseInt((deff-deffh*3600)/60);
		var deffs = parseInt(deff-deffm*60-deffh*3600);
		if(deffs<10){
			deffs = "0"+deffs;
		}
		if(deffm<10){
			deffm = "0"+deffm;
		}
		if(deffh<10){
			deffh = "0"+deffh;
		}
		$(".Tv-time").html(deffh+":"+deffm+":"+deffs);
		$(".index-nowshop ul li").eq(0).html(deffh);
		$(".index-nowshop ul li").eq(1).html(deffm);
		$(".index-nowshop ul li").eq(2).html(deffs);
	},1000)
}
countDown()
