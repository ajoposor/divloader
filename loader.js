(function(window){
    
	//I recommend this
	'use strict';
	function defineLibrary() {

		var aoLoader = {};

		/**
		*
		* Supporting Functions
		*
		*/

		//set style properties to element
		function setElementStyle(element,styling){
			for(var key in styling){
				if(styling.hasOwnProperty(key)) {
					element.style[key]=styling[key];
				}
			}
		}

		// add listener
		function addEvent(element, eventName, fn) {
				if (element.addEventListener)
						element.addEventListener(eventName, fn, false);
				else if (element.attachEvent)
						element.attachEvent('on' + eventName, fn);
		}




		/**
		*
		* This function displays a loader in the wholeDivId div 
		* and turns it off when objectToBeLoaded is loaded
		* you may use it with iframe or objects, in which case
		* the src or data must be passed to this function, so that 
		* it is loaded after the element is get
		*/

		aoLoader.setLoader = function (
			wholeDivId,
			objectToBeLoadedId,
			objectSrcData) {


			// SET divInfo

			var wholeDivInitialStyling = {
				visibility:"hidden",
				opacity: 1,
				position: "relative"
			};

			var loaderInitialStylingUrl = 
					"url('https://raw.githubusercontent.com/ajoposor/Images/master/files/loader_big_blue.gif')"+
					"50% 50% no-repeat #e1e9f0";

			var loaderInitialStyling = {
				visibility: "visible",
				position: "absolute",
				top: "-1px",
				right: "-1px",
				bottom: "-1px",
				left: "-1px",
				background: loaderInitialStylingUrl,
				opacity: 1	
			};

			loaderInitialStyling["z-index"] = "9999";


			//give a name to the loader

			var loaderID = "loader_"+wholeDivId;

			var wholeDivElement = document.getElementById(wholeDivId);

			var loaderElement = document.createElement('div');
			loaderElement.id = loaderID;

			/*wholeDivElement.insertBefore(
						loaderElement, 
						wholeDivElement.firstChild);*/
			
			wholeDivElement.appendChild(loaderElement);

			var noLoadedDataMessage = '<div style="position:relative; top:50%; transform:translateY(-50%);'+
								'text-align:center;"><h3><font color="#1A5488"  >'+
								'<b>Datos no recibidos</b></font></div>';


			var onErrorHideWholeDiv = false;

			setElementStyle(loaderElement,  loaderInitialStyling);
			setElementStyle(wholeDivElement, wholeDivInitialStyling);			


			// get object info and set src
			var objectToBeLoaded = document.getElementById(objectToBeLoadedId);

			if(objectSrcData !== 'undefined') {

				 console.log(objectToBeLoaded.tagName);
				 if(objectToBeLoaded.tagName === 'OBJECT') {
						objectToBeLoaded.data = objectSrcData;
				 } else if  (objectToBeLoaded.tagName === 'IFRAME') {
						objectToBeLoaded.src = objectSrcData;
				 }

			}


			addEvent(objectToBeLoaded, 'load', function(){ 
				wholeDivElement.style.visibility = "visible";
				loaderElement.style.visibility = "hidden";
			});

		};

      
    // end section of library declaration  
      
     return aoLoader;
    }
  
    //define globally if it doesn't already exist
    if(typeof(aoLoader) === 'undefined'){
        window.aoLoader = defineLibrary();
    }
    else{
        console.log("aoLoader Library already defined.");
    }  
  
})(window);
