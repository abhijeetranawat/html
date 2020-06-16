
function validatephone()
{
	var phone=document.getElementById("phone").value;
	var plast=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
	   
	   if(plast.test(phone)){
	     document.getElementById("phonevali").style.color="lightgreen";
		 document.getElementById("phonevali").innerHTML="<strong>Valid</strong>";
	   }
	   else{
	     document.getElementById("phonevali").style.color="lightblue";
		 document.getElementById("phonevali").innerHTML="<strong>Please enter valid Phone no.</strong>";
	   }
}