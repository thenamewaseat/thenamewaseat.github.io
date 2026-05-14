
	
 //设置机器翻译服务通道，相关说明参考 http://translate.zvo.cn/545867.html
	translate.service.use('client.edge');
	translate.language.setLocal('english'); 
    translate.listener.start(); //开启页面元素动态监控，js改变的内容也会被翻译，参考文档： http://translate.zvo.cn/4067.html
    //translate.offline.fullExtract.isUse = true;
    translate.selectLanguageTag.languages = 'english,chinese_traditional,japanese'; //设置语言选项，逗号分隔，相关说明参考 http://translate.zvo.cn/545867.html
    translate.selectLanguageTag.refreshRender(); //刷新翻译结果，
		
	//translate.ignore.tag.push('div');

	//header & footer
	translate.offline.append('chinese_traditional',`
		About=關於
		Blogs=部落格
		Portfolio=作品集
		Pricing=價目表
		About=關於
		Illustration=插圖

		All Right Reserved=版權所有
	`);
	translate.offline.append('japanese',`
			About=紹介
			Blogs=ブログ
			Portfolio=ギャラリー
			Pricing=価格
			About=紹介
			Illustration=絵画
			
			All Right Reserved=版權所有
	`);

	//About
	translate.offline.append('chinese_traditional',`
		A university student who likes to draw and code.=喜歡畫畫和寫程序的大學生～
		City University of Hong Kong =香港城市大學
		Bachelor of Science in Creative Media=創意媒體理學士
		PolyU, Hong Kong Community College=理大香港專上學院
		Associate Degree in Information Technology=資訊科技副學士
	`);
	translate.offline.append('japanese',`
		A university student who likes to draw and code.=絵を描いたりプログラムを書いたりするのが好きな大学生～
		City University of Hong Kong =香港城市大学
		Bachelor of Science in Creative Media=クリエイティブ・メディア理学士
		PolyU, Hong Kong Community College=理工大学香港コミュニティカレッジ
		Associate Degree in Information Technology=情報技術準学士
	`);
	
	//My Works
	translate.offline.append('chinese_traditional',`
		Works that I done before=過去的作品
		Installations=裝置藝術
		Drawings=繪畫
		Video/Animation=影片/動畫
		Games=遊戲設計
		UI/UX Design=UI/UX設計
		Others=其他
	`);
	translate.offline.append('japanese',`
		Works that I done before=過去に手がけた作品
		Installations=インスタレーション
		Drawings=絵画
		Video/Animation=ビデオ／アニメーション
		Games=ゲーム設計
		UI/UX Design=UI/UX設計
		Others=その他
	`);

	translate.offline.append('chinese_traditional',`
			World of Foley Arist=Foley Arist 的世界
			Wanna see Moire?=Wanna see Moire?
			Thenamewaseat=Thenamewaseat
			Arduino=Arduino
	
			Makey Makey/ Unity=Makey Makey/ Unity

			Get{\\n}                                        Started=取得{\\n}                                        開始
			Installations=裝置藝術
			Acrade Game controller=Acrade 遊戲控制器
			Infinite=創造
			Possibilites=無限可能
			Thenamewaseat is a Student from Creative Media=Thenamewaseat是一位就讀創意媒體的學生。
			I am thenamewaseat, who are passionate in learning game related skills, such as Live 2D. I also dig in to installation, Game and App design and drawings. =我是 thenamewaseat，是一位熱衷於學習遊戲相關技能的學生，例如 Live 2D。我也鑽研裝置藝術、遊戲和應用程式的設計與電繪。
			UX/UI designer • illustrator • Game designer • Web designer=UI/UX 設計 • 繪師 • 遊戲設計 • 網頁設計
			A university student who likes to draw and code.=喜歡畫畫和寫程序的大學生～
			Old website (2017)=舊網站 (2017)
			Old website (2015)=舊網站 (2015)
			English=英文
			Powered by Lingumania=由 Lingumania 提供動力
			Translated Websites=翻譯網站
			中文=中文
			
			
			All Right Reserved=版權所有
			Pricing=定價
			My Works=我的作品
			My Self=
			Portfolio=作品集
			`);
	translate.offline.append('japanese',`
			About=紹介
			Blogs=ブログ
			World of Foley Arist=Foley Arist の世界
			Wanna see Moire?=Wanna see Moire?
			Thenamewaseat=Thenamewaseat
			Arduino=Arduino
			Makey Makey/ Unity=Makey Makey/ Unity
			Portfolio=ギャラリー
			Get{\\n}                                        Started=取得{\\n}                                        開始
			Installations=インスタレーション
			Acrade Game controller=Acrade ゲームコントローラー
			Infinite=無限の
			Possibilites=可能性
			Thenamewaseat is a Student from Creative Media=Thenamewaseatはクリエイティブ・メディア学科の学生。
			I am thenamewaseat, who are passionate in learning game related skills, such as Live 2D. I also dig in to installation, Game and App design and drawings.=thenamewaseatはLive 2Dなどゲーム関連のスキル習得に熱中している。インスタレーション、ゲームやアプリのデザイン、ドローイングも得意です。
			UX/UI designer • illustrator • Game designer • Web designer=UI/UX 設計 • 絵師 • ゲーム設計 • サイト設計
			A university student who likes to draw and code.=絵を描いたりプログラムを書いたりするのが好きな大学生～
			Old website (2017)=旧サイト（ 2017年）
			Old website (2015)=旧サイト（ 2015年）
			Now :=現在:
			City University of Hong Kong=香港城市大学
			Bachelor of Science in Creative Media=クリエイティブ・メディア理学士
			PolyU, Hong Kong Community College=理工大学香港コミュニティカレッジ
			Associate Degree in Information Technology=情報技術準学士
			Skills=技能
			Powered by Lingumania=由 Lingumania 提供動力
			Translated Websites=翻譯網站
			
			
			Pricing=定價
			My Works=作品
			My Self=紹介
			`);
			//Makey Makey/ Unity=麥基·麥基/Unity（大團結）
    translate.execute();//完成翻译初始化，进行翻译
	translate.language.setUrlParamControl('lang');
	var currentLang = translate.language.getCurrent();
	console.log('Current language after render:', currentLang);
	var url = new URL(window.location.href);
	/*if(currentLang=='chinese_traditional'){
		document.getElementById('currentlang').textContent = '繁體中文';
	}
	else if(currentLang=='english'){
		document.getElementById('currentlang').textContent = 'English';
	}
	else if(currentLang=='japanese'){
		document.getElementById('currentlang').textContent = '日本語';
	}*/
			
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