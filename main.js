// khai báo
var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)
var buyBtns = $$(".js-buy-ticket");
var modal = $(".js-modal");
var modalClose = $(".js-modal-close");
var modalContainer = $(".js-modal-container");
var header = $("#header");
var mobileMenu = $("#js-mobile-menu");
//hàm hiển thị mua vé (thêm class open vào web)
for (buyBtn of buyBtns) {
  buyBtn.addEventListener("click", showBuyMenu);
}
modalClose.addEventListener("click", closebuyMenu);
modal.addEventListener("click", closebuyMenu);
modalContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});
function showBuyMenu() {
  modal.classList.add("open");
}
function closebuyMenu() {
  modal.classList.remove("open");
}
// hàm hiện thị task menu trên mobile
var headerHeight = header.clientHeight;
mobileMenu.onclick = function () {
  if (headerHeight) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
};
// tự động đóng menu khi chọn
var autos = document.querySelectorAll("#nav");
for (mecha of autos) {
  mecha.onclick = function (e) {
    if (
      this.nextElementSibling &&
      this.nextElementSibling.classList.contains("subnav")
    ) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  };
}
