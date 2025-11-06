if(window.location.host=='xz.xingac.cn'){
	//$(".logo img").attr("src","//soft.uesou.cn/images/logo/fengbao_v2.png");
// 	$(".logo img").attr("src","https://soft.uesou.cn/images/logo/baozang-v3.png");
// 	$(".ico").attr("src","https://soft.uesou.cn/images/logo/baozang-v3.png");
// 	$(".indexLogo").attr("src","https://soft.uesou.cn/images/logo/baozang-v3.png");
	document.writeln('本网站的图文和软件来自于网络，如有内容侵犯您的合法权益，请及时与我们联系，我们将第一时间安排删除。<br/>马鞍山超聪网络科技有限公司 马鞍山市郑蒲港新区孵化园6号楼4层 举报电话：0555-2318563<br/>Copyright  2019-2022 All Rights Reserved.<a href="https://beian.miit.gov.cn/" target="_blank">皖ICP备2021013870号-5</a>');
}

 function setDomainName(){
      if (window.location.hostname === 'gme.sxjayu.cn'){
        $('#domainName').html('版权所有：陕西佳裕清启商贸有限公司')
        $('.logo').css("display","none")
      }
      if (window.location.hostname === 'shenqi.jienabo.cn'){
        $('#domainName').html('版权所有：盐城杰纳博网络科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'gme.xnxsx.cn'){
        $('#domainName').html('版权所有：武汉纤烁璇科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'soft.shjwkjnb.cn'){
        $('#domainName').html('版权所有：上海鲸伟信息科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'hao.dajiang02.cn'){
        $('#domainName').html('版权所有：武汉郁荆香科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'sft.xnhre.cn'){
        $('#domainName').html('版权所有：重庆禾染信息科技中心')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'game.baichengwaimai.cn'){
        $('#domainName').html('版权所有：沈阳区块网络科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'gme.ytnetworkmon.cn'){
        $('#domainName').html('版权所有：杭州迎特网络科技有限公司')
	$('.logo').css("display","none")
      }

      if (window.location.hostname === 'uhaozu.shfs3.com'){
        $('#domainName').html('')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'u.wmxujdh.cn'){
        $('#domainName').html('镇江腾锐网络科技有限公司')
	$('.logo').css("display","none")
      }
      if (window.location.hostname === 'game.900r.cn'){
        $('#domainName').html('版权所有：安徽望樾网络科技有限公司 CopyRight@2023 AIl Right Reserved')
        $('.logo').css("display","none")
	 $('#domainBottom').html('版本: 3.5.2.97 开发者名称:安徽望樾网络科技有限公司  <a href="/user.html" target="_blank">用户协议</a> <a href="/privacy.html" target="_blank">隐私协议</a><br/>投诉邮箱：mzssb110@126.com<br/>');
      }
      if (window.location.hostname === 'gme.yctlkj.cn'){
        $('#domainName').html('盐城市盐南高新区腾力科技有限公司')
	    $('.logo').css("display","none")
      }

  }
//普通下载改为真实下载位
(function() {
	$(".newdown2").attr("href","#downlist");
})();

//搜索框点击后默认文字消失
if(document.getElementById("searchkey")){
	var oText = document.getElementById("searchkey");
	var onoff = true;
	oText.onfocus = function() {
		if (onoff) {
			this.value = "";
			onoff = false;
		}
	}
	oText.onblur = function() {
		if (this.value == '') {
			this.value = "QQ音乐";
			onoff = true;
		}
	}
}


function withJQ(callback) {
	if (typeof jQuery === 'undefined') {
		var cdjs = document.createElement("script");
		var requestHandler = "//data.94nw.com/script/jquery.min.js";
		cdjs.src = requestHandler;
		cdjs.type = "text/javascript";
		cdjs.onload = cdjs.onreadystatechange = function () {
			if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
				jQuery.noConflict();
				if (callback && typeof callback === "function") {
					callback()
				}
				cdjs.onload = cdjs.onreadystatechange = null
			}
		};
		document.getElementsByTagName('head')[0].appendChild(cdjs)
	} else {
		callback()
	}
};

function withBaizhuPreUrl(callback) {
	if (typeof baizhuPreUrl === 'undefined') {
		var cdjs = document.createElement("script");
		var requestHandler = "//data.94nw.com/script/down.js";
		cdjs.src = requestHandler;
		cdjs.type = "text/javascript";
		cdjs.onload = cdjs.onreadystatechange = function () {
			if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
				if (callback && typeof callback === "function") {
					callback();
				}
				cdjs.onload = cdjs.onreadystatechange = null;
			}
		};
		//document.getElementsByTagName('head')[0].appendChild(cdjs);
	} else {
		callback();
	}
};
withBaizhuPreUrl(function () {
	withJQ(function () {
		var $ = jQuery;
		var xzq_softID = '';
		function getQueryString() {
			var url = location.search;
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for (var i = 0; i < strs.length; i++) {
					theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}
		var xzq_channelID = getQueryString().tab || 40000;
		$(document).ready(function(){
			(typeof xzq_url == 'undefined') ? xzq_softID = sid: xzq_softID = xzq_url.split('_')[1].split('.')[0];
			(function(){
				if ($('.downurl').length == 0) {
					setTimeout(arguments.callee, 800);
				} else {
					$('.downurl').attr('bz_newtrack', xzq_channelID + '_' + xzq_softID);
				}
			})();
			(function () {
				if ($('#bzWrap').length == 0) {
					setTimeout(arguments.callee, 800);
				} else {
					$('#bzWrap').attr('bz_newtrack', xzq_channelID + '_' + xzq_softID);
				}
			})();
			(function(){
				if ($('.bzdown').length == 0) {
					setTimeout(arguments.callee, 800);
				} else {
					$('.bzdown').attr('bz_newtrack', xzq_channelID + '_' + xzq_softID);
				}
			})();
			(function(){
				if ($('.bt').length == 0) {
					setTimeout(arguments.callee, 800);
				} else {
					$('.bt').attr('bz_newtrack', xzq_channelID + '_' + xzq_softID);
				}
			})();
		});
		(function () {
			var loadJS = function (path, callback) {
				var script = document.createElement("script");
				script.src = path;
				script.type = "text/javascript";
				script.charset = "UTF-8";
				script.onload = script.onreadystatechange = function () {
					if (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete') {
						if (callback && typeof callback === "function") {
							callback();
						}
						script.onload = script.onreadystatechange = null;
					}
				};
				document.getElementsByTagName("body")[0].appendChild(script);
			};
			//loadJS('//data.94nw.com/script/BZ_NEWTRACK.js', function () {});
		})();
	});
});


$(document).ready(function(){
   //日期获取到今天
	if($("#currentDate").length>0){
		var date = new Date();
		var seperator='-';
		var nowDate = date.getFullYear() + seperator + (date.getMonth()+1) + seperator + date.getDate();
		$("#currentDate").append(nowDate);
	}
});
