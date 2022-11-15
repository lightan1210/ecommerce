const hamburgerButton = document.querySelector(".hamburger-button");

hamburgerButton.addEventListener("click", e => {

    for(let partBurger of hamburgerButton.children) {
        if(partBurger.classList.length === 1) {
            let nameOfClass = partBurger.className + '--active';
            partBurger.classList.add(nameOfClass);
        }
        else
        {
            partBurger.classList.remove(partBurger.classList.item(1));
        }
    }
});