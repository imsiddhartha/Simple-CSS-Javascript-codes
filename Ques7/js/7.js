function getTextFromServer(){
	//alert("working");
	
	var xhttp = new XMLHttpRequest();
	
	var url = "http://web.iiit.ac.in/~atul.sinha/jsonserver.php";
	
	var name=document.getElementById("nm").value;
	var rno=document.getElementById("rollno").value;
	
	//document.getElementById("test").innerHTML = "lsndvsln";
	//window.alert("sluhfsk");
	url=url+"?rollno="+rno+"&name="+name;
	//document.getElementById("test").innerHTML = url;
	//window.alert(url);

	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
			//alert('suucess');
			document.getElementById("ajaxresponse").innerHTML = xhttp.responseText;
		}
		else {
			document.getElementById("ajaxresponse").innerHTML = xhttp.responseText;	
		}
	}	
	xhttp.open('GET', url, true);	
	//open(method, url, async):method: the type of request: GET or POST,url: the server (file) location,async: true (asynchronous) or false (synchronous)
	
	xhttp.send();
	//alert(xhttp.responseText);


// you want to send information with the GET method, add the information to the URL:
//xhttp.open("GET", "demo_get2.asp?fname=Henry&lname=Ford", true);


//send() 	Sends the request to the server (used for GET)
//send(string): Sends the request to the server (used for POST)


}
