let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let usuario = id("usuario"),
  email = id("email"),
  contraseña = id("contraseña"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  engine(usuario, 0, "Usuario no puede estar vacío");
  engine(email, 1, "Email no puede estar vacío");
  engine(contraseña, 2, "Contraseña no puede estar vacío");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

   
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  } else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
};