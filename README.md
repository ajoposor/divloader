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
* objectToBeLoadedId: the id of the object to be waited for, it could be an iframe or an object, etc,
* objectSrcData: the source data (in case of object) or the source in case of iframe.,
* loaderBackGroundColor: set a color for the background of the loader object (optional, default white (#FFFFFF)),
* loaderInitialStyledUrl: (optional) set your own loader gif (for example: 					"url('https://raw.githubusercontent.com/ajoposor/Images/master/files/loader_big_blue.gif')"+
					"50% 50% no-repeat #e1e9f0")
 };

## Example

Usage: see a working example at [codepen] (https://codepen.io/ajoposor/pen/EbOMMJ)
