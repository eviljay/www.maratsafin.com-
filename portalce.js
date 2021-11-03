
/**
 *
 *  PortalCE(tm) - The Portal Builder
 *  Copyright © Comrax Ltd. All rights reserved.
 *  Unauthorized duplication and modification prohibited.
 *
 *  END-USER LICENSE AND AGREEMENT                                         >>>
 *
 *  THIS SOFTWARE  IS PROVIDED BY "COMRAX LTD." ``AS IS''  AND ANY  EXPRESS OR
 *  IMPLIED WARRANTIES, INCLUDING, BUT NOT  LIMITED TO, THE IMPLIED WARRANTIES
 *  OF MERCHANTABILITY AND  FITNESS FOR A  PARTICULAR PURPOSE  ARE DISCLAIMED.
 *  IN  NO  EVENT  SHALL "COMRAX LTD." BE  LIABLE  FOR ANY  DIRECT,  INDIRECT,
 *  INCIDENTAL, SPECIAL,  EXEMPLARY, OR CONSEQUENTIAL  DAMAGES (INCLUDING, BUT
 *  NOT LIMITED TO, PROCUREMENT  OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 *  DATA,  OR PROFITS; OR  BUSINESS  INTERRUPTION)  HOWEVER CAUSED  AND ON ANY
 *  THEORY  OF  LIABILITY,  WHETHER IN  CONTRACT,  STRICT  LIABILITY,  OR TORT
 *  (INCLUDING NEGLIGENCE OR OTHERWISE)  ARISING IN ANY WAY OUT  OF THE USE OF
 *  THIS  SOFTWARE,  EVEN IF  ADVISED  OF  THE  POSSIBILITY  OF  SUCH  DAMAGE.
 *
 ****************************************************************************/

  /**
   *  Make sure that this script is only included once in the HTML code.
   */
  if( !_PCE_DHTML_CODE_LOADED || _PCE_DHTML_CODE_LOADED != 'PortalCE' ) {
    var _PCE_DHTML_CODE_LOADED  = 'PortalCE';

    /**
     *  Debugging variable. Set in your script to enable 'alert()' debugging mode.
     */
    if( !SYS_DEBUG_MODE ) {
      var SYS_DEBUG_MODE        = false;
    }

    /**
     *  Global constants
     */
    var POS_TOP_LEFT            = "TL";
    var POS_TOP_RIGHT           = "TR";
    var POS_BOTTOM_LEFT         = "BL";
    var POS_BOTTOM_RIGHT        = "BR";
    var POS_CENTRALIZE          = "CM";
    var AUTOMATIC               = -1;
    var CSS_POSITION_ABSOLUTE   = "absolute";
    var CSS_POSITION_RELATIVE   = "relative";

    /**
     *  Browser detection variables.
     */
    var AGT_BROWSER_NAME        = navigator.appName.toLowerCase( );
    var AGT_BROWSER_VER         = navigator.appVersion.toLowerCase( );
    var AGT_BROWSER             = navigator.userAgent.toLowerCase( );
    var AGT_IEXPLORER_4         = ( AGT_BROWSER.indexOf( 'msie 4' ) >= 0 )? true: false;
    var AGT_IEXPLORER_5         = ( AGT_BROWSER.indexOf( 'msie 5' ) >= 0 )? true: false;
    var AGT_IEXPLORER_6         = ( AGT_BROWSER.indexOf( 'msie 6' ) >= 0 )? true: false;
    var AGT_MSNEXPLORER_5       = ( AGT_BROWSER.indexOf( 'msn 5'  ) >= 0 )? true: false;
    var AGT_MSNEXPLORER_6       = ( AGT_BROWSER.indexOf( 'msn 6'  ) >= 0 )? true: false;
    var AGT_IEXPLORER           = ( AGT_BROWSER_NAME.indexOf( 'internet explorer' ) >= 0 )? true: false;
    var AGT_NETSCAPE            = ( AGT_BROWSER_NAME.indexOf( 'netscape' ) >= 0 )? true: false;
    var AGT_IEXPLOREROLD        = ( AGT_IEXPLORER_4 )? true: false;
    var AGT_IEXPLORERNEW        = ( AGT_IEXPLORER_5 || AGT_IEXPLORER_6 ||
                                    AGT_MSNEXPLORER_5 || AGT_MSNEXPLORER_6 )? true: false;
    var AGT_BROWSER_DOM         = ( document.getElementById )? true: false;
    var AGT_NNAVIGATOR          = ( document.all )? true: false;
    var AGT_NNAVIGATOR_4        = ( document.layers )? true: false;
    var AGT_NNAVIGATOR_6        = ( AGT_BROWSER.indexOf( 'netscape6' ) >= 0 )? true: false;
    var AGT_NNAVIGATOR_7        = ( AGT_BROWSER.indexOf( 'netscape/7' ) >= 0 )? true: false;

    /**
     *  CSS variables.
     */
    var CSS_VISIBILITY_HIDE     = ( AGT_IEXPLORER || AGT_BROWSER_DOM )? "hidden": "hide";
    var CSS_VISIBILITY_SHOW     = ( AGT_IEXPLORER || AGT_BROWSER_DOM )? "visible": "show";



    /**
     *  Block JavaScript errors.
     *  This can be useful for sources other than your own that may contain errors
     *  (i.e. ad banners or automated news feeds)
     */
    function pce_disable_errors( ) {
      window.onerror = _my_disable_js_error;
    }



    /**
     *  OBJECT: pceBrowserWindow
     */
    function pceBrowserWindow( ) {
      this.width        = ( AGT_NETSCAPE )? window.innerWidth:  ( document.body )? document.body.clientWidth:  -1;
      this.height       = ( AGT_NETSCAPE )? window.innerHeight: ( document.body )? document.body.clientHeight: -1;
      this.center       = this.width  / 2;
      this.middle       = this.height / 2;

      this.screenWidth  = screen.availWidth;
      this.screenHeight = screen.availHeight;
      this.screenCenter = this.screenWidth  / 2;
      this.screenMiddle = this.screenHeight / 2;
    }



    /**
     *  OBJECT: pmeMimeType
     *
     *  Get details about MIME types installed in the browser.
     *  Note: Function must be called from within the BODY of the HTML document.
     */
    function pceMimeType( ) {
      this.PCE_MIME_TYPE        = 0;
      this.PCE_MIME_DESCRIPTION = 1;
      this.PCE_MIME_SUFFIXES    = 2;

      /**
       *  Define functions in the object
       */
      this.list                 = _pce_mime_types_list;
      this.exists               = _pce_mime_types_exists;
    }

    function _pce_mime_types_list( ) {
      if( navigator.mimeTypes.length ) {
        this.arr_mime_types = new Array( );
        for( this.i = 0; this.i < navigator.mimeTypes.length; this.i++ ) {
          this.arr_mime_types[ this.i ]                              = new Array( 3 );
          this.arr_mime_types[ this.i ][ this.PCE_MIME_TYPE ]        = navigator.mimeTypes[i].type;
          this.arr_mime_types[ this.i ][ this.PCE_MIME_DESCRIPTION ] = navigator.mimeTypes[i].description;
          this.arr_mime_types[ this.i ][ this.PCE_MIME_SUFFIXES ]    = navigator.mimeTypes[i].suffixes;
        }
        return this.arr_mime_types;
      }
      return false;
    }

    function _pce_mime_types_exists( mime_type ) {
      if( navigator.mimeTypes ) {
        for( this.i = 0; this.i < navigator.mimeTypes.length; this.i++ ) {
          if( navigator.mimeTypes[i].type == mime_type ) {
            return true;
          }
        }
      }
      return false;
    }



    /**
     *  OBJECT: pceScrollBar
     *
     *  Controls the scroll bar appearance in browser.
     */
    function pceScrollBar( layer_id ) {
      this.layer_id = ( !layer_id )? top: layer_id;
      this.show     = _pce_show_scrollbars;
      this.hide     = _pce_hide_scrollbars;
    }

    function _pce_show_scrollbars( ) {
      layer_id = this.layer_id;
      if( layer_id.scrollbars && layer_id.scrollbars.visible ) {
        layer_id.scrollbars.visible = true;
      } else if( document.body.style ) {
        document.body.style.overflow = "";
      }
    }

    function _pce_hide_scrollbars( ) {
      if( top.scrollbars && top.scrollbars.visible ) {
        top.scrollbars.visible = false;
      } else if( document.body.style ) {
        document.body.style.overflow = CSS_VISIBILITY_HIDE;
      }
    }



    /**
     *  OBJECT: pceDynamicCookie
     *
     *  Use and manipulate cookies in JavaScript from your programs.
     */
    function pceDynamicCookie( name, path, domain, secure ) {
      this.valid  = false;
      if( !name ) {
        return;
      }
      this.path   = ( !path )? "/": path;
      this.name   = name;
      this.path   = path;
      this.domain = domain;
      this.secure = secure;
      this.cookie = document.cookie;
      this.valid  = true;

      /**
       *  Define functions
       */
      this.set    = _pce_cookies_set
      this.get    = _pce_cookies_get
      this.erase  = _pce_cookies_erase
      this.del    = _pce_cookies_erase
    }

    /**
     *  Set a cookie.
     *
     *    value  = value of the cookie
     *    expire = number of minutes for expiration (this is NOW + expire minutes)
     *             a value of expire=0 means that the cookie is valid till end of session
     */
    function _pce_cookies_set( value, expire ) {
      if( !this.valid || !value ) {
        /**
         *  if no value is present, delete the cookie.
         */
        return this.erase( );
      }
      if( !expire || expire < 0 ) {
        expire = 0;
      }
      str_cookie = this.name + '=' + escape( value );
      if( expire > 0 ) {
        var today = new Date( );

        /**
         *  60000 = 60 secs * 1000 msec.
         */
        var exp   = new Date( today.getTime() + 60000 * expire );

        str_cookie += '; expires=' + exp.toGMTString( );
      }
      str_cookie += '; path=' + escape( this.path );
      if( this.domain ) {
        str_cookie += '; domain=' + escape( this.domain );
      }
      if( this.secure ) {
        str_cookie += '; secure';
      }
      document.cookie = str_cookie;
      this.cookie     = document.cookie;

      return;
    }

    function _pce_cookies_get( ) {
      if( !this.valid ) {
        return "";
      }
      var pos = this.cookie.indexOf( this.name + "=" );
      if( pos == -1 ) {
        return "";
      }
      pos = this.cookie.indexOf( "=", pos ) + 1;
      var end = this.cookie.indexOf( ";", pos );
      if( end == -1 ) {
        end = this.cookie.length;
      }
      return unescape( this.cookie.substring( pos, end ) );
    }

    function _pce_cookies_erase( ) {
      if( !this.valid ) {
        return "";
      }
      y2k = new Date( 946684800000 );
      old = this.get( );
      str_cookie = this.name + '=null; expires=' + y2k.toGMTString( );
      document.cookie = str_cookie;
      this.cookie     = document.cookie;

      return old;
    }



    /**
     *  OBJECT: pceLayersObject
     *
     *  Use layers to add live and dynamic pages to any browser
     */
    function pceLayersObject( layer_name, showhide, position ) {
      this.autowrite      = true;
      this.layer_autoid   = ( layer_name )? layer_name + "_": "PCE_LAYER_ID_";
      this.layer_list     = new Array( );
      this.layer_contents = new Array( );
      this.layer_dims     = new Array( );
      this.layer_count    = 0;
      this.layer_events   = new Array( );
      this.layer_ev_count = 0;
      this.layer_last     = "";
      this.layer_class    = "";
      this.layer_styles   = "";
      this.layer_autohide = ( showhide == CSS_VISIBILITY_HIDE ||
                              showhide == CSS_VISIBILITY_HIDE ||
                              showhide == CSS_VISIBILITY_SHOW ||
                              showhide == CSS_VISIBILITY_SHOW )? showhide: "";
      this.position       = CSS_POSITION_ABSOLUTE;
      this.relativeness   = POS_TOP_LEFT;
      this.x              = 0;
      this.y              = 0;

      /**
       *  Define functions
       */
      this.stealth        = _pce_layers_stealth;
      this.classid        = _pce_layers_classid;
      this.styles         = _pce_layers_styles;
      this.corner         = _pce_layers_corner;
      this.id             = _pce_layers_id;
      this.s2id           = _pce_layers_s2id;
      this.tag            = _pce_layers_event;
      this.event          = _pce_layers_event;
      this.clear          = _pce_layers_clear;
      this.define         = _pce_layers_define;
      this.write          = _pce_layers_write;
      this.contents       = _pce_layers_contents;
      this.raise          = _pce_layers_raise;
      this.hide           = _pce_layers_hide;
      this.show           = _pce_layers_show;
      this.hideall        = _pce_layers_hide_all;
      this.showall        = _pce_layers_show_all;
      this.move           = _pce_layers_move;

      /**
       *  Define position as an event; this is a hack but it works :)
       */
      if( position && ( position == CSS_POSITION_ABSOLUTE || position == CSS_POSITION_RELATIVE ) ) {
        if( AGT_NNAVIGATOR_4 ) {
          this.event( "position", position );
        } else {
          this.event( "style", "position:" + position );
        }
      }
    }

    /**
     *  Switch ON/OFF the auto output variable.
     */
    function _pce_layers_stealth( stealth ) {
      if( stealth == false ) {
        this.autowrite = true;
      } else if( stealth == true ) {
        this.autowrite = false;
      }
    }

    /**
     *  Define internal CSS class name of new defined layers.
     */
    function _pce_layers_classid( class_id ) {
      if( class_id ) {
        this.layer_class = class_id;
      }
    }

    /**
     *  Define internal CSS sryles for new defined layers.
     *  WARNING: NEVER PASS "VISIBILITY:HIDE" TO NETSCAPE NAVIGATOR 4.X AS IT'LL
     *  FREEZE. THE CURRENT IMPLEMENTATION AUTOMATICALLY FIXES THIS USING THE
     *  INTERNAL "LAYER_AUTOHIDE" VARIABLE.
     */
    function _pce_layers_styles( styles ) {
      if( styles ) {
        this.layer_styles = styles;
      }
    }

    /**
     *  Define internal CSS sryles for new defined layers.
     */
    function _pce_layers_corner( corner ) {
      if( corner && (
          corner == POS_TOP_LEFT ||
          corner == POS_TOP_RIGHT ||
          corner == POS_BOTTOM_LEFT ||
          corner == POS_BOTTOM_RIGHT ||
          corner == POS_CENTRALIZE
        ) ) {
        this.relativeness = corner;
      }
    }

    /**
     *  Given an unknown layer_id (INT or STRING), this will get always its name.
     */
    function _pce_layers_id( layer_id ) {
      if( layer_id != 0 && !layer_id ) {
        layer_id = this.layer_last;
      }
      if( parseInt( layer_id ) >= 0 ) {
        layer_id = this.layer_list[ layer_id ];
      }
      return layer_id;
    }

    /**
     *  Given an unknown layer_id (INT or STRING), this will get always its number.
     */
    function _pce_layers_s2id( layer_id ) {
      if( layer_id != 0 && !layer_id ) {
        layer_id = this.layer_last;
      }
      if( parseInt( layer_id ) >= 0 ) {
        return parseInt( layer_id );
      }
      for( i = 0; i < this.layer_count; i++ ) {
        if( layer_id == this.layer_list[ i ] ) {
          return i;
        }
      }
      return layer_id;
    }

    /**
     *  Define an event to be incorporated into new defined layers.
     */
    function _pce_layers_event( event, todo ) {
      if( !event || !todo ) {
        return;
      }
      this.layer_events[ this.layer_ev_count ]      = new Array( 2 );
      this.layer_events[ this.layer_ev_count ][ 0 ] = event;
      this.layer_events[ this.layer_ev_count ][ 1 ] = todo;
      this.layer_ev_count++;

      return;
    }

    /**
     *  Clears previously defined events for new layers.
     */
    function _pce_layers_clear( ) {
      this.layer_ev_count = 0;
    }

    /**
     *  Define a new layer. 'HTML' includes any output to be written to page.
     */
    function _pce_layers_define( HTML, layer_id, width, height ) {
      /**
       *  If no ID was given for this layer, stamp it with a pre-defined name.
       */
      if( !( layer_id > 0 ) ) {
        layer_id  = this.layer_autoid + this.layer_count;
      }

      /**
       *  If no width or height were reported, use -1 as default.
       */
      if( !( width && width > 0 ) ) {
        width = -1;
      }
      if( !( height && height > 0 ) ) {
        height = -1;
      }

      /**
       *  Add this later to an array that holds names of defined layers.
       */
      this.layer_list[ this.layer_count ]       = layer_id;
      this.layer_contents[ this.layer_count ]   = HTML;

      /**
       *  Save layer dimenstions as sent by user.
       */
      this.layer_dims[ this.layer_count ]       = new Array( 2 );
      this.layer_dims[ this.layer_count ][ 0 ]  = width;
      this.layer_dims[ this.layer_count ][ 1 ]  = height;

      this.layer_count++;

      str_layer   = ( AGT_NNAVIGATOR_4 )? "layer": "div";
      str_html    = '<!-- Layer ID \'' + layer_id + '\': START -->' + "\n";
      str_html   += '<' + str_layer;
      if( layer_id ) {
        str_html += ' id="' + layer_id + '"';
      }
      if( this.layer_class ) {
        str_html += ' class="' + this.layer_class + '"';
      }
      if( this.layer_styles ) {
        str_html += ' style="clip(auto);' + this.layer_styles + '"';
      }
      if( this.layer_ev_count > 0 ) {
        for( var i = 0; i < this.layer_ev_count; i++ ) {
          str_html += ' ' + this.layer_events[ i ][ 0 ].toLowerCase( ) + '="' + this.layer_events[ i ][ 1 ] + '"';
        }
      }

      /**
       *  In Netscape 6.2, the visibility MUST be last in the chain of styles,
       *  else output will be incorrect.
       */
      if( this.layer_autohide == CSS_VISIBILITY_HIDE ) {
        str_html += ( AGT_NNAVIGATOR_4 )? ' visibility="': ' style="visibility:';
        str_html += CSS_VISIBILITY_HIDE + '"';
      }
      str_html   += '><table';
      if( width > 0 ) {
        str_html += ' width="' + width + '"';
      }
      if( height > 0 ) {
        str_html += ' height="' + height + '"';
      }
      str_html   += ' border="0" cellpadding="0" cellspacing="0"><tr><td>' + HTML + '</td></tr></table></' + str_layer + '>' + "\n";

      str_html   += '<!-- Layer ID \'' + layer_id + '\': END -->' + "\n";
      this.layer_last = layer_id;

      if( this.autowrite ) {
        document.write( str_html );
        if( this.layer_autohide == CSS_VISIBILITY_HIDE ) {
          this.hide( layer_id );
        }
      }

      return str_html;
    }

    /**
     *  Write into a layer.
     */
    function _pce_layers_write( HTML, layer_id ) {
      layer = document.getElementById( this.id( layer_id ) );
      if( !layer ) {
        return;
      }
      if( AGT_NNAVIGATOR_4 ) {
        layer.document.open( "text/html", "replace" );
        layer.document.write( HTML );
        layer.document.close( );
      } else if( AGT_BROWSER_DOM ) {
        layer.innerHTML = HTML;
      }
      layer_id = this.id( layer_id );
      for( var i = 0; i < this.layer_count; i++ ) {
        if( layer_id == this.layer_list[ i ] ) {
          this.layer_contents[ i ] = HTML;
          break;
        }
      }
      return;
    }

    /**
     *  Get inner HTML for a layer.
     */
    function _pce_layers_contents( layer_id ) {
      layer_id = this.id( layer_id );
      for( var i = 0; i < this.layer_count; i++ ) {
        if( layer_id == this.layer_list[ i ] ) {
          return this.layer_contents[ i ];
        }
      }
      return "";
    }

    /**
     *  Hide a layer.
     */
    function _pce_layers_hide( layer_id ) {
      layer = document.getElementById( this.id( layer_id ) );
      if( !layer ) {
        return;
      }
      str_html = "";
      if( AGT_BROWSER_DOM || AGT_IEXPLORER ) {
        str_html = 'layer.style';
      } else if( AGT_NNAVIGATOR_4 ) {
        str_html = 'layer';
      }
      str_html += '.visibility = "' + CSS_VISIBILITY_HIDE + '"';
      eval( str_html );

      return;
    }

    /**
     *  Show a layer.
     */
    function _pce_layers_show( layer_id ) {
      layer = document.getElementById( this.id( layer_id ) );
      if( !layer ) {
        return;
      }
      str_html = "";
      if( AGT_BROWSER_DOM || AGT_IEXPLORER ) {
        str_html = 'layer.style';
      } else if( AGT_NNAVIGATOR_4 ) {
        str_html = 'layer';
      }
      str_html += '.visibility = "' + CSS_VISIBILITY_SHOW + '"';
      eval( str_html );

      return;
    }

    /**
     *  Hide all layers.
     */
    function _pce_layers_hide_all( ) {
      for( var i = 0; i < this.layer_count; i++ ) {
        this.hide( this.layer_list[ i ] );
      }
    }

    /**
     *  Show all layers.
     */
    function _pce_layers_show_all( ) {
      for( var i = 0; i < this.layer_count; i++ ) {
        this.show( this.layer_list[ i ] );
      }
    }

    /**
     *  This will move a later to a specified coordinates (X, Y)
     */
    function _pce_layers_move( x, y, layer_id ) {
      layer_name  = this.id( layer_id );
      layer_id    = this.s2id( layer_id );
      layer       = document.getElementById( layer_name );
      if( !layer ) {
        return;
      }
      if( !( x != 0 ) ) {
        x = this.x;
      }
      if( !( y != 0 ) ) {
        y = this.y;
      }

      /**
       *  Determine the relative corner to use to place layer
       */
      if( this.relativeness == POS_TOP_LEFT ) {
        x_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelLeft": "left";
        y_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelTop": "top";
      } else if( this.relativeness == POS_TOP_RIGHT ) {
        x_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelRight": ( AGT_BROWSER_DOM )? "right": "left";
        y_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelTop": "top";
        if( AGT_NNAVIGATOR_4 ) {
          x = window.innerWidth - x;
        }
      } else if( this.relativeness == POS_BOTTOM_LEFT ) {
        x_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelLeft": "left";
        y_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelBottom": ( AGT_BROWSER_DOM )? "bottom": "top";
        if( AGT_NNAVIGATOR_4 ) {
          y = window.innerHeight - y;
        }
      } else if( this.relativeness == POS_BOTTOM_RIGHT ) {
        x_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelRight": ( AGT_BROWSER_DOM )? "right": "left";
        y_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelBottom": ( AGT_BROWSER_DOM )? "bottom": "top";
        if( AGT_NNAVIGATOR_4 ) {
          x = window.innerWidth - x;
          y = window.innerHeight - y;
        }
      } else if( this.relativeness == POS_CENTRALIZE ) {
        x_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelLeft": "left";
        y_var = ( AGT_NNAVIGATOR || AGT_IEXPLORER_4 )? "pixelTop": "top";
        if( AGT_NETSCAPE ) {
          x = parseInt( ( window.innerWidth - this.layer_dims[ layer_id ][ 0 ] ) / 2 ) - x;
          y = parseInt( ( window.innerHeight - this.layer_dims[ layer_id ][ 1 ] ) / 2 ) - y;
        } else if( document.body ) {
          x = parseInt( ( document.body.clientWidth - this.layer_dims[ layer_id ][ 0 ] ) / 2 ) - x;
          y = parseInt( ( document.body.clientHeight - this.layer_dims[ layer_id ][ 1 ] ) / 2 ) - y;
        }
      }
      this.x  = x;
      this.y  = y;
      str_html = "";
      if( AGT_NNAVIGATOR || AGT_IEXPLORER_4 ) {
        str_html  = "document.all['"+layer_name+"'].style." + x_var + " = " + x + "; ";
        str_html += "document.all['"+layer_name+"'].style." + y_var + " = " + y + ";";
      } else if( AGT_NNAVIGATOR_4 ) {
        str_html  = "layer." + x_var + " = " + x + "; ";
        str_html += "layer." + y_var + " = " + y + ";";
      } else if( AGT_BROWSER_DOM ) {
        str_html  = "layer.style." + x_var + " = " + x + "; ";
        str_html += "layer.style." + y_var + " = " + y + ";";
      }
      eval( str_html );

      return;
    }

    function _pce_layers_raise( layer_id ) {
      this.hideall( );
      this.show( layer_id );
    }



    /**
     *  Function to preload sets of images, and then call a JavaScript
     *  code when images are loaded.
     */
    arr_image_holder = new Array( );
    arr_image_cmds   = new Array( );
    arr_image_timers = new Array( );
    function pce_preload_images( arr_image_list, cmd ) {
      if( document.images && arr_image_list.length > 0 ) {
        arr_image_count = arr_image_holder.length;
        if( !cmd ) {
          cmd = "";
        }
        arr_image_cmds[ arr_image_count ] = cmd;
        arr_image_holder[ arr_image_count ] = new Array( arr_image_list.length );
        for( var i = 0; i < arr_image_list.length; i++ ) {
          arr_image_holder[ arr_image_count ][ i ]        = new Image( );
          arr_image_holder[ arr_image_count ][ i ].src    = arr_image_list[ i ];
        }
        if( cmd ) {
          if( !_pce_preload_images_cmd( arr_image_count ) ) {
            arr_image_timers[ arr_image_count ] = setTimeout( "_pce_preload_images_cmd(" + arr_image_count + ")", 100 );
          }
        }
      }
    }

    function _pce_preload_images_cmd( set_id ) {
      for( var i = 0; i < arr_image_holder[ set_id ].length; i++ ) {
        if( !arr_image_holder[ set_id ][ i ].complete ) {
          arr_image_timers[ set_id ] = setTimeout( "_pce_preload_images_cmd(" + set_id + ")", 100 );
          return false;
        }
      }
      clearTimeout( "arr_image_timers[" + set_id + "]" );
      eval( arr_image_cmds[ set_id ] );

      return true;
    }

    /**
     *  INTERNAL FUNCTIONS -- DO NOT ALTER OR TOUCH!
     */
    function _my_disable_js_error( ) {
      return true;
    }

    function _pce_get_id( layer_id ) {
      if( AGT_NNAVIGATOR_4 ) {
        if( document.layers[ layer_id ] ) {
          document.layers[ layer_id ].style = document.layers[ layer_id ];
        }
        return document.layers[ layer_id ];
      } else if( AGT_NNAVIGATOR ) {
        return document.all[ layer_id ];
      } else if( AGT_BROWSER_DOM ) {
        return document.getElementById( layer_id );
      }
      return null;
    }

    if( !document.getElementById ) {
      document.getElementById = _pce_get_id;
    }

    function turnObjects( newMode ) {
      arrObjects = document.all.tags( 'OBJECT' );
      if( !newMode ) {
        newMode = 'Opaque';
      }

      for( cycle = 0; cycle < arrObjects.length; cycle++ ) {
        if( arrObjects[ cycle ].wmode != null ) {
          if( ( arrObjects[ cycle ].wmode ).toLowerCase( ) == 'window' ) {
            tmpOuterHTML  = arrObjects[ cycle ].outerHTML;
            varClosingTag = tmpOuterHTML.indexOf( '>' );
            newOuterHTML  = tmpOuterHTML.substring( 0, varClosingTag + 1 );
            newOuterHTML  = newOuterHTML + '<param name="WMode" value="' + newMode + '">';
            newOuterHTML  = newOuterHTML + tmpOuterHTML.substr( varClosingTag + 1 );

            arrObjects[ cycle ].outerHTML = newOuterHTML;
            arrObjects[ cycle ].Play( );
          }
        }
      }
    }

    function turnObjectsOld( newMode ) {
      arrObjects = document.all.tags( 'OBJECT' );
      if( !newMode ) {
        newMode = 'Opaque';
      }

      for( cycle = 0; cycle < arrObjects.length; cycle++ ) {
        if( arrObjects[ cycle ].wmode != null ) {
          if( ( arrObjects[ cycle ].wmode ).toLowerCase( ) == 'window' ) {
            arrObjects[ cycle ].wmode = newMode;
          }
        }
      }
    }

    /// Check that E-mail conforms to specific format with allowed characters.
    function validateEmailAddress( emailAddress, errorMessage ) {
      if( document.layers || document.getElementById || document.all ) {
        emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( !emailFilter.test( emailAddress ) ) {
          if( errorMessage ) {
            alert( errorMessage );
          }
          return false;
        }
      }
      return true;
    }

    /// Set a specific URL as the browser's homepage.
    function setAsHomepage( ptr, url ) {
      if( AGT_IEXPLORER && ptr && ptr.style ) {
        ptr.style.behavior = 'url(#default#homepage)';
        ptr.setHomePage( url );
      }
    }

    /// Add a specific URL to a the browser's favourites folder.
    function addToFavourites( url, desc ) {
      if( AGT_IEXPLORER && window && window.external ) {
        window.external.AddFavorite( url, desc );
      }
    }
    /// Scan document and show all hidden SELECTs.
    function showAllSelects( doc ) {
      if( !doc ) {
        doc = top.document;
      }
      if( doc.all ) {
        for( var i = 0; i < doc.all.tags( 'SELECT' ).length; i++ ) {
          obj = doc.all.tags( 'SELECT' )[ i ];
          obj.style.visibility = 'visible';
        }
      }
    }
     
    /// Scan document and hide all visible SELECTs.
    function hideAllSelects( doc ) {
      if( !doc ) {
        doc = top.document;
      }
      if( doc.all ) {
        for( var i = 0; i < doc.all.tags( 'SELECT' ).length; i++ ) {
          obj = doc.all.tags( 'SELECT' )[ i ];
          obj.style.visibility = 'hidden';
        }
      }
    }

  /**
   *  Make sure that this script is only included once in the HTML code.
   */
  }

/**
 *  THIS IS A TEMPORARY CODE THAT MUST BE REFINED LATER.
 */

/*

  function _pce_find_object(n, d)
    var p, i, x;

    if( !d ) {
      d = document;
    }
    if( ( p = n.indexOf( "?" ) ) > 0 && parent.frames.length ) {
      d=parent.frames[ n.substring( p + 1 ) ].document;
      n = n.substring( 0, p );
    }
    if( !( x = d[ n ] ) && d.all ) {
      x = d.all[ n ];
    }
    for( i = 0; !x && i < d.forms.length; i++ ) {
      x = d.forms[ i ][ n ];
    }
    for( i=0; !x && d.layers && i < d.layers.length; i++) {
      x = _pce_find_object( n, d.layers[ i ].document );
    }
    if( !x && document.getElementById ) {
      x = document.getElementById( n );
    }
    return x;
  }

  function _pce_move_behind(theDiv){
    var b   = 0;
    var oz  = 0;
    var z   = (document.layers) ? ".zIndex" : ".style.zIndex";

    var fun = (document.getElementById)? "document.getElementById" : "_pce_find_object";
    var arr = (document.layers)? document.layers: ( document.all )? document.all.tags( "DIV" ): document.getElementsByTagName( "DIV" );

    for( var i = 0; i < arr.length; i++ ) {
      oz  = eval( "arr[" + i + "]" + z );
      if( oz > b ) {
        b = oz;
      }
    }
    var obj = eval( fun + "(theDiv)" );
    if( obj ) {
      eval( fun + "('" + theDiv + "')" + z + "=parseInt(" + b + ") - 1" );
    }
  }

  function _pce_move_above(theDiv){
    var b   = 0;
    var oz  = 0;
    var z   = (document.layers) ? ".zIndex" : ".style.zIndex";

    var fun = (document.getElementById) ? "document.getElementById": "_pce_find_object";
    var arr = (document.layers)? document.layers: ( document.all )? document.all.tags( "DIV" ): document.getElementsByTagName( "DIV" );

    for( var i = 0; i < arr.length; i++ ) {
      oz = eval( "arr[" + i + "]" + z );
      if( oz > t ) {
        t = oz;
      }
    }
    var obj = eval( fun + "(theDiv)" );
    if( obj ) {
      eval( fun + "('" + theDiv + "')" + z + "=parseInt(" + t + ") + 1" );
    }
  }

  function _pce_write_2_layer( name, message ) {
    if( document.layers ) {
      document.layers[ name ].document.open( );
      document.layers[ name ].document.write( message );
      document.layers[ name ].document.close( );
    } else {
      if( document.all ) {
        eval( "document.all." + name + ".innerHTML='" + message + "'" );
      } else {
        document.getElementById( name ).innerHTML = message;
      }
    }
  }

  // EB
  function ebDetectBrowserType( ) {
    var navstring = window.navigator.appName;

    if( navstring.indexOf( "Explorer" ) > -1 ) {
      ebBrowserType = "IE";
      navstring = window.navigator.appVersion;
      ebBrowserVersion = navstring.substr( navstring.indexOf( "MSIE" ) + 5, navstring.indexOf( "MSIE" ) + 9 );
      var ebMajorrVers = ebBrowserVersion.substr( 0, ebBrowserVersion.indexOf( "." ) );
      var ebMinorVers  = parseFloat( ebBrowserVersion.substr( ebBrowserVersion.indexOf( "." ), ebBrowserVersion.length ) );
      ebBrowserVersion = parseFloat( ebMajorrVers ) + ebMinorVers;
    } else {
      if( navstring.indexOf( "Netscape" ) > -1 ) {
        ebBrowserType = "NN";
        ebBrowserVersion = "0";
      } else {
        ebBrowserType = "unknown";
      }
    }
  }

  function ebInsertTag1( type, name, url, target, width, height ) {
    var tagWidth = 0;
    var tagHeight = 0;

    if (typeof(width) != "undefined") {
      tagWidth = width;
    }
    if (typeof(height) != "undefined") {
      tagHeight = height;
    }
    if( type == 'iframe' ) {
      ebDetectBrowserType();
      if( ( ebBrowserType == 'IE' ) && ( ebBrowserVersion < '5.5' ) ) {
        var tmpIframeTag = '<iframe src="' + url + '" width="' + tagWidth + '" height="' + tagHeight + '"';
        if( name != null ) {
          tmpIframeTag = tmpIframeTag + ' id = "' + name + '"';
        }
        tmpIframeTag = tmpIframeTag + '></iframe>';
        ebDocBody.insertAdjacentHTML( "beforeEnd", tmpIframeTag );

        return;
      }
    }

    var ebNew = document.createElement( type );
    if ( name != null ) {
      ebNew.id = name;
    }
    if ( type == "a" ) {
      ebNew.href = url;
      ebNew.target = target;
    } else {
      if( ( type != "img" ) || ( name == null ) ) {
        ebNew.src = url;
      }
    }
    if( ( type == "img" ) || ( type == "iframe" ) ) {
      ebNew.width = tagWidth;
      ebNew.height = tagHeight;
    }

    var ebOld;
    if( name != null ) {
      ebOld = document.getElementById(name);
    } else {
      ebOld = null;
    }
    if (ebOld == null) {
      ebDocBody.appendChild(ebNew);
    } else {
      var ebParent = ebOld.parentNode;
      ebParent.replaceChild( ebNew, ebOld );
    }
    if( ( type == "img" ) && ( name != null ) ) {
      document.getElementById( name ).src = url;
    }
  }

  function turnElements( style ) {
    for( formID = 0; formID < document.forms.length; formID++ ) {
      for( elementID = 0; elementID < document.forms[ formID ].length; elementID++ ) {
        window.eval( "document.forms[formID].elements[elementID].style.visibility='" + style + "'" );
      }
    }
  }





*/

/**
 *  End.
 */

