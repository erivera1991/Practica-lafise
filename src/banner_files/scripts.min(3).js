!function(b){var v="iCheck",C=v+"-helper",k="checkbox",W="radio",F="checked",m="un"+F,w="disabled",f="determinate",y="in"+f,J="update",T="type",$="click",x="touchbegin.i touchend.i",_="addClass",I="removeClass",E="trigger",q="label",g="cursor",D=/android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent)||/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints;function L(e,t,i){var a=e[0],s=/er/.test(i)?y:/bl/.test(i)?w:F,n=i==J?{checked:a[F],disabled:a[w],indeterminate:"true"==e.attr(y)||"false"==e.attr(f)}:a[s];if(/^(ch|di|in)/.test(i)&&!n)M(e,s);else if(/^(un|en|de)/.test(i)&&n)R(e,s);else if(i==J)for(var r in n)(n[r]?M:R)(e,r,!0);else t&&"toggle"!=i||(t||e[E]("ifClicked"),n?a[T]!==W&&R(e,s):M(e,s))}function M(e,t,i){var a,s,n=e[0],r=e.parent(),o=t==F,d=t==y,l=t==w,u=d?f:o?m:"enabled",c=p(e,u+U(n[T])),h=p(e,t+U(n[T]));!0!==n[t]&&(!i&&t==F&&n[T]==W&&n.name&&(a=e.closest("form"),s='input[name="'+n.name+'"]',(s=a.length?a.find(s):b(s)).each(function(){this!==n&&b(this).data(v)&&R(b(this),t)})),d?(n[t]=!0,n[F]&&R(e,F,"force")):(i||(n[t]=!0),o&&n[y]&&R(e,y,!1)),H(e,o,t,i)),n[w]&&p(e,g,!0)&&r.find("."+C).css(g,"default"),r[_](h||p(e,t)||""),r.attr("role")&&!d&&r.attr("aria-"+(l?w:F),"true"),r[I](c||p(e,u)||"")}function R(e,t,i){var a=e[0],s=e.parent(),n=t==F,r=t==y,o=t==w,d=r?f:n?m:"enabled",l=p(e,d+U(a[T])),u=p(e,t+U(a[T]));!1!==a[t]&&(!r&&i&&"force"!=i||(a[t]=!1),H(e,n,d,i)),!a[w]&&p(e,g,!0)&&s.find("."+C).css(g,"pointer"),s[I](u||p(e,t)||""),s.attr("role")&&!r&&s.attr("aria-"+(o?w:F),"false"),s[_](l||p(e,d)||"")}function S(e,t){e.data(v)&&(e.parent().html(e.attr("style",e.data(v).s||"")),t&&e[E](t),e.off(".i").unwrap(),b(q+'[for="'+e[0].id+'"]').add(e.closest(q)).off(".i"))}function p(e,t,i){if(e.data(v))return e.data(v).o[t+(i?"":"Class")]}function U(e){return e.charAt(0).toUpperCase()+e.slice(1)}function H(e,t,i,a){a||(t&&e[E]("ifToggled"),e[E]("ifChanged")[E]("if"+U(i)))}b.fn[v]=function(t,i){function e(e){e.each(function(){var e=b(this);n=e.is(s)?n.add(e):n.add(e.find(s))})}var u,a,c,h,m,f,g,p,s='input[type="'+k+'"], input[type="'+W+'"]',n=b();return/^(check|uncheck|toggle|indeterminate|determinate|disable|enable|update|destroy)$/i.test(t)?(t=t.toLowerCase(),e(this),n.each(function(){var e=b(this);"destroy"==t?S(e,"ifDestroyed"):L(e,!0,t),b.isFunction(i)&&i()})):"object"!=typeof t&&t?this:(a=(u=b.extend({checkedClass:F,disabledClass:w,indeterminateClass:y,labelHover:!0,aria:!0},t)).handle,c=u.hoverClass||"hover",h=u.focusClass||"focus",m=u.activeClass||"active",f=!!u.labelHover,g=u.labelHoverClass||"hover",p=0|(""+u.increaseArea).replace("%",""),a!=k&&a!=W||(s='input[type="'+a+'"]'),p<-50&&(p=-50),e(this),n.each(function(){var a=b(this),s=(S(a),this),e=s.id,t=-p+"%",i=100+2*p+"%",t={position:"absolute",top:t,left:t,display:"block",width:i,height:i,margin:0,padding:0,background:"#fff",border:0,opacity:0},i=D?{position:"absolute",visibility:"hidden"}:p?t:{position:"absolute",opacity:0},n=s[T]==k?u.checkboxClass||"i"+k:u.radioClass||"i"+W,r=b(q+'[for="'+e+'"]').add(a.closest(q)),o=!!u.aria,d=v+"-"+Math.random().toString(36).substr(2,6),l='<div class="'+n+'" '+(o?'role="'+s[T]+'" ':"");o&&r.each(function(){l+='aria-labelledby="',this.id?l+=this.id:(this.id=d,l+=d),l+='"'}),l=a.wrap(l+"/>")[E]("ifCreated").parent().append(u.insert),n=b('<ins class="'+C+'"/>').css(t).appendTo(l),a.data(v,{o:u,s:a.attr("style")}).css(i),u.inheritClass&&l[_](s.className||""),u.inheritID&&e&&l.attr("id",v+"-"+e),"static"==l.css("position")&&l.css("position","relative"),L(a,!0,J),r.length&&r.on($+".i mouseover.i mouseout.i "+x,function(e){var t=e[T],i=b(this);if(!s[w]){if(t==$){if(b(e.target).is("a"))return;L(a,!1,!0)}else f&&(/ut|nd/.test(t)?(l[I](c),i[I](g)):(l[_](c),i[_](g)));if(!D)return!1;e.stopPropagation()}}),a.on($+".i focus.i blur.i keyup.i keydown.i keypress.i",function(e){var t=e[T],e=e.keyCode;if(t==$)L(a,!1,J);else{if("keydown"==t&&32==e)return s[T]==W&&s[F]||(s[F]?R:M)(a,F),!1;"keyup"==t&&s[T]==W?s[F]||M(a,F):/us|ur/.test(t)&&l["blur"==t?I:_](h)}}),n.on($+" mousedown mouseup mouseover mouseout "+x,function(e){var t=e[T],i=/wn|up/.test(t)?m:c;if(!s[w]){if(t==$?L(a,!1,!0):(/wn|er|in/.test(t)?l[_](i):l[I](i+" "+m),r.length&&f&&i==c&&r[/ut|nd/.test(t)?I:_](g)),!D)return!1;e.stopPropagation()}})}))}}(window.jQuery||window.Zepto);"use strict";function Terms(){var t,i="By clicking the submit button, I agree to {terms & conditions}.",a=JFCustomWidget.getWidgetSettings(),s=a.acceptedText||"Accepted";document.referrer.indexOf("ndt=1");function n(){var e={valid:!1,value:""};return $("#userInput").is(":checked")&&(e.valid=!0,e.value=s,JFCustomWidget.hideWidgetError()),e}function r(){$('#userInput, .iCheck-helper, label[for="userInput"]').on("click touch",function(){var e=n();JFCustomWidget.sendData({value:e.value})})}function o(){var e=a.termsLink,t=$("#_label").html().replace("{",'<a href="#" target="_blank" id="_terms" rel="nofollow">').replace("}","</a>");$("#_label").html(t),e=e&&0<e.length?0<=e.search("http://")||0<=e.toLowerCase().indexOf("https")?e:"http://"+e:"http://www.jotform.com",$("#_terms").attr("href",e)}function d(){JFCustomWidgetUtils.isMobile()?JFCustomWidget.requestFrameResize({height:$("#main").outerHeight()+30}):JFCustomWidget.requestFrameResize({height:$("#main").outerHeight()+20})}this.init=function(e){!JFCustomWidget.isWidgetRequired()||"v2"===e.themeVersion&&e.isWidgetLabelEnabled?$(".required").hide():($(".required").show(),$("#userInput").attr("aria-required","true"),$("#userInput").attr("required","required"));"theme"in a&&!JFCustomWidgetUtils.isEmpty(a.theme)&&"default"!==a.theme&&$("#main").addClass("theme-"+a.theme);void 0!==a.termsText&&0<a.termsText.length?$("#_label").html(a.termsText):$("#_label").html(i),d();t=$("#main input"),JFCustomWidgetUtils.isMobile()?e&&e.value&&t&&t[0]&&(t[0].checked=!0,JFCustomWidget.sendData(n())):(t.iCheck({checkboxClass:"icheckbox_minimal",increaseArea:"20%",aria:!1}),e&&e.value&&(t.iCheck("check"),JFCustomWidget.sendData(n())));o(),r()},this.getData=n,this.resetData=function(){JFCustomWidgetUtils.isMobile()?$("#main input").prop("checked",!1):t.iCheck("uncheck")},this.updateTermLink=o,this.updateFrameSize=d,this.params=a}window.addEventListener("load",function(){document.getElementById("userInput").addEventListener("focus",function(e){var t=JFCustomWidget.getWidgetSettings();parent.postMessage({type:"collapse",qid:t.qid},"*")}),JFCustomWidget.subscribe("ready",function(e){var t=new Terms;t.init(e),JFCustomWidget.subscribe("clear",function(){t.resetData()}),JFCustomWidget.subscribe("submit",function(){JFCustomWidget.sendSubmit(t.getData())})}),JFCustomWidget.subscribe("translatable",function(){var e=JFWidgetTranslation.getTranslatables(function(e){var t=[JFCustomWidget.getWidgetSettings().termsText,"REQUIRED"];return e.concat(t)});JFCustomWidget.sendTranslatables(e)}),JFCustomWidget.subscribe("translate",function(e){var t=JFCustomWidget.getWidgetSettings(),i=t.termsText&&t.termsText.replace(/\s{2,}/g," ").trim(),i=JFWidgetTranslation.getTranslation(e,i,e.to),a=JFWidgetTranslation.getTranslation(e,"REQUIRED",e.to);i&&($("#_label").html(i),i=t.termsLink,t=$("#_label").html().replace("{",'<a href="#" target="_blank" id="_terms" rel="nofollow">').replace("}","</a>"),$("#_label").html(t),i=i&&0<i.length?0<=i.search("http://")||0<=i.toLowerCase().indexOf("https")?i:"http://"+i:"http://www.jotform.com",$("#_terms").attr("href",i)),a&&(document.getElementById("requiredElement").innerHTML=a),JFWidgetTranslation.translate(e)})});