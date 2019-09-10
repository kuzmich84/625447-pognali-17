var modalBusinessRate = document.querySelector('.business-rate__popup');
var open = document.querySelector('.rate__link--business');
var close =  document.querySelector('.business-rate__button');


open.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBusinessRate.classList.add('business-rate__popup--show');
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBusinessRate.classList.remove('business-rate__popup--show');
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (modalBusinessRate.classList.contains('business-rate__popup--show')) {
      evt.preventDefault();
      modalBusinessRate.classList.remove('business-rate__popup--show');
    }
  }
});
