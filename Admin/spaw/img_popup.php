<html>
<head>
<title>Img</title>
<meta name="Author" content="Solmetra (www.solmetra.com)">
<link rel="stylesheet" type="text/css" href="lib/style.css">
<script language="JavaScript">
function resizeOuterTo(w,h) {
 if (parseInt(navigator.appVersion)>3) {
   if (navigator.appName=="Netscape") {
    top.outerWidth=w+8;
    top.outerHeight=h+29;
   }
   else
   {
    top.resizeTo(400,300);
    wd = 400-document.body.clientWidth;
    hd = 300-document.body.clientHeight;
    top.resizeTo(w+wd,h+hd);
   }
 }
}

function init()
{
  resizeOuterTo(document.images['LargeImg'].width, document.images['LargeImg'].height);
}
</script>
</head>
<body marginheight="0" marginwidth="0" topmargin="0" leftmargin="0" rightmargin="0" bottommargin="0" onLoad="init();" bgcolor="black">
<img name="LargeImg" src="" border="0"/>
</body>
</html>