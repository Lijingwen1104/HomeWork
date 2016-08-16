
Zepto(function($){
	var lis=document.getElementsByTagName('li');
	$('ul>li').css({"height":$( window).height()});

	/*	alert(lis.length);*/

	//禁止默认滑动事件
	document.addEventListener('touchmove', function (event) {
		event.preventDefault();
	}, false);

	$('ul>li').swipeUp(function(){
		$('.ul1').addClass('up');

	})
	$('ul>li').swipeDown(function(){
		alert("a");
	})
})