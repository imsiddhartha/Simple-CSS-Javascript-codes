function IncreaseWidth() 
{
	var x1 = document.getElementById("box").style.width.replace(/[^-\d\.]/g, '');;
	x1=parseInt(x1);
	//window.alert(x1);
	if(x1+100<1500)  
	{
		x1=x1+100;
		//window.alert(x1);
		document.getElementById("box").style.width = x1+"px";	
	}
	else
		document.getElementById("box").style.width = "1500px";	
	//return true;
}
function DecreaseWidth() 
{
	var x2 = document.getElementById("box").style.width.replace(/[^-\d\.]/g, '');;
	x2=parseInt(x2);
	if(x2-100>100)   
	{
		x2=x2-100;
		//window.alert(x2);
		document.getElementById("box").style.width = x2+"px";	
	}
	else
		document.getElementById("box").style.width = "100px";	
}
function IncreaseHeight() 
{	
	var x3 = document.getElementById("box").style.height.replace(/[^-\d\.]/g, '');;
	x3=parseInt(x3);
	if(x3+100<1000)   
	{
		//window.alert(x3);
		x3=x3+100;
		document.getElementById("box").style.height = x3+"px";	
	}
	else
		document.getElementById("box").style.height = "1000px";	
	
}
function DecreaseHeight() 
{
	var x = document.getElementById("box").style.height.replace(/[^-\d\.]/g, '');;
	x=parseInt(x);
	if(x-100>100)   
	{
		//window.alert(x);
		x=x-100;
		document.getElementById("box").style.height = x+"px";	
	}
	else
		document.getElementById("box").style.height = "100px";	
}

function hs() 
{
	var x = document.getElementById("box").style.visibility;
	//window.alert(x);
	if(x=="visible")   
	{
		document.getElementById("box").style.visibility="hidden"		
	}
	else
	{
		document.getElementById("box").style.visibility="visible"		
	}
}
function sc()
{
	//window.alert(".snf.");
	var x5=document.getElementById("box").style.backgroundColor;
	//window.alert(x5);
	
	if(x5=="white")
	{
		document.getElementById("box").style.backgroundColor="black";
		document.getElementById("box").style.color="white";
	}
	else
	{
		document.getElementById("box").style.backgroundColor="white";
		document.getElementById("box").style.color="black";
	}
}
function writsomething()
{
	var person = prompt("Please write your thoughts", "here");
	if (person != null) {
	    document.getElementById("box").value=person; 
	}
}
