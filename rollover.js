// Rollover v2.1
// documentation: http://www.dithered.com/javascript/rollovers/index.html
// license: http://creativecommons.org/licenses/by/1.0/
// code by Chris Nott (chris[at]dithered[dot]com)

function isDefined(property) {
  return (typeof property != 'undefined');
}

function attachHandlers(images) {
  for (var i = 0; i < images.length; i++) {
	 if (-1 != images[i].src.indexOf('_off.') || -1 != images[i].src.indexOf('-off.')) {
		var image = images[i];

		// store the off state filename in a property of the image object
		image.offImage = new Image();
		image.offImage.src = image.src;

		// store the on state filename in a property of the image object
		// (also preloads the on state image)
		image.onImage = new Image();
		image.onImage.imageElement = image;

		// add onmouseover and onmouseout event handlers once the on state image has loaded
		// Safari's onload is screwed up for off-screen images; temporary fix
		if (navigator.userAgent.toLowerCase().indexOf('safari') != - 1) {
		   image.onmouseover = function() {
			  this.src = this.onImage.src;
		   };
		   image.onmouseout = function() {
			  this.src = this.offImage.src;
		   };
		}
		else {
		   image.onImage.onload = function() {
			  this.imageElement.onmouseover = function() {
				 this.src = this.onImage.src;
			  };
			  this.imageElement.onmouseout = function() {
				 this.src = this.offImage.src;
			  };
		   };
		}

		// set src of on state image after defining onload event handler
		// so cached images (that load instantly in IE) will trigger onload
		image.onImage.src = (-1 != images[i].src.indexOf('_off.'))?
			image.src.replace(/_off\./, '_on.'):
			image.src.replace(/-off\./, '-on.');
	 }
  }
}

var rolloverInitialized = false;
function rolloverInit() {
   if (!rolloverInitialized && isDefined(document.images)) {

      // get all images (including all <input type="image">s)
      // use getElementsByTagName() if supported
      var images = new Array();
      if (isDefined(document.getElementsByTagName)) {
         images = document.getElementsByTagName('img');
         var inputs = document.getElementsByTagName('input');
         for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].type == 'image') {
               images[images.length] = inputs[i];
            }
         }
      }

      // otherwise, use document.images and document.forms collections
      // remove if not supporting IE4, Opera 4-5
      else {
         images = document.images;
         inputs = new Array();
         for (var formIndex = 0; formIndex < document.forms.length; formIndex++) {
            for (var elementIndex = 0; elementIndex < document.forms.elements.length; elementIndex++) {
               if (isDefined(document.forms.elements[i].src)) {
                  inputs[inputs.length] = document.forms.elements[i];
               }
            }
         }
      }

      // get all images with '_off.' or '-off.' in src value
	  attachHandlers(images);
      
      // get all inputs with '_off.' or '-off.' in src value
	  attachHandlers(inputs);
   }
   rolloverInitialized = true;
}

// call rolloverInit when document finishes loading
if (isDefined(window.addEventListener)) {
   window.addEventListener('load', rolloverInit, false);
}
else if (isDefined(window.attachEvent)) {
   window.attachEvent('onload', rolloverInit);
}
else {
   window.onload = rolloverInit;
}