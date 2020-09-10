var image1 = new Image();
image1.src = "images/brands/image1.jpg";
var image2 = new Image();
image2.src = "images/brands/image2.jpg";
var image3 = new Image();
image3.src = "images/brands/image3.jpg";
var image4 = new Image();
image4.src = "images/brands/image4.jpg";
var image5 = new Image();
image5.src = "images/brands/image5.jpg"
var step=1
function slideit(){
	//if browser does not support the image object, exit.
	if (!document.images)
		return;
	document.images.slide.src=eval("image"+step+".src");
	if (step<5)
		step++;
	else
		step=1;
	//call function "slideit()" every 2.5 seconds
	setTimeout("slideit()", 2500);
}
slideit()













