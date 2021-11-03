<!-- center popup -->
      function NewWindow(newpage, newname, w, h, scroll) {
               var winl = (screen.width - w) / 2;
               var wint = (screen.height - h) / 2;
               winprops = 'height='+h+',width='+w+',top='+wint+',left='+winl+',scrollbars=yes,resizable=no,status=no'
               win = window.open(newpage, newname, winprops)
               if (parseInt(navigator.appVersion) >= 4) { win.window.focus(); }
      }