<?php

  /*
   *  Template file: common.js
   *  Copyright © Comrax Ltd., 1999-2003. All rights reserved.
   *  Unauthorized duplication and modification prohibited.
   *
   *  END-USER LICENSE AND AGREEMENT                                         >>>
   *
   *  THIS SOFTWARE IS PROVIDED BY "COMRAX LTD" ``AS IS'' AND ANY EXPRESS OR
   *  IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
   *  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
   *  IN NO EVENT SHALL "COMRAX LTD" BE LIABLE FOR ANY DIRECT, INDIRECT,
   *  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
   *  NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   *  DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   *  THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   *  (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
   *  THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   ****************************************************************************/

  if( defined( '_COMMON_JS_INC' ) ) return;
  define( '_COMMON_JS_INC', 1 );

  include( 'portalce.inc' );
  include( SYS_SCRIPTS_DIR.'initialize.inc' );

?>

var idout;

var valPageLoaded = 0;
var isMinNS4 = (navigator.appName.indexOf("Netscape") >= 0 &&
                parseFloat(navigator.appVersion) >= 4) ? 1 : 0;
var isMinIE4 = (document.all) ? 1 : 0;
var isMinIE5 = (isMinIE4 && navigator.appVersion.indexOf("5.")) >= 0 ? 1 : 0;

function RollOver( img ) {
  if( isMinNS4 || isMinIE4 ) {
    document.images[ img ].src = '<?= ImageHref( ); ?>header-menu-' + img + '-on.gif';
  }
}

function RollOut( img ) {
  if( isMinNS4 || isMinIE4 ) {
    document.images[ img ].src = '<?= ImageHref( ); ?>header-menu-' + img + '.gif';
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

    img1.src  = "<?= ImageHref( $IMG_HEADER_MENU_RANGER ); ?>";
    img2.src  = "<?= ImageHref( $IMG_HEADER_MENU_POLARIS ); ?>";
    img3.src  = "<?= ImageHref( $IMG_HEADER_MENU_KTM ); ?>";
    img4.src  = "<?= ImageHref( $IMG_HEADER_MENU_PEUGEOT ); ?>";
    img5.src  = "<?= ImageHref( $IMG_HEADER_MENU_RANGER_ON ); ?>";
    img6.src  = "<?= ImageHref( $IMG_HEADER_MENU_POLARIS_ON ); ?>";
    img7.src  = "<?= ImageHref( $IMG_HEADER_MENU_KTM_ON ); ?>";
    img8.src  = "<?= ImageHref( $IMG_HEADER_MENU_PEUGEOT ); ?>";
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
  window.open('<?= HrefLink( LINK_RELOCATE ); ?>'+'?url='+url+'&bid='+banner_id,'','toolbar=yes,location=yes,directories=no,status=yes,menubar=yes,scrollbars=yes,resizable=yes').focus();
}


