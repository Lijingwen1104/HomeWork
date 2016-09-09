
Zepto(function($){
	var doc=$('.toggle');
	function fullscreenToggle(doc,times){
		doc.css({"-webkit-transition":"transform"+" " + times});
		var children=doc.children();
		children.css({"height":$( window).height()});
		var len=children.length;
		var now=1;
		//禁止默认滑动事件
		document.addEventListener('touchmove', function (event) {
			event.preventDefault();
		}, false);
		//上滑
		doc.swipeUp(function(){
			if(0<now&&now<len){
				$(this).css({"transform":"translate(0px,-"+now*$( window).height()+"px)"});
				now++;
			}
		})
		//下滑
		doc.swipeDown(function(){
			if(1<now&&now<len+1){
				$(this).css({"transform":"translate(0px,-"+(now-2)*$( window).height()+"px)"});
				now--;
			}
		})	
	}
	fullscreenToggle(doc,"0.5s");	
}) 