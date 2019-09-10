var chooseCountry = document.querySelector('.add-plan__choose--js');
var countyToggle = chooseCountry.querySelector('.choose-country__button');

countyToggle.addEventListener('click', function() {
  if (chooseCountry.classList.contains('add-plan__choose--closed')) {
    chooseCountry.classList.remove('add-plan__choose--closed');
    chooseCountry.classList.add('add-plan__choose--opened');
  } else {
    chooseCountry.classList.add('add-plan__choose--closed');
    chooseCountry.classList.remove('add-plan__choose--opened');
  }
});
