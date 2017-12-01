# divloader
create generic function to display loader

## Install
Insert library in dist folder
```
<head>
	
<!-- aoLoader.js -->   
<script src="https://raw.githubusercontent.com/ajoposor/divloader/master/dist/aoLoader.js"></script>

</head>
```
## Description
This function will add a loader over your divition while your content you specify is loaded.

Function: aoLoader.setLoader(parameters) 

## Parameters
Parameters, a json with the following keys:

parameters = {
* wholeDivId: The id name of the division you want to hide,
* objectToBeLoadedId: the id of the object to be waited for, it could be an iframe, an image or an object, etc,
* objectSrcData: (optional) the source data (in case of object) or the source in case of iframe or image,

* loaderBackGround: (optional) set your own loader as a background property (the default value is: 
  "url('https://raw.githubusercontent.com/ajoposor/Images/master/files/loader_big_blue.gif')"+ "50% 50% no-repeat #e1e9f0")
 
   the default loader has a white background and blue color:

  <kbd>
  <img src="https://raw.githubusercontent.com/ajoposor/Images/master/files/loader_big_blue.gif">
  </kbd>


* loaderInitialStyledUrl: (optional) set your own loader gif (for example: 					"url('https://raw.githubusercontent.com/ajoposor/Images/master/files/loader_big_blue.gif')"+
					"50% 50% no-repeat #FFFFFF")
 };

## Example

Usage: see a working example at [codepen] (https://codepen.io/ajoposor/pen/EbOMMJ)
