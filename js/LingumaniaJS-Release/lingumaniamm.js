﻿/*
LICENSE AND TERMS OF USE

Lingumania.js is licensed under the terms of https://creativecommons.org/licenses/by-nd/3.0/ license, 
which means it can be used freely on commercial or non commercial websites as long as the language switcher links back to www.lingumania.com. 
You may modify the code only if you use it to translate your own website. In all other cases, modifications or redistribution, 
whether standalone or as part of another javascript, are not permitted without prior consent of the copyright owners.
*/
!function (w, d, u) { var translationLang; getQSParameterByName("lang", w.location.href) ? translationLang = getQSParameterByName("lang", w.location.href) : 2 == parseURL(w.location.href, !1).substring(0, 4).replace(/\//g, "").length ? translationLang = parseURL(w.location.href, !1).substring(0, 4).replace(/\//g, "") : 2 == parseURL(w.location.href, !0).substring(0, parseURL(w.location.href, !0).indexOf(".")).length ? translationLang = parseURL(w.location.href, !0).substring(0, parseURL(w.location.href, !0).indexOf(".")) : 2 == parseURL(w.location.href, !0).substring(parseURL(w.location.href, !0).lastIndexOf(".") + 1, parseURL(w.location.href, !0).length).length && (translationLang = parseURL(w.location.href, !0).substring(parseURL(w.location.href, !0).lastIndexOf(".") + 1, parseURL(w.location.href, !0).length)), translationLang && (d.body.style.visibility = "hidden"); var NodeFilter = { FILTER_ACCEPT: 1, FILTER_REJECT: 2, FILTER_SKIP: 3, SHOW_ALL: -1, SHOW_ELEMENT: 1, SHOW_ATTRIBUTE: 2, SHOW_TEXT: 4, SHOW_CDATA_SECTION: 8, SHOW_ENTITY_REFERENCE: 16, SHOW_ENTITY: 32, SHOW_PROCESSING_INSTRUCTIONS: 64, SHOW_COMMENT: 128, SHOW_DOCUMENT: 256, SHOW_DOCUMENT_TYPE: 512, SHOW_DOCUMENT_FRAGMENT: 1024, SHOW_NOTATION: 2048 }, TreeWalker = function (e, t, a, n) { this.root = e, this.whatToShow = t, this.filter = a, this.expandEntityReferences = n, this.currentNode = e, this.NodeFilter = NodeFilter }; function parseURL(e, t) { var a; return -1 < (e = decodeURIComponent(e)).indexOf("://") ? (a = e.split("/")[2], t || (a = e.split("/")[0] + "//" + e.split("/")[2])) : a = e.split("/")[0], t ? a : e.replace(a, "") } function getQSParameterByName(e, t) { e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"); var a = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t); return null == a ? "" : a[1] } function getElementsByTagNames(e) { for (var t = [], a = 0, n = e.length; a < n; a++) for (var r = d.getElementsByTagName(e[a]), i = 0; i < r.length; i++) t.push(r[i]); return t } function isTranslatableSegment(e) { if (e.match(/^(.|,|;|:|«|»|·|&|=|\/|\$|€|£|\(|\)|\*|\-|\+|\||\$-\/:-?{-~||\t|\r|\n|\d|\s)+$/gim) && !e.match(/[^.,;:€£«»·&=\/\$\(\)\*\-\+\|\t\r\n\d\s]/gim)) return !1; return !0 } function rewriteUrl(e, t, a, n) { var r; "?" == n ? (-1 != e.attributes.href.value.indexOf("#") && (r = e.attributes.href.value.split("#")[1], e.attributes.href.value = e.attributes.href.value.replace("#" + r, "")), getQSParameterByName("lang", e.attributes.href.value) ? e.attributes.href.value = e.attributes.href.value.toLowerCase().replace("lang=" + getQSParameterByName("lang", e.attributes.href.value), "lang=" + a) : -1 != e.attributes.href.value.indexOf("?") ? e.attributes.href.value += "&lang=" + a : e.attributes.href.value += "?lang=" + a, r && (e.attributes.href.value += "#" + r)) : "/" == n ? parseURL(t, !1).substring(0, 4).replace(/\//g, "").toLowerCase() == a ? e.attributes.href.value = t.split("/")[0] + "//" + parseURL(t, !0) + parseURL(t, !1) : e.attributes.href.value = t.split("/")[0] + "//" + parseURL(t, !0) + "/" + a + parseURL(t, !1) : e.attributes.href.value = t.split("/")[0] + "//" + n + parseURL(t, !1) } function encodeAllSpecialTags(e) { e = e.replace(/<b>/gim, "&lt;b&gt;").replace(/<\/b>/gim, "&lt;/b&gt;").replace(/<i>/gim, "&lt;i&gt;").replace(/<\/i>/gim, "&lt;/i&gt;").replace(/<u>/gim, "&lt;u&gt;").replace(/<\/u>/gim, "&lt;/u&gt;").replace(/<em>/gim, "&lt;em&gt;").replace(/<\/em>/gim, "&lt;/em&gt;").replace(/<\/strong>/gim, "&lt;/strong&gt;").replace(/<\/abbr>/gim, "&lt;/abbr&gt;").replace(/<\/sub>/gim, "&lt;/sub&gt;").replace(/<\/sup>/gim, "&lt;/sup&gt;").replace(/<\/big>/gim, "&lt;/big&gt;").replace(/<\/small>/gim, "&lt;/small&gt;"); var t = /<b\s[^>]*>/gim, a = t.exec(e); if (a) for (var n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<i\s[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<u\s[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<em\s[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<strong[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<abbr[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<sub[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<sup[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<big[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); if (a = (t = /<small[^>]*>/gim).exec(e)) for (n = 0; n < a.length; n++) e = e.replace(t, "&lt;" + a[n].substring(1, a[n].length - 1).toLowerCase() + "&gt;"); return e } function translateDOM() { if (linguJSON) { var isTranslated = !1, url_pattern = "?", langMenu = d.createElement("div"); langMenu.id = "lingumania_langswitcher", langMenu.className = "notranslate"; var customLangMenu = d.createElement("span"), customLangMenuHtml = linguJSON.custom_lang_switcher_html, languages = linguJSON.languages; if (1 < languages.length) { var sourceLang = languages[0]; sourceLang.url_pattern && (url_pattern = sourceLang.url_pattern); var menuHeight = 0; null == translationLang && (translationLang = sourceLang.lang_code); for (var currlangcode = "" != translationLang ? translationLang : sourceLang.lang_code, j = 1, i = 0; i < languages.length; i++) { if (languages[i].lang_code != currlangcode) { var href = w.location.protocol + "//" + languages[i].url_pattern + parseURL(w.location.href, !1), fragment; if (languages[i].url_pattern && "?" != languages[i].url_pattern) "/" == languages[i].url_pattern && (href = 2 == parseURL(w.location.href, !1).substring(0, 4).replace(/\//g, "").toLowerCase().length ? w.location.protocol + "//" + parseURL(w.location.href, !0) + parseURL(w.location.href, !1).replace(parseURL(w.location.href, !1).substring(0, 4), "/" + languages[i].lang_code + "/") : w.location.protocol + "//" + parseURL(w.location.href, !0) + "/" + languages[i].lang_code + parseURL(w.location.href, !1)); else -1 != w.location.href.indexOf("#") && (fragment = w.location.href.split("#")[1], href = w.location.href.replace("#" + fragment, "")), href = getQSParameterByName("lang", w.location.href) ? w.location.href.toLowerCase().replace("lang=" + getQSParameterByName("lang", w.location.href), "lang=" + languages[i].lang_code) : -1 != w.location.href.indexOf("?") ? w.location.href + "&lang=" + languages[i].lang_code : w.location.href + "?lang=" + languages[i].lang_code; if (linguJSON.custom_lang_switcher_html && linguJSON.custom_lang_switcher_container_id) customLangMenuHtml = customLangMenuHtml.replace("[[linguTargetLang" + j + "]]", languages[i].lang_name), customLangMenuHtml = customLangMenuHtml.replace("[[linguTargetLangHref" + j + "]]", href); else { var langItem = d.createElement("a"); langItem.innerHTML = languages[i].lang_name, langItem.className = "lingumania_target", langItem.href = href, langMenu.appendChild(langItem) } j++ } else { if (linguJSON.custom_lang_switcher_html && linguJSON.custom_lang_switcher_container_id) customLangMenuHtml = customLangMenuHtml.replace("[[linguCurrLang]]", languages[i].lang_name); else { var currlangItem = d.createElement("a"); currlangItem.id = "lingumania_currentlanglink", currlangItem.href = "", currlangItem.innerHTML = languages[i].lang_name, langMenu.insertBefore(currlangItem, langMenu.firstChild) } languages[i].url_pattern && (url_pattern = languages[i].url_pattern) } menuHeight += 30 } var translateNowItem = d.createElement("a"); if (translateNowItem.className = "lingumania_poweredby", translateNowItem.target = "_blank", translateNowItem.href = "http://www.lingumania.com", translateNowItem.innerHTML = "Translated Websites<br />Powered by Lingumania", langMenu.appendChild(translateNowItem), menuHeight += 30, linguJSON.custom_lang_switcher_html && linguJSON.custom_lang_switcher_container_id) { translateNowItem.id = "lingumania_custom_id"; var frag = d.createDocumentFragment(); for (customLangMenu.innerHTML = customLangMenuHtml; customLangMenu.firstChild;) frag.appendChild(customLangMenu.firstChild); menuHeight = 30 } langMenu.addEventListener ? (langMenu.addEventListener("mouseover", function (e) { d.getElementById("lingumania_langswitcher").style.height = menuHeight + "px" }), langMenu.addEventListener("mouseout", function (e) { setTimeout(function () { d.getElementById("lingumania_langswitcher").style.height = "30px" }, 1e3) })) : (langMenu.attachEvent("onmouseover", function (e) { d.getElementById("lingumania_langswitcher").style.height = menuHeight + "px" }), langMenu.attachEvent("onmouseout", function (e) { setTimeout(function () { d.getElementById("lingumania_langswitcher").style.height = "30px" }, 1e3) })); var customMenuContainer = d.getElementById(linguJSON.custom_lang_switcher_container_id); if (linguJSON.translated_pages) { for (var i = 0; i < linguJSON.translated_pages.length; i++) { var comparableLink = createComparableLink(w.location.href, languages); if (comparableLink.replace(currlangcode, "").replace("//", "/") == linguJSON.translated_pages[i].slug.toLowerCase()) { isTranslated = !0; break } } if (isTranslated && (d.body.insertBefore(langMenu, d.body.firstChild), linguJSON.custom_lang_switcher_html && linguJSON.custom_lang_switcher_container_id && customMenuContainer)) { for (; customMenuContainer.firstChild;) customMenuContainer.removeChild(customMenuContainer.firstChild); customMenuContainer.appendChild(frag) } } else if (isTranslated = !0, d.body.insertBefore(langMenu, d.body.firstChild), linguJSON.custom_lang_switcher_html && linguJSON.custom_lang_switcher_container_id && customMenuContainer) { for (; customMenuContainer.firstChild;) customMenuContainer.removeChild(customMenuContainer.firstChild); customMenuContainer.appendChild(frag) } } if (linguJSON.translated_segments && 0 < linguJSON.translated_segments.length && isTranslated && currlangcode != sourceLang.lang_code) { for (var translatedSegments = linguJSON.translated_segments, specialTags = getElementsByTagNames(["b", "u", "i", "strong", "em", "abbr", "sub", "sup", "big", "small"]), i = 0; i < specialTags.length; i++) specialTags[i].parentNode && (specialTags[i].parentNode.innerHTML = encodeAllSpecialTags(specialTags[i].parentNode.innerHTML)); for (var node, nodes = [], fragments = [], linkTranslations = [], domWalker = d.createTreeWalker(d.getElementsByTagName("html")[0], NodeFilter.SHOW_ALL, null, !1) ; node = domWalker.nextNode() ;) if (null != node.nodeValue) { if (!isTranslatableSegment(node.nodeValue.trim())) continue; for (var canBeTranslated = !0, current = node; canBeTranslated && current.parentNode;) if (current = current.parentNode, "STYLE" == current.nodeName) canBeTranslated = !1; else if (current.attributes) for (var i = 0; i < current.attributes.length; i++) "notranslate" == current.attributes[i].value && (canBeTranslated = !1); if (canBeTranslated) try { for (var startingWhiteSpaceRegex = /^\s+/gim, startingWhiteSpaceMatches = startingWhiteSpaceRegex.exec(node.nodeValue), endingWhiteSpaceRegex = /\s+$/gim, endingWhiteSpaceMatches = endingWhiteSpaceRegex.exec(node.nodeValue), i = 0; i < translatedSegments.length; i++) if (null == translatedSegments[i].target && eval("translatedSegments[i].target_" + currlangcode) && (translatedSegments[i].target = eval("translatedSegments[i].target_" + currlangcode)), translatedSegments[i].source == node.nodeValue.trim() && translatedSegments[i].target) { var target = translatedSegments[i].target; if (startingWhiteSpaceMatches && (target = startingWhiteSpaceMatches[0] + target), endingWhiteSpaceMatches && (target += endingWhiteSpaceMatches[0]), target.match(/<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/gim)) { var wrap = d.createElement("span"), frag = d.createDocumentFragment(); for (wrap.innerHTML = target.replace(/\\"/g, '"') ; wrap.firstChild;) frag.appendChild(wrap.firstChild); nodes.push(node), fragments.push(frag) } else node.nodeValue = target; break } } catch (e) { } if (node.nodeValue.match(/(<\/b|<b\s[^>]*>|<\/u>|<u\s[^>]*>|<\/i>|<i\s[^>]*>|<\/strong>|<strong[^>]*>|<\/em>|<em\s[^>]*>|<\/abbr>|<abbr[^>]*>|<\/sub>|<sub[^>]*>|<\/sup>|<sup[^>]*>|<\/big>|<big[^>]*>|<\/small>|<small[^>]*>)/gim)) { var wrap = d.createElement("span"), frag = d.createDocumentFragment(); for (wrap.innerHTML = node.nodeValue; wrap.firstChild;) frag.appendChild(wrap.firstChild); nodes.push(node), fragments.push(frag) } } for (var inputs = d.getElementsByTagName("input"), i = 0; i < inputs.length; i++) { var input = inputs[i]; if (isTranslatableSegment(input.value.trim())) for (var j = 0; j < translatedSegments.length; j++) if (translatedSegments[j].source == input.value.trim()) { input.value = translatedSegments[j].target; break } } for (var imgs = d.getElementsByTagName("img"), i = 0; i < imgs.length; i++) { var img = imgs[i]; if (img.attributes.alt && isTranslatableSegment(img.attributes.alt.value.trim())) for (var j = 0; j < translatedSegments.length; j++) if (translatedSegments[j].source == img.attributes.alt.value.trim()) { img.attributes.alt.value = translatedSegments[j].target; break } } for (var metas = d.getElementsByTagName("meta"), i = 0; i < metas.length; i++) { var meta = metas[i]; if (meta.attributes.content) for (var j = 0; j < translatedSegments.length; j++) if (translatedSegments[j].source == meta.attributes.content.value.trim()) { meta.attributes.content.value = translatedSegments[j].target; break } } for (var i = 0; i < translatedSegments.length; i++) null == translatedSegments[i].target && eval("translatedSegments[i].target_" + currlangcode) && (translatedSegments[i].target = eval("translatedSegments[i].target_" + currlangcode)), translatedSegments[i].target && translatedSegments[i].target.startsWith("http") && linkTranslations.push(translatedSegments[i]); for (var links = d.getElementsByTagName("a"), i = 0; i < links.length; i++) { var link = links[i]; if (link.attributes.href && "notranslate" != link.parentNode.className) { for (var j = 0; j < linkTranslations.length; j++) if (linkTranslations[j].source.trim() == link.attributes.href.value.trim().replace("/../", "/")) { link.attributes.href.value = linkTranslations[j].target; break } if (-1 != link.attributes.href.value.indexOf(parseURL(w.location.href, !0)) || -1 != link.attributes.href.value.indexOf(sourceLang.url_pattern) || !link.attributes.href.value.toLowerCase().startsWith("http")) { var absoluteLink = link.attributes.href.value; if (!link.attributes.href.value.startsWith("http") && (-1 == link.attributes.href.value.indexOf(parseURL(w.location.href, !0)) || -1 != link.attributes.href.value.indexOf(sourceLang.url_pattern))) { var el = d.createElement("div"); el.innerHTML = '<a href="' + link.attributes.href.value.split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;") + '">x</a>', absoluteLink = el.firstChild.href } for (var j = 0; j < linkTranslations.length; j++) { var comparableLink = createComparableLink(absoluteLink.trim().replace("/../", "/"), languages); if (parseURL(linkTranslations[j].source.trim(), !1) == comparableLink) { link.attributes.href.value = linkTranslations[j].target; break } } if (linguJSON.translated_pages) { for (var comparableLink = createComparableLink(absoluteLink, languages), j = 0; j < linguJSON.translated_pages.length; j++) if (comparableLink == linguJSON.translated_pages[j].slug.toLowerCase()) { rewriteUrl(link, absoluteLink, translationLang, url_pattern); break } } else rewriteUrl(link, absoluteLink, translationLang, url_pattern) } } } for (var i = 0; i < nodes.length; i++) nodes[i].parentNode && nodes[i].parentNode.replaceChild(fragments[i], nodes[i]) } if (linguJSON.translated_image_segments && 0 < linguJSON.translated_image_segments.length && isTranslated && currlangcode != sourceLang.lang_code) for (var translatedImageSegments = linguJSON.translated_image_segments, imgs = d.getElementsByTagName("img"), i = 0; i < imgs.length; i++) { var img = imgs[i]; if (img.attributes.src) for (var j = 0; j < translatedImageSegments.length; j++) if (null == translatedImageSegments[j].img_target && eval("translatedImageSegments[j].img_target_" + currlangcode) && (translatedImageSegments[j].img_target = eval("translatedImageSegments[j].img_target_" + currlangcode)), translatedImageSegments[j].img_source.replace("http://", "").replace("https://", "").endsWith(img.attributes.src.value.trim().replace("http://", "").replace("https://", ""))) { img.attributes.src.value = translatedImageSegments[j].img_target; break } } } d.body.style.visibility = "visible" } function createComparableLink(e, t) { var a = e.replace("http://", "").replace("https://", "").toLowerCase(); return a != parseURL(w.location.href, !0) && a != t[0].url_pattern || (a = "/"), a = a.replace(parseURL(w.location.href, !0), ""), "?" != t[0].url_pattern && (a = a.replace(t[0].url_pattern, "")), -1 != a.indexOf("?") && (a = a.substring(0, a.indexOf("?"))), a.lastIndexOf("/") == a.length - 1 && (a = a.substring(0, a.length - 1)), a.startsWith("/") || (a = "/" + a), a } TreeWalker.prototype.parentNode = function () { var e = this.currentNode; do { if (e === this.root || !e.parentNode || e.parentNode === this.root) return null; e = e.parentNode } while (this._getFilteredStatus(e) !== this.NodeFilter.FILTER_ACCEPT); return e && (this.currentNode = e), e }, TreeWalker.prototype.firstChild = function () { for (var e = this.currentNode.firstChild; e && this._getFilteredStatus(e) !== this.NodeFilter.FILTER_ACCEPT;) e = e.nextSibling; return e && (this.currentNode = e), e }, TreeWalker.prototype.lastChild = function () { for (var e = this.currentNode.lastChild; e && this._getFilteredStatus(e) !== this.NodeFilter.FILTER_ACCEPT;) e = e.previousSibling; return e && (this.currentNode = e), e }, TreeWalker.prototype.nextNode = function () { for (var e = this.currentNode; e;) { if (0 !== e.childNodes.length) e = e.firstChild; else if (e.nextSibling) e = e.nextSibling; else for (; e;) { if (!e.parentNode || e.parentNode === this.root) return null; if (e.parentNode.nextSibling) { e = e.parentNode.nextSibling; break } e = e.parentNode } if (e && this._getFilteredStatus(e) === this.NodeFilter.FILTER_ACCEPT) break } return e && (this.currentNode = e), e }, TreeWalker.prototype.previousNode = function () { for (var e = this.currentNode; e;) { if (e.previousSibling) for (e = e.previousSibling; e.lastChild;) e = e.lastChild; else e = e.parentNode && e.parentNode !== this.root ? e.parentNode : null; if (e && this._getFilteredStatus(e) === this.NodeFilter.FILTER_ACCEPT) break } return e && (this.currentNode = e), e }, TreeWalker.prototype.nextSibling = function () { for (var e = this.currentNode; e && (e.nextSibling && (e = e.nextSibling), this._getFilteredStatus(e) !== this.NodeFilter.FILTER_ACCEPT) ;); return e && (this.currentNode = e), e }, TreeWalker.prototype.previousSibling = function () { for (var e = this.currentNode; e && (e.previousSibling && (e = e.previousSibling), this._getFilteredStatus(e) != this.NodeFilter.FILTER_ACCEPT) ;); return e && (this.currentNode = e), e }, TreeWalker.prototype._getFilteredStatus = function (e) { var t = { 1: this.NodeFilter.SHOW_ELEMENT, 2: this.NodeFilter.SHOW_ATTRIBUTE, 3: this.NodeFilter.SHOW_TEXT, 4: this.NodeFilter.SHOW_CDATA_SECTION, 5: this.NodeFilter.SHOW_ENTITY_REFERENCE, 6: this.NodeFilter.SHOW_PROCESSING_INSTRUCTION, 7: this.NodeFilter.SHOW_PROCESSING_INSTRUCTION, 8: this.NodeFilter.SHOW_COMMENT, 9: this.NodeFilter.SHOW_DOCUMENT, 10: this.NodeFilter.SHOW_DOCUMENT_TYPE, 11: this.NodeFilter.SHOW_DOCUMENT_FRAGMENT, 12: this.NodeFilter.SHOW_NOTATION }[e.nodeType]; return t && 0 == (this.whatToShow & t) ? this.NodeFilter.FILTER_REJECT : this.filter && this.filter.acceptNode ? this.filter.acceptNode(e) : this.NodeFilter.FILTER_ACCEPT }, d.createTreeWalker || (d.createTreeWalker = function (e, t, a, n) { return new TreeWalker(e, t, a, n) }), "function" != typeof String.prototype.trim && (String.prototype.trim = function () { return this.replace(/^\s+|\s+$/g, "") }), String.prototype.startsWith = function (e) { return this.substr(0, e.length) === e }, String.prototype.endsWith = function (e) { return -1 !== this.indexOf(e, this.length - e.length) }; var linguLoader = function () { var e = "a.lingumania_target, a.lingumania_poweredby { display: none; background-color: #999; } #lingumania_custom_id { display: none; color: #fff; display: none; width: 160px; padding: 5px; text-decoration: none; } a.lingumania_target:hover, a.lingumania_poweredby:hover { background-color: #000; } #lingumania_langswitcher{ position: absolute; top: 0px; right: 0px; z-index: 100001; text-transform: uppercase; text-align: left; color: #fff; font-size: 12px; line-height: 18px; } #lingumania_langswitcher:hover a { display: block; position: relative; z-index: 100002; float: right; width: 160px; padding: 5px; clear: both; color: #fff; text-decoration: none; } a#lingumania_currentlanglink { display: block; width: 160px; padding: 5px; background: #999 url('//az596610.vo.msecnd.net/arrow-down-black.png') right top no-repeat; color: #fff; font-weight: bold; text-decoration: none; }  .lingumania_poweredby { background: url('//az596610.vo.msecnd.net/lingumania.png') right center no-repeat; border-top: 1px solid #808080; font-size: 9px; line-height: 12px; }", t = d.createElement("style"); t.type = "text/css", t.styleSheet ? t.styleSheet.cssText = e : t.innerHTML = e, d.body.insertBefore(t, d.body.firstChild), translateDOM() }; w.addEventListener ? w.addEventListener("load", linguLoader, !1) : w.attachEvent("onload", linguLoader) }(window, document);