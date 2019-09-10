var countryFilter = document.querySelector('.country-filter__main');
var filterToggle = document.querySelector('.country-filter__toggle');
var filterToggleBottom = document.querySelector('.country-filter__toggle--closed');

countryFilter.classList.remove('country-filter__main--nojs');

filterToggle.addEventListener('click', function() {
  if (countryFilter.classList.contains('country-filter--closed')) {
    countryFilter.classList.remove('country-filter--closed');
    countryFilter.classList.add('country-filter--opened');
  } else {
    countryFilter.classList.add('country-filter--closed');
    countryFilter.classList.remove('country-filter--opened');
  }
});

filterToggleBottom.addEventListener('click', function() {
  if (countryFilter.classList.contains('country-filter--closed')) {
    countryFilter.classList.remove('country-filter--closed');
    countryFilter.classList.add('country-filter--opened');
  } else {
    countryFilter.classList.add('country-filter--closed');
    countryFilter.classList.remove('country-filter--opened');
  }
});
