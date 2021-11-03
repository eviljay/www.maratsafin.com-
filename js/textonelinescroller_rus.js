

var message= new Array()

message[0]="НОВОСТИ|Марат Сафин финалист турнира Australian Open 2002 |results.htm"

message[1]="НОВОСТИ|Марат Сафин победитель St.Petersburg Open 2001 в Ст.Петербурге |results.htm"

message[2]="РЕЗУЛЬТАТЫ|Марат победитель US Open 2000 в Нью-Йорке, США |results.htm"

message[3]="НОВОСТИ|Посмотри последние новости о Марате |news.htm"

message[4]="ФОТО|Огромная коллекция фоток, включая самые интересные... |photos.htm"

// height of the scrollerbox (pixels)
var scrollerheight=20

// width of the titlezone (pixels)
var titlezonewidth=133

// width of the copyzone (pixels)
var copyzonewidth=446

// horizonal position: distance to the top border of the window (pixels)
var scrollertop=100

// vertical position: distance to the left border of the window (pixels)
var scrollerleft=0

// borderwidth of the scroller
var scrollerborder=0

// backgroundcolor for the titlezone
var titlezonebg="##0099CC"

// backgroundcolor for the copyzone
var copyzonebg="CC0000"

// backgroundcolor for the scroller
var scrollbg="003333"

// The target of your links
// possible values are '_blank', '_self', '_top', '_parent' or the name of
// the target window for instance 'main'
var targetlink="_self"

// font attributes of the title
var font_titleface="Verdana"
var font_titlecolor="FFFFFF"
var font_titlesize=1

// font attributes of the copytext
var font_copyface="Verdana"
var font_copycolor="FFFFFF"
var font_copysize=1

// set 1 for bold title, set 0 for normal title
var titlebold=1

// set 1 for bold copy, set 0 for normal copy
var copybold=1

// set 'right', 'left' or 'center' to align the title
var titlealign="left"

// set 'right', 'left' or 'center' to align the copy
var copyalign="left"

// standstill between the messages (milliseconds)
var standstill=4000

// Do not edit below this line
var pre_titlebold
var after_titlebold
var pre_copybold
var after_copybold

var cliptop=0
var clipbottom=0
var clipleft=0
var clipright=titlezonewidth+copyzonewidth

var i_message=0
var mes_joined
var mes_split
var contenttext
var contentbg=""

var step=1
var pause=20

if (titlebold==1) {
	pre_titlebold="<b>"
	after_titlebold="</b>"
}
else if (titlebold==0) {
	pre_titlebold=""
	after_titlebold=""
}

if (copybold==1) {
	pre_copybold="<b>"
	after_copybold="</b>"
}
else if (copybold==0) {
	pre_copybold=""
	after_copybold=""
}

function initiate() {
		mes_joined=message[i_message]
		mes_split=mes_joined.split("|")
		
		contenttext="<table cellpadding=4 cellspacing=0 border=0>"
		contenttext+="<tr valign='top'>"
		contenttext+="<td align="+titlealign+" width="+titlezonewidth+" height='"+scrollerheight+"' bgcolor='"+titlezonebg+"'>"
		contenttext+="<a href='"+mes_split[2]+"' target='"+targetlink+"'>"
		contenttext+="<font face='"+font_titleface+"' color='"+font_titlecolor+"' size='"+font_titlesize+"'>"
		contenttext+=pre_titlebold
		contenttext+=mes_split[0]
		contenttext+=after_titlebold
		contenttext+="</font></a></td>"
		contenttext+="<td align="+copyalign+" width="+copyzonewidth+" height='"+scrollerheight+"' bgcolor='"+copyzonebg+"'>"
		contenttext+="<font face='"+font_copyface+"' color='"+font_copycolor+"' size='"+font_copysize+"'>"
		contenttext+=pre_copybold
		contenttext+=mes_split[1]
		contenttext+=after_copybold
		contenttext+="</font></td></tr>"
		contenttext+="</table>"
		
		var bg_width=titlezonewidth+copyzonewidth+2*scrollerborder
		var bg_height=scrollerheight+2*scrollerborder
		
		contentbg="<table width="+bg_width+" height='"+bg_height+"' cellpadding=0 cellspacing=0 border='"+scrollerborder+"'><tr><td bgcolor='"+scrollbg+"'>&nbsp;</td></tr></table>"
	
	if (document.all) {
		scrollertext.innerHTML=contenttext
		scrollerbg.innerHTML=contentbg
		document.all.scrollertext.style.posTop=scrollertop+scrollerheight
		document.all.scrollertext.style.posLeft=scrollerleft
		document.all.scrollerbg.style.posTop=scrollertop-scrollerborder
		document.all.scrollerbg.style.posLeft=scrollerleft-scrollerborder
		document.all.scrollertext.style.clip="rect("+cliptop+" "+clipright+" "+clipbottom+" "+clipleft+")"
		scrollin()
	}
	if (document.layers) {
		document.scrollertext.document.write(contenttext)
		document.scrollertext.document.close()
		document.scrollerbg.document.write(contentbg)
		document.scrollerbg.document.close()
		document.scrollertext.top=scrollertop+scrollerheight
		document.scrollertext.left=scrollerleft
		document.scrollerbg.top=scrollertop-scrollerborder
		document.scrollerbg.left=scrollerleft-scrollerborder
		document.scrollertext.clip.left=clipleft
        document.scrollertext.clip.right=clipright
        document.scrollertext.clip.top=cliptop
        document.scrollertext.clip.bottom=clipbottom
		scrollin()
	}
}

function scrollin(){
	if (document.all){
		if (document.all.scrollertext.style.posTop>scrollertop) {
			clipbottom+=step
			document.all.scrollertext.style.clip="rect("+cliptop+" "+clipright+" "+clipbottom+" "+clipleft+")"
			document.all.scrollertext.style.posTop-=step
			var timer=setTimeout("scrollin()",pause)
		}
		else {
			clearTimeout(timer)
			var timer=setTimeout("scrollout()",standstill)
		}
	}
	if (document.layers){
		if (document.scrollertext.top>scrollertop) {
			clipbottom+=step
			document.scrollertext.clip.left=clipleft
        	document.scrollertext.clip.right=clipright
        	document.scrollertext.clip.top=cliptop
        	document.scrollertext.clip.bottom=clipbottom
			document.scrollertext.top-=step
			var timer=setTimeout("scrollin()",pause)
		}
		else {
			clearTimeout(timer)
			var timer=setTimeout("scrollout()",standstill)
		}
	}
}

function scrollout(){
	if (document.all){
		if (document.all.scrollertext.style.posTop>(scrollertop-scrollerheight)) {
			cliptop+=step
			document.all.scrollertext.style.clip="rect("+cliptop+" "+clipright+" "+clipbottom+" "+clipleft+")"
			document.all.scrollertext.style.posTop-=step
			var timer=setTimeout("scrollout()",pause)
		}
		else {
			clearTimeout(timer)
			changemessage()
		}
	}
	if (document.layers){
		if (document.scrollertext.top>(scrollertop-scrollerheight)) {
			cliptop+=step
			document.scrollertext.clip.left=clipleft
        	document.scrollertext.clip.right=clipright
        	document.scrollertext.clip.top=cliptop
        	document.scrollertext.clip.bottom=clipbottom
			document.scrollertext.top-=step
			var timer=setTimeout("scrollout()",pause)
		}
		else {
			clearTimeout(timer)

			changemessage()
		}
	}
}

function changemessage(){
		i_message++
		if (i_message>message.length-1) {i_message=0}
		mes_joined=message[i_message]
		mes_split=mes_joined.split("|")
		cliptop=0
		clipbottom=0
		
		contenttext="<table cellpadding=4 cellspacing=0 border=0>"
		contenttext+="<tr valign='top'>"
		contenttext+="<td align="+titlealign+" width="+titlezonewidth+" height='"+scrollerheight+"' bgcolor='"+titlezonebg+"'>"
		contenttext+="<a href='"+mes_split[2]+"' target='"+targetlink+"'>"
		contenttext+="<font face='"+font_titleface+"' color='"+font_titlecolor+"' size='"+font_titlesize+"'>"
		contenttext+=pre_titlebold
		contenttext+=mes_split[0]
		contenttext+=after_titlebold
		contenttext+="</font></a></td>"
		contenttext+="<td align="+copyalign+" width="+copyzonewidth+" height='"+scrollerheight+"' bgcolor='"+copyzonebg+"'>"
		contenttext+="<font face='"+font_copyface+"' color='"+font_copycolor+"' size='"+font_copysize+"'>"
		contenttext+=pre_copybold
		contenttext+=mes_split[1]
		contenttext+=after_copybold
		contenttext+="</font></td></tr>"
		contenttext+="</table>"
	
	if (document.all) {
		scrollertext.innerHTML=contenttext
		document.all.scrollertext.style.posTop=scrollertop+scrollerheight
		document.all.scrollertext.style.posLeft=scrollerleft
		document.all.scrollertext.style.clip="rect("+cliptop+" "+clipright+" "+clipbottom+" "+clipleft+")"
		scrollin()
	}
	if (document.layers) {
		document.scrollertext.document.write(contenttext)
		document.scrollertext.document.close()
		document.scrollertext.top=scrollertop+scrollerheight
		document.scrollertext.left=scrollerleft
		document.scrollertext.clip.left=clipleft
        document.scrollertext.clip.right=clipright
        document.scrollertext.clip.top=cliptop
        document.scrollertext.clip.bottom=clipbottom
		scrollin()
	}
}

