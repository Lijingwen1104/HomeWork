$(document).ready(function(){
	var imgs=$(".slide").children();//push不能用这是为啥
	console.log("imgs:"+typeof(imgs));
	$(".slide>img").click(function(){
		var j;//点击的是当前数组中的第几个
		for(var i=0;i<imgs.length;i++){
			if($(this).attr("src")==imgs[i].getAttribute("src")){
				 j=i;//当前点击的是数组中第几个
			}
		}
		function change(num){
			//总长度
			var length=imgs.length;
			//奇数为中间数，偶数为除以2-1
			var center= length%2?(length-1)/2:length/2-1;
			//点左边的时候，最后一个放第一,删除最后一个个
			function left(imgs){
				imgs[0].className="animation01";
				imgs[1].className="animation12";
				imgs[2].className="animation20";
				imgs.splice(0,0,imgs[length-1]);
				/*imgs.unshift(imgs[length-1]);*/
				imgs.splice(length,1); 
				return imgs;
			}
			//点右边的时候，第一个放最后一个,删除第一个
			function right(imgs){
				imgs[0].className="animation02";
				imgs[1].className="animation10";
				imgs[2].className="animation21";
				imgs.splice(length, 0, imgs[0]);
				imgs.splice(0, 1);
				return imgs;
			}
			//点击左边
			if(num<center){
				for(var i=0;i<center-num;i++){
					left(imgs);
				}
			return imgs; 
			}
			//点击右边
			if (num>center){
				for(var i=0;i<num-center;i++){
					right(imgs);
				}
			return imgs; 
			}
		}
		change(j);
		for (var i = 0; i <imgs.length; i++) {
			console.log(imgs[i].getAttribute("src"));
		}
	})
});