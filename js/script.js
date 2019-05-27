var lineChartData = {
	//x坐标数据
	labels:["周一","周二","周三","周四","周五","周六","周日"],
	datasets:[
		{
        //统计表的背景颜色
			fillColor:"rgba(255,255,255,0)",
        //统计表画笔颜色
			strokeColor:"rgba(0,0,0,1)",
		//点的颜色
			pointColor:"rgba(155,39,39,1)",
		//点边框的颜色
			pointStrokeColor:"#fff",
		//鼠标触发时点的颜色
			pointHighlightFill:"#fff",
		//鼠标触发时边框的颜色
			pointHighlightStroke:"rgba(220,220,220,1)",
		//Y坐标数据
			data:[105,120,115,125,100,103,130,110]
		},
		{
			fillColor:"rgba(255,255,255,0)",
			strokeColor:"rgba(92,184,92,1)",
			pointColor:"rgba(23,126,23,1)",
			pointStrokeColor:"#fff",
			pointHighlightFill:"#fff",
			pointHighlightStroke:"rgba(151,187,205,1)",
			data:[80,80,75,90,80,85,80]
		}
	]	
}
var lineChartData1 = {
    //x坐标数据
    labels:["周一","周二","周三","周四","周五","周六","周日"],
    datasets:[
        {
            //统计表的背景颜色
            fillColor:"rgba(255,255,255,0)",
            //统计表画笔颜色
            strokeColor:"rgba(250,128,114,1)",
            //点的颜色
            pointColor:"rgba(155,39,39,1)",
            //点边框的颜色
            pointStrokeColor:"#fff",
            //鼠标触发时点的颜色
            pointHighlightFill:"#fff",
            //鼠标触发时边框的颜色
            pointHighlightStroke:"rgba(220,220,220,1)",
            //Y坐标数据
            data:[4.5,5.8,4.6,4.7,5.5,7.7,4.4]
        }
    ]
}
var lineChartData2 = {
    //x坐标数据
    labels:["周一","周二","周三","周四","周五","周六","周日"],
    datasets:[
        {
            //统计表的背景颜色
            fillColor:"rgba(255,255,255,0)",
            //统计表画笔颜色
            strokeColor:"rgba(60,179,113,1)",
            //点的颜色
            pointColor:"rgba(155,39,39,1)",
            //点边框的颜色
            pointStrokeColor:"#fff",
            //鼠标触发时点的颜色
            pointHighlightFill:"#fff",
            //鼠标触发时边框的颜色
            pointHighlightStroke:"rgba(220,220,220,1)",
            //Y坐标数据
            data:[4.5,5.8,4.6,4.7,5.5,7.7,4.4]
        }
    ]
}

window.onload=function(){
	var ctx=document.getElementById("canvas").getContext("2d");
	window.myLine=new Chart(ctx).Line(lineChartData,{
		responsive:true
});
    var cxt=document.getElementById("can").getContext("2d");
    window.myLine=new Chart(cxt).Line(lineChartData1,{
        responsive:true
    });
    var cxz=document.getElementById("xz").getContext("2d");
    window.myLine=new Chart(cxz).Line(lineChartData2,{
        responsive:true
    });
}