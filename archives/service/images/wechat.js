wx.ready(function() {
		var dataForWeixin = {};
		dataForWeixin.appId = "";
		dataForWeixin.title = "渠道无忧微手册案例展示";
		dataForWeixin.link = location.href;
		dataForWeixin.MsgImg = "tuisong.jpg"/*tpa=http://demo.weizuobiao.cn/case/images/tuisong.jpg*/;
		dataForWeixin.desc = "重构招商行业与用户的商业连接"; 
		
        wx.onMenuShareTimeline({
			title: dataForWeixin.title,// 分享标题
			link: dataForWeixin.link, // 分享链接
			imgUrl: dataForWeixin.MsgImg, // 分享图标
			success: function (data) { 
				//if(meta.dataset.lineCallback){
				//	 window.location.href = meta.dataset.lineCallback;	
				//}
			}
		});
		//分享给朋友
		wx.onMenuShareAppMessage({
			title: dataForWeixin.title,// 分享标题
			desc: dataForWeixin.desc, // 分享描述
			link: dataForWeixin.link, // 分享链接
			imgUrl: dataForWeixin.MsgImg, // 分享图标
			type: '', // 分享类型,music、video或link，不填默认为link
			dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
			success: function (data) { 
				//if(meta.dataset.lineCallback){
				//	 window.location.href = meta.dataset.lineCallback;	
				//}
			}
		});
});
wx.error(function(res){
	alert(res);
	alert("error");
});