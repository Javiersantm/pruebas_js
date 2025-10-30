const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const NAME_PATTERN = /^[a-zA-Z\s]+$/;
const DIGIT_PATTERN = /^(1[8-9]|[2-9]\d)$/;
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

function validacion(params) {
    params.elemento.className = params.claseElemento;
    params.mensajeElemento.className = "mensaje-validez " + params.claseMensajeElemento;
    params.mensajeElemento.innerText = params.textoMensajeElemento;
}

document.addEventListener("DOMContentLoaded", () => {
    const nameElement = document.getElementById("name");
    const msgName = document.getElementById("msgName");
    nameElement.addEventListener("change", (e) => {
        const name = e.target.value;
        if (name === "") {
              validacion({
                elemento: nameElement,
                mensajeElemento: msgName,
                claseElemento: "",
                claseMensajeElemento: "",
                textoMensajeElemento: ""
              });
              return;
        }
        const nombreValido = (name.match(NAME_PATTERN));
        const params = {
              elemento: nameElement,
              mensajeElemento: msgName,
              claseElemento: (nombreValido) ? "ok" : "ko",
              claseMensajeElemento: (nombreValido) ? "textok" : "textko",
              textoMensajeElemento: (nombreValido) ? "Nombre correcto" : "El nombre solo debe contener letras"
        }
        validacion(params);
    });
    const emailElement = document.getElementById("email");
    const msgEmail = document.getElementById("msgEmail");
    emailElement.addEventListener("change", (e) => {
            const email = e.target.value;
            if (email === "") {
                  validacion({
                    elemento: emailElement,
                    mensajeElemento: msgEmail,
                    claseElemento: "",
                    claseMensajeElemento: "",
                    textoMensajeElemento: ""
                  });
                  return;
            }
            const emailValido = (email.match(EMAIL_PATTERN));
            const params = {
                  elemento: emailElement,
                  mensajeElemento: msgEmail,
                  claseElemento: (emailValido) ? "ok" : "ko",
                  claseMensajeElemento: (emailValido) ? "textok" : "textko",
                  textoMensajeElemento: (emailValido) ? "Formato de email válido" : "Formato de email inválido"
            }
            validacion(params);
    });
    const ageElement = document.getElementById("age");
    const msgAge = document.getElementById("msgAge");
    ageElement.addEventListener("change", (e) => {
            const age = e.target.value;
                if (age === "") {
                      validacion({
                        elemento: ageElement,
                        mensajeElemento: msgAge,
                        claseElemento: "",
                        claseMensajeElemento: "",
                        textoMensajeElemento: ""
                      });
                      return;
                }
                const edadValida = (age.match(DIGIT_PATTERN));
                const params = {
                      elemento: ageElement,
                      mensajeElemento: msgAge,
                      claseElemento: (edadValida) ? "ok" : "ko",
                      claseMensajeElemento: (edadValida) ? "textok" : "textko",
                      textoMensajeElemento: (edadValida) ? "Edad válida" : "Edad inválida"
                }
                validacion(params);
        });
    const passwordElement = document.getElementById("password");
        const msgPassword = document.getElementById("msgPassword");
        passwordElement.addEventListener("change", (e) => {
                const password = e.target.value;
                    if (password === "") {
                          validacion({
                            elemento: passwordElement,
                            mensajeElemento: msgPassword,
                            claseElemento: "",
                            claseMensajeElemento: "",
                            textoMensajeElemento: ""
                          });
                          return;
                    }
                    const passwordValida = (password.match(PASSWORD_PATTERN));
                    const params = {
                          elemento: passwordElement,
                          mensajeElemento: msgPassword,
                          claseElemento: (passwordValida) ? "ok" : "ko",
                          claseMensajeElemento: (passwordValida) ? "textok" : "textko",
                          textoMensajeElemento: (passwordValida) ? "La contraseña es válida" : "Contraseña incorrecta. Debe contener mayúscula, minúscula, dígito y caracter especial"
                    }
                    validacion(params);
        });
    const birthElement = document.getElementById("birth");
    const msgBirth = document.getElementById("msgBirth");
    const today = new Date();
    const yearToday = today.getFullYear();
    const monthToday = String(today.getMonth() + 1).padStart(2, '0');
    const dayToday = String(today.getDate()).padStart(2, '0');
    const dateToday = `${yearToday}-${monthToday}-${dayToday}`;
    const maxYear = yearToday - 18;
    const maxBirth = `${maxYear}-${monthToday}-${dayToday}`;
    birthElement.max = maxBirth;
    birthElement.min = `${yearToday - 100}-${monthToday}-${dayToday}`;
    birthElement.value = dateToday;
    birthElement.addEventListener("change", (e) => {
        let params;
        const selectedDate = e.target.value;
        if (selectedDate === "") {
            params = {
               elemento: birthElement,
               mensajeElemento: msgBirth,
               claseElemento: "",
               claseMensajeElemento: "",
               textoMensajeElemento: ""
            };
            validacion(params);
            return;
        };

        if (selectedDate > maxBirth) {
            params = {
               elemento: birthElement,
               mensajeElemento: msgBirth,
               claseElemento: "ko",
               claseMensajeElemento: "textko",
               textoMensajeElemento: "Debes ser mayor de 18 años"
            };
        } else {
            params = {
               elemento: birthElement,
               mensajeElemento: msgBirth,
               claseElemento: "ok",
               claseMensajeElemento: "textok",
               textoMensajeElemento: "Fecha correcta"
            };
        }

        validacion(params);
    });
});
