
let isDropdownOpen = false;
let isBurgerMenuOpen = false;

let burgerIcon;
let crossIcon;
let nav;
let dropdownButton;
let dropdownList;

function hideBurger() {
    burgerIcon.className = '';
    crossIcon.className = 'burger__icon__hide';
    nav.className = 'nav__hide';
}

function showBurger() {
    burgerIcon.className = 'burger__icon__hide';
    crossIcon.className = '';
    nav.className = '';
}

function showDropdown() {
    dropdownButton.className += ' dropdown__button__opened';
    dropdownList.className = 'dropdown__list dropdown__list__opened';
}

function hideDropdown() {
    dropdownButton.className = 'dropdown__button';
    dropdownList.className = 'dropdown__list dropdown__list__closed';
}

function onDropdownButtonClick() {
    isDropdownOpen = !isDropdownOpen;

    if (isDropdownOpen) {
        showDropdown();
    }
    else {
        hideDropdown();
    }
}

function onBurgerMenuButtonClick() {
    isBurgerMenuOpen = !isBurgerMenuOpen;

    if (isBurgerMenuOpen) {
        showBurger()
    }
    else {
        hideBurger();
    }
}

window.addEventListener("DOMContentLoaded", () => {
    burgerIcon = document.getElementById("burger");
    crossIcon = document.getElementById("cross");
    nav = document.getElementById("nav");
    dropdownButton = document.getElementsByClassName("dropdown__button")[0];
    dropdownList = document.getElementsByClassName("dropdown__list")[0];

    if (screen.width <= 788) {
        hideBurger();
        hideDropdown();
    }
})

window.addEventListener("resize", () => {
    if (screen.width <= 788) {
        hideBurger();
        hideDropdown();
    }

    if (screen.width > 788) {
        hideBurger();
        hideDropdown();
        nav.className = '';
    }
})