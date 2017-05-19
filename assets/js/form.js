function form(){
	var a=document.forms["f1"]["username"].value;
	var b=document.forms["f1"]["password"].value;
	var c=document.forms["f1"]["email"].value;
	var d=document.forms["f1"]["date"].value;
	var e=document.forms["f1"]["gender"].value;
	if(a == ""){
		window.alert(" Enter Name ");
		return false;
	}
 else if(b == "")
 {

 	alert("Enter password");
 	return false;

 }
 else if(c == "")
 {
 	alert("Enter Email");
 	return false;
 }

/*  else if(form.gender[0].checked==false &&form.gender[1].checked==false)
  {

  	alert("please select gender");
  	return false;
 } */
  else if(e.value=="" || e.value== "")
  {

  	alert("please select gender");
  	return false;
  }
 else if(d == "")
{
	alert("Enter date of birth");
	return false;
}
else {
	return true;
}
}