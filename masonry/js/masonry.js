(function(){
	window.onload=function(){
		//
		var masonry=document.getElementsByClassName('masonry')[0];

		/*console.log(u[0].children[0].offsetHeight);
		console.log(u[0].offsetHeight);*/
		//一共四行
		var  lines=4;
		//当前各列高度初始化
		var heights = new Array();
		for (var i = 0; i < lines; i++) {
				heights.push(masonry.children[i].offsetHeight);
		}
		console.log(heights);
		//获取高度最小值和最小值所在的列数
		function getMin(attr){
			return (function abc(i){
				if(i<=0){
					return {num:0,val:attr[0]};
				}else{
					return attr[i]<abc(i-1).val?{num:(i),val:attr[i]}:abc(i-1);
				}
			})(attr.length-1);
		}
		//获取高度最大值
		function getMax(attr){
			return (function abc(i){
				if(i<=0){
					return attr[0];
				}else{
					return attr[i]>abc(i-1)?attr[i]:abc(i-1);
				}
			})(attr.length-1);
		}
		//masonry高度设置
		masonry.style.height=getMax(heights)+"px";
		//定位当前li
		masonry.children[1].style.left="300px";
		console.log(getMin(heights));
		console.log(getMax(heights));
	}
})(); 