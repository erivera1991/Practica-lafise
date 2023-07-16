"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}var animations=function(){function e(){_classCallCheck(this,e),this.init()}return _createClass(e,[{key:"readScroll",value:function(){$(".has-animations").each(function(e){var n,t,a=$(this);a.hasClass("readInview")&&(n=$(window).height(),t=a.offset().top,n<700?t-=n/2:t=t-n/2-90,t<=$(window).scrollTop()&&(a.hasClass("inview")||(a.addClass("inview"),a.off("inview"),a.removeClass("readInview"))))}),$(".has-animations").trigger("inview")}},{key:"init",value:function(){var e=this;1<=$(".has-animations").length&&($(".has-animations").addClass("readInview").on("inview",function(e){}),$(window).on("scroll",function(){e.readScroll()}),this.readScroll())}}]),e}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}$(document).ready(function(){new animations});var ReadUTM=function(){function t(){_classCallCheck(this,t);var e=this.readHref(),n=this.getVars(),e=this.concatUTM(e,n);$('a.btn[data-read-utm="true"]').attr("href",e)}return _createClass(t,[{key:"getVars",value:function(){var i=[];return window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi,function(e,n,t){var a={};a.key=n,a.value=t,i.push(a)}),i}},{key:"concatUTM",value:function(e,n){var t;if(void 0!==e)return t=(n=n.map(function(e){return"".concat(e.key,"=").concat(e.value)})).join("&"),1<=n.length?(-1!=e.indexOf("?")?"".concat(e,"&"):"".concat(e,"?")).concat(t):"".concat(e)}},{key:"readHref",value:function(){return $('a.btn[data-read-utm="true"]').eq(0).attr("href")}}]),t}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}$(document).ready(function(){new ReadUTM});var ScrollToAnimation=function(){function e(){_classCallCheck(this,e),this.readClick()}return _createClass(e,[{key:"getPosition",value:function(e){return"#"!=e&&1<=(e=$(e)).length?e.offset().top:0}},{key:"readClick",value:function(){var t=this;$(".btn-scroll-animation").on("click",function(e){var n=$(e.currentTarget),n=t.getPosition(n.attr("href"));$("html, body").stop().animate({scrollTop:n},1e3),e.preventDefault()})}}]),e}(),getClickMode=($(document).ready(function(){new ScrollToAnimation}),function(){var e="click";return"ontouchstart"in window&&($("body").addClass("is-touch").removeClass("is-no-touch"),e="touchstart"),e}),bancanetActions=function(e){$(".dropdown").find(".dropdown-toggle").on(e,function(){$(this).parent(".dropdown").toggleClass("is-active-menu")})},menuActions=function(e){e=e,$(".main-menu").find(".primary > a").on(e,function(e){var n=$("body").hasClass("is-touch"),t=$(window).width();(n||t<992)&&(e.preventDefault(),1<=(n=$(this).parent(".primary")).find(".sub-menu").length&&($(".main-menu").find(".primary.is-active").not(n).removeClass("is-active"),n.toggleClass("is-active")))}),$(".btn-responsive-menu").on(e,function(e){e.preventDefault(),$(this).toggleClass("is-active"),$(".main-menu").toggleClass("is-active")})},searchActions=function(e){$(".btn-seach").on(e,function(e){e.preventDefault(),$(this).toggleClass("is-active")})};$(document).ready(function(){var e=getClickMode();bancanetActions(e),menuActions(e),searchActions(e)});