window.onload=function(){
	var dataInt={"data":[{"src":"0.jpg"},{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"7.jpg"},{"src":"8.jpg"},{"src":"9.jpg"},{"src":"10.jpg"},{"src":"11.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"}]};
	addBox("wrap",dataInt);
	waterfall('wrap','box');
	window.onscroll=function(){
		if(checkScroll){
			addBox("wrap",dataInt);
			waterfall('wrap','box');
		}
	}
}
function waterfall(wrapid, boxclass){
	var wrap=document.getElementById(wrapid);
	var boxes=getByClassName(boxclass,wrap);
	//计算列数
	var boxw=boxes[0].offsetWidth;
	var bwidth=document.documentElement.clientWidth;
	var cols=Math.floor(bwidth/boxw);
	wrap.style.cssText="width:"+cols*boxw+"px;margin:0 auto;"
	//找最短列
	var boxhs=[];
	for(var i=0;i<boxes.length;i++){
		if(i<cols){
			boxhs.push(boxes[i].offsetHeight);
			//console.log(boxes[i],boxhs[i]);
		}else{
			var minh=Math.min.apply(null,boxhs);
			var minindex=getindex(boxhs,minh);
			boxes[i].style.cssText="position:absolute;top:"+minh+"px;left:"+boxes[minindex].offsetLeft+"px;";
			boxhs[minindex]+=boxes[i].offsetHeight;
			
		}
	}
}
function getByClassName(bc,wp){
	
	var objs=wp.getElementsByTagName("*");
	var lists=[];
	for(var i=0;i<objs.length;i++){
		if(objs[i].className==bc){
			lists.push(objs[i]);
		}
	}
	return lists;
}
 function getindex(arr,con){
 	for(var i=0;i<arr.length;i++){
 		if(arr[i]==con){
 			return i;
 		}
 	}
 }
 function checkScroll(){
 	var parent=document.getElementById("wrap");
 	var boxes=getByClassName("box",parent);
 	var lastBoxH=boxes[boxes.length-1].offsetTop+20;
 	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
 	var winH=document.documentElement.clientHeight||document.body.clientHeight;
 	if(scrollTop+winH>lastBoxH){
 		return true;
 	}else{return false;}
 }
function addBox(wrapCN,dataInt){
	var oparent=document.getElementById(wrapCN);
	for(var i=0;i<dataInt.data.length;i++){
		var obox=document.createElement("div");
		obox.className="box";
		oparent.appendChild(obox);
		var oimg=document.createElement("div");
		oimg.className="img";
		obox.appendChild(oimg);
		var opic=document.createElement("img");
		opic.src="images/"+dataInt.data[i].src;
		oimg.appendChild(opic);
	}
}
