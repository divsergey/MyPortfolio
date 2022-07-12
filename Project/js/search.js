window.addEventListener("DOMContentLoaded",function() {

var searchBtnEl = document.querySelector(".js-search-mode--close")
document.querySelector(".js-search__button").addEventListener("click" , function() {
searchBtnEl.classList.toggle("header-search-mode");
})

})
