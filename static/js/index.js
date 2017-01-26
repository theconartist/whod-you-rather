!function t(n,e,i){function r(o,s){if(!e[o]){if(!n[o]){var c="function"==typeof require&&require;if(!s&&c)return c(o,!0);if(a)return a(o,!0);var l=new Error("Cannot find module '"+o+"'");throw l.code="MODULE_NOT_FOUND",l}var u=e[o]={exports:{}};n[o][0].call(u.exports,function(t){var e=n[o][1][t];return r(e?e:t)},u,u.exports,t,n,e,i)}return e[o].exports}for(var a="function"==typeof require&&require,o=0;o<i.length;o++)r(i[o]);return r}({1:[function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),o=t("hogan.js"),s=function(){function t(n,e,a){i(this,t),this.template=o.compile(n),this.locals=a,"function"==typeof e?this.handler=e:"object"==("undefined"==typeof e?"undefined":r(e))&&(this.handler=e.handler||function(){},this.locals=e.locals||{})}return a(t,[{key:"render",value:function(t){t=Object.assign({},this.locals,t),this.handler(this.template.render(t),t)}}]),t}();n.exports=s},{"hogan.js":3}],2:[function(t,n,e){"use strict";!function(t){function n(t){"}"===t.n.substr(t.n.length-1)&&(t.n=t.n.substring(0,t.n.length-1))}function e(t){return t.trim?t.trim():t.replace(/^\s*|\s*$/g,"")}function i(t,n,e){if(n.charAt(e)!=t.charAt(0))return!1;for(var i=1,r=t.length;i<r;i++)if(n.charAt(e+i)!=t.charAt(i))return!1;return!0}function r(n,e,i,s){var c=[],l=null,u=null,f=null;for(u=i[i.length-1];n.length>0;){if(f=n.shift(),u&&"<"==u.tag&&!(f.tag in w))throw new Error("Illegal content in < super tag.");if(t.tags[f.tag]<=t.tags.$||a(f,s))i.push(f),f.nodes=r(n,f.tag,i,s);else{if("/"==f.tag){if(0===i.length)throw new Error("Closing tag without opener: /"+f.n);if(l=i.pop(),f.n!=l.n&&!o(f.n,l.n,s))throw new Error("Nesting error: "+l.n+" vs. "+f.n);return l.end=f.i,c}"\n"==f.tag&&(f.last=0==n.length||"\n"==n[0].tag)}c.push(f)}if(i.length>0)throw new Error("missing closing tag: "+i.pop().n);return c}function a(t,n){for(var e=0,i=n.length;e<i;e++)if(n[e].o==t.n)return t.tag="#",!0}function o(t,n,e){for(var i=0,r=e.length;i<r;i++)if(e[i].c==t&&e[i].o==n)return!0}function s(t){var n=[];for(var e in t)n.push('"'+l(e)+'": function(c,p,t,i) {'+t[e]+"}");return"{ "+n.join(",")+" }"}function c(t){var n=[];for(var e in t.partials)n.push('"'+l(e)+'":{name:"'+l(t.partials[e].name)+'", '+c(t.partials[e])+"}");return"partials: {"+n.join(",")+"}, subs: "+s(t.subs)}function l(t){return t.replace(b,"\\\\").replace(g,'\\"').replace(m,"\\n").replace(v,"\\r").replace(y,"\\u2028").replace($,"\\u2029")}function u(t){return~t.indexOf(".")?"d":"f"}function f(t,n){var e="<"+(n.prefix||""),i=e+t.n+x++;return n.partials[i]={name:t.n,partials:{}},n.code+='t.b(t.rp("'+l(i)+'",c,p,"'+(t.indent||"")+'"));',i}function h(t,n){n.code+="t.b(t.t(t."+u(t.n)+'("'+l(t.n)+'",c,p,0)));'}function p(t){return"t.b("+t+");"}var d=/\S/,g=/\"/g,m=/\n/g,v=/\r/g,b=/\\/g,y=/\u2028/,$=/\u2029/;t.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},t.scan=function(r,a){function o(){b.length>0&&(y.push({tag:"_t",text:new String(b)}),b="")}function s(){for(var n=!0,e=x;e<y.length;e++)if(n=t.tags[y[e].tag]<t.tags._v||"_t"==y[e].tag&&null===y[e].text.match(d),!n)return!1;return n}function c(t,n){if(o(),t&&s())for(var e,i=x;i<y.length;i++)y[i].text&&((e=y[i+1])&&">"==e.tag&&(e.indent=y[i].text.toString()),y.splice(i,1));else n||y.push({tag:"\n"});$=!1,x=y.length}function l(t,n){var i="="+S,r=t.indexOf(i,n),a=e(t.substring(t.indexOf("=",n)+1,r)).split(" ");return k=a[0],S=a[a.length-1],r+i.length-1}var u=r.length,f=0,h=1,p=2,g=f,m=null,v=null,b="",y=[],$=!1,w=0,x=0,k="{{",S="}}";for(a&&(a=a.split(" "),k=a[0],S=a[1]),w=0;w<u;w++)g==f?i(k,r,w)?(--w,o(),g=h):"\n"==r.charAt(w)?c($):b+=r.charAt(w):g==h?(w+=k.length-1,v=t.tags[r.charAt(w+1)],m=v?r.charAt(w+1):"_v","="==m?(w=l(r,w),g=f):(v&&w++,g=p),$=w):i(S,r,w)?(y.push({tag:m,n:e(b),otag:k,ctag:S,i:"/"==m?$-k.length:w+S.length}),b="",w+=S.length-1,g=f,"{"==m&&("}}"==S?w++:n(y[y.length-1]))):b+=r.charAt(w);return c($,!0),y};var w={_t:!0,"\n":!0,$:!0,"/":!0};t.stringify=function(n,e,i){return"{code: function (c,p,i) { "+t.wrapMain(n.code)+" },"+c(n)+"}"};var x=0;t.generate=function(n,e,i){x=0;var r={code:"",subs:{},partials:{}};return t.walk(n,r),i.asString?this.stringify(r,e,i):this.makeTemplate(r,e,i)},t.wrapMain=function(t){return'var t=this;t.b(i=i||"");'+t+"return t.fl();"},t.template=t.Template,t.makeTemplate=function(t,n,e){var i=this.makePartials(t);return i.code=new Function("c","p","i",this.wrapMain(t.code)),new this.template(i,n,this,e)},t.makePartials=function(t){var n,e={subs:{},partials:t.partials,name:t.name};for(n in e.partials)e.partials[n]=this.makePartials(e.partials[n]);for(n in t.subs)e.subs[n]=new Function("c","p","t","i",t.subs[n]);return e},t.codegen={"#":function(n,e){e.code+="if(t.s(t."+u(n.n)+'("'+l(n.n)+'",c,p,1),c,p,0,'+n.i+","+n.end+',"'+n.otag+" "+n.ctag+'")){t.rs(c,p,function(c,p,t){',t.walk(n.nodes,e),e.code+="});c.pop();}"},"^":function(n,e){e.code+="if(!t.s(t."+u(n.n)+'("'+l(n.n)+'",c,p,1),c,p,1,0,0,"")){',t.walk(n.nodes,e),e.code+="};"},">":f,"<":function(n,e){var i={partials:{},code:"",subs:{},inPartial:!0};t.walk(n.nodes,i);var r=e.partials[f(n,e)];r.subs=i.subs,r.partials=i.partials},$:function(n,e){var i={subs:{},code:"",partials:e.partials,prefix:n.n};t.walk(n.nodes,i),e.subs[n.n]=i.code,e.inPartial||(e.code+='t.sub("'+l(n.n)+'",c,p,i);')},"\n":function(t,n){n.code+=p('"\\n"'+(t.last?"":" + i"))},_v:function(t,n){n.code+="t.b(t.v(t."+u(t.n)+'("'+l(t.n)+'",c,p,0)));'},_t:function(t,n){n.code+=p('"'+l(t.text)+'"')},"{":h,"&":h},t.walk=function(n,e){for(var i,r=0,a=n.length;r<a;r++)i=t.codegen[n[r].tag],i&&i(n[r],e);return e},t.parse=function(t,n,e){return e=e||{},r(t,"",[],e.sectionTags||[])},t.cache={},t.cacheKey=function(t,n){return[t,!!n.asString,!!n.disableLambda,n.delimiters,!!n.modelGet].join("||")},t.compile=function(n,e){e=e||{};var i=t.cacheKey(n,e),r=this.cache[i];if(r){var a=r.partials;for(var o in a)delete a[o].instance;return r}return r=this.generate(this.parse(this.scan(n,e.delimiters),n,e),n,e),this.cache[i]=r}}("undefined"!=typeof e?e:Hogan)},{}],3:[function(t,n,e){"use strict";var i=t("./compiler");i.Template=t("./template").Template,i.template=i.Template,n.exports=i},{"./compiler":2,"./template":4}],4:[function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r={};!function(t){function n(t,n,e){var r;return n&&"object"==("undefined"==typeof n?"undefined":i(n))&&(void 0!==n[t]?r=n[t]:e&&n.get&&"function"==typeof n.get&&(r=n.get(t))),r}function e(t,n,e,i,r,a){function o(){}function s(){}o.prototype=t,s.prototype=t.subs;var c,l=new o;l.subs=new s,l.subsText={},l.buf="",i=i||{},l.stackSubs=i,l.subsText=a;for(c in n)i[c]||(i[c]=n[c]);for(c in i)l.subs[c]=i[c];r=r||{},l.stackPartials=r;for(c in e)r[c]||(r[c]=e[c]);for(c in r)l.partials[c]=r[c];return l}function r(t){return String(null===t||void 0===t?"":t)}function a(t){return t=r(t),f.test(t)?t.replace(o,"&amp;").replace(s,"&lt;").replace(c,"&gt;").replace(l,"&#39;").replace(u,"&quot;"):t}t.Template=function(t,n,e,i){t=t||{},this.r=t.code||this.r,this.c=e,this.options=i||{},this.text=n||"",this.partials=t.partials||{},this.subs=t.subs||{},this.buf=""},t.Template.prototype={r:function(t,n,e){return""},v:a,t:r,render:function(t,n,e){return this.ri([t],n||{},e)},ri:function(t,n,e){return this.r(t,n,e)},ep:function(t,n){var i=this.partials[t],r=n[i.name];if(i.instance&&i.base==r)return i.instance;if("string"==typeof r){if(!this.c)throw new Error("No compiler available.");r=this.c.compile(r,this.options)}if(!r)return null;if(this.partials[t].base=r,i.subs){n.stackText||(n.stackText={});for(key in i.subs)n.stackText[key]||(n.stackText[key]=void 0!==this.activeSub&&n.stackText[this.activeSub]?n.stackText[this.activeSub]:this.text);r=e(r,i.subs,i.partials,this.stackSubs,this.stackPartials,n.stackText)}return this.partials[t].instance=r,r},rp:function(t,n,e,i){var r=this.ep(t,e);return r?r.ri(n,e,i):""},rs:function(t,n,e){var i=t[t.length-1];if(!h(i))return void e(t,n,this);for(var r=0;r<i.length;r++)t.push(i[r]),e(t,n,this),t.pop()},s:function(t,n,e,r,a,o,s){var c;return(!h(t)||0!==t.length)&&("function"==typeof t&&(t=this.ms(t,n,e,r,a,o,s)),c=!!t,!r&&c&&n&&n.push("object"==("undefined"==typeof t?"undefined":i(t))?t:n[n.length-1]),c)},d:function(t,e,i,r){var a,o=t.split("."),s=this.f(o[0],e,i,r),c=this.options.modelGet,l=null;if("."===t&&h(e[e.length-2]))s=e[e.length-1];else for(var u=1;u<o.length;u++)a=n(o[u],s,c),void 0!==a?(l=s,s=a):s="";return!(r&&!s)&&(r||"function"!=typeof s||(e.push(l),s=this.mv(s,e,i),e.pop()),s)},f:function(t,e,i,r){for(var a=!1,o=null,s=!1,c=this.options.modelGet,l=e.length-1;l>=0;l--)if(o=e[l],a=n(t,o,c),void 0!==a){s=!0;break}return s?(r||"function"!=typeof a||(a=this.mv(a,e,i)),a):!r&&""},ls:function(t,n,e,i,a){var o=this.options.delimiters;return this.options.delimiters=a,this.b(this.ct(r(t.call(n,i)),n,e)),this.options.delimiters=o,!1},ct:function(t,n,e){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(t,this.options).render(n,e)},b:function(t){this.buf+=t},fl:function(){var t=this.buf;return this.buf="",t},ms:function(t,n,e,i,r,a,o){var s,c=n[n.length-1],l=t.call(c);return"function"==typeof l?!!i||(s=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(l,c,e,s.substring(r,a),o)):l},mv:function(t,n,e){var i=n[n.length-1],a=t.call(i);return"function"==typeof a?this.ct(r(a.call(i)),i,e):a},sub:function(t,n,e,i){var r=this.subs[t];r&&(this.activeSub=t,r(n,e,this,i),this.activeSub=!1)}};var o=/&/g,s=/</g,c=/>/g,l=/\'/g,u=/\"/g,f=/[&<>\"\']/,h=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}}("undefined"!=typeof e?e:r)},{}],5:[function(t,n,e){"use strict"},{}],6:[function(t,n,e){"use strict";function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function r(t){t.forEach(function(t){if(t.country_flag=!1,t.hasOwnProperty("place_of_birth")){for(var n="",e="images/",i=".png",r=t.place_of_birth.toLowerCase(),a=["usa","uk","italy","australia","france","germany","israel","south-africa","spain","canada"],o=0;o<a.length;o++){var s=a[o];if(r.indexOf(s)!==-1){n=e+s+i;break}}t.country_flag=n}})}function a(t,n){l.render({actor:t[0],direction:n}),t.shift()}function o(t,n){$('.actor[data-direction="'+t+'"').stop().animate(i({},t,"-150%"),400,n).delay(1e3)}function s(t,n){$('.actor[data-direction="'+t+'"').stop().animate(i({},t,"0%"),400,n)}function c(t){$(".actor-divider").hide()}var l=(t("./game.js"),t("@montyanderson/greenman"),t("./views/actorView.js"));$(window).on("load",function(){function t(){n(),e()}function n(){i("#min-handle-label",$(".age-slider").slider("values",0)),i("#max-handle-label",$(".age-slider").slider("values",1))}function e(){l(".ui-slider-handle:first","#min-handle-label"),l(".ui-slider-handle:last","#max-handle-label")}function i(t,n){"100"!=n?$(t).html(n):$(t).html("100+")}function l(t,n){var e=$(t).offset(),i=($(t).width()-$(n).width())/2;$(n).css({left:e.left+i,top:e.top+30})}function u(t,n,e){var i=1;switch(t){case 1:case 2:case 3:break;default:console.log("Please select a gender"),i=0}switch((n>e||n<18||e>100||n!==parseInt(n,10)||e!==parseInt(e,10))&&(console.log("Please enter a valid range"),i=0),i){case 0:return!1;case 1:return!0}}$("img.svg").each(function(){var t=$(this),n=t.attr("id"),e=t.attr("class"),i=t.attr("src");$.get(i,function(i){var r=$(i).find("svg");"undefined"!=typeof n&&(r=r.attr("id",n)),"undefined"!=typeof e&&(r=r.attr("class",e+" replaced-svg")),r=r.removeAttr("xmlns:a"),!r.attr("viewBox")&&r.attr("height")&&r.attr("width")&&r.attr("viewBox","0 0 "+r.attr("height")+" "+r.attr("width")),t.replaceWith(r)},"xml")}),$(".blue-btn").tooltip({track:!0});var f=0,h="#000",p="#bec0ff",d="pink",g="#e8e000";$(".male").hover(function(){$(this).find("path").css("fill",p)},function(){2!=f&&$(this).find("path").css("fill",h)}),$(".female").hover(function(){$(this).find("path").css("fill",d)},function(){1!=f&&$(this).find("path").css("fill",h)}),$(".mixed").hover(function(){$(this).find("path").css("fill",g)},function(){3!=f&&$(this).find("path").css("fill",h)}),$(".male").click(function(){f=2,$(this).find("path").css("fill",p),$(".female > .gender-icon path").css("fill",h),$(".mixed > .gender-icon path").css("fill",h)}),$(".female").click(function(){f=1,$(this).find("path").css("fill",d),$(".male > .gender-icon path").css("fill",h),$(".mixed > .gender-icon path").css("fill",h)}),$(".mixed").click(function(){f=3,$(this).find("path").css("fill",g),$(".male > .gender-icon path").css("fill",h),$(".female > .gender-icon path").css("fill",h)}),$(".age-slider").slider({range:!0,min:18,max:100,values:[18,100],slide:function(t,n){var e=function(){var t=n.handleIndex,e=0==t?"#min-handle-label":"#max-handle-label";i(e,n.value),l(n.handle,e)};setTimeout(e,5)}}),t(),$(window).resize(function(){e()}),$(".play-btn").click(function(){var t=$(".age-slider").slider("values",0),n=$(".age-slider").slider("values",1);u(f,t,n)?($(this).off("click"),$.ajax({url:"/game",data:{minAge:t,maxAge:n,gender:f},success:function(t){$("html, body").animate({scrollTop:"100px"},2e3),$(".handle-label-container").hide(),$(".form-container").fadeOut(1200,function(){$(".actor-container").fadeIn(400)});var n=JSON.parse(t);r(n),a(n,"left"),a(n,"right");var e="";$(document).on("click",".actor:not(.unclickable)",function(){var t=this,i=$(this).addClass("unclickable");e="left"==$(this).data("direction")?"right":"left",o(e,function(){n.length>0?(a(n,e),s(e,function(){i.removeClass("unclickable")})):c($(t).data("direction"))})})}})):console.log("Invalid input")})})},{"./game.js":5,"./views/actorView.js":7,"@montyanderson/greenman":1}],7:[function(t,n,e){"use strict";var i=t("@montyanderson/greenman");n.exports=new i('\n\t\t{{#actor}}\n\t\t\t<div class="one-liner">\n\t\t\t\t<h2>{{name}}, {{age}}</h2> <img class="country-flag" src="{{#country_flag}}{{country_flag}}{{/country_flag}}">\n\t\t\t</div>\n\n\t\t\t<img class="profile-image" src="https://image.tmdb.org/t/p/original/{{profile_path}}">\n\n\t\t\t<div class="known-for">\n\t\t\t\t<h2>Known for:</h2>\n\t\t\t\t{{#known_for}}\n\t\t\t\t\t<img class="poster-image" src="https://image.tmdb.org/t/p/original/{{poster_path}}">\n\t\t\t\t{{/known_for}}\n\t\t\t</div>\n\t\t{{/actor}}\n\t',function(t,n){$('.actor[data-direction="'+n.direction+'"').html(t)})},{"@montyanderson/greenman":1}]},{},[6]);