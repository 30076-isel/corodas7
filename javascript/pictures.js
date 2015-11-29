function changePicture()
{
	
	var date = new Date();
	var hours = date.getHours();
	if(hours > 7 && hours < 18)
		document.body.style.backgroundImage = "url('ImagesBig/igrejadia.jpg')";
	else
		document.body.style.backgroundImage = "url('imagesBig/igrejanoite.jpg')";
}

window.onload = function()
{
	changePicture();
}