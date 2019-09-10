var formPlan = document.querySelector(".form");
var selectedList = formPlan.querySelectorAll(".selected-list__textarea");
var placeholderTextarea = document.querySelectorAll(".selected-list__placeholder");


formPlan.addEventListener("submit", function (evt) {

  for (var i = 0; i < selectedList.length; i++) {
    if (selectedList[i].value === "") {
      selectedList[i].classList.add("textarea-error");
      selectedList[i].placeholder = " ";
      placeholderTextarea[i].style.display = "block";
      evt.preventDefault();
    } else {
      selectedList[i].classList.remove("textarea-error");

    }
  }
});

for (var i = 0; i < selectedList.length; i++) {
  selectedList[i].onfocus = function () {
    placeholderTextarea[i].style.display = "none";
    selectedList[i].placeholder = "План действий";
  }
}
