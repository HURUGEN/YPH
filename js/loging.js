var cookieStr = document.cookie;
if(cookieStr){
	cookieStr = cookieStr.split("; ");
	var cookieStr1 = cookieStr[0].split("=");
	var cookieStr2 = cookieStr[1].split("=");
	var upwd = cookieStr2[1];
	var uname = cookieStr1[1];
	console.log(uname);
	console.log(upwd);
}
$(".form-l-ipt1 input").focus(function(){
	if($(this).val()=="请输入您注册的手机号/邮箱/昵称"){
		$(this).val("");
	}
	$(".form-l-ipt1").css("border-color","#339900");
	$(this).css("color","#333");
})
var flagName = null;
$(".form-l-ipt1 input").blur(function(){
	var str = $(this).val();
	if(str == ""){
		$(".hint-name").show();
		$(".hint-name").html("请输入您注册的手机号/邮箱/昵称");
		$(".form-l-ipt1").css("border-color","#F70800");
	}else if(str == uname){
		$(".form-l-ipt1").css("border-color","#A2A2A2");
		$(".hint-name").hide();
		$("#sp1").css("background-position-y",-275);
		flagName = true;
	}else{
		$(".form-l-ipt1").css("border-color","#F70800");
		$(".hint-name").show();
		$(".hint-name").html("该用户不存在");
	}
})
var flagPwd = null;
$(".form-l-ipt2 input").blur(function(){
	var str = $(this).val();
	if(str == upwd){
		flagPwd = true;
	}
})
$("form").submit(function(){
	if(flagName && flagPwd){
		alert("登陆成功");
		return true;
	}else{
		alert("密码错了！！！");
		return false;
	}
})
