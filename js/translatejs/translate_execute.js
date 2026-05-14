
	
document.addEventListener('load', function () {
	translate.service.use('client.edge'); //设置机器翻译服务通道，相关说明参考 http://translate.zvo.cn/545867.html
	//translate.language.setLocal('english'); 
    translate.listener.start(); //开启页面元素动态监控，js改变的内容也会被翻译，参考文档： http://translate.zvo.cn/4067.html
    //translate.offline.fullExtract.isUse = true;
    translate.selectLanguageTag.languages = 'english,chinese_traditional,japanese'; //设置语言选项，逗号分隔，相关说明参考 http://translate.zvo.cn/545867.html
    translate.selectLanguageTag.refreshRender(); //刷新翻译结果，
		
	//translate.ignore.tag.push('div');
	translate.offline.append('chinese_traditional',`
			English=英文
			About=關於
			Blogs=部落格
			World of Foley Arist=Foley Arist 的世界
			Wanna see Moire?=Wanna see Moire?
			Thenamewaseat=Thenamewaseat
			Arduino=Arduino
			Pricing=定價
			Makey Makey/ Unity=Makey Makey/ Unity
			Portfolio=作品集
			Get{\\n}                                        Started=取得{\\n}                                        開始
			Installations=安裝
			Acrade Game controller=Acrade 遊戲控制器
			English=英文
			Powered by Lingumania=由 Lingumania 提供動力
			Translated Websites=翻譯網站
			中文=中文
			About=關於
			Thenamewaseat © 2023-2026 =Thenamewaseat © 2023-2026
			Illustration=插圖
			All Right Reserved=版權所有
			Pricing=定價
			My Works=我的作品
			My Self=我的自我
			Portfolio=作品集
			`);
	translate.offline.append('japanese',`
			English=英文
			About=紹介
			Blogs=ブログ
			World of Foley Arist=Foley Arist の世界
			Wanna see Moire?=Wanna see Moire?
			Thenamewaseat=Thenamewaseat
			Arduino=Arduino
			Pricing=定價
			Makey Makey/ Unity=Makey Makey/ Unity
			Portfolio=作品集
			Get{\\n}                                        Started=取得{\\n}                                        開始
			Installations=安裝
			Acrade Game controller=Acrade 遊戲控制器
			English=英文
			Powered by Lingumania=由 Lingumania 提供動力
			Translated Websites=翻譯網站
			中文=中文
			About=紹介
			Thenamewaseat © 2023-2026 =Thenamewaseat © 2023-2026
			Illustration=插圖
			All Right Reserved=版權所有
			Pricing=定價
			My Works=我的作品
			My Self=我的自我
			Portfolio=作品集
			`);
			//Makey Makey/ Unity=麥基·麥基/Unity（大團結）
    translate.execute();//完成翻译初始化，进行翻译
	translate.language.setUrlParamControl('lang');
	var currentLang = translate.language.getCurrent();
	console.log('Current language after render:', currentLang);
	var url = new URL(window.location.href);
	if(currentLang=='chinese_traditional'){
		document.getElementById('currentlang').textContent = '繁體中文';
	}
	else if(currentLang=='english'){
		document.getElementById('currentlang').textContent = 'English';
	}
	else if(currentLang=='japanese'){
		document.getElementById('currentlang').textContent = '日本語';
	}
			
			// Only update if the parameter is different to avoid redundant history states
	if (url.searchParams.get('lang') !== currentLang) {
		url.searchParams.set('lang', currentLang);
		// This updates the URL in the address bar without reloading the page
        //window.location.reload();
		window.history.pushState({}, '', url);
	}

		/*document.addEventListener('click', function(e) {
			var currentLang = translate.language.getCurrent();
			console.log('Current language after render:', currentLang);
			var url = new URL(window.location.href);
			
			// Only update if the parameter is different to avoid redundant history states
			if (url.searchParams.get('lang') !== currentLang) {
				url.searchParams.set('lang', currentLang);
				// This updates the URL in the address bar without reloading the page
                //window.location.reload();
				window.history.pushState({}, '', url);
			}
		});*/
});

document.addEventListener('click', function(e) {
    var target = e.target.closest('a');
    if (target && target.href && target.href.startsWith(window.location.origin)) {
        var currentLang = translate.language.getCurrent();
        var url = new URL(target.href);
        url.searchParams.set('lang', currentLang);
        target.href = url.href;
    }
}, true);

function updatelang(){
	var currentLang = translate.language.getCurrent();
	console.log('Current language after render:', currentLang);
	var url = new URL(window.location.href);
			
	// Only update if the parameter is different to avoid redundant history states
	if (url.searchParams.get('lang') !== currentLang) {
		url.searchParams.set('lang', currentLang);
		// This updates the URL in the address bar without reloading the page
        //window.location.reload();
		window.history.pushState({}, '', url);
	}
}
//translate.offline.showPanel();
//var head= document.getElementsByTagName('head')[0];  var script= document.createElement('script');  script.type= 'text/javascript';  script.src= 'https://res.zvo.cn/translate/translate.js';  head.appendChild(script);