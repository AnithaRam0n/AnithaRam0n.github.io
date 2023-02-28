function login()
{
    var user,password1
    user = document.getElementById("username").value;
    password1 = document.getElementById("password").value;
    if( user=="Anitha" && password=="176946" )
    {
        window.location = "bienvenido.html";
    }
    else
    {
        alert("Usuario no autorizado")
    }
}
