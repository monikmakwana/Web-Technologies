function validate_form() 
{
    var name=document.myForm.name.value;
    var fpwd=document.myForm.pwd.value;
    var spwd=document.myForm.repwd.value;
    var email= document.myForm.email.value;
    var contact= document.myForm.cno.value;

    if( name == "" ) 
    {
        alert( "Please Enter Name!" );
        document.myForm.name.focus();
        return false;
      
     }
     if( fpwd == "" ) 
     {
         alert( "Please Enter Password!" );
         document.myForm.pwd.focus();
         return false;
      }
      if( spwd == "" ) 
      {
          alert( "Please Enter Re-Password!" );
          document.myForm.repwd.focus();
          return false;
       }
       if( email == "" ) 
       {
           alert( "Please Enter Re-Password!" );
           document.myForm.email.focus();
           return false;
        }
        if( contact == "" ) 
        {
            alert( "Please Enter Re-Password!" );
            document.myForm.cno.focus();
            return false;
         }
         if(fpwd!=spwd){  
            alert("password must be same!");  
            return false;  
         }  
        if (isNaN(contact)){  
            document.getElementById("cn1").innerHTML="Enter Numeric value only";  
            return false;  
        } 
        
        return true;

}