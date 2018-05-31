
var Actions = [];

var width = window.innerWidth;
var height = window.innerHeight;


function GetRealX(x) {
	return (x/1920) * width;
}
function GetRealY(y) {
	return (y/1080) * height;
}


function Start() {

	var myarr = [];

	for (i = 0; i < Actions.length; i++) 
	{
		var action = Actions[i];
		var element = document.getElementById(action.id);
		var img = element.getElementsByClassName("MayGmarImg")[0];

		if (myarr.indexOf(action.id) > -1)
		{
			//exist
		}
		else
		{
			myarr.push(action.id)
			action.OriginalSizeX = img.clientWidth;
			action.OriginalSizeY = img.clientHeight;

			img.style.width = (action.OriginalSizeX) * (width/1920) + "px";
			img.style.height = (action.OriginalSizeY) * (height/1080) + "px";
		}
	}
}

var first = true;
function Sync() {

	if (first)
	{
		first = false;
		return;
	}


	for (i = 0; i < Actions.length; i++) 
	{
		var action = Actions[i];
		if (
			( (action.start.wheelPosition <= mouseWheelPos) || (action.status != 0) )&& 
			( (action.end.wheelPosition >= mouseWheelPos) || (action.status != 2) )
			)
		{
			SyncObject(action);
		}
		else 
		{
			if (mouseWheelPos < action.start.wheelPosition)
			{
				SyncBefore(action);
			}
		}

	}

}


function SyncBefore(action)
{
	var element = document.getElementById(action.id);

	if (action.before.visible == "hidden")
	{
		element.style.visibility = "hidden";
	}

	if (action.before.visible == "visible")
	{
		element.style.visibility = "visible";
	}

}

function SyncObject(action) {

	if (action.start.wheelPosition == action.end.wheelPosition)
	{
		//todo : handle this
		return;
	}

	var ratio = (mouseWheelPos - action.start.wheelPosition) / (action.end.wheelPosition - action.start.wheelPosition);
	action.status = 1;
	if (ratio >= 1)
	{
		action.status = 2;
		ratio = 1;
	}
	if (ratio <= 0)
	{
		action.status = 0;
		ratio = 0;
	}

	var startX = action.start.positionX;
	var endX = action.end.positionX;
	var startY = action.start.positionY;
	var endY = action.end.positionY;

	var element = document.getElementById(action.id);
	element.style.visibility = "visible";
	var img = element.getElementsByClassName("MayGmarImg")[0];

	if (startX == "OutRight")
	{
		startX = 1980 + img.width; 
	}
	if (startX == "OutLeft")
	{
		startX = 0 - img.width; 
	}

	if (endX == "OutRight")
	{
		endX = 1980 + img.width; 
	}
	if (endX == "OutLeft")
	{
		endX = 0 - img.width; 
	}


	if (startY == "OutTop")
	{
		startY = 1080 + img.height; 
	}
	if (startY == "OutBottom")
	{
		startY = 0 - img.height; 
	}

	if (endY == "OutTop")
	{
		endY = 1080 + img.height; 
	}
	if (endY == "OutBottom")
	{
		endY = 0 - img.height; 
	}

	var newPosX = startX + ratio * (endX - startX);
	var realNewPosX = GetRealX(newPosX);
	var newPosY = startY + ratio * (endY - startY);
	var realNewPosY = GetRealY(newPosY);

	element.style.left = realNewPosX + "px";
	element.style.top = realNewPosY + "px";

	var opacity = action.start.opacity + ratio * (action.end.opacity - action.start.opacity);

	img.style.opacity = "" + opacity;

	var scale = action.start.scale + ratio * (action.end.scale - action.start.scale);

	img.style.width = (action.OriginalSizeX * scale * (width/1920) ) + "px";
	img.style.height = (action.OriginalSizeY * scale * (height/1080) ) + "px";

	var rotate = action.start.rotate + ratio * (action.end.rotate - action.start.rotate);
	img.style.transform = "translate(-50%, -50%) rotate(" + Math.round(rotate) + "deg)";
}

