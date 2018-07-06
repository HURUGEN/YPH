//放大镜特效
function magnifier(){
	$(".fdj-img").mouseenter(function(e){
		$(".fdj-fd-img").show();
		$(".fdj-zzc").show();
	})
	//移动
	$(".fdj-img").mousemove(function(e){
		var e = e || event;
		var moveL = e.pageX-$(this).offset().left-$(".fdj-zzc").height()/2;
		var moveT = e.pageY-$(this).offset().top-$(".fdj-zzc").height()/2;
		var maxl = $(this).width()-$(".fdj-zzc").width();
		var mleft = Math.min(Math.max(0,moveL),maxl);
		var mtop = Math.min(Math.max(0,moveT),maxl);
		$(".fdj-zzc").css("left",mleft);
		$(".fdj-zzc").css("top",mtop);
		var bigL = -530*mleft/$(this).width();
		var bigT = -530*mtop/$(this).height();
		$(".fdj-fd-img").css("background-position-x",bigL);
		$(".fdj-fd-img").css("background-position-y",bigT);
	})
	$(".fdj-img").mouseleave(function(){
		$(".fdj-fd-img").hide();
		$(".fdj-zzc").hide();
	})
	//点击下方小图标，改变大图；
	$(".fdj-ul-box ul li").click(function(){
		var index = $(this).index();
		$(this).css("border-color","#F70800").siblings().css("border-color","#ededed")
		switch(index){
			case 0 : $(".fdj-img").css("background-image","url(images/detail-page/1529627641852502503.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627641852502503.jpg)");break;
			case 1 : $(".fdj-img").css("background-image","url(images/detail-page/1529627660259945199.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627660259945199.jpg)");break;
			case 2 : $(".fdj-img").css("background-image","url(images/detail-page/1529627660893965501.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627660893965501.jpg)");break;
			case 3 : $(".fdj-img").css("background-image","url(images/detail-page/1529627660950633509.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627660950633509.jpg)");break;
			case 4 : $(".fdj-img").css("background-image","url(images/detail-page/1529627661446416496.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627661446416496.jpg)");break;
			case 5 : $(".fdj-img").css("background-image","url(images/detail-page/1529627661895375522.jpg)");
			$(".fdj-fd-img").css("background-image","url(images/detail-page/1529627661895375522.jpg)");break;
		}
	})
	//下标图片左右移动
	var index = 0;
	$("#ul-r").click(function(){
		index++;
		if(index>1){
			index=1;
		}
		$(".fdj-ul-box ul").animate({"left":-index*70},500);
	})
	$("#ul-l").click(function(){
		index--;
		if(index<0){
			index=0;
		}
		$(".fdj-ul-box ul").animate({"left":-index*70},500);
	})
}
magnifier();

//固定楼梯。
$("#louT").css("left",($(window).width()-$("#louT").width())/2)
$(window).scroll(function(){
	var scroll = $(document).scrollTop();
	if(scroll>=$(".main-left-head").offset().top&&scroll<$(".user-rev").offset().top){
		$("#louT li").eq(0).addClass("active-li").siblings().removeClass("active-li");
		$("#louT").show();
	}else if(scroll>=$(".user-rev").offset().top&&scroll<$(".explain").offset().top){
		$("#louT li").eq(1).addClass("active-li").siblings().removeClass("active-li");
	}else if(scroll>=$(".explain").offset().top){
		$("#louT li").eq(2).addClass("active-li").siblings().removeClass("active-li");
	}else{
		$("#louT").hide();
	}
})
//点击楼梯跳转到对应位置
$("#louT ul").on("click","li",function(){
	var index = $(this).index();
	console.log(index)
	switch(index){
		case 0 : $(window).scrollTop($(".main-left-head").offset().top+1);
				 break;
		case 1 : $(window).scrollTop($(".user-rev").offset().top+1);
					break;
		case 2 : 
				$(window).scrollTop($(".explain").offset().top+1);
				 break;
		
	}
})
