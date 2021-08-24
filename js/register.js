const btnRegistrarse = document.getElementById("register__btn-register");
const formRegistro = document.getElementById("register");
const inputNombre = document.getElementById("register__nombre");
const inputApellido = document.getElementById("register__apellido");
const inputEmail = document.getElementById("register__email");
const inputPasswd = document.getElementById("register__passwd");
const inputPasswd2 = document.getElementById("register__passwd-2");

const validarDatos=()=>{
    let nombre, apellido, email, passwd , passwd2;
    nombre = inputNombre.value;
    apellido = inputApellido.value;
    email = inputEmail.value;
    passwd = inputPasswd.value;
    passwd2 = inputPasswd2.value;
    let error = "";

    if(nombre == "" || apellido=="" || email=="" || passwd=="" || passwd2==""){
    }

}

formRegistro.addEventListener("submit", (evt)=>{
    evt.preventDefault();
    validarDatos();
});


