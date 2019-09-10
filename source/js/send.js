var formEmail = document.querySelector(".registration__form");
var subEmail = formEmail.querySelector(".registration__input");
var btnSub = document.querySelector(".registration__button")

formEmail.addEventListener("submit", function (evt) {
  if(!subEmail.value){
    subEmail.classList.add("send-error");
    subEmail.placeholder="Введите e-mail";
    evt.preventDefault();
    }else {
    subEmail.classList.remove("send-error");
  }
});

btnSub.addEventListener("mouseup", function (evt) {
  evt.preventDefault();
  subEmail.classList.remove("send-error");
});
