function formReg(){
	//手机号验证
	var flagName = null;
	$("#ipt1").focus(function(){
		$(this).css("border-color","limegreen");
		$("#sp1").css("display","inline-block");
	})
	$("#ipt1").blur(function(){
		var str1 = $(this).val();
		var reg = /^1[3,4,5,7,8]\d{9}$/;
		$(this).css("border-color","#A2A2A2");
		if(reg.test(str1)){
			$("#b1").css("background-position-y",-275);
			$("#sp1").css("display","none");
			flagName = true;
		}else if(str1==""){
			$("#sp1").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp1").html("请输入手机号");
			flagName = false;
		}else{
			$("#sp1").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp1").html("手机号格式不正确，请输入核对后再输入");
			flagName = false;
		}
	})
	//密码验证
	var flagPwd = null;
	$("#ipt3").focus(function(){
		$("#sp2").css("display","inline-block");
		$(this).css("border-color","limegreen");
	})
	$("#ipt3").blur(function(){
		var str = $(this).val();
		var reg = /^.{6,18}$/;
		$(this).css("border-color","#A2A2A2");
		if(reg.test(str)){
			$("#b2").css("background-position-y",-275);
			$("#sp2").css("display","none");
			flagPwd = true;
		}else if(str==""){
			$("#sp2").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp2").html("请输入密码");
			flagPwd = false;
		}else{
			$("#sp2").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp2").html("请输入6-18,字母数字组成的密码");
			flagPwd = false;
		}
	})
	//密码重复验证
	var flagQpwd = null;
	$("#ipt4").focus(function(){
		$("#sp3").css("display","inline-block");
		$(this).css("border-color","limegreen");
	})
	$("#ipt4").blur(function(){
		var str = $(this).val();
		var str2 =$("#ipt3").val();
		$(this).css("border-color","#A2A2A2");
		if(str == str2 && str != ""){
			$("#b3").css("background-position-y",-275);
			$("#sp3").css("display","none");
			flagQpwd = true;
		}else if(str == ""){
			$("#sp3").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp3").html("不能为空");
			flagQpwd = false;
		}else{
			$("#sp3").css({
				"border-color":"#ffadb0",
				"background-color":"#fff3f3",
				"color":"#f70800"
			})
			$("#sp3").html("两次密码不相同");
			flagQpwd = false;
		}
	})
	//验证码判断
	var flagYzm = null;
	$("#ipt2").blur(function(){
		if($("#ipt2").val()==$("#em1").html()){
			flagYzm = true;
		}else{
			flagYzm = false;
		}
	})
	//已阅读
	var flagCheck = null;
	$("input[type=checkbox]").click(function(){
		if($("input[type=checkbox]").prop("checked")){
			flagCheck = true;
		}else{
			flagCheck = false;
		}
	})
	//提交验证
	$("form").submit(function(){
		if(flagName && flagPwd && flagQpwd && flagCheck && flagYzm){
			document.cookie = "uname="+$("#ipt1").val();
			document.cookie = "upwd="+$("#ipt3").val();
			alert("注册成功，快去登陆吧");
			return true;
		}else if(flagName && flagPwd && flagQpwd && flagCheck && flagYzm == false){
			alert("验证码错误");
			return false;
		}else{
			return false;
		}
	})
}
formReg();
yanzhen();
function yanzhen(){
	function yzm(){
		var str = "";
		for(var i=0;i<4;i++){
			var code = rand(48,90);
			if(code>=48&&code<=57 || code>=65&&code<=90){
				str += String.fromCharCode(code);
			}else{
				i--;
			}
		}
		return str;
	}
	$("#em1").html(yzm());
	$("#yzm-a").click(function(){
		$("#em1").html(yzm());
	})
}










