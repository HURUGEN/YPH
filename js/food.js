$(".banner img").css("left",-($(".banner img").width()-$(".banner").width())/2);
$(".puc-nav ul li").eq(2).addClass("active-li").siblings().removeClass("active-li");
$(".div-js").mouseenter(function(){
	$(this).animate({"margin-left":-5},100);
})
$(".div-js").mouseout(function(){
	$(this).animate({"margin-left":0},100);
})
$.ajax({
	type:"get",
	url:"../combar.json",
	success:function(res){
		var str = "";
		var content = res["commbar"];
		for(var i=0;i<content.length;i++){
			str += `<dl>
						<dt><img src="images/${content[i].src}"/></dt>
						<dd>
							<p><a href="###">${content[i].jieshao}</a></p>
							<p><em>¥</em><i>${content[i].price}</i><b><span>${content[i].people}</span>已购买</b></p>
						</dd>
					</dl>`
		}
		$(".now-food-con").html(str);
		var $foodDl = $(".now-food-con dl").filter(function(index){
			if(index%3 == 2){
				return index;
			}
		})
		$foodDl.css("margin-right","0");
	}
});
