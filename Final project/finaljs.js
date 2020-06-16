
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
function calctotal()
{
	var name=document.getElementById("name").value;
	var phone=document.getElementById("phone").value;
	var total=0;
	if(document.getElementById("pizzabase1").checked == true)
	{    
        total=total+120;
    }
	if(document.getElementById("pizzabase2").checked == true)
	{    
        total=total+100;
    }
	if(document.getElementById("pizzabase3").checked == true)
	{    
        total=total+200;
    }
	if(document.getElementById("pizzatopping1").checked == true)
	{    
        total=total+50;
    }
	if(document.getElementById("pizzatopping2").checked == true)
	{    
        total=total+50;
    }
	if(document.getElementById("pizzatopping3").checked == true)
	{    
        total=total+80;
    }
	if(document.getElementById("pizzatopping4").checked == true)
	{    
        total=total+120;
    }
	if(document.getElementById("pizzatopping5").checked == true)
	{    
        total=total+90;
    }
	if(document.getElementById("pizzatopping6").checked == true)
	{    
        total=total+120;
    }
	if(document.getElementById("dip1").checked == true)
	{    
        total=total+25;
    }
	if(document.getElementById("dip2").checked == true)
	{    
        total=total+25;
    }
	if(document.getElementById("dip3").checked == true)
	{    
        total=total+25;
    }
	    document.getElementById("receipt").innerHTML="<h2><strong>Hurray!</br>Order Received.</br></strong></h2>";
	    document.getElementById("receipt").innerHTML+="<p>"+name.toUpperCase()+"</p>";
	   	document.getElementById("receipt").innerHTML+="<p>"+phone+"</p>";
        document.getElementById("receipt").innerHTML+="<p>Order Total :Rs "+total+"</p>";
	    document.getElementById("receipt").innerHTML+="<p>Kindly pay the amount at Doorstep.</br>Order Again.</br></br>Thank you.</p>";
}