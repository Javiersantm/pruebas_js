const EMAIL_PATTERN = "^[^@]+@[^@]+.[a-zA-Z]{2,}$";

/*
function emailValido(emailElement, msgEmail) {
    emailElement.className = "ok";
    msgEmail.innerText = "El email es válido";
    msgEmail.className = "textok";
}

function emailNoValido(emailElement, msgEmail) {
    emailElement.className = "danger";
    msgEmail.innerText = "El email no es válido";
    msgEmail.className = "textdanger";
}
*/

function validarEmail(params) {
    params.emailElement.className = params.emailElementClassName;
    params.msgEmail.className = params.msgEmailClassName;
    params.msgEmail.innerText = params.msgEmailText;
}

document.addEventListener("DOMContentLoaded", () => {
    const emailElement = document.getElementById("email");
    const msgEmail = document.createElement("span");
    msgEmail.id = "este es el id de este span";
    emailElement.addEventListener("change", (e) => {
        const email = e.target.value;
        const emailElement = document.getElementsByTagName("body")[0];
        emailElement.appendChild(msgEmail);
        esValido = (email.match(EMAIL_PATTERN));
        const params = {
            emailElement: emailElement,
            msgEmail: msgEmail,
            emailElementClassName: (esValido) ? "ok" : "danger",
            msgEmailClassName: (esValido) ? "textok" : "textdanger",
            msgEmailText: (esValido) ? "El email es válido" : "El email no es válido"
        }
        validarEmail(params);
//        if (esValido) {
//
//            // const coleccionDatos = [emailElement, msgEmail, "ok", "textok", "El email es válido"];
//            validarEmail(coleccionDatos);
//        } else {
//            // const coleccionDatos = [emailElement, msgEmail, "danger", "textdanger", "El email no es válido"];
//            validarEmail(coleccionDatos);
//        }
    });
})