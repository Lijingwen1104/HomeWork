(function(){
	var u=document.getElementsByTagName("ul");
	console.log(u[0].children[0].offsetHeight);
	console.log(u[0].offsetHeight);
	var c
	//当前各列高度初始化
	var heights;

	//获取最小值和最小值所在的位置
	function getMin(attr){
		return (function abc(i){
			if(i<=0){
				return {num:0,val:attr[0]};
			}else{
				return attr[i]<abc(i-1).val?{num:(i),val:attr[i]}:abc(i-1);
			}
		})(attr.length-1);
	}
	
})(); 