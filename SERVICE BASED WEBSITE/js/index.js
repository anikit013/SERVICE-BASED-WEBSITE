function xyz()
{
if($("#first").val()=='' || $("#last").val()==''){alert("First & Last name required");}
    else
{
    if($("#em2").val()==''){alert("kindly put your mail id !");}
else
{
if($("#pass1").val()=='' || $("#pass2").val()==''){alert("Password area required");}
            else{
if($("#pass1").val()!=$("#pass2").val()){alert("Passwords Does not matched");}
                else{
localStorage.setItem("email",$("#em2").val());
localStorage.setItem("password",$("#pass1").val());
    alert("sign up successfull");
    window.location.href="index.html";
                }
            }
        }
    }
}

function abc(){
    if($("#em1").val()==''){alert("Enter Email id");}
    else{
        if($("#em1").val()==localStorage.getItem("email")){
            if($("#pass").val()==''){alert("Enter Password");}
            else{
if($("#pass").val()==localStorage.getItem("password")){
    alert("Sign in Successfully");
window.location.href="welcome.html";
                }
else{alert("Wrong Password");}
            }
        }
        else{
    alert("Invalid ID");
        }
    }}
