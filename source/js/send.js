let formEmail = document.querySelector(".registration__form");
let subEmail = formEmail.querySelector(".registration__input");
let btnSub = document.querySelector(".registration__button")

formEmail.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if(!subEmail.value){
    subEmail.classList.add("send-error");
    subEmail.placeholder="Введите e-mail";
    }else {
    subEmail.classList.remove("send-error");
  }
});

btnSub.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  subEmail.classList.remove("send-error");
});


