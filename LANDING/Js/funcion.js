/**
 * funcionalidad del archivo regcode.html
 */
function registro(){
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    var terminos = document.getElementById("terminos").checked;
    if(correo == "" || contrasena == ""){
        alert("No puede dejar campos vacios");
    }
    else if(!terminos){
        alert("Debe aceptar los terminos y condiciones");
    }
    else{
        var datos = {
            "correo": correo,
            "contrasena": contrasena
        };
        $.ajax({
            type: "POST",
            url: "../../php/registro.php",
            data: datos,
            success: function(response){
                if(response == "1"){
                    alert("Registro exitoso");
                    location.href = "../../code.html";
                }
                else{
                    alert("Error al registrar");
                }
            }
        });
    }
}

function login(){
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;
    if(correo == "" || contrasena == ""){
        alert("No puede dejar campos vacios");
    }
    else{
        var datos = {
            "correo": correo,
            "contrasena": contrasena
        };
        $.ajax({
            type: "POST",
            url: "../../php/login.php",
            data: datos,
            success: function(response){
                if(response == "1"){
                    alert("Login exitoso");
                    location.href = "../../index.html";
                }
                else{
                    alert("Error al iniciar sesion");
                }
            }
        });
    }
}