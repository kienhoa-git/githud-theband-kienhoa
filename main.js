//hàm hiển thị mua vé (thêm class open vào web)
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTickets() {
    modal.classList.add('open')
}
function hideBuyTickets () {
    modal.classList.remove('open')
}
for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}
modalClose.addEventListener('click',hideBuyTickets)
modal.addEventListener('click',hideBuyTickets)
modalContainer.addEventListener('click',function (event) {
    event.stopPropagation()
})
// hàm hiện thị task menu trên mobile
var header = document.getElementById('header')
var mobileMenu = document.getElementById('js-mobile-menu')
var headerHeight = header.clientHeight
mobileMenu .onclick = function() {
     var isClose = header.clientHeight === headerHeight
     if (isClose) {
        header.style.height ="auto"
     }
     else {
        header.style.height = null
     }
}
// tự động đóng menu khi chọn
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i =0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
       if (isParentMenu) {
           event.preventDefault()
        }else {
           header.style.height = null
       }
    }
 }
// tự động đóng menu khi chọn (pc) 
function toggleSubmenu(id) {
    var subMenu = document.getElementById(id)
    if(subMenu.style.display === 'none') {
        subMenu.style.display = 'block'
    }else{subMenu.style.display = 'none' }
}