//hàm hiển thị mua vé (thêm class open vào web)
var buyBtns = document.querySelectorAll('.js-buy-ticket')
var modal = document.querySelector('.js-modal')
var modalClose = document.querySelector('.js-modal-close')
var modalContainer = document.querySelector('.js-modal-container')
for (buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyMenu)
}
modalClose.addEventListener('click',closebuyMenu)
modal.addEventListener('click',closebuyMenu)
modalContainer.addEventListener('click',function(e){e.stopPropagation()})
function showBuyMenu() {
    modal.classList.add('open')
}
function closebuyMenu() {
    modal.classList.remove('open')
}
// hàm hiện thị task menu trên mobile
var header = document.getElementById('header')
var mobileMenu = document.getElementById('js-mobile-menu')
var headerHeight = header.clientHeight
mobileMenu.onclick = function() {
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
    var submenu = document.getElementById(id)
    if(submenu.style.display === 'none') {
        submenu.style.display = 'block'
    }else{submenu.style.display = 'none'}
}