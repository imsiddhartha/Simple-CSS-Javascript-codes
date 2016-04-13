function showCoords(event) {
	//window.alert('sdfsf');
    var cX = event.clientX;
    var sX = event.screenX;
    var cY = event.clientY;
    var sY = event.screenY;
    var coords1 = "The current pointer XPage Coordinate: " + sX;
    var coords2 = "The current pointer YPage Coordinate: " + sY;
    var coords3 = "The current pointer XClient Coordinate: " + cX;
    var coords4 = "The current pointer YClient Coordinate: " + cY;
    //var coord2= " Y coords: " + cY;
    //var coords2 = "screen - X: " + sX + ", Y coords: " + sY;
    document.getElementById("ml").innerHTML = coords1 + "<br>" + coords2+"<br>" + coords3+"<br>" + coords4;
}
function screenDim()
{
      var sd1 = "The current screen width is: " + screen.width;
      var sd2 = "The current screen height is: " + screen.height;
      var sd3 = "The current screen available width is: " + screen.availWidth;
      var sd4 = "The current screen available height is: " + screen.availHeight;
      var sd5 = "The current screen pixel depth: " + screen.pixelDepth;     
      var sd6 = "The current screen color depth: " + screen.colorDepth;       
	document.getElementById("sd").innerHTML = sd1 + "<br>" + sd2+"<br>" + sd3+"<br>" + sd4+"<br>" + sd5+"<br>" + sd6;

	var wd1 = "The current window inner width is: " + window.innerWidth;
      var wd2 = "The current window inner height is: " + window.innerHeight;
	var wd3 = "The current window outer width is: " + window.outerWidth;
      var wd4 = "The current window outer height is: " + window.outerHeight;
	document.getElementById("wd").innerHTML = wd1 + "<br>" + wd2+"<br>" + wd3+"<br>" + wd4;       
}
function navprop()
{
	 var x1 = "Browser CodeName: " + navigator.appCodeName;
	 var x2= "Browser Name: " + navigator.appName;
	 var x3 = "Cookies enabled: " + navigator.cookieEnabled;
	 var x4 = "Language of the browser: " + navigator.language;
	 var x5 = "Platform: " + navigator.platform;
	 var x6 = "Browser version is: " + navigator.userAgent;
	 var x7 = "Java Enabled: " + navigator.javaEnabled();
	 var engine="Browser engine is " + navigator.product;
	 document.getElementById("navp").innerHTML = x2 + "<br>" + x1+"<br>" + x4+"<br>" + x5+"<br>" + engine+"<br>" + x6+"<br>" + x3+"<br>" + x7;       
	// var version="Browser version is " +navigator.appVersion;
}
