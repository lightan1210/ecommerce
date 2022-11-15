import productController from '/js/controllers/product.js';

console.log("%c Estás confundido; pero este es tu estado normal.","color: red; font-size: 2em");

const main = document.getElementsByTagName("main")[0];

// Obtener productos
const products = await productController.getProducts();

console.log(products);

const getIdFromHash = () => location.hash.slice(1) || 'inicio';

const getUrlFromId = id => `views/${id}.html`;

const links = document.querySelectorAll(".main-nav a");

const logo = document.querySelector(".main-header__logo-container a");

let popUp;

// MODAL CART

let modalWindow = document.querySelector(".cart-modal-container .cart-info__list");

const modalCart = document.querySelector(".cart-modal-container");

const productsCart = document.querySelector(".main-header__cart-button-container");

productsCart.addEventListener("click", e => {
    modalCart.classList.toggle("cart-modal-container--active");
    productsCart.classList.toggle("main-header__cart-button-container--active");
});

const totalPrice = document.querySelector(".cart-info__total");

let selectedProduct;
let modalElement;
let unitPrice;
let finalPrice;
let total;
let amount;

window.addEventListener("click", async e => {
    // NO FUNCIONA
    if(e.target.className === "cart-info__pay-all") {
        let arrayOfProducts = modalWindow.children;
        if(!arrayOfProducts.length){
            console.log("No hay elementos a comprar");
        }
        else {
            const res = await fetch("/",
            {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({...arrayOfProducts})
            });
            modalWindow.innerHTML = "";
        }
        return;
    }
    if(e.target.className === "card__add-cart")
    {
        selectedProduct = products.find(product => product._id === e.target.dataset.id);
        modalWindow = document.querySelector(".cart-modal-container .cart-info__list");
        
        modalElement = Array.from(modalWindow.children).find(product => product.dataset.id == selectedProduct._id);

        if(modalElement) {

            // amount = modalElement.children[3].querySelector("input");
            // unitPrice = modalElement.children[2].querySelector("#unit-price");
            // finalPrice = modalElement.children[4].querySelector("#final-price");

            amount = modalElement.querySelector("input");
            unitPrice = modalElement.querySelector("#unit-price");
            finalPrice = modalElement.querySelector("#final-price");

            amount.setAttribute("value",amount.value++);

            finalPrice.innerHTML = (parseFloat(unitPrice.innerHTML)*parseInt(amount.value)).toFixed(2);
            calculateTotal();
        }
        else {
            console.log("Agregando producto nuevo al carrito");
            popUp = document.querySelector(".cart-button-container__popUp");
            popUp.classList.add("cart-button-container__popUp--active");
            setTimeout(() => {
                popUp.classList.remove("cart-button-container__popUp--active");
            }, 4000);
            let template = await (await fetch("../templates/productInCar.hbs")).text();
            template = Handlebars.compile(template);
            modalWindow.innerHTML += template(selectedProduct);
            calculateTotal();
        }
        return;
    }
    if(e.target.className === "info-element__remove") {
        modalElement = e.target.parentNode;
        modalElement.parentNode.removeChild(modalElement);
        console.log("Elemento quitado del carrito");
        parseFloat(parseFloat(finalPrice).toFixed(2));
        calculateTotal();
        return;
    }
    if(e.target.className === "cart-info__close" || e.target.classList.contains("cart-modal-container")) {
        modalCart.classList.toggle("cart-modal-container--active");
        productsCart.classList.toggle("main-header__cart-button-container--active");
        return;
    }
    if(e.target.id === "item-amount") {
        amount = e.target;
        let parent = e.target.closest(".info-element");

        // unitPrice = parent.children[2].querySelector("#unit-price");
        // finalPrice = parent.children[4].querySelector("#final-price");

        unitPrice = parent.querySelector("#unit-price");
        finalPrice = parent.querySelector("#final-price");
        amount.setAttribute("value",amount.value);
        finalPrice.innerHTML = (parseFloat(unitPrice.innerHTML)*parseInt(amount.value)).toFixed(2);
        calculateTotal();
        return;
    }
});

window.addEventListener("keydown", e => {
    if(modalCart.classList.contains("cart-modal-container--active") && e.key === "Escape") {
        modalCart.classList.remove("cart-modal-container--active");
        productsCart.classList.remove("main-header__cart-button-container--active");
        return;
    }
});

window.addEventListener("change", e => {
    if(e.target.id === "item-amount") {
        amount = e.target;
        let parent = e.target.closest(".info-element");

        // unitPrice = parent.children[2].querySelector("#unit-price");
        // finalPrice = parent.children[4].querySelector("#final-price");

        unitPrice = parent.querySelector("#unit-price");
        finalPrice = parent.querySelector("#final-price");
        amount.setAttribute("value",amount.value);
        finalPrice.innerHTML = (parseFloat(unitPrice.innerHTML)*parseInt(amount.value)).toFixed(2);
        calculateTotal();
        return;
    }
});

const calculateTotal = () => {
    total = 0;
    Array.from(modalWindow.children).forEach(element => {
        
        // finalPrice = element.children[4].querySelector("#final-price").innerHTML;

        finalPrice = element.querySelector("#final-price").innerHTML;
        total += parseFloat(parseFloat(finalPrice).toFixed(2));
        total = parseFloat(total.toFixed(2));
    });
    // totalPrice.children[0].innerHTML = total;

    totalPrice.innerHTML = total;
    // console.log("TOTAL GASTADO: ", total)
}

// MAIN

const loadPage = async () => {
    setActiveLink();
    let url;
    let response = await fetch(`../views/${getIdFromHash()}.html`);
    let output = await response.text();
    main.innerHTML = output;
    loadProducts();

    logo.addEventListener("click", e => {
        e.preventDefault();
        const id = e.target.closest("a").href.split('#')[1];
        url = `../views/${id}.html`;
        location.hash = id;

        setActiveLink();
    });

    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const id = e.target.href.split('#')[1];
            url = `../views/${id}.html`;
            location.hash = id;

            setActiveLink();
        });
    });
    
    window.addEventListener('hashchange', e => {
        const id = getIdFromHash();
        url = getUrlFromId(id);
        loadLink(url);
    });
    popUp = document.querySelector(".cart-button-container__popUp");
}

const loadLink = async (url) => {
    let response = await fetch(url);
    const output = await response.text();
    main.innerHTML = output;
    loadProducts();
}

const loadProducts = async () => {
    if(getIdFromHash() === "inicio" || getIdFromHash() === "/inicio") {

        const top3 = document.querySelectorAll(".cards-container")[0];
        const promotions = document.querySelectorAll(".cards-container")[1];
        const allToys = document.querySelectorAll(".cards-container")[2];
        // Mejores tres juguetes

        let filteredProducts = products.sort((a, b) => {return b.sellout-a.sellout}).slice(0,3);
        let template;
        template = await (await fetch("../templates/product.hbs")).text();
        filteredProducts.forEach(async product => {
            template = await Handlebars.compile(template);
            top3.innerHTML += template(product);
        });
        
        const fillContainer = async (container, arrayProduct) => {

            arrayProduct.forEach(async product => {
                template = await Handlebars.compile(template);
                container.innerHTML += template(product);
            });
        };

        // Juguetes con promociones

        filteredProducts = products.filter(product => product.discount || product.freeSend);

        fillContainer(promotions, filteredProducts);

        // Todos los juguetes

        fillContainer(allToys, products);
    }
}

const setActiveLink = () => {
    links.forEach(link => {
        if(link.href.split("#")[1] === getIdFromHash())
            link.classList.add("main-nav__link--active");
        else
            link.classList.remove("main-nav__link--active");
    });
}

loadPage();