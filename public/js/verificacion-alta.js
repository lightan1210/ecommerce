const getIdFromHash = () => location.hash.slice(1) || 'inicio';

const verificarAlta = () => setTimeout(() => {
    if(getIdFromHash() === "/alta") {
        
        const formulary = document.querySelector("form");

        const nameInput = document.querySelector("#form-name__input");
        const nameError = document.querySelector("#form-name__error");

        const markInput = document.querySelector("#form-mark__input");
        const markError = document.querySelector("#form-mark__error");

        const categoryInput = document.querySelector("#form-category__input");
        const categoryError = document.querySelector("#form-category__error");

        const priceInput = document.querySelector("#form-price__input");
        const priceError = document.querySelector("#form-price__error");

        const minAgeInput = document.querySelector("#form-minimum-age__input");
        const minAgeError = document.querySelector("#form-minimum-age__error");

        const maxAgeInput = document.querySelector("#form-maximum-age__input");
        const maxAgeError = document.querySelector("#form-maximum-age__error");

        const stockInput = document.querySelector("#form-stock__input");
        const stockError = document.querySelector("#form-stock__error");

        const shortDescInput = document.querySelector("#form-short-description__input");
        const shortDescError = document.querySelector("#form-short-description__error");

        const longDescInput = document.querySelector("#form-long-description__input");
        const longDescError = document.querySelector("#form-long-description__error");

        const imageInput = document.querySelector("#my-file");
        const imageError = document.querySelector("#form-upload-image__error");

        const messageInput = document.querySelector("#form-message__input");

        const nameEvent = e => {
            
            const valueName = e.target.value.trim();
            let length = (valueName.length >= 1 && valueName.length <= 30);
            let regex, message;
            if(!length) {
                message = "Debe tener entre 1 y 30 caracteres";
                setCustomValidityCSS(nameError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }
            
            nameError.innerHTML = "";
            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;

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

        const markEvent = e => {

            let valueMark = e.target.value.trim();
            let length = (valueMark.length >= 1 && valueMark.length <= 40);
            let regex, message;

            if(!length) {
                message = "Debe tener entre 1 y 40 caracteres";
                setCustomValidityCSS(markError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            markError.innerHTML = "";
            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;

            if(!regex.test(valueMark)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es una marca válida";
                setCustomValidityCSS(markError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(markError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };

        markInput.addEventListener ("change", markEvent);
        markInput.addEventListener ("input", markEvent);

        const categoryEvent = e => {

            let valueCategory = e.target.value.trim();
            let length = (valueCategory.length >= 1 && valueCategory.length <= 50);
            let message;

            if(!length) {
                message = "Debe tener entre 1 y 50 caracteres";
                setCustomValidityCSS(categoryError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            categoryError.innerHTML = "";
            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;

            if(!regex.test(valueCategory)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es una categoría válida";
                setCustomValidityCSS(categoryError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(categoryError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };

        categoryInput.addEventListener ("change", categoryEvent);
        categoryInput.addEventListener ("input", categoryEvent);

        const priceEvent = e => {

            let valuePrice = e.target.value;
            let length = valuePrice.length != 0;
            let regex, message;

            if(!length) {
                message = "Debe ingresarse un valor";
                setCustomValidityCSS(priceError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            if(!(parseFloat(valuePrice)>0)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es un precio válido";
                setCustomValidityCSS(priceError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(priceError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };

        priceInput.addEventListener ("change", priceEvent);
        priceInput.addEventListener ("input", priceEvent);

        const minAgeEvent = e => {

            let valueMinAge = e.target.value;
            let mOYMin = document.querySelector(".form-minimum-age .form-ageType__input").value;
            let length = valueMinAge.length >= 1 && valueMinAge.length <=3;
            let regex, message;

            if(!length) {
                message = "Debe ingresar una edad válida";
                setCustomValidityCSS(minAgeError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            minAgeError.innerHTML = "";
            regex = /^[1-9][0-9]{1,2}$/;

            if(!(regex.test(valueMinAge) && parseInt(valueMinAge)>=1 && parseInt(valueMinAge)<=150)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es una edad válida";
                setCustomValidityCSS(minAgeError, message);
                return null;
            }
            
            if(!maxAgeInput.value.length) {
                message = "Debe ingresar una edad máxima";
                setCustomValidityCSS(minAgeError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                maxAgeInput.classList.add("incorrectInput");
                maxAgeInput.classList.remove("correctInput");
                return null;
            }

            let mOYMax = document.querySelector(".form-maximum-age .form-ageType__input").value;

            maxAgeInput.classList.remove("incorrectInput");
            if(mOYMax === mOYMin) {
                if (!(parseInt(valueMinAge) <= parseInt(maxAgeInput.value))) {
                    message = "Debe ser menor o igual a la edad máxima";
                    setCustomValidityCSS(minAgeError, message);
                    e.target.classList.add("incorrectInput");
                    e.target.classList.remove("correctInput");
                    return null;
                }
            }
            else { // Convierte la edad que está en años a meses 
                if(mOYMin === 'y') {
                    if (!(parseInt(valueMinAge)*12 <= parseInt(maxAgeInput.value))) {
                        message = "Debe ser menor o igual a la edad máxima";
                        setCustomValidityCSS(minAgeError, message);
                        e.target.classList.add("incorrectInput");
                        e.target.classList.remove("correctInput");
                        return null;
                    }
                }
                else {
                    if (!(parseInt(valueMinAge) <= parseInt(maxAgeInput.value)*12)) {
                        message = "Debe ser menor o igual a la edad máxima";
                        setCustomValidityCSS(minAgeError, message);
                        e.target.classList.add("incorrectInput");
                        e.target.classList.remove("correctInput");
                        return null;
                    }
                }
            }
            
            message = "";
            setCustomValidityCSS(minAgeError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;
        };

        minAgeInput.addEventListener ("change", minAgeEvent);
        minAgeInput.addEventListener ("input", minAgeEvent);

        const maxAgeEvent = e => {

            let valueMaxAge = e.target.value;
            let mOYMax = document.querySelector(".form-maximum-age .form-ageType__input").value;
            let length = valueMaxAge.length >= 1 && valueMaxAge.length <=3;
            let regex, message;

            if(!length) {
                message = "Debe ingresar una edad válida";
                setCustomValidityCSS(maxAgeError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            maxAgeError.innerHTML = "";
            regex = /^[1-9][0-9]{1,2}$/;

            if(!(regex.test(valueMaxAge) && parseInt(valueMaxAge)>=1 && parseInt(valueMaxAge)<=150)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es una edad válida";
                setCustomValidityCSS(maxAgeError, message);
                return null;
            }
            
            if(!minAgeInput.value.length) {
                message = "Debe ingresar una edad mínima";
                setCustomValidityCSS(maxAgeError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                minAgeInput.classList.add("incorrectInput");
                minAgeInput.classList.remove("correctInput");
                return null;
            }

            let mOYMin = document.querySelector(".form-minimum-age .form-ageType__input").value;

            minAgeInput.classList.remove("incorrectInput");
            if(mOYMax === mOYMin) {
                if (!(parseInt(minAgeInput.value) <= parseInt(valueMaxAge))) {
                    message = "Debe ser mayor o igual a la edad mínima";
                    setCustomValidityCSS(maxAgeError, message);
                    e.target.classList.add("incorrectInput");
                    e.target.classList.remove("correctInput");
                    return null;
                }
            }
            else { // Convierte la edad que está en años a meses 
                if(mOYMin === 'y') {
                    if (!(parseInt(minAgeInput.value)*12 <= parseInt(valueMaxAge))) {
                        message = "Debe ser mayor o igual a la edad mínima";
                        setCustomValidityCSS(maxAgeError, message);
                        e.target.classList.add("incorrectInput");
                        e.target.classList.remove("correctInput");
                        return null;
                    }
                }
                else {
                    if (!(parseInt(minAgeInput.value) <= parseInt(valueMaxAge)*12)) {
                        message = "Debe ser mayor o igual a la edad mínima";
                        setCustomValidityCSS(maxAgeError, message);
                        e.target.classList.add("incorrectInput");
                        e.target.classList.remove("correctInput");
                        return null;
                    }
                }
            }

            message = "";
            setCustomValidityCSS(maxAgeError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;

        };

        maxAgeInput.addEventListener ("change", maxAgeEvent);
        maxAgeInput.addEventListener ("input", maxAgeEvent);

        const stockEvent = e => {

            let valueStock = e.target.value;
            let length = valueStock.length != 0;
            let regex, message;

            if(!length) {
                message = "Debe ingresarse un valor";
                setCustomValidityCSS(stockError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            stockError.innerHTML = "";
            regex = /^[0-9]+$/;

            if(!(regex.test(valueStock))) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "Debe ser una cantidad exacta positiva";
                setCustomValidityCSS(stockError, message);
                return null;
            }

            if(!(parseInt(valueStock)>=0)) {
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                message = "No es una cantidad válida";
                setCustomValidityCSS(stockError, message);
                return null;
            }

            message = "";
            setCustomValidityCSS(stockError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;

        };

        stockInput.addEventListener ("change", stockEvent);
        stockInput.addEventListener ("input", stockEvent);

        const shortDescEvent = e => {

            let valueShortDesc = e.target.value.trim();
            let length = valueShortDesc.length >= 1 && valueShortDesc.length <= 80;
            let message;

            if(!length) {
                message = "Debe tener entre 1 y 80 caracteres";
                setCustomValidityCSS(shortDescError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            shortDescError.innerHTML = "";
            message = "";
            setCustomValidityCSS(shortDescError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;

        };

        shortDescInput.addEventListener ("change", shortDescEvent);
        shortDescInput.addEventListener ("input", shortDescEvent);

        const longDescEvent = e => {

            let valuelongDesc = e.target.value.trim();
            let length = valuelongDesc.length >= 1 && valuelongDesc.length <= 2000;
            let message;

            if(!length) {
                message = "Debe tener entre 1 y 2000 caracteres";
                setCustomValidityCSS(longDescError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }

            longDescError.innerHTML = "";
            message = "";
            setCustomValidityCSS(longDescError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;

        };

        longDescInput.addEventListener ("change", longDescEvent);
        longDescInput.addEventListener ("input", longDescEvent);

        const imageEvent = e => {

            let valueImage = e.target.innerHTML;
            // let length = valuelongDesc.length >= 1 && valuelongDesc.length <= 2000;
            let message;

            // if(!length) {
            //     message = "Debe tener entre 1 y 2000 caracteres";
            //     setCustomValidityCSS(longDescError, message);
            //     e.target.classList.add("incorrectInput");
            //     e.target.classList.remove("correctInput");
            //     return null;
            // }

            if(!valueImage) {
                message = "Debe cargar una imagen para el producto";
                setCustomValidityCSS(imageError, message);
                e.target.classList.add("incorrectInput");
                e.target.classList.remove("correctInput");
                return null;
            }
            const containerPreviewImagen = document.querySelector(".form-upload-image__preview-image-container");
            const previewImage = document.querySelector(".form-upload-image__preview-image-container img");

            // let parts = valueImage.split("\\");
            previewImage.setAttribute("src", `../img/${valueImage}`);
            containerPreviewImagen.classList.remove("form-upload-image__preview-image-container--hidden");

            imageError.innerHTML = "";
            message = "";
            setCustomValidityCSS(imageError, message);
            e.target.classList.add("correctInput");
            e.target.classList.remove("incorrectInput");
            return null;

        };

        imageInput.addEventListener ("change", imageEvent);
        imageInput.addEventListener ("input", imageEvent);

        formulary.addEventListener("submit", e => {
            e.preventDefault();
            validarverificarAlta();
            formulary.reportValidity();
        });

        const validarverificarAlta = () => {
                
            let message = "";
            let regex;

            // NOMBRE

            let _name = nameInput.value.trim();
            if(!(_name.length >= 1 && _name.length <= 30)) {
                nameInput.classList.add("incorrectInput");
                nameInput.classList.remove("correctInput");
                message = "Debe tener entre 1 y 30 caracteres";
                setCustomValidityCSS(nameError, message);
                return null;
            }
            
            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;
            
            if(!regex.test(_name)) {
                nameInput.classList.add("incorrectInput");
                nameInput.classList.remove("correctInput");
                message = "No es un nombre válido"
                setCustomValidityCSS(nameError, message);
                return null;
            }

            nameInput.classList.add("correctInput");
            nameInput.classList.remove("incorrectInput");
            
            // MARCA

            let _mark = markInput.value.trim();
            if(!(_mark.length >= 1 && _mark.length <= 40)) {
                markInput.classList.add("incorrectInput");
                markInput.classList.remove("correctInput");
                message = "Debe tener entre 1 y 40 caracteres";
                setCustomValidityCSS(markError, message);
                return null;
            }
            
            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;
            
            if(!regex.test(_mark)) {
                markInput.classList.add("incorrectInput");
                markInput.classList.remove("correctInput");
                message = "No es una marca válida"
                setCustomValidityCSS(markError, message);
                return null;
            }

            markInput.classList.add("correctInput");
            markInput.classList.remove("incorrectInput");

            // CATEGORÍA
            
            let _category = categoryInput.value.trim();

            if(!(_category.length >= 1 && _category.length <= 50)) {
                categoryInput.classList.add("incorrectInput");
                categoryInput.classList.remove("correctInput");
                message = "Debe tener entre 1 y 50 caracteres";
                setCustomValidityCSS(categoryError, message);
                return null;
            }

            // if(!_category) {
            //     message = "Debe elegir una opción";
            //     setCustomValidityCSS(categoryError, message);
            //     categoryInput.classList.add("incorrectInput");
            //     categoryInput.classList.remove("correctInput");
            //     return null;
            // }

            regex = /^[a-záéíóúA-ZÁÉÍÓÚÑñ0-9\.\,\'\"\/\|\\-\_ ]*$/;
            
            if(!regex.test(_category)) {
                categoryInput.classList.add("incorrectInput");
                categoryInput.classList.remove("correctInput");
                message = "No es una marca válida"
                setCustomValidityCSS(categoryError, message);
                return null;
            }
            
            message = "";
            setCustomValidityCSS(categoryError, message);
            categoryInput.classList.add("correctInput");
            categoryInput.classList.remove("incorrectInput");

            // PRECIO
            
            let _price = priceInput.value;
            if(!(_price.length != 0)) {
                priceInput.classList.add("incorrectInput");
                priceInput.classList.remove("correctInput");
                message = "Debe ingresarse un valor";
                setCustomValidityCSS(priceError, message);
                return null;
            }
            
            if(!(parseFloat(_price)>0)) {
                priceInput.classList.add("incorrectInput");
                priceInput.classList.remove("correctInput");
                message = "No es un precio válido";
                setCustomValidityCSS(priceError, message);
                return null;
            }

            priceInput.classList.add("correctInput");
            priceInput.classList.remove("incorrectInput");

            // EDAD MÍNIMA

            let _minAge = minAgeInput.value;
            if(!(_minAge.length >= 1 && _minAge.length <=3)) {
                message = "Debe ingresar una edad válida";
                setCustomValidityCSS(minAgeError, message);
                minAgeInput.classList.add("incorrectInput");
                minAgeInput.classList.remove("correctInput");
                return null;
            }

            regex = /^[1-9][0-9]{1,2}$/;

            if(!(regex.test(_minAge) && parseInt(_minAge)>=1 && parseInt(_minAge)<=150)) {
                minAgeInput.classList.add("incorrectInput");
                minAgeInput.classList.remove("correctInput");
                message = "No es una edad válida";
                setCustomValidityCSS(minAgeError, message);
                return null;
            }
            
            if(!maxAgeInput.value.length) {
                message = "Debe ingresar una edad máxima";
                setCustomValidityCSS(minAgeError, message);
                minAgeInput.classList.add("incorrectInput");
                minAgeInput.classList.remove("correctInput");
                maxAgeInput.classList.add("incorrectInput");
                maxAgeInput.classList.remove("correctInput");
                return null;
            }

            maxAgeInput.classList.remove("incorrectInput");
            // if (!(parseInt(_minAge) <= parseInt(maxAgeInput.value))) {
            //     message = "Debe ser menor o igual a la edad máxima";
            //     setCustomValidityCSS(minAgeError, message);
            //     minAgeInput.classList.add("incorrectInput");
            //     minAgeInput.classList.remove("correctInput");
            //     return null;
            // }
            let mOYMin = document.querySelector(".form-minimum-age .form-ageType__input").value;
            let mOYMax = document.querySelector(".form-maximum-age .form-ageType__input").value;
            if(mOYMax === mOYMin) {
                if (!(parseInt(_minAge) <= parseInt(maxAgeInput.value))) {
                    message = "Debe ser menor o igual a la edad máxima";
                    setCustomValidityCSS(minAgeError, message);
                    minAgeInput.classList.add("incorrectInput");
                    minAgeInput.classList.remove("correctInput");
                    return null;
                }
            }
            else { // Convierte la edad que está en años a meses 
                if(mOYMin === 'y') {
                    if (!(parseInt(_minAge)*12 <= parseInt(maxAgeInput.value))) {
                        message = "Debe ser menor o igual a la edad máxima";
                        setCustomValidityCSS(minAgeError, message);
                        minAgeInput.classList.add("incorrectInput");
                        minAgeInput.classList.remove("correctInput");
                        return null;
                    }
                }
                else {
                    if (!(parseInt(_minAge) <= parseInt(maxAgeInput.value)*12)) {
                        message = "Debe ser menor o igual a la edad máxima";
                        setCustomValidityCSS(minAgeError, message);
                        minAgeInput.classList.add("incorrectInput");
                        minAgeInput.classList.remove("correctInput");
                        return null;
                    }
                }
            }

            minAgeError.innerHTML = "";
            minAgeInput.classList.add("correctInput");
            minAgeInput.classList.remove("incorrectInput");

            // EDAD MÁXIMA

            let _maxAge = maxAgeInput.value;
            if(!(_maxAge.length >= 1 && _maxAge.length <=3)) {
                message = "Debe ingresar una edad válida";
                setCustomValidityCSS(maxAgeError, message);
                maxAgeInput.classList.add("incorrectInput");
                maxAgeInput.classList.remove("correctInput");
                return null;
            }

            maxAgeError.innerHTML = "";
            regex = /^[1-9][0-9]{1,2}$/;

            if(!(regex.test(_maxAge) && parseInt(_minAge)>=1 && parseInt(_minAge)<=150)) {
                maxAgeInput.classList.add("incorrectInput");
                maxAgeInput.classList.remove("correctInput");
                message = "No es una edad válida";
                setCustomValidityCSS(maxAgeError, message);
                return null;
            }
            
            if(!minAgeInput.value.length) {
                message = "Debe ingresar una edad máxima";
                setCustomValidityCSS(maxAgeError, message);
                maxAgeInput.classList.add("incorrectInput");
                maxAgeInput.classList.remove("correctInput");
                minAgeInput.classList.add("incorrectInput");
                minAgeInput.classList.remove("correctInput");
                return null;
            }

            minAgeInput.classList.remove("incorrectInput");
            // if (!(parseInt(minAgeInput.value) <= parseInt(_maxAge))) {
            //     message = "Debe ser mayor o igual a la edad mínima";
            //     setCustomValidityCSS(maxAgeError, message);
            //     maxAgeInput.classList.add("incorrectInput");
            //     maxAgeInput.classList.remove("correctInput");
            //     return null;
            // }
            if(mOYMax === mOYMin) {
                if (!(parseInt(minAgeInput.value) <= parseInt(_maxAge))) {
                    message = "Debe ser mayor o igual a la edad mínima";
                    setCustomValidityCSS(maxAgeError, message);
                    maxAgeInput.classList.add("incorrectInput");
                    maxAgeInput.classList.remove("correctInput");
                    return null;
                }
            }
            else { // Convierte la edad que está en años a meses 
                if(mOYMin === 'y') {
                    if (!(parseInt(minAgeInput.value)*12 <= parseInt(_maxAge))) {
                        message = "Debe ser mayor o igual a la edad mínima";
                        setCustomValidityCSS(maxAgeError, message);
                        maxAgeInput.classList.add("incorrectInput");
                        maxAgeInput.classList.remove("correctInput");
                        return null;
                    }
                }
                else {
                    if (!(parseInt(minAgeInput.value) <= parseInt(_maxAge)*12)) {
                        message = "Debe ser mayor o igual a la edad mínima";
                        setCustomValidityCSS(maxAgeError, message);
                        maxAgeInput.classList.add("incorrectInput");
                        maxAgeInput.classList.remove("correctInput");
                        return null;
                    }
                }
            }

            maxAgeError.innerHTML = "";
            maxAgeInput.classList.add("correctInput");
            maxAgeInput.classList.remove("incorrectInput");

            // STOCK

            let _stock = stockInput.value;
            if(!_stock.length != 0) {
                message = "Debe ingresarse un valor";
                setCustomValidityCSS(stockError, message);
                stockInput.classList.add("incorrectInput");
                stockInput.classList.remove("correctInput");
                return null;
            }

            stockError.innerHTML = "";
            regex = /^[0-9]+$/;

            if(!(regex.test(_stock))) {
                stockInput.classList.add("incorrectInput");
                stockInput.classList.remove("correctInput");
                message = "Debe ser una cantidad exacta positiva";
                setCustomValidityCSS(stockError, message);
                return null;
            }

            if(!(parseInt(_stock)>=0)) {
                stockInput.classList.add("incorrectInput");
                stockInput.classList.remove("correctInput");
                message = "No es una cantidad válida";
                setCustomValidityCSS(stockError, message);
                return null;
            }
            
            stockInput.classList.add("correctInput");
            stockInput.classList.remove("incorrectInput");

            // DESCRIPCIÓN CORTA

            let _shortDesc = shortDescInput.value.trim();
            if(!(_shortDesc.length >= 1 && _shortDesc.length <= 80)) {
                message = "Debe tener entre 1 y 80 caracteres";
                setCustomValidityCSS(shortDescError, message);
                shortDescInput.classList.add("incorrectInput");
                shortDescInput.classList.remove("correctInput");
                return null;
            }

            shortDescInput.classList.add("correctInput");
            shortDescInput.classList.remove("incorrectInput");

            // DESCRIPCION LARGA

            let _longDesc = longDescInput.value.trim();
            if(!(_longDesc.length >= 1 && _longDesc.length <= 2000)) {
                message = "Debe tener entre 1 y 2000 caracteres";
                setCustomValidityCSS(longDescError, message);
                longDescInput.classList.add("incorrectInput");
                longDescInput.classList.remove("correctInput");
                return null;
            }

            longDescInput.classList.add("correctInput");
            longDescInput.classList.remove("incorrectInput");

            // IMAGEN

            let _image = imageInput.value;
            if(!(_image)) {
                message = "Debe cargar una imagen para el producto";
                setCustomValidityCSS(imageError, message);
                imageInput.classList.add("incorrectInput");
                imageInput.classList.remove("correctInput");
                return null;
            }

            imageInput.classList.add("correctInput");
            imageInput.classList.remove("incorrectInput");

            message = "";
            setCustomValidityCSS(nameError, message);
            setCustomValidityCSS(markError, message);
            setCustomValidityCSS(categoryError, message);
            setCustomValidityCSS(priceError, message);
            setCustomValidityCSS(minAgeError, message);
            setCustomValidityCSS(maxAgeError, message);
            setCustomValidityCSS(stockError, message);
            setCustomValidityCSS(shortDescError, message);
            setCustomValidityCSS(longDescError, message);
            setCustomValidityCSS(imageError, message);

            // setCustomValidityCSS(longDescError, message);

            console.log("Enviando...");

            return null;
        };

        const setCustomValidityCSS = (output, message) => {
            output.innerHTML = message;
        };
    }
},400);

window.addEventListener("DOMContentLoaded", () => {
    verificarAlta();
})

window.addEventListener('hashchange', () => {
    verificarAlta();
});