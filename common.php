
var idout;

var valPageLoaded = 0;
var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 &&
                parseFloat(navigator.appVersion) >= 4) ? 1 : 0;
var isMinIE4 = (document.all) ? 1 : 0;
var isMinIE5 = (isMinIE4 && navigator.appVersion.indexOf("5.")) >= 0 ? 1 : 0;

function RollOver( img ) {
  if( isMinNS4 || isMinIE4 ) {
    document.images[ img ].src = 'http://www.maratsafin.com/Images/header-menu-' + img + '-on.gif';
  }
}

function RollOut( img ) {
  if( isMinNS4 || isMinIE4 ) {
    document.images[ img ].src = 'http://www.maratsafin.com/Images/header-menu-' + img + '.gif';
  }
}

function LoadImages( ) {
  if( isMinNS4 || isMinIE4 ) {
    img1  = new Image( );
    img2  = new Image( );
    img3  = new Image( );
    img4  = new Image( );
    img5  = new Image( );
    img6  = new Image( );
    img7  = new Image( );
    img8  = new Image( );

    img1.src  = "http://www.maratsafin.com/Images/";
    img2.src  = "http://www.maratsafin.com/Images/";
    img3.src  = "http://www.maratsafin.com/Images/";
    img4.src  = "http://www.maratsafin.com/Images/";
    img5.src  = "http://www.maratsafin.com/Images/";
    img6.src  = "http://www.maratsafin.com/Images/";
    img7.src  = "http://www.maratsafin.com/Images/";
    img8.src  = "http://www.maratsafin.com/Images/";
  }
}

LoadImages( );

function DoNothing( ) { }

function showmenu( ) {
    if( isMinIE4 ) {
      document.getElementById('aboutMenu').style.visibility = "visible";
    }
}

function hidewithdelay( ) {
    setTimeout( "hidemenu( )", 1000 );
}

function hidemenu( ) {
    if( isMinIE4 ) {
      document.getElementById('aboutMenu').style.visibility = "hidden";
    }
}

// Specify the marquee's width (in pixels)
var marqueewidth = "100%";

// Specify the marquee's height
var marqueeheight = "100%";

// Specify the marquee's scroll speed (larger is faster)
var speed = 1;

//Specify the marquee contents
var marqueecontents = '';

function openCenterWindow( url, wd, ht, scroll ) {
  d = ( screen.width - wd )/2;
  h = ( ( screen.height-ht )/2 );

  window.open(url,'','top=' + h + ',left=' + d + ',width=' + wd + ',height=' + ht + ',toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=' + scroll + ',resizable=' + scroll + '').focus();
}

function banner_redirect( url, banner_id ) {
  window.open('/relocate.php'+'?url='+url+'&bid='+banner_id,'','toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes').focus();
}


// Open a window of the desired size in the centre of the screen.
function openLSWindowTandR(year, wkno, lang, tabno, eventid, ref_file, width, height, hasScrollBars) {
	// ADD NAME FIELD and make sure it get's focus!!!
	var theWidth = width;
	var theHeight = height;
	var scrollBars = "scrollbars";
	if (hasScrollBars == false) scrollBars = "scrollbars=0";
	if ((theWidth == "")||(theWidth == null)) theWidth =500;
	if ((theHeight == "")||(theHeight == null)) theHeight =750;
	var theLeft = (screen.availWidth - theWidth)/2;
	var theTop = (screen.availHeight - theHeight)/2;
	var strCheckRef = escape(ref_file);

	var lsURL = "http://www.protennislive.com/frameset.asp?year="+year+"&wkno="+wkno+"&lang="+lang+"&tabno="+tabno+"&eventid="+eventid+"&ref="+strCheckRef;
	var popupWin = window.open(lsURL, '_' + Math.round(Math.random() * 1000000),'top='+theTop+',left='+theLeft+',menubar=0,toolbar=0,location=0,directories=0,status=0,'+scrollBars+',width='+theWidth+', height='+theHeight);
}
