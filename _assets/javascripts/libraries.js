/*!
 * jQuery JavaScript Library v1.5.1
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Wed Feb 23 13:55:29 2011 -0500
 */
(function(a,b){function cg(a){return d.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cd(a){if(!bZ[a]){var b=d("<"+a+">").appendTo("body"),c=b.css("display");b.remove();if(c==="none"||c==="")c="block";bZ[a]=c}return bZ[a]}function cc(a,b){var c={};d.each(cb.concat.apply([],cb.slice(0,b)),function(){c[this]=a});return c}function bY(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function bX(){try{return new a.XMLHttpRequest}catch(b){}}function bW(){d(a).unload(function(){for(var a in bU)bU[a](0,1)})}function bQ(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var e=a.dataTypes,f={},g,h,i=e.length,j,k=e[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h==="string"&&(f[h.toLowerCase()]=a.converters[h]);l=k,k=e[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=f[m]||f["* "+k];if(!n){p=b;for(o in f){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=f[j[1]+" "+k];if(p){o=f[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&d.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function bP(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function bO(a,b,c,e){if(d.isArray(b)&&b.length)d.each(b,function(b,f){c||bq.test(a)?e(a,f):bO(a+"["+(typeof f==="object"||d.isArray(f)?b:"")+"]",f,c,e)});else if(c||b==null||typeof b!=="object")e(a,b);else if(d.isArray(b)||d.isEmptyObject(b))e(a,"");else for(var f in b)bO(a+"["+f+"]",b[f],c,e)}function bN(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bH,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l==="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=bN(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=bN(a,c,d,e,"*",g));return l}function bM(a){return function(b,c){typeof b!=="string"&&(c=b,b="*");if(d.isFunction(c)){var e=b.toLowerCase().split(bB),f=0,g=e.length,h,i,j;for(;f<g;f++)h=e[f],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bo(a,b,c){var e=b==="width"?bi:bj,f=b==="width"?a.offsetWidth:a.offsetHeight;if(c==="border")return f;d.each(e,function(){c||(f-=parseFloat(d.css(a,"padding"+this))||0),c==="margin"?f+=parseFloat(d.css(a,"margin"+this))||0:f-=parseFloat(d.css(a,"border"+this+"Width"))||0});return f}function ba(a,b){b.src?d.ajax({url:b.src,async:!1,dataType:"script"}):d.globalEval(b.text||b.textContent||b.innerHTML||""),b.parentNode&&b.parentNode.removeChild(b)}function _(a){return"getElementsByTagName"in a?a.getElementsByTagName("*"):"querySelectorAll"in a?a.querySelectorAll("*"):[]}function $(a,b){if(b.nodeType===1){var c=b.nodeName.toLowerCase();b.clearAttributes(),b.mergeAttributes(a);if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(d.expando)}}function Z(a,b){if(b.nodeType===1&&d.hasData(a)){var c=d.expando,e=d.data(a),f=d.data(b,e);if(e=e[c]){var g=e.events;f=f[c]=d.extend({},e);if(g){delete f.handle,f.events={};for(var h in g)for(var i=0,j=g[h].length;i<j;i++)d.event.add(b,h+(g[h][i].namespace?".":"")+g[h][i].namespace,g[h][i],g[h][i].data)}}}}function Y(a,b){return d.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function O(a,b,c){if(d.isFunction(b))return d.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return d.grep(a,function(a,d){return a===b===c});if(typeof b==="string"){var e=d.grep(a,function(a){return a.nodeType===1});if(J.test(b))return d.filter(b,e,!c);b=d.filter(b,e)}return d.grep(a,function(a,e){return d.inArray(a,b)>=0===c})}function N(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function F(a,b){return(a&&a!=="*"?a+".":"")+b.replace(r,"`").replace(s,"&")}function E(a){var b,c,e,f,g,h,i,j,k,l,m,n,o,q=[],r=[],s=d._data(this,"events");if(a.liveFired!==this&&s&&s.live&&!a.target.disabled&&(!a.button||a.type!=="click")){a.namespace&&(n=new RegExp("(^|\\.)"+a.namespace.split(".").join("\\.(?:.*\\.)?")+"(\\.|$)")),a.liveFired=this;var t=s.live.slice(0);for(i=0;i<t.length;i++)g=t[i],g.origType.replace(p,"")===a.type?r.push(g.selector):t.splice(i--,1);f=d(a.target).closest(r,a.currentTarget);for(j=0,k=f.length;j<k;j++){m=f[j];for(i=0;i<t.length;i++){g=t[i];if(m.selector===g.selector&&(!n||n.test(g.namespace))&&!m.elem.disabled){h=m.elem,e=null;if(g.preType==="mouseenter"||g.preType==="mouseleave")a.type=g.preType,e=d(a.relatedTarget).closest(g.selector)[0];(!e||e!==h)&&q.push({elem:h,handleObj:g,level:m.level})}}}for(j=0,k=q.length;j<k;j++){f=q[j];if(c&&f.level>c)break;a.currentTarget=f.elem,a.data=f.handleObj.data,a.handleObj=f.handleObj,o=f.handleObj.origHandler.apply(f.elem,arguments);if(o===!1||a.isPropagationStopped()){c=f.level,o===!1&&(b=!1);if(a.isImmediatePropagationStopped())break}}return b}}function C(a,c,e){var f=d.extend({},e[0]);f.type=a,f.originalEvent={},f.liveFired=b,d.event.handle.call(c,f),f.isDefaultPrevented()&&e[0].preventDefault()}function w(){return!0}function v(){return!1}function g(a){for(var b in a)if(b!=="toJSON")return!1;return!0}function f(a,c,f){if(f===b&&a.nodeType===1){f=a.getAttribute("data-"+c);if(typeof f==="string"){try{f=f==="true"?!0:f==="false"?!1:f==="null"?null:d.isNaN(f)?e.test(f)?d.parseJSON(f):f:parseFloat(f)}catch(g){}d.data(a,c,f)}else f=b}return f}var c=a.document,d=function(){function I(){if(!d.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(I,1);return}d.ready()}}var d=function(a,b){return new d.fn.init(a,b,g)},e=a.jQuery,f=a.$,g,h=/^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]+)$)/,i=/\S/,j=/^\s+/,k=/\s+$/,l=/\d/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=navigator.userAgent,w,x=!1,y,z="then done fail isResolved isRejected promise".split(" "),A,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,G=Array.prototype.indexOf,H={};d.fn=d.prototype={constructor:d,init:function(a,e,f){var g,i,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!e&&c.body){this.context=c,this[0]=c.body,this.selector="body",this.length=1;return this}if(typeof a==="string"){g=h.exec(a);if(!g||!g[1]&&e)return!e||e.jquery?(e||f).find(a):this.constructor(e).find(a);if(g[1]){e=e instanceof d?e[0]:e,k=e?e.ownerDocument||e:c,j=m.exec(a),j?d.isPlainObject(e)?(a=[c.createElement(j[1])],d.fn.attr.call(a,e,!0)):a=[k.createElement(j[1])]:(j=d.buildFragment([g[1]],[k]),a=(j.cacheable?d.clone(j.fragment):j.fragment).childNodes);return d.merge(this,a)}i=c.getElementById(g[2]);if(i&&i.parentNode){if(i.id!==g[2])return f.find(a);this.length=1,this[0]=i}this.context=c,this.selector=a;return this}if(d.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return d.makeArray(a,this)},selector:"",jquery:"1.5.1",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var e=this.constructor();d.isArray(a)?D.apply(e,a):d.merge(e,a),e.prevObject=this,e.context=this.context,b==="find"?e.selector=this.selector+(this.selector?" ":"")+c:b&&(e.selector=this.selector+"."+b+"("+c+")");return e},each:function(a,b){return d.each(this,a,b)},ready:function(a){d.bindReady(),y.done(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(d.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},d.fn.init.prototype=d.fn,d.extend=d.fn.extend=function(){var a,c,e,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!=="object"&&!d.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){e=i[c],f=a[c];if(i===f)continue;l&&f&&(d.isPlainObject(f)||(g=d.isArray(f)))?(g?(g=!1,h=e&&d.isArray(e)?e:[]):h=e&&d.isPlainObject(e)?e:{},i[c]=d.extend(l,h,f)):f!==b&&(i[c]=f)}return i},d.extend({noConflict:function(b){a.$=f,b&&(a.jQuery=e);return d},isReady:!1,readyWait:1,ready:function(a){a===!0&&d.readyWait--;if(!d.readyWait||a!==!0&&!d.isReady){if(!c.body)return setTimeout(d.ready,1);d.isReady=!0;if(a!==!0&&--d.readyWait>0)return;y.resolveWith(c,[d]),d.fn.trigger&&d(c).trigger("ready").unbind("ready")}},bindReady:function(){if(!x){x=!0;if(c.readyState==="complete")return setTimeout(d.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",A,!1),a.addEventListener("load",d.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",A),a.attachEvent("onload",d.ready);var b=!1;try{b=a.frameElement==null}catch(e){}c.documentElement.doScroll&&b&&I()}}},isFunction:function(a){return d.type(a)==="function"},isArray:Array.isArray||function(a){return d.type(a)==="array"},isWindow:function(a){return a&&typeof a==="object"&&"setInterval"in a},isNaN:function(a){return a==null||!l.test(a)||isNaN(a)},type:function(a){return a==null?String(a):H[B.call(a)]||"object"},isPlainObject:function(a){if(!a||d.type(a)!=="object"||a.nodeType||d.isWindow(a))return!1;if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1;var c;for(c in a){}return c===b||C.call(a,c)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw a},parseJSON:function(b){if(typeof b!=="string"||!b)return null;b=d.trim(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return a.JSON&&a.JSON.parse?a.JSON.parse(b):(new Function("return "+b))();d.error("Invalid JSON: "+b)},parseXML:function(b,c,e){a.DOMParser?(e=new DOMParser,c=e.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b)),e=c.documentElement,(!e||!e.nodeName||e.nodeName==="parsererror")&&d.error("Invalid XML: "+b);return c},noop:function(){},globalEval:function(a){if(a&&i.test(a)){var b=c.head||c.getElementsByTagName("head")[0]||c.documentElement,e=c.createElement("script");d.support.scriptEval()?e.appendChild(c.createTextNode(a)):e.text=a,b.insertBefore(e,b.firstChild),b.removeChild(e)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,e){var f,g=0,h=a.length,i=h===b||d.isFunction(a);if(e){if(i){for(f in a)if(c.apply(a[f],e)===!1)break}else for(;g<h;)if(c.apply(a[g++],e)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(var j=a[0];g<h&&c.call(j,g,j)!==!1;j=a[++g]){}return a},trim:F?function(a){return a==null?"":F.call(a)}:function(a){return a==null?"":(a+"").replace(j,"").replace(k,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var e=d.type(a);a.length==null||e==="string"||e==="function"||e==="regexp"||d.isWindow(a)?D.call(c,a):d.merge(c,a)}return c},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var c=0,d=b.length;c<d;c++)if(b[c]===a)return c;return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,b,c){var d=[],e;for(var f=0,g=a.length;f<g;f++)e=b(a[f],f,c),e!=null&&(d[d.length]=e);return d.concat.apply([],d)},guid:1,proxy:function(a,c,e){arguments.length===2&&(typeof c==="string"?(e=a,a=e[c],c=b):c&&!d.isFunction(c)&&(e=c,c=b)),!c&&a&&(c=function(){return a.apply(e||this,arguments)}),a&&(c.guid=a.guid=a.guid||c.guid||d.guid++);return c},access:function(a,c,e,f,g,h){var i=a.length;if(typeof c==="object"){for(var j in c)d.access(a,j,c[j],f,g,e);return a}if(e!==b){f=!h&&f&&d.isFunction(e);for(var k=0;k<i;k++)g(a[k],c,f?e.call(a[k],k,g(a[k],c)):e,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},_Deferred:function(){var a=[],b,c,e,f={done:function(){if(!e){var c=arguments,g,h,i,j,k;b&&(k=b,b=0);for(g=0,h=c.length;g<h;g++)i=c[g],j=d.type(i),j==="array"?f.done.apply(f,i):j==="function"&&a.push(i);k&&f.resolveWith(k[0],k[1])}return this},resolveWith:function(d,f){if(!e&&!b&&!c){c=1;try{while(a[0])a.shift().apply(d,f)}catch(g){throw g}finally{b=[d,f],c=0}}return this},resolve:function(){f.resolveWith(d.isFunction(this.promise)?this.promise():this,arguments);return this},isResolved:function(){return c||b},cancel:function(){e=1,a=[];return this}};return f},Deferred:function(a){var b=d._Deferred(),c=d._Deferred(),e;d.extend(b,{then:function(a,c){b.done(a).fail(c);return this},fail:c.done,rejectWith:c.resolveWith,reject:c.resolve,isRejected:c.isResolved,promise:function(a){if(a==null){if(e)return e;e=a={}}var c=z.length;while(c--)a[z[c]]=b[z[c]];return a}}),b.done(c.cancel).fail(b.cancel),delete b.cancel,a&&a.call(b,b);return b},when:function(a){var b=arguments.length,c=b<=1&&a&&d.isFunction(a.promise)?a:d.Deferred(),e=c.promise();if(b>1){var f=E.call(arguments,0),g=b,h=function(a){return function(b){f[a]=arguments.length>1?E.call(arguments,0):b,--g||c.resolveWith(e,f)}};while(b--)a=f[b],a&&d.isFunction(a.promise)?a.promise().then(h(b),c.reject):--g;g||c.resolveWith(e,f)}else c!==a&&c.resolve(a);return e},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}d.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.subclass=this.subclass,a.fn.init=function b(b,c){c&&c instanceof d&&!(c instanceof a)&&(c=a(c));return d.fn.init.call(this,b,c,e)},a.fn.init.prototype=a.fn;var e=a(c);return a},browser:{}}),y=d._Deferred(),d.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){H["[object "+b+"]"]=b.toLowerCase()}),w=d.uaMatch(v),w.browser&&(d.browser[w.browser]=!0,d.browser.version=w.version),d.browser.webkit&&(d.browser.safari=!0),G&&(d.inArray=function(a,b){return G.call(b,a)}),i.test(" ")&&(j=/^[\s\xA0]+/,k=/[\s\xA0]+$/),g=d(c),c.addEventListener?A=function(){c.removeEventListener("DOMContentLoaded",A,!1),d.ready()}:c.attachEvent&&(A=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",A),d.ready())});return d}();(function(){d.support={};var b=c.createElement("div");b.style.display="none",b.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";var e=b.getElementsByTagName("*"),f=b.getElementsByTagName("a")[0],g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=b.getElementsByTagName("input")[0];if(e&&e.length&&f){d.support={leadingWhitespace:b.firstChild.nodeType===3,tbody:!b.getElementsByTagName("tbody").length,htmlSerialize:!!b.getElementsByTagName("link").length,style:/red/.test(f.getAttribute("style")),hrefNormalized:f.getAttribute("href")==="/a",opacity:/^0.55$/.test(f.style.opacity),cssFloat:!!f.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,deleteExpando:!0,optDisabled:!1,checkClone:!1,noCloneEvent:!0,noCloneChecked:!0,boxModel:null,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableHiddenOffsets:!0},i.checked=!0,d.support.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,d.support.optDisabled=!h.disabled;var j=null;d.support.scriptEval=function(){if(j===null){var b=c.documentElement,e=c.createElement("script"),f="script"+d.now();try{e.appendChild(c.createTextNode("window."+f+"=1;"))}catch(g){}b.insertBefore(e,b.firstChild),a[f]?(j=!0,delete a[f]):j=!1,b.removeChild(e),b=e=f=null}return j};try{delete b.test}catch(k){d.support.deleteExpando=!1}!b.addEventListener&&b.attachEvent&&b.fireEvent&&(b.attachEvent("onclick",function l(){d.support.noCloneEvent=!1,b.detachEvent("onclick",l)}),b.cloneNode(!0).fireEvent("onclick")),b=c.createElement("div"),b.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";var m=c.createDocumentFragment();m.appendChild(b.firstChild),d.support.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked,d(function(){var a=c.createElement("div"),b=c.getElementsByTagName("body")[0];if(b){a.style.width=a.style.paddingLeft="1px",b.appendChild(a),d.boxModel=d.support.boxModel=a.offsetWidth===2,"zoom"in a.style&&(a.style.display="inline",a.style.zoom=1,d.support.inlineBlockNeedsLayout=a.offsetWidth===2,a.style.display="",a.innerHTML="<div style='width:4px;'></div>",d.support.shrinkWrapBlocks=a.offsetWidth!==2),a.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>";var e=a.getElementsByTagName("td");d.support.reliableHiddenOffsets=e[0].offsetHeight===0,e[0].style.display="",e[1].style.display="none",d.support.reliableHiddenOffsets=d.support.reliableHiddenOffsets&&e[0].offsetHeight===0,a.innerHTML="",b.removeChild(a).style.display="none",a=e=null}});var n=function(a){var b=c.createElement("div");a="on"+a;if(!b.attachEvent)return!0;var d=a in b;d||(b.setAttribute(a,"return;"),d=typeof b[a]==="function"),b=null;return d};d.support.submitBubbles=n("submit"),d.support.changeBubbles=n("change"),b=e=f=null}})();var e=/^(?:\{.*\}|\[.*\])$/;d.extend({cache:{},uuid:0,expando:"jQuery"+(d.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?d.cache[a[d.expando]]:a[d.expando];return!!a&&!g(a)},data:function(a,c,e,f){if(d.acceptData(a)){var g=d.expando,h=typeof c==="string",i,j=a.nodeType,k=j?d.cache:a,l=j?a[d.expando]:a[d.expando]&&d.expando;if((!l||f&&l&&!k[l][g])&&h&&e===b)return;l||(j?a[d.expando]=l=++d.uuid:l=d.expando),k[l]||(k[l]={},j||(k[l].toJSON=d.noop));if(typeof c==="object"||typeof c==="function")f?k[l][g]=d.extend(k[l][g],c):k[l]=d.extend(k[l],c);i=k[l],f&&(i[g]||(i[g]={}),i=i[g]),e!==b&&(i[c]=e);if(c==="events"&&!i[c])return i[g]&&i[g].events;return h?i[c]:i}},removeData:function(b,c,e){if(d.acceptData(b)){var f=d.expando,h=b.nodeType,i=h?d.cache:b,j=h?b[d.expando]:d.expando;if(!i[j])return;if(c){var k=e?i[j][f]:i[j];if(k){delete k[c];if(!g(k))return}}if(e){delete i[j][f];if(!g(i[j]))return}var l=i[j][f];d.support.deleteExpando||i!=a?delete i[j]:i[j]=null,l?(i[j]={},h||(i[j].toJSON=d.noop),i[j][f]=l):h&&(d.support.deleteExpando?delete b[d.expando]:b.removeAttribute?b.removeAttribute(d.expando):b[d.expando]=null)}},_data:function(a,b,c){return d.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=d.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),d.fn.extend({data:function(a,c){var e=null;if(typeof a==="undefined"){if(this.length){e=d.data(this[0]);if(this[0].nodeType===1){var g=this[0].attributes,h;for(var i=0,j=g.length;i<j;i++)h=g[i].name,h.indexOf("data-")===0&&(h=h.substr(5),f(this[0],h,e[h]))}}return e}if(typeof a==="object")return this.each(function(){d.data(this,a)});var k=a.split(".");k[1]=k[1]?"."+k[1]:"";if(c===b){e=this.triggerHandler("getData"+k[1]+"!",[k[0]]),e===b&&this.length&&(e=d.data(this[0],a),e=f(this[0],a,e));return e===b&&k[1]?this.data(k[0]):e}return this.each(function(){var b=d(this),e=[k[0],c];b.triggerHandler("setData"+k[1]+"!",e),d.data(this,a,c),b.triggerHandler("changeData"+k[1]+"!",e)})},removeData:function(a){return this.each(function(){d.removeData(this,a)})}}),d.extend({queue:function(a,b,c){if(a){b=(b||"fx")+"queue";var e=d._data(a,b);if(!c)return e||[];!e||d.isArray(c)?e=d._data(a,b,d.makeArray(c)):e.push(c);return e}},dequeue:function(a,b){b=b||"fx";var c=d.queue(a,b),e=c.shift();e==="inprogress"&&(e=c.shift()),e&&(b==="fx"&&c.unshift("inprogress"),e.call(a,function(){d.dequeue(a,b)})),c.length||d.removeData(a,b+"queue",!0)}}),d.fn.extend({queue:function(a,c){typeof a!=="string"&&(c=a,a="fx");if(c===b)return d.queue(this[0],a);return this.each(function(b){var e=d.queue(this,a,c);a==="fx"&&e[0]!=="inprogress"&&d.dequeue(this,a)})},dequeue:function(a){return this.each(function(){d.dequeue(this,a)})},delay:function(a,b){a=d.fx?d.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(){var c=this;setTimeout(function(){d.dequeue(c,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var h=/[\n\t\r]/g,i=/\s+/,j=/\r/g,k=/^(?:href|src|style)$/,l=/^(?:button|input)$/i,m=/^(?:button|input|object|select|textarea)$/i,n=/^a(?:rea)?$/i,o=/^(?:radio|checkbox)$/i;d.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"},d.fn.extend({attr:function(a,b){return d.access(this,a,b,!0,d.attr)},removeAttr:function(a,b){return this.each(function(){d.attr(this,a,""),this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.addClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"){var b=(a||"").split(i);for(var c=0,e=this.length;c<e;c++){var f=this[c];if(f.nodeType===1)if(f.className){var g=" "+f.className+" ",h=f.className;for(var j=0,k=b.length;j<k;j++)g.indexOf(" "+b[j]+" ")<0&&(h+=" "+b[j]);f.className=d.trim(h)}else f.className=a}}return this},removeClass:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.removeClass(a.call(this,b,c.attr("class")))});if(a&&typeof a==="string"||a===b){var c=(a||"").split(i);for(var e=0,f=this.length;e<f;e++){var g=this[e];if(g.nodeType===1&&g.className)if(a){var j=(" "+g.className+" ").replace(h," ");for(var k=0,l=c.length;k<l;k++)j=j.replace(" "+c[k]+" "," ");g.className=d.trim(j)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,e=typeof b==="boolean";if(d.isFunction(a))return this.each(function(c){var e=d(this);e.toggleClass(a.call(this,c,e.attr("class"),b),b)});return this.each(function(){if(c==="string"){var f,g=0,h=d(this),j=b,k=a.split(i);while(f=k[g++])j=e?j:!h.hasClass(f),h[j?"addClass":"removeClass"](f)}else if(c==="undefined"||c==="boolean")this.className&&d._data(this,"__className__",this.className),this.className=this.className||a===!1?"":d._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ";for(var c=0,d=this.length;c<d;c++)if((" "+this[c].className+" ").replace(h," ").indexOf(b)>-1)return!0;return!1},val:function(a){if(!arguments.length){var c=this[0];if(c){if(d.nodeName(c,"option")){var e=c.attributes.value;return!e||e.specified?c.value:c.text}if(d.nodeName(c,"select")){var f=c.selectedIndex,g=[],h=c.options,i=c.type==="select-one";if(f<0)return null;for(var k=i?f:0,l=i?f+1:h.length;k<l;k++){var m=h[k];if(m.selected&&(d.support.optDisabled?!m.disabled:m.getAttribute("disabled")===null)&&(!m.parentNode.disabled||!d.nodeName(m.parentNode,"optgroup"))){a=d(m).val();if(i)return a;g.push(a)}}if(i&&!g.length&&h.length)return d(h[f]).val();return g}if(o.test(c.type)&&!d.support.checkOn)return c.getAttribute("value")===null?"on":c.value;return(c.value||"").replace(j,"")}return b}var n=d.isFunction(a);return this.each(function(b){var c=d(this),e=a;if(this.nodeType===1){n&&(e=a.call(this,b,c.val())),e==null?e="":typeof e==="number"?e+="":d.isArray(e)&&(e=d.map(e,function(a){return a==null?"":a+""}));if(d.isArray(e)&&o.test(this.type))this.checked=d.inArray(c.val(),e)>=0;else if(d.nodeName(this,"select")){var f=d.makeArray(e);d("option",this).each(function(){this.selected=d.inArray(d(this).val(),f)>=0}),f.length||(this.selectedIndex=-1)}else this.value=e}})}}),d.extend({attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,e,f){if(!a||a.nodeType===3||a.nodeType===8||a.nodeType===2)return b;if(f&&c in d.attrFn)return d(a)[c](e);var g=a.nodeType!==1||!d.isXMLDoc(a),h=e!==b;c=g&&d.props[c]||c;if(a.nodeType===1){var i=k.test(c);if(c==="selected"&&!d.support.optSelected){var j=a.parentNode;j&&(j.selectedIndex,j.parentNode&&j.parentNode.selectedIndex)}if((c in a||a[c]!==b)&&g&&!i){h&&(c==="type"&&l.test(a.nodeName)&&a.parentNode&&d.error("type property can't be changed"),e===null?a.nodeType===1&&a.removeAttribute(c):a[c]=e);if(d.nodeName(a,"form")&&a.getAttributeNode(c))return a.getAttributeNode(c).nodeValue;if(c==="tabIndex"){var o=a.getAttributeNode("tabIndex");return o&&o.specified?o.value:m.test(a.nodeName)||n.test(a.nodeName)&&a.href?0:b}return a[c]}if(!d.support.style&&g&&c==="style"){h&&(a.style.cssText=""+e);return a.style.cssText}h&&a.setAttribute(c,""+e);if(!a.attributes[c]&&(a.hasAttribute&&!a.hasAttribute(c)))return b;var p=!d.support.hrefNormalized&&g&&i?a.getAttribute(c,2):a.getAttribute(c);return p===null?b:p}h&&(a[c]=e);return a[c]}});var p=/\.(.*)$/,q=/^(?:textarea|input|select)$/i,r=/\./g,s=/ /g,t=/[^\w\s.|`]/g,u=function(a){return a.replace(t,"\\$&")};d.event={add:function(c,e,f,g){if(c.nodeType!==3&&c.nodeType!==8){try{d.isWindow(c)&&(c!==a&&!c.frameElement)&&(c=a)}catch(h){}if(f===!1)f=v;else if(!f)return;var i,j;f.handler&&(i=f,f=i.handler),f.guid||(f.guid=d.guid++);var k=d._data(c);if(!k)return;var l=k.events,m=k.handle;l||(k.events=l={}),m||(k.handle=m=function(){return typeof d!=="undefined"&&!d.event.triggered?d.event.handle.apply(m.elem,arguments):b}),m.elem=c,e=e.split(" ");var n,o=0,p;while(n=e[o++]){j=i?d.extend({},i):{handler:f,data:g},n.indexOf(".")>-1?(p=n.split("."),n=p.shift(),j.namespace=p.slice(0).sort().join(".")):(p=[],j.namespace=""),j.type=n,j.guid||(j.guid=f.guid);var q=l[n],r=d.event.special[n]||{};if(!q){q=l[n]=[];if(!r.setup||r.setup.call(c,g,p,m)===!1)c.addEventListener?c.addEventListener(n,m,!1):c.attachEvent&&c.attachEvent("on"+n,m)}r.add&&(r.add.call(c,j),j.handler.guid||(j.handler.guid=f.guid)),q.push(j),d.event.global[n]=!0}c=null}},global:{},remove:function(a,c,e,f){if(a.nodeType!==3&&a.nodeType!==8){e===!1&&(e=v);var g,h,i,j,k=0,l,m,n,o,p,q,r,s=d.hasData(a)&&d._data(a),t=s&&s.events;if(!s||!t)return;c&&c.type&&(e=c.handler,c=c.type);if(!c||typeof c==="string"&&c.charAt(0)==="."){c=c||"";for(h in t)d.event.remove(a,h+c);return}c=c.split(" ");while(h=c[k++]){r=h,q=null,l=h.indexOf(".")<0,m=[],l||(m=h.split("."),h=m.shift(),n=new RegExp("(^|\\.)"+d.map(m.slice(0).sort(),u).join("\\.(?:.*\\.)?")+"(\\.|$)")),p=t[h];if(!p)continue;if(!e){for(j=0;j<p.length;j++){q=p[j];if(l||n.test(q.namespace))d.event.remove(a,r,q.handler,j),p.splice(j--,1)}continue}o=d.event.special[h]||{};for(j=f||0;j<p.length;j++){q=p[j];if(e.guid===q.guid){if(l||n.test(q.namespace))f==null&&p.splice(j--,1),o.remove&&o.remove.call(a,q);if(f!=null)break}}if(p.length===0||f!=null&&p.length===1)(!o.teardown||o.teardown.call(a,m)===!1)&&d.removeEvent(a,h,s.handle),g=null,delete t[h]}if(d.isEmptyObject(t)){var w=s.handle;w&&(w.elem=null),delete s.events,delete s.handle,d.isEmptyObject(s)&&d.removeData(a,b,!0)}}},trigger:function(a,c,e){var f=a.type||a,g=arguments[3];if(!g){a=typeof a==="object"?a[d.expando]?a:d.extend(d.Event(f),a):d.Event(f),f.indexOf("!")>=0&&(a.type=f=f.slice(0,-1),a.exclusive=!0),e||(a.stopPropagation(),d.event.global[f]&&d.each(d.cache,function(){var b=d.expando,e=this[b];e&&e.events&&e.events[f]&&d.event.trigger(a,c,e.handle.elem)}));if(!e||e.nodeType===3||e.nodeType===8)return b;a.result=b,a.target=e,c=d.makeArray(c),c.unshift(a)}a.currentTarget=e;var h=d._data(e,"handle");h&&h.apply(e,c);var i=e.parentNode||e.ownerDocument;try{e&&e.nodeName&&d.noData[e.nodeName.toLowerCase()]||e["on"+f]&&e["on"+f].apply(e,c)===!1&&(a.result=!1,a.preventDefault())}catch(j){}if(!a.isPropagationStopped()&&i)d.event.trigger(a,c,i,!0);else if(!a.isDefaultPrevented()){var k,l=a.target,m=f.replace(p,""),n=d.nodeName(l,"a")&&m==="click",o=d.event.special[m]||{};if((!o._default||o._default.call(e,a)===!1)&&!n&&!(l&&l.nodeName&&d.noData[l.nodeName.toLowerCase()])){try{l[m]&&(k=l["on"+m],k&&(l["on"+m]=null),d.event.triggered=!0,l[m]())}catch(q){}k&&(l["on"+m]=k),d.event.triggered=!1}}},handle:function(c){var e,f,g,h,i,j=[],k=d.makeArray(arguments);c=k[0]=d.event.fix(c||a.event),c.currentTarget=this,e=c.type.indexOf(".")<0&&!c.exclusive,e||(g=c.type.split("."),c.type=g.shift(),j=g.slice(0).sort(),h=new RegExp("(^|\\.)"+j.join("\\.(?:.*\\.)?")+"(\\.|$)")),c.namespace=c.namespace||j.join("."),i=d._data(this,"events"),f=(i||{})[c.type];if(i&&f){f=f.slice(0);for(var l=0,m=f.length;l<m;l++){var n=f[l];if(e||h.test(n.namespace)){c.handler=n.handler,c.data=n.data,c.handleObj=n;var o=n.handler.apply(this,k);o!==b&&(c.result=o,o===!1&&(c.preventDefault(),c.stopPropagation()));if(c.isImmediatePropagationStopped())break}}}return c.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(a){if(a[d.expando])return a;var e=a;a=d.Event(e);for(var f=this.props.length,g;f;)g=this.props[--f],a[g]=e[g];a.target||(a.target=a.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),!a.relatedTarget&&a.fromElement&&(a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement);if(a.pageX==null&&a.clientX!=null){var h=c.documentElement,i=c.body;a.pageX=a.clientX+(h&&h.scrollLeft||i&&i.scrollLeft||0)-(h&&h.clientLeft||i&&i.clientLeft||0),a.pageY=a.clientY+(h&&h.scrollTop||i&&i.scrollTop||0)-(h&&h.clientTop||i&&i.clientTop||0)}a.which==null&&(a.charCode!=null||a.keyCode!=null)&&(a.which=a.charCode!=null?a.charCode:a.keyCode),!a.metaKey&&a.ctrlKey&&(a.metaKey=a.ctrlKey),!a.which&&a.button!==b&&(a.which=a.button&1?1:a.button&2?3:a.button&4?2:0);return a},guid:1e8,proxy:d.proxy,special:{ready:{setup:d.bindReady,teardown:d.noop},live:{add:function(a){d.event.add(this,F(a.origType,a.selector),d.extend({},a,{handler:E,guid:a.handler.guid}))},remove:function(a){d.event.remove(this,F(a.origType,a.selector),a)}},beforeunload:{setup:function(a,b,c){d.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}}},d.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},d.Event=function(a){if(!this.preventDefault)return new d.Event(a);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?w:v):this.type=a,this.timeStamp=d.now(),this[d.expando]=!0},d.Event.prototype={preventDefault:function(){this.isDefaultPrevented=w;var a=this.originalEvent;a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=w;var a=this.originalEvent;a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=w,this.stopPropagation()},isDefaultPrevented:v,isPropagationStopped:v,isImmediatePropagationStopped:v};var x=function(a){var b=a.relatedTarget;try{if(b!==c&&!b.parentNode)return;while(b&&b!==this)b=b.parentNode;b!==this&&(a.type=a.data,d.event.handle.apply(this,arguments))}catch(e){}},y=function(a){a.type=a.data,d.event.handle.apply(this,arguments)};d.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){d.event.special[a]={setup:function(c){d.event.add(this,b,c&&c.selector?y:x,a)},teardown:function(a){d.event.remove(this,b,a&&a.selector?y:x)}}}),d.support.submitBubbles||(d.event.special.submit={setup:function(a,b){if(this.nodeName&&this.nodeName.toLowerCase()!=="form")d.event.add(this,"click.specialSubmit",function(a){var b=a.target,c=b.type;(c==="submit"||c==="image")&&d(b).closest("form").length&&C("submit",this,arguments)}),d.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,c=b.type;(c==="text"||c==="password")&&d(b).closest("form").length&&a.keyCode===13&&C("submit",this,arguments)});else return!1},teardown:function(a){d.event.remove(this,".specialSubmit")}});if(!d.support.changeBubbles){var z,A=function(a){var b=a.type,c=a.value;b==="radio"||b==="checkbox"?c=a.checked:b==="select-multiple"?c=a.selectedIndex>-1?d.map(a.options,function(a){return a.selected}).join("-"):"":a.nodeName.toLowerCase()==="select"&&(c=a.selectedIndex);return c},B=function B(a){var c=a.target,e,f;if(q.test(c.nodeName)&&!c.readOnly){e=d._data(c,"_change_data"),f=A(c),(a.type!=="focusout"||c.type!=="radio")&&d._data(c,"_change_data",f);if(e===b||f===e)return;if(e!=null||f)a.type="change",a.liveFired=b,d.event.trigger(a,arguments[1],c)}};d.event.special.change={filters:{focusout:B,beforedeactivate:B,click:function(a){var b=a.target,c=b.type;(c==="radio"||c==="checkbox"||b.nodeName.toLowerCase()==="select")&&B.call(this,a)},keydown:function(a){var b=a.target,c=b.type;(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(c==="checkbox"||c==="radio")||c==="select-multiple")&&B.call(this,a)},beforeactivate:function(a){var b=a.target;d._data(b,"_change_data",A(b))}},setup:function(a,b){if(this.type==="file")return!1;for(var c in z)d.event.add(this,c+".specialChange",z[c]);return q.test(this.nodeName)},teardown:function(a){d.event.remove(this,".specialChange");return q.test(this.nodeName)}},z=d.event.special.change.filters,z.focus=z.beforeactivate}c.addEventListener&&d.each({focus:"focusin",blur:"focusout"},function(a,b){function c(a){a=d.event.fix(a),a.type=b;return d.event.handle.call(this,a)}d.event.special[b]={setup:function(){this.addEventListener(a,c,!0)},teardown:function(){this.removeEventListener(a,c,!0)}}}),d.each(["bind","one"],function(a,c){d.fn[c]=function(a,e,f){if(typeof a==="object"){for(var g in a)this[c](g,e,a[g],f);return this}if(d.isFunction(e)||e===!1)f=e,e=b;var h=c==="one"?d.proxy(f,function(a){d(this).unbind(a,h);return f.apply(this,arguments)}):f;if(a==="unload"&&c!=="one")this.one(a,e,f);else for(var i=0,j=this.length;i<j;i++)d.event.add(this[i],a,h,e);return this}}),d.fn.extend({unbind:function(a,b){if(typeof a!=="object"||a.preventDefault)for(var e=0,f=this.length;e<f;e++)d.event.remove(this[e],a,b);else for(var c in a)this.unbind(c,a[c]);return this},delegate:function(a,b,c,d){return this.live(b,c,d,a)},undelegate:function(a,b,c){return arguments.length===0?this.unbind("live"):this.die(b,null,c,a)},trigger:function(a,b){return this.each(function(){d.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){var c=d.Event(a);c.preventDefault(),c.stopPropagation(),d.event.trigger(c,b,this[0]);return c.result}},toggle:function(a){var b=arguments,c=1;while(c<b.length)d.proxy(a,b[c++]);return this.click(d.proxy(a,function(e){var f=(d._data(this,"lastToggle"+a.guid)||0)%c;d._data(this,"lastToggle"+a.guid,f+1),e.preventDefault();return b[f].apply(this,arguments)||!1}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var D={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};d.each(["live","die"],function(a,c){d.fn[c]=function(a,e,f,g){var h,i=0,j,k,l,m=g||this.selector,n=g?this:d(this.context);if(typeof a==="object"&&!a.preventDefault){for(var o in a)n[c](o,e,a[o],m);return this}d.isFunction(e)&&(f=e,e=b),a=(a||"").split(" ");while((h=a[i++])!=null){j=p.exec(h),k="",j&&(k=j[0],h=h.replace(p,""));if(h==="hover"){a.push("mouseenter"+k,"mouseleave"+k);continue}l=h,h==="focus"||h==="blur"?(a.push(D[h]+k),h=h+k):h=(D[h]||h)+k;if(c==="live")for(var q=0,r=n.length;q<r;q++)d.event.add(n[q],"live."+F(h,m),{data:e,selector:m,handler:f,origType:h,origHandler:f,preType:l});else n.unbind("live."+F(h,m),f)}return this}}),d.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),function(a,b){d.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.bind(b,a,c):this.trigger(b)},d.attrFn&&(d.attrFn[b]=!0)}),function(){function u(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}if(i.nodeType===1){f||(i.sizcache=c,i.sizset=g);if(typeof b!=="string"){if(i===b){j=!0;break}}else if(k.filter(b,[i]).length>0){j=i;break}}i=i[a]}d[g]=j}}}function t(a,b,c,d,e,f){for(var g=0,h=d.length;g<h;g++){var i=d[g];if(i){var j=!1;i=i[a];while(i){if(i.sizcache===c){j=d[i.sizset];break}i.nodeType===1&&!f&&(i.sizcache=c,i.sizset=g);if(i.nodeName.toLowerCase()===b){j=i;break}i=i[a]}d[g]=j}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,f=Object.prototype.toString,g=!1,h=!0,i=/\\/g,j=/\W/;[0,0].sort(function(){h=!1;return 0});var k=function(b,d,e,g){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!=="string")return e;var i,j,n,o,q,r,s,t,u=!0,w=k.isXML(d),x=[],y=b;do{a.exec(""),i=a.exec(y);if(i){y=i[3],x.push(i[1]);if(i[2]){o=i[3];break}}}while(i);if(x.length>1&&m.exec(b))if(x.length===2&&l.relative[x[0]])j=v(x[0]+x[1],d);else{j=l.relative[x[0]]?[d]:k(x.shift(),d);while(x.length)b=x.shift(),l.relative[b]&&(b+=x.shift()),j=v(b,j)}else{!g&&x.length>1&&d.nodeType===9&&!w&&l.match.ID.test(x[0])&&!l.match.ID.test(x[x.length-1])&&(q=k.find(x.shift(),d,w),d=q.expr?k.filter(q.expr,q.set)[0]:q.set[0]);if(d){q=g?{expr:x.pop(),set:p(g)}:k.find(x.pop(),x.length===1&&(x[0]==="~"||x[0]==="+")&&d.parentNode?d.parentNode:d,w),j=q.expr?k.filter(q.expr,q.set):q.set,x.length>0?n=p(j):u=!1;while(x.length)r=x.pop(),s=r,l.relative[r]?s=x.pop():r="",s==null&&(s=d),l.relative[r](n,s,w)}else n=x=[]}n||(n=j),n||k.error(r||b);if(f.call(n)==="[object Array]")if(u)if(d&&d.nodeType===1)for(t=0;n[t]!=null;t++)n[t]&&(n[t]===!0||n[t].nodeType===1&&k.contains(d,n[t]))&&e.push(j[t]);else for(t=0;n[t]!=null;t++)n[t]&&n[t].nodeType===1&&e.push(j[t]);else e.push.apply(e,n);else p(n,e);o&&(k(o,h,e,g),k.uniqueSort(e));return e};k.uniqueSort=function(a){if(r){g=h,a.sort(r);if(g)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},k.matches=function(a,b){return k(a,null,null,b)},k.matchesSelector=function(a,b){return k(b,null,null,[a]).length>0},k.find=function(a,b,c){var d;if(!a)return[];for(var e=0,f=l.order.length;e<f;e++){var g,h=l.order[e];if(g=l.leftMatch[h].exec(a)){var j=g[1];g.splice(1,1);if(j.substr(j.length-1)!=="\\"){g[1]=(g[1]||"").replace(i,""),d=l.find[h](g,b,c);if(d!=null){a=a.replace(l.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!=="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},k.filter=function(a,c,d,e){var f,g,h=a,i=[],j=c,m=c&&c[0]&&k.isXML(c[0]);while(a&&c.length){for(var n in l.filter)if((f=l.leftMatch[n].exec(a))!=null&&f[2]){var o,p,q=l.filter[n],r=f[1];g=!1,f.splice(1,1);if(r.substr(r.length-1)==="\\")continue;j===i&&(i=[]);if(l.preFilter[n]){f=l.preFilter[n](f,j,d,i,e,m);if(f){if(f===!0)continue}else g=o=!0}if(f)for(var s=0;(p=j[s])!=null;s++)if(p){o=q(p,f,s,j);var t=e^!!o;d&&o!=null?t?g=!0:j[s]=!1:t&&(i.push(p),g=!0)}if(o!==b){d||(j=i),a=a.replace(l.match[n],"");if(!g)return[];break}}if(a===h)if(g==null)k.error(a);else break;h=a}return j},k.error=function(a){throw"Syntax error, unrecognized expression: "+a};var l=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b==="string",d=c&&!j.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1){}a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&k.filter(b,a,!0)},">":function(a,b){var c,d=typeof b==="string",e=0,f=a.length;if(d&&!j.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&k.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=u;typeof b==="string"&&!j.test(b)&&(b=b.toLowerCase(),d=b,g=t),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(i,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(i,"")},TAG:function(a,b){return a[1].replace(i,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||k.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&k.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(i,"");!f&&l.attrMap[g]&&(a[1]=l.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(i,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=k(b[3],null,null,c);else{var g=k.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(l.match.POS.test(b[0])||l.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!k(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.getAttribute("type")},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||k.getText([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}k.error(e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case"only":case"first":while(d=d.previousSibling)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case"last":while(d=d.nextSibling)if(d.nodeType===1)return!1;return!0;case"nth":var e=b[2],f=b[3];if(e===1&&f===0)return!0;var g=b[0],h=a.parentNode;if(h&&(h.sizcache!==g||!a.nodeIndex)){var i=0;for(d=h.firstChild;d;d=d.nextSibling)d.nodeType===1&&(d.nodeIndex=++i);h.sizcache=g}var j=a.nodeIndex-f;return e===0?j===0:j%e===0&&j/e>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=l.setFilters[e];if(f)return f(a,c,b,d)}}},m=l.match.POS,n=function(a,b){return"\\"+(b-0+1)};for(var o in l.match)l.match[o]=new RegExp(l.match[o].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[o]=new RegExp(/(^(?:.|\r|\n)*?)/.source+l.match[o].source.replace(/\\(\d+)/g,n));var p=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(q){p=function(a,b){var c=0,d=b||[];if(f.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length==="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var r,s;c.documentElement.compareDocumentPosition?r=function(a,b){if(a===b){g=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(r=function(a,b){var c,d,e=[],f=[],h=a.parentNode,i=b.parentNode,j=h;if(a===b){g=!0;return 0}if(h===i)return s(a,b);if(!h)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return s(e[k],f[k]);return k===c?s(a,f[k],-1):s(e[k],b,1)},s=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),k.getText=function(a){var b="",c;for(var d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=k.getText(c.childNodes));return b},function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(l.find.ID=function(a,c,d){if(typeof c.getElementById!=="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(l.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=k,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){k=function(b,e,f,g){e=e||c;if(!g&&!k.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return p(e.getElementsByTagName(b),f);if(h[2]&&l.find.CLASS&&e.getElementsByClassName)return p(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return p([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return p([],f);if(i.id===h[3])return p([i],f)}try{return p(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var m=e,n=e.getAttribute("id"),o=n||d,q=e.parentNode,r=/^\s*[+~]/.test(b);n?o=o.replace(/'/g,"\\$&"):e.setAttribute("id",o),r&&q&&(e=e.parentNode);try{if(!r||q)return p(e.querySelectorAll("[id='"+o+"'] "+b),f)}catch(s){}finally{n||m.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)k[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector,d=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(e){d=!0}b&&(k.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!k.isXML(a))try{if(d||!l.match.PSEUDO.test(c)&&!/!=/.test(c))return b.call(a,c)}catch(e){}return k(c,null,null,[a]).length>0})}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?k.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?k.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:k.contains=function(){return!1},k.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var v=function(a,b){var c,d=[],e="",f=b.nodeType?[b]:b;while(c=l.match.PSEUDO.exec(a))e+=c[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;for(var g=0,h=f.length;g<h;g++)k(a,f[g],d);return k.filter(e,d)};d.find=k,d.expr=k.selectors,d.expr[":"]=d.expr.filters,d.unique=k.uniqueSort,d.text=k.getText,d.isXMLDoc=k.isXML,d.contains=k.contains}();var G=/Until$/,H=/^(?:parents|prevUntil|prevAll)/,I=/,/,J=/^.[^:#\[\.,]*$/,K=Array.prototype.slice,L=d.expr.match.POS,M={children:!0,contents:!0,next:!0,prev:!0};d.fn.extend({find:function(a){var b=this.pushStack("","find",a),c=0;for(var e=0,f=this.length;e<f;e++){c=b.length,d.find(a,this[e],b);if(e>0)for(var g=c;g<b.length;g++)for(var h=0;h<c;h++)if(b[h]===b[g]){b.splice(g--,1);break}}return b},has:function(a){var b=d(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(d.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(O(this,a,!1),"not",a)},filter:function(a){return this.pushStack(O(this,a,!0),"filter",a)},is:function(a){return!!a&&d.filter(a,this).length>0},closest:function(a,b){var c=[],e,f,g=this[0];if(d.isArray(a)){var h,i,j={},k=1;if(g&&a.length){for(e=0,f=a.length;e<f;e++)i=a[e],j[i]||(j[i]=d.expr.match.POS.test(i)?d(i,b||this.context):i);while(g&&g.ownerDocument&&g!==b){for(i in j)h=j[i],(h.jquery?h.index(g)>-1:d(g).is(h))&&c.push({selector:i,elem:g,level:k});g=g.parentNode,k++}}return c}var l=L.test(a)?d(a,b||this.context):null;for(e=0,f=this.length;e<f;e++){g=this[e];while(g){if(l?l.index(g)>-1:d.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b)break}}c=c.length>1?d.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a||typeof a==="string")return d.inArray(this[0],a?d(a):this.parent().children());return d.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==="string"?d(a,b):d.makeArray(a),e=d.merge(this.get(),c);return this.pushStack(N(c[0])||N(e[0])?e:d.unique(e))},andSelf:function(){return this.add(this.prevObject)}}),d.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return d.dir(a,"parentNode")},parentsUntil:function(a,b,c){return d.dir(a,"parentNode",c)},next:function(a){return d.nth(a,2,"nextSibling")},prev:function(a){return d.nth(a,2,"previousSibling")},nextAll:function(a){return d.dir(a,"nextSibling")},prevAll:function(a){return d.dir(a,"previousSibling")},nextUntil:function(a,b,c){return d.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return d.dir(a,"previousSibling",c)},siblings:function(a){return d.sibling(a.parentNode.firstChild,a)},children:function(a){return d.sibling(a.firstChild)},contents:function(a){return d.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:d.makeArray(a.childNodes)}},function(a,b){d.fn[a]=function(c,e){var f=d.map(this,b,c),g=K.call(arguments);G.test(a)||(e=c),e&&typeof e==="string"&&(f=d.filter(e,f)),f=this.length>1&&!M[a]?d.unique(f):f,(this.length>1||I.test(e))&&H.test(a)&&(f=f.reverse());return this.pushStack(f,a,g.join(","))}}),d.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?d.find.matchesSelector(b[0],a)?[b[0]]:[]:d.find.matches(a,b)},dir:function(a,c,e){var f=[],g=a[c];while(g&&g.nodeType!==9&&(e===b||g.nodeType!==1||!d(g).is(e)))g.nodeType===1&&f.push(g),g=g[c];return f},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var P=/ jQuery\d+="(?:\d+|null)"/g,Q=/^\s+/,R=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,S=/<([\w:]+)/,T=/<tbody/i,U=/<|&#?\w+;/,V=/<(?:script|object|embed|option|style)/i,W=/checked\s*(?:[^=]|=\s*.checked.)/i,X={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};X.optgroup=X.option,X.tbody=X.tfoot=X.colgroup=X.caption=X.thead,X.th=X.td,d.support.htmlSerialize||(X._default=[1,"div<div>","</div>"]),d.fn.extend({text:function(a){if(d.isFunction(a))return this.each(function(b){var c=d(this);c.text(a.call(this,b,c.text()))});if(typeof a!=="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return d.text(this)},wrapAll:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapAll(a.call(this,b))});if(this[0]){var b=d(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(d.isFunction(a))return this.each(function(b){d(this).wrapInner(a.call(this,b))});return this.each(function(){var b=d(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){d(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){d.nodeName(this,"body")||d(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=d(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,d(arguments[0]).toArray());return a}},remove:function(a,b){for(var c=0,e;(e=this[c])!=null;c++)if(!a||d.filter(a,[e]).length)!b&&e.nodeType===1&&(d.cleanData(e.getElementsByTagName("*")),d.cleanData([e])),e.parentNode&&e.parentNode.removeChild(e);return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&d.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return d.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(P,""):null;if(typeof a!=="string"||V.test(a)||!d.support.leadingWhitespace&&Q.test(a)||X[(S.exec(a)||["",""])[1].toLowerCase()])d.isFunction(a)?this.each(function(b){var c=d(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);else{a=a.replace(R,"<$1></$2>");try{for(var c=0,e=this.length;c<e;c++)this[c].nodeType===1&&(d.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(f){this.empty().append(a)}}return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(d.isFunction(a))return this.each(function(b){var c=d(this),e=c.html();c.replaceWith(a.call(this,b,e))});typeof a!=="string"&&(a=d(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;d(this).remove(),b?d(b).before(a):d(c).append(a)})}return this.pushStack(d(d.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,e){var f,g,h,i,j=a[0],k=[];if(!d.support.checkClone&&arguments.length===3&&typeof j==="string"&&W.test(j))return this.each(function(){d(this).domManip(a,c,e,!0)});if(d.isFunction(j))return this.each(function(f){var g=d(this);a[0]=j.call(this,f,c?g.html():b),g.domManip(a,c,e)});if(this[0]){i=j&&j.parentNode,d.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?f={fragment:i}:f=d.buildFragment(a,this,k),h=f.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&d.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)e.call(c?Y(this[l],g):this[l],f.cacheable||m>1&&l<n?d.clone(h,!0,!0):h)}k.length&&d.each(k,ba)}return this}}),d.buildFragment=function(a,b,e){var f,g,h,i=b&&b[0]?b[0].ownerDocument||b[0]:c;a.length===1&&typeof a[0]==="string"&&a[0].length<512&&i===c&&a[0].charAt(0)==="<"&&!V.test(a[0])&&(d.support.checkClone||!W.test(a[0]))&&(g=!0,h=d.fragments[a[0]],h&&(h!==1&&(f=h))),f||(f=i.createDocumentFragment(),d.clean(a,i,f,e)),g&&(d.fragments[a[0]]=h?f:1);return{fragment:f,cacheable:g}},d.fragments={},d.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){d.fn[a]=function(c){var e=[],f=d(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&f.length===1){f[b](this[0]);return this}for(var h=0,i=f.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();d(f[h])[b](j),e=e.concat(j)}return this.pushStack(e,a,f.selector)}}),d.extend({clone:function(a,b,c){var e=a.cloneNode(!0),f,g,h;if((!d.support.noCloneEvent||!d.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!d.isXMLDoc(a)){$(a,e),f=_(a),g=_(e);for(h=0;f[h];++h)$(f[h],g[h])}if(b){Z(a,e);if(c){f=_(a),g=_(e);for(h=0;f[h];++h)Z(f[h],g[h])}}return e},clean:function(a,b,e,f){b=b||c,typeof b.createElement==="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var g=[];for(var h=0,i;(i=a[h])!=null;h++){typeof i==="number"&&(i+="");if(!i)continue;if(typeof i!=="string"||U.test(i)){if(typeof i==="string"){i=i.replace(R,"<$1></$2>");var j=(S.exec(i)||["",""])[1].toLowerCase(),k=X[j]||X._default,l=k[0],m=b.createElement("div");m.innerHTML=k[1]+i+k[2];while(l--)m=m.lastChild;if(!d.support.tbody){var n=T.test(i),o=j==="table"&&!n?m.firstChild&&m.firstChild.childNodes:k[1]==="<table>"&&!n?m.childNodes:[];for(var p=o.length-1;p>=0;--p)d.nodeName(o[p],"tbody")&&!o[p].childNodes.length&&o[p].parentNode.removeChild(o[p])}!d.support.leadingWhitespace&&Q.test(i)&&m.insertBefore(b.createTextNode(Q.exec(i)[0]),m.firstChild),i=m.childNodes}}else i=b.createTextNode(i);i.nodeType?g.push(i):g=d.merge(g,i)}if(e)for(h=0;g[h];h++)!f||!d.nodeName(g[h],"script")||g[h].type&&g[h].type.toLowerCase()!=="text/javascript"?(g[h].nodeType===1&&g.splice.apply(g,[h+1,0].concat(d.makeArray(g[h].getElementsByTagName("script")))),e.appendChild(g[h])):f.push(g[h].parentNode?g[h].parentNode.removeChild(g[h]):g[h]);return g},cleanData:function(a){var b,c,e=d.cache,f=d.expando,g=d.event.special,h=d.support.deleteExpando;for(var i=0,j;(j=a[i])!=null;i++){if(j.nodeName&&d.noData[j.nodeName.toLowerCase()])continue;c=j[d.expando];if(c){b=e[c]&&e[c][f];if(b&&b.events){for(var k in b.events)g[k]?d.event.remove(j,k):d.removeEvent(j,k,b.handle);b.handle&&(b.handle.elem=null)}h?delete j[d.expando]:j.removeAttribute&&j.removeAttribute(d.expando),delete e[c]}}}});var bb=/alpha\([^)]*\)/i,bc=/opacity=([^)]*)/,bd=/-([a-z])/ig,be=/([A-Z])/g,bf=/^-?\d+(?:px)?$/i,bg=/^-?\d/,bh={position:"absolute",visibility:"hidden",display:"block"},bi=["Left","Right"],bj=["Top","Bottom"],bk,bl,bm,bn=function(a,b){return b.toUpperCase()};d.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return d.access(this,a,c,!0,function(a,c,e){return e!==b?d.style(a,c,e):d.css(a,c)})},d.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bk(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{zIndex:!0,fontWeight:!0,opacity:!0,zoom:!0,lineHeight:!0},cssProps:{"float":d.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,e,f){if(a&&a.nodeType!==3&&a.nodeType!==8&&a.style){var g,h=d.camelCase(c),i=a.style,j=d.cssHooks[h];c=d.cssProps[h]||h;if(e===b){if(j&&"get"in j&&(g=j.get(a,!1,f))!==b)return g;return i[c]}if(typeof e==="number"&&isNaN(e)||e==null)return;typeof e==="number"&&!d.cssNumber[h]&&(e+="px");if(!j||!("set"in j)||(e=j.set(a,e))!==b)try{i[c]=e}catch(k){}}},css:function(a,c,e){var f,g=d.camelCase(c),h=d.cssHooks[g];c=d.cssProps[g]||g;if(h&&"get"in h&&(f=h.get(a,!0,e))!==b)return f;if(bk)return bk(a,c,g)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]},camelCase:function(a){return a.replace(bd,bn)}}),d.curCSS=d.css,d.each(["height","width"],function(a,b){d.cssHooks[b]={get:function(a,c,e){var f;if(c){a.offsetWidth!==0?f=bo(a,b,e):d.swap(a,bh,function(){f=bo(a,b,e)});if(f<=0){f=bk(a,b,b),f==="0px"&&bm&&(f=bm(a,b,b));if(f!=null)return f===""||f==="auto"?"0px":f}if(f<0||f==null){f=a.style[b];return f===""||f==="auto"?"0px":f}return typeof f==="string"?f:f+"px"}},set:function(a,b){if(!bf.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),d.support.opacity||(d.cssHooks.opacity={get:function(a,b){return bc.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style;c.zoom=1;var e=d.isNaN(b)?"":"alpha(opacity="+b*100+")",f=c.filter||"";c.filter=bb.test(f)?f.replace(bb,e):c.filter+" "+e}}),c.defaultView&&c.defaultView.getComputedStyle&&(bl=function(a,c,e){var f,g,h;e=e.replace(be,"-$1").toLowerCase();if(!(g=a.ownerDocument.defaultView))return b;if(h=g.getComputedStyle(a,null))f=h.getPropertyValue(e),f===""&&!d.contains(a.ownerDocument.documentElement,a)&&(f=d.style(a,e));return f}),c.documentElement.currentStyle&&(bm=function(a,b){var c,d=a.currentStyle&&a.currentStyle[b],e=a.runtimeStyle&&a.runtimeStyle[b],f=a.style;!bf.test(d)&&bg.test(d)&&(c=f.left,e&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":d||0,d=f.pixelLeft+"px",f.left=c,e&&(a.runtimeStyle.left=e));return d===""?"auto":d}),bk=bl||bm,d.expr&&d.expr.filters&&(d.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!d.support.reliableHiddenOffsets&&(a.style.display||d.css(a,"display"))==="none"},d.expr.filters.visible=function(a){return!d.expr.filters.hidden(a)});var bp=/%20/g,bq=/\[\]$/,br=/\r?\n/g,bs=/#.*$/,bt=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bu=/^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bv=/(?:^file|^widget|\-extension):$/,bw=/^(?:GET|HEAD)$/,bx=/^\/\//,by=/\?/,bz=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bA=/^(?:select|textarea)/i,bB=/\s+/,bC=/([?&])_=[^&]*/,bD=/(^|\-)([a-z])/g,bE=function(a,b,c){return b+c.toUpperCase()},bF=/^([\w\+\.\-]+:)\/\/([^\/?#:]*)(?::(\d+))?/,bG=d.fn.load,bH={},bI={},bJ,bK;try{bJ=c.location.href}catch(bL){bJ=c.createElement("a"),bJ.href="",bJ=bJ.href}bK=bF.exec(bJ.toLowerCase()),d.fn.extend({load:function(a,c,e){if(typeof a!=="string"&&bG)return bG.apply(this,arguments);if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var g=a.slice(f,a.length);a=a.slice(0,f)}var h="GET";c&&(d.isFunction(c)?(e=c,c=b):typeof c==="object"&&(c=d.param(c,d.ajaxSettings.traditional),h="POST"));var i=this;d.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?d("<div>").append(c.replace(bz,"")).find(g):c)),e&&i.each(e,[c,b,a])}});return this},serialize:function(){return d.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?d.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bA.test(this.nodeName)||bu.test(this.type))}).map(function(a,b){var c=d(this).val();return c==null?null:d.isArray(c)?d.map(c,function(a,c){return{name:b.name,value:a.replace(br,"\r\n")}}):{name:b.name,value:c.replace(br,"\r\n")}}).get()}}),d.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){d.fn[b]=function(a){return this.bind(b,a)}}),d.each(["get","post"],function(a,c){d[c]=function(a,e,f,g){d.isFunction(e)&&(g=g||f,f=e,e=b);return d.ajax({type:c,url:a,data:e,success:f,dataType:g})}}),d.extend({getScript:function(a,c){return d.get(a,b,c,"script")},getJSON:function(a,b,c){return d.get(a,b,c,"json")},ajaxSetup:function(a,b){b?d.extend(!0,a,d.ajaxSettings,b):(b=a,a=d.extend(!0,d.ajaxSettings,b));for(var c in {context:1,url:1})c in b?a[c]=b[c]:c in d.ajaxSettings&&(a[c]=d.ajaxSettings[c]);return a},ajaxSettings:{url:bJ,isLocal:bv.test(bK[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":"*/*"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":d.parseJSON,"text xml":d.parseXML}},ajaxPrefilter:bM(bH),ajaxTransport:bM(bI),ajax:function(a,c){function v(a,c,l,n){if(r!==2){r=2,p&&clearTimeout(p),o=b,m=n||"",u.readyState=a?4:0;var q,t,v,w=l?bP(e,u,l):b,x,y;if(a>=200&&a<300||a===304){if(e.ifModified){if(x=u.getResponseHeader("Last-Modified"))d.lastModified[k]=x;if(y=u.getResponseHeader("Etag"))d.etag[k]=y}if(a===304)c="notmodified",q=!0;else try{t=bQ(e,w),c="success",q=!0}catch(z){c="parsererror",v=z}}else{v=c;if(!c||a)c="error",a<0&&(a=0)}u.status=a,u.statusText=c,q?h.resolveWith(f,[t,c,u]):h.rejectWith(f,[u,c,v]),u.statusCode(j),j=b,s&&g.trigger("ajax"+(q?"Success":"Error"),[u,e,q?t:v]),i.resolveWith(f,[u,c]),s&&(g.trigger("ajaxComplete",[u,e]),--d.active||d.event.trigger("ajaxStop"))}}typeof a==="object"&&(c=a,a=b),c=c||{};var e=d.ajaxSetup({},c),f=e.context||e,g=f!==e&&(f.nodeType||f instanceof d)?d(f):d.event,h=d.Deferred(),i=d._Deferred(),j=e.statusCode||{},k,l={},m,n,o,p,q,r=0,s,t,u={readyState:0,setRequestHeader:function(a,b){r||(l[a.toLowerCase().replace(bD,bE)]=b);return this},getAllResponseHeaders:function(){return r===2?m:null},getResponseHeader:function(a){var c;if(r===2){if(!n){n={};while(c=bt.exec(m))n[c[1].toLowerCase()]=c[2]}c=n[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){r||(e.mimeType=a);return this},abort:function(a){a=a||"abort",o&&o.abort(a),v(0,a);return this}};h.promise(u),u.success=u.done,u.error=u.fail,u.complete=i.done,u.statusCode=function(a){if(a){var b;if(r<2)for(b in a)j[b]=[j[b],a[b]];else b=a[u.status],u.then(b,b)}return this},e.url=((a||e.url)+"").replace(bs,"").replace(bx,bK[1]+"//"),e.dataTypes=d.trim(e.dataType||"*").toLowerCase().split(bB),e.crossDomain||(q=bF.exec(e.url.toLowerCase()),e.crossDomain=q&&(q[1]!=bK[1]||q[2]!=bK[2]||(q[3]||(q[1]==="http:"?80:443))!=(bK[3]||(bK[1]==="http:"?80:443)))),e.data&&e.processData&&typeof e.data!=="string"&&(e.data=d.param(e.data,e.traditional)),bN(bH,e,c,u);if(r===2)return!1;s=e.global,e.type=e.type.toUpperCase(),e.hasContent=!bw.test(e.type),s&&d.active++===0&&d.event.trigger("ajaxStart");if(!e.hasContent){e.data&&(e.url+=(by.test(e.url)?"&":"?")+e.data),k=e.url;if(e.cache===!1){var w=d.now(),x=e.url.replace(bC,"$1_="+w);e.url=x+(x===e.url?(by.test(e.url)?"&":"?")+"_="+w:"")}}if(e.data&&e.hasContent&&e.contentType!==!1||c.contentType)l["Content-Type"]=e.contentType;e.ifModified&&(k=k||e.url,d.lastModified[k]&&(l["If-Modified-Since"]=d.lastModified[k]),d.etag[k]&&(l["If-None-Match"]=d.etag[k])),l.Accept=e.dataTypes[0]&&e.accepts[e.dataTypes[0]]?e.accepts[e.dataTypes[0]]+(e.dataTypes[0]!=="*"?", */*; q=0.01":""):e.accepts["*"];for(t in e.headers)u.setRequestHeader(t,e.headers[t]);if(e.beforeSend&&(e.beforeSend.call(f,u,e)===!1||r===2)){u.abort();return!1}for(t in {success:1,error:1,complete:1})u[t](e[t]);o=bN(bI,e,c,u);if(o){u.readyState=1,s&&g.trigger("ajaxSend",[u,e]),e.async&&e.timeout>0&&(p=setTimeout(function(){u.abort("timeout")},e.timeout));try{r=1,o.send(l,v)}catch(y){status<2?v(-1,y):d.error(y)}}else v(-1,"No Transport");return u},param:function(a,c){var e=[],f=function(a,b){b=d.isFunction(b)?b():b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=d.ajaxSettings.traditional);if(d.isArray(a)||a.jquery&&!d.isPlainObject(a))d.each(a,function(){f(this.name,this.value)});else for(var g in a)bO(g,a[g],c,f);return e.join("&").replace(bp,"+")}}),d.extend({active:0,lastModified:{},etag:{}});var bR=d.now(),bS=/(\=)\?(&|$)|()\?\?()/i;d.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return d.expando+"_"+bR++}}),d.ajaxPrefilter("json jsonp",function(b,c,e){var f=typeof b.data==="string";if(b.dataTypes[0]==="jsonp"||c.jsonpCallback||c.jsonp!=null||b.jsonp!==!1&&(bS.test(b.url)||f&&bS.test(b.data))){var g,h=b.jsonpCallback=d.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2",m=function(){a[h]=i,g&&d.isFunction(i)&&a[h](g[0])};b.jsonp!==!1&&(j=j.replace(bS,l),b.url===j&&(f&&(k=k.replace(bS,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},e.then(m,m),b.converters["script json"]=function(){g||d.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),d.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){d.globalEval(a);return a}}}),d.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),d.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var bT=d.now(),bU,bV;d.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&bX()||bY()}:bX,bV=d.ajaxSettings.xhr(),d.support.ajax=!!bV,d.support.cors=bV&&"withCredentials"in bV,bV=b,d.support.ajax&&d.ajaxTransport(function(a){if(!a.crossDomain||d.support.cors){var c;return{send:function(e,f){var g=a.xhr(),h,i;a.username?g.open(a.type,a.url,a.async,a.username,a.password):g.open(a.type,a.url,a.async);if(a.xhrFields)for(i in a.xhrFields)g[i]=a.xhrFields[i];a.mimeType&&g.overrideMimeType&&g.overrideMimeType(a.mimeType),(!a.crossDomain||a.hasContent)&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(i in e)g.setRequestHeader(i,e[i])}catch(j){}g.send(a.hasContent&&a.data||null),c=function(e,i){var j,k,l,m,n;try{if(c&&(i||g.readyState===4)){c=b,h&&(g.onreadystatechange=d.noop,delete bU[h]);if(i)g.readyState!==4&&g.abort();else{j=g.status,l=g.getAllResponseHeaders(),m={},n=g.responseXML,n&&n.documentElement&&(m.xml=n),m.text=g.responseText;try{k=g.statusText}catch(o){k=""}j||!a.isLocal||a.crossDomain?j===1223&&(j=204):j=m.text?200:404}}}catch(p){i||f(-1,p)}m&&f(j,k,m,l)},a.async&&g.readyState!==4?(bU||(bU={},bW()),h=bT++,g.onreadystatechange=bU[h]=c):c()},abort:function(){c&&c(0,1)}}}});var bZ={},b$=/^(?:toggle|show|hide)$/,b_=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,ca,cb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];d.fn.extend({show:function(a,b,c){var e,f;if(a||a===0)return this.animate(cc("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)e=this[g],f=e.style.display,!d._data(e,"olddisplay")&&f==="none"&&(f=e.style.display=""),f===""&&d.css(e,"display")==="none"&&d._data(e,"olddisplay",cd(e.nodeName));for(g=0;g<h;g++){e=this[g],f=e.style.display;if(f===""||f==="none")e.style.display=d._data(e,"olddisplay")||""}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cc("hide",3),a,b,c);for(var e=0,f=this.length;e<f;e++){var g=d.css(this[e],"display");g!=="none"&&!d._data(this[e],"olddisplay")&&d._data(this[e],"olddisplay",g)}for(e=0;e<f;e++)this[e].style.display="none";return this},_toggle:d.fn.toggle,toggle:function(a,b,c){var e=typeof a==="boolean";d.isFunction(a)&&d.isFunction(b)?this._toggle.apply(this,arguments):a==null||e?this.each(function(){var b=e?a:d(this).is(":hidden");d(this)[b?"show":"hide"]()}):this.animate(cc("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){var f=d.speed(b,c,e);if(d.isEmptyObject(a))return this.each(f.complete);return this[f.queue===!1?"each":"queue"](function(){var b=d.extend({},f),c,e=this.nodeType===1,g=e&&d(this).is(":hidden"),h=this;for(c in a){var i=d.camelCase(c);c!==i&&(a[i]=a[c],delete a[c],c=i);if(a[c]==="hide"&&g||a[c]==="show"&&!g)return b.complete.call(this);if(e&&(c==="height"||c==="width")){b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY];if(d.css(this,"display")==="inline"&&d.css(this,"float")==="none")if(d.support.inlineBlockNeedsLayout){var j=cd(this.nodeName);j==="inline"?this.style.display="inline-block":(this.style.display="inline",this.style.zoom=1)}else this.style.display="inline-block"}d.isArray(a[c])&&((b.specialEasing=b.specialEasing||{})[c]=a[c][1],a[c]=a[c][0])}b.overflow!=null&&(this.style.overflow="hidden"),b.curAnim=d.extend({},a),d.each(a,function(c,e){var f=new d.fx(h,b,c);if(b$.test(e))f[e==="toggle"?g?"show":"hide":e](a);else{var i=b_.exec(e),j=f.cur();if(i){var k=parseFloat(i[2]),l=i[3]||(d.cssNumber[c]?"":"px");l!=="px"&&(d.style(h,c,(k||1)+l),j=(k||1)/f.cur()*j,d.style(h,c,j+l)),i[1]&&(k=(i[1]==="-="?-1:1)*k+j),f.custom(j,k,l)}else f.custom(j,e,"")}});return!0})},stop:function(a,b){var c=d.timers;a&&this.queue([]),this.each(function(){for(var a=c.length-1;a>=0;a--)c[a].elem===this&&(b&&c[a](!0),c.splice(a,1))}),b||this.dequeue();return this}}),d.each({slideDown:cc("show",1),slideUp:cc("hide",1),slideToggle:cc("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){d.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),d.extend({speed:function(a,b,c){var e=a&&typeof a==="object"?d.extend({},a):{complete:c||!c&&b||d.isFunction(a)&&a,duration:a,easing:c&&b||b&&!d.isFunction(b)&&b};e.duration=d.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in d.fx.speeds?d.fx.speeds[e.duration]:d.fx.speeds._default,e.old=e.complete,e.complete=function(){e.queue!==!1&&d(this).dequeue(),d.isFunction(e.old)&&e.old.call(this)};return e},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig||(b.orig={})}}),d.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(d.fx.step[this.prop]||d.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=d.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,b,c){function g(a){return e.step(a)}var e=this,f=d.fx;this.startTime=d.now(),this.start=a,this.end=b,this.unit=c||this.unit||(d.cssNumber[this.prop]?"":"px"),this.now=this.start,this.pos=this.state=0,g.elem=this.elem,g()&&d.timers.push(g)&&!ca&&(ca=setInterval(f.tick,f.interval))},show:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.show=!0,this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),d(this.elem).show()},hide:function(){this.options.orig[this.prop]=d.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b=d.now(),c=!0;if(a||b>=this.options.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),this.options.curAnim[this.prop]=!0;for(var e in this.options.curAnim)this.options.curAnim[e]!==!0&&(c=!1);if(c){if(this.options.overflow!=null&&!d.support.shrinkWrapBlocks){var f=this.elem,g=this.options;d.each(["","X","Y"],function(a,b){f.style["overflow"+b]=g.overflow[a]})}this.options.hide&&d(this.elem).hide();if(this.options.hide||this.options.show)for(var h in this.options.curAnim)d.style(this.elem,h,this.options.orig[h]);this.options.complete.call(this.elem)}return!1}var i=b-this.startTime;this.state=i/this.options.duration;var j=this.options.specialEasing&&this.options.specialEasing[this.prop],k=this.options.easing||(d.easing.swing?"swing":"linear");this.pos=d.easing[j||k](this.state,i,0,1,this.options.duration),this.now=this.start+(this.end-this.start)*this.pos,this.update();return!0}},d.extend(d.fx,{tick:function(){var a=d.timers;for(var b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||d.fx.stop()},interval:13,stop:function(){clearInterval(ca),ca=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){d.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit:a.elem[a.prop]=a.now}}}),d.expr&&d.expr.filters&&(d.expr.filters.animated=function(a){return d.grep(d.timers,function(b){return a===b.elem}).length});var ce=/^t(?:able|d|h)$/i,cf=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?d.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(e){}var f=b.ownerDocument,g=f.documentElement;if(!c||!d.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=f.body,i=cg(f),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||d.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||d.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:d.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){d.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return d.offset.bodyOffset(b);d.offset.initialize();var c,e=b.offsetParent,f=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(d.offset.supportsFixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===e&&(l+=b.offsetTop,m+=b.offsetLeft,d.offset.doesNotAddBorder&&(!d.offset.doesAddBorderForTableAndCells||!ce.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),f=e,e=b.offsetParent),d.offset.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;d.offset.supportsFixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},d.offset={initialize:function(){var a=c.body,b=c.createElement("div"),e,f,g,h,i=parseFloat(d.css(a,"marginTop"))||0,j="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";d.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"}),b.innerHTML=j,a.insertBefore(b,a.firstChild),e=b.firstChild,f=e.firstChild,h=e.nextSibling.firstChild.firstChild,this.doesNotAddBorder=f.offsetTop!==5,this.doesAddBorderForTableAndCells=h.offsetTop===5,f.style.position="fixed",f.style.top="20px",this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15,f.style.position=f.style.top="",e.style.overflow="hidden",e.style.position="relative",this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5,this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==i,a.removeChild(b),a=b=e=f=g=h=null,d.offset.initialize=d.noop},bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;d.offset.initialize(),d.offset.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(d.css(a,"marginTop"))||0,c+=parseFloat(d.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var e=d.css(a,"position");e==="static"&&(a.style.position="relative");var f=d(a),g=f.offset(),h=d.css(a,"top"),i=d.css(a,"left"),j=e==="absolute"&&d.inArray("auto",[h,i])>-1,k={},l={},m,n;j&&(l=f.position()),m=j?l.top:parseInt(h,10)||0,n=j?l.left:parseInt(i,10)||0,d.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):f.css(k)}},d.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),e=cf.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(d.css(a,"marginTop"))||0,c.left-=parseFloat(d.css(a,"marginLeft"))||0,e.top+=parseFloat(d.css(b[0],"borderTopWidth"))||0,e.left+=parseFloat(d.css(b[0],"borderLeftWidth"))||0;return{top:c.top-e.top,left:c.left-e.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&(!cf.test(a.nodeName)&&d.css(a,"position")==="static"))a=a.offsetParent;return a})}}),d.each(["Left","Top"],function(a,c){var e="scroll"+c;d.fn[e]=function(c){var f=this[0],g;if(!f)return null;if(c!==b)return this.each(function(){g=cg(this),g?g.scrollTo(a?d(g).scrollLeft():c,a?c:d(g).scrollTop()):this[e]=c});g=cg(f);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:d.support.boxModel&&g.document.documentElement[e]||g.document.body[e]:f[e]}}),d.each(["Height","Width"],function(a,c){var e=c.toLowerCase();d.fn["inner"+c]=function(){return this[0]?parseFloat(d.css(this[0],e,"padding")):null},d.fn["outer"+c]=function(a){return this[0]?parseFloat(d.css(this[0],e,a?"margin":"border")):null},d.fn[e]=function(a){var f=this[0];if(!f)return a==null?null:this;if(d.isFunction(a))return this.each(function(b){var c=d(this);c[e](a.call(this,b,c[e]()))});if(d.isWindow(f)){var g=f.document.documentElement["client"+c];return f.document.compatMode==="CSS1Compat"&&g||f.document.body["client"+c]||g}if(f.nodeType===9)return Math.max(f.documentElement["client"+c],f.body["scroll"+c],f.documentElement["scroll"+c],f.body["offset"+c],f.documentElement["offset"+c]);if(a===b){var h=d.css(f,e),i=parseFloat(h);return d.isNaN(i)?h:i}return this.css(e,typeof a==="string"?a:a+"px")}}),a.jQuery=a.$=d})(window);

/**
 * @version: 1.0 Alpha-1
 * @author: Coolite Inc. http://www.coolite.com/
 * @date: 2008-05-13
 * @copyright: Copyright (c) 2006-2008, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * @license: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * @website: http://www.datejs.com/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|aft(er)?|from|hence)/i,subtract:/^(\-|bef(ore)?|ago)/i,yesterday:/^yes(terday)?/i,today:/^t(od(ay)?)?/i,tomorrow:/^tom(orrow)?/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^mn|min(ute)?s?/i,hour:/^h(our)?s?/i,week:/^w(eek)?s?/i,month:/^m(onth)?s?/i,day:/^d(ay)?s?/i,year:/^y(ear)?s?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a(?!u|p)|p)/i},timezones:[{name:"UTC",offset:"-000"},{name:"GMT",offset:"-000"},{name:"EST",offset:"-0500"},{name:"EDT",offset:"-0400"},{name:"CST",offset:"-0600"},{name:"CDT",offset:"-0500"},{name:"MST",offset:"-0700"},{name:"MDT",offset:"-0600"},{name:"PST",offset:"-0800"},{name:"PDT",offset:"-0700"}]};
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,p=function(s,l){if(!l){l=2;}
return("000"+s).slice(l*-1);};$P.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};$P.setTimeToNow=function(){var n=new Date();this.setHours(n.getHours());this.setMinutes(n.getMinutes());this.setSeconds(n.getSeconds());this.setMilliseconds(n.getMilliseconds());return this;};$D.today=function(){return new Date().clearTime();};$D.compare=function(date1,date2){if(isNaN(date1)||isNaN(date2)){throw new Error(date1+" - "+date2);}else if(date1 instanceof Date&&date2 instanceof Date){return(date1<date2)?-1:(date1>date2)?1:0;}else{throw new TypeError(date1+" - "+date2);}};$D.equals=function(date1,date2){return(date1.compareTo(date2)===0);};$D.getDayNumberFromName=function(name){var n=$C.dayNames,m=$C.abbreviatedDayNames,o=$C.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s||o[i].toLowerCase()==s){return i;}}
return-1;};$D.getMonthNumberFromName=function(name){var n=$C.monthNames,m=$C.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};$D.isLeapYear=function(year){return((year%4===0&&year%100!==0)||year%400===0);};$D.getDaysInMonth=function(year,month){return[31,($D.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};$D.getTimezoneAbbreviation=function(offset){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].offset===offset){return z[i].name;}}
return null;};$D.getTimezoneOffset=function(name){var z=$C.timezones,p;for(var i=0;i<z.length;i++){if(z[i].name===name.toUpperCase()){return z[i].offset;}}
return null;};$P.clone=function(){return new Date(this.getTime());};$P.compareTo=function(date){return Date.compare(this,date);};$P.equals=function(date){return Date.equals(this,date||new Date());};$P.between=function(start,end){return this.getTime()>=start.getTime()&&this.getTime()<=end.getTime();};$P.isAfter=function(date){return this.compareTo(date||new Date())===1;};$P.isBefore=function(date){return(this.compareTo(date||new Date())===-1);};$P.isToday=function(){return this.isSameDay(new Date());};$P.isSameDay=function(date){return this.clone().clearTime().equals(date.clone().clearTime());};$P.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};$P.addSeconds=function(value){return this.addMilliseconds(value*1000);};$P.addMinutes=function(value){return this.addMilliseconds(value*60000);};$P.addHours=function(value){return this.addMilliseconds(value*3600000);};$P.addDays=function(value){this.setDate(this.getDate()+value);return this;};$P.addWeeks=function(value){return this.addDays(value*7);};$P.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,$D.getDaysInMonth(this.getFullYear(),this.getMonth())));return this;};$P.addYears=function(value){return this.addMonths(value*12);};$P.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.milliseconds){this.addMilliseconds(x.milliseconds);}
if(x.seconds){this.addSeconds(x.seconds);}
if(x.minutes){this.addMinutes(x.minutes);}
if(x.hours){this.addHours(x.hours);}
if(x.weeks){this.addWeeks(x.weeks);}
if(x.months){this.addMonths(x.months);}
if(x.years){this.addYears(x.years);}
if(x.days){this.addDays(x.days);}
return this;};var $y,$m,$d;$P.getWeek=function(){var a,b,c,d,e,f,g,n,s,w;$y=(!$y)?this.getFullYear():$y;$m=(!$m)?this.getMonth()+1:$m;$d=(!$d)?this.getDate():$d;if($m<=2){a=$y-1;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=0;f=$d-1+(31*($m-1));}else{a=$y;b=(a/4|0)-(a/100|0)+(a/400|0);c=((a-1)/4|0)-((a-1)/100|0)+((a-1)/400|0);s=b-c;e=s+1;f=$d+((153*($m-3)+2)/5)+58+s;}
g=(a+b)%7;d=(f+g-e)%7;n=(f+3-d)|0;if(n<0){w=53-((g-s)/5|0);}else if(n>364+s){w=1;}else{w=(n/7|0)+1;}
$y=$m=$d=null;return w;};$P.getISOWeek=function(){$y=this.getUTCFullYear();$m=this.getUTCMonth()+1;$d=this.getUTCDate();return p(this.getWeek());};$P.setWeek=function(n){return this.moveToDayOfWeek(1).addWeeks(n-this.getWeek());};$D._validate=function(n,min,max,name){if(typeof n=="undefined"){return false;}else if(typeof n!="number"){throw new TypeError(n+" is not a Number.");}else if(n<min||n>max){throw new RangeError(n+" is not a valid value for "+name+".");}
return true;};$D.validateMillisecond=function(value){return $D._validate(value,0,999,"millisecond");};$D.validateSecond=function(value){return $D._validate(value,0,59,"second");};$D.validateMinute=function(value){return $D._validate(value,0,59,"minute");};$D.validateHour=function(value){return $D._validate(value,0,23,"hour");};$D.validateDay=function(value,year,month){return $D._validate(value,1,$D.getDaysInMonth(year,month),"day");};$D.validateMonth=function(value){return $D._validate(value,0,11,"month");};$D.validateYear=function(value){return $D._validate(value,0,9999,"year");};$P.set=function(config){if($D.validateMillisecond(config.millisecond)){this.addMilliseconds(config.millisecond-this.getMilliseconds());}
if($D.validateSecond(config.second)){this.addSeconds(config.second-this.getSeconds());}
if($D.validateMinute(config.minute)){this.addMinutes(config.minute-this.getMinutes());}
if($D.validateHour(config.hour)){this.addHours(config.hour-this.getHours());}
if($D.validateMonth(config.month)){this.addMonths(config.month-this.getMonth());}
if($D.validateYear(config.year)){this.addYears(config.year-this.getFullYear());}
if($D.validateDay(config.day,this.getFullYear(),this.getMonth())){this.addDays(config.day-this.getDate());}
if(config.timezone){this.setTimezone(config.timezone);}
if(config.timezoneOffset){this.setTimezoneOffset(config.timezoneOffset);}
if(config.week&&$D._validate(config.week,0,53,"week")){this.setWeek(config.week);}
return this;};$P.moveToFirstDayOfMonth=function(){return this.set({day:1});};$P.moveToLastDayOfMonth=function(){return this.set({day:$D.getDaysInMonth(this.getFullYear(),this.getMonth())});};$P.moveToNthOccurrence=function(dayOfWeek,occurrence){var shift=0;if(occurrence>0){shift=occurrence-1;}
else if(occurrence===-1){this.moveToLastDayOfMonth();if(this.getDay()!==dayOfWeek){this.moveToDayOfWeek(dayOfWeek,-1);}
return this;}
return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(dayOfWeek,+1).addWeeks(shift);};$P.moveToDayOfWeek=function(dayOfWeek,orient){var diff=(dayOfWeek-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};$P.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};$P.getOrdinalNumber=function(){return Math.ceil((this.clone().clearTime()-new Date(this.getFullYear(),0,1))/86400000)+1;};$P.getTimezone=function(){return $D.getTimezoneAbbreviation(this.getUTCOffset());};$P.setTimezoneOffset=function(offset){var here=this.getTimezoneOffset(),there=Number(offset)*-6/10;return this.addMinutes(there-here);};$P.setTimezone=function(offset){return this.setTimezoneOffset($D.getTimezoneOffset(offset));};$P.hasDaylightSavingTime=function(){return(Date.today().set({month:0,day:1}).getTimezoneOffset()!==Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.isDaylightSavingTime=function(){return(this.hasDaylightSavingTime()&&new Date().getTimezoneOffset()===Date.today().set({month:6,day:1}).getTimezoneOffset());};$P.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r.charAt(0)+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};$P.getElapsed=function(date){return(date||new Date())-this;};if(!$P.toISOString){$P.toISOString=function(){function f(n){return n<10?'0'+n:n;}
return'"'+this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z"';};}
$P._toString=$P.toString;$P.toString=function(format){var x=this;if(format&&format.length==1){var c=$C.formatPatterns;x.t=x.toString;switch(format){case"d":return x.t(c.shortDate);case"D":return x.t(c.longDate);case"F":return x.t(c.fullDateTime);case"m":return x.t(c.monthDay);case"r":return x.t(c.rfc1123);case"s":return x.t(c.sortableDateTime);case"t":return x.t(c.shortTime);case"T":return x.t(c.longTime);case"u":return x.t(c.universalSortableDateTime);case"y":return x.t(c.yearMonth);}}
var ord=function(n){switch(n*1){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};return format?format.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g,function(m){if(m.charAt(0)==="\\"){return m.replace("\\","");}
x.h=x.getHours;switch(m){case"hh":return p(x.h()<13?(x.h()===0?12:x.h()):(x.h()-12));case"h":return x.h()<13?(x.h()===0?12:x.h()):(x.h()-12);case"HH":return p(x.h());case"H":return x.h();case"mm":return p(x.getMinutes());case"m":return x.getMinutes();case"ss":return p(x.getSeconds());case"s":return x.getSeconds();case"yyyy":return p(x.getFullYear(),4);case"yy":return p(x.getFullYear());case"dddd":return $C.dayNames[x.getDay()];case"ddd":return $C.abbreviatedDayNames[x.getDay()];case"dd":return p(x.getDate());case"d":return x.getDate();case"MMMM":return $C.monthNames[x.getMonth()];case"MMM":return $C.abbreviatedMonthNames[x.getMonth()];case"MM":return p((x.getMonth()+1));case"M":return x.getMonth()+1;case"t":return x.h()<12?$C.amDesignator.substring(0,1):$C.pmDesignator.substring(0,1);case"tt":return x.h()<12?$C.amDesignator:$C.pmDesignator;case"S":return ord(x.getDate());default:return m;}}):this._toString();};}());
(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo,$N=Number.prototype;$P._orient=+1;$P._nth=null;$P._is=false;$P._same=false;$P._isSecond=false;$N._dateElement="day";$P.next=function(){this._orient=+1;return this;};$D.next=function(){return $D.today().next();};$P.last=$P.prev=$P.previous=function(){this._orient=-1;return this;};$D.last=$D.prev=$D.previous=function(){return $D.today().last();};$P.is=function(){this._is=true;return this;};$P.same=function(){this._same=true;this._isSecond=false;return this;};$P.today=function(){return this.same().day();};$P.weekday=function(){if(this._is){this._is=false;return(!this.is().sat()&&!this.is().sun());}
return false;};$P.at=function(time){return(typeof time==="string")?$D.parse(this.toString("d")+" "+time):this.set(time);};$N.fromNow=$N.after=function(date){var c={};c[this._dateElement]=this;return((!date)?new Date():date.clone()).add(c);};$N.ago=$N.before=function(date){var c={};c[this._dateElement]=this*-1;return((!date)?new Date():date.clone()).add(c);};var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),pxf=("Milliseconds Seconds Minutes Hours Date Week Month FullYear").split(/\s/),nth=("final first second third fourth fifth").split(/\s/),de;$P.toObject=function(){var o={};for(var i=0;i<px.length;i++){o[px[i].toLowerCase()]=this["get"+pxf[i]]();}
return o;};$D.fromObject=function(config){config.week=null;return Date.today().set(config);};var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
if(this._nth!==null){if(this._isSecond){this.addSeconds(this._orient*-1);}
this._isSecond=false;var ntemp=this._nth;this._nth=null;var temp=this.clone().moveToLastDayOfMonth();this.moveToNthOccurrence(n,ntemp);if(this>temp){throw new RangeError($D.getDayName(n)+" does not occur "+ntemp+" times in the month of "+$D.getMonthName(temp.getMonth())+" "+temp.getFullYear()+".");}
return this;}
return this.moveToDayOfWeek(n,this._orient);};};var sdf=function(n){return function(){var t=$D.today(),shift=n-t.getDay();if(n===0&&$C.firstDayOfWeek===1&&t.getDay()!==0){shift=shift+7;}
return t.addDays(shift);};};for(var i=0;i<dx.length;i++){$D[dx[i].toUpperCase()]=$D[dx[i].toUpperCase().substring(0,3)]=i;$D[dx[i]]=$D[dx[i].substring(0,3)]=sdf(i);$P[dx[i]]=$P[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};var smf=function(n){return function(){return $D.today().set({month:n,day:1});};};for(var j=0;j<mx.length;j++){$D[mx[j].toUpperCase()]=$D[mx[j].toUpperCase().substring(0,3)]=j;$D[mx[j]]=$D[mx[j].substring(0,3)]=smf(j);$P[mx[j]]=$P[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(this._isSecond){this._isSecond=false;return this;}
if(this._same){this._same=this._is=false;var o1=this.toObject(),o2=(arguments[0]||new Date()).toObject(),v="",k=j.toLowerCase();for(var m=(px.length-1);m>-1;m--){v=px[m].toLowerCase();if(o1[v]!=o2[v]){return false;}
if(k==v){break;}}
return true;}
if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$P[de]=$P[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}
$P._ss=ef("Second");var nthfn=function(n){return function(dayOfWeek){if(this._same){return this._ss(arguments[0]);}
if(dayOfWeek||dayOfWeek===0){return this.moveToNthOccurrence(dayOfWeek,n);}
this._nth=n;if(n===2&&(dayOfWeek===undefined||dayOfWeek===null)){this._isSecond=true;return this.addSeconds(this._orient);}
return this;};};for(var l=0;l<nth.length;l++){$P[nth[l]]=(l===0)?nthfn(-1):nthfn(l);}}());
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var $D=Date,$P=$D.prototype,$C=$D.CultureInfo;var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};$D.Grammar={};$D.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=(s.length==3)?"jan feb mar apr may jun jul aug sep oct nov dec".indexOf(s)/4:Number(s)-1;};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<$C.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
var now=new Date();if((this.hour||this.minute)&&(!this.month&&!this.year&&!this.day)){this.day=now.getDate();}
if(!this.year){this.year=now.getFullYear();}
if(!this.month&&this.month!==0){this.month=now.getMonth();}
if(!this.day){this.day=1;}
if(!this.hour){this.hour=0;}
if(!this.minute){this.minute=0;}
if(!this.second){this.second=0;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.day>$D.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
var today=$D.today();if(this.now&&!this.unit&&!this.operator){return new Date();}else if(this.now){today=new Date();}
var expression=!!(this.days&&this.days!==null||this.orient||this.operator);var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(!this.now&&"hour minute second".indexOf(this.unit)!=-1){today.setTimeToNow();}
if(this.month||this.month===0){if("year day hour minute second".indexOf(this.unit)!=-1){this.value=this.month+1;this.month=null;expression=true;}}
if(!expression&&this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(!this.month){this.month=temp.getMonth();}
this.year=temp.getFullYear();}
if(expression&&this.weekday&&this.unit!="month"){this.unit="day";gap=($D.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month&&this.unit=="day"&&this.operator){this.value=(this.month+1);this.month=null;}
if(this.value!=null&&this.month!=null&&this.year!=null){this.day=this.value*1;}
if(this.month&&!this.day&&this.value){today.set({day:this.value*1});if(!expression){this.day=this.value*1;}}
if(!this.month&&this.value&&this.unit=="month"&&!this.now){this.month=this.value;expression=true;}
if(expression&&(this.month||this.month===0)&&this.unit!="year"){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(!this.value&&this.operator&&this.operator!==null&&this[this.unit+"s"]&&this[this.unit+"s"]!==null){this[this.unit+"s"]=this[this.unit+"s"]+((this.operator=="add")?1:-1)+(this.value||0)*orient;}else if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
this[this.unit+"s"]=this.value*orient;}
if(this.meridian&&this.hour){if(this.meridian=="p"&&this.hour<12){this.hour=this.hour+12;}else if(this.meridian=="a"&&this.hour==12){this.hour=0;}}
if(this.weekday&&!this.day&&!this.days){var temp=Date[this.weekday]();this.day=temp.getDate();if(temp.getMonth()!==today.getMonth()){this.month=temp.getMonth();}}
if((this.month||this.month===0)&&!this.day){this.day=1;}
if(!this.orient&&!this.operator&&this.unit=="week"&&this.value&&!this.day&&!this.month){return Date.today().setWeek(this.value);}
if(expression&&this.timezone&&this.day&&this.days){this.day=this.days;}
return(expression)?today.add(this):today.set(this);}};var _=$D.Parsing.Operators,g=$D.Grammar,t=$D.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|@|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=$C.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken($C.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.m,g.s],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("second minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[$C.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw $D.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["\"yyyy-MM-ddTHH:mm:ssZ\"","yyyy-MM-ddTHH:mm:ssZ","yyyy-MM-ddTHH:mm:ssz","yyyy-MM-ddTHH:mm:ss","yyyy-MM-ddTHH:mmZ","yyyy-MM-ddTHH:mmz","yyyy-MM-ddTHH:mm","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","MMddyyyy","ddMMyyyy","Mddyyyy","ddMyyyy","Mdyyyy","dMyyyy","yyyy","Mdyy","dMyy","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};$D._parse=$D.parse;$D.parse=function(s){var r=null;if(!s){return null;}
if(s instanceof Date){return s;}
try{r=$D.Grammar.start.call({},s.replace(/^\s*(\S*(\s+\S+)*)\s*$/,"$1"));}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};$D.getParseFunction=function(fx){var fn=$D.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};$D.parseExact=function(s,fx){return $D.getParseFunction(fx)(s);};}());

//     Underscore.js 1.2.3
//     (c) 2009-2011 Jeremy Ashkenas, DocumentCloud Inc.
//     Underscore is freely distributable under the MIT license.
//     Portions of Underscore are inspired or borrowed from Prototype,
//     Oliver Steele's Functional, and John Resig's Micro-Templating.
//     For all details and documentation:
//     http://documentcloud.github.com/underscore

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `global` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Establish the object that gets returned to break out of a loop iteration.
  var breaker = {};

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var slice            = ArrayProto.slice,
      concat           = ArrayProto.concat,
      unshift          = ArrayProto.unshift,
      toString         = ObjProto.toString,
      hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeForEach      = ArrayProto.forEach,
    nativeMap          = ArrayProto.map,
    nativeReduce       = ArrayProto.reduce,
    nativeReduceRight  = ArrayProto.reduceRight,
    nativeFilter       = ArrayProto.filter,
    nativeEvery        = ArrayProto.every,
    nativeSome         = ArrayProto.some,
    nativeIndexOf      = ArrayProto.indexOf,
    nativeLastIndexOf  = ArrayProto.lastIndexOf,
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind;

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) { return new wrapper(obj); };

  // Export the Underscore object for **Node.js** and **"CommonJS"**, with
  // backwards-compatibility for the old `require()` API. If we're not in
  // CommonJS, add `_` to the global object.
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else if (typeof define === 'function' && define.amd) {
    // Register as a named module with AMD.
    define('underscore', function() {
      return _;
    });
  } else {
    // Exported as a string, for Closure Compiler "advanced" mode.
    root['_'] = _;
  }

  // Current version.
  _.VERSION = '1.2.3';

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles objects with the built-in `forEach`, arrays, and raw objects.
  // Delegates to **ECMAScript 5**'s native `forEach` if available.
  var each = _.each = _.forEach = function(obj, iterator, context) {
    if (obj == null) return;
    if (nativeForEach && obj.forEach === nativeForEach) {
      obj.forEach(iterator, context);
    } else if (obj.length === +obj.length) {
      for (var i = 0, l = obj.length; i < l; i++) {
        if (i in obj && iterator.call(context, obj[i], i, obj) === breaker) return;
      }
    } else {
      for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
          if (iterator.call(context, obj[key], key, obj) === breaker) return;
        }
      }
    }
  };

  // Return the results of applying the iterator to each element.
  // Delegates to **ECMAScript 5**'s native `map` if available.
  _.map = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeMap && obj.map === nativeMap) return obj.map(iterator, context);
    each(obj, function(value, index, list) {
      results[results.length] = iterator.call(context, value, index, list);
    });
    return results;
  };

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`. Delegates to **ECMAScript 5**'s native `reduce` if available.
  _.reduce = _.foldl = _.inject = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduce && obj.reduce === nativeReduce) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
    }
    each(obj, function(value, index, list) {
      if (!initial) {
        memo = value;
        initial = true;
      } else {
        memo = iterator.call(context, memo, value, index, list);
      }
    });
    if (!initial) throw new TypeError('Reduce of empty array with no initial value');
    return memo;
  };

  // The right-associative version of reduce, also known as `foldr`.
  // Delegates to **ECMAScript 5**'s native `reduceRight` if available.
  _.reduceRight = _.foldr = function(obj, iterator, memo, context) {
    var initial = arguments.length > 2;
    if (obj == null) obj = [];
    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
      if (context) iterator = _.bind(iterator, context);
      return initial ? obj.reduceRight(iterator, memo) : obj.reduceRight(iterator);
    }
    var reversed = _.toArray(obj).reverse();
    if (context && !initial) iterator = _.bind(iterator, context);
    return initial ? _.reduce(reversed, iterator, memo, context) : _.reduce(reversed, iterator);
  };

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, iterator, context) {
    var result;
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
        result = value;
        return true;
      }
    });
    return result;
  };

  // Return all the elements that pass a truth test.
  // Delegates to **ECMAScript 5**'s native `filter` if available.
  // Aliased as `select`.
  _.filter = _.select = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    if (nativeFilter && obj.filter === nativeFilter) return obj.filter(iterator, context);
    each(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, iterator, context) {
    var results = [];
    if (obj == null) return results;
    each(obj, function(value, index, list) {
      if (!iterator.call(context, value, index, list)) results[results.length] = value;
    });
    return results;
  };

  // Determine whether all of the elements match a truth test.
  // Delegates to **ECMAScript 5**'s native `every` if available.
  // Aliased as `all`.
  _.every = _.all = function(obj, iterator, context) {
    var result = true;
    if (obj == null) return result;
    if (nativeEvery && obj.every === nativeEvery) return obj.every(iterator, context);
    each(obj, function(value, index, list) {
      if (!(result = result && iterator.call(context, value, index, list))) return breaker;
    });
    return result;
  };

  // Determine if at least one element in the object matches a truth test.
  // Delegates to **ECMAScript 5**'s native `some` if available.
  // Aliased as `any`.
  var any = _.some = _.any = function(obj, iterator, context) {
    iterator || (iterator = _.identity);
    var result = false;
    if (obj == null) return result;
    if (nativeSome && obj.some === nativeSome) return obj.some(iterator, context);
    each(obj, function(value, index, list) {
      if (result || (result = iterator.call(context, value, index, list))) return breaker;
    });
    return !!result;
  };

  // Determine if a given value is included in the array or object using `===`.
  // Aliased as `contains`.
  _.include = _.contains = function(obj, target) {
    var found = false;
    if (obj == null) return found;
    if (nativeIndexOf && obj.indexOf === nativeIndexOf) return obj.indexOf(target) != -1;
    found = any(obj, function(value) {
      return value === target;
    });
    return found;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    return _.map(obj, function(value) {
      return (method.call ? method || value : value[method]).apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, function(value){ return value[key]; });
  };

  // Return the maximum element or (element-based computation).
  _.max = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.max.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return -Infinity;
    var result = {computed : -Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed >= result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iterator, context) {
    if (!iterator && _.isArray(obj)) return Math.min.apply(Math, obj);
    if (!iterator && _.isEmpty(obj)) return Infinity;
    var result = {computed : Infinity};
    each(obj, function(value, index, list) {
      var computed = iterator ? iterator.call(context, value, index, list) : value;
      computed < result.computed && (result = {value : value, computed : computed});
    });
    return result.value;
  };

  // Shuffle an array.
  _.shuffle = function(obj) {
    var shuffled = [], rand;
    each(obj, function(value, index, list) {
      if (index == 0) {
        shuffled[0] = value;
      } else {
        rand = Math.floor(Math.random() * (index + 1));
        shuffled[index] = shuffled[rand];
        shuffled[rand] = value;
      }
    });
    return shuffled;
  };

  // Sort the object's values by a criterion produced by an iterator.
  _.sortBy = function(obj, iterator, context) {
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value : value,
        criteria : iterator.call(context, value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria, b = right.criteria;
      return a < b ? -1 : a > b ? 1 : 0;
    }), 'value');
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = function(obj, val) {
    var result = {};
    var iterator = _.isFunction(val) ? val : function(obj) { return obj[val]; };
    each(obj, function(value, index) {
      var key = iterator(value, index);
      (result[key] || (result[key] = [])).push(value);
    });
    return result;
  };

  // Use a comparator function to figure out at what index an object should
  // be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iterator) {
    iterator || (iterator = _.identity);
    var low = 0, high = array.length;
    while (low < high) {
      var mid = (low + high) >> 1;
      iterator(array[mid]) < iterator(obj) ? low = mid + 1 : high = mid;
    }
    return low;
  };

  // Safely convert anything iterable into a real, live array.
  _.toArray = function(iterable) {
    if (!iterable)                return [];
    if (iterable.toArray)         return iterable.toArray();
    if (_.isArray(iterable))      return slice.call(iterable);
    if (_.isArguments(iterable))  return slice.call(iterable);
    return _.values(iterable);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    return _.toArray(obj).length;
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head`. The **guard** check allows it to work
  // with `_.map`.
  _.first = _.head = function(array, n, guard) {
    return (n != null) && !guard ? slice.call(array, 0, n) : array[0];
  };

  // Returns everything but the last entry of the array. Especcialy useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N. The **guard** check allows it to work with
  // `_.map`.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array. The **guard** check allows it to work with `_.map`.
  _.last = function(array, n, guard) {
    if ((n != null) && !guard) {
      return slice.call(array, Math.max(array.length - n, 0));
    } else {
      return array[array.length - 1];
    }
  };

  // Returns everything but the first entry of the array. Aliased as `tail`.
  // Especially useful on the arguments object. Passing an **index** will return
  // the rest of the values in the array from that index onward. The **guard**
  // check allows it to work with `_.map`.
  _.rest = _.tail = function(array, index, guard) {
    return slice.call(array, (index == null) || guard ? 1 : index);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, function(value){ return !!value; });
  };

  // Return a completely flattened version of an array.
  _.flatten = function(array, shallow) {
    return _.reduce(array, function(memo, value) {
      if (_.isArray(value)) return memo.concat(shallow ? value : _.flatten(value));
      memo[memo.length] = value;
      return memo;
    }, []);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iterator) {
    var initial = iterator ? _.map(array, iterator) : array;
    var result = [];
    _.reduce(initial, function(memo, el, i) {
      if (0 == i || (isSorted === true ? _.last(memo) != el : !_.include(memo, el))) {
        memo[memo.length] = el;
        result[result.length] = array[i];
      }
      return memo;
    }, []);
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(_.flatten(arguments, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays. (Aliased as "intersect" for back-compat.)
  _.intersection = _.intersect = function(array) {
    var rest = slice.call(arguments, 1);
    return _.filter(_.uniq(array), function(item) {
      return _.every(rest, function(other) {
        return _.indexOf(other, item) >= 0;
      });
    });
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = _.flatten(slice.call(arguments, 1));
    return _.filter(array, function(value){ return !_.include(rest, value); });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    var args = slice.call(arguments);
    var length = _.max(_.pluck(args, 'length'));
    var results = new Array(length);
    for (var i = 0; i < length; i++) results[i] = _.pluck(args, "" + i);
    return results;
  };

  // If the browser doesn't supply us with indexOf (I'm looking at you, **MSIE**),
  // we need this function. Return the position of the first occurrence of an
  // item in an array, or -1 if the item is not included in the array.
  // Delegates to **ECMAScript 5**'s native `indexOf` if available.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = function(array, item, isSorted) {
    if (array == null) return -1;
    var i, l;
    if (isSorted) {
      i = _.sortedIndex(array, item);
      return array[i] === item ? i : -1;
    }
    if (nativeIndexOf && array.indexOf === nativeIndexOf) return array.indexOf(item);
    for (i = 0, l = array.length; i < l; i++) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Delegates to **ECMAScript 5**'s native `lastIndexOf` if available.
  _.lastIndexOf = function(array, item) {
    if (array == null) return -1;
    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) return array.lastIndexOf(item);
    var i = array.length;
    while (i--) if (i in array && array[i] === item) return i;
    return -1;
  };

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (arguments.length <= 1) {
      stop = start || 0;
      start = 0;
    }
    step = arguments[2] || 1;

    var len = Math.max(Math.ceil((stop - start) / step), 0);
    var idx = 0;
    var range = new Array(len);

    while(idx < len) {
      range[idx++] = start;
      start += step;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Reusable constructor function for prototype setting.
  var ctor = function(){};

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Binding with arguments is also known as `curry`.
  // Delegates to **ECMAScript 5**'s native `Function.bind` if available.
  // We check for `func.bind` first, to fail fast when `func` is undefined.
  _.bind = function bind(func, context) {
    var bound, args;
    if (func.bind === nativeBind && nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError;
    args = slice.call(arguments, 2);
    return bound = function() {
      if (!(this instanceof bound)) return func.apply(context, args.concat(slice.call(arguments)));
      ctor.prototype = func.prototype;
      var self = new ctor;
      var result = func.apply(self, args.concat(slice.call(arguments)));
      if (Object(result) === result) return result;
      return self;
    };
  };

  // Bind all of an object's methods to that object. Useful for ensuring that
  // all callbacks defined on an object belong to it.
  _.bindAll = function(obj) {
    var funcs = slice.call(arguments, 1);
    if (funcs.length == 0) funcs = _.functions(obj);
    each(funcs, function(f) { obj[f] = _.bind(obj[f], obj); });
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memo = {};
    hasher || (hasher = _.identity);
    return function() {
      var key = hasher.apply(this, arguments);
      return hasOwnProperty.call(memo, key) ? memo[key] : (memo[key] = func.apply(this, arguments));
    };
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){ return func.apply(func, args); }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = function(func) {
    return _.delay.apply(_, [func, 1].concat(slice.call(arguments, 1)));
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.
  _.throttle = function(func, wait) {
    var context, args, timeout, throttling, more;
    var whenDone = _.debounce(function(){ more = throttling = false; }, wait);
    return function() {
      context = this; args = arguments;
      var later = function() {
        timeout = null;
        if (more) func.apply(context, args);
        whenDone();
      };
      if (!timeout) timeout = setTimeout(later, wait);
      if (throttling) {
        more = true;
      } else {
        func.apply(context, args);
      }
      whenDone();
      throttling = true;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds.
  _.debounce = function(func, wait) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = function(func) {
    var ran = false, memo;
    return function() {
      if (ran) return memo;
      ran = true;
      return memo = func.apply(this, arguments);
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return function() {
      var args = concat.apply([func], arguments);
      return wrapper.apply(this, args);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var funcs = arguments;
    return function() {
      var args = arguments;
      for (var i = funcs.length - 1; i >= 0; i--) {
        args = [funcs[i].apply(this, args)];
      }
      return args[0];
    };
  };

  // Returns a function that will only be executed after being called N times.
  _.after = function(times, func) {
    if (times <= 0) return func();
    return function() {
      if (--times < 1) { return func.apply(this, arguments); }
    };
  };

  // Object Functions
  // ----------------

  // Retrieve the names of an object's properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = nativeKeys || function(obj) {
    if (obj !== Object(obj)) throw new TypeError('Invalid object');
    var keys = [];
    for (var key in obj) if (hasOwnProperty.call(obj, key)) keys[keys.length] = key;
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    return _.map(obj, _.identity);
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (source[prop] !== void 0) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Fill in a given object with default properties.
  _.defaults = function(obj) {
    each(slice.call(arguments, 1), function(source) {
      for (var prop in source) {
        if (obj[prop] == null) obj[prop] = source[prop];
      }
    });
    return obj;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Internal recursive comparison function.
  function eq(a, b, stack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the Harmony `egal` proposal: http://wiki.ecmascript.org/doku.php?id=harmony:egal.
    if (a === b) return a !== 0 || 1 / a == 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a._chain) a = a._wrapped;
    if (b._chain) b = b._wrapped;
    // Invoke a custom `isEqual` method if one is provided.
    if (a.isEqual && _.isFunction(a.isEqual)) return a.isEqual(b);
    if (b.isEqual && _.isFunction(b.isEqual)) return b.isEqual(a);
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className != toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, dates, and booleans are compared by value.
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return a == String(b);
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive. An `egal` comparison is performed for
        // other numeric values.
        return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b);
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a == +b;
      // RegExps are compared by their source patterns and flags.
      case '[object RegExp]':
        return a.source == b.source &&
               a.global == b.global &&
               a.multiline == b.multiline &&
               a.ignoreCase == b.ignoreCase;
    }
    if (typeof a != 'object' || typeof b != 'object') return false;
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
    var length = stack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (stack[length] == a) return true;
    }
    // Add the first object to the stack of traversed objects.
    stack.push(a);
    var size = 0, result = true;
    // Recursively compare objects and arrays.
    if (className == '[object Array]') {
      // Compare array lengths to determine if a deep comparison is necessary.
      size = a.length;
      result = size == b.length;
      if (result) {
        // Deep compare the contents, ignoring non-numeric properties.
        while (size--) {
          // Ensure commutative equality for sparse arrays.
          if (!(result = size in a == size in b && eq(a[size], b[size], stack))) break;
        }
      }
    } else {
      // Objects with different constructors are not equivalent.
      if ('constructor' in a != 'constructor' in b || a.constructor != b.constructor) return false;
      // Deep compare objects.
      for (var key in a) {
        if (hasOwnProperty.call(a, key)) {
          // Count the expected number of properties.
          size++;
          // Deep compare each member.
          if (!(result = hasOwnProperty.call(b, key) && eq(a[key], b[key], stack))) break;
        }
      }
      // Ensure that both objects contain the same number of properties.
      if (result) {
        for (key in b) {
          if (hasOwnProperty.call(b, key) && !(size--)) break;
        }
        result = !size;
      }
    }
    // Remove the first object from the stack of traversed objects.
    stack.pop();
    return result;
  }

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b, []);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (var key in obj) if (hasOwnProperty.call(obj, key)) return false;
    return true;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType == 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) == '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    return obj === Object(obj);
  };

  // Is a given variable an arguments object?
  _.isArguments = function(obj) {
    return toString.call(obj) == '[object Arguments]';
  };
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return !!(obj && hasOwnProperty.call(obj, 'callee'));
    };
  }

  // Is a given value a function?
  _.isFunction = function(obj) {
    return toString.call(obj) == '[object Function]';
  };

  // Is a given value a string?
  _.isString = function(obj) {
    return toString.call(obj) == '[object String]';
  };

  // Is a given value a number?
  _.isNumber = function(obj) {
    return toString.call(obj) == '[object Number]';
  };

  // Is the given value `NaN`?
  _.isNaN = function(obj) {
    // `NaN` is the only value for which `===` is not reflexive.
    return obj !== obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) == '[object Boolean]';
  };

  // Is a given value a date?
  _.isDate = function(obj) {
    return toString.call(obj) == '[object Date]';
  };

  // Is the given value a regular expression?
  _.isRegExp = function(obj) {
    return toString.call(obj) == '[object RegExp]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iterators.
  _.identity = function(value) {
    return value;
  };

  // Run a function **n** times.
  _.times = function (n, iterator, context) {
    for (var i = 0; i < n; i++) iterator.call(context, i);
  };

  // Escape a string for HTML interpolation.
  _.escape = function(string) {
    return (''+string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
  };

  // Add your own custom functions to the Underscore object, ensuring that
  // they're correctly added to the OOP wrapper as well.
  _.mixin = function(obj) {
    each(_.functions(obj), function(name){
      addToWrapper(name, _[name] = obj[name]);
    });
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = idCounter++;
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  _.template = function(str, data) {
    var c  = _.templateSettings;
    var tmpl = 'var __p=[],print=function(){__p.push.apply(__p,arguments);};' +
      'with(obj||{}){__p.push(\'' +
      str.replace(/\\/g, '\\\\')
         .replace(/'/g, "\\'")
         .replace(c.escape, function(match, code) {
           return "',_.escape(" + code.replace(/\\'/g, "'") + "),'";
         })
         .replace(c.interpolate, function(match, code) {
           return "'," + code.replace(/\\'/g, "'") + ",'";
         })
         .replace(c.evaluate || null, function(match, code) {
           return "');" + code.replace(/\\'/g, "'")
                              .replace(/[\r\n\t]/g, ' ') + ";__p.push('";
         })
         .replace(/\r/g, '\\r')
         .replace(/\n/g, '\\n')
         .replace(/\t/g, '\\t')
         + "');}return __p.join('');";
    var func = new Function('obj', '_', tmpl);
    if (data) return func(data, _);
    return function(data) {
      return func.call(this, data, _);
    };
  };

  // The OOP Wrapper
  // ---------------

  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.
  var wrapper = function(obj) { this._wrapped = obj; };

  // Expose `wrapper.prototype` as `_.prototype`
  _.prototype = wrapper.prototype;

  // Helper function to continue chaining intermediate results.
  var result = function(obj, chain) {
    return chain ? _(obj).chain() : obj;
  };

  // A method to easily add functions to the OOP wrapper.
  var addToWrapper = function(name, func) {
    wrapper.prototype[name] = function() {
      var args = slice.call(arguments);
      unshift.call(args, this._wrapped);
      return result(func.apply(_, args), this._chain);
    };
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      method.apply(this._wrapped, arguments);
      return result(this._wrapped, this._chain);
    };
  });

  // Add all accessor Array functions to the wrapper.
  each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    wrapper.prototype[name] = function() {
      return result(method.apply(this._wrapped, arguments), this._chain);
    };
  });

  // Start chaining a wrapped Underscore object.
  wrapper.prototype.chain = function() {
    this._chain = true;
    return this;
  };

  // Extracts the result from a wrapped and chained object.
  wrapper.prototype.value = function() {
    return this._wrapped;
  };

}).call(this);

//     Backbone.js 0.5.3
//     (c) 2010 Jeremy Ashkenas, DocumentCloud Inc.
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://documentcloud.github.com/backbone

(function(){

  // Initial Setup
  // -------------

  // Save a reference to the global object.
  var root = this;

  // Save the previous value of the `Backbone` variable.
  var previousBackbone = root.Backbone;

  // The top-level namespace. All public Backbone classes and modules will
  // be attached to this. Exported for both CommonJS and the browser.
  var Backbone;
  if (typeof exports !== 'undefined') {
    Backbone = exports;
  } else {
    Backbone = root.Backbone = {};
  }

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '0.5.3';

  // Require Underscore, if we're on the server, and it's not already present.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore')._;

  // For Backbone's purposes, jQuery or Zepto owns the `$` variable.
  var $ = root.jQuery || root.Zepto;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option will
  // fake `"PUT"` and `"DELETE"` requests via the `_method` parameter and set a
  // `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Backbone.Events
  // -----------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may `bind` or `unbind` a callback function to an event;
  // `trigger`-ing an event fires all callbacks in succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.bind('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  Backbone.Events = {

    // Bind an event, specified by a string name, `ev`, to a `callback` function.
    // Passing `"all"` will bind the callback to all events fired.
    bind : function(ev, callback, context) {
      var calls = this._callbacks || (this._callbacks = {});
      var list  = calls[ev] || (calls[ev] = []);
      list.push([callback, context]);
      return this;
    },

    // Remove one or many callbacks. If `callback` is null, removes all
    // callbacks for the event. If `ev` is null, removes all bound callbacks
    // for all events.
    unbind : function(ev, callback) {
      var calls;
      if (!ev) {
        this._callbacks = {};
      } else if (calls = this._callbacks) {
        if (!callback) {
          calls[ev] = [];
        } else {
          var list = calls[ev];
          if (!list) return this;
          for (var i = 0, l = list.length; i < l; i++) {
            if (list[i] && callback === list[i][0]) {
              list[i] = null;
              break;
            }
          }
        }
      }
      return this;
    },

    // Trigger an event, firing all bound callbacks. Callbacks are passed the
    // same arguments as `trigger` is, apart from the event name.
    // Listening for `"all"` passes the true event name as the first argument.
    trigger : function(eventName) {
      var list, calls, ev, callback, args;
      var both = 2;
      if (!(calls = this._callbacks)) return this;
      while (both--) {
        ev = both ? eventName : 'all';
        if (list = calls[ev]) {
          for (var i = 0, l = list.length; i < l; i++) {
            if (!(callback = list[i])) {
              list.splice(i, 1); i--; l--;
            } else {
              args = both ? Array.prototype.slice.call(arguments, 1) : arguments;
              callback[0].apply(callback[1] || this, args);
            }
          }
        }
      }
      return this;
    }

  };

  // Backbone.Model
  // --------------

  // Create a new model, with defined attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  Backbone.Model = function(attributes, options) {
    var defaults;
    attributes || (attributes = {});
    if (defaults = this.defaults) {
      if (_.isFunction(defaults)) defaults = defaults.call(this);
      attributes = _.extend({}, defaults, attributes);
    }
    this.attributes = {};
    this._escapedAttributes = {};
    this.cid = _.uniqueId('c');
    this.set(attributes, {silent : true});
    this._changed = false;
    this._previousAttributes = _.clone(this.attributes);
    if (options && options.collection) this.collection = options.collection;
    this.initialize(attributes, options);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Backbone.Model.prototype, Backbone.Events, {

    // A snapshot of the model's previous attributes, taken immediately
    // after the last `"change"` event was fired.
    _previousAttributes : null,

    // Has the item been changed since the last `"change"` event?
    _changed : false,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute : 'id',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize : function(){},

    // Return a copy of the model's `attributes` object.
    toJSON : function() {
      return _.clone(this.attributes);
    },

    // Get the value of an attribute.
    get : function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape : function(attr) {
      var html;
      if (html = this._escapedAttributes[attr]) return html;
      var val = this.attributes[attr];
      return this._escapedAttributes[attr] = escapeHTML(val == null ? '' : '' + val);
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has : function(attr) {
      return this.attributes[attr] != null;
    },

    // Set a hash of model attributes on the object, firing `"change"` unless you
    // choose to silence it.
    set : function(attrs, options) {

      // Extract attributes and options.
      options || (options = {});
      if (!attrs) return this;
      if (attrs.attributes) attrs = attrs.attributes;
      var now = this.attributes, escaped = this._escapedAttributes;

      // Run validation.
      if (!options.silent && this.validate && !this._performValidation(attrs, options)) return false;

      // Check for changes of `id`.
      if (this.idAttribute in attrs) this.id = attrs[this.idAttribute];

      // We're about to start triggering change events.
      var alreadyChanging = this._changing;
      this._changing = true;

      // Update attributes.
      for (var attr in attrs) {
        var val = attrs[attr];
        if (!_.isEqual(now[attr], val)) {
          now[attr] = val;
          delete escaped[attr];
          this._changed = true;
          if (!options.silent) this.trigger('change:' + attr, this, val, options);
        }
      }

      // Fire the `"change"` event, if the model has been changed.
      if (!alreadyChanging && !options.silent && this._changed) this.change(options);
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"` unless you choose
    // to silence it. `unset` is a noop if the attribute doesn't exist.
    unset : function(attr, options) {
      if (!(attr in this.attributes)) return this;
      options || (options = {});
      var value = this.attributes[attr];

      // Run validation.
      var validObj = {};
      validObj[attr] = void 0;
      if (!options.silent && this.validate && !this._performValidation(validObj, options)) return false;

      // Remove the attribute.
      delete this.attributes[attr];
      delete this._escapedAttributes[attr];
      if (attr == this.idAttribute) delete this.id;
      this._changed = true;
      if (!options.silent) {
        this.trigger('change:' + attr, this, void 0, options);
        this.change(options);
      }
      return this;
    },

    // Clear all attributes on the model, firing `"change"` unless you choose
    // to silence it.
    clear : function(options) {
      options || (options = {});
      var attr;
      var old = this.attributes;

      // Run validation.
      var validObj = {};
      for (attr in old) validObj[attr] = void 0;
      if (!options.silent && this.validate && !this._performValidation(validObj, options)) return false;

      this.attributes = {};
      this._escapedAttributes = {};
      this._changed = true;
      if (!options.silent) {
        for (attr in old) {
          this.trigger('change:' + attr, this, void 0, options);
        }
        this.change(options);
      }
      return this;
    },

    // Fetch the model from the server. If the server's representation of the
    // model differs from its current attributes, they will be overriden,
    // triggering a `"change"` event.
    fetch : function(options) {
      options || (options = {});
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (!model.set(model.parse(resp, xhr), options)) return false;
        if (success) success(model, resp);
      };
      options.error = wrapError(options.error, model, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save : function(attrs, options) {
      options || (options = {});
      if (attrs && !this.set(attrs, options)) return false;
      var model = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        if (!model.set(model.parse(resp, xhr), options)) return false;
        if (success) success(model, resp, xhr);
      };
      options.error = wrapError(options.error, model, options);
      var method = this.isNew() ? 'create' : 'update';
      return (this.sync || Backbone.sync).call(this, method, this, options);
    },

    // Destroy this model on the server if it was already persisted. Upon success, the model is removed
    // from its collection, if it has one.
    destroy : function(options) {
      options || (options = {});
      if (this.isNew()) return this.trigger('destroy', this, this.collection, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        model.trigger('destroy', model, model.collection, options);
        if (success) success(model, resp);
      };
      options.error = wrapError(options.error, model, options);
      return (this.sync || Backbone.sync).call(this, 'delete', this, options);
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url : function() {
      var base = getUrl(this.collection) || this.urlRoot || urlError();
      if (this.isNew()) return base;
      return base + (base.charAt(base.length - 1) == '/' ? '' : '/') + encodeURIComponent(this.id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse : function(resp, xhr) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone : function() {
      return new this.constructor(this);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew : function() {
      return this.id == null;
    },

    // Call this method to manually fire a `change` event for this model.
    // Calling this will cause all objects observing the model to update.
    change : function(options) {
      this.trigger('change', this, options);
      this._previousAttributes = _.clone(this.attributes);
      this._changed = false;
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged : function(attr) {
      if (attr) return this._previousAttributes[attr] != this.attributes[attr];
      return this._changed;
    },

    // Return an object containing all the attributes that have changed, or false
    // if there are no changed attributes. Useful for determining what parts of a
    // view need to be updated and/or what attributes need to be persisted to
    // the server.
    changedAttributes : function(now) {
      now || (now = this.attributes);
      var old = this._previousAttributes;
      var changed = false;
      for (var attr in now) {
        if (!_.isEqual(old[attr], now[attr])) {
          changed = changed || {};
          changed[attr] = now[attr];
        }
      }
      return changed;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous : function(attr) {
      if (!attr || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes : function() {
      return _.clone(this._previousAttributes);
    },

    // Run validation against a set of incoming attributes, returning `true`
    // if all is well. If a specific `error` callback has been passed,
    // call that instead of firing the general `"error"` event.
    _performValidation : function(attrs, options) {
      var error = this.validate(attrs);
      if (error) {
        if (options.error) {
          options.error(this, error, options);
        } else {
          this.trigger('error', this, error, options);
        }
        return false;
      }
      return true;
    }

  });

  // Backbone.Collection
  // -------------------

  // Provides a standard collection class for our sets of models, ordered
  // or unordered. If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.comparator) this.comparator = options.comparator;
    _.bindAll(this, '_onModelEvent', '_removeReference');
    this._reset();
    if (models) this.reset(models, {silent: true});
    this.initialize.apply(this, arguments);
  };

  // Define the Collection's inheritable methods.
  _.extend(Backbone.Collection.prototype, Backbone.Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model : Backbone.Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize : function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON : function() {
      return this.map(function(model){ return model.toJSON(); });
    },

    // Add a model, or list of models to the set. Pass **silent** to avoid
    // firing the `added` event for every new model.
    add : function(models, options) {
      if (_.isArray(models)) {
        for (var i = 0, l = models.length; i < l; i++) {
          this._add(models[i], options);
        }
      } else {
        this._add(models, options);
      }
      return this;
    },

    // Remove a model, or a list of models from the set. Pass silent to avoid
    // firing the `removed` event for every model removed.
    remove : function(models, options) {
      if (_.isArray(models)) {
        for (var i = 0, l = models.length; i < l; i++) {
          this._remove(models[i], options);
        }
      } else {
        this._remove(models, options);
      }
      return this;
    },

    // Get a model from the set by id.
    get : function(id) {
      if (id == null) return null;
      return this._byId[id.id != null ? id.id : id];
    },

    // Get a model from the set by client id.
    getByCid : function(cid) {
      return cid && this._byCid[cid.cid || cid];
    },

    // Get the model at the given index.
    at: function(index) {
      return this.models[index];
    },

    // Force the collection to re-sort itself. You don't need to call this under normal
    // circumstances, as the set will maintain sort order as each item is added.
    sort : function(options) {
      options || (options = {});
      if (!this.comparator) throw new Error('Cannot sort a set without a comparator');
      this.models = this.sortBy(this.comparator);
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck : function(attr) {
      return _.map(this.models, function(model){ return model.get(attr); });
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any `added` or `removed` events. Fires `reset` when finished.
    reset : function(models, options) {
      models  || (models = []);
      options || (options = {});
      this.each(this._removeReference);
      this._reset();
      this.add(models, {silent: true});
      if (!options.silent) this.trigger('reset', this, options);
      return this;
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `add: true` is passed, appends the
    // models to the collection instead of resetting.
    fetch : function(options) {
      options || (options = {});
      var collection = this;
      var success = options.success;
      options.success = function(resp, status, xhr) {
        collection[options.add ? 'add' : 'reset'](collection.parse(resp, xhr), options);
        if (success) success(collection, resp);
      };
      options.error = wrapError(options.error, collection, options);
      return (this.sync || Backbone.sync).call(this, 'read', this, options);
    },

    // Create a new instance of a model in this collection. After the model
    // has been created on the server, it will be added to the collection.
    // Returns the model, or 'false' if validation on a new model fails.
    create : function(model, options) {
      var coll = this;
      options || (options = {});
      model = this._prepareModel(model, options);
      if (!model) return false;
      var success = options.success;
      options.success = function(nextModel, resp, xhr) {
        coll.add(nextModel, options);
        if (success) success(nextModel, resp, xhr);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse : function(resp, xhr) {
      return resp;
    },

    // Proxy to _'s chain. Can't be proxied the same way the rest of the
    // underscore methods are proxied because it relies on the underscore
    // constructor.
    chain: function () {
      return _(this.models).chain();
    },

    // Reset all internal state. Called when the collection is reset.
    _reset : function(options) {
      this.length = 0;
      this.models = [];
      this._byId  = {};
      this._byCid = {};
    },

    // Prepare a model to be added to this collection
    _prepareModel: function(model, options) {
      if (!(model instanceof Backbone.Model)) {
        var attrs = model;
        model = new this.model(attrs, {collection: this});
        if (model.validate && !model._performValidation(attrs, options)) model = false;
      } else if (!model.collection) {
        model.collection = this;
      }
      return model;
    },

    // Internal implementation of adding a single model to the set, updating
    // hash indexes for `id` and `cid` lookups.
    // Returns the model, or 'false' if validation on a new model fails.
    _add : function(model, options) {
      options || (options = {});
      model = this._prepareModel(model, options);
      if (!model) return false;
      var already = this.getByCid(model);
      if (already) throw new Error(["Can't add the same model to a set twice", already.id]);
      this._byId[model.id] = model;
      this._byCid[model.cid] = model;
      var index = options.at != null ? options.at :
                  this.comparator ? this.sortedIndex(model, this.comparator) :
                  this.length;
      this.models.splice(index, 0, model);
      model.bind('all', this._onModelEvent);
      this.length++;
      if (!options.silent) model.trigger('add', model, this, options);
      return model;
    },

    // Internal implementation of removing a single model from the set, updating
    // hash indexes for `id` and `cid` lookups.
    _remove : function(model, options) {
      options || (options = {});
      model = this.getByCid(model) || this.get(model);
      if (!model) return null;
      delete this._byId[model.id];
      delete this._byCid[model.cid];
      this.models.splice(this.indexOf(model), 1);
      this.length--;
      if (!options.silent) model.trigger('remove', model, this, options);
      this._removeReference(model);
      return model;
    },

    // Internal method to remove a model's ties to a collection.
    _removeReference : function(model) {
      if (this == model.collection) {
        delete model.collection;
      }
      model.unbind('all', this._onModelEvent);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent : function(ev, model, collection, options) {
      if ((ev == 'add' || ev == 'remove') && collection != this) return;
      if (ev == 'destroy') {
        this._remove(model, options);
      }
      if (model && ev === 'change:' + model.idAttribute) {
        delete this._byId[model.previous(model.idAttribute)];
        this._byId[model.id] = model;
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  var methods = ['forEach', 'each', 'map', 'reduce', 'reduceRight', 'find', 'detect',
    'filter', 'select', 'reject', 'every', 'all', 'some', 'any', 'include',
    'contains', 'invoke', 'max', 'min', 'sortBy', 'sortedIndex', 'toArray', 'size',
    'first', 'rest', 'last', 'without', 'indexOf', 'lastIndexOf', 'isEmpty', 'groupBy'];

  // Mix in each Underscore method as a proxy to `Collection#models`.
  _.each(methods, function(method) {
    Backbone.Collection.prototype[method] = function() {
      return _[method].apply(_, [this.models].concat(_.toArray(arguments)));
    };
  });

  // Backbone.Router
  // -------------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var namedParam    = /:([\w\d]+)/g;
  var splatParam    = /\*([\w\d]+)/g;
  var escapeRegExp  = /[-[\]{}()+?.,\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Backbone.Router.prototype, Backbone.Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize : function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route : function(route, name, callback) {
      Backbone.history || (Backbone.history = new Backbone.History);
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      Backbone.history.route(route, _.bind(function(fragment) {
        var args = this._extractParameters(route, fragment);
        callback.apply(this, args);
        this.trigger.apply(this, ['route:' + name].concat(args));
      }, this));
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate : function(fragment, triggerRoute) {
      Backbone.history.navigate(fragment, triggerRoute);
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes : function() {
      if (!this.routes) return;
      var routes = [];
      for (var route in this.routes) {
        routes.unshift([route, this.routes[route]]);
      }
      for (var i = 0, l = routes.length; i < l; i++) {
        this.route(routes[i][0], routes[i][1], this[routes[i][1]]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp : function(route) {
      route = route.replace(escapeRegExp, "\\$&")
                   .replace(namedParam, "([^\/]*)")
                   .replace(splatParam, "(.*?)");
      return new RegExp('^' + route + '$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted parameters.
    _extractParameters : function(route, fragment) {
      return route.exec(fragment).slice(1);
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on URL fragments. If the
  // browser does not support `onhashchange`, falls back to polling.
  Backbone.History = function() {
    this.handlers = [];
    _.bindAll(this, 'checkUrl');
  };

  // Cached regex for cleaning hashes.
  var hashStrip = /^#*/;

  // Cached regex for detecting MSIE.
  var isExplorer = /msie [\w.]+/;

  // Has the history handling already been started?
  var historyStarted = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(Backbone.History.prototype, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Get the cross-browser normalized URL fragment, either from the URL,
    // the hash, or the override.
    getFragment : function(fragment, forcePushState) {
      if (fragment == null) {
        if (this._hasPushState || forcePushState) {
          fragment = window.location.pathname;
          var search = window.location.search;
          if (search) fragment += search;
          if (fragment.indexOf(this.options.root) == 0) fragment = fragment.substr(this.options.root.length);
        } else {
          fragment = window.location.hash;
        }
      }
      return decodeURIComponent(fragment.replace(hashStrip, ''));
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start : function(options) {

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      if (historyStarted) throw new Error("Backbone.history has already been started");
      this.options          = _.extend({}, {root: '/'}, this.options, options);
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.options.pushState && window.history && window.history.pushState);
      var fragment          = this.getFragment();
      var docMode           = document.documentMode;
      var oldIE             = (isExplorer.exec(navigator.userAgent.toLowerCase()) && (!docMode || docMode <= 7));
      if (oldIE) {
        this.iframe = $('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo('body')[0].contentWindow;
        this.navigate(fragment);
      }

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._hasPushState) {
        $(window).bind('popstate', this.checkUrl);
      } else if ('onhashchange' in window && !oldIE) {
        $(window).bind('hashchange', this.checkUrl);
      } else {
        setInterval(this.checkUrl, this.interval);
      }

      // Determine if we need to change the base url, for a pushState link
      // opened by a non-pushState browser.
      this.fragment = fragment;
      historyStarted = true;
      var loc = window.location;
      var atRoot  = loc.pathname == this.options.root;
      if (this._wantsPushState && !this._hasPushState && !atRoot) {
        this.fragment = this.getFragment(null, true);
        window.location.replace(this.options.root + '#' + this.fragment);
        // Return immediately as browser will do redirect to new url
        return true;
      } else if (this._wantsPushState && this._hasPushState && atRoot && loc.hash) {
        this.fragment = loc.hash.replace(hashStrip, '');
        window.history.replaceState({}, document.title, loc.protocol + '//' + loc.host + this.options.root + this.fragment);
      }

      if (!this.options.silent) {
        return this.loadUrl();
      }
    },

    // Add a route to be tested when the fragment changes. Routes added later may
    // override previous routes.
    route : function(route, callback) {
      this.handlers.unshift({route : route, callback : callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl : function(e) {
      var current = this.getFragment();
      if (current == this.fragment && this.iframe) current = this.getFragment(this.iframe.location.hash);
      if (current == this.fragment || current == decodeURIComponent(this.fragment)) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl() || this.loadUrl(window.location.hash);
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl : function(fragmentOverride) {
      var fragment = this.fragment = this.getFragment(fragmentOverride);
      var matched = _.any(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
      return matched;
    },

    // Save a fragment into the hash history. You are responsible for properly
    // URL-encoding the fragment in advance. This does not trigger
    // a `hashchange` event.
    navigate : function(fragment, triggerRoute) {
      var frag = (fragment || '').replace(hashStrip, '');
      if (this.fragment == frag || this.fragment == decodeURIComponent(frag)) return;
      if (this._hasPushState) {
        var loc = window.location;
        if (frag.indexOf(this.options.root) != 0) frag = this.options.root + frag;
        this.fragment = frag;
        window.history.pushState({}, document.title, loc.protocol + '//' + loc.host + frag);
      } else {
        window.location.hash = this.fragment = frag;
        if (this.iframe && (frag != this.getFragment(this.iframe.location.hash))) {
          this.iframe.document.open().close();
          this.iframe.location.hash = frag;
        }
      }
      if (triggerRoute) this.loadUrl(fragment);
    }

  });

  // Backbone.View
  // -------------

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    this._configure(options || {});
    this._ensureElement();
    this.delegateEvents();
    this.initialize.apply(this, arguments);
  };

  // Element lookup, scoped to DOM elements within the current view.
  // This should be prefered to global lookups, if you're dealing with
  // a specific view.
  var selectorDelegate = function(selector) {
    return $(selector, this.el);
  };

  // Cached regex to split keys for `delegate`.
  var eventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be merged as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(Backbone.View.prototype, Backbone.Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName : 'div',

    // Attach the `selectorDelegate` function as the `$` property.
    $       : selectorDelegate,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize : function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render : function() {
      return this;
    },

    // Remove this view from the DOM. Note that the view isn't present in the
    // DOM by default, so calling this method may be a no-op.
    remove : function() {
      $(this.el).remove();
      return this;
    },

    // For small amounts of DOM Elements, where a full-blown template isn't
    // needed, use **make** to manufacture elements, one at a time.
    //
    //     var el = this.make('li', {'class': 'row'}, this.model.escape('title'));
    //
    make : function(tagName, attributes, content) {
      var el = document.createElement(tagName);
      if (attributes) $(el).attr(attributes);
      if (content) $(el).html(content);
      return el;
    },

    // Set callbacks, where `this.callbacks` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save'
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    // This only works for delegate-able events: not `focus`, `blur`, and
    // not `change`, `submit`, and `reset` in Internet Explorer.
    delegateEvents : function(events) {
      if (!(events || (events = this.events))) return;
      if (_.isFunction(events)) events = events.call(this);
      $(this.el).unbind('.delegateEvents' + this.cid);
      for (var key in events) {
        var method = this[events[key]];
        if (!method) throw new Error('Event "' + events[key] + '" does not exist');
        var match = key.match(eventSplitter);
        var eventName = match[1], selector = match[2];
        method = _.bind(method, this);
        eventName += '.delegateEvents' + this.cid;
        if (selector === '') {
          $(this.el).bind(eventName, method);
        } else {
          $(this.el).delegate(selector, eventName, method);
        }
      }
    },

    // Performs the initial configuration of a View with a set of options.
    // Keys with special meaning *(model, collection, id, className)*, are
    // attached directly to the view.
    _configure : function(options) {
      if (this.options) options = _.extend({}, this.options, options);
      for (var i = 0, l = viewOptions.length; i < l; i++) {
        var attr = viewOptions[i];
        if (options[attr]) this[attr] = options[attr];
      }
      this.options = options;
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` proeprties.
    _ensureElement : function() {
      if (!this.el) {
        var attrs = this.attributes || {};
        if (this.id) attrs.id = this.id;
        if (this.className) attrs['class'] = this.className;
        this.el = this.make(this.tagName, attrs);
      } else if (_.isString(this.el)) {
        this.el = $(this.el).get(0);
      }
    }

  });

  // The self-propagating extend function that Backbone classes use.
  var extend = function (protoProps, classProps) {
    var child = inherits(this, protoProps, classProps);
    child.extend = this.extend;
    return child;
  };

  // Set up inheritance for the model, collection, and view.
  Backbone.Model.extend = Backbone.Collection.extend =
    Backbone.Router.extend = Backbone.View.extend = extend;

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'delete': 'DELETE',
    'read'  : 'GET'
  };

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, uses makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded` instead of
  // `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default JSON-request options.
    var params = _.extend({
      type:         type,
      dataType:     'json'
    }, options);

    // Ensure that we have a URL.
    if (!params.url) {
      params.url = getUrl(model) || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (!params.data && model && (method == 'create' || method == 'update')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(model.toJSON());
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (Backbone.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data        = params.data ? {model : params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (Backbone.emulateHTTP) {
      if (type === 'PUT' || type === 'DELETE') {
        if (Backbone.emulateJSON) params.data._method = type;
        params.type = 'POST';
        params.beforeSend = function(xhr) {
          xhr.setRequestHeader('X-HTTP-Method-Override', type);
        };
      }
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !Backbone.emulateJSON) {
      params.processData = false;
    }

    // Make the request.
    return $.ajax(params);
  };

  // Helpers
  // -------

  // Shared empty constructor function to aid in prototype-chain creation.
  var ctor = function(){};

  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var inherits = function(parent, protoProps, staticProps) {
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call `super()`.
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Inherit class (static) properties from parent.
    _.extend(child, parent);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Add static properties to the constructor function, if supplied.
    if (staticProps) _.extend(child, staticProps);

    // Correctly set child's `prototype.constructor`.
    child.prototype.constructor = child;

    // Set a convenience property in case the parent's prototype is needed later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Helper function to get a URL from a Model or Collection as a property
  // or as a function.
  var getUrl = function(object) {
    if (!(object && object.url)) return null;
    return _.isFunction(object.url) ? object.url() : object.url;
  };

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(onError, model, options) {
    return function(resp) {
      if (onError) {
        onError(model, resp, options);
      } else {
        model.trigger('error', model, resp, options);
      }
    };
  };

  // Helper function to escape a string for HTML rendering.
  var escapeHTML = function(string) {
    return string.replace(/&(?!\w+;|#\d+;|#x[\da-f]+;)/gi, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/\//g,'&#x2F;');
  };

}).call(this);

/* JQuery fullscreen mode */

(function($, window, documentElement, height, width) {
    
    // browser detection code courtesy of quirksmode, http://www.quirksmode.org/js/detect.html
    // slightly simplified, as well as minor changes for readability purposes

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },

        searchString: function (data) {
            for (var i=0;i<data.length;i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },

        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },

        dataBrowser: [
            { string: navigator.userAgent, subString: "Chrome", identity: "Chrome" },
            { string: navigator.vendor, subString: "Apple", identity: "Safari", versionSearch: "Version" },
            { prop: window.opera, identity: "Opera", versionSearch: "Version" },
            { string: navigator.userAgent, subString: "Firefox", identity: "Firefox" },
            { string: navigator.userAgent, subString: "MSIE", identity: "Explorer", versionSearch: "MSIE" }
        ],

        dataOS : [
            { string: navigator.platform, subString: "Win", identity: "Windows" },
            { string: navigator.platform, subString: "Mac", identity: "Mac" },
            { string: navigator.platform, subString: "Linux", identity: "Linux" }
        ]

    };

    BrowserDetect.init();
    // Browser name: BrowserDetect.browser
    // Browser version: BrowserDetect.version
    // OS name: BrowserDetect.OS
    
    // here are major browsers' keyboard mapping for triggering fullscreen on/off
    var keys = {
        "MSIE": {
            "Windows": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" }
        },
        "Firefox": {
            "Windows": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Linux": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Mac": { ctrlKey: false, altKey: false, metaKey: true, shiftKey: true, which: 70, string: "&#x21E7;&#x2318;F", alt: "Shift+Command+F" }
        },
        "Chrome": {
            "Windows": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Linux": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Mac": { ctrlKey: false, altKey: false, metaKey: true, shiftKey: true, which: 70, string: "&#x21E7;&#x2318;F", alt: "Shift+Command+F" }
        },
        "Safari": { // still missing Safari on Windows... help!
            "Mac": { ctrlKey: true, altKey: false, metaKey: false, shiftKey: true, which: 70, string: "^&#x2318;F", alt: "Control+Command+F" }
        },
        "Opera": {
            "Windows": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Linux": { ctrlKey: false, altKey: false, metaKey: false, shiftKey: false, which: 122, string: "F11", alt: "F11" },
            "Mac": { ctrlKey: false, altKey: false, metaKey: true, shiftKey: true, which: 70, string: "&#x21E7;&#x2318;F", alt: "Shift+Command+F" }
        },

    };

    var
        isFullScreen = function() {
            return (documentElement.clientHeight == height && documentElement.clientWidth == width) ||
                window.fullScreen ||
                (window.outerHeight == height && window.outerWidth == width) ||
                (BrowserDetect.browser == "Safari" && window.outerHeight == (height - 40) && window.outerWidth == width)
            ;
        }
        ,$window = $(window)
    ;
    
    var thisKeys = keys[BrowserDetect.browser][BrowserDetect.OS];
    var shortcut = { shortcut: thisKeys.string, longform: thisKeys.alt };

    $window
        .data('fullscreen-state', isFullScreen())
        .data('fullscreen-key', shortcut)
        .resize(function() {
            var fullscreenState = isFullScreen();
            
            if ($window.data('fullscreen-state') && !fullscreenState) {
                $window
                    .data('fullscreen-state', fullscreenState)
                    .trigger('fullscreen-toggle', [false])
                    .trigger('fullscreen-off')
                ;
            }
            else if (!$window.data('fullscreen-state') && fullscreenState) {
                $window
                    .data('fullscreen-state', fullscreenState)
                    .trigger('fullscreen-toggle', [true])
                    .trigger('fullscreen-on')
                ;
            }
        })
        .keydown(function(e) {
            if (thisKeys && e.ctrlKey == thisKeys.ctrlKey && e.altKey == thisKeys.altKey && e.metaKey == thisKeys.metaKey && e.shiftKey == thisKeys.shiftKey && e.which == thisKeys.which)
                $window.trigger('fullscreen-key', [thisKeys.string, thisKeys.alt]);
        })
    ;

})(jQuery, this, document.documentElement, screen.height, screen.width);


/***

    P R O C E S S I N G . J S - 1.3.6
    a port of the Processing visualization language

    Processing.js is licensed under the MIT License, see LICENSE.
    For a list of copyright holders, please refer to AUTHORS.

    http://processingjs.org

***/

(function(B,d,o,r){var E=function(){};var q=function(){if("console" in B){return function(L){B.console.log("Processing.js: "+L)}}return E()}();var u=function(L){var M=new XMLHttpRequest;M.open("GET",L,false);if(M.overrideMimeType){M.overrideMimeType("text/plain")}M.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");M.send(null);if(M.status!==200&&M.status!==0){throw"XMLHttpRequest failed, status code "+M.status}return M.responseText};var l="document" in this&&!("fake" in this.document);d.head=d.head||d.getElementsByTagName("head")[0];function A(L,M){if(L in B){return B[L]}if(typeof B[M]==="function"){return B[M]}return function(O){if(O instanceof Array){return O}if(typeof O==="number"){var N=[];N.length=O;return N}}}var e=A("Float32Array","WebGLFloatArray"),I=A("Int32Array","WebGLIntArray"),w=A("Uint16Array","WebGLUnsignedShortArray"),b=A("Uint8Array","WebGLUnsignedByteArray");var z={X:0,Y:1,Z:2,R:3,G:4,B:5,A:6,U:7,V:8,NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:0.0001,MAX_FLOAT:3.4028235e+38,MIN_FLOAT:-3.4028235e+38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:o.PI,TWO_PI:2*o.PI,HALF_PI:o.PI/2,THIRD_PI:o.PI/3,QUARTER_PI:o.PI/4,DEG_TO_RAD:o.PI/180,RAD_TO_DEG:180/o.PI,WHITESPACE:" \t\n\r\u000c\u00a0",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1<<0,ADD:1<<1,SUBTRACT:1<<2,LIGHTEST:1<<3,DARKEST:1<<4,DIFFERENCE:1<<5,EXCLUSION:1<<6,MULTIPLY:1<<7,SCREEN:1<<8,OVERLAY:1<<9,HARD_LIGHT:1<<10,SOFT_LIGHT:1<<11,DODGE:1<<12,BURN:1<<13,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:1<<15,PREC_MAXVAL:(1<<15)-1,PREC_ALPHA_SHIFT:24-15,PREC_RED_SHIFT:16-15,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8};function h(N){if(typeof N==="string"){var M=0;for(var L=0;L<N.length;++L){M=M*31+N.charCodeAt(L)&4294967295}return M}if(typeof N!=="object"){return N&4294967295}if(N.hashCode instanceof Function){return N.hashCode()}if(N.$id===r){N.$id=o.floor(o.random()*65536)-32768<<16|o.floor(o.random()*65536)}return N.$id}function p(M,L){if(M===null||L===null){return M===null&&L===null}if(typeof M==="string"){return M===L}if(typeof M!=="object"){return M===L}if(M.equals instanceof Function){return M.equals(L)}return M===L}var m=function(M){if(M.iterator instanceof Function){return M.iterator()}if(M instanceof Array){var L=-1;this.hasNext=function(){return ++L<M.length};this.next=function(){return M[L]}}else{throw"Unable to iterate: "+M}};var f=function(){function M(O){var N=0;this.hasNext=function(){return N<O.length};this.next=function(){return O[N++]};this.remove=function(){O.splice(N,1)}}function L(){var N;if(arguments.length===0){N=[]}else{if(arguments.length>0&&typeof arguments[0]!=="number"){N=arguments[0].toArray()}else{N=[];N.length=0|arguments[0]}}this.get=function(O){return N[O]};this.contains=function(O){return this.indexOf(O)>-1};this.indexOf=function(Q){for(var P=0,O=N.length;P<O;++P){if(p(Q,N[P])){return P}}return -1};this.add=function(){if(arguments.length===1){N.push(arguments[0])}else{if(arguments.length===2){var O=arguments[0];if(typeof O==="number"){if(O>=0&&O<=N.length){N.splice(O,0,arguments[1])}else{throw O+" is not a valid index"}}else{throw typeof O+" is not a number"}}else{throw"Please use the proper number of parameters."}}};this.addAll=function(P,O){var Q;if(typeof P==="number"){if(P<0||P>N.length){throw"Index out of bounds for addAll: "+P+" greater or equal than "+N.length}Q=new m(O);while(Q.hasNext()){N.splice(P++,0,Q.next())}}else{Q=new m(P);while(Q.hasNext()){N.push(Q.next())}}};this.set=function(){if(arguments.length===2){var O=arguments[0];if(typeof O==="number"){if(O>=0&&O<N.length){N.splice(O,1,arguments[1])}else{throw O+" is not a valid index."}}else{throw typeof O+" is not a number"}}else{throw"Please use the proper number of parameters."}};this.size=function(){return N.length};this.clear=function(){N.length=0};this.remove=function(O){if(typeof O==="number"){return N.splice(O,1)[0]}O=this.indexOf(O);if(O>-1){N.splice(O,1);return true}return false};this.isEmpty=function(){return !N.length};this.clone=function(){return new L(this)};this.toArray=function(){return N.slice(0)};this.iterator=function(){return new M(N)}}return L}();var v=function(){function L(){if(arguments.length===1&&arguments[0] instanceof L){return arguments[0].clone()}var U=arguments.length>0?arguments[0]:16;var V=arguments.length>1?arguments[1]:0.75;var O=[];O.length=U;var Q=0;var M=this;function S(X){var W=h(X)%O.length;return W<0?O.length+W:W}function P(){if(Q<=V*O.length){return}var Z=[];for(var Y=0;Y<O.length;++Y){if(O[Y]!==r){Z=Z.concat(O[Y])}}var aa=O.length*2;O=[];O.length=aa;for(var X=0;X<Z.length;++X){var W=S(Z[X].key);var ab=O[W];if(ab===r){O[W]=ab=[]}ab.push(Z[X])}}function N(aa,ab){var W=0;var Z=-1;var Y=false;function X(){while(!Y){++Z;if(W>=O.length){Y=true}else{if(O[W]===r||Z>=O[W].length){Z=-1;++W}else{return}}}}this.hasNext=function(){return !Y};this.next=function(){var ac=aa(O[W][Z]);X();return ac};this.remove=function(){ab(this.next());--Z};X()}function T(W,X,Y){this.clear=function(){M.clear()};this.contains=function(Z){return X(Z)};this.containsAll=function(aa){var Z=aa.iterator();while(Z.hasNext()){if(!this.contains(Z.next())){return false}}return true};this.isEmpty=function(){return M.isEmpty()};this.iterator=function(){return new N(W,Y)};this.remove=function(Z){if(this.contains(Z)){Y(Z);return true}return false};this.removeAll=function(ac){var Z=ac.iterator();var ab=false;while(Z.hasNext()){var aa=Z.next();if(this.contains(aa)){Y(aa);ab=true}}return true};this.retainAll=function(ad){var ab=this.iterator();var aa=[];while(ab.hasNext()){var ac=ab.next();if(!ad.contains(ac)){aa.push(ac)}}for(var Z=0;Z<aa.length;++Z){Y(aa[Z])}return aa.length>0};this.size=function(){return M.size()};this.toArray=function(){var Z=[];var aa=this.iterator();while(aa.hasNext()){Z.push(aa.next())}return Z}}function R(W){this._isIn=function(X){return X===M&&W.removed===r};this.equals=function(X){return p(W.key,X.getKey())};this.getKey=function(){return W.key};this.getValue=function(){return W.value};this.hashCode=function(X){return h(W.key)};this.setValue=function(Y){var X=W.value;W.value=Y;return X}}this.clear=function(){Q=0;O=[];O.length=U};this.clone=function(){var W=new L;W.putAll(this);return W};this.containsKey=function(Y){var W=S(Y);var Z=O[W];if(Z===r){return false}for(var X=0;X<Z.length;++X){if(p(Z[X].key,Y)){return true}}return false};this.containsValue=function(Y){for(var X=0;X<O.length;++X){var Z=O[X];if(Z===r){continue}for(var W=0;W<Z.length;++W){if(p(Z[W].value,Y)){return true}}}return false};this.entrySet=function(){return new T(function(W){return new R(W)},function(W){return W instanceof R&&W._isIn(M)},function(W){return M.remove(W.getKey())})};this.get=function(Y){var W=S(Y);var Z=O[W];if(Z===r){return null}for(var X=0;X<Z.length;++X){if(p(Z[X].key,Y)){return Z[X].value}}return null};this.isEmpty=function(){return Q===0};this.keySet=function(){return new T(function(W){return W.key},function(W){return M.containsKey(W)},function(W){return M.remove(W)})};this.values=function(){return new T(function(W){return W.value},function(W){return M.containsValue(W)},function(W){return M.removeByValue(W)})};this.put=function(Y,aa){var W=S(Y);var ab=O[W];if(ab===r){++Q;O[W]=[{key:Y,value:aa}];P();return null}for(var X=0;X<ab.length;++X){if(p(ab[X].key,Y)){var Z=ab[X].value;ab[X].value=aa;return Z}}++Q;ab.push({key:Y,value:aa});P();return null};this.putAll=function(W){var X=W.entrySet().iterator();while(X.hasNext()){var Y=X.next();this.put(Y.getKey(),Y.getValue())}};this.remove=function(Y){var W=S(Y);var aa=O[W];if(aa===r){return null}for(var X=0;X<aa.length;++X){if(p(aa[X].key,Y)){--Q;var Z=aa[X].value;aa[X].removed=true;if(aa.length>1){aa.splice(X,1)}else{O[W]=r}return Z}}return null};this.removeByValue=function(Y){var aa,X,W,Z;for(aa in O){if(O.hasOwnProperty(aa)){for(X=0,W=O[aa].length;X<W;X++){Z=O[aa][X];if(Z.value===Y){O[aa].splice(X,1);return true}}}}return false};this.size=function(){return Q}}return L}();var y=function(){function L(O,Q,P){this.x=O||0;this.y=Q||0;this.z=P||0}L.dist=function(P,O){return P.dist(O)};L.dot=function(P,O){return P.dot(O)};L.cross=function(P,O){return P.cross(O)};L.angleBetween=function(P,O){return o.acos(P.dot(O)/(P.mag()*O.mag()))};L.prototype={set:function(O,Q,P){if(arguments.length===1){this.set(O.x||O[0]||0,O.y||O[1]||0,O.z||O[2]||0)}else{this.x=O;this.y=Q;this.z=P}},get:function(){return new L(this.x,this.y,this.z)},mag:function(){var O=this.x,Q=this.y,P=this.z;return o.sqrt(O*O+Q*Q+P*P)},add:function(O,Q,P){if(arguments.length===1){this.x+=O.x;this.y+=O.y;this.z+=O.z}else{this.x+=O;this.y+=Q;this.z+=P}},sub:function(O,Q,P){if(arguments.length===1){this.x-=O.x;this.y-=O.y;this.z-=O.z}else{this.x-=O;this.y-=Q;this.z-=P}},mult:function(O){if(typeof O==="number"){this.x*=O;this.y*=O;this.z*=O}else{this.x*=O.x;this.y*=O.y;this.z*=O.z}},div:function(O){if(typeof O==="number"){this.x/=O;this.y/=O;this.z/=O}else{this.x/=O.x;this.y/=O.y;this.z/=O.z}},dist:function(R){var Q=this.x-R.x,P=this.y-R.y,O=this.z-R.z;return o.sqrt(Q*Q+P*P+O*O)},dot:function(O,Q,P){if(arguments.length===1){return this.x*O.x+this.y*O.y+this.z*O.z}return this.x*O+this.y*Q+this.z*P},cross:function(P){var O=this.x,R=this.y,Q=this.z;return new L(R*P.z-P.y*Q,Q*P.x-P.z*O,O*P.y-P.x*R)},normalize:function(){var O=this.mag();if(O>0){this.div(O)}},limit:function(O){if(this.mag()>O){this.normalize();this.mult(O)}},heading2D:function(){return -o.atan2(-this.y,this.x)},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}};function M(O){return function(R,Q){var P=R.get();P[O](Q);return P}}for(var N in L.prototype){if(L.prototype.hasOwnProperty(N)&&!L.hasOwnProperty(N)){L[N]=M(N)}}return L}();function K(){}K.prototype=z;var g=new K;g.ArrayList=f;g.HashMap=v;g.PVector=y;g.ObjectIterator=m;g.PConstants=z;g.defineProperty=function(M,L,N){if("defineProperty" in Object){Object.defineProperty(M,L,N)}else{if(N.hasOwnProperty("get")){M.__defineGetter__(L,N.get)}if(N.hasOwnProperty("set")){M.__defineSetter__(L,N.set)}}};function i(O,N){function P(Q){g.defineProperty(O,Q,{get:function(){return N[Q]},set:function(R){N[Q]=R},enumerable:true})}var M=[];for(var L in N){if(typeof N[L]==="function"){if(!O.hasOwnProperty(L)){O[L]=N[L]}}else{if(L.charAt(0)!=="$"&&!(L in O)){M.push(L)}}}while(M.length>0){P(M.shift())}}g.extendClassChain=function(M){var N=[M];for(var L=M.$upcast;L;L=L.$upcast){i(L,M);N.push(L);M=L}while(N.length>0){N.pop().$self=M}};g.extendStaticMembers=function(L,M){i(L,M)};g.extendInterfaceMembers=function(L,M){i(L,M)};g.addMethod=function(O,N,Q,P){if(O[N]){var M=Q.length,L=O[N];O[N]=function(){if(arguments.length===M){return Q.apply(this,arguments)}return L.apply(this,arguments)}}else{O[N]=Q}};g.createJavaArray=function(P,Q){var M=null;if(typeof Q[0]==="number"){var L=0|Q[0];if(Q.length<=1){M=[];M.length=L;for(var O=0;O<L;++O){M[O]=0}}else{M=[];var R=Q.slice(1);for(var N=0;N<L;++N){M.push(g.createJavaArray(P,R))}}}return M};var C={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};(function(M){var P=("open() createOutput() createInput() BufferedReader selectFolder() dataPath() createWriter() selectOutput() beginRecord() saveStream() endRecord() selectInput() saveBytes() createReader() beginRaw() endRaw() PrintWriter delay()").split(" "),O=P.length,L,Q;function N(R){return function(){throw"Processing.js does not support "+R+"."}}while(O--){L=P[O];Q=L.replace("()","");M[Q]=N(L)}})(g);g.defineProperty(g,"screenWidth",{get:function(){return B.innerWidth}});g.defineProperty(g,"screenHeight",{get:function(){return B.innerHeight}});var k=[];var H={};var J=function(L){k.splice(H[L],1);delete H[L]};var a=function(L){if(L.externals.canvas.id===r||!L.externals.canvas.id.length){L.externals.canvas.id="__processing"+k.length}H[L.externals.canvas.id]=k.length;k.push(L)};function n(V){var O=250,ac=V.size/O,L=d.createElement("canvas");L.width=2*O;L.height=2*O;L.style.opacity=0;var U=V.getCSSDefinition(O+"px","normal"),W=L.getContext("2d");W.font=U;V.context2d=W;var aa="dbflkhyjqpg";L.width=W.measureText(aa).width;W.font=U;var R=d.createElement("div");R.style.position="absolute";R.style.opacity=0;R.style.fontFamily='"'+V.name+'"';R.style.fontSize=O+"px";R.innerHTML=aa+"<br/>"+aa;d.body.appendChild(R);var S=L.width,Z=L.height,T=Z/2;W.fillStyle="white";W.fillRect(0,0,S,Z);W.fillStyle="black";W.fillText(aa,0,T);var N=W.getImageData(0,0,S,Z).data;var X=0,Q=S*4,Y=N.length;while(++X<Y&&N[X]===255){E()}var P=o.round(X/Q);X=Y-1;while(--X>0&&N[X]===255){E()}var ab=o.round(X/Q);V.ascent=ac*(T-P);V.descent=ac*(ab-T);if(d.defaultView.getComputedStyle){var M=d.defaultView.getComputedStyle(R,null).getPropertyValue("height");M=ac*M.replace("px","");if(M>=V.size*2){V.leading=o.round(M/2)}}d.body.removeChild(R)}function F(L,M){if(L===r){L=""}this.name=L;if(M===r){M=0}this.size=M;this.glyph=false;this.ascent=0;this.descent=0;this.leading=1.2*M;var P=L.indexOf(" Italic Bold");if(P!==-1){L=L.substring(0,P)}this.style="normal";var O=L.indexOf(" Italic");if(O!==-1){L=L.substring(0,O);this.style="italic"}this.weight="normal";var N=L.indexOf(" Bold");if(N!==-1){L=L.substring(0,N);this.weight="bold"}this.family="sans-serif";if(L!==r){switch(L){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=L;break;default:this.family='"'+L+'", sans-serif';break}}this.context2d=null;n(this);this.css=this.getCSSDefinition();this.context2d.font=this.css}F.prototype.getCSSDefinition=function(N,L){if(N===r){N=this.size+"px"}if(L===r){L=this.leading+"px"}var M=[this.style,"normal",this.weight,N+"/"+L,this.family];return M.join(" ")};F.prototype.measureTextWidth=function(L){return this.context2d.measureText(L).width};F.PFontCache={};F.get=function(N,O){var M=F.PFontCache;var L=N+"/"+O;if(!M[L]){M[L]=new F(N,O)}return M[L]};F.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]};F.preloading={template:{},initialized:false,initialize:function(){var N=function(){var P="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3#yld0xg32QAB77#E777773B#E3C#I#Q77773E#Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#";var O=function(Q){return"AAAAAAAA".substr(~~Q?7-Q:6)};return P.replace(/[#237]/g,O)};var L=d.createElement("style");L.setAttribute("type","text/css");L.innerHTML='@font-face {\n  font-family: "PjsEmptyFont";\n  src: url(\'data:application/x-font-ttf;base64,'+N()+"')\n       format('truetype');\n}";d.head.appendChild(L);var M=d.createElement("span");M.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;';M.innerHTML="AAAAAAAA";d.body.appendChild(M);this.template=M;this.initialized=true},getElementWidth:function(L){return d.defaultView.getComputedStyle(L,"").getPropertyValue("width")},timeAttempted:0,pending:function(P){if(!this.initialized){this.initialize()}var N,L,O=this.getElementWidth(this.template);for(var M=0;M<this.fontList.length;M++){N=this.fontList[M];L=this.getElementWidth(N);if(this.timeAttempted<4000&&L===O){this.timeAttempted+=P;return true}else{d.body.removeChild(N);this.fontList.splice(M--,1);this.timeAttempted=0}}if(this.fontList.length===0){return false}return true},fontList:[],addedList:{},add:function(L){if(!this.initialized){this.initialize()}var P=typeof L==="object"?L.fontFace:L,O=typeof L==="object"?L.url:L;if(this.addedList[P]){return}var N=d.createElement("style");N.setAttribute("type","text/css");N.innerHTML="@font-face{\n  font-family: '"+P+"';\n  src:  url('"+O+"');\n}\n";d.head.appendChild(N);this.addedList[P]=true;var M=d.createElement("span");M.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;";M.style.fontFamily='"'+P+'", "PjsEmptyFont", fantasy';M.innerHTML="AAAAAAAA";d.body.appendChild(M);this.fontList.push(M)}};g.PFont=F;var D=this.Processing=function(ba,a6){if(!(this instanceof D)){throw"called Processing constructor as if it were a function: missing 'new'."}var ac,cU=ba===r&&a6===r;if(cU){ac=d.createElement("canvas")}else{ac=typeof ba==="string"?d.getElementById(ba):ba}if(!(ac instanceof HTMLCanvasElement)){throw"called Processing constructor without passing canvas element reference or id."}function dt(d7){D.debug("Unimplemented - "+d7)}var cV=this;cV.externals={canvas:ac,context:r,sketch:r};cV.name="Processing.js Instance";cV.use3DContext=false;cV.focused=false;cV.breakShape=false;cV.glyphTable={};cV.pmouseX=0;cV.pmouseY=0;cV.mouseX=0;cV.mouseY=0;cV.mouseButton=0;cV.mouseScroll=0;cV.mouseClicked=r;cV.mouseDragged=r;cV.mouseMoved=r;cV.mousePressed=r;cV.mouseReleased=r;cV.mouseScrolled=r;cV.mouseOver=r;cV.mouseOut=r;cV.touchStart=r;cV.touchEnd=r;cV.touchMove=r;cV.touchCancel=r;cV.key=r;cV.keyCode=r;cV.keyPressed=E;cV.keyReleased=E;cV.keyTyped=E;cV.draw=r;cV.setup=r;cV.__mousePressed=false;cV.__keyPressed=false;cV.__frameRate=60;cV.frameCount=0;cV.width=100;cV.height=100;var d4,cP,dU,bA=true,aF=true,bl=[1,1,1,1],aX=4294967295,ap=true,cd=true,cZ=[0,0,0,1],cu=4278190080,b2=true,dS=1,aw=false,dK=false,aB=true,b3=0,bI=0,cM=3,a4=0,a3=0,a2=0,aY=0,dQ=60,ay=1000/dQ,X="default",cj=ac.style.cursor,dN=20,ci=0,d2=[],aH=0,O=20,cL=false,a0=-3355444,cx=20,bR=255,bG=255,bF=255,bD=255,cY=false,aI=false,dJ=0,d1=0,cX=1,bb=null,bt=null,a1=false,dm=Date.now(),dq=dm,N=0,cD,c2,aN,aJ,bw,cc,S,dz={attributes:{},locations:{}},du,dM,bQ,bd,cI,di,aA,b1,bc,b7,ar,aE,bz,av,ae,c6,bP,cr={width:0,height:0},d0=2,dP=false,cG,aa,P,L=37,c0=0,cH=4,W="Arial",dW=12,aZ=9,dx=2,d3=14,U=F.get(W,dW),ai,cm=null,dR=false,dZ,bY=1000,af=[],dE=null,dT=[16,17,18,20,33,34,35,36,37,38,39,40,144,155,112,113,114,115,116,117,118,119,120,121,122,123,157];var ab,dl,aR,bV;if(d.defaultView&&d.defaultView.getComputedStyle){ab=parseInt(d.defaultView.getComputedStyle(ac,null)["paddingLeft"],10)||0;dl=parseInt(d.defaultView.getComputedStyle(ac,null)["paddingTop"],10)||0;aR=parseInt(d.defaultView.getComputedStyle(ac,null)["borderLeftWidth"],10)||0;bV=parseInt(d.defaultView.getComputedStyle(ac,null)["borderTopWidth"],10)||0}var dH=0;var bJ=0,bK=0,bq=[],bp=[],bo=[],ag=new e(720),bi=new e(720),cE,cz;var bT,cg,dF,aQ,al,c9,Z,da,ao=false,ch=false,cJ=60*(o.PI/180),dj=cV.width/2,dh=cV.height/2,dg=dh/o.tan(cJ/2),aW=dg/10,au=dg*10,b4=cV.width/cV.height;var a7=[],ca=[],c1=0,dL=false,Y=false,dr=true;var Q=0;var bj=[];var df=new e([0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5]);var bE=new e([0.5,0.5,0.5,0.5,-0.5,0.5,0.5,0.5,-0.5,0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5,0.5,0.5,0.5,0.5,0.5,-0.5,0.5,0.5,-0.5,-0.5,0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,-0.5,0.5,-0.5,-0.5,0.5,0.5,-0.5,0.5]);var de=new e([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0]);var aj=new e([0,0,0,0,1,0,1,1,0,1,0,0]);var ah=new e([0,0,1,0,0,1,0,0,1,0,0,1]);var bS="varying vec4 frontColor;attribute vec3 aVertex;attribute vec4 aColor;uniform mat4 uView;uniform mat4 uProjection;uniform float pointSize;void main(void) {  frontColor = aColor;  gl_PointSize = pointSize;  gl_Position = uProjection * uView * vec4(aVertex, 1.0);}";var bf="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 frontColor;void main(void){  gl_FragColor = frontColor;}";var ad="varying vec4 frontColor;attribute vec3 Vertex;attribute vec2 aTextureCoord;uniform vec4 color;uniform mat4 model;uniform mat4 view;uniform mat4 projection;uniform float pointSize;varying vec2 vTextureCoord;void main(void) {  gl_PointSize = pointSize;  frontColor = color;  gl_Position = projection * view * model * vec4(Vertex, 1.0);  vTextureCoord = aTextureCoord;}";var bX="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 frontColor;varying vec2 vTextureCoord;uniform sampler2D uSampler;uniform int picktype;void main(void){  if(picktype == 0){    gl_FragColor = frontColor;  }  else if(picktype == 1){    float alpha = texture2D(uSampler, vTextureCoord).a;    gl_FragColor = vec4(frontColor.rgb*alpha, alpha);\n  }}";var bx=/Windows/.test(navigator.userAgent);var d5="varying vec4 frontColor;attribute vec3 Vertex;attribute vec3 Normal;attribute vec4 aColor;attribute vec2 aTexture;varying   vec2 vTexture;uniform vec4 color;uniform bool usingMat;uniform vec3 specular;uniform vec3 mat_emissive;uniform vec3 mat_ambient;uniform vec3 mat_specular;uniform float shininess;uniform mat4 model;uniform mat4 view;uniform mat4 projection;uniform mat4 normalTransform;uniform int lightCount;uniform vec3 falloff;struct Light {  int type;  vec3 color;  vec3 position;  vec3 direction;  float angle;  vec3 halfVector;  float concentration;};uniform Light lights0;uniform Light lights1;uniform Light lights2;uniform Light lights3;uniform Light lights4;uniform Light lights5;uniform Light lights6;uniform Light lights7;Light getLight(int index){  if(index == 0) return lights0;  if(index == 1) return lights1;  if(index == 2) return lights2;  if(index == 3) return lights3;  if(index == 4) return lights4;  if(index == 5) return lights5;  if(index == 6) return lights6;  return lights7;}void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {  float d = length( light.position - ecPos );  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));  totalAmbient += light.color * attenuation;}void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerfactor = 0.0;  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));  if( nDotVP != 0.0 ){    powerfactor = pow( nDotVH, shininess );  }  col += light.color * nDotVP;  spec += specular * powerfactor;}void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float powerfactor;   vec3 VP = light.position - ecPos;  float d = length( VP );   VP = normalize( VP );  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0) {    powerfactor = 0.0;  }  else{    powerfactor = pow( nDotHV, shininess );  }  spec += specular * powerfactor * attenuation;  col += light.color * nDotVP * attenuation;}void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {  float spotAttenuation;  float powerfactor;  vec3 VP = light.position - ecPos;   vec3 ldir = normalize( -light.direction );  float d = length( VP );  VP = normalize( VP );  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ) );  float spotDot = dot( VP, ldir );"+(bx?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {    spotAttenuation = pow( spotDot, light.concentration );  }  else{    spotAttenuation = 0.0;  }  attenuation *= spotAttenuation;")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));  vec3 halfVector = normalize( VP - normalize(ecPos) );  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));  if( nDotVP == 0.0 ) {    powerfactor = 0.0;  }  else {    powerfactor = pow( nDotHV, shininess );  }  spec += specular * powerfactor * attenuation;  col += light.color * nDotVP * attenuation;}void main(void) {  vec3 finalAmbient = vec3( 0.0, 0.0, 0.0 );  vec3 finalDiffuse = vec3( 0.0, 0.0, 0.0 );  vec3 finalSpecular = vec3( 0.0, 0.0, 0.0 );  vec4 col = color;  if(color[0] == -1.0){    col = aColor;  }  vec3 norm = normalize(vec3( normalTransform * vec4( Normal, 0.0 ) ));  vec4 ecPos4 = view * model * vec4(Vertex,1.0);  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;  if( lightCount == 0 ) {    frontColor = col + vec4(mat_specular,1.0);  }  else {    for( int i = 0; i < 8; i++ ) {      Light l = getLight(i);      if( i >= lightCount ){        break;      }      if( l.type == 0 ) {        AmbientLight( finalAmbient, ecPos, l );      }      else if( l.type == 1 ) {        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else if( l.type == 2 ) {        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }      else {        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );      }    }   if( usingMat == false ) {     frontColor = vec4(       vec3(col) * finalAmbient +       vec3(col) * finalDiffuse +       vec3(col) * finalSpecular,       col[3] );   }   else{     frontColor = vec4(        mat_emissive +        (vec3(col) * mat_ambient * finalAmbient) +        (vec3(col) * finalDiffuse) +        (mat_specular * finalSpecular),        col[3] );    }  }  vTexture.xy = aTexture.xy;  gl_Position = projection * view * model * vec4( Vertex, 1.0 );}";var bH="#ifdef GL_ES\nprecision highp float;\n#endif\nvarying vec4 frontColor;uniform sampler2D sampler;uniform bool usingTexture;varying vec2 vTexture;void main(void){  if(usingTexture){    gl_FragColor = vec4(texture2D(sampler, vTexture.xy)) * frontColor;  }  else{    gl_FragColor = frontColor;  }}";function dY(d9,d8,eb,ea){var d7=dz.locations[d9];if(d7===r){d7=d4.getUniformLocation(d8,eb);dz.locations[d9]=d7}if(d7!==null){if(ea.length===4){d4.uniform4fv(d7,ea)}else{if(ea.length===3){d4.uniform3fv(d7,ea)}else{if(ea.length===2){d4.uniform2fv(d7,ea)}else{d4.uniform1f(d7,ea)}}}}}function dV(d9,d8,eb,ea){var d7=dz.locations[d9];if(d7===r){d7=d4.getUniformLocation(d8,eb);dz.locations[d9]=d7}if(d7!==null){if(ea.length===4){d4.uniform4iv(d7,ea)}else{if(ea.length===3){d4.uniform3iv(d7,ea)}else{if(ea.length===2){d4.uniform2iv(d7,ea)}else{d4.uniform1i(d7,ea)}}}}}function a5(eb,d9,ec,ea,d8){var d7=dz.locations[eb];if(d7===r){d7=d4.getUniformLocation(d9,ec);dz.locations[eb]=d7}if(d7!==-1){if(d8.length===16){d4.uniformMatrix4fv(d7,ea,d8)}else{if(d8.length===9){d4.uniformMatrix3fv(d7,ea,d8)}else{d4.uniformMatrix2fv(d7,ea,d8)}}}}function db(eb,d9,ec,d8,ea){var d7=dz.attributes[eb];if(d7===r){d7=d4.getAttribLocation(d9,ec);dz.attributes[eb]=d7}if(d7!==-1){d4.bindBuffer(d4.ARRAY_BUFFER,ea);d4.vertexAttribPointer(d7,d8,d4.FLOAT,false,0,0);d4.enableVertexAttribArray(d7)}}function cf(d9,d8,ea){var d7=dz.attributes[d9];if(d7===r){d7=d4.getAttribLocation(d8,ea);dz.attributes[d9]=d7}if(d7!==-1){d4.disableVertexAttribArray(d7)}}var bC=function(d9,eb,d8){var ec=d9.createShader(d9.VERTEX_SHADER);d9.shaderSource(ec,eb);d9.compileShader(ec);if(!d9.getShaderParameter(ec,d9.COMPILE_STATUS)){throw d9.getShaderInfoLog(ec)}var ea=d9.createShader(d9.FRAGMENT_SHADER);d9.shaderSource(ea,d8);d9.compileShader(ea);if(!d9.getShaderParameter(ea,d9.COMPILE_STATUS)){throw d9.getShaderInfoLog(ea)}var d7=d9.createProgram();d9.attachShader(d7,ec);d9.attachShader(d7,ea);d9.linkProgram(d7);if(!d9.getProgramParameter(d7,d9.LINK_STATUS)){throw"Error linking shaders."}return d7};var aV=function(d7,eb,d8,ea,d9){return{x:d7,y:eb,w:d8,h:ea}};var bh=aV;var b0=function(d7,eb,d8,ea,d9){return{x:d7,y:eb,w:d9?d8:d8-d7,h:d9?ea:ea-eb}};var aL=function(d7,eb,d8,ea,d9){return{x:d7-d8/2,y:eb-ea/2,w:d8,h:ea}};var dp=function(){};var bO=function(){};var by=function(){};var b9=function(){};bO.prototype=new dp;bO.prototype.constructor=bO;by.prototype=new dp;by.prototype.constructor=by;b9.prototype=new dp;b9.prototype.constructor=b9;dp.prototype.a3DOnlyFunction=E;var ck={};var bN=cV.Character=function(d7){if(typeof d7==="string"&&d7.length===1){this.code=d7.charCodeAt(0)}else{if(typeof d7==="number"){this.code=d7}else{if(d7 instanceof bN){this.code=d7}else{this.code=NaN}}}return ck[this.code]===r?ck[this.code]=this:ck[this.code]};bN.prototype.toString=function(){return String.fromCharCode(this.code)};bN.prototype.valueOf=function(){return this.code};var M=cV.PShape=function(d7){this.family=d7||0;this.visible=true;this.style=true;this.children=[];this.nameTable=[];this.params=[];this.name="";this.image=null;this.matrix=null;this.kind=null;this.close=null;this.width=null;this.height=null;this.parent=null};M.prototype={isVisible:function(){return this.visible},setVisible:function(d7){this.visible=d7},disableStyle:function(){this.style=false;for(var d8=0,d7=this.children.length;d8<d7;d8++){this.children[d8].disableStyle()}},enableStyle:function(){this.style=true;for(var d8=0,d7=this.children.length;d8<d7;d8++){this.children[d8].enableStyle()}},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(d7){this.name=d7},getName:function(){return this.name},draw:function(){if(this.visible){this.pre();this.drawImpl();this.post()}},drawImpl:function(){if(this.family===0){this.drawGroup()}else{if(this.family===1){this.drawPrimitive()}else{if(this.family===3){this.drawGeometry()}else{if(this.family===21){this.drawPath()}}}}},drawPath:function(){var d9,d8;if(this.vertices.length===0){return}cV.beginShape();if(this.vertexCodes.length===0){if(this.vertices[0].length===2){for(d9=0,d8=this.vertices.length;d9<d8;d9++){cV.vertex(this.vertices[d9][0],this.vertices[d9][1])}}else{for(d9=0,d8=this.vertices.length;d9<d8;d9++){cV.vertex(this.vertices[d9][0],this.vertices[d9][1],this.vertices[d9][2])}}}else{var d7=0;if(this.vertices[0].length===2){for(d9=0,d8=this.vertexCodes.length;d9<d8;d9++){if(this.vertexCodes[d9]===0){cV.vertex(this.vertices[d7][0],this.vertices[d7][1]);if(this.vertices[d7]["moveTo"]===true){a7[a7.length-1]["moveTo"]=true}else{if(this.vertices[d7]["moveTo"]===false){a7[a7.length-1]["moveTo"]=false}}cV.breakShape=false;d7++}else{if(this.vertexCodes[d9]===1){cV.bezierVertex(this.vertices[d7+0][0],this.vertices[d7+0][1],this.vertices[d7+1][0],this.vertices[d7+1][1],this.vertices[d7+2][0],this.vertices[d7+2][1]);d7+=3}else{if(this.vertexCodes[d9]===2){cV.curveVertex(this.vertices[d7][0],this.vertices[d7][1]);d7++}else{if(this.vertexCodes[d9]===3){cV.breakShape=true}}}}}}else{for(d9=0,d8=this.vertexCodes.length;d9<d8;d9++){if(this.vertexCodes[d9]===0){cV.vertex(this.vertices[d7][0],this.vertices[d7][1],this.vertices[d7][2]);if(this.vertices[d7]["moveTo"]===true){a7[a7.length-1]["moveTo"]=true}else{if(this.vertices[d7]["moveTo"]===false){a7[a7.length-1]["moveTo"]=false}}cV.breakShape=false}else{if(this.vertexCodes[d9]===1){cV.bezierVertex(this.vertices[d7+0][0],this.vertices[d7+0][1],this.vertices[d7+0][2],this.vertices[d7+1][0],this.vertices[d7+1][1],this.vertices[d7+1][2],this.vertices[d7+2][0],this.vertices[d7+2][1],this.vertices[d7+2][2]);d7+=3}else{if(this.vertexCodes[d9]===2){cV.curveVertex(this.vertices[d7][0],this.vertices[d7][1],this.vertices[d7][2]);d7++}else{if(this.vertexCodes[d9]===3){cV.breakShape=true}}}}}}}cV.endShape(this.close?2:1)},drawGeometry:function(){var d9,d8;cV.beginShape(this.kind);if(this.style){for(d9=0,d8=this.vertices.length;d9<d8;d9++){cV.vertex(this.vertices[d9])}}else{for(d9=0,d8=this.vertices.length;d9<d8;d9++){var d7=this.vertices[d9];if(d7[2]===0){cV.vertex(d7[0],d7[1])}else{cV.vertex(d7[0],d7[1],d7[2])}}}cV.endShape()},drawGroup:function(){for(var d8=0,d7=this.children.length;d8<d7;d8++){this.children[d8].draw()}},drawPrimitive:function(){if(this.kind===2){cV.point(this.params[0],this.params[1])}else{if(this.kind===4){if(this.params.length===4){cV.line(this.params[0],this.params[1],this.params[2],this.params[3])}else{cV.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}}else{if(this.kind===8){cV.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else{if(this.kind===16){cV.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])}else{if(this.kind===30){if(this.image!==null){cV.imageMode(0);cV.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3])}else{cV.rectMode(0);cV.rect(this.params[0],this.params[1],this.params[2],this.params[3])}}else{if(this.kind===31){cV.ellipseMode(0);cV.ellipse(this.params[0],this.params[1],this.params[2],this.params[3])}else{if(this.kind===32){cV.ellipseMode(0);cV.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else{if(this.kind===41){if(this.params.length===1){cV.box(this.params[0])}else{cV.box(this.params[0],this.params[1],this.params[2])}}else{if(this.kind===40){cV.sphere(this.params[0])}}}}}}}}}},pre:function(){if(this.matrix){cV.pushMatrix();d4.transform(this.matrix.elements[0],this.matrix.elements[3],this.matrix.elements[1],this.matrix.elements[4],this.matrix.elements[2],this.matrix.elements[5])}if(this.style){cV.pushStyle();this.styles()}},post:function(){if(this.matrix){cV.popMatrix()}if(this.style){cV.popStyle()}},styles:function(){if(this.stroke){cV.stroke(this.strokeColor);cV.strokeWeight(this.strokeWeight);cV.strokeCap(this.strokeCap);cV.strokeJoin(this.strokeJoin)}else{cV.noStroke()}if(this.fill){cV.fill(this.fillColor)}else{cV.noFill()}},getChild:function(ea){var d8,d7;if(typeof ea==="number"){return this.children[ea]}var d9;if(ea===""||this.name===ea){return this}if(this.nameTable.length>0){for(d8=0,d7=this.nameTable.length;d8<d7||d9;d8++){if(this.nameTable[d8].getName===ea){d9=this.nameTable[d8];break}}if(d9){return d9}}for(d8=0,d7=this.children.length;d8<d7;d8++){d9=this.children[d8].getChild(ea);if(d9){return d9}}return null},getChildCount:function(){return this.children.length},addChild:function(d7){this.children.push(d7);d7.parent=this;if(d7.getName()!==null){this.addName(d7.getName(),d7)}},addName:function(d8,d7){if(this.parent!==null){this.parent.addName(d8,d7)}else{this.nameTable.push([d8,d7])}},translate:function(){if(arguments.length===2){this.checkMatrix(2);this.matrix.translate(arguments[0],arguments[1])}else{this.checkMatrix(3);this.matrix.translate(arguments[0],arguments[1],0)}},checkMatrix:function(d7){if(this.matrix===null){if(d7===2){this.matrix=new cV.PMatrix2D}else{this.matrix=new cV.PMatrix3D}}else{if(d7===3&&this.matrix instanceof cV.PMatrix2D){this.matrix=new cV.PMatrix3D}}},rotateX:function(d7){this.rotate(d7,1,0,0)},rotateY:function(d7){this.rotate(d7,0,1,0)},rotateZ:function(d7){this.rotate(d7,0,0,1)},rotate:function(){if(arguments.length===1){this.checkMatrix(2);this.matrix.rotate(arguments[0])}else{this.checkMatrix(3);this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3])}},scale:function(){if(arguments.length===2){this.checkMatrix(2);this.matrix.scale(arguments[0],arguments[1])}else{if(arguments.length===3){this.checkMatrix(2);this.matrix.scale(arguments[0],arguments[1],arguments[2])}else{this.checkMatrix(2);this.matrix.scale(arguments[0])}}},resetMatrix:function(){this.checkMatrix(2);this.matrix.reset()},applyMatrix:function(d7){if(arguments.length===1){this.applyMatrix(d7.elements[0],d7.elements[1],0,d7.elements[2],d7.elements[3],d7.elements[4],0,d7.elements[5],0,0,1,0,0,0,0,1)}else{if(arguments.length===6){this.checkMatrix(2);this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)}else{if(arguments.length===16){this.checkMatrix(3);this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15])}}}}};var cq=cV.PShapeSVG=function(){cV.PShape.call(this);if(arguments.length===1){this.element=arguments[0];this.vertexCodes=[];this.vertices=[];this.opacity=1;this.stroke=false;this.strokeColor=4278190080;this.strokeWeight=1;this.strokeCap="butt";this.strokeJoin="miter";this.strokeGradient=null;this.strokeGradientPaint=null;this.strokeName=null;this.strokeOpacity=1;this.fill=true;this.fillColor=4278190080;this.fillGradient=null;this.fillGradientPaint=null;this.fillName=null;this.fillOpacity=1;if(this.element.getName()!=="svg"){throw"root is not <svg>, it's <"+this.element.getName()+">"}}else{if(arguments.length===2){if(typeof arguments[1]==="string"){if(arguments[1].indexOf(".svg")>-1){this.element=new cV.XMLElement(null,arguments[1]);this.vertexCodes=[];this.vertices=[];this.opacity=1;this.stroke=false;this.strokeColor=4278190080;this.strokeWeight=1;this.strokeCap="butt";this.strokeJoin="miter";this.strokeGradient="";this.strokeGradientPaint="";this.strokeName="";this.strokeOpacity=1;this.fill=true;this.fillColor=4278190080;this.fillGradient=null;this.fillGradientPaint=null;this.fillOpacity=1}}else{if(arguments[0]){this.element=arguments[1];this.vertexCodes=arguments[0].vertexCodes.slice();this.vertices=arguments[0].vertices.slice();this.stroke=arguments[0].stroke;this.strokeColor=arguments[0].strokeColor;this.strokeWeight=arguments[0].strokeWeight;this.strokeCap=arguments[0].strokeCap;this.strokeJoin=arguments[0].strokeJoin;this.strokeGradient=arguments[0].strokeGradient;this.strokeGradientPaint=arguments[0].strokeGradientPaint;this.strokeName=arguments[0].strokeName;this.fill=arguments[0].fill;this.fillColor=arguments[0].fillColor;this.fillGradient=arguments[0].fillGradient;this.fillGradientPaint=arguments[0].fillGradientPaint;this.fillName=arguments[0].fillName;this.strokeOpacity=arguments[0].strokeOpacity;this.fillOpacity=arguments[0].fillOpacity;this.opacity=arguments[0].opacity}}}}this.name=this.element.getStringAttribute("id");var d7=this.element.getStringAttribute("display","inline");this.visible=d7!=="none";var ec=this.element.getAttribute("transform");if(ec){this.matrix=this.parseMatrix(ec)}var d9=this.element.getStringAttribute("viewBox");if(d9!==null){var eb=d9.split(" ");this.width=eb[2];this.height=eb[3]}var d8=this.element.getStringAttribute("width");var ea=this.element.getStringAttribute("height");if(d8!==null){this.width=this.parseUnitSize(d8);this.height=this.parseUnitSize(ea)}else{if(this.width===0||this.height===0){this.width=1;this.height=1;throw"The width and/or height is not readable in the <svg> tag of this file."}}this.parseColors(this.element);this.parseChildren(this.element)};cq.prototype=new M;cq.prototype.parseMatrix=function(){function d7(d9){var d8=[];d9.replace(/\((.*?)\)/,function(){return function(ea,eb){d8=eb.replace(/,+/g," ").split(/\s+/)}}());return d8}return function(ef){this.checkMatrix(2);var d8=[];ef.replace(/\s*(\w+)\((.*?)\)/g,function(ei){d8.push(cV.trim(ei))});if(d8.length===0){return null}for(var ed=0,eb=d8.length;ed<eb;ed++){var d9=d7(d8[ed]);if(d8[ed].indexOf("matrix")!==-1){this.matrix.set(d9[0],d9[2],d9[4],d9[1],d9[3],d9[5])}else{if(d8[ed].indexOf("translate")!==-1){var ee=d9[0];var ec=d9.length===2?d9[1]:0;this.matrix.translate(ee,ec)}else{if(d8[ed].indexOf("scale")!==-1){var eh=d9[0];var eg=d9.length===2?d9[1]:d9[0];this.matrix.scale(eh,eg)}else{if(d8[ed].indexOf("rotate")!==-1){var ea=d9[0];if(d9.length===1){this.matrix.rotate(cV.radians(ea))}else{if(d9.length===3){this.matrix.translate(d9[1],d9[2]);this.matrix.rotate(cV.radians(d9[0]));this.matrix.translate(-d9[1],-d9[2])}}}else{if(d8[ed].indexOf("skewX")!==-1){this.matrix.skewX(parseFloat(d9[0]))}else{if(d8[ed].indexOf("skewY")!==-1){this.matrix.skewY(d9[0])}}}}}}}return this.matrix}}();cq.prototype.parseChildren=function(ec){var d8=ec.getChildren();var eb=new cV.PShape;for(var ea=0,d9=d8.length;ea<d9;ea++){var d7=this.parseChild(d8[ea]);if(d7){eb.addChild(d7)}}this.children.push(eb)};cq.prototype.getName=function(){return this.name};cq.prototype.parseChild=function(d9){var d8=d9.getName();var d7;if(d8==="g"){d7=new cq(this,d9)}else{if(d8==="defs"){d7=new cq(this,d9)}else{if(d8==="line"){d7=new cq(this,d9);d7.parseLine()}else{if(d8==="circle"){d7=new cq(this,d9);d7.parseEllipse(true)}else{if(d8==="ellipse"){d7=new cq(this,d9);d7.parseEllipse(false)}else{if(d8==="rect"){d7=new cq(this,d9);d7.parseRect()}else{if(d8==="polygon"){d7=new cq(this,d9);d7.parsePoly(true)}else{if(d8==="polyline"){d7=new cq(this,d9);d7.parsePoly(false)}else{if(d8==="path"){d7=new cq(this,d9);d7.parsePath()}else{if(d8==="radialGradient"){dt("PShapeSVG.prototype.parseChild, name = radialGradient")}else{if(d8==="linearGradient"){dt("PShapeSVG.prototype.parseChild, name = linearGradient")}else{if(d8==="text"){dt("PShapeSVG.prototype.parseChild, name = text")}else{if(d8==="filter"){dt("PShapeSVG.prototype.parseChild, name = filter")}else{if(d8==="mask"){dt("PShapeSVG.prototype.parseChild, name = mask")}else{E()}}}}}}}}}}}}}}return d7};cq.prototype.parsePath=function(){this.family=21;this.kind=0;var ec=[];var ew;var ev=cV.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "));if(ev===null){return}ev=cV.__toCharArray(ev);var ea=0,d9=0,eh=0,ef=0,eg=0,ee=0,en=0,em=0,d8=0,d7=0,ej=0,ei=0,el=0,ek=0,eu=0,eq=0;var eo="";var es=[];var et=false;var ed;var eb;var er,ep;while(eu<ev.length){eq=ev[eu].valueOf();if(eq>=65&&eq<=90||eq>=97&&eq<=122){er=eu;eu++;if(eu<ev.length){es=[];eq=ev[eu].valueOf();while(!(eq>=65&&eq<=90||eq>=97&&eq<=100||eq>=102&&eq<=122)&&et===false){if(eq===32){if(eo!==""){es.push(parseFloat(eo));eo=""}eu++}else{if(eq===45){if(ev[eu-1].valueOf()===101){eo+=ev[eu].toString();eu++}else{if(eo!==""){es.push(parseFloat(eo))}eo=ev[eu].toString();eu++}}else{eo+=ev[eu].toString();eu++}}if(eu===ev.length){et=true}else{eq=ev[eu].valueOf()}}}if(eo!==""){es.push(parseFloat(eo));eo=""}eb=ev[er];eq=eb.valueOf();if(eq===77){if(es.length>=2&&es.length%2===0){ea=es[0];d9=es[1];this.parsePathMoveto(ea,d9);if(es.length>2){for(er=2,ep=es.length;er<ep;er+=2){ea=es[er];d9=es[er+1];this.parsePathLineto(ea,d9)}}}}else{if(eq===109){if(es.length>=2&&es.length%2===0){ea+=es[0];d9+=es[1];this.parsePathMoveto(ea,d9);if(es.length>2){for(er=2,ep=es.length;er<ep;er+=2){ea+=es[er];d9+=es[er+1];this.parsePathLineto(ea,d9)}}}}else{if(eq===76){if(es.length>=2&&es.length%2===0){for(er=0,ep=es.length;er<ep;er+=2){ea=es[er];d9=es[er+1];this.parsePathLineto(ea,d9)}}}else{if(eq===108){if(es.length>=2&&es.length%2===0){for(er=0,ep=es.length;er<ep;er+=2){ea+=es[er];d9+=es[er+1];this.parsePathLineto(ea,d9)}}}else{if(eq===72){for(er=0,ep=es.length;er<ep;er++){ea=es[er];this.parsePathLineto(ea,d9)}}else{if(eq===104){for(er=0,ep=es.length;er<ep;er++){ea+=es[er];this.parsePathLineto(ea,d9)}}else{if(eq===86){for(er=0,ep=es.length;er<ep;er++){d9=es[er];this.parsePathLineto(ea,d9)}}else{if(eq===118){for(er=0,ep=es.length;er<ep;er++){d9+=es[er];this.parsePathLineto(ea,d9)}}else{if(eq===67){if(es.length>=6&&es.length%6===0){for(er=0,ep=es.length;er<ep;er+=6){eg=es[er];en=es[er+1];ee=es[er+2];em=es[er+3];d8=es[er+4];d7=es[er+5];this.parsePathCurveto(eg,en,ee,em,d8,d7);ea=d8;d9=d7}}}else{if(eq===99){if(es.length>=6&&es.length%6===0){for(er=0,ep=es.length;er<ep;er+=6){eg=ea+es[er];en=d9+es[er+1];ee=ea+es[er+2];em=d9+es[er+3];d8=ea+es[er+4];d7=d9+es[er+5];this.parsePathCurveto(eg,en,ee,em,d8,d7);ea=d8;d9=d7}}}else{if(eq===83){if(es.length>=4&&es.length%4===0){for(er=0,ep=es.length;er<ep;er+=4){if(ed.toLowerCase()==="c"||ed.toLowerCase()==="s"){ej=this.vertices[this.vertices.length-2][0];ei=this.vertices[this.vertices.length-2][1];el=this.vertices[this.vertices.length-1][0];ek=this.vertices[this.vertices.length-1][1];eg=el+(el-ej);en=ek+(ek-ei)}else{eg=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1]}ee=es[er];em=es[er+1];d8=es[er+2];d7=es[er+3];this.parsePathCurveto(eg,en,ee,em,d8,d7);ea=d8;d9=d7}}}else{if(eq===115){if(es.length>=4&&es.length%4===0){for(er=0,ep=es.length;er<ep;er+=4){if(ed.toLowerCase()==="c"||ed.toLowerCase()==="s"){ej=this.vertices[this.vertices.length-2][0];ei=this.vertices[this.vertices.length-2][1];el=this.vertices[this.vertices.length-1][0];ek=this.vertices[this.vertices.length-1][1];eg=el+(el-ej);en=ek+(ek-ei)}else{eg=this.vertices[this.vertices.length-1][0];en=this.vertices[this.vertices.length-1][1]}ee=ea+es[er];em=d9+es[er+1];d8=ea+es[er+2];d7=d9+es[er+3];this.parsePathCurveto(eg,en,ee,em,d8,d7);ea=d8;d9=d7}}}else{if(eq===81){if(es.length>=4&&es.length%4===0){for(er=0,ep=es.length;er<ep;er+=4){eh=es[er];ef=es[er+1];d8=es[er+2];d7=es[er+3];this.parsePathQuadto(ea,d9,eh,ef,d8,d7);ea=d8;d9=d7}}}else{if(eq===113){if(es.length>=4&&es.length%4===0){for(er=0,ep=es.length;er<ep;er+=4){eh=ea+es[er];ef=d9+es[er+1];d8=ea+es[er+2];d7=d9+es[er+3];this.parsePathQuadto(ea,d9,eh,ef,d8,d7);ea=d8;d9=d7}}}else{if(eq===84){if(es.length>=2&&es.length%2===0){for(er=0,ep=es.length;er<ep;er+=2){if(ed.toLowerCase()==="q"||ed.toLowerCase()==="t"){ej=this.vertices[this.vertices.length-2][0];ei=this.vertices[this.vertices.length-2][1];el=this.vertices[this.vertices.length-1][0];ek=this.vertices[this.vertices.length-1][1];eh=el+(el-ej);ef=ek+(ek-ei)}else{eh=ea;ef=d9}d8=es[er];d7=es[er+1];this.parsePathQuadto(ea,d9,eh,ef,d8,d7);ea=d8;d9=d7}}}else{if(eq===116){if(es.length>=2&&es.length%2===0){for(er=0,ep=es.length;er<ep;er+=2){if(ed.toLowerCase()==="q"||ed.toLowerCase()==="t"){ej=this.vertices[this.vertices.length-2][0];ei=this.vertices[this.vertices.length-2][1];el=this.vertices[this.vertices.length-1][0];ek=this.vertices[this.vertices.length-1][1];eh=el+(el-ej);ef=ek+(ek-ei)}else{eh=ea;ef=d9}d8=ea+es[er];d7=d9+es[er+1];this.parsePathQuadto(ea,d9,eh,ef,d8,d7);ea=d8;d9=d7}}}else{if(eq===90||eq===122){this.close=true}}}}}}}}}}}}}}}}}ed=eb.toString()}else{eu++}}};cq.prototype.parsePathQuadto=function(d9,eb,d7,ec,d8,ea){if(this.vertices.length>0){this.parsePathCode(1);this.parsePathVertex(d9+(d7-d9)*2/3,eb+(ec-eb)*2/3);this.parsePathVertex(d8+(d7-d8)*2/3,ea+(ec-ea)*2/3);this.parsePathVertex(d8,ea)}else{throw"Path must start with M/m"}};cq.prototype.parsePathCurveto=function(ea,ec,d8,eb,d7,d9){if(this.vertices.length>0){this.parsePathCode(1);this.parsePathVertex(ea,ec);this.parsePathVertex(d8,eb);this.parsePathVertex(d7,d9)}else{throw"Path must start with M/m"}};cq.prototype.parsePathLineto=function(d8,d7){if(this.vertices.length>0){this.parsePathCode(0);this.parsePathVertex(d8,d7);this.vertices[this.vertices.length-1]["moveTo"]=false}else{throw"Path must start with M/m"}};cq.prototype.parsePathMoveto=function(d8,d7){if(this.vertices.length>0){this.parsePathCode(3)}this.parsePathCode(0);this.parsePathVertex(d8,d7);this.vertices[this.vertices.length-1]["moveTo"]=true};cq.prototype.parsePathVertex=function(d7,d9){var d8=[];d8[0]=d7;d8[1]=d9;this.vertices.push(d8)};cq.prototype.parsePathCode=function(d7){this.vertexCodes.push(d7)};cq.prototype.parsePoly=function(eb){this.family=21;this.close=eb;var d8=cV.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "));if(d8!==null){var d7=d8.split(" ");if(d7.length%2===0){for(var ea=0,d9=d7.length;ea<d9;ea++){var ec=[];ec[0]=d7[ea];ec[1]=d7[++ea];this.vertices.push(ec)}}else{throw"Error parsing polygon points: odd number of coordinates provided"}}};cq.prototype.parseRect=function(){this.kind=30;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("x");this.params[1]=this.element.getFloatAttribute("y");this.params[2]=this.element.getFloatAttribute("width");this.params[3]=this.element.getFloatAttribute("height");if(this.params[2]<0||this.params[3]<0){throw"svg error: negative width or height found while parsing <rect>"}};cq.prototype.parseEllipse=function(d9){this.kind=31;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("cx")|0;this.params[1]=this.element.getFloatAttribute("cy")|0;var d8,d7;if(d9){d8=d7=this.element.getFloatAttribute("r");if(d8<0){throw"svg error: negative radius found while parsing <circle>"}}else{d8=this.element.getFloatAttribute("rx");d7=this.element.getFloatAttribute("ry");if(d8<0||d7<0){throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"}}this.params[0]-=d8;this.params[1]-=d7;this.params[2]=d8*2;this.params[3]=d7*2};cq.prototype.parseLine=function(){this.kind=4;this.family=1;this.params=[];this.params[0]=this.element.getFloatAttribute("x1");this.params[1]=this.element.getFloatAttribute("y1");this.params[2]=this.element.getFloatAttribute("x2");this.params[3]=this.element.getFloatAttribute("y2")};cq.prototype.parseColors=function(d9){if(d9.hasAttribute("opacity")){this.setOpacity(d9.getAttribute("opacity"))}if(d9.hasAttribute("stroke")){this.setStroke(d9.getAttribute("stroke"))}if(d9.hasAttribute("stroke-width")){this.setStrokeWeight(d9.getAttribute("stroke-width"))}if(d9.hasAttribute("stroke-linejoin")){this.setStrokeJoin(d9.getAttribute("stroke-linejoin"))}if(d9.hasAttribute("stroke-linecap")){this.setStrokeCap(d9.getStringAttribute("stroke-linecap"))}if(d9.hasAttribute("fill")){this.setFill(d9.getStringAttribute("fill"))}if(d9.hasAttribute("style")){var ec=d9.getStringAttribute("style");var ea=ec.toString().split(";");for(var d8=0,d7=ea.length;d8<d7;d8++){var eb=cV.trim(ea[d8].split(":"));if(eb[0]==="fill"){this.setFill(eb[1])}else{if(eb[0]==="fill-opacity"){this.setFillOpacity(eb[1])}else{if(eb[0]==="stroke"){this.setStroke(eb[1])}else{if(eb[0]==="stroke-width"){this.setStrokeWeight(eb[1])}else{if(eb[0]==="stroke-linecap"){this.setStrokeCap(eb[1])}else{if(eb[0]==="stroke-linejoin"){this.setStrokeJoin(eb[1])}else{if(eb[0]==="stroke-opacity"){this.setStrokeOpacity(eb[1])}else{if(eb[0]==="opacity"){this.setOpacity(eb[1])}}}}}}}}}}};cq.prototype.setFillOpacity=function(d7){this.fillOpacity=parseFloat(d7);this.fillColor=this.fillOpacity*255<<24|this.fillColor&16777215};cq.prototype.setFill=function(d7){var d8=this.fillColor&4278190080;if(d7==="none"){this.fill=false}else{if(d7.indexOf("#")===0){this.fill=true;if(d7.length===4){d7=d7.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.fillColor=d8|parseInt(d7.substring(1),16)&16777215}else{if(d7.indexOf("rgb")===0){this.fill=true;this.fillColor=d8|this.parseRGB(d7)}else{if(d7.indexOf("url(#")===0){this.fillName=d7.substring(5,d7.length-1)}else{if(C[d7]){this.fill=true;this.fillColor=d8|parseInt(C[d7].substring(1),16)&16777215}}}}}};cq.prototype.setOpacity=function(d7){this.strokeColor=parseFloat(d7)*255<<24|this.strokeColor&16777215;this.fillColor=parseFloat(d7)*255<<24|this.fillColor&16777215};cq.prototype.setStroke=function(d7){var d8=this.strokeColor&4278190080;if(d7==="none"){this.stroke=false}else{if(d7.charAt(0)==="#"){this.stroke=true;if(d7.length===4){d7=d7.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.strokeColor=d8|parseInt(d7.substring(1),16)&16777215}else{if(d7.indexOf("rgb")===0){this.stroke=true;this.strokeColor=d8|this.parseRGB(d7)}else{if(d7.indexOf("url(#")===0){this.strokeName=d7.substring(5,d7.length-1)}else{if(C[d7]){this.stroke=true;this.strokeColor=d8|parseInt(C[d7].substring(1),16)&16777215}}}}}};cq.prototype.setStrokeWeight=function(d7){this.strokeWeight=this.parseUnitSize(d7)};cq.prototype.setStrokeJoin=function(d7){if(d7==="miter"){this.strokeJoin="miter"}else{if(d7==="round"){this.strokeJoin="round"}else{if(d7==="bevel"){this.strokeJoin="bevel"}}}};cq.prototype.setStrokeCap=function(d7){if(d7==="butt"){this.strokeCap="butt"}else{if(d7==="round"){this.strokeCap="round"}else{if(d7==="square"){this.strokeCap="square"}}}};cq.prototype.setStrokeOpacity=function(d7){this.strokeOpacity=parseFloat(d7);this.strokeColor=this.strokeOpacity*255<<24|this.strokeColor&16777215};cq.prototype.parseRGB=function(d8){var d9=d8.substring(d8.indexOf("(")+1,d8.indexOf(")"));var d7=d9.split(", ");return d7[0]<<16|d7[1]<<8|d7[2]};cq.prototype.parseUnitSize=function(d8){var d7=d8.length-2;if(d7<0){return d8}if(d8.indexOf("pt")===d7){return parseFloat(d8.substring(0,d7))*1.25}if(d8.indexOf("pc")===d7){return parseFloat(d8.substring(0,d7))*15}if(d8.indexOf("mm")===d7){return parseFloat(d8.substring(0,d7))*3.543307}if(d8.indexOf("cm")===d7){return parseFloat(d8.substring(0,d7))*35.43307}if(d8.indexOf("in")===d7){return parseFloat(d8.substring(0,d7))*90}if(d8.indexOf("px")===d7){return parseFloat(d8.substring(0,d7))}return parseFloat(d8)};cV.shape=function(d9,d8,eb,ea,d7){if(arguments.length>=1&&arguments[0]!==null){if(d9.isVisible()){cV.pushMatrix();if(Q===3){if(arguments.length===5){cV.translate(d8-ea/2,eb-d7/2);cV.scale(ea/d9.getWidth(),d7/d9.getHeight())}else{if(arguments.length===3){cV.translate(d8-d9.getWidth()/2,-d9.getHeight()/2)}else{cV.translate(-d9.getWidth()/2,-d9.getHeight()/2)}}}else{if(Q===0){if(arguments.length===5){cV.translate(d8,eb);cV.scale(ea/d9.getWidth(),d7/d9.getHeight())}else{if(arguments.length===3){cV.translate(d8,eb)}}}else{if(Q===1){if(arguments.length===5){ea-=d8;d7-=eb;cV.translate(d8,eb);cV.scale(ea/d9.getWidth(),d7/d9.getHeight())}else{if(arguments.length===3){cV.translate(d8,eb)}}}}}d9.draw();if(arguments.length===1&&Q===3||arguments.length>1){cV.popMatrix()}}}};cV.shapeMode=function(d7){Q=d7};cV.loadShape=function(d7){if(arguments.length===1){if(d7.indexOf(".svg")>-1){return new cq(null,d7)}}return null};var cS=function(eb,ea,d7,d8,d9){this.fullName=eb||"";this.name=ea||"";this.namespace=d7||"";this.value=d8;this.type=d9};cS.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(d7){this.value=d7}};var b8=cV.XMLElement=function(){this.attributes=[];this.children=[];this.fullName=null;this.name=null;this.namespace="";this.content=null;this.parent=null;this.lineNr="";this.systemID="";this.type="ELEMENT";if(arguments.length===4){this.fullName=arguments[0]||"";if(arguments[1]){this.name=arguments[1]}else{var d7=this.fullName.indexOf(":");if(d7>=0){this.name=this.fullName.substring(d7+1)}else{this.name=this.fullName}}this.namespace=arguments[1];this.lineNr=arguments[3];this.systemID=arguments[2]}else{if(arguments.length===2&&arguments[1].indexOf(".")>-1){this.parse(arguments[arguments.length-1])}else{if(arguments.length===1&&typeof arguments[0]==="string"){this.parse(arguments[0])}}}};b8.prototype={parse:function(d7){var d9;try{var eb=d7.substring(d7.length-4);if(eb===".xml"||eb===".svg"){d7=u(d7)}d9=(new DOMParser).parseFromString(d7,"text/xml");var d8=d9.documentElement;if(d8){this.parseChildrenRecursive(null,d8)}else{throw"Error loading document"}return this}catch(ea){throw ea}},parseChildrenRecursive:function(ef,ed){var ec,d8,ee,eb,ea,d7;if(!ef){this.fullName=ed.localName;this.name=ed.nodeName;ec=this}else{ec=new b8(ed.localName,ed.nodeName,"","");ec.parent=ef}if(ed.nodeType===3&&ed.textContent!==""){return this.createPCDataElement(ed.textContent)}for(eb=0,ea=ed.attributes.length;eb<ea;eb++){ee=ed.attributes[eb];d8=new cS(ee.getname,ee.nodeName,ee.namespaceURI,ee.nodeValue,ee.nodeType);ec.attributes.push(d8)}for(eb=0,ea=ed.childNodes.length;eb<ea;eb++){var d9=ed.childNodes[eb];if(d9.nodeType===1||d9.nodeType===3){d7=ec.parseChildrenRecursive(ec,d9);if(d7!==null){ec.children.push(d7)}}}return ec},createElement:function(){if(arguments.length===2){return new b8(arguments[0],arguments[1],null,null)}return new b8(arguments[0],arguments[1],arguments[2],arguments[3])},createPCDataElement:function(d7){if(d7.replace(/^\s+$/g,"")===""){return null}var d8=new b8;d8.content=d7;d8.type="TEXT";return d8},hasAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])!==null}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])!==null}},equals:function(ec){if(!(ec instanceof b8)){return false}var d9,d8;if(this.name!==ec.getLocalName()){return false}if(this.attributes.length!==ec.getAttributeCount()){return false}if(this.attributes.length!==ec.attributes.length){return false}var eg,ee,d7,ed,ef;for(d9=0,d8=this.attributes.length;d9<d8;d9++){eg=this.attributes[d9].getName();ee=this.attributes[d9].getNamespace();ef=ec.findAttribute(eg,ee);if(ef===null){return false}if(this.attributes[d9].getValue()!==ef.getValue()){return false}if(this.attributes[d9].getType()!==ef.getType()){return false}}if(this.children.length!==ec.getChildCount()){return false}if(this.children.length>0){var eb,ea;for(d9=0,d8=this.children.length;d9<d8;d9++){eb=this.getChild(d9);ea=ec.getChild(d9);if(!eb.equals(ea)){return false}}return true}return this.content===ec.content},getContent:function(){if(this.type==="TEXT"){return this.content}var d7=this.children;if(d7.length===1&&d7[0].type==="TEXT"){return d7[0].content}return null},getAttribute:function(){var d7;if(arguments.length===2){d7=this.findAttribute(arguments[0]);if(d7){return d7.getValue()}return arguments[1]}else{if(arguments.length===1){d7=this.findAttribute(arguments[0]);if(d7){return d7.getValue()}return null}else{if(arguments.length===3){d7=this.findAttribute(arguments[0],arguments[1]);if(d7){return d7.getValue()}return arguments[2]}}}},getStringAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(d7){return this.getStringAttribute(d7)},getFloatAttribute:function(){if(arguments.length===1){return parseFloat(this.getAttribute(arguments[0],0))}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(d7){return this.getFloatAttribute(d7)},getIntAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0],0)}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(d7){return this.getIntAttribute(d7)},hasChildren:function(){return this.children.length>0},addChild:function(d7){if(d7!==null){d7.parent=this;this.children.push(d7)}},insertChild:function(d9,d7){if(d9){if(d9.getLocalName()===null&&!this.hasChildren()){var d8=this.children[this.children.length-1];if(d8.getLocalName()===null){d8.setContent(d8.getContent()+d9.getContent());return}}d9.parent=this;this.children.splice(d7,0,d9)}},getChild:function(){if(typeof arguments[0]==="number"){return this.children[arguments[0]]}if(arguments[0].indexOf("/")!==-1){this.getChildRecursive(arguments[0].split("/"),0);return null}var d7,ea;for(var d9=0,d8=this.getChildCount();d9<d8;d9++){d7=this.getChild(d9);ea=d7.getName();if(ea!==null&&ea===arguments[0]){return d7}}return null},getChildren:function(){if(arguments.length===1){if(typeof arguments[0]==="number"){return this.getChild(arguments[0])}if(arguments[0].indexOf("/")!==-1){return this.getChildrenRecursive(arguments[0].split("/"),0)}var eb=[];var d7,ea;for(var d9=0,d8=this.getChildCount();d9<d8;d9++){d7=this.getChild(d9);ea=d7.getName();if(ea!==null&&ea===arguments[0]){eb.push(d7)}}return eb}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(d8,ec){var d7,eb;for(var ea=0,d9=this.getChildCount();ea<d9;ea++){d7=this.getChild(ea);eb=d7.getName();if(eb!==null&&eb===d8[ec]){if(ec===d8.length-1){return d7}ec+=1;return d7.getChildRecursive(d8,ec)}}return null},getChildrenRecursive:function(d7,eb){if(eb===d7.length-1){return this.getChildren(d7[eb])}var ea=this.getChildren(d7[eb]);var d9=[];for(var d8=0;d8<ea.length;d8++){d9=d9.concat(ea[d8].getChildrenRecursive(d7,eb+1))}return d9},isLeaf:function(){return !this.hasChildren()},listChildren:function(){var d7=[];for(var d9=0,d8=this.children.length;d9<d8;d9++){d7.push(this.getChild(d9).getName())}return d7},removeAttribute:function(d8,ea){this.namespace=ea||"";for(var d9=0,d7=this.attributes.length;d9<d7;d9++){if(this.attributes[d9].getName()===d8&&this.attributes[d9].getNamespace()===this.namespace){this.attributes.splice(d9,1);break}}},removeChild:function(d9){if(d9){for(var d8=0,d7=this.children.length;d8<d7;d8++){if(this.children[d8].equals(d9)){this.children.splice(d8,1);break}}}},removeChildAtIndex:function(d7){if(this.children.length>d7){this.children.splice(d7,1)}},findAttribute:function(d8,ea){this.namespace=ea||"";for(var d9=0,d7=this.attributes.length;d9<d7;d9++){if(this.attributes[d9].getName()===d8&&this.attributes[d9].getNamespace()===this.namespace){return this.attributes[d9]}}return null},setAttribute:function(){var d7;if(arguments.length===3){var d9=arguments[0].indexOf(":");var d8=arguments[0].substring(d9+1);d7=this.findAttribute(d8,arguments[1]);if(d7){d7.setValue(arguments[2])}else{d7=new cS(arguments[0],d8,arguments[1],arguments[2],"CDATA");this.attributes.push(d7)}}else{d7=this.findAttribute(arguments[0]);if(d7){d7.setValue(arguments[1])}else{d7=new cS(arguments[0],arguments[0],null,arguments[1],"CDATA");this.attributes.push(d7)}}},setString:function(d7,d8){this.setAttribute(d7,d8)},setInt:function(d7,d8){this.setAttribute(d7,d8)},setFloat:function(d7,d8){this.setAttribute(d7,d8)},setContent:function(d7){if(this.children.length>0){D.debug("Tried to set content for XMLElement with children")}this.content=d7},setName:function(){if(arguments.length===1){this.name=arguments[0];this.fullName=arguments[0];this.namespace=null}else{var d7=arguments[0].indexOf(":");if(arguments[1]===null||d7<0){this.name=arguments[0]}else{this.name=arguments[0].substring(d7+1)}this.fullName=arguments[0];this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if(this.type==="TEXT"){return this.content}var d9=(this.namespace!==""&&this.namespace!==this.name?this.namespace+":":"")+this.name;var ea="<"+d9;var d8,eb;for(d8=0;d8<this.attributes.length;d8++){var d7=this.attributes[d8];ea+=" "+d7.getName()+'="'+d7.getValue()+'"'}if(this.children.length===0){if(this.content===""){ea+="/>"}else{ea+=">"+this.content+"</"+d9+">"}}else{ea+=">";for(eb=0;eb<this.children.length;eb++){ea+=this.children[eb].toString()}ea+="</"+d9+">"}return ea}};b8.parse=function(d8){var d7=new b8;d7.parse(d8);return d7};var cl=function(ea){var d7=0;for(var d8=0;d8<ea.length;d8++){if(d8!==0){d7=o.max(d7,o.abs(ea[d8]))}else{d7=o.abs(ea[d8])}}var d9=(d7+"").indexOf(".");if(d9===0){d9=1}else{if(d9===-1){d9=(d7+"").length}}return d9};var aT=cV.PMatrix2D=function(){if(arguments.length===0){this.reset()}else{if(arguments.length===1&&arguments[0] instanceof aT){this.set(arguments[0].array())}else{if(arguments.length===6){this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}};aT.prototype={set:function(){if(arguments.length===6){var d7=arguments;this.set([d7[0],d7[1],d7[2],d7[3],d7[4],d7[5]])}else{if(arguments.length===1&&arguments[0] instanceof aT){this.elements=arguments[0].array()}else{if(arguments.length===1&&arguments[0] instanceof Array){this.elements=arguments[0].slice()}}}},get:function(){var d7=new aT;d7.set(this.elements);return d7},reset:function(){this.set([1,0,0,0,1,0])},array:function aD(){return this.elements.slice()},translate:function(d8,d7){this.elements[2]=d8*this.elements[0]+d7*this.elements[1]+this.elements[2];this.elements[5]=d8*this.elements[3]+d7*this.elements[4]+this.elements[5]},invTranslate:function(d8,d7){this.translate(-d8,-d7)},transpose:function(){},mult:function(d8,d9){var d7,ea;if(d8 instanceof y){d7=d8.x;ea=d8.y;if(!d9){d9=new y}}else{if(d8 instanceof Array){d7=d8[0];ea=d8[1];if(!d9){d9=[]}}}if(d9 instanceof Array){d9[0]=this.elements[0]*d7+this.elements[1]*ea+this.elements[2];d9[1]=this.elements[3]*d7+this.elements[4]*ea+this.elements[5]}else{if(d9 instanceof y){d9.x=this.elements[0]*d7+this.elements[1]*ea+this.elements[2];d9.y=this.elements[3]*d7+this.elements[4]*ea+this.elements[5];d9.z=0}}return d9},multX:function(d7,d8){return d7*this.elements[0]+d8*this.elements[1]+this.elements[2]},multY:function(d7,d8){return d7*this.elements[3]+d8*this.elements[4]+this.elements[5]},skewX:function(d7){this.apply(1,0,1,d7,0,0)},skewY:function(d7){this.apply(1,0,1,0,d7,0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var ec=this.determinant();if(o.abs(ec)>-2147483648){var d8=this.elements[0];var ed=this.elements[1];var eb=this.elements[2];var ea=this.elements[3];var d9=this.elements[4];var d7=this.elements[5];this.elements[0]=d9/ec;this.elements[3]=-ea/ec;this.elements[1]=-ed/ec;this.elements[4]=d8/ec;this.elements[2]=(ed*d7-d9*eb)/ec;this.elements[5]=(ea*eb-d8*d7)/ec;return true}return false},scale:function(d8,d7){if(d8&&!d7){d7=d8}if(d8&&d7){this.elements[0]*=d8;this.elements[1]*=d7;this.elements[3]*=d8;this.elements[4]*=d7}},invScale:function(d8,d7){if(d8&&!d7){d7=d8}this.scale(1/d8,1/d7)},apply:function(){var d9;if(arguments.length===1&&arguments[0] instanceof aT){d9=arguments[0].array()}else{if(arguments.length===6){d9=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){d9=arguments[0]}}}var d7=[0,0,this.elements[2],0,0,this.elements[5]];var ea=0;for(var eb=0;eb<2;eb++){for(var d8=0;d8<3;d8++,ea++){d7[ea]+=this.elements[eb*3+0]*d9[d8+0]+this.elements[eb*3+1]*d9[d8+3]}}this.elements=d7.slice()},preApply:function(){var d8;if(arguments.length===1&&arguments[0] instanceof aT){d8=arguments[0].array()}else{if(arguments.length===6){d8=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){d8=arguments[0]}}}var d7=[0,0,d8[2],0,0,d8[5]];d7[2]=d8[2]+this.elements[2]*d8[0]+this.elements[5]*d8[1];d7[5]=d8[5]+this.elements[2]*d8[3]+this.elements[5]*d8[4];d7[0]=this.elements[0]*d8[0]+this.elements[3]*d8[1];d7[3]=this.elements[0]*d8[3]+this.elements[3]*d8[4];d7[1]=this.elements[1]*d8[0]+this.elements[4]*d8[1];d7[4]=this.elements[1]*d8[3]+this.elements[4]*d8[4];this.elements=d7.slice()},rotate:function(d9){var eb=o.cos(d9);var d7=o.sin(d9);var ea=this.elements[0];var d8=this.elements[1];this.elements[0]=eb*ea+d7*d8;this.elements[1]=-d7*ea+eb*d8;ea=this.elements[3];d8=this.elements[4];this.elements[3]=eb*ea+d7*d8;this.elements[4]=-d7*ea+eb*d8},rotateZ:function(d7){this.rotate(d7)},invRotateZ:function(d7){this.rotateZ(d7-o.PI)},print:function(){var d8=cl(this.elements);var d7=""+cV.nfs(this.elements[0],d8,4)+" "+cV.nfs(this.elements[1],d8,4)+" "+cV.nfs(this.elements[2],d8,4)+"\n"+cV.nfs(this.elements[3],d8,4)+" "+cV.nfs(this.elements[4],d8,4)+" "+cV.nfs(this.elements[5],d8,4)+"\n\n";cV.println(d7)}};var aM=cV.PMatrix3D=function(){this.reset()};aM.prototype={set:function(){if(arguments.length===16){this.elements=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof aM){this.elements=arguments[0].array()}else{if(arguments.length===1&&arguments[0] instanceof Array){this.elements=arguments[0].slice()}}}},get:function(){var d7=new aM;d7.set(this.elements);return d7},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function aD(){return this.elements.slice()},translate:function(d8,d7,d9){if(d9===r){d9=0}this.elements[3]+=d8*this.elements[0]+d7*this.elements[1]+d9*this.elements[2];this.elements[7]+=d8*this.elements[4]+d7*this.elements[5]+d9*this.elements[6];this.elements[11]+=d8*this.elements[8]+d7*this.elements[9]+d9*this.elements[10];this.elements[15]+=d8*this.elements[12]+d7*this.elements[13]+d9*this.elements[14]},transpose:function(){var d7=this.elements[4];this.elements[4]=this.elements[1];this.elements[1]=d7;d7=this.elements[8];this.elements[8]=this.elements[2];this.elements[2]=d7;d7=this.elements[6];this.elements[6]=this.elements[9];this.elements[9]=d7;d7=this.elements[3];this.elements[3]=this.elements[12];this.elements[12]=d7;d7=this.elements[7];this.elements[7]=this.elements[13];this.elements[13]=d7;d7=this.elements[11];this.elements[11]=this.elements[14];this.elements[14]=d7},mult:function(d9,ea){var d7,ec,eb,d8;if(d9 instanceof y){d7=d9.x;ec=d9.y;eb=d9.z;d8=1;if(!ea){ea=new y}}else{if(d9 instanceof Array){d7=d9[0];ec=d9[1];eb=d9[2];d8=d9[3]||1;if(!ea||ea.length!==3&&ea.length!==4){ea=[0,0,0]}}}if(ea instanceof Array){if(ea.length===3){ea[0]=this.elements[0]*d7+this.elements[1]*ec+this.elements[2]*eb+this.elements[3];ea[1]=this.elements[4]*d7+this.elements[5]*ec+this.elements[6]*eb+this.elements[7];ea[2]=this.elements[8]*d7+this.elements[9]*ec+this.elements[10]*eb+this.elements[11]}else{if(ea.length===4){ea[0]=this.elements[0]*d7+this.elements[1]*ec+this.elements[2]*eb+this.elements[3]*d8;ea[1]=this.elements[4]*d7+this.elements[5]*ec+this.elements[6]*eb+this.elements[7]*d8;ea[2]=this.elements[8]*d7+this.elements[9]*ec+this.elements[10]*eb+this.elements[11]*d8;ea[3]=this.elements[12]*d7+this.elements[13]*ec+this.elements[14]*eb+this.elements[15]*d8}}}if(ea instanceof y){ea.x=this.elements[0]*d7+this.elements[1]*ec+this.elements[2]*eb+this.elements[3];ea.y=this.elements[4]*d7+this.elements[5]*ec+this.elements[6]*eb+this.elements[7];ea.z=this.elements[8]*d7+this.elements[9]*ec+this.elements[10]*eb+this.elements[11]}return ea},preApply:function(){var d9;if(arguments.length===1&&arguments[0] instanceof aM){d9=arguments[0].array()}else{if(arguments.length===16){d9=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){d9=arguments[0]}}}var d7=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var ea=0;for(var eb=0;eb<4;eb++){for(var d8=0;d8<4;d8++,ea++){d7[ea]+=this.elements[d8+0]*d9[eb*4+0]+this.elements[d8+4]*d9[eb*4+1]+this.elements[d8+8]*d9[eb*4+2]+this.elements[d8+12]*d9[eb*4+3]}}this.elements=d7.slice()},apply:function(){var d9;if(arguments.length===1&&arguments[0] instanceof aM){d9=arguments[0].array()}else{if(arguments.length===16){d9=Array.prototype.slice.call(arguments)}else{if(arguments.length===1&&arguments[0] instanceof Array){d9=arguments[0]}}}var d7=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];var ea=0;for(var eb=0;eb<4;eb++){for(var d8=0;d8<4;d8++,ea++){d7[ea]+=this.elements[eb*4+0]*d9[d8+0]+this.elements[eb*4+1]*d9[d8+4]+this.elements[eb*4+2]*d9[d8+8]+this.elements[eb*4+3]*d9[d8+12]}}this.elements=d7.slice()},rotate:function(eb,d7,ed,ea){if(!ed){this.rotateZ(eb)}else{var ec=cV.cos(eb);var d9=cV.sin(eb);var d8=1-ec;this.apply(d8*d7*d7+ec,d8*d7*ed-d9*ea,d8*d7*ea+d9*ed,0,d8*d7*ed+d9*ea,d8*ed*ed+ec,d8*ed*ea-d9*d7,0,d8*d7*ea-d9*ed,d8*ed*ea+d9*d7,d8*ea*ea+ec,0,0,0,0,1)}},invApply:function(){if(Z===r){Z=new aM}var d7=arguments;Z.set(d7[0],d7[1],d7[2],d7[3],d7[4],d7[5],d7[6],d7[7],d7[8],d7[9],d7[10],d7[11],d7[12],d7[13],d7[14],d7[15]);if(!Z.invert()){return false}this.preApply(Z);return true},rotateX:function(d8){var d9=cV.cos(d8);var d7=cV.sin(d8);this.apply([1,0,0,0,0,d9,-d7,0,0,d7,d9,0,0,0,0,1])},rotateY:function(d8){var d9=cV.cos(d8);var d7=cV.sin(d8);this.apply([d9,0,d7,0,0,1,0,0,-d7,0,d9,0,0,0,0,1])},rotateZ:function(d8){var d9=o.cos(d8);var d7=o.sin(d8);this.apply([d9,-d7,0,0,d7,d9,0,0,0,0,1,0,0,0,0,1])},scale:function(d9,d8,d7){if(d9&&!d8&&!d7){d8=d7=d9}else{if(d9&&d8&&!d7){d7=1}}if(d9&&d8&&d7){this.elements[0]*=d9;this.elements[1]*=d8;this.elements[2]*=d7;this.elements[4]*=d9;this.elements[5]*=d8;this.elements[6]*=d7;this.elements[8]*=d9;this.elements[9]*=d8;this.elements[10]*=d7;this.elements[12]*=d9;this.elements[13]*=d8;this.elements[14]*=d7}},skewX:function(d8){var d7=o.tan(d8);this.apply(1,d7,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(d8){var d7=o.tan(d8);this.apply(1,0,0,0,d7,1,0,0,0,0,1,0,0,0,0,1)},multX:function(d7,ea,d9,d8){if(!d9){return this.elements[0]*d7+this.elements[1]*ea+this.elements[3]}if(!d8){return this.elements[0]*d7+this.elements[1]*ea+this.elements[2]*d9+this.elements[3]}return this.elements[0]*d7+this.elements[1]*ea+this.elements[2]*d9+this.elements[3]*d8},multY:function(d7,ea,d9,d8){if(!d9){return this.elements[4]*d7+this.elements[5]*ea+this.elements[7]}if(!d8){return this.elements[4]*d7+this.elements[5]*ea+this.elements[6]*d9+this.elements[7]}return this.elements[4]*d7+this.elements[5]*ea+this.elements[6]*d9+this.elements[7]*d8},multZ:function(d7,ea,d9,d8){if(!d8){return this.elements[8]*d7+this.elements[9]*ea+this.elements[10]*d9+this.elements[11]}return this.elements[8]*d7+this.elements[9]*ea+this.elements[10]*d9+this.elements[11]*d8},multW:function(d7,ea,d9,d8){if(!d8){return this.elements[12]*d7+this.elements[13]*ea+this.elements[14]*d9+this.elements[15]}return this.elements[12]*d7+this.elements[13]*ea+this.elements[14]*d9+this.elements[15]*d8},invert:function(){var eg=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4];var ef=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4];var ee=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4];var ed=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5];var ec=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5];var eb=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6];var ea=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12];var d9=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12];var d8=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12];var el=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13];var ej=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13];var ei=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14];var ek=eg*ei-ef*ej+ee*el+ed*d8-ec*d9+eb*ea;if(o.abs(ek)<=1e-9){return false}var eh=[];eh[0]=+this.elements[5]*ei-this.elements[6]*ej+this.elements[7]*el;eh[4]=-this.elements[4]*ei+this.elements[6]*d8-this.elements[7]*d9;eh[8]=+this.elements[4]*ej-this.elements[5]*d8+this.elements[7]*ea;eh[12]=-this.elements[4]*el+this.elements[5]*d9-this.elements[6]*ea;eh[1]=-this.elements[1]*ei+this.elements[2]*ej-this.elements[3]*el;eh[5]=+this.elements[0]*ei-this.elements[2]*d8+this.elements[3]*d9;eh[9]=-this.elements[0]*ej+this.elements[1]*d8-this.elements[3]*ea;eh[13]=+this.elements[0]*el-this.elements[1]*d9+this.elements[2]*ea;eh[2]=+this.elements[13]*eb-this.elements[14]*ec+this.elements[15]*ed;eh[6]=-this.elements[12]*eb+this.elements[14]*ee-this.elements[15]*ef;eh[10]=+this.elements[12]*ec-this.elements[13]*ee+this.elements[15]*eg;eh[14]=-this.elements[12]*ed+this.elements[13]*ef-this.elements[14]*eg;eh[3]=-this.elements[9]*eb+this.elements[10]*ec-this.elements[11]*ed;eh[7]=+this.elements[8]*eb-this.elements[10]*ee+this.elements[11]*ef;eh[11]=-this.elements[8]*ec+this.elements[9]*ee-this.elements[11]*eg;eh[15]=+this.elements[8]*ed-this.elements[9]*ef+this.elements[10]*eg;var d7=1/ek;eh[0]*=d7;eh[1]*=d7;eh[2]*=d7;eh[3]*=d7;eh[4]*=d7;eh[5]*=d7;eh[6]*=d7;eh[7]*=d7;eh[8]*=d7;eh[9]*=d7;eh[10]*=d7;eh[11]*=d7;eh[12]*=d7;eh[13]*=d7;eh[14]*=d7;eh[15]*=d7;this.elements=eh.slice();return true},toString:function(){var d8="";for(var d7=0;d7<15;d7++){d8+=this.elements[d7]+", "}d8+=this.elements[15];return d8},print:function(){var d8=cl(this.elements);var d7=""+cV.nfs(this.elements[0],d8,4)+" "+cV.nfs(this.elements[1],d8,4)+" "+cV.nfs(this.elements[2],d8,4)+" "+cV.nfs(this.elements[3],d8,4)+"\n"+cV.nfs(this.elements[4],d8,4)+" "+cV.nfs(this.elements[5],d8,4)+" "+cV.nfs(this.elements[6],d8,4)+" "+cV.nfs(this.elements[7],d8,4)+"\n"+cV.nfs(this.elements[8],d8,4)+" "+cV.nfs(this.elements[9],d8,4)+" "+cV.nfs(this.elements[10],d8,4)+" "+cV.nfs(this.elements[11],d8,4)+"\n"+cV.nfs(this.elements[12],d8,4)+" "+cV.nfs(this.elements[13],d8,4)+" "+cV.nfs(this.elements[14],d8,4)+" "+cV.nfs(this.elements[15],d8,4)+"\n\n";cV.println(d7)},invTranslate:function(d8,d7,d9){this.preApply(1,0,0,-d8,0,1,0,-d7,0,0,1,-d9,0,0,0,1)},invRotateX:function(d8){var d9=o.cos(-d8);var d7=o.sin(-d8);this.preApply([1,0,0,0,0,d9,-d7,0,0,d7,d9,0,0,0,0,1])},invRotateY:function(d8){var d9=o.cos(-d8);var d7=o.sin(-d8);this.preApply([d9,0,d7,0,0,1,0,0,-d7,0,d9,0,0,0,0,1])},invRotateZ:function(d8){var d9=o.cos(-d8);var d7=o.sin(-d8);this.preApply([d9,-d7,0,0,d7,d9,0,0,0,0,1,0,0,0,0,1])},invScale:function(d7,d9,d8){this.preApply([1/d7,0,0,0,0,1/d9,0,0,0,0,1/d8,0,0,0,0,1])}};var T=cV.PMatrixStack=function(){this.matrixStack=[]};T.prototype.load=function(){var d7=dU.$newPMatrix();if(arguments.length===1){d7.set(arguments[0])}else{d7.set(arguments)}this.matrixStack.push(d7)};bO.prototype.$newPMatrix=function(){return new aT};by.prototype.$newPMatrix=function(){return new aM};T.prototype.push=function(){this.matrixStack.push(this.peek())};T.prototype.pop=function(){return this.matrixStack.pop()};T.prototype.peek=function(){var d7=dU.$newPMatrix();d7.set(this.matrixStack[this.matrixStack.length-1]);return d7};T.prototype.mult=function(d7){this.matrixStack[this.matrixStack.length-1].apply(d7)};cV.split=function(d8,d7){return d8.split(d7)};cV.splitTokens=function(ea,d9){if(arguments.length===1){d9="\n\t\r\u000c "}d9="["+d9+"]";var d8=[];var d7=0;var eb=ea.search(d9);while(eb>=0){if(eb===0){ea=ea.substring(1)}else{d8[d7]=ea.substring(0,eb);d7++;ea=ea.substring(eb)}eb=ea.search(d9)}if(ea.length>0){d8[d7]=ea}if(d8.length===0){d8=r}return d8};cV.append=function(d8,d7){d8[d8.length]=d7;return d8};cV.concat=function(d8,d7){return d8.concat(d7)};cV.sort=function(ec,ea){var d8=[];if(ec.length>0){var eb=ea>0?ea:ec.length;for(var d9=0;d9<eb;d9++){d8.push(ec[d9])}if(typeof ec[0]==="string"){d8.sort()}else{d8.sort(function(ee,ed){return ee-ed})}if(ea>0){for(var d7=d8.length;d7<ec.length;d7++){d8.push(ec[d7])}}}return d8};cV.splice=function(eb,ea,d8){if(ea.length===0){return eb}if(ea instanceof Array){for(var d9=0,d7=d8;d9<ea.length;d7++,d9++){eb.splice(d7,0,ea[d9])}}else{eb.splice(d8,0,ea)}return eb};cV.subset=function(ea,d9,d8){var d7=d8!==r?d9+d8:ea.length;return ea.slice(d9,d7)};cV.join=function(d8,d7){return d8.join(d7)};cV.shorten=function(ea){var d8=[];var d7=ea.length;for(var d9=0;d9<d7;d9++){d8[d9]=ea[d9]}d8.pop();return d8};cV.expand=function(d9,ea){var d8=d9.slice(0),d7=ea||d9.length*2;d8.length=d7;return d8};cV.arrayCopy=function(){var ed,eb=0,d9,d8=0,ec;if(arguments.length===2){ed=arguments[0];d9=arguments[1];ec=ed.length}else{if(arguments.length===3){ed=arguments[0];d9=arguments[1];ec=arguments[2]}else{if(arguments.length===5){ed=arguments[0];eb=arguments[1];d9=arguments[2];d8=arguments[3];ec=arguments[4]}}}for(var ea=eb,d7=d8;ea<ec+eb;ea++,d7++){if(d9[d7]!==r){d9[d7]=ed[ea]}else{throw"array index out of bounds exception"}}};cV.reverse=function(d7){return d7.reverse()};cV.mix=function(d8,d7,d9){return d8+((d7-d8)*d9>>8)};cV.peg=function(d7){return d7<0?0:d7>255?255:d7};cV.modes=function(){var ec=4278190080,d9=16711680,d8=65280,eb=255,ea=o.min,d7=o.max;function ed(ei,el,eh,eq,es,er,ej,en,em,ef,eg){var ep=ea(((ei&4278190080)>>>24)+el,255)<<24;var ee=eh+((em-eh)*el>>8);ee=(ee<0?0:ee>255?255:ee)<<16;var ek=eq+((ef-eq)*el>>8);ek=(ek<0?0:ek>255?255:ek)<<8;var eo=es+((eg-es)*el>>8);eo=eo<0?0:eo>255?255:eo;return ep|ee|ek|eo}return{replace:function(ef,ee){return ee},blend:function(eg,ef){var ei=(ef&ec)>>>24,ee=eg&d9,ek=eg&d8,em=eg&eb,el=ef&d9,eh=ef&d8,ej=ef&eb;return ea(((eg&ec)>>>24)+ei,255)<<24|ee+((el-ee)*ei>>8)&d9|ek+((eh-ek)*ei>>8)&d8|em+((ej-em)*ei>>8)&eb},add:function(ef,ee){var eg=(ee&ec)>>>24;return ea(((ef&ec)>>>24)+eg,255)<<24|ea((ef&d9)+((ee&d9)>>8)*eg,d9)&d9|ea((ef&d8)+((ee&d8)>>8)*eg,d8)&d8|ea((ef&eb)+((ee&eb)*eg>>8),eb)},subtract:function(ef,ee){var eg=(ee&ec)>>>24;return ea(((ef&ec)>>>24)+eg,255)<<24|d7((ef&d9)-((ee&d9)>>8)*eg,d8)&d9|d7((ef&d8)-((ee&d8)>>8)*eg,eb)&d8|d7((ef&eb)-((ee&eb)*eg>>8),0)},lightest:function(ef,ee){var eg=(ee&ec)>>>24;return ea(((ef&ec)>>>24)+eg,255)<<24|d7(ef&d9,((ee&d9)>>8)*eg)&d9|d7(ef&d8,((ee&d8)>>8)*eg)&d8|d7(ef&eb,(ee&eb)*eg>>8)},darkest:function(eg,ef){var ei=(ef&ec)>>>24,ee=eg&d9,ek=eg&d8,em=eg&eb,el=ea(eg&d9,((ef&d9)>>8)*ei),eh=ea(eg&d8,((ef&d8)>>8)*ei),ej=ea(eg&eb,(ef&eb)*ei>>8);return ea(((eg&ec)>>>24)+ei,255)<<24|ee+((el-ee)*ei>>8)&d9|ek+((eh-ek)*ei>>8)&d8|em+((ej-em)*ei>>8)&eb},difference:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=eg>eo?eg-eo:eo-eg,ee=en>ej?en-ej:ej-en,ef=ep>em?ep-em:em-ep;return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},exclusion:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=eg+eo-(eg*eo>>7),ee=en+ej-(en*ej>>7),ef=ep+em-(ep*em>>7);return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},multiply:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=eg*eo>>8,ee=en*ej>>8,ef=ep*em>>8;return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},screen:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=255-((255-eg)*(255-eo)>>8),ee=255-((255-en)*(255-ej)>>8),ef=255-((255-ep)*(255-em)>>8);return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},hard_light:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=eo<128?eg*eo>>7:255-((255-eg)*(255-eo)>>7),ee=ej<128?en*ej>>7:255-((255-en)*(255-ej)>>7),ef=em<128?ep*em>>7:255-((255-ep)*(255-em)>>7);return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},soft_light:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=(eg*eo>>7)+(eg*eg>>8)-(eg*eg*eo>>15),ee=(en*ej>>7)+(en*en>>8)-(en*en*ej>>15),ef=(ep*em>>7)+(ep*ep>>8)-(ep*ep*em>>15);return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},overlay:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb,el=eg<128?eg*eo>>7:255-((255-eg)*(255-eo)>>7),ee=en<128?en*ej>>7:255-((255-en)*(255-ej)>>7),ef=ep<128?ep*em>>7:255-((255-ep)*(255-em)>>7);return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},dodge:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb;var el=255;if(eo!==255){el=(eg<<8)/(255-eo);el=el<0?0:el>255?255:el}var ee=255;if(ej!==255){ee=(en<<8)/(255-ej);ee=ee<0?0:ee>255?255:ee}var ef=255;if(em!==255){ef=(ep<<8)/(255-em);ef=ef<0?0:ef>255?255:ef}return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)},burn:function(ei,eh){var ek=(eh&ec)>>>24,eg=(ei&d9)>>16,en=(ei&d8)>>8,ep=ei&eb,eo=(eh&d9)>>16,ej=(eh&d8)>>8,em=eh&eb;var el=0;if(eo!==0){el=(255-eg<<8)/eo;el=255-(el<0?0:el>255?255:el)}var ee=0;if(ej!==0){ee=(255-en<<8)/ej;ee=255-(ee<0?0:ee>255?255:ee)}var ef=0;if(em!==0){ef=(255-ep<<8)/em;ef=255-(ef<0?0:ef>255?255:ef)}return ed(ei,ek,eg,en,ep,eo,ej,em,el,ee,ef)}}}();function dD(ec,eb,d9,d8){var d7,ea,ee,ef;if(cX===3){var ed=cV.color.toRGB(ec,eb,d9);d7=ed[0];ea=ed[1];ee=ed[2]}else{d7=o.round(255*(ec/bG));ea=o.round(255*(eb/bF));ee=o.round(255*(d9/bD))}ef=o.round(255*(d8/bR));d7=d7<0?0:d7;ea=ea<0?0:ea;ee=ee<0?0:ee;ef=ef<0?0:ef;d7=d7>255?255:d7;ea=ea>255?255:ea;ee=ee>255?255:ee;ef=ef>255?255:ef;return ef<<24&4278190080|d7<<16&16711680|ea<<8&65280|ee&255}function dG(d7,d9){var d8;if(d7&4278190080){d8=o.round(255*(d9/bR));d8=d8>255?255:d8;d8=d8<0?0:d8;return d7-(d7&4278190080)+(d8<<24&4278190080)}if(cX===1){return dD(d7,d7,d7,d9)}if(cX===3){return dD(0,0,d7/bG*bD,d9)}}function dI(d7){if(d7<=bG&&d7>=0){if(cX===1){return dD(d7,d7,d7,bR)}if(cX===3){return dD(0,0,d7/bG*bD,bR)}}if(d7){if(d7>2147483647){d7-=4294967296}return d7}}cV.color=function(d7,ea,d9,d8){if(d7!==r&&ea!==r&&d9!==r&&d8!==r){return dD(d7,ea,d9,d8)}if(d7!==r&&ea!==r&&d9!==r){return dD(d7,ea,d9,bR)}if(d7!==r&&ea!==r){return dG(d7,ea)}if(typeof d7==="number"){return dI(d7)}return dD(bG,bF,bD,bR)};cV.color.toString=function(d7){return"rgba("+((d7>>16)&255)+","+((d7>>8)&255)+","+(d7&255)+","+((d7>>24)&255)/255+")"};cV.color.toInt=function(ea,d9,d7,d8){return d8<<24&4278190080|ea<<16&16711680|d9<<8&65280|d7&255};cV.color.toArray=function(d7){return[(d7>>16)&255,(d7>>8)&255,d7&255,(d7>>24)&255]};cV.color.toGLArray=function(d7){return[((d7>>16)&255)/255,((d7>>8)&255)/255,(d7&255)/255,((d7&4278190080)>>>24)/255]};cV.color.toRGB=function(d9,ef,ec){d9=d9>bG?bG:d9;ef=ef>bF?bF:ef;ec=ec>bD?bD:ec;d9=d9/bG*360;ef=ef/bF*100;ec=ec/bD*100;var ee=o.round(ec/100*255);if(ef===0){return[ee,ee,ee]}var ea=d9%360;var eb=ea%60;var d8=o.round(ec*(100-ef)/10000*255);var d7=o.round(ec*(6000-ef*eb)/600000*255);var ed=o.round(ec*(6000-ef*(60-eb))/600000*255);switch(o.floor(ea/60)){case 0:return[ee,ed,d8];case 1:return[d7,ee,d8];case 2:return[d8,ee,ed];case 3:return[d8,d7,ee];case 4:return[ed,d8,ee];case 5:return[ee,d8,d7]}};function aP(ee){var ed,ec,d8;ed=((ee>>16)&255)/255;ec=((ee>>8)&255)/255;d8=(ee&255)/255;var d7=cV.max(cV.max(ed,ec),d8),ea=cV.min(cV.min(ed,ec),d8),d9,eb;if(ea===d7){return[0,0,d7*bD]}eb=(d7-ea)/d7;if(ed===d7){d9=(ec-d8)/(d7-ea)}else{if(ec===d7){d9=2+(d8-ed)/(d7-ea)}else{d9=4+(ed-ec)/(d7-ea)}}d9/=6;if(d9<0){d9+=1}else{if(d9>1){d9-=1}}return[d9*bG,eb*bF,d7*bD]}cV.brightness=function(d7){return aP(d7)[2]};cV.saturation=function(d7){return aP(d7)[1]};cV.hue=function(d7){return aP(d7)[0]};cV.red=function(d7){return((d7>>16)&255)/255*bG};cV.green=function(d7){return((d7>>8)&255)/255*bF};cV.blue=function(d7){return(d7&255)/255*bD};cV.alpha=function(d7){return((d7>>24)&255)/255*bR};cV.lerpColor=function(ej,ei,ec){var eh,en,eo,ep,el,d7,ed,er,ek,es,eb,eq;var ef,ee,d8,em,eg;var ea=cV.color(ej);var d9=cV.color(ei);if(cX===3){ef=aP(ea);er=((ea>>24)&255)/bR;ee=aP(d9);eq=((d9>>24)&255)/bR;em=cV.lerp(ef[0],ee[0],ec);eg=cV.lerp(ef[1],ee[1],ec);eo=cV.lerp(ef[2],ee[2],ec);d8=cV.color.toRGB(em,eg,eo);ep=cV.lerp(er,eq,ec)*bR;return ep<<24&4278190080|(d8[0]&255)<<16|(d8[1]&255)<<8|d8[2]&255}el=(ea>>16)&255;d7=(ea>>8)&255;ed=ea&255;er=((ea>>24)&255)/bR;ek=(d9>>16)&255;es=(d9>>8)&255;eb=d9&255;eq=((d9&4278190080)>>>24)/bR;eh=cV.lerp(el,ek,ec)|0;en=cV.lerp(d7,es,ec)|0;eo=cV.lerp(ed,eb,ec)|0;ep=cV.lerp(er,eq,ec)*bR;return ep<<24&4278190080|eh<<16&16711680|en<<8&65280|eo&255};cV.colorMode=function(){cX=arguments[0];if(arguments.length>1){bG=arguments[1];bF=arguments[2]||arguments[1];bD=arguments[3]||arguments[1];bR=arguments[4]||arguments[1]}};cV.blendColor=function(d8,d7,d9){if(d9===0){return cV.modes.replace(d8,d7)}else{if(d9===1){return cV.modes.blend(d8,d7)}else{if(d9===2){return cV.modes.add(d8,d7)}else{if(d9===4){return cV.modes.subtract(d8,d7)}else{if(d9===8){return cV.modes.lightest(d8,d7)}else{if(d9===16){return cV.modes.darkest(d8,d7)}else{if(d9===32){return cV.modes.difference(d8,d7)}else{if(d9===64){return cV.modes.exclusion(d8,d7)}else{if(d9===128){return cV.modes.multiply(d8,d7)}else{if(d9===256){return cV.modes.screen(d8,d7)}else{if(d9===1024){return cV.modes.hard_light(d8,d7)}else{if(d9===2048){return cV.modes.soft_light(d8,d7)}else{if(d9===512){return cV.modes.overlay(d8,d7)}else{if(d9===4096){return cV.modes.dodge(d8,d7)}else{if(d9===8192){return cV.modes.burn(d8,d7)}}}}}}}}}}}}}}}};function aC(){d4.save()}function cO(){d4.restore();b2=true;ap=true}cV.printMatrix=function(){dF.print()};bO.prototype.translate=function(d7,d8){dF.translate(d7,d8);aQ.invTranslate(d7,d8);d4.translate(d7,d8)};by.prototype.translate=function(d7,d9,d8){dF.translate(d7,d9,d8);aQ.invTranslate(d7,d9,d8)};bO.prototype.scale=function(d7,d8){dF.scale(d7,d8);aQ.invScale(d7,d8);d4.scale(d7,d8||d7)};by.prototype.scale=function(d7,d9,d8){dF.scale(d7,d9,d8);aQ.invScale(d7,d9,d8)};bO.prototype.pushMatrix=function(){al.load(dF);c9.load(aQ);aC()};by.prototype.pushMatrix=function(){al.load(dF);c9.load(aQ)};bO.prototype.popMatrix=function(){dF.set(al.pop());aQ.set(c9.pop());cO()};by.prototype.popMatrix=function(){dF.set(al.pop());aQ.set(c9.pop())};bO.prototype.resetMatrix=function(){dF.reset();aQ.reset();d4.setTransform(1,0,0,1,0,0)};by.prototype.resetMatrix=function(){dF.reset();aQ.reset()};dp.prototype.applyMatrix=function(){var d7=arguments;dF.apply(d7[0],d7[1],d7[2],d7[3],d7[4],d7[5],d7[6],d7[7],d7[8],d7[9],d7[10],d7[11],d7[12],d7[13],d7[14],d7[15]);aQ.invApply(d7[0],d7[1],d7[2],d7[3],d7[4],d7[5],d7[6],d7[7],d7[8],d7[9],d7[10],d7[11],d7[12],d7[13],d7[14],d7[15])};bO.prototype.applyMatrix=function(){var d7=arguments;for(var d8=d7.length;d8<16;d8++){d7[d8]=0}d7[10]=d7[15]=1;dp.prototype.applyMatrix.apply(this,d7)};cV.rotateX=function(d7){dF.rotateX(d7);aQ.invRotateX(d7)};bO.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."};by.prototype.rotateZ=function(d7){dF.rotateZ(d7);aQ.invRotateZ(d7)};cV.rotateY=function(d7){dF.rotateY(d7);aQ.invRotateY(d7)};bO.prototype.rotate=function(d7){dF.rotateZ(d7);aQ.invRotateZ(d7);d4.rotate(d7)};by.prototype.rotate=function(d7){cV.rotateZ(d7)};cV.pushStyle=function(){aC();cV.pushMatrix();var d7={doFill:aF,currentFillColor:aX,doStroke:cd,currentStrokeColor:cu,curTint:bb,curRectMode:bI,curColorMode:cX,colorModeX:bG,colorModeZ:bD,colorModeY:bF,colorModeA:bR,curTextFont:U,horizontalTextAlignment:L,verticalTextAlignment:c0,textMode:cH,curFontName:W,curTextSize:dW,curTextAscent:aZ,curTextDescent:dx,curTextLeading:d3};bj.push(d7)};cV.popStyle=function(){var d7=bj.pop();if(d7){cO();cV.popMatrix();aF=d7.doFill;aX=d7.currentFillColor;cd=d7.doStroke;cu=d7.currentStrokeColor;bb=d7.curTint;bI=d7.curRectmode;cX=d7.curColorMode;bG=d7.colorModeX;bD=d7.colorModeZ;bF=d7.colorModeY;bR=d7.colorModeA;U=d7.curTextFont;W=d7.curFontName;dW=d7.curTextSize;L=d7.horizontalTextAlignment;c0=d7.verticalTextAlignment;cH=d7.textMode;aZ=d7.curTextAscent;dx=d7.curTextDescent;d3=d7.curTextLeading}else{throw"Too many popStyle() without enough pushStyle()"}};cV.year=function(){return(new Date).getFullYear()};cV.month=function(){return(new Date).getMonth()+1};cV.day=function(){return(new Date).getDate()};cV.hour=function(){return(new Date).getHours()};cV.minute=function(){return(new Date).getMinutes()};cV.second=function(){return(new Date).getSeconds()};cV.millis=function(){return Date.now()-dm};function cs(){var d7=(Date.now()-dq)/1000;N++;var d8=N/d7;if(d7>0.5){dq=Date.now();N=0;cV.__frameRate=d8}cV.frameCount++}bO.prototype.redraw=function(){cs();d4.lineWidth=dS;var d7=cV.pmouseX,d8=cV.pmouseY;cV.pmouseX=dJ;cV.pmouseY=d1;aC();cV.draw();cO();dJ=cV.mouseX;d1=cV.mouseY;cV.pmouseX=d7;cV.pmouseY=d8};by.prototype.redraw=function(){cs();var d7=cV.pmouseX,d8=cV.pmouseY;cV.pmouseX=dJ;cV.pmouseY=d1;d4.clear(d4.DEPTH_BUFFER_BIT);dz={attributes:{},locations:{}};cV.noLights();cV.lightFalloff(1,0,0);cV.shininess(1);cV.ambient(255,255,255);cV.specular(0,0,0);cV.emissive(0,0,0);cV.camera();cV.draw();dJ=cV.mouseX;d1=cV.mouseY;cV.pmouseX=d7;cV.pmouseY=d8};cV.noLoop=function(){aB=false;aw=false;clearInterval(b3);cP.onPause()};cV.loop=function(){if(aw){return}dq=Date.now();N=0;b3=B.setInterval(function(){try{cP.onFrameStart();cV.redraw();cP.onFrameEnd()}catch(d7){B.clearInterval(b3);throw d7}},ay);aB=true;aw=true;cP.onLoop()};cV.frameRate=function(d7){dQ=d7;ay=1000/dQ;if(aB){cV.noLoop();cV.loop()}};var at=[];function bM(d9,d8,d7){if(d9.addEventListener){d9.addEventListener(d8,d7,false)}else{d9.attachEvent("on"+d8,d7)}at.push({elem:d9,type:d8,fn:d7})}function dd(d7){var ea=d7.elem,d9=d7.type,d8=d7.fn;if(ea.removeEventListener){ea.removeEventListener(d9,d8,false)}else{if(ea.detachEvent){ea.detachEvent("on"+d9,d8)}}}cV.exit=function(){B.clearInterval(b3);J(cV.externals.canvas.id);for(var d8 in D.lib){if(D.lib.hasOwnProperty(d8)){if(D.lib[d8].hasOwnProperty("detach")){D.lib[d8].detach(cV)}}}var d7=at.length;while(d7--){dd(at[d7])}cP.onExit()};cV.cursor=function(){if(arguments.length>1||arguments.length===1&&arguments[0] instanceof cV.PImage){var ea=arguments[0],d7,ec;if(arguments.length>=3){d7=arguments[1];ec=arguments[2];if(d7<0||ec<0||ec>=ea.height||d7>=ea.width){throw"x and y must be non-negative and less than the dimensions of the image"}}else{d7=ea.width>>>1;ec=ea.height>>>1}var d8=ea.toDataURL();var d9='url("'+d8+'") '+d7+" "+ec+", default";X=ac.style.cursor=d9}else{if(arguments.length===1){var eb=arguments[0];X=ac.style.cursor=eb}else{X=ac.style.cursor=cj}}};cV.noCursor=function(){X=ac.style.cursor=z.NOCURSOR};cV.link=function(d7,d8){if(d8!==r){B.open(d7,d8)}else{B.location=d7}};cV.beginDraw=E;cV.endDraw=E;bO.prototype.toImageData=function(d7,ea,d8,d9){d7=d7!==r?d7:0;ea=ea!==r?ea:0;d8=d8!==r?d8:cV.width;d9=d9!==r?d9:cV.height;return d4.getImageData(d7,ea,d8,d9)};by.prototype.toImageData=function(ef,ee,eg,eb){ef=ef!==r?ef:0;ee=ee!==r?ee:0;eg=eg!==r?eg:cV.width;eb=eb!==r?eb:cV.height;var ed=d.createElement("canvas"),eh=ed.getContext("2d"),ea=eh.createImageData(eg,eb),d8=new b(eg*eb*4);d4.readPixels(ef,ee,eg,eb,d4.RGBA,d4.UNSIGNED_BYTE,d8);for(var d9=0,ec=d8.length,d7=ea.data;d9<ec;d9++){d7[d9]=d8[(eb-1-o.floor(d9/4/eg))*eg*4+d9%(eg*4)]}return ea};cV.status=function(d7){B.status=d7};cV.binary=function(d8,d9){var ea;if(d9>0){ea=d9}else{if(d8 instanceof bN){ea=16;d8|=0}else{ea=32;while(ea>1&&!(d8>>>ea-1&1)){ea--}}}var d7="";while(ea>0){d7+=d8>>>--ea&1?"1":"0"}return d7};cV.unbinary=function(d8){var ea=d8.length-1,d9=1,d7=0;while(ea>=0){var eb=d8[ea--];if(eb!=="0"&&eb!=="1"){throw"the value passed into unbinary was not an 8 bit binary number"}if(eb==="1"){d7+=d9}d9<<=1}return d7};function cW(ej,eh,eb,em,ed,ek){var d9=ej<0?eb:eh;var d8=ed===0;var ei=ed===r||ed<0?0:ed;var eg=o.abs(ej);if(d8){ei=1;eg*=10;while(o.abs(o.round(eg)-eg)>0.000001&&ei<7){++ei;eg*=10}}else{if(ei!==0){eg*=o.pow(10,ei)}}var ea,ef=eg*2;if(o.floor(eg)===eg){ea=eg}else{if(o.floor(ef)===ef){var d7=o.floor(eg);ea=d7+d7%2}else{ea=o.round(eg)}}var ec="";var el=em+ei;while(el>0||ea>0){el--;ec=""+ea%10+ec;ea=o.floor(ea/10)}if(ek!==r){var ee=ec.length-3-ei;while(ee>0){ec=ec.substring(0,ee)+ek+ec.substring(ee);ee-=3}}if(ei>0){return d9+ec.substring(0,ec.length-ei)+"."+ec.substring(ec.length-ei,ec.length)}return d9+ec}function an(ed,ec,d7,ef,d8,ee){if(ed instanceof Array){var ea=[];for(var d9=0,eb=ed.length;d9<eb;d9++){ea.push(cW(ed[d9],ec,d7,ef,d8,ee))}return ea}return cW(ed,ec,d7,ef,d8,ee)}cV.nf=function(d9,d7,d8){return an(d9,"","-",d7,d8)};cV.nfs=function(d9,d7,d8){return an(d9," ","-",d7,d8)};cV.nfp=function(d9,d7,d8){return an(d9,"+","-",d7,d8)};cV.nfc=function(d9,d7,d8){return an(d9,"","-",d7,d8,",")};var aK=function(d9,d8){d8=d8===r||d8===null?d8=8:d8;if(d9<0){d9=4294967295+d9+1}var d7=Number(d9).toString(16).toUpperCase();while(d7.length<d8){d7="0"+d7}if(d7.length>=d8){d7=d7.substring(d7.length-d8,d7.length)}return d7};cV.hex=function(d8,d7){if(arguments.length===1){if(d8 instanceof bN){d7=4}else{d7=8}}return aK(d8,d7)};function dB(d7){var d8=parseInt("0x"+d7,16);if(d8>2147483647){d8-=4294967296}return d8}cV.unhex=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(dB(d9[d8]))}return d7}return dB(d9)};cV.loadStrings=function(d8){if(localStorage[d8]){return localStorage[d8].split("\n")}var d7=u(d8);if(typeof d7!=="string"||d7===""){return[]}d7=d7.replace(/(\r\n?)/g,"\n").replace(/\n$/,"");return d7.split("\n")};cV.saveStrings=function(d8,d7){localStorage[d8]=d7.join("\n")};cV.loadBytes=function(d9){var d8=u(d9);var d7=[];for(var ea=0;ea<d8.length;ea++){d7.push(d8.charCodeAt(ea))}return d7};function a8(d7){return Array.prototype.slice.call(d7,1)}cV.matchAll=function(d8,d7){var ea=[],d9;var eb=new RegExp(d7,"g");while((d9=eb.exec(d8))!==null){ea.push(d9);if(d9[0].length===0){++eb.lastIndex}}return ea.length>0?ea:null};cV.__contains=function(d8,d7){if(typeof d8!=="string"){return d8.contains.apply(d8,a8(arguments))}return d8!==null&&d7!==null&&typeof d7==="string"&&d8.indexOf(d7)>-1};cV.__replaceAll=function(d7,d9,d8){if(typeof d7!=="string"){return d7.replaceAll.apply(d7,a8(arguments))}return d7.replace(new RegExp(d9,"g"),d8)};cV.__replaceFirst=function(d7,d9,d8){if(typeof d7!=="string"){return d7.replaceFirst.apply(d7,a8(arguments))}return d7.replace(new RegExp(d9,""),d8)};cV.__replace=function(ea,ec,eb){if(typeof ea!=="string"){return ea.replace.apply(ea,a8(arguments))}if(ec instanceof RegExp){return ea.replace(ec,eb)}if(typeof ec!=="string"){ec=ec.toString()}if(ec===""){return ea}var d9=ea.indexOf(ec);if(d9<0){return ea}var d8=0,d7="";do{d7+=ea.substring(d8,d9)+eb;d8=d9+ec.length}while((d9=ea.indexOf(ec,d8))>=0);return d7+ea.substring(d8)};cV.__equals=function(d8,d7){if(d8.equals instanceof Function){return d8.equals.apply(d8,a8(arguments))}return d8.valueOf()===d7.valueOf()};cV.__equalsIgnoreCase=function(d8,d7){if(typeof d8!=="string"){return d8.equalsIgnoreCase.apply(d8,a8(arguments))}return d8.toLowerCase()===d7.toLowerCase()};cV.__toCharArray=function(d9){if(typeof d9!=="string"){return d9.toCharArray.apply(d9,a8(arguments))}var ea=[];for(var d8=0,d7=d9.length;d8<d7;++d8){ea[d8]=new bN(d9.charAt(d8))}return ea};cV.__split=function(ea,eb,d8){if(typeof ea!=="string"){return ea.split.apply(ea,a8(arguments))}var ed=new RegExp(eb);if(d8===r||d8<1){return ea.split(ed)}var d7=[],ec=ea,ee;while((ee=ec.search(ed))!==-1&&d7.length<d8-1){var d9=ed.exec(ec).toString();d7.push(ec.substring(0,ee));ec=ec.substring(ee+d9.length)}if(ee!==-1||ec!==""){d7.push(ec)}return d7};cV.__codePointAt=function(ea,d8){var eb=ea.charCodeAt(d8),d9,d7;if(55296<=eb&&eb<=56319){d9=eb;d7=ea.charCodeAt(d8+1);return(d9-55296)*1024+(d7-56320)+65536}return eb};cV.match=function(d8,d7){return d8.match(d7)};cV.__startsWith=function(d7,d9,d8){if(typeof d7!=="string"){return d7.startsWith.apply(d7,a8(arguments))}d8=d8||0;if(d8<0||d8>d7.length){return false}return d9===""||d9===d7?true:d7.indexOf(d9)===d8};cV.__endsWith=function(d8,d9){if(typeof d8!=="string"){return d8.endsWith.apply(d8,a8(arguments))}var d7=d9?d9.length:0;return d9===""||d9===d8?true:d8.indexOf(d9)===d8.length-d7};cV.__hashCode=function(d7){if(d7.hashCode instanceof Function){return d7.hashCode.apply(d7,a8(arguments))}return h(d7)};cV.__printStackTrace=function(d7){cV.println("Exception: "+d7.toString())};var d6=[];cV.println=function(d7){var d8=d6.length;if(d8){D.logger.log(d6.join(""));d6.length=0}if(arguments.length===0&&d8===0){D.logger.log("")}else{if(arguments.length!==0){D.logger.log(d7)}}};cV.print=function(d7){d6.push(d7)};cV.str=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(d9[d8].toString()+"")}return d7}return d9.toString()+""};cV.trim=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(d9[d8].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))}return d7}return d9.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")};function aO(d7){if(typeof d7==="number"){return d7!==0}if(typeof d7==="boolean"){return d7}if(typeof d7==="string"){return d7.toLowerCase()==="true"}if(d7 instanceof bN){return d7.code===49||d7.code===84||d7.code===116}}cV.parseBoolean=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(aO(d9[d8]))}return d7}return aO(d9)};cV.parseByte=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(0-(d9[d8]&128)|d9[d8]&127)}return d7}return 0-(d9&128)|d9&127};cV.parseChar=function(d9){if(typeof d9==="number"){return new bN(String.fromCharCode(d9&65535))}if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(new bN(String.fromCharCode(d9[d8]&65535)))}return d7}throw"char() may receive only one argument of type int, byte, int[], or byte[]."};function cN(d7){if(typeof d7==="number"){return d7}if(typeof d7==="boolean"){return d7?1:0}if(typeof d7==="string"){return parseFloat(d7)}if(d7 instanceof bN){return d7.code}}cV.parseFloat=function(d9){if(d9 instanceof Array){var d7=[];for(var d8=0;d8<d9.length;d8++){d7.push(cN(d9[d8]))}return d7}return cN(d9)};function ak(d9,d7){if(typeof d9==="number"){return d9&4294967295}if(typeof d9==="boolean"){return d9?1:0}if(typeof d9==="string"){var d8=parseInt(d9,d7||10);return d8&4294967295}if(d9 instanceof bN){return d9.code}}cV.parseInt=function(ea,d9){if(ea instanceof Array){var d7=[];for(var d8=0;d8<ea.length;d8++){if(typeof ea[d8]==="string"&&!/^\s*[+\-]?\d+\s*$/.test(ea[d8])){d7.push(0)}else{d7.push(ak(ea[d8],d9))}}return d7}return ak(ea,d9)};cV.__int_cast=function(d7){return 0|d7};cV.__instanceof=function(d9,d8){if(typeof d8!=="function"){throw"Function is expected as type argument for instanceof operator"}if(typeof d9==="string"){return d8===Object||d8===String}if(d9 instanceof d8){return true}if(typeof d9!=="object"||d9===null){return false}var eb=d9.constructor;if(d8.$isInterface){var ea=[];while(eb){if(eb.$interfaces){ea=ea.concat(eb.$interfaces)}eb=eb.$base}while(ea.length>0){var d7=ea.shift();if(d7===d8){return true}if(d7.$interfaces){ea=ea.concat(d7.$interfaces)}}return false}while(eb.hasOwnProperty("$base")){eb=eb.$base;if(eb===d8){return true}}return false};cV.abs=o.abs;cV.ceil=o.ceil;cV.constrain=function(d8,d9,d7){return d8>d7?d7:d8<d9?d9:d8};cV.dist=function(){var d9,d8,d7;if(arguments.length===4){d9=arguments[0]-arguments[2];d8=arguments[1]-arguments[3];return o.sqrt(d9*d9+d8*d8)}if(arguments.length===6){d9=arguments[0]-arguments[3];d8=arguments[1]-arguments[4];d7=arguments[2]-arguments[5];return o.sqrt(d9*d9+d8*d8+d7*d7)}};cV.exp=o.exp;cV.floor=o.floor;cV.lerp=function(d8,d7,d9){return(d7-d8)*d9+d8};cV.log=o.log;cV.mag=function(d8,d7,d9){if(d9){return o.sqrt(d8*d8+d7*d7+d9*d9)}return o.sqrt(d8*d8+d7*d7)};cV.map=function(ea,d8,d9,d7,eb){return d7+(eb-d7)*((ea-d8)/(d9-d8))};cV.max=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[1]:arguments[0]}var d8=arguments.length===1?arguments[0]:arguments;if(!("length" in d8&&d8.length>0)){throw"Non-empty array is expected"}var d7=d8[0],ea=d8.length;for(var d9=1;d9<ea;++d9){if(d7<d8[d9]){d7=d8[d9]}}return d7};cV.min=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[0]:arguments[1]}var d7=arguments.length===1?arguments[0]:arguments;if(!("length" in d7&&d7.length>0)){throw"Non-empty array is expected"}var d9=d7[0],ea=d7.length;for(var d8=1;d8<ea;++d8){if(d9>d7[d8]){d9=d7[d8]}}return d9};cV.norm=function(d8,d7,d9){return(d8-d7)/(d9-d7)};cV.pow=o.pow;cV.round=o.round;cV.sq=function(d7){return d7*d7};cV.sqrt=o.sqrt;cV.acos=o.acos;cV.asin=o.asin;cV.atan=o.atan;cV.atan2=o.atan2;cV.cos=o.cos;cV.degrees=function(d7){return d7*180/o.PI};cV.radians=function(d7){return d7/180*o.PI};cV.sin=o.sin;cV.tan=o.tan;var bW=o.random;cV.random=function(){if(arguments.length===0){return bW()}if(arguments.length===1){return bW()*arguments[0]}var d8=arguments[0],d7=arguments[1];return bW()*(d7-d8)+d8};function cn(d9,d8){var eb=d9||362436069,d7=d8||521288629;var ea=function(){eb=36969*(eb&65535)+(eb>>>16)&4294967295;d7=18000*(d7&65535)+(d7>>>16)&4294967295;return((eb&65535)<<16|d7&65535)&4294967295};this.nextDouble=function(){var ec=ea()/4294967296;return ec<0?1+ec:ec};this.nextInt=ea}cn.createRandomized=function(){var d7=new Date;return new cn(d7/60000&4294967295,d7&4294967295)};cV.randomSeed=function(d7){bW=(new cn(d7)).nextDouble};cV.Random=function(d7){var ea=false,d8,d9;this.nextGaussian=function(){if(ea){ea=false;return d8}var ee,ec,eb;do{ee=2*d9()-1;ec=2*d9()-1;eb=ee*ee+ec*ec}while(eb>=1||eb===0);var ed=o.sqrt(-2*o.log(eb)/eb);d8=ec*ed;ea=true;return ee*ed};d9=d7===r?o.random:(new cn(d7)).nextDouble};function dw(ee){var d8=ee!==r?new cn(ee):cn.createRandomized();var ed,eb;var ea=new b(512);for(ed=0;ed<256;++ed){ea[ed]=ed}for(ed=0;ed<256;++ed){var eg=ea[eb=d8.nextInt()&255];ea[eb]=ea[ed];ea[ed]=eg}for(ed=0;ed<256;++ed){ea[ed+256]=ea[ed]}function d7(ek,eh,en,em){var el=ek&15;var ej=el<8?eh:en,ei=el<4?en:el===12||el===14?eh:em;return((el&1)===0?ej:-ej)+((el&2)===0?ei:-ei)}function ec(ej,eh,ek){var ei=(ej&1)===0?eh:ek;return(ej&2)===0?-ei:ei}function ef(ei,eh){return(ei&1)===0?-eh:eh}function d9(ej,ei,eh){return ei+ej*(eh-ei)}this.noise3d=function(et,es,er){var ek=o.floor(et)&255,ei=o.floor(es)&255,eh=o.floor(er)&255;et-=o.floor(et);es-=o.floor(es);er-=o.floor(er);var eo=(3-2*et)*et*et,en=(3-2*es)*es*es,em=(3-2*er)*er*er;var ev=ea[ek]+ei,eq=ea[ev]+eh,ep=ea[ev+1]+eh,eu=ea[ek+1]+ei,el=ea[eu]+eh,ej=ea[eu+1]+eh;return d9(em,d9(en,d9(eo,d7(ea[eq],et,es,er),d7(ea[el],et-1,es,er)),d9(eo,d7(ea[ep],et,es-1,er),d7(ea[ej],et-1,es-1,er))),d9(en,d9(eo,d7(ea[eq+1],et,es,er-1),d7(ea[el+1],et-1,es,er-1)),d9(eo,d7(ea[ep+1],et,es-1,er-1),d7(ea[ej+1],et-1,es-1,er-1))))};this.noise2d=function(eh,eo){var en=o.floor(eh)&255,el=o.floor(eo)&255;eh-=o.floor(eh);eo-=o.floor(eo);var ej=(3-2*eh)*eh*eh,ei=(3-2*eo)*eo*eo;var em=ea[en]+el,ek=ea[en+1]+el;return d9(ei,d9(ej,ec(ea[em],eh,eo),ec(ea[ek],eh-1,eo)),d9(ej,ec(ea[em+1],eh,eo-1),ec(ea[ek+1],eh-1,eo-1)))};this.noise1d=function(eh){var ej=o.floor(eh)&255;eh-=o.floor(eh);var ei=(3-2*eh)*eh*eh;return d9(ei,ef(ea[ej],eh),ef(ea[ej+1],eh-1))}}var bU={generator:r,octaves:4,fallout:0.5,seed:r};cV.noise=function(d7,ee,ed){if(bU.generator===r){bU.generator=new dw(bU.seed)}var ec=bU.generator;var eb=1,d8=1,ea=0;for(var d9=0;d9<bU.octaves;++d9){eb*=bU.fallout;switch(arguments.length){case 1:ea+=eb*(1+ec.noise1d(d8*d7))/2;break;case 2:ea+=eb*(1+ec.noise2d(d8*d7,d8*ee))/2;break;case 3:ea+=eb*(1+ec.noise3d(d8*d7,d8*ee,d8*ed))/2;break}d8*=2}return ea};cV.noiseDetail=function(d8,d7){bU.octaves=d8;if(d7!==r){bU.fallout=d7}};cV.noiseSeed=function(d7){bU.seed=d7;bU.generator=r};dp.prototype.size=function(d8,eb,ea){if(cd){cV.stroke(0)}if(aF){cV.fill(255)}var d9={fillStyle:d4.fillStyle,strokeStyle:d4.strokeStyle,lineCap:d4.lineCap,lineJoin:d4.lineJoin};if(ac.style.length>0){ac.style.removeProperty("width");ac.style.removeProperty("height")}ac.width=cV.width=d8||100;ac.height=cV.height=eb||100;for(var ec in d9){if(d9.hasOwnProperty(ec)){d4[ec]=d9[ec]}}cV.textFont(U);cV.background();bY=o.max(1000,d8*eb*0.05);cV.externals.context=d4;for(var d7=0;d7<720;d7++){ag[d7]=cV.sin(d7*(o.PI/180)*0.5);bi[d7]=cV.cos(d7*(o.PI/180)*0.5)}};bO.prototype.size=function(d7,d9,d8){if(d4===r){d4=ac.getContext("2d");al=new T;c9=new T;dF=new aT;aQ=new aT}dp.prototype.size.apply(this,arguments)};by.prototype.size=function(){var d8=false;return function d7(ea,ec,eb){if(d8){throw"Multiple calls to size() for 3D renders are not allowed."}d8=true;function ed(ef){var ei=["experimental-webgl","webgl","webkit-3d"],eh;for(var eg=0,ee=ei.length;eg<ee;eg++){eh=ef.getContext(ei[eg],{antialias:false});if(eh){break}}return eh}try{ac.width=cV.width=ea||100;ac.height=cV.height=ec||100;d4=ed(ac);c6=d4.createTexture();bP=d4.createTexture()}catch(d9){D.debug(d9)}if(!d4){throw"WebGL context is not supported on this browser."}d4.viewport(0,0,ac.width,ac.height);d4.enable(d4.DEPTH_TEST);d4.enable(d4.BLEND);d4.blendFunc(d4.SRC_ALPHA,d4.ONE_MINUS_SRC_ALPHA);dM=bC(d4,ad,bX);bQ=bC(d4,bS,bf);cV.strokeWeight(1);du=bC(d4,d5,bH);d4.useProgram(du);dV("usingTexture3d",du,"usingTexture",dP);cV.lightFalloff(1,0,0);cV.shininess(1);cV.ambient(255,255,255);cV.specular(0,0,0);cV.emissive(0,0,0);bd=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,bd);d4.bufferData(d4.ARRAY_BUFFER,df,d4.STATIC_DRAW);cI=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,cI);d4.bufferData(d4.ARRAY_BUFFER,de,d4.STATIC_DRAW);di=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,di);d4.bufferData(d4.ARRAY_BUFFER,bE,d4.STATIC_DRAW);aA=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,aA);d4.bufferData(d4.ARRAY_BUFFER,aj,d4.STATIC_DRAW);b1=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,b1);d4.bufferData(d4.ARRAY_BUFFER,ah,d4.STATIC_DRAW);bc=d4.createBuffer();b7=d4.createBuffer();ar=d4.createBuffer();aE=d4.createBuffer();bz=d4.createBuffer();ae=d4.createBuffer();av=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,av);d4.bufferData(d4.ARRAY_BUFFER,new e([0,0,0]),d4.STATIC_DRAW);cG=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,cG);d4.bufferData(d4.ARRAY_BUFFER,new e([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),d4.STATIC_DRAW);aa=d4.createBuffer();d4.bindBuffer(d4.ARRAY_BUFFER,aa);d4.bufferData(d4.ARRAY_BUFFER,new e([0,0,1,0,1,1,0,1]),d4.STATIC_DRAW);P=d4.createBuffer();d4.bindBuffer(d4.ELEMENT_ARRAY_BUFFER,P);d4.bufferData(d4.ELEMENT_ARRAY_BUFFER,new w([0,1,2,2,3,0]),d4.STATIC_DRAW);bT=new aM;cg=new aM;dF=new aM;aQ=new aM;da=new aM;cV.camera();cV.perspective();al=new T;c9=new T;c2=new aM;aN=new aM;aJ=new aM;bw=new aM;cc=new aM;S=new aM;S.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0);dp.prototype.size.apply(this,arguments)}}();bO.prototype.ambientLight=dp.prototype.a3DOnlyFunction;by.prototype.ambientLight=function(d7,ea,ef,eg,ec,eb){if(dH===8){throw"can only create "+8+" lights"}var ed=new y(eg,ec,eb);var ee=new aM;ee.scale(1,-1,1);ee.apply(dF.array());ee.mult(ed,ed);var d8=dD(d7,ea,ef,0);var d9=[((d8>>16)&255)/255,((d8&65280)>>>8)/255,(d8&255)/255];d4.useProgram(du);dY("lights.color.3d."+dH,du,"lights"+dH+".color",d9);dY("lights.position.3d."+dH,du,"lights"+dH+".position",ed.array());dV("lights.type.3d."+dH,du,"lights"+dH+".type",0);dV("lightCount3d",du,"lightCount",++dH)};bO.prototype.directionalLight=dp.prototype.a3DOnlyFunction;by.prototype.directionalLight=function(d7,ed,ef,ee,ec,eb){if(dH===8){throw"can only create "+8+" lights"}d4.useProgram(du);var eg=new aM;eg.scale(1,-1,1);eg.apply(dF.array());eg=eg.array();var d9=[eg[0]*ee+eg[4]*ec+eg[8]*eb,eg[1]*ee+eg[5]*ec+eg[9]*eb,eg[2]*ee+eg[6]*ec+eg[10]*eb];var d8=dD(d7,ed,ef,0);var ea=[((d8>>16)&255)/255,((d8>>8)&255)/255,(d8&255)/255];dY("lights.color.3d."+dH,du,"lights"+dH+".color",ea);dY("lights.position.3d."+dH,du,"lights"+dH+".position",d9);dV("lights.type.3d."+dH,du,"lights"+dH+".type",1);dV("lightCount3d",du,"lightCount",++dH)};bO.prototype.lightFalloff=dp.prototype.a3DOnlyFunction;by.prototype.lightFalloff=function(d8,d7,d9){d4.useProgram(du);dY("falloff3d",du,"falloff",[d8,d7,d9])};bO.prototype.lightSpecular=dp.prototype.a3DOnlyFunction;by.prototype.lightSpecular=function(eb,ea,d7){var d8=dD(eb,ea,d7,0);var d9=[((d8>>16)&255)/255,((d8>>8)&255)/255,(d8&255)/255];d4.useProgram(du);dY("specular3d",du,"specular",d9)};cV.lights=function(){cV.ambientLight(128,128,128);cV.directionalLight(128,128,128,0,0,-1);cV.lightFalloff(1,0,0);cV.lightSpecular(0,0,0)};bO.prototype.pointLight=dp.prototype.a3DOnlyFunction;by.prototype.pointLight=function(d7,ea,ef,eg,ec,eb){if(dH===8){throw"can only create "+8+" lights"}var ed=new y(eg,ec,eb);var ee=new aM;ee.scale(1,-1,1);ee.apply(dF.array());ee.mult(ed,ed);var d8=dD(d7,ea,ef,0);var d9=[((d8>>16)&255)/255,((d8>>8)&255)/255,(d8&255)/255];d4.useProgram(du);dY("lights.color.3d."+dH,du,"lights"+dH+".color",d9);dY("lights.position.3d."+dH,du,"lights"+dH+".position",ed.array());dV("lights.type.3d."+dH,du,"lights"+dH+".type",2);dV("lightCount3d",du,"lightCount",++dH)};bO.prototype.noLights=dp.prototype.a3DOnlyFunction;by.prototype.noLights=function(){dH=0;d4.useProgram(du);dV("lightCount3d",du,"lightCount",dH)};bO.prototype.spotLight=dp.prototype.a3DOnlyFunction;by.prototype.spotLight=function(d7,ef,ek,el,ej,eh,eg,ee,ec,eb,ed){if(dH===8){throw"can only create "+8+" lights"}d4.useProgram(du);var ei=new y(el,ej,eh);var em=new aM;em.scale(1,-1,1);em.apply(dF.array());em.mult(ei,ei);em=em.array();var d9=[em[0]*eg+em[4]*ee+em[8]*ec,em[1]*eg+em[5]*ee+em[9]*ec,em[2]*eg+em[6]*ee+em[10]*ec];var d8=dD(d7,ef,ek,0);var ea=[((d8>>16)&255)/255,((d8>>8)&255)/255,(d8&255)/255];dY("lights.color.3d."+dH,du,"lights"+dH+".color",ea);dY("lights.position.3d."+dH,du,"lights"+dH+".position",ei.array());dY("lights.direction.3d."+dH,du,"lights"+dH+".direction",d9);dY("lights.concentration.3d."+dH,du,"lights"+dH+".concentration",ed);dY("lights.angle.3d."+dH,du,"lights"+dH+".angle",eb);dV("lights.type.3d."+dH,du,"lights"+dH+".type",3);dV("lightCount3d",du,"lightCount",++dH)};bO.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"};by.prototype.beginCamera=function(){if(ao){throw"You cannot call beginCamera() again before calling endCamera()"}ao=true;dF=cg;aQ=bT};bO.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"};by.prototype.endCamera=function(){if(!ao){throw"You cannot call endCamera() before calling beginCamera()"}dF.set(bT);aQ.set(cg);ao=false};cV.camera=function(ei,eh,ef,ed,eb,ea,eq,eo,em){if(ei===r){dj=cV.width/2;dh=cV.height/2;dg=dh/o.tan(cJ/2);ei=dj;eh=dh;ef=dg;ed=dj;eb=dh;ea=0;eq=0;eo=1;em=0}var ec=new y(ei-ed,eh-eb,ef-ea);var ee=new y(eq,eo,em);ec.normalize();var eg=y.cross(ee,ec);ee=y.cross(ec,eg);eg.normalize();ee.normalize();var er=eg.x,ep=eg.y,en=eg.z;var d9=ee.x,d8=ee.y,d7=ee.z;var el=ec.x,ek=ec.y,ej=ec.z;bT.set(er,ep,en,0,d9,d8,d7,0,el,ek,ej,0,0,0,0,1);bT.translate(-ei,-eh,-ef);cg.reset();cg.invApply(er,ep,en,0,d9,d8,d7,0,el,ek,ej,0,0,0,0,1);cg.translate(ei,eh,ef);dF.set(bT);aQ.set(cg)};cV.perspective=function(eb,d9,ec,d8){if(arguments.length===0){dh=ac.height/2;dg=dh/o.tan(cJ/2);aW=dg/10;au=dg*10;b4=cV.width/cV.height;eb=cJ;d9=b4;ec=aW;d8=au}var ed,d7,ee,ea;ed=ec*o.tan(eb/2);d7=-ed;ee=ed*d9;ea=d7*d9;cV.frustum(ea,ee,d7,ed,ec,d8)};bO.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"};by.prototype.frustum=function(ed,d9,d8,ec,eb,d7){ch=true;da=new aM;da.set(2*eb/(d9-ed),0,(d9+ed)/(d9-ed),0,0,2*eb/(ec-d8),(ec+d8)/(ec-d8),0,0,0,-(d7+eb)/(d7-eb),-(2*d7*eb)/(d7-eb),0,0,-1,0);var ea=new aM;ea.set(da);ea.transpose();d4.useProgram(dM);a5("projection2d",dM,"projection",false,ea.array());d4.useProgram(du);a5("projection3d",du,"projection",false,ea.array());d4.useProgram(bQ);a5("uProjectionUS",bQ,"uProjection",false,ea.array())};cV.ortho=function(d8,ej,d7,eh,ee,ed){if(arguments.length===0){d8=0;ej=cV.width;d7=0;eh=cV.height;ee=-10;ed=10}var ei=2/(ej-d8);var eg=2/(eh-d7);var ef=-2/(ed-ee);var ec=-(ej+d8)/(ej-d8);var eb=-(eh+d7)/(eh-d7);var ea=-(ed+ee)/(ed-ee);da=new aM;da.set(ei,0,0,ec,0,eg,0,eb,0,0,ef,ea,0,0,0,1);var d9=new aM;d9.set(da);d9.transpose();d4.useProgram(dM);a5("projection2d",dM,"projection",false,d9.array());d4.useProgram(du);a5("projection3d",du,"projection",false,d9.array());d4.useProgram(bQ);a5("uProjectionUS",bQ,"uProjection",false,d9.array());ch=false};cV.printProjection=function(){da.print()};cV.printCamera=function(){bT.print()};bO.prototype.box=dp.prototype.a3DOnlyFunction;by.prototype.box=function(d9,ec,ee){if(!ec||!ee){ec=ee=d9}var eb=new aM;eb.scale(d9,ec,ee);var d8=new aM;d8.scale(1,-1,1);d8.apply(dF.array());d8.transpose();if(aF){d4.useProgram(du);a5("model3d",du,"model",false,eb.array());a5("view3d",du,"view",false,d8.array());d4.enable(d4.POLYGON_OFFSET_FILL);d4.polygonOffset(1,1);dY("color3d",du,"color",bl);if(dH>0){var ea=new aM;ea.set(d8);var d7=new aM;d7.set(eb);ea.mult(d7);var ed=new aM;ed.set(ea);ed.invert();ed.transpose();a5("normalTransform3d",du,"normalTransform",false,ed.array());db("normal3d",du,"Normal",3,cI)}else{cf("normal3d",du,"Normal")}db("vertex3d",du,"Vertex",3,bd);cf("aColor3d",du,"aColor");cf("aTexture3d",du,"aTexture");d4.drawArrays(d4.TRIANGLES,0,df.length/3);d4.disable(d4.POLYGON_OFFSET_FILL)}if(dS>0&&cd){d4.useProgram(dM);a5("model2d",dM,"model",false,eb.array());a5("view2d",dM,"view",false,d8.array());dY("color2d",dM,"color",cZ);dV("picktype2d",dM,"picktype",0);db("vertex2d",dM,"Vertex",3,di);cf("aTextureCoord2d",dM,"aTextureCoord");d4.drawArrays(d4.LINES,0,bE.length/3)}};var cC=function(){var d8;cE=[];for(d8=0;d8<bK;d8++){cE.push(0);cE.push(-1);cE.push(0);cE.push(bq[d8]);cE.push(bp[d8]);cE.push(bo[d8])}cE.push(0);cE.push(-1);cE.push(0);cE.push(bq[0]);cE.push(bp[0]);cE.push(bo[0]);var ec,d9,eb;var ea=0;for(d8=2;d8<bJ;d8++){ec=d9=ea;ea+=bK;eb=ea;for(var d7=0;d7<bK;d7++){cE.push(bq[ec]);cE.push(bp[ec]);cE.push(bo[ec++]);cE.push(bq[eb]);cE.push(bp[eb]);cE.push(bo[eb++])}ec=d9;eb=ea;cE.push(bq[ec]);cE.push(bp[ec]);cE.push(bo[ec]);cE.push(bq[eb]);cE.push(bp[eb]);cE.push(bo[eb])}for(d8=0;d8<bK;d8++){eb=ea+d8;cE.push(bq[eb]);cE.push(bp[eb]);cE.push(bo[eb]);cE.push(0);cE.push(1);cE.push(0)}cE.push(bq[ea]);cE.push(bp[ea]);cE.push(bo[ea]);cE.push(0);cE.push(1);cE.push(0);d4.bindBuffer(d4.ARRAY_BUFFER,bc);d4.bufferData(d4.ARRAY_BUFFER,new e(cE),d4.STATIC_DRAW)};cV.sphereDetail=function(d8,ej){var ee;if(arguments.length===1){d8=ej=arguments[0]}if(d8<3){d8=3}if(ej<2){ej=2}if(d8===bK&&ej===bJ){return}var ei=720/d8;var ec=new e(d8);var d9=new e(d8);for(ee=0;ee<d8;ee++){ec[ee]=bi[ee*ei%720|0];d9[ee]=ag[ee*ei%720|0]}var eh=d8*(ej-1)+2;var eg=0;bq=new e(eh);bp=new e(eh);bo=new e(eh);var ef=720*0.5/ej;var eb=ef;for(ee=1;ee<ej;ee++){var ea=ag[eb%720|0];var d7=-bi[eb%720|0];for(var ed=0;ed<d8;ed++){bq[eg]=ec[ed]*ea;bp[eg]=d7;bo[eg++]=d9[ed]*ea}eb+=ef}bK=d8;bJ=ej;cC()};bO.prototype.sphere=dp.prototype.a3DOnlyFunction;by.prototype.sphere=function(){var eb=arguments[0];if(bK<3||bJ<2){cV.sphereDetail(30)}var ea=new aM;ea.scale(eb,eb,eb);var d8=new aM;d8.scale(1,-1,1);d8.apply(dF.array());d8.transpose();if(aF){if(dH>0){var d9=new aM;d9.set(d8);var d7=new aM;d7.set(ea);d9.mult(d7);var ec=new aM;ec.set(d9);ec.invert();ec.transpose();a5("normalTransform3d",du,"normalTransform",false,ec.array());db("normal3d",du,"Normal",3,bc)}else{cf("normal3d",du,"Normal")}d4.useProgram(du);cf("aTexture3d",du,"aTexture");a5("model3d",du,"model",false,ea.array());a5("view3d",du,"view",false,d8.array());db("vertex3d",du,"Vertex",3,bc);cf("aColor3d",du,"aColor");d4.enable(d4.POLYGON_OFFSET_FILL);d4.polygonOffset(1,1);dY("color3d",du,"color",bl);d4.drawArrays(d4.TRIANGLE_STRIP,0,cE.length/3);d4.disable(d4.POLYGON_OFFSET_FILL)}if(dS>0&&cd){d4.useProgram(dM);a5("model2d",dM,"model",false,ea.array());a5("view2d",dM,"view",false,d8.array());db("vertex2d",dM,"Vertex",3,bc);cf("aTextureCoord2d",dM,"aTextureCoord");dY("color2d",dM,"color",cZ);dV("picktype2d",dM,"picktype",0);d4.drawArrays(d4.LINE_STRIP,0,cE.length/3)}};cV.modelX=function(ed,ec,eb){var ef=dF.array();var eh=cg.array();var d7=ef[0]*ed+ef[1]*ec+ef[2]*eb+ef[3];var eg=ef[4]*ed+ef[5]*ec+ef[6]*eb+ef[7];var ee=ef[8]*ed+ef[9]*ec+ef[10]*eb+ef[11];var d8=ef[12]*ed+ef[13]*ec+ef[14]*eb+ef[15];var d9=eh[0]*d7+eh[1]*eg+eh[2]*ee+eh[3]*d8;var ea=eh[12]*d7+eh[13]*eg+eh[14]*ee+eh[15]*d8;return ea!==0?d9/ea:d9};cV.modelY=function(ed,ec,eb){var ef=dF.array();var eh=cg.array();var d7=ef[0]*ed+ef[1]*ec+ef[2]*eb+ef[3];var eg=ef[4]*ed+ef[5]*ec+ef[6]*eb+ef[7];var ee=ef[8]*ed+ef[9]*ec+ef[10]*eb+ef[11];var d8=ef[12]*ed+ef[13]*ec+ef[14]*eb+ef[15];var d9=eh[4]*d7+eh[5]*eg+eh[6]*ee+eh[7]*d8;var ea=eh[12]*d7+eh[13]*eg+eh[14]*ee+eh[15]*d8;return ea!==0?d9/ea:d9};cV.modelZ=function(ed,ec,eb){var ef=dF.array();var eh=cg.array();var d7=ef[0]*ed+ef[1]*ec+ef[2]*eb+ef[3];var eg=ef[4]*ed+ef[5]*ec+ef[6]*eb+ef[7];var ee=ef[8]*ed+ef[9]*ec+ef[10]*eb+ef[11];var d9=ef[12]*ed+ef[13]*ec+ef[14]*eb+ef[15];var d8=eh[8]*d7+eh[9]*eg+eh[10]*ee+eh[11]*d9;var ea=eh[12]*d7+eh[13]*eg+eh[14]*ee+eh[15]*d9;return ea!==0?d8/ea:d8};bO.prototype.ambient=dp.prototype.a3DOnlyFunction;by.prototype.ambient=function(ea,d9,d8){d4.useProgram(du);dV("usingMat3d",du,"usingMat",true);var d7=cV.color(ea,d9,d8);dY("mat_ambient3d",du,"mat_ambient",cV.color.toGLArray(d7).slice(0,3))};bO.prototype.emissive=dp.prototype.a3DOnlyFunction;by.prototype.emissive=function(ea,d9,d8){d4.useProgram(du);dV("usingMat3d",du,"usingMat",true);var d7=cV.color(ea,d9,d8);dY("mat_emissive3d",du,"mat_emissive",cV.color.toGLArray(d7).slice(0,3))};bO.prototype.shininess=dp.prototype.a3DOnlyFunction;by.prototype.shininess=function(d7){d4.useProgram(du);dV("usingMat3d",du,"usingMat",true);dY("shininess3d",du,"shininess",d7)};bO.prototype.specular=dp.prototype.a3DOnlyFunction;by.prototype.specular=function(ea,d9,d8){d4.useProgram(du);dV("usingMat3d",du,"usingMat",true);var d7=cV.color(ea,d9,d8);dY("mat_specular3d",du,"mat_specular",cV.color.toGLArray(d7).slice(0,3))};cV.screenX=function(ee,ed,ec){var eg=dF.array();if(eg.length===16){var d7=eg[0]*ee+eg[1]*ed+eg[2]*ec+eg[3];var eh=eg[4]*ee+eg[5]*ed+eg[6]*ec+eg[7];var ef=eg[8]*ee+eg[9]*ed+eg[10]*ec+eg[11];var d8=eg[12]*ee+eg[13]*ed+eg[14]*ec+eg[15];var eb=da.array();var d9=eb[0]*d7+eb[1]*eh+eb[2]*ef+eb[3]*d8;var ea=eb[12]*d7+eb[13]*eh+eb[14]*ef+eb[15]*d8;if(ea!==0){d9/=ea}return cV.width*(1+d9)/2}return dF.multX(ee,ed)};cV.screenY=function az(ee,ed,ec){var eg=dF.array();if(eg.length===16){var d7=eg[0]*ee+eg[1]*ed+eg[2]*ec+eg[3];var eh=eg[4]*ee+eg[5]*ed+eg[6]*ec+eg[7];var ef=eg[8]*ee+eg[9]*ed+eg[10]*ec+eg[11];var d8=eg[12]*ee+eg[13]*ed+eg[14]*ec+eg[15];var eb=da.array();var d9=eb[4]*d7+eb[5]*eh+eb[6]*ef+eb[7]*d8;var ea=eb[12]*d7+eb[13]*eh+eb[14]*ef+eb[15]*d8;if(ea!==0){d9/=ea}return cV.height*(1+d9)/2}return dF.multY(ee,ed)};cV.screenZ=function ax(ee,ed,ec){var eg=dF.array();if(eg.length!==16){return 0}var eb=da.array();var d7=eg[0]*ee+eg[1]*ed+eg[2]*ec+eg[3];var eh=eg[4]*ee+eg[5]*ed+eg[6]*ec+eg[7];var ef=eg[8]*ee+eg[9]*ed+eg[10]*ec+eg[11];var d9=eg[12]*ee+eg[13]*ed+eg[14]*ec+eg[15];var d8=eb[8]*d7+eb[9]*eh+eb[10]*ef+eb[11]*d9;var ea=eb[12]*d7+eb[13]*eh+eb[14]*ef+eb[15]*d9;if(ea!==0){d8/=ea}return(d8+1)/2};dp.prototype.fill=function(){var d7=cV.color(arguments[0],arguments[1],arguments[2],arguments[3]);if(d7===aX&&aF){return}aF=true;aX=d7};bO.prototype.fill=function(){dp.prototype.fill.apply(this,arguments);ap=true};by.prototype.fill=function(){dp.prototype.fill.apply(this,arguments);bl=cV.color.toGLArray(aX)};function bk(){if(aF){if(ap){d4.fillStyle=cV.color.toString(aX);ap=false}d4.fill()}}cV.noFill=function(){aF=false};dp.prototype.stroke=function(){var d7=cV.color(arguments[0],arguments[1],arguments[2],arguments[3]);if(d7===cu&&cd){return}cd=true;cu=d7};bO.prototype.stroke=function(){dp.prototype.stroke.apply(this,arguments);b2=true};by.prototype.stroke=function(){dp.prototype.stroke.apply(this,arguments);cZ=cV.color.toGLArray(cu)};function dc(){if(cd){if(b2){d4.strokeStyle=cV.color.toString(cu);b2=false}d4.stroke()}}cV.noStroke=function(){cd=false};dp.prototype.strokeWeight=function(d7){dS=d7};bO.prototype.strokeWeight=function(d7){dp.prototype.strokeWeight.apply(this,arguments);d4.lineWidth=d7};by.prototype.strokeWeight=function(d7){dp.prototype.strokeWeight.apply(this,arguments);d4.useProgram(dM);dY("pointSize2d",dM,"pointSize",d7);d4.useProgram(bQ);dY("pointSizeUnlitShape",bQ,"pointSize",d7);d4.lineWidth(d7)};cV.strokeCap=function(d7){dU.$ensureContext().lineCap=d7};cV.strokeJoin=function(d7){dU.$ensureContext().lineJoin=d7};bO.prototype.smooth=function(){dK=true;var d7=ac.style;d7.setProperty("image-rendering","optimizeQuality","important");d7.setProperty("-ms-interpolation-mode","bicubic","important");if(d4.hasOwnProperty("mozImageSmoothingEnabled")){d4.mozImageSmoothingEnabled=true}};by.prototype.smooth=E;bO.prototype.noSmooth=function(){dK=false;var d7=ac.style;d7.setProperty("image-rendering","optimizeSpeed","important");d7.setProperty("image-rendering","-moz-crisp-edges","important");d7.setProperty("image-rendering","-webkit-optimize-contrast","important");d7.setProperty("image-rendering","optimize-contrast","important");d7.setProperty("-ms-interpolation-mode","nearest-neighbor","important");if(d4.hasOwnProperty("mozImageSmoothingEnabled")){d4.mozImageSmoothingEnabled=false}};by.prototype.noSmooth=E;bO.prototype.point=function(d7,d8){if(!cd){return}d7=o.round(d7);d8=o.round(d8);d4.fillStyle=cV.color.toString(cu);ap=true;if(dS>1){d4.beginPath();d4.arc(d7,d8,dS/2,0,6.283185307179586,false);d4.fill()}else{d4.fillRect(d7,d8,1,1)}};by.prototype.point=function(d7,eb,ea){var d9=new aM;d9.translate(d7,eb,ea||0);d9.transpose();var d8=new aM;d8.scale(1,-1,1);d8.apply(dF.array());d8.transpose();d4.useProgram(dM);a5("model2d",dM,"model",false,d9.array());a5("view2d",dM,"view",false,d8.array());if(dS>0&&cd){dY("color2d",dM,"color",cZ);dV("picktype2d",dM,"picktype",0);db("vertex2d",dM,"Vertex",3,av);cf("aTextureCoord2d",dM,"aTextureCoord");d4.drawArrays(d4.POINTS,0,1)}};cV.beginShape=function(d7){dN=d7;d2=[];a7=[]};bO.prototype.vertex=function(d7,eb,ea,d9){var d8=[];if(dr){dr=false}d8.isVert=true;d8[0]=d7;d8[1]=eb;d8[2]=0;d8[3]=ea;d8[4]=d9;d8[5]=aX;d8[6]=cu;a7.push(d8)};by.prototype.vertex=function(d7,ec,eb,ea,d9){var d8=[];if(dr){dr=false}d8.isVert=true;if(d9===r&&dP){d9=ea;ea=eb;eb=0}if(ea!==r&&d9!==r){if(d0===2){ea/=cr.width;d9/=cr.height}ea=ea>1?1:ea;ea=ea<0?0:ea;d9=d9>1?1:d9;d9=d9<0?0:d9}d8[0]=d7;d8[1]=ec;d8[2]=eb||0;d8[3]=ea||0;d8[4]=d9||0;d8[5]=bl[0];d8[6]=bl[1];d8[7]=bl[2];d8[8]=bl[3];d8[9]=cZ[0];d8[10]=cZ[1];d8[11]=cZ[2];d8[12]=cZ[3];d8[13]=a4;d8[14]=a3;d8[15]=a2;a7.push(d8)};var dX=function(d9,d8){var d7=new aM;d7.scale(1,-1,1);d7.apply(dF.array());d7.transpose();d4.useProgram(bQ);a5("uViewUS",bQ,"uView",false,d7.array());db("aVertexUS",bQ,"aVertex",3,av);d4.bufferData(d4.ARRAY_BUFFER,new e(d9),d4.STREAM_DRAW);db("aColorUS",bQ,"aColor",4,aE);d4.bufferData(d4.ARRAY_BUFFER,new e(d8),d4.STREAM_DRAW);d4.drawArrays(d4.POINTS,0,d9.length/3)};var bg=function(eb,ea,d9){var d8;if(ea==="LINES"){d8=d4.LINES}else{if(ea==="LINE_LOOP"){d8=d4.LINE_LOOP}else{d8=d4.LINE_STRIP}}var d7=new aM;d7.scale(1,-1,1);d7.apply(dF.array());d7.transpose();d4.useProgram(bQ);a5("uViewUS",bQ,"uView",false,d7.array());db("aVertexUS",bQ,"aVertex",3,b7);d4.bufferData(d4.ARRAY_BUFFER,new e(eb),d4.STREAM_DRAW);db("aColorUS",bQ,"aColor",4,bz);d4.bufferData(d4.ARRAY_BUFFER,new e(d9),d4.STREAM_DRAW);d4.drawArrays(d8,0,eb.length/3)};var dk=function(ec,eb,ea,d9){var d8;if(eb==="TRIANGLES"){d8=d4.TRIANGLES}else{if(eb==="TRIANGLE_FAN"){d8=d4.TRIANGLE_FAN}else{d8=d4.TRIANGLE_STRIP}}var d7=new aM;d7.scale(1,-1,1);d7.apply(dF.array());d7.transpose();d4.useProgram(du);a5("model3d",du,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);a5("view3d",du,"view",false,d7.array());d4.enable(d4.POLYGON_OFFSET_FILL);d4.polygonOffset(1,1);dY("color3d",du,"color",[-1,0,0,0]);db("vertex3d",du,"Vertex",3,ar);d4.bufferData(d4.ARRAY_BUFFER,new e(ec),d4.STREAM_DRAW);if(dP&&bb!==null){bt(ea)}db("aColor3d",du,"aColor",4,aE);d4.bufferData(d4.ARRAY_BUFFER,new e(ea),d4.STREAM_DRAW);cf("normal3d",du,"Normal");if(dP){dV("usingTexture3d",du,"usingTexture",dP);db("aTexture3d",du,"aTexture",2,ae);d4.bufferData(d4.ARRAY_BUFFER,new e(d9),d4.STREAM_DRAW)}d4.drawArrays(d8,0,ec.length/3);d4.disable(d4.POLYGON_OFFSET_FILL)};function cR(){bk();dc();d4.closePath()}bO.prototype.endShape=function(ee){if(a7.length===0){return}var ea=ee===2;if(ea){a7.push(a7[0])}var d9=[];var d7=[];var eg=[];var ej=[];var ec=[];var ef;dr=true;var ed,eb,d8;var ei=a7.length;for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d7.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=5;eb<9;eb++){eg.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=9;eb<13;eb++){ej.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];ec.push(ef[3]);ec.push(ef[4])}if(dL&&(dN===20||dN===r)){if(ei>3){var eh=[],ek=1-aH;d4.beginPath();d4.moveTo(a7[1][0],a7[1][1]);for(ed=1;ed+2<ei;ed++){ef=a7[ed];eh[0]=[ef[0],ef[1]];eh[1]=[ef[0]+(ek*a7[ed+1][0]-ek*a7[ed-1][0])/6,ef[1]+(ek*a7[ed+1][1]-ek*a7[ed-1][1])/6];eh[2]=[a7[ed+1][0]+(ek*a7[ed][0]-ek*a7[ed+2][0])/6,a7[ed+1][1]+(ek*a7[ed][1]-ek*a7[ed+2][1])/6];eh[3]=[a7[ed+1][0],a7[ed+1][1]];d4.bezierCurveTo(eh[1][0],eh[1][1],eh[2][0],eh[2][1],eh[3][0],eh[3][1])}cR()}}else{if(Y&&(dN===20||dN===r)){d4.beginPath();for(ed=0;ed<ei;ed++){ef=a7[ed];if(a7[ed]["isVert"]){if(a7[ed]["moveTo"]){d4.moveTo(ef[0],ef[1])}else{d4.lineTo(ef[0],ef[1])}}else{d4.bezierCurveTo(a7[ed][0],a7[ed][1],a7[ed][2],a7[ed][3],a7[ed][4],a7[ed][5])}}cR()}else{if(dN===2){for(ed=0;ed<ei;ed++){ef=a7[ed];if(cd){cV.stroke(ef[6])}cV.point(ef[0],ef[1])}}else{if(dN===4){for(ed=0;ed+1<ei;ed+=2){ef=a7[ed];if(cd){cV.stroke(a7[ed+1][6])}cV.line(ef[0],ef[1],a7[ed+1][0],a7[ed+1][1])}}else{if(dN===9){for(ed=0;ed+2<ei;ed+=3){ef=a7[ed];d4.beginPath();d4.moveTo(ef[0],ef[1]);d4.lineTo(a7[ed+1][0],a7[ed+1][1]);d4.lineTo(a7[ed+2][0],a7[ed+2][1]);d4.lineTo(ef[0],ef[1]);if(aF){cV.fill(a7[ed+2][5]);bk()}if(cd){cV.stroke(a7[ed+2][6]);dc()}d4.closePath()}}else{if(dN===10){for(ed=0;ed+1<ei;ed++){ef=a7[ed];d4.beginPath();d4.moveTo(a7[ed+1][0],a7[ed+1][1]);d4.lineTo(ef[0],ef[1]);if(cd){cV.stroke(a7[ed+1][6])}if(aF){cV.fill(a7[ed+1][5])}if(ed+2<ei){d4.lineTo(a7[ed+2][0],a7[ed+2][1]);if(cd){cV.stroke(a7[ed+2][6])}if(aF){cV.fill(a7[ed+2][5])}}cR()}}else{if(dN===11){if(ei>2){d4.beginPath();d4.moveTo(a7[0][0],a7[0][1]);d4.lineTo(a7[1][0],a7[1][1]);d4.lineTo(a7[2][0],a7[2][1]);if(aF){cV.fill(a7[2][5]);bk()}if(cd){cV.stroke(a7[2][6]);dc()}d4.closePath();for(ed=3;ed<ei;ed++){ef=a7[ed];d4.beginPath();d4.moveTo(a7[0][0],a7[0][1]);d4.lineTo(a7[ed-1][0],a7[ed-1][1]);d4.lineTo(ef[0],ef[1]);if(aF){cV.fill(ef[5]);bk()}if(cd){cV.stroke(ef[6]);dc()}d4.closePath()}}}else{if(dN===16){for(ed=0;ed+3<ei;ed+=4){ef=a7[ed];d4.beginPath();d4.moveTo(ef[0],ef[1]);for(eb=1;eb<4;eb++){d4.lineTo(a7[ed+eb][0],a7[ed+eb][1])}d4.lineTo(ef[0],ef[1]);if(aF){cV.fill(a7[ed+3][5]);bk()}if(cd){cV.stroke(a7[ed+3][6]);dc()}d4.closePath()}}else{if(dN===17){if(ei>3){for(ed=0;ed+1<ei;ed+=2){ef=a7[ed];d4.beginPath();if(ed+3<ei){d4.moveTo(a7[ed+2][0],a7[ed+2][1]);d4.lineTo(ef[0],ef[1]);d4.lineTo(a7[ed+1][0],a7[ed+1][1]);d4.lineTo(a7[ed+3][0],a7[ed+3][1]);if(aF){cV.fill(a7[ed+3][5])}if(cd){cV.stroke(a7[ed+3][6])}}else{d4.moveTo(ef[0],ef[1]);d4.lineTo(a7[ed+1][0],a7[ed+1][1])}cR()}}}else{d4.beginPath();d4.moveTo(a7[0][0],a7[0][1]);for(ed=1;ed<ei;ed++){ef=a7[ed];if(ef.isVert){if(ef.moveTo){d4.moveTo(ef[0],ef[1])}else{d4.lineTo(ef[0],ef[1])}}}cR()}}}}}}}}}dL=false;Y=false;ca=[];c1=0;if(ea){a7.pop()}};by.prototype.endShape=function(ee){if(a7.length===0){return}var ea=ee===2;var d9=[];var d7=[];var eg=[];var ej=[];var ec=[];var ef;dr=true;var ed,eb,d8;var ei=a7.length;for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d7.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=5;eb<9;eb++){eg.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=9;eb<13;eb++){ej.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];ec.push(ef[3]);ec.push(ef[4])}if(ea){d7.push(a7[0][0]);d7.push(a7[0][1]);d7.push(a7[0][2]);for(ed=5;ed<9;ed++){eg.push(a7[0][ed])}for(ed=9;ed<13;ed++){ej.push(a7[0][ed])}ec.push(a7[0][3]);ec.push(a7[0][4])}if(dL&&(dN===20||dN===r)){d9=d7;if(cd){bg(d9,null,ej)}if(aF){dk(d7,null,eg)}}else{if(Y&&(dN===20||dN===r)){d9=d7;d9.splice(d9.length-3);ej.splice(ej.length-4);if(cd){bg(d9,null,ej)}if(aF){dk(d7,"TRIANGLES",eg)}}else{if(dN===2){for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d9.push(ef[eb])}}dX(d9,ej)}else{if(dN===4){for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d9.push(ef[eb])}}for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=5;eb<9;eb++){eg.push(ef[eb])}}bg(d9,"LINES",ej)}else{if(dN===9){if(ei>2){for(ed=0;ed+2<ei;ed+=3){d7=[];ec=[];d9=[];eg=[];ej=[];for(eb=0;eb<3;eb++){for(d8=0;d8<3;d8++){d9.push(a7[ed+eb][d8]);d7.push(a7[ed+eb][d8])}}for(eb=0;eb<3;eb++){for(d8=3;d8<5;d8++){ec.push(a7[ed+eb][d8])}}for(eb=0;eb<3;eb++){for(d8=5;d8<9;d8++){eg.push(a7[ed+eb][d8]);ej.push(a7[ed+eb][d8+4])}}if(cd){bg(d9,"LINE_LOOP",ej)}if(aF||dP){dk(d7,"TRIANGLES",eg,ec)}}}}else{if(dN===10){if(ei>2){for(ed=0;ed+2<ei;ed++){d9=[];d7=[];ej=[];eg=[];ec=[];for(eb=0;eb<3;eb++){for(d8=0;d8<3;d8++){d9.push(a7[ed+eb][d8]);d7.push(a7[ed+eb][d8])}}for(eb=0;eb<3;eb++){for(d8=3;d8<5;d8++){ec.push(a7[ed+eb][d8])}}for(eb=0;eb<3;eb++){for(d8=5;d8<9;d8++){ej.push(a7[ed+eb][d8+4]);eg.push(a7[ed+eb][d8])}}if(aF||dP){dk(d7,"TRIANGLE_STRIP",eg,ec)}if(cd){bg(d9,"LINE_LOOP",ej)}}}}else{if(dN===11){if(ei>2){for(ed=0;ed<3;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d9.push(ef[eb])}}for(ed=0;ed<3;ed++){ef=a7[ed];for(eb=9;eb<13;eb++){ej.push(ef[eb])}}if(cd){bg(d9,"LINE_LOOP",ej)}for(ed=2;ed+1<ei;ed++){d9=[];ej=[];d9.push(a7[0][0]);d9.push(a7[0][1]);d9.push(a7[0][2]);ej.push(a7[0][9]);ej.push(a7[0][10]);ej.push(a7[0][11]);ej.push(a7[0][12]);for(eb=0;eb<2;eb++){for(d8=0;d8<3;d8++){d9.push(a7[ed+eb][d8])}}for(eb=0;eb<2;eb++){for(d8=9;d8<13;d8++){ej.push(a7[ed+eb][d8])}}if(cd){bg(d9,"LINE_STRIP",ej)}}if(aF||dP){dk(d7,"TRIANGLE_FAN",eg,ec)}}}else{if(dN===16){for(ed=0;ed+3<ei;ed+=4){d9=[];for(eb=0;eb<4;eb++){ef=a7[ed+eb];for(d8=0;d8<3;d8++){d9.push(ef[d8])}}if(cd){bg(d9,"LINE_LOOP",ej)}if(aF){d7=[];eg=[];ec=[];for(eb=0;eb<3;eb++){d7.push(a7[ed][eb])}for(eb=5;eb<9;eb++){eg.push(a7[ed][eb])}for(eb=0;eb<3;eb++){d7.push(a7[ed+1][eb])}for(eb=5;eb<9;eb++){eg.push(a7[ed+1][eb])}for(eb=0;eb<3;eb++){d7.push(a7[ed+3][eb])}for(eb=5;eb<9;eb++){eg.push(a7[ed+3][eb])}for(eb=0;eb<3;eb++){d7.push(a7[ed+2][eb])}for(eb=5;eb<9;eb++){eg.push(a7[ed+2][eb])}if(dP){ec.push(a7[ed+0][3]);ec.push(a7[ed+0][4]);ec.push(a7[ed+1][3]);ec.push(a7[ed+1][4]);ec.push(a7[ed+3][3]);ec.push(a7[ed+3][4]);ec.push(a7[ed+2][3]);ec.push(a7[ed+2][4])}dk(d7,"TRIANGLE_STRIP",eg,ec)}}}else{if(dN===17){var eh=[];if(ei>3){for(ed=0;ed<2;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d9.push(ef[eb])}}for(ed=0;ed<2;ed++){ef=a7[ed];for(eb=9;eb<13;eb++){ej.push(ef[eb])}}bg(d9,"LINE_STRIP",ej);if(ei>4&&ei%2>0){eh=d7.splice(d7.length-3);a7.pop()}for(ed=0;ed+3<ei;ed+=2){d9=[];ej=[];for(eb=0;eb<3;eb++){d9.push(a7[ed+1][eb])}for(eb=0;eb<3;eb++){d9.push(a7[ed+3][eb])}for(eb=0;eb<3;eb++){d9.push(a7[ed+2][eb])}for(eb=0;eb<3;eb++){d9.push(a7[ed+0][eb])}for(eb=9;eb<13;eb++){ej.push(a7[ed+1][eb])}for(eb=9;eb<13;eb++){ej.push(a7[ed+3][eb])}for(eb=9;eb<13;eb++){ej.push(a7[ed+2][eb])}for(eb=9;eb<13;eb++){ej.push(a7[ed+0][eb])}if(cd){bg(d9,"LINE_STRIP",ej)}}if(aF||dP){dk(d7,"TRIANGLE_LIST",eg,ec)}}}else{if(ei===1){for(eb=0;eb<3;eb++){d9.push(a7[0][eb])}for(eb=9;eb<13;eb++){ej.push(a7[0][eb])}dX(d9,ej)}else{for(ed=0;ed<ei;ed++){ef=a7[ed];for(eb=0;eb<3;eb++){d9.push(ef[eb])}for(eb=5;eb<9;eb++){ej.push(ef[eb])}}if(cd&&ea){bg(d9,"LINE_LOOP",ej)}else{if(cd&&!ea){bg(d9,"LINE_STRIP",ej)}}if(aF||dP){dk(d7,"TRIANGLE_FAN",eg,ec)}}}}}}}}}dP=false;d4.useProgram(du);dV("usingTexture3d",du,"usingTexture",dP)}}dL=false;Y=false;ca=[];c1=0};var aU=function(ea,d9){var eb=1/ea;var d8=eb*eb;var d7=d8*eb;d9.set(0,0,0,1,d7,d8,eb,0,6*d7,2*d8,0,0,6*d7,0,0,0)};var dn=function(){if(!aJ){c2=new aM;aJ=new aM;cL=true}var d7=aH;c2.set((d7-1)/2,(d7+3)/2,(-3-d7)/2,(1-d7)/2,1-d7,(-5-d7)/2,d7+2,(d7-1)/2,(d7-1)/2,0,(1-d7)/2,0,0,1,0,0);aU(O,aJ);if(!cc){aN=new aM}aN.set(c2);aN.preApply(cc);aJ.apply(c2)};bO.prototype.bezierVertex=function(){Y=true;var d7=[];if(dr){throw"vertex() must be used at least once before calling bezierVertex()"}for(var d8=0;d8<arguments.length;d8++){d7[d8]=arguments[d8]}a7.push(d7);a7[a7.length-1]["isVert"]=false};by.prototype.bezierVertex=function(){Y=true;var ee=[];if(dr){throw"vertex() must be used at least once before calling bezierVertex()"}if(arguments.length===9){if(bw===r){bw=new aM}var ej=a7.length-1;aU(cx,bw);bw.apply(S);var el=bw.array();var ea=a7[ej][0],ek=a7[ej][1],ed=a7[ej][2];var eg=el[4]*ea+el[5]*arguments[0]+el[6]*arguments[3]+el[7]*arguments[6];var ef=el[8]*ea+el[9]*arguments[0]+el[10]*arguments[3]+el[11]*arguments[6];var ec=el[12]*ea+el[13]*arguments[0]+el[14]*arguments[3]+el[15]*arguments[6];var em=el[4]*ek+el[5]*arguments[1]+el[6]*arguments[4]+el[7]*arguments[7];var ei=el[8]*ek+el[9]*arguments[1]+el[10]*arguments[4]+el[11]*arguments[7];var eh=el[12]*ek+el[13]*arguments[1]+el[14]*arguments[4]+el[15]*arguments[7];var d9=el[4]*ed+el[5]*arguments[2]+el[6]*arguments[5]+el[7]*arguments[8];var d8=el[8]*ed+el[9]*arguments[2]+el[10]*arguments[5]+el[11]*arguments[8];var d7=el[12]*ed+el[13]*arguments[2]+el[14]*arguments[5]+el[15]*arguments[8];for(var eb=0;eb<cx;eb++){ea+=eg;eg+=ef;ef+=ec;ek+=em;em+=ei;ei+=eh;ed+=d9;d9+=d8;d8+=d7;cV.vertex(ea,ek,ed)}cV.vertex(arguments[6],arguments[7],arguments[8])}};cV.texture=function(ea){var d8=dU.$ensureContext();if(ea.__texture){d8.bindTexture(d8.TEXTURE_2D,ea.__texture)}else{if(ea.localName==="canvas"){d8.bindTexture(d8.TEXTURE_2D,c6);d8.texImage2D(d8.TEXTURE_2D,0,d8.RGBA,d8.RGBA,d8.UNSIGNED_BYTE,ea);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MAG_FILTER,d8.LINEAR);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MIN_FILTER,d8.LINEAR);d8.generateMipmap(d8.TEXTURE_2D);cr.width=ea.width;cr.height=ea.height}else{var d9=d8.createTexture(),ec=d.createElement("canvas"),d7=ec.getContext("2d"),eb;if(ea.width&ea.width-1===0){ec.width=ea.width}else{eb=1;while(eb<ea.width){eb*=2}ec.width=eb}if(ea.height&ea.height-1===0){ec.height=ea.height}else{eb=1;while(eb<ea.height){eb*=2}ec.height=eb}d7.drawImage(ea.sourceImg,0,0,ea.width,ea.height,0,0,ec.width,ec.height);d8.bindTexture(d8.TEXTURE_2D,d9);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MIN_FILTER,d8.LINEAR_MIPMAP_LINEAR);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_MAG_FILTER,d8.LINEAR);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_WRAP_T,d8.CLAMP_TO_EDGE);d8.texParameteri(d8.TEXTURE_2D,d8.TEXTURE_WRAP_S,d8.CLAMP_TO_EDGE);d8.texImage2D(d8.TEXTURE_2D,0,d8.RGBA,d8.RGBA,d8.UNSIGNED_BYTE,ec);d8.generateMipmap(d8.TEXTURE_2D);ea.__texture=d9;cr.width=ea.width;cr.height=ea.height}}dP=true;d8.useProgram(du);dV("usingTexture3d",du,"usingTexture",dP)};cV.textureMode=function(d7){d0=d7};var aq=function(es,ed,ej,eq,ec,ei,eo,eb,eh,em,ea,ef){var et=eq;var ee=ec;var ek=ei;var eg=aJ.array();var er=eg[4]*es+eg[5]*eq+eg[6]*eo+eg[7]*em;var ep=eg[8]*es+eg[9]*eq+eg[10]*eo+eg[11]*em;var en=eg[12]*es+eg[13]*eq+eg[14]*eo+eg[15]*em;var ew=eg[4]*ed+eg[5]*ec+eg[6]*eb+eg[7]*ea;var ev=eg[8]*ed+eg[9]*ec+eg[10]*eb+eg[11]*ea;var eu=eg[12]*ed+eg[13]*ec+eg[14]*eb+eg[15]*ea;var d9=eg[4]*ej+eg[5]*ei+eg[6]*eh+eg[7]*ef;var d8=eg[8]*ej+eg[9]*ei+eg[10]*eh+eg[11]*ef;var d7=eg[12]*ej+eg[13]*ei+eg[14]*eh+eg[15]*ef;cV.vertex(et,ee,ek);for(var el=0;el<O;el++){et+=er;er+=ep;ep+=en;ee+=ew;ew+=ev;ev+=eu;ek+=d9;d9+=d8;d8+=d7;cV.vertex(et,ee,ek)}};bO.prototype.curveVertex=function(d7,d8){dL=true;cV.vertex(d7,d8)};by.prototype.curveVertex=function(d7,ea,d9){dL=true;if(!cL){dn()}var d8=[];d8[0]=d7;d8[1]=ea;d8[2]=d9;ca.push(d8);c1++;if(c1>3){aq(ca[c1-4][0],ca[c1-4][1],ca[c1-4][2],ca[c1-3][0],ca[c1-3][1],ca[c1-3][2],ca[c1-2][0],ca[c1-2][1],ca[c1-2][2],ca[c1-1][0],ca[c1-1][1],ca[c1-1][2])}};bO.prototype.curve=function(){if(arguments.length===8){cV.beginShape();cV.curveVertex(arguments[0],arguments[1]);cV.curveVertex(arguments[2],arguments[3]);cV.curveVertex(arguments[4],arguments[5]);cV.curveVertex(arguments[6],arguments[7]);cV.endShape()}};by.prototype.curve=function(){if(arguments.length===12){cV.beginShape();cV.curveVertex(arguments[0],arguments[1],arguments[2]);cV.curveVertex(arguments[3],arguments[4],arguments[5]);cV.curveVertex(arguments[6],arguments[7],arguments[8]);cV.curveVertex(arguments[9],arguments[10],arguments[11]);cV.endShape()}};cV.curveTightness=function(d7){aH=d7};cV.curveDetail=function(d7){O=d7;dn()};cV.rectMode=function(d7){bI=d7};cV.imageMode=function(d7){switch(d7){case 0:bh=aV;break;case 1:bh=b0;break;case 3:bh=aL;break;default:throw"Invalid imageMode"}};cV.ellipseMode=function(d7){cM=d7};cV.arc=function(ej,eh,ea,el,d9,ei){if(ea<=0||ei<d9){return}if(cM===1){ea=ea-ej;el=el-eh}else{if(cM===2){ej=ej-ea;eh=eh-el;ea=ea*2;el=el*2}else{if(cM===3){ej=ej-ea/2;eh=eh-el/2}}}while(d9<0){d9+=6.283185307179586;ei+=6.283185307179586}if(ei-d9>6.283185307179586){d9=0;ei=6.283185307179586}var ek=ea/2;var em=el/2;var ee=ej+ek;var ec=eh+em;var d8=0|-0.5+d9*cV.RAD_TO_DEG*2;var eg=0|0.5+ei*cV.RAD_TO_DEG*2;var ef,ed;if(aF){var eb=cd;cd=false;cV.beginShape();cV.vertex(ee,ec);for(ef=d8;ef<=eg;ef++){ed=ef%720;cV.vertex(ee+bi[ed]*ek,ec+ag[ed]*em)}cV.endShape(2);cd=eb}if(cd){var d7=aF;aF=false;cV.beginShape();for(ef=d8;ef<=eg;ef++){ed=ef%720;cV.vertex(ee+bi[ed]*ek,ec+ag[ed]*em)}cV.endShape();aF=d7}};bO.prototype.line=function(d8,ef,d7,ed){if(!cd){return}d8=o.round(d8);d7=o.round(d7);ef=o.round(ef);ed=o.round(ed);if(d8===d7&&ef===ed){cV.point(d8,ef);return}var d9=r,eg=r,ec=true,ee=dF.array(),ea=[1,0,0,0,1,0];for(var eb=0;eb<6&&ec;eb++){ec=ee[eb]===ea[eb]}if(ec){if(d8===d7){if(ef>ed){d9=ef;ef=ed;ed=d9}ed++;if(dS%2===1){d4.translate(0.5,0)}}else{if(ef===ed){if(d8>d7){d9=d8;d8=d7;d7=d9}d7++;if(dS%2===1){d4.translate(0,0.5)}}}if(dS===1){eg=d4.lineCap;d4.lineCap="butt"}}d4.beginPath();d4.moveTo(d8||0,ef||0);d4.lineTo(d7||0,ed||0);dc();if(ec){if(d8===d7&&dS%2===1){d4.translate(-0.5,0)}else{if(ef===ed&&dS%2===1){d4.translate(0,-0.5)}}if(dS===1){d4.lineCap=eg}}};by.prototype.line=function(d9,ec,ee,d8,ea,ed){if(ea===r||ed===r){ed=0;ea=d8;d8=ee;ee=0}if(d9===d8&&ec===ea&&ee===ed){cV.point(d9,ec,ee);return}var eb=[d9,ec,ee,d8,ea,ed];var d7=new aM;d7.scale(1,-1,1);d7.apply(dF.array());d7.transpose();if(dS>0&&cd){d4.useProgram(dM);a5("model2d",dM,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);a5("view2d",dM,"view",false,d7.array());dY("color2d",dM,"color",cZ);dV("picktype2d",dM,"picktype",0);db("vertex2d",dM,"Vertex",3,b7);cf("aTextureCoord2d",dM,"aTextureCoord");d4.bufferData(d4.ARRAY_BUFFER,new e(eb),d4.STREAM_DRAW);d4.drawArrays(d4.LINES,0,2)}};bO.prototype.bezier=function(){if(arguments.length!==8){throw"You must use 8 parameters for bezier() in 2D mode"}cV.beginShape();cV.vertex(arguments[0],arguments[1]);cV.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7]);cV.endShape()};by.prototype.bezier=function(){if(arguments.length!==12){throw"You must use 12 parameters for bezier() in 3D mode"}cV.beginShape();cV.vertex(arguments[0],arguments[1],arguments[2]);cV.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11]);cV.endShape()};cV.bezierDetail=function(d7){cx=d7};cV.bezierPoint=function(d8,d7,eb,ea,d9){return(1-d9)*(1-d9)*(1-d9)*d8+3*(1-d9)*(1-d9)*d9*d7+3*(1-d9)*d9*d9*eb+d9*d9*d9*ea};cV.bezierTangent=function(d8,d7,eb,ea,d9){return 3*d9*d9*(-d8+3*d7-3*eb+ea)+6*d9*(d8-2*d7+eb)+3*(-d8+d7)};cV.curvePoint=function(d8,d7,eb,ea,d9){return 0.5*(2*d7+(-d8+eb)*d9+(2*d8-5*d7+4*eb-ea)*d9*d9+(-d8+3*d7-3*eb+ea)*d9*d9*d9)};cV.curveTangent=function(d8,d7,eb,ea,d9){return 0.5*(-d8+eb+2*(2*d8-5*d7+4*eb-ea)*d9+3*(-d8+3*d7-3*eb+ea)*d9*d9)};cV.triangle=function(ea,ec,d8,eb,d7,d9){cV.beginShape(9);cV.vertex(ea,ec,0);cV.vertex(d8,eb,0);cV.vertex(d7,d9,0);cV.endShape()};cV.quad=function(ec,ee,ea,ed,d8,eb,d7,d9){cV.beginShape(16);cV.vertex(ec,ee,0);cV.vertex(ea,ed,0);cV.vertex(d8,eb,0);cV.vertex(d7,d9,0);cV.endShape()};var bL=function(ed,ec,d7,ee,eg,eb,ef,d8){if(d8===r){eb=eg;ef=eg;d8=eg}var d9=d7/2,ea=ee/2;if(eg>d9||eg>ea){eg=o.min(d9,ea)}if(eb>d9||eb>ea){eb=o.min(d9,ea)}if(ef>d9||ef>ea){ef=o.min(d9,ea)}if(d8>d9||d8>ea){d8=o.min(d9,ea)}if(!aF||cd){d4.translate(0.5,0.5)}d4.beginPath();d4.moveTo(ed+eg,ec);d4.lineTo(ed+d7-eb,ec);d4.quadraticCurveTo(ed+d7,ec,ed+d7,ec+eb);d4.lineTo(ed+d7,ec+ee-ef);d4.quadraticCurveTo(ed+d7,ec+ee,ed+d7-ef,ec+ee);d4.lineTo(ed+d8,ec+ee);d4.quadraticCurveTo(ed,ec+ee,ed,ec+ee-d8);d4.lineTo(ed,ec+eg);d4.quadraticCurveTo(ed,ec,ed+eg,ec);if(!aF||cd){d4.translate(-0.5,-0.5)}bk();dc()};bO.prototype.rect=function(d8,ee,eb,d7,d9,ec,ea,ed){if(!eb&&!d7){return}if(bI===1){eb-=d8;d7-=ee}else{if(bI===2){eb*=2;d7*=2;d8-=eb/2;ee-=d7/2}else{if(bI===3){d8-=eb/2;ee-=d7/2}}}d8=o.round(d8);ee=o.round(ee);eb=o.round(eb);d7=o.round(d7);if(d9!==r){bL(d8,ee,eb,d7,d9,ec,ea,ed);return}if(cd&&dS%2===1){d4.translate(0.5,0.5)}d4.beginPath();d4.rect(d8,ee,eb,d7);bk();dc();if(cd&&dS%2===1){d4.translate(-0.5,-0.5)}};by.prototype.rect=function(ef,ee,d7,eh,ej,ec,ei,d8){if(ej!==r){throw"rect() with rounded corners is not supported in 3D mode"}if(bI===1){d7-=ef;eh-=ee}else{if(bI===2){d7*=2;eh*=2;ef-=d7/2;ee-=eh/2}else{if(bI===3){ef-=d7/2;ee-=eh/2}}}var eb=new aM;eb.translate(ef,ee,0);eb.scale(d7,eh,1);eb.transpose();var ed=new aM;ed.scale(1,-1,1);ed.apply(dF.array());ed.transpose();if(dS>0&&cd){d4.useProgram(dM);a5("model2d",dM,"model",false,eb.array());a5("view2d",dM,"view",false,ed.array());dY("color2d",dM,"color",cZ);dV("picktype2d",dM,"picktype",0);db("vertex2d",dM,"Vertex",3,aA);cf("aTextureCoord2d",dM,"aTextureCoord");d4.drawArrays(d4.LINE_LOOP,0,aj.length/3)}if(aF){d4.useProgram(du);a5("model3d",du,"model",false,eb.array());a5("view3d",du,"view",false,ed.array());d4.enable(d4.POLYGON_OFFSET_FILL);d4.polygonOffset(1,1);dY("color3d",du,"color",bl);if(dH>0){var eg=new aM;eg.set(ed);var d9=new aM;d9.set(eb);eg.mult(d9);var ea=new aM;ea.set(eg);ea.invert();ea.transpose();a5("normalTransform3d",du,"normalTransform",false,ea.array());db("normal3d",du,"Normal",3,b1)}else{cf("normal3d",du,"Normal")}db("vertex3d",du,"Vertex",3,aA);d4.drawArrays(d4.TRIANGLE_FAN,0,aj.length/3);d4.disable(d4.POLYGON_OFFSET_FILL)}};bO.prototype.ellipse=function(ed,ec,d8,ef){ed=ed||0;ec=ec||0;if(d8<=0&&ef<=0){return}if(cM===2){d8*=2;ef*=2}else{if(cM===1){d8=d8-ed;ef=ef-ec;ed+=d8/2;ec+=ef/2}else{if(cM===0){ed+=d8/2;ec+=ef/2}}}if(d8===ef){d4.beginPath();d4.arc(ed,ec,d8/2,0,6.283185307179586,false);bk();dc()}else{var ee=d8/2,eb=ef/2,d7=0.5522847498307933,ea=d7*ee,d9=d7*eb;cV.beginShape();cV.vertex(ed+ee,ec);cV.bezierVertex(ed+ee,ec-d9,ed+ea,ec-eb,ed,ec-eb);cV.bezierVertex(ed-ea,ec-eb,ed-ee,ec-d9,ed-ee,ec);cV.bezierVertex(ed-ee,ec+d9,ed-ea,ec+eb,ed,ec+eb);cV.bezierVertex(ed+ea,ec+eb,ed+ee,ec+d9,ed+ee,ec);cV.endShape()}};by.prototype.ellipse=function(ek,ej,d9,em){ek=ek||0;ej=ej||0;if(d9<=0&&em<=0){return}if(cM===2){d9*=2;em*=2}else{if(cM===1){d9=d9-ek;em=em-ej;ek+=d9/2;ej+=em/2}else{if(cM===0){ek+=d9/2;ej+=em/2}}}var el=d9/2,eg=em/2,d7=0.5522847498307933,eb=d7*el,ea=d7*eg;cV.beginShape();cV.vertex(ek+el,ej);cV.bezierVertex(ek+el,ej-ea,0,ek+eb,ej-eg,0,ek,ej-eg,0);cV.bezierVertex(ek-eb,ej-eg,0,ek-el,ej-ea,0,ek-el,ej,0);cV.bezierVertex(ek-el,ej+ea,0,ek-eb,ej+eg,0,ek,ej+eg,0);cV.bezierVertex(ek+eb,ej+eg,0,ek+el,ej+ea,0,ek+el,ej,0);cV.endShape();if(aF){var ec=0,eh=0,ee,ed;for(ee=0;ee<a7.length;ee++){ec+=a7[ee][0];eh+=a7[ee][1]}ec/=a7.length;eh/=a7.length;var ef=[],d8=[],ei=[];ef[0]=ec;ef[1]=eh;ef[2]=0;ef[3]=0;ef[4]=0;ef[5]=bl[0];ef[6]=bl[1];ef[7]=bl[2];ef[8]=bl[3];ef[9]=cZ[0];ef[10]=cZ[1];ef[11]=cZ[2];ef[12]=cZ[3];ef[13]=a4;ef[14]=a3;ef[15]=a2;a7.unshift(ef);for(ee=0;ee<a7.length;ee++){for(ed=0;ed<3;ed++){d8.push(a7[ee][ed])}for(ed=5;ed<9;ed++){ei.push(a7[ee][ed])}}dk(d8,"TRIANGLE_FAN",ei)}};cV.normal=function(d7,d9,d8){if(arguments.length!==3||!(typeof d7==="number"&&typeof d9==="number"&&typeof d8==="number")){throw"normal() requires three numeric arguments."}a4=d7;a3=d9;a2=d8;if(dN!==0){if(aY===0){aY=1}else{if(aY===1){aY=2}}}};cV.save=function(d8,d7){if(d7!==r){return B.open(d7.toDataURL(),"_blank")}return B.open(cV.externals.canvas.toDataURL(),"_blank")};var cv=0;cV.saveFrame=function(d7){if(d7===r){d7="screen-####.png"}var d8=d7.replace(/#+/,function(ea){var d9=""+cv++;while(d9.length<ea.length){d9="0"+d9}return d9});cV.save(d8)};var cb=d.createElement("canvas").getContext("2d");var V=[r,r,r];function bv(ee,d8,ed){var ea=V.shift();if(ea===r){ea={};ea.canvas=d.createElement("canvas");ea.context=ea.canvas.getContext("2d")}V.push(ea);var d9=ea.canvas,eb=ea.context,ec=d8||ee.width,d7=ed||ee.height;d9.width=ec;d9.height=d7;if(!ee){eb.clearRect(0,0,ec,d7)}else{if("data" in ee){eb.putImageData(ee,0,0)}else{eb.clearRect(0,0,ec,d7);eb.drawImage(ee,0,0,ec,d7)}}return ea}function bZ(d7){return{getLength:function(d8){return function(){if(d8.isRemote){throw"Image is loaded remotely. Cannot get length."}else{return d8.imageData.data.length?d8.imageData.data.length/4:0}}}(d7),getPixel:function(d8){return function(d9){var eb=d9*4,ea=d8.imageData.data;if(d8.isRemote){throw"Image is loaded remotely. Cannot get pixels."}return(ea[eb+3]&255)<<24|(ea[eb]&255)<<16|(ea[eb+1]&255)<<8|ea[eb+2]&255}}(d7),setPixel:function(d8){return function(d9,ec){var eb=d9*4,ea=d8.imageData.data;if(d8.isRemote){throw"Image is loaded remotely. Cannot set pixel."}ea[eb+0]=(ec>>16)&255;ea[eb+1]=(ec>>8)&255;ea[eb+2]=ec&255;ea[eb+3]=(ec>>24)&255;d8.__isDirty=true}}(d7),toArray:function(d8){return function(){var d9=[],ec=d8.imageData.data,eb=d8.width*d8.height;if(d8.isRemote){throw"Image is loaded remotely. Cannot get pixels."}for(var ea=0,ed=0;ea<eb;ea++,ed+=4){d9.push((ec[ed+3]&255)<<24|(ec[ed]&255)<<16|(ec[ed+1]&255)<<8|ec[ed+2]&255)}return d9}}(d7),set:function(d8){return function(d9){var ed,ec,ee;if(this.isRemote){throw"Image is loaded remotely. Cannot set pixels."}ec=d8.imageData.data;for(var ea=0,eb=d9.length;ea<eb;ea++){ee=d9[ea];ed=ea*4;ec[ed+0]=(ee>>16)&255;ec[ed+1]=(ee>>8)&255;ec[ed+2]=ee&255;ec[ed+3]=(ee>>24)&255}d8.__isDirty=true}}(d7)}}var cF=function(ea,ed,eb){this.__isDirty=false;if(ea instanceof HTMLImageElement){this.fromHTMLImageData(ea)}else{if(ed||eb){this.width=ea||1;this.height=ed||1;var d8=this.sourceImg=d.createElement("canvas");d8.width=this.width;d8.height=this.height;var ee=this.imageData=d8.getContext("2d").createImageData(this.width,this.height);this.format=eb===2||eb===4?eb:1;if(this.format===1){for(var d9=3,ec=this.imageData.data,d7=ec.length;d9<d7;d9+=4){ec[d9]=255}}this.__isDirty=true;this.updatePixels()}else{this.width=0;this.height=0;this.imageData=cb.createImageData(1,1);this.format=2}}this.pixels=bZ(this)};cF.prototype={__isPImage:true,updatePixels:function(){var d7=this.sourceImg;if(d7&&d7 instanceof HTMLCanvasElement&&this.__isDirty){d7.getContext("2d").putImageData(this.imageData,0,0)}this.__isDirty=false},fromHTMLImageData:function(d7){var d8=bv(d7);try{var ea=d8.context.getImageData(0,0,d7.width,d7.height);this.fromImageData(ea)}catch(d9){if(d7.width&&d7.height){this.isRemote=true;this.width=d7.width;this.height=d7.height}}this.sourceImg=d7},get:function(d7,ea,d8,d9){if(!arguments.length){return cV.get(this)}if(arguments.length===2){return cV.get(d7,ea,this)}if(arguments.length===4){return cV.get(d7,ea,d8,d9,this)}},set:function(d7,d9,d8){cV.set(d7,d9,d8,this);this.__isDirty=true},blend:function(ef,eb,ea,d8,ed,eg,ee,ec,d7,d9){if(arguments.length===9){cV.blend(this,ef,eb,ea,d8,ed,eg,ee,ec,d7,this)}else{if(arguments.length===10){cV.blend(ef,eb,ea,d8,ed,eg,ee,ec,d7,d9,this)}}delete this.sourceImg},copy:function(ee,eb,ea,d9,d8,ef,ed,ec,d7){if(arguments.length===8){cV.blend(this,ee,eb,ea,d9,d8,ef,ed,ec,0,this)}else{if(arguments.length===9){cV.blend(ee,eb,ea,d9,d8,ef,ed,ec,d7,0,this)}}delete this.sourceImg},filter:function(d8,d7){if(arguments.length===2){cV.filter(d8,d7,this)}else{if(arguments.length===1){cV.filter(d8,null,this)}}delete this.sourceImg},save:function(d7){cV.save(d7,this)},resize:function(d7,d9){if(this.isRemote){throw"Image is loaded remotely. Cannot resize."}if(this.width!==0||this.height!==0){if(d7===0&&d9!==0){d7=o.floor(this.width/this.height*d9)}else{if(d9===0&&d7!==0){d9=o.floor(this.height/this.width*d7)}}var d8=bv(this.imageData).canvas;var ea=bv(d8,d7,d9).context.getImageData(0,0,d7,d9);this.fromImageData(ea)}},mask:function(d7){var ea=this.toImageData(),d9,d8;if(d7 instanceof cF||d7.__isPImage){if(d7.width===this.width&&d7.height===this.height){d7=d7.toImageData();for(d9=2,d8=this.width*this.height*4;d9<d8;d9+=4){ea.data[d9+1]=d7.data[d9]}}else{throw"mask must have the same dimensions as PImage."}}else{if(d7 instanceof Array){if(this.width*this.height===d7.length){for(d9=0,d8=d7.length;d9<d8;++d9){ea.data[d9*4+3]=d7[d9]}}else{throw"mask array must be the same length as PImage pixels array."}}}this.fromImageData(ea)},loadPixels:E,toImageData:function(){if(this.isRemote){return this.sourceImg}if(!this.__isDirty){return this.imageData}var d7=bv(this.imageData);return d7.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote){throw"Image is loaded remotely. Cannot create dataURI."}var d7=bv(this.imageData);return d7.canvas.toDataURL()},fromImageData:function(eb){var d8=eb.width,ea=eb.height,d9=d.createElement("canvas"),d7=d9.getContext("2d");this.width=d9.width=d8;this.height=d9.height=ea;d7.putImageData(eb,0,0);this.format=2;this.imageData=eb;this.sourceImg=d9}};cV.PImage=cF;cV.createImage=function(d7,d8,d9){return new cF(d7,d8,d9)};cV.loadImage=function(d8,d9,eb){if(d9){d8=d8+"."+d9}var ea;if(cP.imageCache.images[d8]){ea=new cF(cP.imageCache.images[d8]);ea.loaded=true;return ea}ea=new cF;var d7=d.createElement("img");ea.sourceImg=d7;d7.onload=function(ef,ed,ec){var eg=ef;var ee=ed;var eh=ec;return function(){ee.fromHTMLImageData(eg);ee.loaded=true;if(eh){eh()}}}(d7,ea,eb);d7.src=d8;return ea};cV.requestImage=cV.loadImage;function c8(d7,ea){var d8;if(d7>=cV.width||d7<0||ea<0||ea>=cV.height){return 0}if(dR){var d9=((0|d7)+cV.width*(0|ea))*4;d8=cV.imageData.data;return(d8[d9+3]&255)<<24|(d8[d9]&255)<<16|(d8[d9+1]&255)<<8|d8[d9+2]&255}d8=cV.toImageData(0|d7,0|ea,1,1).data;return(d8[3]&255)<<24|(d8[0]&255)<<16|(d8[1]&255)<<8|d8[2]&255}function c7(d7,eb,d8){if(d8.isRemote){throw"Image is loaded remotely. Cannot get x,y."}var ea=eb*d8.width*4+d7*4,d9=d8.imageData.data;return(d9[ea+3]&255)<<24|(d9[ea]&255)<<16|(d9[ea+1]&255)<<8|d9[ea+2]&255}function c5(d7,eb,d8,d9){var ea=new cF(d8,d9,2);ea.fromImageData(cV.toImageData(d7,eb,d8,d9));return ea}function c4(ec,eb,ed,ei,eo){if(eo.isRemote){throw"Image is loaded remotely. Cannot get x,y,w,h."}var em=new cF(ed,ei,2),d9=em.imageData.data,ea=eo.width,ej=eo.height,el=eo.imageData.data;var d7=o.max(0,-eb),d8=o.max(0,-ec),ee=o.min(ei,ej-eb),ef=o.min(ed,ea-ec);for(var eh=d7;eh<ee;++eh){var ek=((eb+eh)*ea+(ec+d8))*4;var en=(eh*ed+d8)*4;for(var eg=d8;eg<ef;++eg){d9[en++]=el[ek++];d9[en++]=el[ek++];d9[en++]=el[ek++];d9[en++]=el[ek++]}}em.__isDirty=true;return em}cV.get=function(d7,eb,d8,ea,d9){if(d9!==undefined){return c4(d7,eb,d8,ea,d9)}if(ea!==undefined){return c5(d7,eb,d8,ea)}if(d8!==undefined){return c7(d7,eb,d8)}if(eb!==undefined){return c8(d7,eb)}if(d7!==undefined){return c4(0,0,d7.width,d7.height,d7)}return c5(0,0,cV.width,cV.height)};cV.createGraphics=function(d7,d9,d8){var ea=new D;ea.size(d7,d9,d8);return ea};function R(){if(dR){d4=ai;dR=false;cV.updatePixels()}}function cp(){function d8(ec,ea){function eb(){R();d4[ea].apply(d4,arguments)}ec[ea]=eb}function d7(ed,eb){function ea(){R();return d4[eb]}function ec(ee){R();d4[eb]=ee}cV.defineProperty(ed,eb,{get:ea,set:ec})}for(var d9 in d4){if(typeof d4[d9]==="function"){d8(this,d9)}else{d7(this,d9)}}}function cB(){if(dR){return}cV.loadPixels();if(cm===null){ai=d4;cm=new cp}dR=true;d4=cm;dZ=0}function bu(d7,d9,d8){if(d7<cV.width&&d7>=0&&d9>=0&&d9<cV.height){cB();cV.pixels.setPixel((0|d7)+cV.width*(0|d9),d8);if(++dZ>bY){R()}}}function bs(d7,ed,ea,d8){if(d8.isRemote){throw"Image is loaded remotely. Cannot set x,y."}var ec=cV.color.toArray(ea);var eb=ed*d8.width*4+d7*4;var d9=d8.imageData.data;d9[eb]=ec[0];d9[eb+1]=ec[1];d9[eb+2]=ec[2];d9[eb+3]=ec[3]}cV.set=function(d7,ec,ea,d9){var d8,eb;if(arguments.length===3){if(typeof ea==="number"){bu(d7,ec,ea)}else{if(ea instanceof cF||ea.__isPImage){cV.image(ea,d7,ec)}}}else{if(arguments.length===4){bs(d7,ec,ea,d9)}}};cV.imageData={};cV.pixels={getLength:function(){return cV.imageData.data.length?cV.imageData.data.length/4:0},getPixel:function(d7){var d9=d7*4,d8=cV.imageData.data;return d8[d9+3]<<24&4278190080|d8[d9+0]<<16&16711680|d8[d9+1]<<8&65280|d8[d9+2]&255},setPixel:function(d7,ea){var d9=d7*4,d8=cV.imageData.data;d8[d9+0]=(ea&16711680)>>>16;d8[d9+1]=(ea&65280)>>>8;d8[d9+2]=ea&255;d8[d9+3]=(ea&4278190080)>>>24},toArray:function(){var d7=[],d9=cV.imageData.width*cV.imageData.height,ea=cV.imageData.data;for(var d8=0,eb=0;d8<d9;d8++,eb+=4){d7.push(ea[eb+3]<<24&4278190080|ea[eb+0]<<16&16711680|ea[eb+1]<<8&65280|ea[eb+2]&255)}return d7},set:function(d7){for(var d8=0,d9=d7.length;d8<d9;d8++){this.setPixel(d8,d7[d8])}}};cV.loadPixels=function(){cV.imageData=dU.$ensureContext().getImageData(0,0,cV.width,cV.height)};cV.updatePixels=function(){if(cV.imageData){dU.$ensureContext().putImageData(cV.imageData,0,0)}};cV.hint=function(d8){var d7=dU.$ensureContext();if(d8===4){d7.disable(d7.DEPTH_TEST);d7.depthMask(false);d7.clear(d7.DEPTH_BUFFER_BIT)}else{if(d8===-4){d7.enable(d7.DEPTH_TEST);d7.depthMask(true)}}};var bB=function(ea,d9,d8,d7){var eb;if(ea instanceof cF||ea.__isPImage){eb=ea;if(!eb.loaded){throw"Error using image in background(): PImage not loaded."}if(eb.width!==cV.width||eb.height!==cV.height){throw"Background image must be the same dimensions as the canvas."}}else{eb=cV.color(ea,d9,d8,d7)}a0=eb};bO.prototype.background=function(ea,d9,d8,d7){if(ea!==r){bB(ea,d9,d8,d7)}if(a0 instanceof cF||a0.__isPImage){aC();d4.setTransform(1,0,0,1,0,0);cV.image(a0,0,0);cO()}else{aC();d4.setTransform(1,0,0,1,0,0);if(cV.alpha(a0)!==bR){d4.clearRect(0,0,cV.width,cV.height)}d4.fillStyle=cV.color.toString(a0);d4.fillRect(0,0,cV.width,cV.height);ap=true;cO()}};by.prototype.background=function(ea,d9,d8,d7){if(arguments.length>0){bB(ea,d9,d8,d7)}var eb=cV.color.toGLArray(a0);d4.clearColor(eb[0],eb[1],eb[2],eb[3]);d4.clear(d4.COLOR_BUFFER_BIT|d4.DEPTH_BUFFER_BIT)};bO.prototype.image=function(ea,ef,ed,eg,eb){ef=o.round(ef);ed=o.round(ed);if(ea.width>0){var eh=eg||ea.width;var ee=eb||ea.height;var d7=bh(ef||0,ed||0,eg||ea.width,eb||ea.height,arguments.length<4);var ec=!!ea.sourceImg&&bb===null;if(ec){var d8=ea.sourceImg;if(ea.__isDirty){ea.updatePixels()}d4.drawImage(d8,0,0,d8.width,d8.height,d7.x,d7.y,d7.w,d7.h)}else{var d9=ea.toImageData();if(bb!==null){bb(d9);ea.__isDirty=true}d4.drawImage(bv(d9).canvas,0,0,ea.width,ea.height,d7.x,d7.y,d7.w,d7.h)}}};by.prototype.image=function(d9,d7,eb,d8,ea){if(d9.width>0){d7=o.round(d7);eb=o.round(eb);d8=d8||d9.width;ea=ea||d9.height;cV.beginShape(cV.QUADS);cV.texture(d9);cV.vertex(d7,eb,0,0,0);cV.vertex(d7,eb+ea,0,0,ea);cV.vertex(d7+d8,eb+ea,0,d8,ea);cV.vertex(d7+d8,eb,0,d8,0);cV.endShape()}};cV.tint=function(ea,d9,d7,ef){var ec=cV.color(ea,d9,d7,ef);var d8=cV.red(ec)/bG;var eb=cV.green(ec)/bF;var ed=cV.blue(ec)/bD;var ee=cV.alpha(ec)/bR;bb=function(ej){var ei=ej.data,eh=4*ej.width*ej.height;for(var eg=0;eg<eh;){ei[eg++]*=d8;ei[eg++]*=eb;ei[eg++]*=ed;ei[eg++]*=ee}};bt=function(eh){for(var eg=0;eg<eh.length;){eh[eg++]=d8;eh[eg++]=eb;eh[eg++]=ed;eh[eg++]=ee}}};cV.noTint=function(){bb=null;bt=null};cV.copy=function(d7,ec,eb,ed,d9,ef,ee,d8,ea){if(ea===r){ea=d8;d8=ee;ee=ef;ef=d9;d9=ed;ed=eb;eb=ec;ec=d7;d7=cV}cV.blend(d7,ec,eb,ed,d9,ef,ee,d8,ea,0)};cV.blend=function(d7,eh,eg,ek,ec,em,el,d8,ee,ed,ea){if(d7.isRemote){throw"Image is loaded remotely. Cannot blend image."}if(ed===r){ed=ee;ee=d8;d8=el;el=em;em=ec;ec=ek;ek=eg;eg=eh;eh=d7;d7=cV}var d9=eh+ek,ef=eg+ec,ej=em+d8,eb=el+ee,ei=ea||cV;if(ea===r||ed===r){cV.loadPixels()}d7.loadPixels();if(d7===cV&&cV.intersect(eh,eg,d9,ef,em,el,ej,eb)){cV.blit_resize(cV.get(eh,eg,d9-eh,ef-eg),0,0,d9-eh-1,ef-eg-1,ei.imageData.data,ei.width,ei.height,em,el,ej,eb,ed)}else{cV.blit_resize(d7,eh,eg,d9,ef,ei.imageData.data,ei.width,ei.height,em,el,ej,eb,ed)}if(ea===r){cV.updatePixels()}};var bm=function(eb){var d7=cV.floor(eb*3.5),d9,d8;d7=d7<1?1:d7<248?d7:248;if(cV.shared.blurRadius!==d7){cV.shared.blurRadius=d7;cV.shared.blurKernelSize=1+(cV.shared.blurRadius<<1);cV.shared.blurKernel=new e(cV.shared.blurKernelSize);var ed=cV.shared.blurKernel;var ec=cV.shared.blurKernelSize;var ea=cV.shared.blurRadius;for(d9=0;d9<ec;d9++){ed[d9]=0}var ee=(d7-1)*(d7-1);for(d9=1;d9<d7;d9++){ed[d7+d9]=ed[d8]=ee}ed[d7]=d7*d7}};var b6=function(el,eq){var d9,ec,ei,en,eo,ex,ep;var es,ek,ew,ev,em;var ef=eq.pixels.getLength();var er=new e(ef);var eA=new e(ef);var ee=new e(ef);var ez=new e(ef);var ey=0;var eh,eg,eu,eb;bm(el);var d8=eq.height;var d7=eq.width;var et=cV.shared.blurKernelSize;var ej=cV.shared.blurRadius;var ed=cV.shared.blurKernel;var ea=eq.imageData.data;for(eg=0;eg<d8;eg++){for(eh=0;eh<d7;eh++){en=ei=ec=eo=d9=0;es=eh-ej;if(es<0){em=-es;es=0}else{if(es>=d7){break}em=0}for(eu=em;eu<et;eu++){if(es>=d7){break}eb=(es+ey)*4;ep=ed[eu];eo+=ep*ea[eb+3];ec+=ep*ea[eb];ei+=ep*ea[eb+1];en+=ep*ea[eb+2];d9+=ep;es++}ek=ey+eh;ez[ek]=eo/d9;er[ek]=ec/d9;eA[ek]=ei/d9;ee[ek]=en/d9}ey+=d7}ey=0;ew=-ej;ev=ew*d7;for(eg=0;eg<d8;eg++){for(eh=0;eh<d7;eh++){en=ei=ec=eo=d9=0;if(ew<0){em=ek=-ew;es=eh}else{if(ew>=d8){break}em=0;ek=ew;es=eh+ev}for(eu=em;eu<et;eu++){if(ek>=d8){break}ep=ed[eu];eo+=ep*ez[es];ec+=ep*er[es];ei+=ep*eA[es];en+=ep*ee[es];d9+=ep;ek++;es+=d7}eb=(eh+ey)*4;ea[eb]=ec/d9;ea[eb+1]=ei/d9;ea[eb+2]=en/d9;ea[eb+3]=eo/d9}ey+=d7;ev+=d7;ew++}};var ce=function(eo,ei){var ee=0;var es=ei.pixels.getLength();var ej=new I(es);var em,d8,eh,eg,ea;var en,eb,ed,ef,d9,ek,er,d7,ep,ec,eq,el;if(!eo){while(ee<es){em=ee;d8=ee+ei.width;while(ee<d8){eh=eg=ei.pixels.getPixel(ee);eb=ee-1;en=ee+1;ed=ee-ei.width;ef=ee+ei.width;if(eb<em){eb=ee}if(en>=d8){en=ee}if(ed<0){ed=0}if(ef>=es){ef=ee}er=ei.pixels.getPixel(ed);ek=ei.pixels.getPixel(eb);d7=ei.pixels.getPixel(ef);d9=ei.pixels.getPixel(en);ea=77*(eh>>16&255)+151*(eh>>8&255)+28*(eh&255);ec=77*(ek>>16&255)+151*(ek>>8&255)+28*(ek&255);ep=77*(d9>>16&255)+151*(d9>>8&255)+28*(d9&255);eq=77*(er>>16&255)+151*(er>>8&255)+28*(er&255);el=77*(d7>>16&255)+151*(d7>>8&255)+28*(d7&255);if(ec>ea){eg=ek;ea=ec}if(ep>ea){eg=d9;ea=ep}if(eq>ea){eg=er;ea=eq}if(el>ea){eg=d7;ea=el}ej[ee++]=eg}}}else{while(ee<es){em=ee;d8=ee+ei.width;while(ee<d8){eh=eg=ei.pixels.getPixel(ee);eb=ee-1;en=ee+1;ed=ee-ei.width;ef=ee+ei.width;if(eb<em){eb=ee}if(en>=d8){en=ee}if(ed<0){ed=0}if(ef>=es){ef=ee}er=ei.pixels.getPixel(ed);ek=ei.pixels.getPixel(eb);d7=ei.pixels.getPixel(ef);d9=ei.pixels.getPixel(en);ea=77*(eh>>16&255)+151*(eh>>8&255)+28*(eh&255);ec=77*(ek>>16&255)+151*(ek>>8&255)+28*(ek&255);ep=77*(d9>>16&255)+151*(d9>>8&255)+28*(d9&255);eq=77*(er>>16&255)+151*(er>>8&255)+28*(er&255);el=77*(d7>>16&255)+151*(d7>>8&255)+28*(d7&255);if(ec<ea){eg=ek;ea=ec}if(ep<ea){eg=d9;ea=ep}if(eq<ea){eg=er;ea=eq}if(el<ea){eg=d7;ea=el}ej[ee++]=eg}}}ei.pixels.set(ej)};cV.filter=function(ee,ed,ea){var eh,ec,d8,eg;if(arguments.length===3){ea.loadPixels();eh=ea}else{cV.loadPixels();eh=cV}if(ed===r){ed=null}if(eh.isRemote){throw"Image is loaded remotely. Cannot filter image."}var ei=eh.pixels.getLength();switch(ee){case 11:var ej=ed||1;b6(ej,eh);break;case 12:if(eh.format===4){for(eg=0;eg<ei;eg++){ec=255-eh.pixels.getPixel(eg);eh.pixels.setPixel(eg,4278190080|ec<<16|ec<<8|ec)}eh.format=1}else{for(eg=0;eg<ei;eg++){ec=eh.pixels.getPixel(eg);d8=77*(ec>>16&255)+151*(ec>>8&255)+28*(ec&255)>>8;eh.pixels.setPixel(eg,ec&4278190080|d8<<16|d8<<8|d8)}}break;case 13:for(eg=0;eg<ei;eg++){eh.pixels.setPixel(eg,eh.pixels.getPixel(eg)^16777215)}break;case 15:if(ed===null){throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"}var em=cV.floor(ed);if(em<2||em>255){throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"}var ef=em-1;for(eg=0;eg<ei;eg++){var d7=eh.pixels.getPixel(eg)>>16&255;var ek=eh.pixels.getPixel(eg)>>8&255;var d9=eh.pixels.getPixel(eg)&255;d7=(d7*em>>8)*255/ef;ek=(ek*em>>8)*255/ef;d9=(d9*em>>8)*255/ef;eh.pixels.setPixel(eg,4278190080&eh.pixels.getPixel(eg)|d7<<16|ek<<8|d9)}break;case 14:for(eg=0;eg<ei;eg++){eh.pixels.setPixel(eg,eh.pixels.getPixel(eg)|4278190080)}eh.format=1;break;case 16:if(ed===null){ed=0.5}if(ed<0||ed>1){throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"}var eb=cV.floor(ed*255);for(eg=0;eg<ei;eg++){var el=cV.max((eh.pixels.getPixel(eg)&16711680)>>16,cV.max((eh.pixels.getPixel(eg)&65280)>>8,eh.pixels.getPixel(eg)&255));eh.pixels.setPixel(eg,eh.pixels.getPixel(eg)&4278190080|(el<eb?0:16777215))}break;case 17:ce(true,eh);break;case 18:ce(false,eh);break}eh.updatePixels()};cV.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null};cV.intersect=function(d9,eg,d8,ef,ek,ed,ej,ec){var ei=d8-d9+1;var eb=ef-eg+1;var d7=ej-ek+1;var ee=ec-ed+1;if(ek<d9){d7+=ek-d9;if(d7>ei){d7=ei}}else{var eh=ei+d9-ek;if(d7>eh){d7=eh}}if(ed<eg){ee+=ed-eg;if(ee>eb){ee=eb}}else{var ea=eb+eg-ed;if(ee>ea){ee=ea}}return !(d7<=0||ee<=0)};var dO={};dO[1]=cV.modes.blend;dO[2]=cV.modes.add;dO[4]=cV.modes.subtract;dO[8]=cV.modes.lightest;dO[16]=cV.modes.darkest;dO[0]=cV.modes.replace;dO[32]=cV.modes.difference;dO[64]=cV.modes.exclusion;dO[128]=cV.modes.multiply;dO[256]=cV.modes.screen;dO[512]=cV.modes.overlay;dO[1024]=cV.modes.hard_light;dO[2048]=cV.modes.soft_light;dO[4096]=cV.modes.dodge;dO[8192]=cV.modes.burn;cV.blit_resize=function(ek,ew,eq,ev,ep,eB,eg,eo,eu,el,et,ej,em){var ez,ey;if(ew<0){ew=0}if(eq<0){eq=0}if(ev>=ek.width){ev=ek.width-1}if(ep>=ek.height){ep=ek.height-1}var eF=ev-ew;var eK=ep-eq;var d7=et-eu;var eh=ej-el;if(d7<=0||eh<=0||eF<=0||eK<=0||eu>=eg||el>=eo||ew>=ek.width||eq>=ek.height){return}var ee=o.floor(eF/d7*32768);var eb=o.floor(eK/eh*32768);var eD=cV.shared;eD.srcXOffset=o.floor(eu<0?-eu*ee:ew*32768);eD.srcYOffset=o.floor(el<0?-el*eb:eq*32768);if(eu<0){d7+=eu;eu=0}if(el<0){eh+=el;el=0}d7=o.min(d7,eg-eu);eh=o.min(eh,eo-el);var er=el*eg+eu;var eN;eD.srcBuffer=ek.imageData.data;eD.iw=ek.width;eD.iw1=ek.width-1;eD.ih1=ek.height-1;var es=cV.filter_bilinear,eH=cV.filter_new_scanline,ef=dO[em],eE,eJ,eC,eG,d9,ea,d8=4278190080,eI=16711680,ex=65280,ed=255,eM=32767,eA=15,ei=1,en=9,ec=eD.srcBuffer,eL=o.min;for(ey=0;ey<eh;ey++){eD.sX=eD.srcXOffset;eD.fracV=eD.srcYOffset&eM;eD.ifV=eM-eD.fracV;eD.v1=(eD.srcYOffset>>eA)*eD.iw;eD.v2=eL((eD.srcYOffset>>eA)+1,eD.ih1)*eD.iw;for(ez=0;ez<d7;ez++){eJ=(er+ez)*4;eN=eB[eJ+3]<<24&d8|eB[eJ]<<16&eI|eB[eJ+1]<<8&ex|eB[eJ+2]&ed;eD.fracU=eD.sX&eM;eD.ifU=eM-eD.fracU;eD.ul=eD.ifU*eD.ifV>>eA;eD.ll=eD.ifU*eD.fracV>>eA;eD.ur=eD.fracU*eD.ifV>>eA;eD.lr=eD.fracU*eD.fracV>>eA;eD.u1=eD.sX>>eA;eD.u2=eL(eD.u1+1,eD.iw1);eC=(eD.v1+eD.u1)*4;eG=(eD.v1+eD.u2)*4;d9=(eD.v2+eD.u1)*4;ea=(eD.v2+eD.u2)*4;eD.cUL=ec[eC+3]<<24&d8|ec[eC]<<16&eI|ec[eC+1]<<8&ex|ec[eC+2]&ed;eD.cUR=ec[eG+3]<<24&d8|ec[eG]<<16&eI|ec[eG+1]<<8&ex|ec[eG+2]&ed;eD.cLL=ec[d9+3]<<24&d8|ec[d9]<<16&eI|ec[d9+1]<<8&ex|ec[d9+2]&ed;eD.cLR=ec[ea+3]<<24&d8|ec[ea]<<16&eI|ec[ea+1]<<8&ex|ec[ea+2]&ed;eD.r=eD.ul*((eD.cUL&eI)>>16)+eD.ll*((eD.cLL&eI)>>16)+eD.ur*((eD.cUR&eI)>>16)+eD.lr*((eD.cLR&eI)>>16)<<ei&eI;eD.g=eD.ul*(eD.cUL&ex)+eD.ll*(eD.cLL&ex)+eD.ur*(eD.cUR&ex)+eD.lr*(eD.cLR&ex)>>>eA&ex;eD.b=eD.ul*(eD.cUL&ed)+eD.ll*(eD.cLL&ed)+eD.ur*(eD.cUR&ed)+eD.lr*(eD.cLR&ed)>>>eA;eD.a=eD.ul*((eD.cUL&d8)>>>24)+eD.ll*((eD.cLL&d8)>>>24)+eD.ur*((eD.cUR&d8)>>>24)+eD.lr*((eD.cLR&d8)>>>24)<<en&d8;eE=ef(eN,eD.a|eD.r|eD.g|eD.b);eB[eJ]=(eE&eI)>>>16;eB[eJ+1]=(eE&ex)>>>8;eB[eJ+2]=eE&ed;eB[eJ+3]=(eE&d8)>>>24;eD.sX+=ee}er+=eg;eD.srcYOffset+=eb}};cV.loadFont=function(d8,d9){if(d8===r){throw"font name required in loadFont."}if(d8.indexOf(".svg")===-1){if(d9===r){d9=U.size}return F.get(d8,d9)}var d7=cV.loadGlyphs(d8);return{name:d8,css:"12px sans-serif",glyph:true,units_per_em:d7.units_per_em,horiz_adv_x:1/d7.units_per_em*d7.horiz_adv_x,ascent:d7.ascent,descent:d7.descent,width:function(ee){var ec=0;var ea=ee.length;for(var eb=0;eb<ea;eb++){try{ec+=parseFloat(cV.glyphLook(cV.glyphTable[d8],ee[eb]).horiz_adv_x)}catch(ed){D.debug(ed)}}return ec/cV.glyphTable[d8].units_per_em}}};cV.createFont=function(d7,d8){return cV.loadFont(d7,d8)};cV.textFont=function(d7,d9){if(d9!==r){if(!d7.glyph){d7=F.get(d7.name,d9)}dW=d9}U=d7;W=U.name;aZ=U.ascent;dx=U.descent;d3=U.leading;var d8=dU.$ensureContext();d8.font=U.css};cV.textSize=function(d8){if(d8!==dW){U=F.get(W,d8);dW=d8;aZ=U.ascent;dx=U.descent;d3=U.leading;var d7=dU.$ensureContext();d7.font=U.css}};cV.textAscent=function(){return aZ};cV.textDescent=function(){return dx};cV.textLeading=function(d7){d3=d7};cV.textAlign=function(d8,d7){L=d8;c0=d7||0};function br(d7){if(d7 instanceof String){return d7}if(typeof d7==="number"){if(d7===(0|d7)){return d7.toString()}return cV.nf(d7,0,3)}if(d7===null||d7===r){return""}return d7.toString()}bO.prototype.textWidth=function(eb){var d7=br(eb).split(/\r?\n/g),d9=0;var d8,ea=d7.length;d4.font=U.css;for(d8=0;d8<ea;++d8){d9=o.max(d9,U.measureTextWidth(d7[d8]))}return d9|0};by.prototype.textWidth=function(ec){var d7=br(ec).split(/\r?\n/g),ea=0;var d9,eb=d7.length;if(cD===r){cD=d.createElement("canvas")}var d8=cD.getContext("2d");d8.font=U.css;for(d9=0;d9<eb;++d9){ea=o.max(ea,d8.measureText(d7[d9]).width)}return ea|0};cV.glyphLook=function(d7,d8){try{switch(d8){case"1":return d7.one;case"2":return d7.two;case"3":return d7.three;case"4":return d7.four;case"5":return d7.five;case"6":return d7.six;case"7":return d7.seven;case"8":return d7.eight;case"9":return d7.nine;case"0":return d7.zero;case" ":return d7.space;case"$":return d7.dollar;case"!":return d7.exclam;case'"':return d7.quotedbl;case"#":return d7.numbersign;case"%":return d7.percent;case"&":return d7.ampersand;case"'":return d7.quotesingle;case"(":return d7.parenleft;case")":return d7.parenright;case"*":return d7.asterisk;case"+":return d7.plus;case",":return d7.comma;case"-":return d7.hyphen;case".":return d7.period;case"/":return d7.slash;case"_":return d7.underscore;case":":return d7.colon;case";":return d7.semicolon;case"<":return d7.less;case"=":return d7.equal;case">":return d7.greater;case"?":return d7.question;case"@":return d7.at;case"[":return d7.bracketleft;case"\\":return d7.backslash;case"]":return d7.bracketright;case"^":return d7.asciicircum;case"`":return d7.grave;case"{":return d7.braceleft;case"|":return d7.bar;case"}":return d7.braceright;case"~":return d7.asciitilde;default:return d7[d8]}}catch(d9){D.debug(d9)}};bO.prototype.text$line=function(ef,ei,eh,eg,ec){var ee=0,ed=0;if(!U.glyph){if(ef&&"fillText" in d4){if(ap){d4.fillStyle=cV.color.toString(aX);ap=false}if(ec===39||ec===3){ee=U.measureTextWidth(ef);if(ec===39){ed=-ee}else{ed=-ee/2}}d4.fillText(ef,ei+ed,eh)}}else{var d7=cV.glyphTable[W];aC();d4.translate(ei,eh+dW);if(ec===39||ec===3){ee=d7.width(ef);if(ec===39){ed=-ee}else{ed=-ee/2}}var ej=d7.units_per_em,eb=1/ej*dW;d4.scale(eb,eb);for(var d8=0,d9=ef.length;d8<d9;d8++){try{cV.glyphLook(d7,ef[d8]).draw()}catch(ea){D.debug(ea)}}cO()}};by.prototype.text$line=function(ee,ei,eh,ef,ec){if(cD===r){cD=d.createElement("canvas")}var d8=d4;d4=cD.getContext("2d");d4.font=U.css;var ed=U.measureTextWidth(ee);cD.width=ed;cD.height=dW;d4=cD.getContext("2d");d4.font=U.css;d4.textBaseline="top";bO.prototype.text$line(ee,0,0,0,37);var d7=cD.width/cD.height;d4=d8;d4.bindTexture(d4.TEXTURE_2D,bP);d4.texImage2D(d4.TEXTURE_2D,0,d4.RGBA,d4.RGBA,d4.UNSIGNED_BYTE,cD);d4.texParameteri(d4.TEXTURE_2D,d4.TEXTURE_MAG_FILTER,d4.LINEAR);d4.texParameteri(d4.TEXTURE_2D,d4.TEXTURE_MIN_FILTER,d4.LINEAR);d4.texParameteri(d4.TEXTURE_2D,d4.TEXTURE_WRAP_T,d4.CLAMP_TO_EDGE);d4.texParameteri(d4.TEXTURE_2D,d4.TEXTURE_WRAP_S,d4.CLAMP_TO_EDGE);var eb=0;if(ec===39){eb=-ed}else{if(ec===3){eb=-ed/2}}var d9=new aM;var ea=dW*0.5;d9.translate(ei+eb-ea/2,eh-ea,ef);d9.scale(-d7*ea,-ea,ea);d9.translate(-1,-1,-1);d9.transpose();var eg=new aM;eg.scale(1,-1,1);eg.apply(dF.array());eg.transpose();d4.useProgram(dM);db("vertex2d",dM,"Vertex",3,cG);db("aTextureCoord2d",dM,"aTextureCoord",2,aa);dV("uSampler2d",dM,"uSampler",[0]);dV("picktype2d",dM,"picktype",1);a5("model2d",dM,"model",false,d9.array());a5("view2d",dM,"view",false,eg.array());dY("color2d",dM,"color",bl);d4.bindBuffer(d4.ELEMENT_ARRAY_BUFFER,P);d4.drawElements(d4.TRIANGLES,6,d4.UNSIGNED_SHORT,0)};function be(ea,ed,ec,eb){var ef,d9;if(ea.indexOf("\n")<0){ef=[ea];d9=1}else{ef=ea.split(/\r?\n/g);d9=ef.length}var d7=0;if(c0===101){d7=aZ+dx}else{if(c0===3){d7=aZ/2-(d9-1)*d3/2}else{if(c0===102){d7=-(dx+(d9-1)*d3)}}}for(var d8=0;d8<d9;++d8){var ee=ef[d8];dU.text$line(ee,ed,ec+d7,eb,L);d7+=d3}}function a9(en,ei,eh,em,ek,eg){if(en.length===0||em===0||ek===0){return}if(dW>ek){return}var ej=-1;var eb=0;var d7=0;var ed=[];for(var ec=0,ep=en.length;ec<ep;ec++){var ee=en[ec];var es=ee===" ";var el=U.measureTextWidth(ee);if(ee!=="\n"&&d7+el<=em){if(es){ej=ec}d7+=el}else{if(ej+1===eb){if(ec>0){ej=ec}else{return}}if(ee==="\n"){ed.push({text:en.substring(eb,ec),width:d7});eb=ec+1}else{ed.push({text:en.substring(eb,ej+1),width:d7});eb=ej+1}d7=0;ec=eb-1}}if(eb<ep){ed.push({text:en.substring(eb),width:d7})}var er=1,ef=aZ;if(L===3){er=em/2}else{if(L===39){er=em}}var eo=ed.length,d8=o.min(eo,o.floor(ek/d3));if(c0===101){ef=aZ+dx}else{if(c0===3){ef=ek/2-d3*(d8/2-1)}else{if(c0===102){ef=dx+d3}}}var d9,ea,eq;for(d9=0;d9<eo;d9++){eq=d9*d3;if(ef+eq>ek-dx){break}ea=ed[d9];dU.text$line(ea.text,ei+er,eh+ef+eq,eg,L)}}cV.text=function(){if(cH===5){return}if(arguments.length===3){be(br(arguments[0]),arguments[1],arguments[2],0)}else{if(arguments.length===4){be(br(arguments[0]),arguments[1],arguments[2],arguments[3])}else{if(arguments.length===5){a9(br(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0)}else{if(arguments.length===6){a9(br(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}}}};cV.textMode=function(d7){cH=d7};cV.loadGlyphs=function(ed){var ef,ee,eb,d9,em,el,ek,en,eh,eo,ei,ej="[0-9\\-]+",eg;var ec=function(eu,et){var er=0,eq=[],ep,es=new RegExp(eu,"g");ep=eq[er]=es.exec(et);while(ep){er++;ep=eq[er]=es.exec(et)}return eq};var d8=function(eu){var ev=ec("[A-Za-z][0-9\\- ]+|Z",eu);var et=function(){aC();return dU.$ensureContext()};var er=function(){bk();dc();cO()};eg="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();";ef=0;ee=0;eb=0;d9=0;em=0;el=0;eu=0;en=0;eh="";eo=ev.length-1;for(var eq=0;eq<eo;eq++){var ep=ev[eq][0],es=ec(ej,ep);switch(ep[0]){case"M":ef=parseFloat(es[0][0]);ee=parseFloat(es[1][0]);eg+="curContext.moveTo("+ef+","+-ee+");";break;case"L":ef=parseFloat(es[0][0]);ee=parseFloat(es[1][0]);eg+="curContext.lineTo("+ef+","+-ee+");";break;case"H":ef=parseFloat(es[0][0]);eg+="curContext.lineTo("+ef+","+-ee+");";break;case"V":ee=parseFloat(es[0][0]);eg+="curContext.lineTo("+ef+","+-ee+");";break;case"T":em=parseFloat(es[0][0]);el=parseFloat(es[1][0]);if(eh==="Q"||eh==="T"){eu=o.sqrt(o.pow(ef-eb,2)+o.pow(d9-ee,2));en=o.PI+o.atan2(eb-ef,d9-ee);eb=ef+o.sin(en)*eu;d9=ee+o.cos(en)*eu}else{eb=ef;d9=ee}eg+="curContext.quadraticCurveTo("+eb+","+-d9+","+em+","+-el+");";ef=em;ee=el;break;case"Q":eb=parseFloat(es[0][0]);d9=parseFloat(es[1][0]);em=parseFloat(es[2][0]);el=parseFloat(es[3][0]);eg+="curContext.quadraticCurveTo("+eb+","+-d9+","+em+","+-el+");";ef=em;ee=el;break;case"Z":eg+="curContext.closePath();";break}eh=ep[0]}eg+="afterPathDraw();";eg+="curContext.translate("+ei+",0);";eg+="}}";return(new Function("beforePathDraw","afterPathDraw",eg))(et,er)};var d7=function(es){var er=es.getElementsByTagName("font");cV.glyphTable[ed].horiz_adv_x=er[0].getAttribute("horiz-adv-x");var eu=es.getElementsByTagName("font-face")[0];cV.glyphTable[ed].units_per_em=parseFloat(eu.getAttribute("units-per-em"));cV.glyphTable[ed].ascent=parseFloat(eu.getAttribute("ascent"));cV.glyphTable[ed].descent=parseFloat(eu.getAttribute("descent"));var ew=es.getElementsByTagName("glyph"),eq=ew.length;for(var ev=0;ev<eq;ev++){var ep=ew[ev].getAttribute("unicode");var et=ew[ev].getAttribute("glyph-name");ei=ew[ev].getAttribute("horiz-adv-x");if(ei===null){ei=cV.glyphTable[ed].horiz_adv_x}ek=ew[ev].getAttribute("d");if(ek!==r){eg=d8(ek);cV.glyphTable[ed][et]={name:et,unicode:ep,horiz_adv_x:ei,draw:eg.draw}}}};var ea=function(){var er;try{er=d.implementation.createDocument("","",null)}catch(et){D.debug(et.message);return}try{er.async=false;er.load(ed);d7(er.getElementsByTagName("svg")[0])}catch(eq){D.debug(eq);try{var ep=new B.XMLHttpRequest;ep.open("GET",ed,false);ep.send(null);d7(ep.responseXML.documentElement)}catch(es){D.debug(eq)}}};cV.glyphTable[ed]={};ea(ed);return cV.glyphTable[ed]};cV.param=function(d9){var d8="data-processing-"+d9;if(ac.hasAttribute(d8)){return ac.getAttribute(d8)}for(var ea=0,d7=ac.childNodes.length;ea<d7;++ea){var eb=ac.childNodes.item(ea);if(eb.nodeType!==1||eb.tagName.toLowerCase()!=="param"){continue}if(eb.getAttribute("name")===d9){return eb.getAttribute("value")}}if(cP.params.hasOwnProperty(d9)){return cP.params[d9]}return null};function cK(d8){if(d8==="3D"){dU=new by}else{if(d8==="2D"){dU=new bO}else{dU=new b9}}for(var d7 in b9.prototype){if(b9.prototype.hasOwnProperty(d7)&&d7.indexOf("$")<0){cV[d7]=dU[d7]}}dU.$init()}function cT(d7){return function(){cK("2D");return dU[d7].apply(this,arguments)}}b9.prototype.translate=cT("translate");b9.prototype.scale=cT("scale");b9.prototype.pushMatrix=cT("pushMatrix");b9.prototype.popMatrix=cT("popMatrix");b9.prototype.resetMatrix=cT("resetMatrix");b9.prototype.applyMatrix=cT("applyMatrix");b9.prototype.rotate=cT("rotate");b9.prototype.rotateZ=cT("rotateZ");b9.prototype.redraw=cT("redraw");b9.prototype.toImageData=cT("toImageData");b9.prototype.ambientLight=cT("ambientLight");b9.prototype.directionalLight=cT("directionalLight");b9.prototype.lightFalloff=cT("lightFalloff");b9.prototype.lightSpecular=cT("lightSpecular");b9.prototype.pointLight=cT("pointLight");b9.prototype.noLights=cT("noLights");b9.prototype.spotLight=cT("spotLight");b9.prototype.beginCamera=cT("beginCamera");b9.prototype.endCamera=cT("endCamera");b9.prototype.frustum=cT("frustum");b9.prototype.box=cT("box");b9.prototype.sphere=cT("sphere");b9.prototype.ambient=cT("ambient");b9.prototype.emissive=cT("emissive");b9.prototype.shininess=cT("shininess");b9.prototype.specular=cT("specular");b9.prototype.fill=cT("fill");b9.prototype.stroke=cT("stroke");b9.prototype.strokeWeight=cT("strokeWeight");b9.prototype.smooth=cT("smooth");b9.prototype.noSmooth=cT("noSmooth");b9.prototype.point=cT("point");b9.prototype.vertex=cT("vertex");b9.prototype.endShape=cT("endShape");b9.prototype.bezierVertex=cT("bezierVertex");b9.prototype.curveVertex=cT("curveVertex");b9.prototype.curve=cT("curve");b9.prototype.line=cT("line");b9.prototype.bezier=cT("bezier");b9.prototype.rect=cT("rect");b9.prototype.ellipse=cT("ellipse");b9.prototype.background=cT("background");b9.prototype.image=cT("image");b9.prototype.textWidth=cT("textWidth");b9.prototype.text$line=cT("text$line");b9.prototype.$ensureContext=cT("$ensureContext");b9.prototype.$newPMatrix=cT("$newPMatrix");b9.prototype.size=function(d7,d9,d8){cK(d8===2?"3D":"2D");cV.size(d7,d9,d8)};b9.prototype.$init=E;bO.prototype.$init=function(){cV.size(cV.width,cV.height);d4.lineCap="round";cV.noSmooth();cV.disableContextMenu()};by.prototype.$init=function(){cV.use3DContext=true};dp.prototype.$ensureContext=function(){return d4};function dv(d8,ea){var d9=d8,d7=0,eb=0;cV.pmouseX=cV.mouseX;cV.pmouseY=cV.mouseY;if(d9.offsetParent){do{d7+=d9.offsetLeft;eb+=d9.offsetTop}while(!!(d9=d9.offsetParent))}d9=d8;do{d7-=d9.scrollLeft||0;eb-=d9.scrollTop||0}while(!!(d9=d9.parentNode));d7+=ab;eb+=dl;d7+=aR;eb+=bV;d7+=B.pageXOffset;eb+=B.pageYOffset;return{X:d7,Y:eb}}function aG(d7,d8){var d9=dv(d7,d8);cV.mouseX=d8.pageX-d9.X;cV.mouseY=d8.pageY-d9.Y}function ct(d8){var ea=dv(d8.changedTouches[0].target,d8.changedTouches[0]),d7;for(d7=0;d7<d8.touches.length;d7++){var ec=d8.touches[d7];ec.offsetX=ec.pageX-ea.X;ec.offsetY=ec.pageY-ea.Y}for(d7=0;d7<d8.targetTouches.length;d7++){var d9=d8.targetTouches[d7];d9.offsetX=d9.pageX-ea.X;d9.offsetY=d9.pageY-ea.Y}for(d7=0;d7<d8.changedTouches.length;d7++){var eb=d8.changedTouches[d7];eb.offsetX=eb.pageX-ea.X;eb.offsetY=eb.pageY-ea.Y}return d8}bM(ac,"touchstart",function(d9){ac.setAttribute("style","-webkit-user-select: none");ac.setAttribute("onclick","void(0)");ac.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)");for(var d8=0,d7=at.length;d8<d7;d8++){var ea=at[d8].type;if(ea==="mouseout"||ea==="mousemove"||ea==="mousedown"||ea==="mouseup"||ea==="DOMMouseScroll"||ea==="mousewheel"||ea==="touchstart"){dd(at[d8])}}if(cV.touchStart!==r||cV.touchMove!==r||cV.touchEnd!==r||cV.touchCancel!==r){bM(ac,"touchstart",function(eb){if(cV.touchStart!==r){eb=ct(eb);cV.touchStart(eb)}});bM(ac,"touchmove",function(eb){if(cV.touchMove!==r){eb.preventDefault();eb=ct(eb);cV.touchMove(eb)}});bM(ac,"touchend",function(eb){if(cV.touchEnd!==r){eb=ct(eb);cV.touchEnd(eb)}});bM(ac,"touchcancel",function(eb){if(cV.touchCancel!==r){eb=ct(eb);cV.touchCancel(eb)}})}else{bM(ac,"touchstart",function(eb){aG(ac,eb.touches[0]);cV.__mousePressed=true;cV.mouseDragging=false;cV.mouseButton=37;if(typeof cV.mousePressed==="function"){cV.mousePressed()}});bM(ac,"touchmove",function(eb){eb.preventDefault();aG(ac,eb.touches[0]);if(typeof cV.mouseMoved==="function"&&!cV.__mousePressed){cV.mouseMoved()}if(typeof cV.mouseDragged==="function"&&cV.__mousePressed){cV.mouseDragged();cV.mouseDragging=true}});bM(ac,"touchend",function(eb){cV.__mousePressed=false;if(typeof cV.mouseClicked==="function"&&!cV.mouseDragging){cV.mouseClicked()}if(typeof cV.mouseReleased==="function"){cV.mouseReleased()}})}ac.dispatchEvent(d9)});(function(){var d7=true,d8=function(d9){d9.preventDefault();d9.stopPropagation()};cV.disableContextMenu=function(){if(!d7){return}bM(ac,"contextmenu",d8);d7=false};cV.enableContextMenu=function(){if(d7){return}dd({elem:ac,type:"contextmenu",fn:d8});d7=true}})();bM(ac,"mousemove",function(d7){aG(ac,d7);if(typeof cV.mouseMoved==="function"&&!cV.__mousePressed){cV.mouseMoved()}if(typeof cV.mouseDragged==="function"&&cV.__mousePressed){cV.mouseDragged();cV.mouseDragging=true}});bM(ac,"mouseout",function(d7){if(typeof cV.mouseOut==="function"){cV.mouseOut()}});bM(ac,"mouseover",function(d7){aG(ac,d7);if(typeof cV.mouseOver==="function"){cV.mouseOver()}});bM(ac,"mousedown",function(d7){cV.__mousePressed=true;cV.mouseDragging=false;switch(d7.which){case 1:cV.mouseButton=37;break;case 2:cV.mouseButton=3;break;case 3:cV.mouseButton=39;break}if(typeof cV.mousePressed==="function"){cV.mousePressed()}});bM(ac,"mouseup",function(d7){cV.__mousePressed=false;if(typeof cV.mouseClicked==="function"&&!cV.mouseDragging){cV.mouseClicked()}if(typeof cV.mouseReleased==="function"){cV.mouseReleased()}});var am=function(d7){var d8=0;if(d7.wheelDelta){d8=d7.wheelDelta/120;if(B.opera){d8=-d8}}else{if(d7.detail){d8=-d7.detail/3}}cV.mouseScroll=d8;if(d8&&typeof cV.mouseScrolled==="function"){cV.mouseScrolled()}};bM(d,"DOMMouseScroll",am);bM(d,"mousewheel",am);if(typeof ac==="string"){ac=d.getElementById(ac)}if(!ac.getAttribute("tabindex")){ac.setAttribute("tabindex",0)}function dA(d8){var d7=d8.which||d8.keyCode;switch(d7){case 13:return 10;case 91:case 93:case 224:return 157;case 57392:return 17;case 46:return 127;case 45:return 155}return d7}function cA(d8){var d9=d8.which||d8.keyCode;var d7=d8.shiftKey||d8.ctrlKey||d8.altKey||d8.metaKey;switch(d9){case 13:d9=d7?13:10;break;case 8:d9=d7?127:8;break}return new bN(d9)}function cQ(d7){if(typeof d7.preventDefault==="function"){d7.preventDefault()}else{if(typeof d7.stopPropagation==="function"){d7.stopPropagation()}}return false}function dC(){var d7;for(d7 in af){if(af.hasOwnProperty(d7)){cV.__keyPressed=true;return}}cV.__keyPressed=false}function cw(){cV.__keyPressed=false;af=[];dE=null}function bn(d7,d8){af[d7]=d8;dE=null;cV.key=d8;cV.keyCode=d7;cV.keyPressed();cV.keyCode=0;cV.keyTyped();dC()}function cy(d8){var d7=dA(d8);if(d7===127){bn(d7,new bN(127));return}if(dT.indexOf(d7)<0){dE=d7;return}var d9=new bN(65535);cV.key=d9;cV.keyCode=d7;af[d7]=d9;cV.keyPressed();dE=null;dC();return cQ(d8)}function ds(d8){if(dE===null){return}var d7=dE,d9=cA(d8);bn(d7,d9);return cQ(d8)}function co(d8){var d7=dA(d8),d9=af[d7];if(d9===r){return}cV.key=d9;cV.keyCode=d7;cV.keyReleased();delete af[d7];dC()}if(!cU){if(a6 instanceof D.Sketch){cP=a6}else{if(typeof a6==="function"){cP=new D.Sketch(a6)}else{if(!a6){cP=new D.Sketch(function(){})}else{cP=D.compile(a6)}}}cV.externals.sketch=cP;cK();ac.onfocus=function(){cV.focused=true};ac.onblur=function(){cV.focused=false;if(!cP.options.globalKeyEvents){cw()}};if(cP.options.pauseOnBlur){bM(B,"focus",function(){if(aB){cV.loop()}});bM(B,"blur",function(){if(aB&&aw){cV.noLoop();aB=true}cw()})}var aS=cP.options.globalKeyEvents?B:ac;bM(aS,"keydown",cy);bM(aS,"keypress",ds);bM(aS,"keyup",co);for(var c3 in D.lib){if(D.lib.hasOwnProperty(c3)){if(D.lib[c3].hasOwnProperty("attach")){D.lib[c3].attach(cV)}else{if(D.lib[c3] instanceof Function){D.lib[c3].call(this)}}}}var dy=100;var b5=function(ea){if(!(cP.imageCache.pending||F.preloading.pending(dy))){if(B.opera){var d9,d8,d7=cP.imageCache.operaCache;for(d9 in d7){if(d7.hasOwnProperty(d9)){d8=d7[d9];if(d8!==null){d.body.removeChild(d8)}delete d7[d9]}}}cP.attach(ea,g);cP.onLoad(ea);if(ea.setup){ea.setup();ea.resetMatrix();cP.onSetup()}R();if(ea.draw){if(!aB){ea.redraw()}else{ea.loop()}}}else{B.setTimeout(function(){b5(ea)},dy)}};a(this);b5(cV)}else{cP=new D.Sketch;cK();cV.size=function(d7,d9,d8){if(d8&&d8===2){cK("3D")}else{cK("2D")}cV.size(d7,d9,d8)}}};D.debug=q;D.prototype=g;function s(){var P=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","Random","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith"];var N={};var O,M;for(O=0,M=P.length;O<M;++O){N[P[O]]=null}for(var Q in D.lib){if(D.lib.hasOwnProperty(Q)){if(D.lib[Q].exports){var L=D.lib[Q].exports;for(O=0,M=L.length;O<M;++O){N[L[O]]=null}}}}return N}function c(ap){var aV=s();function aC(bo){var br=[];var bt=bo.split(/([\{\[\(\)\]\}])/);var bw=bt[0];var bu=[];for(var bq=1;bq<bt.length;bq+=2){var bv=bt[bq];if(bv==="["||bv==="{"||bv==="("){bu.push(bw);bw=bv}else{if(bv==="]"||bv==="}"||bv===")"){var bp=bv==="}"?"A":bv===")"?"B":"C";var bs=br.length;br.push(bw+bv);bw=bu.pop()+'"'+bp+(bs+1)+'"'}}bw+=bt[bq+1]}br.unshift(bw);return br}function ah(bp,bo){return bp.replace(/'(\d+)'/g,function(br,bq){var bs=bo[bq];if(bs.charAt(0)==="/"){return bs}return/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(bs)?"(new $p.Character("+bs+"))":bs})}function aN(br){var bq=/^\s*/.exec(br),bo;if(bq[0].length===br.length){bo={left:bq[0],middle:"",right:""}}else{var bp=/\s*$/.exec(br);bo={left:bq[0],middle:br.substring(bq[0].length,bp.index),right:bp[0]}}bo.untrim=function(bs){return this.left+bs+this.right};return bo}function a4(bo){return bo.replace(/^\s+/,"").replace(/\s+$/,"")}function at(bq,br){for(var bp=0,bo=br.length;bp<bo;++bp){bq[br[bp]]=null}return bq}function a8(bp){for(var bo in bp){if(bp.hasOwnProperty(bo)){return false}}return true}function aO(bo){return bo.substring(2,bo.length-1)}var be=ap.replace(/\r\n?|\n\r/g,"\n");var L=[];var a1=be.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(bw,bp,bt,bu,br,bv,bo,bq){var bs;if(bp||bt){bs=L.length;L.push(bw);return"'"+bs+"'"}if(bu){bs=L.length;L.push(bv);return br+"'"+bs+"'"}return bq!==""?" ":"\n"});var X;var ay=a1;var Y=function(bp,bq,bo,br){if(!!bq||!!br){return bp}X=true;return""};do{X=false;ay=ay.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,Y)}while(X);var bi=aC(ay);var aj;var aH={},a7,ax=0;function ba(bp,bo){var bq=bi.length;bi.push(bp);return'"'+bo+bq+'"'}function a5(){return"class"+ ++ax}function bj(bp,bq,bo){bp.classId=bq;bp.scopeId=bo;aH[bq]=bp}var T,Q,an,aT,bg,aX;var M=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g;var a9=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g;var aK=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/;var bk=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g;var U=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/;var ar=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g;function ac(bp){var bo=bp;bo=bo.replace(M,function(bq){return ba(bq,"E")});bo=bo.replace(a9,function(bq){return ba(bq,"D")});bo=bo.replace(ar,function(bq){return ba(bq,"H")});return bo}function bb(bq,bp){var bo=bq.replace(bk,function(bv,bs,bt,bw,bu,br){if(bt!==bp){return bv}return ba(bv,"G")});return bo}function aF(bo){this.name=bo}aF.prototype.toString=function(){return this.name};function am(bo){this.params=bo}am.prototype.getNames=function(){var bq=[];for(var bp=0,bo=this.params.length;bp<bo;++bp){bq.push(this.params[bp].name)}return bq};am.prototype.toString=function(){if(this.params.length===0){return"()"}var bo="(";for(var bq=0,bp=this.params.length;bq<bp;++bq){bo+=this.params[bq]+", "}return bo.substring(0,bo.length-2)+")"};function aB(bt){var br=a4(bt.substring(1,bt.length-1));var bo=[];if(br!==""){var bp=br.split(",");for(var bq=0;bq<bp.length;++bq){var bs=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(bp[bq]);bo.push(new aF(bs[1]))}}return new am(bo)}function ao(bs){var br=bs;br=br.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(bu,bt,bv){return bv});br=br.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(bu,bt,bv){return ba(bu,"F")});br=br.replace(ar,function(bt){return ba(bt,"H")});br=br.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(by,bx,bv){var bu=bv.replace(/"C(\d+)"/g,function(bA,bz){return bi[bz]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ");var bw="{"+bu.substring(1,bu.length-1)+"}";var bt="('"+bx+"', "+ba(bw,"A")+")";return"$p.createJavaArray"+ba(bt,"B")});br=br.replace(/(\.\s*length)\s*"B\d+"/g,"$1");br=br.replace(/#([0-9A-Fa-f]{6})\b/g,function(bt,bu){return"0xFF"+bu});br=br.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(bw,bu,bv){var bx=bi[bu];if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(bx)){return bw}if(/^\(\s*int\s*\)$/.test(bx)){return"(int)"+bv}var bt=bx.split(/"C(\d+)"/g);if(bt.length>1){if(!/^\[\s*\]$/.test(bi[bt[1]])){return bw}}return""+bv});br=br.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(bu,bt){var bv=aN(bt);return bv.untrim("__int_cast("+bv.middle+")")});br=br.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1");br=br.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(bv,bu,bt){if(bu===bt){return bv}return bt===""?"0"+bu:bu});br=br.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1");br=br.replace(/([^\s])%([^=\s])/g,"$1 % $2");br=br.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1");br=br.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(bu,bt){return"parse"+bt.substring(0,1).toUpperCase()+bt.substring(1)+'"B'});br=br.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(bu,by,bt,bx,bw,bz){if(bt){var bv=bi[bx];if(bw){return"pixels.setPixel"+ba("("+bv.substring(1,bv.length-1)+","+bz+")","B")}return"pixels.getPixel"+ba("("+bv.substring(1,bv.length-1)+")","B")}if(by){return"pixels.getLength"+ba("()","B")}if(bw){return"pixels.set"+ba("("+bz+")","B")}return"pixels.toArray"+ba("()","B")});var bq;function bp(bu,bt,by,bw){var bv=bi[bw];bq=true;var bx=aN(bv.substring(1,bv.length-1));return"__"+by+(bx.middle===""?ba("("+bt.replace(/\.\s*$/,"")+")","B"):ba("("+bt.replace(/\.\s*$/,"")+","+bx.middle+")","B"))}do{bq=false;br=br.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt)\s*"B(\d+)"/g,bp)}while(bq);function bo(bv,bt,bu){bq=true;return"__instanceof"+ba("("+bt+", "+bu+")","B")}do{bq=false;br=br.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,bo)}while(bq);br=br.replace(/\bthis(\s*"B\d+")/g,"$$constr$1");return br}function aA(bp,bo){this.baseInterfaceName=bp;this.body=bo;bo.owner=this}aA.prototype.toString=function(){return"new ("+this.body+")"};function ag(bq){var bp=(new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/)).exec(bq);var bt=a7,bs=a5();a7=bs;var bo=bp[1]+"$"+bs;var br=new aA(bo,T(bi[bp[2]],bo,"","implements "+bp[1]));bj(br,bs,bt);a7=bt;return br}function ad(bp,bq,bo){this.name=bp;this.params=bq;this.body=bo}ad.prototype.toString=function(){var bp=aj;var bq=at({"this":null},this.params.getNames());aj=function(br){return bq.hasOwnProperty(br.name)?br.name:bp(br)};var bo="function";if(this.name){bo+=" "+this.name}bo+=this.params+" "+this.body;aj=bp;return bo};function aI(bp){var bo=(new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/)).exec(bp);return new ad(bo[1]!=="function"?bo[1]:null,aB(bi[bo[2]]),an(bi[bo[3]]))}function ab(bo){this.members=bo}ab.prototype.toString=function(){var bq=aj;aj=function(bs){return bs.name==="this"?"this":bq(bs)};var bo="";for(var br=0,bp=this.members.length;br<bp;++br){if(this.members[br].label){bo+=this.members[br].label+": "}bo+=this.members[br].value.toString()+", "}aj=bq;return bo.substring(0,bo.length-2)};function aD(br){var bo=br.split(",");for(var bq=0;bq<bo.length;++bq){var bp=bo[bq].indexOf(":");if(bp<0){bo[bq]={value:aX(bo[bq])}}else{bo[bq]={label:a4(bo[bq].substring(0,bp)),value:aX(a4(bo[bq].substring(bp+1)))}}}return new ab(bo)}function aw(bq){if(bq.charAt(0)==="("||bq.charAt(0)==="["){return bq.charAt(0)+aw(bq.substring(1,bq.length-1))+bq.charAt(bq.length-1)}if(bq.charAt(0)==="{"){if(/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(bq)){return"{"+ba(bq.substring(1,bq.length-1),"I")+"}"}return"["+aw(bq.substring(1,bq.length-1))+"]"}var bp=aN(bq);var bo=ao(bp.middle);bo=bo.replace(/"[ABC](\d+)"/g,function(bs,br){return aw(bi[br])});return bp.untrim(bo)}function P(bo){return bo.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(br,bt,bp,bv,bu,bs){if(bt){return br}var bq={name:bp,member:bu,callSign:!!bs};return aj(bq)+(bv===r?"":bv)})}function bn(bp,bo){this.expr=bp;this.transforms=bo}bn.prototype.toString=function(){var bo=this.transforms;var bp=P(this.expr);return bp.replace(/"!(\d+)"/g,function(br,bq){return bo[bq].toString()})};aX=function(bq){var bp=[];var bo=aw(bq);bo=bo.replace(/"H(\d+)"/g,function(bs,br){bp.push(aI(bi[br]));return'"!'+(bp.length-1)+'"'});bo=bo.replace(/"F(\d+)"/g,function(bs,br){bp.push(ag(bi[br]));return'"!'+(bp.length-1)+'"'});bo=bo.replace(/"I(\d+)"/g,function(bs,br){bp.push(aD(bi[br]));return'"!'+(bp.length-1)+'"'});return new bn(bo,bp)};function a2(bo,bq,bp){this.name=bo;this.value=bq;this.isDefault=bp}a2.prototype.toString=function(){return this.name+" = "+this.value};function ai(bs,bp){var bt=bs.indexOf("=");var bo,br,bq;if(bt<0){bo=bs;br=bp;bq=true}else{bo=bs.substring(0,bt);br=aX(bs.substring(bt+1));bq=false}return new a2(a4(bo.replace(/(\s*"C\d+")+/g,"")),br,bq)}function aR(bo){if(bo==="int"||bo==="float"){return"0"}if(bo==="boolean"){return"false"}if(bo==="color"){return"0x00000000"}return"null"}function aG(bp,bo){this.definitions=bp;this.varType=bo}aG.prototype.getNames=function(){var bq=[];for(var bp=0,bo=this.definitions.length;bp<bo;++bp){bq.push(this.definitions[bp].name)}return bq};aG.prototype.toString=function(){return"var "+this.definitions.join(",")};function af(bo){this.expression=bo}af.prototype.toString=function(){return this.expression.toString()};function bl(bs){if(aK.test(bs)){var br=U.exec(bs);var bq=bs.substring(br[0].length).split(",");var bo=aR(br[2]);for(var bp=0;bp<bq.length;++bp){bq[bp]=ai(bq[bp],bo)}return new aG(bq,br[2])}return new af(aX(bs))}function aZ(bo,bq,bp){this.initStatement=bo;this.condition=bq;this.step=bp}aZ.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"};function aQ(bp,bo){this.initStatement=bp;this.container=bo}aQ.prototype.toString=function(){var bo=this.initStatement.toString();if(bo.indexOf("=")>=0){bo=bo.substring(0,bo.indexOf("="))}return"("+bo+" in "+this.container+")"};function aW(bp,bo){this.initStatement=bp;this.container=bo}aW.iteratorId=0;aW.prototype.toString=function(){var bs=this.initStatement.toString();var bp="$it"+aW.iteratorId++;var br=bs.replace(/^\s*var\s*/,"").split("=")[0];var bq="var "+bp+" = new $p.ObjectIterator("+this.container+"), "+br+" = void(0)";var bo=bp+".hasNext() && (("+br+" = "+bp+".next()) || true)";return"("+bq+"; "+bo+";)"};function W(bp){var bo;if(/\bin\b/.test(bp)){bo=bp.substring(1,bp.length-1).split(/\bin\b/g);return new aQ(bl(a4(bo[0])),aX(bo[1]))}if(bp.indexOf(":")>=0&&bp.indexOf(";")<0){bo=bp.substring(1,bp.length-1).split(":");return new aW(bl(a4(bo[0])),aX(bo[1]))}bo=bp.substring(1,bp.length-1).split(";");return new aZ(bl(a4(bo[0])),aX(bo[1]),aX(bo[2]))}function a0(bo){bo.sort(function(bq,bp){return bp.weight-bq.weight})}function Z(bq,bo,bp){this.name=bq;this.body=bo;this.isStatic=bp;bo.owner=this}Z.prototype.toString=function(){return""+this.body};function al(bq,bo,bp){this.name=bq;this.body=bo;this.isStatic=bp;bo.owner=this}al.prototype.toString=function(){return""+this.body};function R(bq){var bp=M.exec(bq);M.lastIndex=0;var br=bp[1].indexOf("static")>=0;var bo=bi[aO(bp[6])],bt;var bu=a7,bs=a5();a7=bs;if(bp[2]==="interface"){bt=new Z(bp[3],Q(bo,bp[3],bp[4]),br)}else{bt=new al(bp[3],T(bo,bp[3],bp[4],bp[5]),br)}bj(bt,bs,bu);a7=bu;return bt}function aa(bq,br,bo,bp){this.name=bq;this.params=br;this.body=bo;this.isStatic=bp}aa.prototype.toString=function(){var bq=at({},this.params.getNames());var bp=aj;aj=function(br){return bq.hasOwnProperty(br.name)?br.name:bp(br)};var bo="function "+this.methodId+this.params+" "+this.body+"\n";aj=bp;return bo};function N(br){var bp=a9.exec(br);a9.lastIndex=0;var bq=bp[1].indexOf("static")>=0;var bo=bp[6]!==";"?bi[aO(bp[6])]:"{}";return new aa(bp[3],aB(bi[aO(bp[4])]),an(bo),bq)}function ak(bq,bp,bo){this.definitions=bq;this.fieldType=bp;this.isStatic=bo}ak.prototype.getNames=function(){var bq=[];for(var bp=0,bo=this.definitions.length;bp<bo;++bp){bq.push(this.definitions[bp].name)}return bq};ak.prototype.toString=function(){var bv=aj({name:"[this]"});if(this.isStatic){var bu=this.owner.name;var bs=[];for(var bt=0,br=this.definitions.length;bt<br;++bt){var bq=this.definitions[bt];var bo=bq.name,bw=bu+"."+bo;var bp="if("+bw+" === void(0)) {\n "+bw+" = "+bq.value+"; }\n$p.defineProperty("+bv+", '"+bo+"', { get: function(){return "+bw+";}, set: function(val){"+bw+" = val;} });\n";bs.push(bp)}return bs.join("")}return bv+"."+this.definitions.join("; "+bv+".")};function bd(bt){var bs=U.exec(bt);var bo=bs[1].indexOf("static")>=0;var br=bt.substring(bs[0].length).split(/,\s*/g);var bp=aR(bs[2]);for(var bq=0;bq<br.length;++bq){br[bq]=ai(br[bq],bp)}return new ak(br,bs[2],bo)}function aL(bp,bo){this.params=bp;this.body=bo}aL.prototype.toString=function(){var br=at({},this.params.getNames());var bp=aj;aj=function(bs){return br.hasOwnProperty(bs.name)?bs.name:bp(bs)};var bq="function $constr_"+this.params.params.length+this.params.toString();var bo=this.body.toString();if(!/\$(superCstr|constr)\b/.test(bo)){bo="{\n$superCstr();\n"+bo.substring(1)}aj=bp;return bq+bo+"\n"};function aq(bq){var bo=(new RegExp(/"B(\d+)"\s*"A(\d+)"/)).exec(bq);var bp=aB(bi[bo[1]]);return new aL(bp,an(bi[bo[2]]))}function aM(bq,bt,bs,bo,bu,bv){var br,bp;this.name=bq;this.interfacesNames=bt;this.methodsNames=bs;this.fields=bo;this.innerClasses=bu;this.misc=bv;for(br=0,bp=bo.length;br<bp;++br){bo[br].owner=this}}aM.prototype.getMembers=function(bv,bo,bt){if(this.owner.base){this.owner.base.body.getMembers(bv,bo,bt)}var bs,br,bq,bp;for(bs=0,bq=this.fields.length;bs<bq;++bs){var bx=this.fields[bs].getNames();for(br=0,bp=bx.length;br<bp;++br){bv[bx[br]]=this.fields[bs]}}for(bs=0,bq=this.methodsNames.length;bs<bq;++bs){var bu=this.methodsNames[bs];bo[bu]=true}for(bs=0,bq=this.innerClasses.length;bs<bq;++bs){var bw=this.innerClasses[bs];bt[bw.name]=bw}};aM.prototype.toString=function(){function bp(bF){var bE=0;while(bF){++bE;bF=bF.scope}return bE}var by=bp(this.owner);var bz=this.name;var bv="";var bA="";var bC={},bx={},bw={};this.getMembers(bC,bx,bw);var bu,bs,bt,br;if(this.owner.interfaces){var bo=[],bq;for(bu=0,bs=this.interfacesNames.length;bu<bs;++bu){if(!this.owner.interfaces[bu]){continue}bq=aj({name:this.interfacesNames[bu]});bo.push(bq);bv+="$p.extendInterfaceMembers("+bz+", "+bq+");\n"}bA+=bz+".$interfaces = ["+bo.join(", ")+"];\n"}bA+=bz+".$isInterface = true;\n";bA+=bz+".$methods = ['"+this.methodsNames.join("', '")+"'];\n";a0(this.innerClasses);for(bu=0,bs=this.innerClasses.length;bu<bs;++bu){var bD=this.innerClasses[bu];if(bD.isStatic){bv+=bz+"."+bD.name+" = "+bD+";\n"}}for(bu=0,bs=this.fields.length;bu<bs;++bu){var bB=this.fields[bu];if(bB.isStatic){bv+=bz+"."+bB.definitions.join(";\n"+bz+".")+";\n"}}return"(function() {\nfunction "+bz+"() { throw 'Unable to create the interface'; }\n"+bv+bA+"return "+bz+";\n})()"};Q=function(bu,bp,bz){var bA=bu.substring(1,bu.length-1);bA=ac(bA);bA=bb(bA,bp);var bx=[],br=[];bA=bA.replace(/"([DE])(\d+)"/g,function(bD,bC,bB){if(bC==="D"){bx.push(bB)}else{if(bC==="E"){br.push(bB)}}return""});var bv=bA.split(/;(?:\s*;)*/g);var bs;var bt,bq;if(bz!==r){bs=bz.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(bt=0,bq=bx.length;bt<bq;++bt){var bo=N(bi[bx[bt]]);bx[bt]=bo.name}for(bt=0,bq=bv.length-1;bt<bq;++bt){var by=aN(bv[bt]);bv[bt]=bd(by.middle)}var bw=bv.pop();for(bt=0,bq=br.length;bt<bq;++bt){br[bt]=R(bi[br[bt]])}return new aM(bp,bs,bx,bv,br,{tail:bw})};function az(bp,bw,bv,bu,bq,bx,by,bs,bo){var bt,br;this.name=bp;this.baseClassName=bw;this.interfacesNames=bv;this.functions=bu;this.methods=bq;this.fields=bx;this.cstrs=by;this.innerClasses=bs;this.misc=bo;for(bt=0,br=bx.length;bt<br;++bt){bx[bt].owner=this}}az.prototype.getMembers=function(bv,bp,bu){if(this.owner.base){this.owner.base.body.getMembers(bv,bp,bu)}var bt,bs,br,bq;for(bt=0,br=this.fields.length;bt<br;++bt){var bx=this.fields[bt].getNames();for(bs=0,bq=bx.length;bs<bq;++bs){bv[bx[bs]]=this.fields[bt]}}for(bt=0,br=this.methods.length;bt<br;++bt){var bo=this.methods[bt];bp[bo.name]=bo}for(bt=0,br=this.innerClasses.length;bt<br;++bt){var bw=this.innerClasses[bt];bu[bw.name]=bw}};az.prototype.toString=function(){function bJ(bR){var bQ=0;while(bR){++bQ;bR=bR.scope}return bQ}var bz=bJ(this.owner);var bC="$this_"+bz;var bq=this.name;var bv="var "+bC+" = this;\n";var bD="";var bx="";var bO={},bP={},bF={};this.getMembers(bO,bP,bF);var bN=aj;aj=function(bR){var bQ=bR.name;if(bQ==="this"){return bR.callSign||!bR.member?bC+".$self":bC}if(bO.hasOwnProperty(bQ)){return bO[bQ].isStatic?bq+"."+bQ:bC+"."+bQ}if(bF.hasOwnProperty(bQ)){return bC+"."+bQ}if(bP.hasOwnProperty(bQ)){return bP[bQ].isStatic?bq+"."+bQ:bC+".$self."+bQ}return bN(bR)};var by;if(this.baseClassName){by=bN({name:this.baseClassName});bv+="var $super = { $upcast: "+bC+" };\n";bv+="function $superCstr(){"+by+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n";bx+=bq+".$base = "+by+";\n"}else{bv+="function $superCstr(){$p.extendClassChain("+bC+")}\n"}if(this.owner.base){bD+="$p.extendStaticMembers("+bq+", "+by+");\n"}var bI,bG,bH,bE;if(this.owner.interfaces){var bu=[],bo;for(bI=0,bG=this.interfacesNames.length;bI<bG;++bI){if(!this.owner.interfaces[bI]){continue}bo=bN({name:this.interfacesNames[bI]});bu.push(bo);bD+="$p.extendInterfaceMembers("+bq+", "+bo+");\n"}bx+=bq+".$interfaces = ["+bu.join(", ")+"];\n"}if(this.functions.length>0){bv+=this.functions.join("\n")+"\n"}a0(this.innerClasses);for(bI=0,bG=this.innerClasses.length;bI<bG;++bI){var bB=this.innerClasses[bI];if(bB.isStatic){bD+=bq+"."+bB.name+" = "+bB+";\n";bv+=bC+"."+bB.name+" = "+bq+"."+bB.name+";\n"}else{bv+=bC+"."+bB.name+" = "+bB+";\n"}}for(bI=0,bG=this.fields.length;bI<bG;++bI){var bp=this.fields[bI];if(bp.isStatic){bD+=bq+"."+bp.definitions.join(";\n"+bq+".")+";\n";for(bH=0,bE=bp.definitions.length;bH<bE;++bH){var bs=bp.definitions[bH].name,bw=bq+"."+bs;bv+="$p.defineProperty("+bC+", '"+bs+"', {get: function(){return "+bw+"}, set: function(val){"+bw+" = val}});\n"}}else{bv+=bC+"."+bp.definitions.join(";\n"+bC+".")+";\n"}}var bA={};for(bI=0,bG=this.methods.length;bI<bG;++bI){var br=this.methods[bI];var bL=bA[br.name];var bt=br.name+"$"+br.params.params.length;if(bL){++bL;bt+="_"+bL}else{bL=1}br.methodId=bt;bA[br.name]=bL;if(br.isStatic){bD+=br;bD+="$p.addMethod("+bq+", '"+br.name+"', "+bt+");\n";bv+="$p.addMethod("+bC+", '"+br.name+"', "+bt+");\n"}else{bv+=br;bv+="$p.addMethod("+bC+", '"+br.name+"', "+bt+");\n"}}bv+=a4(this.misc.tail);if(this.cstrs.length>0){bv+=this.cstrs.join("\n")+"\n"}bv+="function $constr() {\n";var bM=[];for(bI=0,bG=this.cstrs.length;bI<bG;++bI){var bK=this.cstrs[bI].params.params.length;bM.push("if(arguments.length === "+bK+") { $constr_"+bK+".apply("+bC+", arguments); }")}if(bM.length>0){bv+=bM.join(" else ")+" else "}bv+="$superCstr();\n}\n";bv+="$constr.apply(null, arguments);\n";aj=bN;return"(function() {\nfunction "+bq+"() {\n"+bv+"}\n"+bD+bx+"return "+bq+";\n})()"};T=function(bx,bp,bo,bA){var bC=bx.substring(1,bx.length-1);bC=ac(bC);bC=bb(bC,bp);var bq=[],br=[],bB=[],bu=[];bC=bC.replace(/"([DEGH])(\d+)"/g,function(bF,bE,bD){if(bE==="D"){bq.push(bD)}else{if(bE==="E"){br.push(bD)}else{if(bE==="H"){bu.push(bD)}else{bB.push(bD)}}}return""});var bw=bC.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g);var bv,bt;var bs;if(bo!==r){bv=bo.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")}if(bA!==r){bt=bA.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(bs=0;bs<bu.length;++bs){bu[bs]=aI(bi[bu[bs]])}for(bs=0;bs<bq.length;++bs){bq[bs]=N(bi[bq[bs]])}for(bs=0;bs<bw.length-1;++bs){var bz=aN(bw[bs]);bw[bs]=bd(bz.middle)}var by=bw.pop();for(bs=0;bs<bB.length;++bs){bB[bs]=aq(bi[bB[bs]])}for(bs=0;bs<br.length;++bs){br[bs]=R(bi[br[bs]])}return new az(bp,bv,bt,bu,bq,bw,bB,br,{tail:by})};function au(bp,bo){this.name=bp;this.body=bo;bo.owner=this}au.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};function a3(bp,bo){this.name=bp;this.body=bo;bo.owner=this}a3.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n$p."+this.name+" = "+this.name+";\n"};function bm(bq){var bp=M.exec(bq);M.lastIndex=0;var bo=bi[aO(bp[6])];var bt=a7,br=a5();a7=br;var bs;if(bp[2]==="interface"){bs=new au(bp[3],Q(bo,bp[3],bp[4]))}else{bs=new a3(bp[3],T(bo,bp[3],bp[4],bp[5]))}bj(bs,br,bt);a7=bt;return bs}function aP(bp,bq,bo){this.name=bp;this.params=bq;this.body=bo}aP.prototype.toString=function(){var bq=at({},this.params.getNames());var bp=aj;aj=function(br){return bq.hasOwnProperty(br.name)?br.name:bp(br)};var bo="function "+this.name+this.params+" "+this.body+"\n$p."+this.name+" = "+this.name+";";aj=bp;return bo};function aU(bq){var bp=a9.exec(bq);var bo=a9.lastIndex=0;return new aP(bp[3],aB(bi[aO(bp[4])]),an(bi[aO(bp[6])]))}function ae(bo){var bp=bo;bp=bp.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1");return bp}function aS(bo,bp){this.argument=bo;this.misc=bp}aS.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};function O(bo,bp){this.argument=bo;this.misc=bp}O.prototype.toString=function(){return this.misc.prefix+this.argument.toString()};function av(bo,bp,bq){this.name=bo;this.argument=bp;this.misc=bq}av.prototype.toString=function(){var bo=this.misc.prefix;if(this.argument!==r){bo+=this.argument.toString()}return bo};function aJ(bo){this.expr=bo}aJ.prototype.toString=function(){return"case "+this.expr+":"};function V(bo){this.label=bo}V.prototype.toString=function(){return this.label};aT=function(bw,bx,bq){var bB=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g);var by=[];bw=ae(bw);var bv=0,br,bp;while((br=bB.exec(bw))!==null){if(br[1]!==r){var bu=bw.lastIndexOf('"B',bB.lastIndex);var bA=bw.substring(bv,bu);if(br[1]==="for"){by.push(new aS(W(bi[br[2]]),{prefix:bA}))}else{if(br[1]==="catch"){by.push(new O(aB(bi[br[2]]),{prefix:bA}))}else{by.push(new av(br[1],aX(bi[br[2]]),{prefix:bA}))}}}else{if(br[3]!==r){by.push(new av(br[3],r,{prefix:bw.substring(bv,bB.lastIndex)}))}else{if(br[4]!==r){bp=bw.substring(bv,bB.lastIndex-br[4].length);if(a4(bp).length!==0){continue}by.push(bp);var bs=br[4].charAt(1),bo=br[5];if(bs==="D"){by.push(bx(bi[bo]))}else{if(bs==="E"){by.push(bq(bi[bo]))}else{if(bs==="H"){by.push(aI(bi[bo]))}else{by.push(an(bi[bo]))}}}}else{if(br[6]!==r){by.push(new aJ(aX(a4(br[7]))))}else{if(br[8]!==r){bp=bw.substring(bv,bB.lastIndex-br[8].length);if(a4(bp).length!==0){continue}by.push(new V(bw.substring(bv,bB.lastIndex)))}else{var bz=aN(bw.substring(bv,bB.lastIndex-1));by.push(bz.left);by.push(bl(bz.middle));by.push(bz.right+";")}}}}}bv=bB.lastIndex}var bt=aN(bw.substring(bv));by.push(bt.left);if(bt.middle!==""){by.push(bl(bt.middle));by.push(";"+bt.right)}return by};function bc(bp){var bq=[];for(var br=0,bo=bp.length;br<bo;++br){var bs=bp[br];if(bs instanceof aG){bq=bq.concat(bs.getNames())}else{if(bs instanceof aS&&bs.argument.initStatement instanceof aG){bq=bq.concat(bs.argument.initStatement.getNames())}else{if(bs instanceof Z||bs instanceof al||bs instanceof au||bs instanceof a3||bs instanceof aP||bs instanceof ad){bq.push(bs.name)}}}}return at({},bq)}function S(bo){this.statements=bo}S.prototype.toString=function(){var bq=bc(this.statements);var bp=aj;if(!a8(bq)){aj=function(br){return bq.hasOwnProperty(br.name)?br.name:bp(br)}}var bo="{\n"+this.statements.join("")+"\n}";aj=bp;return bo};an=function(bp){var bo=aN(bp.substring(1,bp.length-1));return new S(aT(bo.middle))};function aE(bo){this.statements=bo}aE.prototype.toString=function(){var bs=[],bt=[],bu;for(var br=0,bp=this.statements.length;br<bp;++br){bu=this.statements[br];if(bu instanceof a3||bu instanceof au){bs.push(bu)}else{bt.push(bu)}}a0(bs);var bq=bc(this.statements);aj=function(bw){var bv=bw.name;if(bq.hasOwnProperty(bv)){return bv}if(aV.hasOwnProperty(bv)||z.hasOwnProperty(bv)||g.hasOwnProperty(bv)){return"$p."+bv}return bv};var bo="// this code was autogenerated from PJS\n(function($p) {\n"+bs.join("")+"\n"+bt.join("")+"\n})";aj=null;return bo};bg=function(){var bo=ac(bi[0]);bo=bo.replace(/\bimport\s+[^;]+;/g,"");return new aE(aT(bo,aU,bm))};function bh(bo){var bs={};var bq,bw;for(bq in aH){if(aH.hasOwnProperty(bq)){bw=aH[bq];var bC=bw.scopeId,bp=bw.name;if(bC){var bB=aH[bC];bw.scope=bB;if(bB.inScope===r){bB.inScope={}}bB.inScope[bp]=bw}else{bs[bp]=bw}}}function bz(bD,bG){var bJ=bG.split(".");var bF=bD.scope,bI;while(bF){if(bF.hasOwnProperty(bJ[0])){bI=bF[bJ[0]];break}bF=bF.scope}if(bI===r){bI=bs[bJ[0]]}for(var bH=1,bE=bJ.length;bH<bE&&bI;++bH){bI=bI.inScope[bJ[bH]]}return bI}for(bq in aH){if(aH.hasOwnProperty(bq)){bw=aH[bq];var bv=bw.body.baseClassName;if(bv){var by=bz(bw,bv);if(by){bw.base=by;if(!by.derived){by.derived=[]}by.derived.push(bw)}}var bu=bw.body.interfacesNames,bA=[],bt,br;if(bu&&bu.length>0){for(bt=0,br=bu.length;bt<br;++bt){var bx=bz(bw,bu[bt]);bA.push(bx);if(!bx){continue}if(!bx.derived){bx.derived=[]}bx.derived.push(bw)}if(bA.length>0){bw.interfaces=bA}}}}}function a6(bo){var bt=[],bq={};var bp,bw,bu;for(bp in aH){if(aH.hasOwnProperty(bp)){bu=aH[bp];if(!bu.inScope&&!bu.derived){bt.push(bp);bu.weight=0}else{var bv=[];if(bu.inScope){for(bw in bu.inScope){if(bu.inScope.hasOwnProperty(bw)){bv.push(bu.inScope[bw])}}}if(bu.derived){bv=bv.concat(bu.derived)}bq[bp]=bv}}}function bx(bz,bB){var by=bq[bz];if(!by){return false}var bA=by.indexOf(bB);if(bA<0){return false}by.splice(bA,1);if(by.length>0){return false}delete bq[bz];return true}while(bt.length>0){bp=bt.shift();bu=aH[bp];if(bu.scopeId&&bx(bu.scopeId,bu)){bt.push(bu.scopeId);aH[bu.scopeId].weight=bu.weight+1}if(bu.base&&bx(bu.base.classId,bu)){bt.push(bu.base.classId);bu.base.weight=bu.weight+1}if(bu.interfaces){var bs,br;for(bs=0,br=bu.interfaces.length;bs<br;++bs){if(!bu.interfaces[bs]||!bx(bu.interfaces[bs].classId,bu)){continue}bt.push(bu.interfaces[bs].classId);bu.interfaces[bs].weight=bu.weight+1}}}}var bf=bg();bh(bf);a6(bf);var aY=bf.toString();aY=aY.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n");return ah(aY,L)}function x(M,ab){var V=(new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g)).exec(M);if(V&&V.length===2){var L=[],O=V.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(ae,af){L.push(af);return"{"+(L.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";");var U=function(ae){return ae.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")};for(var Y=0,W=O.length;Y<W;Y++){var S=O[Y].split("=");if(S&&S.length===2){var ad=U(S[0]),T=U(S[1]),ac=[];if(ad==="preload"){ac=T.split(",");for(var X=0,Z=ac.length;X<Z;X++){var aa=U(ac[X]);ab.imageCache.add(aa)}}else{if(ad==="font"){ac=T.split(",");for(var P=0,R=ac.length;P<R;P++){var Q=U(ac[P]),N=/^\{(\d*?)\}$/.exec(Q);F.preloading.add(N?JSON.parse("{"+L[N[1]]+"}"):Q)}}else{if(ad==="pauseOnBlur"){ab.options.pauseOnBlur=T==="true"}else{if(ad==="globalKeyEvents"){ab.options.globalKeyEvents=T==="true"}else{if(ad.substring(0,6)==="param-"){ab.params[ad.substring(6)]=T}else{ab.options[ad]=T}}}}}}}}return M}D.compile=function(L){var O=new D.Sketch;var M=x(L,O);var N=c(M);O.sourceCode=N;return O};var j=function(){var R={},O="undefined",P="function",L=!1,Q=!0,M=512,N="log";if(typeof tinylog!==O&&typeof tinylog[N]===P){R[N]=tinylog[N]}else{if(typeof d!==O&&!d.fake){(function(){var am=d,ak="div",aa="style",ae="title",Z={zIndex:10000,position:"fixed",bottom:"0px",width:"100%",height:"15%",fontFamily:"sans-serif",color:"#ccc",backgroundColor:"black"},ac={position:"relative",fontFamily:"monospace",overflow:"auto",height:"100%",paddingTop:"5px"},ag={height:"5px",marginTop:"-5px",cursor:"n-resize",backgroundColor:"darkgrey"},al={position:"absolute",top:"5px",right:"20px",color:"#111",MozBorderRadius:"4px",webkitBorderRadius:"4px",borderRadius:"4px",cursor:"pointer",fontWeight:"normal",textAlign:"center",padding:"3px 5px",backgroundColor:"#333",fontSize:"12px"},W={minHeight:"16px"},ad={fontSize:"12px",margin:"0 8px 0 8px",maxWidth:"100%",whiteSpace:"pre-wrap",overflow:"auto"},ab=am.defaultView,aj=am.documentElement,S=aj[aa],U=function(){var ao=arguments.length,an,aq,ap;while(ao--){aq=arguments[ao--];an=arguments[ao][aa];for(ap in aq){if(aq.hasOwnProperty(ap)){an[ap]=aq[ap]}}}},ah=function(ap,ao,an){if(ap.addEventListener){ap.addEventListener(ao,an,L)}else{if(ap.attachEvent){ap.attachEvent("on"+ao,an)}}return[ap,ao,an]},T=function(ap,ao,an){if(ap.removeEventListener){ap.removeEventListener(ao,an,L)}else{if(ap.detachEvent){ap.detachEvent("on"+ao,an)}}},Y=function(ao){var an=ao.childNodes,ap=an.length;while(ap--){ao.removeChild(an.item(0))}},ai=function(ao,an){return ao.appendChild(an)},af=function(an){return am.createElement(an)},X=function(an){return am.createTextNode(an)},V=R[N]=function(aC){var au,av=S.paddingBottom,ap=af(ak),az=ap[aa],aA=ai(ap,af(ak)),ar=ai(ap,af(ak)),aq=ai(ap,af(ak)),aB=L,at=L,ao=L,aw=0,an=function(){S.paddingBottom=ap.clientHeight+"px"},ay=function(aD){var aE=ab.innerHeight,aF=aA.clientHeight;if(aD<0){aD=0}else{if(aD+aF>aE){aD=aE-aF}}az.height=aD/aE*100+"%";an()},ax=[ah(am,"mousemove",function(aD){if(aB){ay(ab.innerHeight-aD.clientY);ar.scrollTop=ao}}),ah(am,"mouseup",function(){if(aB){aB=ao=L}}),ah(aA,"dblclick",function(aD){aD.preventDefault();if(at){ay(at);at=L}else{at=ap.clientHeight;az.height="0px"}}),ah(aA,"mousedown",function(aD){aD.preventDefault();aB=Q;ao=ar.scrollTop}),ah(aA,"contextmenu",function(){aB=L}),ah(aq,"click",function(){au()})];au=function(){var aD=ax.length;while(aD--){T.apply(R,ax[aD])}aj.removeChild(ap);S.paddingBottom=av;Y(ar);Y(ap);R[N]=V};U(ap,Z,ar,ac,aA,ag,aq,al);aq[ae]="Close Log";ai(aq,X("\u2716"));aA[ae]="Double-click to toggle log minimization";aj.insertBefore(ap,aj.firstChild);R[N]=function(aF){if(aw===M){ar.removeChild(ar.firstChild)}else{aw++}var aE=ai(ar,af(ak)),aD=ai(aE,af(ak));aE[ae]=(new Date).toLocaleTimeString();U(aE,W,aD,ad);ai(aD,X(aF));ar.scrollTop=ar.scrollHeight};R[N](aC);an()}})()}else{if(typeof print===P){R[N]=print}}}return R}();D.logger=j;D.version="1.3.6";D.lib={};D.registerLibrary=function(L,M){D.lib[L]=M;if(M.hasOwnProperty("init")){M.init(g)}};D.instances=k;D.getInstanceById=function(L){return k[H[L]]};D.Sketch=function(L){this.attachFunction=L;this.options={pauseOnBlur:false,globalKeyEvents:false};this.onLoad=E;this.onSetup=E;this.onPause=E;this.onLoop=E;this.onFrameStart=E;this.onFrameEnd=E;this.onExit=E;this.params={};this.imageCache={pending:0,images:{},operaCache:{},add:function(N,M){if(this.images[N]){return}if(!l){this.images[N]=null}if(!M){M=new Image;M.onload=function(P){return function(){P.pending--}}(this);this.pending++;M.src=N}this.images[N]=M;if(B.opera){var O=d.createElement("div");O.appendChild(M);O.style.position="absolute";O.style.opacity=0;O.style.width="1px";O.style.height="1px";if(!this.operaCache[N]){d.body.appendChild(O);this.operaCache[N]=O}}}};this.sourceCode=undefined;this.attach=function(N){if(typeof this.attachFunction==="function"){this.attachFunction(N)}else{if(this.sourceCode){var M=(new Function("return ("+this.sourceCode+");"))();M(N);this.attachFunction=M}else{throw"Unable to attach sketch to the processing instance"}}};this.toString=function(){var M;var N="((function(Sketch) {\n";N+="var sketch = new Sketch(\n"+this.sourceCode+");\n";for(M in this.options){if(this.options.hasOwnProperty(M)){var O=this.options[M];N+="sketch.options."+M+" = "+(typeof O==="string"?'"'+O+'"':""+O)+";\n"}}for(M in this.imageCache){if(this.options.hasOwnProperty(M)){N+='sketch.imageCache.add("'+M+'");\n'}}N+="return sketch;\n})(Processing.Sketch))";return N}};var t=function(O,L){var M=[],S=[],T=L.length,Q=0;function R(U,W){var V=new XMLHttpRequest;V.onreadystatechange=function(){if(V.readyState===4){var X;if(V.status!==200&&V.status!==0){X="Invalid XHR status "+V.status}else{if(V.responseText===""){if("withCredentials" in new XMLHttpRequest&&(new XMLHttpRequest).withCredentials===false&&B.location.protocol==="file:"){X="XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."}else{X="File is empty."}}}W(V.responseText,X)}};V.open("GET",U,true);if(V.overrideMimeType){V.overrideMimeType("application/json")}V.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT");V.send(null)}function N(V,U){function X(aa,Y){M[V]=aa;++Q;if(Y){S.push(U+" ==> "+Y)}if(Q===T){if(S.length===0){try{return new D(O,M.join("\n"))}catch(Z){throw"Processing.js: Unable to execute pjs sketch: "+Z}}else{throw"Processing.js: Unable to load pjs sketch files: "+S.join("\n")}}}if(U.charAt(0)==="#"){var W=d.getElementById(U.substring(1));if(W){X(W.text||W.textContent)}else{X("","Unable to load pjs sketch: element with id '"+U.substring(1)+"' was not found")}return}R(U,X)}for(var P=0;P<T;++P){N(P,L[P])}};var G=function(){d.removeEventListener("DOMContentLoaded",G,false);var M=d.getElementsByTagName("canvas"),S;for(var R=0,N=M.length;R<N;R++){var U=M[R].getAttribute("data-processing-sources");if(U===null){U=M[R].getAttribute("data-src");if(U===null){U=M[R].getAttribute("datasrc")}}if(U){S=U.split(" ");for(var Q=0;Q<S.length;){if(S[Q]){Q++}else{S.splice(Q,1)}}t(M[R],S)}}var O=d.getElementsByTagName("script");var Y,L,X;for(Y=0;Y<O.length;Y++){var W=O[Y];if(!W.getAttribute){continue}var V=W.getAttribute("type");if(V&&(V.toLowerCase()==="text/processing"||V.toLowerCase()==="application/processing")){var T=W.getAttribute("data-processing-target");M=r;if(T){M=d.getElementById(T)}else{var P=W.nextSibling;while(P&&P.nodeType!==1){P=P.nextSibling}if(P.nodeName.toLowerCase()==="canvas"){M=P}}if(M){if(W.getAttribute("src")){S=W.getAttribute("src").split(/\s+/);t(M,S);continue}L=W.textContent||W.text;X=new D(M,L)}}}};D.loadSketchFromSources=t;D.disableInit=function(){if(l){d.removeEventListener("DOMContentLoaded",G,false)}};if(l){B.Processing=D;d.addEventListener("DOMContentLoaded",G,false)}else{this.Processing=D}})(window,window.document,Math);