function revealItems() {
    reveal('.card');
}

function reveal(item) {
    let cards = document.querySelectorAll(item);

    for (const element of cards) {
        let windowHeight = window.innerHeight;
        let elementTop =
            element.getBoundingClientRect().top;
        let elementBottom = element.getBoundingClientRect().bottom;

        let elementTopVisible = 50, elementBottomVisible = 600;

        if (elementTop < windowHeight - elementTopVisible && elementBottom + elementBottomVisible > windowHeight) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    }
}

window.addEventListener("scroll", revealItems);
