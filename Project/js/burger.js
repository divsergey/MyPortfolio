window.addEventListener("DOMContentLoaded",function() {

  var burgerBtnEl = document.querySelector(".js-header-nav--close")
  document.querySelector(".js-burger__button").addEventListener("click" , function() {
  burgerBtnEl.classList.toggle("header-nav-mode");
  })
  

})
