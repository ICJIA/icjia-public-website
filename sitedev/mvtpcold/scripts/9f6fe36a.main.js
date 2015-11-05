/*!
 * jQuery Expander Plugin - v1.4.13 - 2014-10-05
 * http://plugins.learningjquery.com/expander/
 * Copyright (c) 2014 Karl Swedberg
 * Licensed MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function(e){e.expander={version:"1.4.13",defaults:{slicePoint:100,sliceOn:null,preserveWords:!0,showWordCount:!1,wordCountText:" ({{count}} words)",widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:!1,wordEnd:/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+|[^\u0000-\u007F]+)$/,summaryClass:"summary",detailClass:"details",moreClass:"read-more",lessClass:"read-less",moreLinkClass:"more-link",lessLinkClass:"less-link",collapseTimer:0,expandEffect:"slideDown",expandSpeed:250,collapseEffect:"slideUp",collapseSpeed:200,userCollapse:!0,userCollapseText:"read less",userCollapsePrefix:" ",onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null,afterCollapse:null}},e.fn.expander=function(a){function l(e,a){var l="span",s=e.summary,n=h.exec(s),t=n?n[2].toLowerCase():"";return a?(l="div",n&&"a"!==t&&!e.expandAfterSummary?s=s.replace(h,e.moreLabel+"$1"):s+=e.moreLabel,s='<div class="'+e.summaryClass+'">'+s+"</div>"):s+=e.moreLabel,[s," <",l+' class="'+e.detailClass+'"',">",e.details,"</"+l+">"].join("")}function s(e,a){var l='<span class="'+e.moreClass+'">'+e.expandPrefix;return e.wordCountText=e.showWordCount?e.wordCountText.replace(/\{\{count\}\}/,a.replace(u,"").replace(/\&(?:amp|nbsp);/g,"").replace(/(?:^\s+|\s+$)/,"").match(/\w+/g).length):"",l+='<a href="#" class="'+e.moreLinkClass+'">'+e.expandText+e.wordCountText+"</a></span>"}function n(a,l){return a.lastIndexOf("<")>a.lastIndexOf(">")&&(a=a.slice(0,a.lastIndexOf("<"))),l&&(a=a.replace(f,"")),e.trim(a)}function t(e,a){a.stop(!0,!0)[e.collapseEffect](e.collapseSpeed,function(){var l=a.prev("span."+e.moreClass).show();l.length||a.parent().children("div."+e.summaryClass).show().find("span."+e.moreClass).show(),e.afterCollapse&&e.afterCollapse.call(a)})}function r(a,l,s){a.collapseTimer&&(d=setTimeout(function(){t(a,l),e.isFunction(a.onCollapse)&&a.onCollapse.call(s,!1)},a.collapseTimer))}function i(a){var l="ExpandMoreHere374216623",s=a.summaryText.replace(a.sliceOn,l);s=e("<div>"+s+"</div>").text();var n=s.indexOf(l),t=a.summaryText.indexOf(a.sliceOn);return-1!==n&&a.slicePoint>n&&(a.summaryText=a.allHtml.slice(0,t)),a}var o="init";"string"==typeof a&&(o=a,a={});var d,c=e.extend({},e.expander.defaults,a),p=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,f=c.wordEnd,u=/<\/?(\w+)[^>]*>/g,m=/<(\w+)[^>]*>/g,x=/<\/(\w+)>/g,h=/(<\/([^>]+)>)\s*$/,C=/^(<[^>]+>)+.?/,v=/\s\s+/g,g=function(a){return e.trim(a||"").replace(v," ")},w={init:function(){this.each(function(){var a,o,f,h,v,w,y,T,E,S,b,k,O,P,L,I=[],$=[],j="",A={},D=this,W=e(this),F=e([]),H=e.extend({},c,W.data("expander")||e.meta&&W.data()||{}),z=!!W.find("."+H.detailClass).length,U=!!W.find("*").filter(function(){var a=e(this).css("display");return/^block|table|list/.test(a)}).length,M=U?"div":"span",Q=M+"."+H.detailClass,Z=H.moreClass+"",q=H.lessClass+"",B=H.expandSpeed||0,G=g(W.html()),J=G.slice(0,H.slicePoint);if(H.moreSelector="span."+Z.split(" ").join("."),H.lessSelector="span."+q.split(" ").join("."),!e.data(this,"expanderInit")){for(e.data(this,"expanderInit",!0),e.data(this,"expander",H),e.each(["onSlice","beforeExpand","afterExpand","onCollapse","afterCollapse"],function(a,l){A[l]=e.isFunction(H[l])}),J=n(J),v=J.replace(u,"").length;H.slicePoint>v;)h=G.charAt(J.length),"<"===h&&(h=G.slice(J.length).match(C)[0]),J+=h,v++;for(H.sliceOn&&(L=i({sliceOn:H.sliceOn,slicePoint:H.slicePoint,allHtml:G,summaryText:J}),J=L.summaryText),J=n(J,H.preserveWords&&G.slice(J.length).length),w=J.match(m)||[],y=J.match(x)||[],f=[],e.each(w,function(e,a){p.test(a)||f.push(a)}),w=f,o=y.length,a=0;o>a;a++)y[a]=y[a].replace(x,"$1");if(e.each(w,function(a,l){var s=l.replace(m,"$1"),n=e.inArray(s,y);-1===n?(I.push(l),$.push("</"+s+">")):y.splice(n,1)}),$.reverse(),z)E=W.find(Q).remove().html(),J=W.html(),G=J+E,T="";else{if(E=G.slice(J.length),S=e.trim(E.replace(u,"")),""===S||S.split(/\s+/).length<H.widow)return;T=$.pop()||"",J+=$.join(""),E=I.join("")+E}H.moreLabel=W.find(H.moreSelector).length?"":s(H,E),U?E=G:"&"===J.charAt(J.length-1)&&(j=/^[#\w\d\\]+;/.exec(E),j&&(E=E.slice(j[0].length),J+=j[0])),J+=T,H.summary=J,H.details=E,H.lastCloseTag=T,A.onSlice&&(f=H.onSlice.call(D,H),H=f&&f.details?f:H),b=l(H,U),W.html(b),O=W.find(Q),P=W.find(H.moreSelector),"slideUp"===H.collapseEffect&&"slideDown"!==H.expandEffect||W.is(":hidden")?O.css({display:"none"}):O[H.collapseEffect](0),F=W.find("div."+H.summaryClass),k=function(e){e.preventDefault(),P.hide(),F.hide(),A.beforeExpand&&H.beforeExpand.call(D),O.stop(!1,!0)[H.expandEffect](B,function(){O.css({zoom:""}),A.afterExpand&&H.afterExpand.call(D),r(H,O,D)})},P.find("a").unbind("click.expander").bind("click.expander",k),H.userCollapse&&!W.find(H.lessSelector).length&&W.find(Q).append('<span class="'+H.lessClass+'">'+H.userCollapsePrefix+'<a href="#" class="'+H.lessLinkClass+'">'+H.userCollapseText+"</a></span>"),W.find(H.lessSelector+" a").unbind("click.expander").bind("click.expander",function(a){a.preventDefault(),clearTimeout(d);var l=e(this).closest(Q);t(H,l),A.onCollapse&&H.onCollapse.call(D,!0)})}})},destroy:function(){this.each(function(){var a,l,s=e(this);s.data("expanderInit")&&(a=e.extend({},s.data("expander")||{},c),l=s.find("."+a.detailClass).contents(),s.removeData("expanderInit"),s.removeData("expander"),s.find(a.moreSelector).remove(),s.find("."+a.summaryClass).remove(),s.find("."+a.detailClass).after(l).remove(),s.find(a.lessSelector).remove())})}};return w[o]&&w[o].call(this),this},e.fn.expander.defaults=e.expander.defaults})(jQuery);

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// custom javascript here

$('span.expander, div.expander').expander({
  slicePoint: 255,
  expandPrefix: '... ',
  expandText: 'Read more&nbsp;&raquo;',
  expandEffect: 'fadeIn',
  expandSpeed: 300,
  collapseEffect: 'fadeOut',
  collapseSpeed: 300,
  userCollapseText: '&nbsp;&laquo;&nbsp;'
});


$('#printPage').click(function() {
  //alert('Click')
  window.print();
  return false;
});

/*
$('#pageAsPdf').click(function(e) {
	e.preventDefault();
	var myDepth = getDepth();
	myPagePath = getPagePath();
	redirectUrl = myDepth + 'printAsPdf.cfm?pdf=' + myPagePath;
	//alert(redirectUrl);
	window.open(redirectUrl);
	return false;

});*/