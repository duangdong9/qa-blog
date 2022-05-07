(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{412:function(e,t,v){"use strict";v.r(t);var a=v(11),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"关于addeventlistener的第三个参数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于addeventlistener的第三个参数"}},[e._v("#")]),e._v(" 关于addEventListener的第三个参数")]),e._v(" "),v("h1",{attrs:{id:"addeventlistener-的第三个参数-提升页面滚动性能"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener-的第三个参数-提升页面滚动性能"}},[e._v("#")]),e._v(" "),v("code",[e._v("addEventListener")]),e._v(" 的第三个参数，提升页面滚动性能")]),e._v(" "),v("p",[v("code",[e._v("addEventListener")]),e._v(" 用来在页面中监听事件，它的参数签名是这样的：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("target.addEventListener(type, listener[, useCapture]);\n")])])]),v("p",[e._v("但是如果你现在去查询 MDN 的文档却发现是这样写的：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("target.addEventListener(type, listener[, options]);\ntarget.addEventListener(type, listener[, useCapture]);\n")])])]),v("p",[e._v("最后一个参数 "),v("code",[e._v("useCapture")]),e._v(" 在很久之前是必填的，后来的规范将 "),v("code",[e._v("useCapture")]),e._v(" 变成了选填。"),v("code",[e._v("useCapture")]),e._v("参数用来控制监听器是在捕获阶段执行还是在冒泡阶段执行，"),v("code",[e._v("true")]),e._v(" 为捕获阶段，"),v("code",[e._v("false")]),e._v(" 为冒泡阶段，变成选填后默认值为 "),v("code",[e._v("false")]),e._v("（冒泡阶段），因为传 "),v("code",[e._v("true")]),e._v(" 的情况太少了。")]),e._v(" "),v("p",[e._v("此过程被称为事件传播。如果我们为每个元素都绑定事件，那么在事件冒泡过程中，子元素最先响应事件，然后依次向父元素冒泡。")]),e._v(" "),v("p",[e._v("在事件处理函数中，会传递 Event 对象作为参数，而这个参数最常用的 2 个方法就是 "),v("code",[e._v("event.preventDefault()")]),e._v(" 和 "),v("code",[e._v("event.stopPropagation()")]),e._v("。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("stopPropagation()")]),e._v(" 阻止事件传播")]),e._v(" "),v("li",[v("code",[e._v("preventDefault()")]),e._v(" 阻止事件的默认行为")])]),e._v(" "),v("p",[e._v("在移动网页中，我们经常使用的就是 touch 系列的事件，如：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("touchstart")])]),e._v(" "),v("li",[v("p",[e._v("touchmove")])]),e._v(" "),v("li",[v("p",[e._v("touchend")])]),e._v(" "),v("li",[v("p",[e._v("touchcancel")])])]),e._v(" "),v("p",[e._v("我们可以使用如下方式绑定 "),v("code",[e._v("touchstart")]),e._v(" 事件：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v('div.addEventListener("touchstart", function(e){\n    // do sth.\n})\n')])])]),v("p",[e._v("由于第三个参数没有传值，那么默认就是 "),v("code",[e._v("false")]),e._v("，也就是这个事件在冒泡阶段被处理，如果调用了 "),v("code",[e._v("stopPropagation()")]),e._v(" 则 "),v("code",[e._v("div")]),e._v(" 的父元素就无法接收这个事件。")]),e._v(" "),v("p",[e._v("那么如果我们调用了 "),v("code",[e._v("preventDefault()")]),e._v(" 呢？如果你曾经给超链接 "),v("code",[e._v("a")]),e._v(" 标签绑定过 "),v("code",[e._v("click")]),e._v(" 事件应该就知道会发生什么了。当 "),v("code",[e._v("a")]),e._v(" 标签点击时，它的默认行为是跳转到 "),v("code",[e._v("href")]),e._v(" 指定的链接，如果我们调用了 "),v("code",[e._v("preventDefault")]),e._v(" 就阻止了 "),v("code",[e._v("a")]),e._v(" 标签点击事件的默认行为。（如果你使用 jQuery 通过 "),v("code",[e._v("return false")]),e._v(" 可以阻止事件默认行为，但是深记 You Might Not Need jQuery ）")]),e._v(" "),v("p",[e._v("如果我们在 "),v("code",[e._v("touchstart")]),e._v(" 事件调用 "),v("code",[e._v("preventDefault")]),e._v(" 会怎样呢？这时页面会禁止，不会滚动或缩放。那么问题来了：浏览器无法预先知道一个监听器会不会调用 "),v("code",[e._v("preventDefault()")]),e._v("，它需要等监听器执行完后，再去执行默认行为，而监听器执行是要耗时的，这样就会导致页面卡顿。")]),e._v(" "),v("p",[e._v("这段翻译的太专业了，你可以这么理解：当你触摸滑动页面时，页面应该跟随手指一起滚动。而此时你绑定了一个 "),v("code",[e._v("touchstart")]),e._v(" 事件，你的事件大概执行 200 毫秒。这时浏览器就犯迷糊了：如果你在事件绑定函数中调用了 "),v("code",[e._v("preventDefault")]),e._v("，那么页面就不应该滚动，如果你没有调用 "),v("code",[e._v("preventDefault")]),e._v("，页面就需要滚动。但是你到底调用了还是没有调用，浏览器不知道。只能先执行你的函数，等 200 毫秒后，绑定事件执行完了，浏览器才知道，“哦，原来你没有阻止默认行为，好的，我马上滚”。此时，页面开始滚。")]),e._v(" "),v("p",[e._v("而且 Chrome 做了统计：")]),e._v(" "),v("p",[e._v("For instance, in Chrome for Android 80% of the touch events that block\nscrolling never actually prevent it. 10% of these events add more than\n100ms of delay to the start of scrolling, and a catastrophic delay of\nat least 500ms occurs in 1% of scrolls.")]),e._v(" "),v("p",[e._v("在 Android 版 Chrome 浏览器的 touch 事件监听器的页面中，80% 的页面都不会调用 "),v("code",[e._v("preventDefault")]),e._v(" 函数来阻止事件的默认行为。在滑动流畅度上，有 10% 的页面增加至少 100ms 的延迟，1% 的页面甚至增加 500ms 以上的延迟。")]),e._v(" "),v("p",[e._v("也就是说，当浏览器等待执行事件的默认行为时，大部分情况是白等了。如果 Web 开发者能够提前告诉浏览器：“我不调用 "),v("code",[e._v("preventDefault")]),e._v(" 函数来阻止事件事件行为”，那么浏览器就能快速生成事件，从而提升页面性能。")]),e._v(" "),v("p",[e._v("Chrome官方有个视频测试：https://www.youtube.com/watch?v=NPM6172J22g （需科学上网）")]),e._v(" "),v("p",[e._v("而 "),v("code",[e._v("passive")]),e._v(" 就是为此而生的。在 WICG 的 demo 中提到，即使滚动事件里面写一个死循环，浏览器也能够正常处理页面的滑动。")]),e._v(" "),v("p",[e._v("在最新的 DOM 规范中，事件绑定函数的第三个参数变成了对象：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("target.addEventListener(type, listener[, options]);\n")])])]),v("p",[e._v("我们可以通过传递 "),v("code",[e._v("passive")]),e._v(" 为 "),v("code",[e._v("true")]),e._v(" 来明确告诉浏览器，事件处理程序不会调用 "),v("code",[e._v("preventDefault")]),e._v(" 来阻止默认滑动行为。")]),e._v(" "),v("p",[e._v("在 Chrome 浏览器中，如果发现耗时超过 100 毫秒的非 "),v("code",[e._v("passive")]),e._v(" 的监听器，会在 DevTools 里面警告你加上 "),v("code",[e._v("{passive: true}")]),e._v("。")]),e._v(" "),v("p",[e._v("Chrome 51 和 Firefox 49 已经支持 passive 属性。如果浏览器不支持，已经有人做了非常巧妙地 polyfill：")]),e._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[e._v("// Test via a getter in the options object to see \n// if the passive property is accessed\nvar supportsPassive = false;\ntry {\n    var opts = Object.defineProperty({}, 'passive', {\n    get: function() {\n        supportsPassive = true;\n    }\n    });\n    window.addEventListener(\"test\", null, opts);\n} catch (e) {}\n\n// Use our detect's results. \n// passive applied if supported, capture will be false either way.\nelem.addEventListener(\n    'touchstart',\n    fn,\n    supportsPassive ? { passive: true } : false\n);\n")])])]),v("p",[e._v("这段代码值得细读，用的太巧妙了，简直炫酷到没朋友。")]),e._v(" "),v("p",[e._v("不过，遗憾的是各大主流框架都还未提供对 "),v("code",[e._v("passive")]),e._v(" 的原生支持：")]),e._v(" "),v("p",[e._v("React 框架番号为 #6436 的 issue 从今年 4 月 8 号就开始讨论，官方家加的 label 是 “big picture”。")]),e._v(" "),v("p",[v("a",{attrs:{href:"https://github.com/facebook/react/issues/6436",target:"_blank",rel:"noopener noreferrer"}},[e._v("Support Passive Event Listeners · Issue #6436 · facebook/react"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("本来我觉得 Angular 应该会提供对 passive 的原生支持，但是我去搜了 issue。编号为 #8866 的 issue 残忍的告诉我 Angular 也正在讨论此事，而且时间比 React 还晚，5月27号。而 label 是 “state: Needs Design”。")]),e._v(" "),v("p",[e._v("["),v("a",{attrs:{href:"https://github.com/angular/angular/issues/8866",target:"_blank",rel:"noopener noreferrer"}},[e._v("feat] Take advantage of passive event listeners · Issue #8866 · angular/angular"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("最不应该报什么希望的就是 jQuery 了，毕竟对于一个连事件捕获都不支持的框架来说，很难想象它会支持 passive。")]),e._v(" "),v("p",[e._v("去看了它的 issue，果然是前端最流行的框架，在今年1月17号就有开发者提了相关 issue 了。和 React Angular 不同，这个 issue 并不是 jQuery 开发成员提的。label 是 “Event”、 “Feature”、 “Web Standards”。")]),e._v(" "),v("p",[e._v("从 label 可以看出来对这个特性的重视，但是再看看 milestone 就未免有些心寒——4.0.0。")]),e._v(" "),v("p",[e._v("如果没觉得心寒，可以继续点击进去看看 4.0.0 的开发进度和发布计划：")]),e._v(" "),v("p",[e._v("什么时候发布呢？No due date")]),e._v(" "),v("p",[e._v("开发进度如何呢？0% complete")]),e._v(" "),v("p",[e._v("我之前开发过一个 Chrome 插件 "),v("a",{attrs:{href:"https://github.com/justjavac/ChromeSnifferPlus",target:"_blank",rel:"noopener noreferrer"}},[e._v("ChromeSnifferPlus"),v("OutboundLink")],1),e._v("，可以检测当前页面使用了哪些框架，以及框架的版本号等信息。年初的时候我曾分析了一次统计情况，jQuery 版本使用最多的网站是 1.4. "),v("em",[e._v("和 1.7.")]),e._v("。")]),e._v(" "),v("p",[e._v("最后，也不要悲观，上面只是说了这些框架并没有提供对 passive 的原生支持，并不代表我们就不可以使用了。比如 React 的很多 scroll 组件，都使用了 passive 来提升滚动性能。")]),e._v(" "),v("hr"),e._v(" "),v("p",[e._v("阅读原文："),v("a",{attrs:{href:"https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/blob/master/archives/006-web-scrolling-performance-optimization-passive-event-listeners.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("addEventListener 的第三个参数，提升页面滚动性能"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("讨论地址："),v("a",{attrs:{href:"https://github.com/justjavac/the-front-end-knowledge-you-may-not-know/issues/6",target:"_blank",rel:"noopener noreferrer"}},[e._v("#6"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("如果你想参与讨论，请"),v("a",{attrs:{href:"https://github.com/justjavac/the-front-end-knowledge-you-may-not-know",target:"_blank",rel:"noopener noreferrer"}},[e._v("点击这里"),v("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);