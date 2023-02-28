function login()
{
    var user,password
    user = document.getElementById("user").value;
    password = document.getElementById("password").value;
    if( user=="Anitha" && password=="176946" )
    {
        window.location = "index.html";
    }
    else
    {
        alert("Error")
    }
}
