const tareaContacto = () => setTimeout(() => {
    if(getIdFromHash() === "/contacto") {
    
        const formulary = document.querySelector("form");
        
        const nameInput = document.querySelector("#form-name__input");
        const nameError = document.querySelector("#form-name__error");
        
        const emailInput = document.querySelector("#form-email__input");
        const emailError = document.querySelector("#form-email__error");

        const messageInput = document.querySelector("#form-message__input");

        const nameEvent = e => {
            
            let valueName = e.target.value.trim();
            let length = (valueName.length >= 3 && valueName.length <= 10) || valueName.length === 0;
            let regex, message;
            
            if(!length) {
                message = "Debe tener entre 3 y 10 caracteres";
                setCustomValidityCSS(nameError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }
            
            nameError.innerHTML = "";
            regex = /^[A-ZÑ]?([a-z]|[ñ])*[áéíóúü]?([a-z]|[ñ])*$/;
            
            if(!regex.test(valueName)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es un nombre válido";
                setCustomValidityCSS(nameError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(nameError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };
        
        nameInput.addEventListener ("change", nameEvent);
        nameInput.addEventListener ("input", nameEvent);
        
        const emailEvent = e => {
            
            let valueEmail = e.target.value.trim();
            let length = (valueEmail.length >= 8 && valueEmail.length <= 40);
            let regex, message;
            let domains = ["gmail","hotmail","yahoo"];
            domains = domains.toString().replaceAll(",","|");
            
            if(!length) {
                message = "Debe tener entre 8 y 40 caracteres";
                setCustomValidityCSS(emailError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }
            emailError.innerHTML = "";
            regex = new RegExp(`^[a-zA-ZñÑ0-9]+@(${domains})\.com$`, "g");
            // regex = /^[a-zA-ZñÑ0-9]+@(gmail|hotmail)\.com$/;
            if(!regex.test(valueEmail)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es un correo válido";
                setCustomValidityCSS(emailError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(emailError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };
        
        emailInput.addEventListener ("change", emailEvent);
        emailInput.addEventListener ("input", emailEvent);
        
        formulary.addEventListener("submit", e => {
            e.preventDefault();
            validarTodo();
            formulary.reportValidity();
        });

        const validarTodo = () => {
            let _name = nameInput.value.trim();
            let _email = emailInput.value.trim();
            
            let message = "";
            let regex;
            
            if(!((_name.length >= 3 && _name.length <= 10) || _name.length === 0)) {
                console.log("ERROR")
                nameInput.classList.add("incorrectInput");
                nameInput.classList.remove("correctInput");
                message = "Debe tener entre 3 y 10 caracteres";
                setCustomValidityCSS(nameError, message);
                return null;
            }
            
            regex = /^[A-ZÑ]?([a-z]|[ñ])*[áéíóúü]?([a-z]|[ñ])*$/;
            
            if(!regex.test(_name)) {
                nameInput.classList.add("incorrectInput");
                nameInput.classList.remove("correctInput");
                message = "No es un nombre válido"
                setCustomValidityCSS(nameError, message);
                return null;
            }
            
            nameInput.classList.add("correctInput");
            nameInput.classList.remove("incorrectInput");
            
            if(!((_email.length >= 8 && _email.length <= 40))) {
                emailInput.classList.add("incorrectInput");
                emailInput.classList.remove("correctInput");
                message = "Debe tener entre 8 y 40 caracteres";
                setCustomValidityCSS(emailError, message);
                return null;
            }
            regex = new RegExp(`^[a-zA-ZñÑ0-9]+@(${domains})\.com$`, "g");
            if(!regex.test(_email)) {
                emailInput.classList.add("incorrectInput");
                emailInput.classList.remove("correctInput");
                message = "No es un correo válido"
                setCustomValidityCSS(emailError, message);
                return null;
            }
            
            emailInput.classList.add("correctInput");
            emailInput.classList.remove("incorrectInput");
            
            messageInput.classList.add("correctInput");
            
            console.log("Enviando...");
            
            return null;
        };
        
        const setCustomValidityCSS = (output, message) => {
            output.innerHTML = message;
        };
    
    }
},400);

window.addEventListener("DOMContentLoaded", () => {
    tareaContacto();
})

window.addEventListener('hashchange', () => {
    tareaContacto();
});