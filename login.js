function login()
{
    var user,password
    user = document.getElementById("inputuser").value;
    password = document.getElementById("inputPassword").value;
    if( user=="Anitha" && password=="176946" )
    {
        window.location = "Bienvenido.html";
    }
    else
    {
        alert("EERRor")
    }
}
