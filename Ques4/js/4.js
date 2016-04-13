function validateForm()
{
	var r=confirm('You really want to Submit?');
	alert(r);	
    if(document.register.nm.value=="")
    {
      alert("Enter your Name");
      document.register.nm.focus();
      return false;
    }
    else if(document.register.age.value=="")
    {
      alert("Enter your Age");
      document.register.age.focus();
      return false;
    }
    else if(document.register.age.value < 18 || document.register.age.value > 75  )
    {
      alert("Age must be between 18 and 75");
      document.register.age.focus();
      return false;
    }
     else if(document.register.dob.value =="" )
    {
      alert("Enter DOB");
      document.register.dob.focus();
      return false;
    }
    else if(document.register.mno.value=="")
    {
      alert("Enter your Mobile Number");
      document.register.mno.focus();
      window.alert(document.register.mno.length);
      return false;
    }
    else if(document.register.email.value=="")
    {
      alert("Enter your Email id");
      document.register.email.focus();
      return false;
    }
    else if(document.register.pwd.value=="")
    {
      alert("Password cannot be left blank");
      document.register.pwd.focus();
      return false;
    }
     
      
var passw=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,8}$/;  
var p=false;
if(document.register.pwd.value.match(passw))   
{     
	p=true;  
}  
else  
{   
	alert('Enter correct password..!  ')  
	return false;  
}  
//var mob=  /^(\+91-|\+91|0)?\d{10}$/;  
var mob=  /^\d{10}$/;  
if(document.register.mno.value.match(mob))   
{     
	p=true;  
}  
else  
{   
	alert('Enter correct 10 digit Mobile No..!')  
	return false;  
} 
var eid= /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
if(document.register.email.value.match(eid))   
{     
	p=true;
}  
else  
{   
	alert('Enter correct Email Id..!')  
	return false;  
}
var twh= /^\w*@[a-zA-Z_]+/; 
if(document.register.th.value.match(twh))   
{     
	p=true;  
}  
else  
{   
	alert('Enter correct Twitter Handle..!')  
	return false;  
}
var ll=  /^\d{10}$/;  
if(document.register.llno.value.match(ll))   
{     
	return true;  
}  
else  
{   
	alert('Enter correct 10 digit LLNo..!')  
	return false;  
}      
}

function copyla()
{
	var rb= document.getElementById("same").checked;
	//alert(rb);
     	if(rb)
      {
      	
      	 var n1 = document.getElementById('la');
		 var n2 = document.getElementById('pa');
		  n2.value = n1.value;
     		//alert(n1.value);
     		//document.getElementById("pa").value=document.getElementById("la").value;
     		document.getElementById("pa").readOnly = true;
      }
      else
      {
		document.getElementById("pa").value="";      
      }
}
