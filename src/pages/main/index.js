var button = document.querySelector(".slider__link_js");
console.log(button);
var modalForm = document.querySelector(".modal-form_js");
console.log(modalForm);
var buttonClose = document.querySelector(".button-closed_js");
var input = document.querySelector(".form-input_js");

button.addEventListener("click", function () {
    modalForm.classList.remove("contact-us__modal-form_none");
    input.focus();
    console.log();
});

buttonClose.addEventListener("click", function () {
    modalForm.classList.add("contact-us__modal-form_none");
});

window.addEventListener("keydown", function (event) {
    if(event.code == "Escape" && !modalForm.classList.contains("contact-us__modal-form_none")) {
    modalForm.classList.add("contact-us__modal-form_none");
    button.focus();
    }
    });