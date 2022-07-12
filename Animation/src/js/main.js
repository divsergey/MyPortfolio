window.addEventListener("DOMContentLoaded",function() {

  var burgerBtnEl = document.querySelector(".js__menu")
  document.querySelector(".js__header__button").addEventListener("click" , function() {
  burgerBtnEl.classList.toggle("menu-open");
  })

  var closeBtnEl = document.querySelector(".js__menu")
  document.querySelector(".js__button--close").addEventListener("click" , function() {
  closeBtnEl.classList.toggle("menu-open");
  })




  

})


