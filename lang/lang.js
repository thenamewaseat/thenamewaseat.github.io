//init language on load
/*window.onload = function() {
    // Get the current URL
    let currentURL = window.location.href;

    // Check if 'lang' parameter is already in the URL
    if (!currentURL.includes('lang=')) {
        // Check if the URL already has a query string
        if (currentURL.indexOf('?') === -1) {
            // If no query string, append '?lang=en'
            window.location.href = currentURL + '?lang=en';
        } else {
            // If there is a query string, append '&lang=en'
            window.location.href = currentURL + '&lang=en';
        }
    }
};*/
//translation data
var linguJSON = {
    "languages": [
        {
            "lang_name": "English",
            "lang_code": "io",
            "url_pattern": "?"
        },
        {
            "lang_name": "中文",
            "lang_code": "zh",
            "url_pattern": "?"
        },
        {
            "lang_name": "日本語",
            "lang_code": "ja",
            "url_pattern": "?"
        }
    ],
    "custom_lang_switcher_html": "<div id=\"langswitcher\" class=\"notranslate\"><a id=\"currlanglink\" href=\"\">[[linguCurrLang]]</a> <a href=\"[[linguTargetLangHref1]]\" class=\"targetlang\">[[linguTargetLang1]]</a><a href=\"[[linguTargetLangHref2]]\" class=\"targetlang\">[[linguTargetLang2]]</a></div>",
    "custom_lang_switcher_container_id": "langlinks",
    "translated_segments": [
        {
            "source": "About",
            "target_zh": "關於",
            "target_ja": "紹介"
            
        },
        {
            "source": "Gallery",
            "target_zh": "作品集",
            "target_ja": "ギャラリー"
            
        },
        {
            "source": "Blogs",
            "target_zh": "部落格",
            "target_ja": "ブログ"
        },
        {
            "source": "Pricing",
            "target_zh": "價目表",
            "target_ja": "価格"
        },
        {
            "source": "English",
            "target_zh": "中文",
            "target_ja": "日本語"
        },
        /*Index */
        {
            "source": "Infinite",
            /*"target_zh": "Thenamewaseat是一位就讀創意媒體的學生。",*/
            "target_ja": "無限の"
            
        },
        {
            "source": "Possibilites",
            /*"target_zh": "Thenamewaseat是一位就讀創意媒體的學生。",*/
            "target_ja": "可能性"
            
        },
        {
            "source": "Thenamewaseat is a Student from Creative Media",
            "target_zh": "Thenamewaseat是一位就讀創意媒體的學生。",
            "target_ja": "Thenamewaseatはクリエイティブ・メディア学科の学生。"
            
        },
        {
            "source": "I am thenamewaseat, who are passionate in learning game related skills, such as Live 2D. I also dig in to installation, Game and App design and drawings.",
            "target_ja": "thenamewaseatはLive 2Dなどゲーム関連のスキル習得に熱中している。インスタレーション、ゲームやアプリのデザイン、ドローイングも得意です。"
            
        },
        {
            "source": "UX/UI designer • illustrator • Game designer • Web designer",
            "target_zh": "UI/UX 設計 • 繪師 • 遊戲設計 • 網頁設計",
            "target_ja": "UI/UX 設計 • 絵師 • ゲーム設計 • サイト設計"
        },
        /*About */
        {
            "source": "2022 - Now :",
            "target_zh": "2022 - 現在 :",
            "target_ja": "2022 - 現在 :"
        },
        {
            "source": "City University of Hong Kong",
            "target_zh": "香港城市大學",
            "target_ja": "香港城市大学"
        },
        {
            "source": "Bachelor of Science in Creative Media",
            "target_zh": "創意媒體理學士",
            "target_ja": "クリエイティブ・メディア理学士"
        },
        {
            "source": "PolyU, Hong Kong Community College",
            "target_zh": "理大香港專上學院",
            "target_ja": "理工大学香港コミュニティカレッジ"
        },
        {
            "source": "Associate Degree in Information Technology",
            "target_zh": "資訊科技副學士",
            "target_ja": "情報技術準学士"
        },
        {
            "source": "Skills",
            "target_zh": "技能",
            "target_ja": "技能"
        },
        {
            "source": "<b>Software</b>",
            "target_zh": "<b>軟體</b>",
            "target_ja": "<b>ソフト</b>"
        },
        {
            "source": "<b>Language</b>",
            "target_zh": "<b>語言</b>",
            "target_ja": "<b>言語</b>"
        },
        /*Gallery */
        {
            "source": "Works that I done before",
            "target_zh": "過去的作品",
            "target_ja": "過去に手がけた作品"
            
        },
        {
            "source": "Installations",
            "target_zh": "裝置藝術",
            "target_ja": "インスタレーション"
            
        },
        {
            "source": "Drawings",
            "target_zh": "繪畫",
            "target_ja": "絵画"
            
        },
        {
            "source": "Photography",
            "target_zh": "攝影",
            "target_ja": "撮影"
            
        },
        {
            "source": "Games",
            "target_zh": "遊戲設計",
            "target_ja": "ゲーム設計"
            
        },
        {
            "source": "UI/UX design",
            "target_zh": "UI/UX設計",
            "target_ja": "UI/UX設計"
            
        },
        {
            "source": "Others",
            "target_zh": "其他",
            "target_ja": "その他"
            
        },
        {
            "source": "(page not yet finished, please refer to pdf below)",
            "target_zh": "（頁面尚未完成，請參考以下PDF。）",
            "target_ja": "(未完成のページがありますので、下記PDFをご参照ください。）"
        }
    ]/*,
    "translated_pages": [
      {
          "slug": "index.html" //we only have translation for this Demo page; other links on the page (ie. link to www.lingumania.com homepage will not be prefixed with fr.lingumania.com or es.lingumania.com)
      }
    ]*/
};