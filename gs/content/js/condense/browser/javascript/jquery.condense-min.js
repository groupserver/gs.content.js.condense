(function(d){d.fn.condense=function(h){d.metadata?a("metadata plugin detected"):a("metadata plugin not present");
var i=d.extend({},d.fn.condense.defaults,h);return this.each(function(){$this=d(this);
var l=d.metadata?d.extend({},i,$this.metadata()):i;a("Condensing ["+$this.text().length+"]: "+$this.text());
var m=g($this,l);if(m){$this.attr("id")?$this.attr("id","condensed_"+$this.attr("id")):false;
var k=" <span class='condense_control condense_control_more' style='cursor:pointer;'>"+l.moreText+"</span>";
var j=" <span class='condense_control condense_control_less' style='cursor:pointer;'>"+l.lessText+"</span>";
m.append(l.ellipsis+k);$this.after(m).hide().append(j);d(".condense_control_more",m).click(function(){a("moreControl clicked.");
e(d(this),l)});d(".condense_control_less",$this).click(function(){a("lessControl clicked.");
c(d(this),l)})}})};function g(k,h){if(d.trim(k.text()).length<=h.condensedLength+h.minTrail){a("element too short: skipping.");
return false}var m=d.trim(k.html());var p=d.trim(k.text());var j=h.delim;var o=k.clone();
var q=0;do{var n=b(m,h.delim,(h.condensedLength+q));o.html(d.trim(m.substring(0,(n+1))));
var i=o.text().length;var l=o.html().length;q=o.html().length-i;a("condensing... [html-length:"+l+" text-length:"+i+" delta: "+q+" break-point: "+n+"]")
}while(q&&o.text().length<h.condensedLength);if((p.length-i)<h.minTrail){a("not enough trailing text: skipping.");
return false}a("clone condensed. [text-length:"+i+"]");return o}function b(h,l,j){var i=false;
var k=j;do{var k=h.indexOf(l,k);if(k<0){a("No delimiter found.");return h.length}i=true;
while(f(h,k)){k++;i=false}}while(!i);a("Delimiter found in html at: "+k);return k
}function f(h,i){return(h.indexOf(">",i)<h.indexOf("<",i))}function c(l,k){a("Condense Trigger: "+l.html());
var o=l.parent();var m=o.next();m.show();var h=m.width();var i=m.height();m.hide();
var j=o.width();var n=o.height();o.animate({height:i,width:h,opacity:1},k.lessSpeed,k.easing,function(){o.height(n).width(j).hide();
m.show()})}function e(j,i){a("Expand Trigger: "+j.html());var k=j.parent();var n=k.prev();
if(i.expandedWidth){n.width(i.expandedWidth)}n.show();var h=n.width();var m=n.height();
n.width(k.width()+"px").height(k.height()+"px");k.hide();n.animate({height:m,width:h,opacity:1},i.moreSpeed,i.easing);
if(k.attr("id")){var l=k.attr("id");k.attr("id","condensed_"+l);n.attr("id",l)}}function a(h){if(window.console&&window.console.log){window.console.log(h)
}}d.fn.condense.defaults={condensedLength:200,minTrail:20,delim:" ",moreText:"[more]",lessText:"[less]",ellipsis:" ( ... )",moreSpeed:"normal",lessSpeed:"normal",easing:"linear"}
})(jQuery);