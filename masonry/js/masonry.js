(function(){
	window.onload=function(){
		//
		var masonry=document.getElementsByClassName('masonry')[0];

		/*console.log(u[0].children[0].offsetHeight);
		console.log(u[0].offsetHeight);*/
		//一共四列
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
		
		//设置left和top
		for (var i = 0; i < masonry.children.length; i++) {
			/*masonry.children[i].style.left=280*(i%lines)+"px";*/
			//第一排top
			if(i<lines){
				masonry.children[i].style.top="0px";
				masonry.children[i].style.left=280*(i%lines)+"px";
			}else{
				masonry.children[i].style.top=getMin(heights).val+masonry.children[i].style.height+"px";
				var n=getMin(heights).num;
				masonry.children[i].style.left=280*n+"px";
				heights[n]+=masonry.children[i].offsetHeight;
				console.log("第"+i+"个高度数组"+heights);
			}
		}	
		masonry.style.height=getMin(heights).val+"px";
		//设置height
		console.log(getMin(heights));
		console.log(getMax(heights));
		
		console.log("rr");
	}
})(); 