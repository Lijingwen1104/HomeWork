$(document).ready(function(){
	var imgs=$(".slide").children();
	$(".slide>img").click(function(){
		var img;
		for(var i=0;i<imgs.length;i++){
			if($(this).attr("src")==imgs[i].getAttribute("src")){
				var  j=i;//当前点击的是数组中第几个
			}
			img=imgs[j];
		}
		if(j==0){
			imgs[0].className="animation01";
			imgs[1].className="animation12";
			imgs[2].className="animation20";
			for(var i=0;i<imgs.length;i++){

			}
			imgs[0]=imgs[2];
			imgs[2]=imgs[1];
			imgs[1]=img;
		}
		if(j==2){
			imgs[0].className="animation02";
			imgs[1].className="animation10";
			imgs[2].className="animation21";
			imgs[2]=imgs[0];
			imgs[0]=imgs[1];
			imgs[1]=img;
		}
	})
});