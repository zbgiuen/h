/*
*
* 初始化文件路径AMD规范
*
*******************************/
require.config({
	baseUrl: "./",
	paths:
	{
		"jquery" : "images/jquery",
		"iscroll" : "images/iscroll",
		"TweenMax" : "http://demo.weizuobiao.cn/case/images/images/TweenMax.min",
		"imagesLoaded" : "http://demo.weizuobiao.cn/case/images/images/imagesloaded.pkgd.min",


		//非AMD库
		"owl" : "http://demo.weizuobiao.cn/case/images/images/owl.carousel.min",
		"WeixinApi" : "images/WeixinApi"
　　},


	shim:
	{
		"owl":
		{
		    deps: ["jquery"],
		    exports: "owl"
		}
	}
});




/*
*
* 基于设备载入不同模块
*
*******************************/
var userAgent = browserRedirect();
switch(userAgent.equipment)
{
	case 'pc':
		plugIn.push('jquery');
		//window.location.href="http://demo.weizuobiao.cn/case/images/sorry.html"; 
	break;

	case 'ipad':
	case 'mobile':
		plugIn.push('jquery','TweenMax','imagesLoaded','iscroll');
	break;
}




/*
*
* 基于系统载入不同模块
*
*******************************/
switch(userAgent.system)
{
	case 'ios':
	break;

	case 'android':
	break;
}




/*
*
* 移动设备的处理
*
*******************************/
if(userAgent.mobile)
{
	require(plugIn, function ($,TM,imagesLoaded){
		$(function(){
			//横屏处理
			var flipHtml = '<div class="flipTip full"><img src="assets/images/flipTip.png"/*tpa=http://demo.weizuobiao.cn/case/images/assets/images/flipTip.png*/></div>';
			function orientationChange()
			{   
				switch(window.orientation)
				{   
					case 0: 
					case 180:
						$('.flipTip').remove();
					break;   

					case -90:
					case 90:
						$('body').append(flipHtml);
					break;   
				}   
			}
			orientationChange();
			window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", orientationChange, false);


			//当前页是否全屏
			var full = $('body').data('screen');
			if(full == 'full')
			{
				$('body,html').css({
					width : '100%',
					height : '100%',
					maxHeight : '100%',
					overflow :'hidden',
					backgroundColor : '#000'
				})
			}


			//当前页需要Loading
			if($('.loading'))
			{
				$('body').scrollTop(0);

				$('body,html').css({width : '100%',height : '100%',maxHeight : '100%',overflow :'hidden'})

				TM.to($('.round'),2,{rotation:360,repeat:-1,ease:Linear.easeNone});

				imagesLoaded($('body'),function(){
					if(full != 'full') $('body,html').attr('style','');
					TM.to($('.loading'),1,{autoAlpha:0,scale:0.9,ease:Back.easeOut,onComplete:function (){
						$('.loading').remove();
					}});
				});
			}
		})
	});
}