
const headerBtn = document.querySelector("#header-btn");
const headerModal = document.querySelector(".header__modal");

headerBtn.addEventListener('click', function(){
    headerModal.classList.toggle('active')
    headerBtn.classList.toggle('transform')
})


const tabBtn1 = document.querySelector("#tabBtn1")
const tabBtn2 = document.querySelector("#tabBtn2")
const tabBtn3 = document.querySelector("#tabBtn3")

const tab1 = document.querySelector(".tab1")
const tab2 = document.querySelector(".tab2")
const tab3 = document.querySelector(".tab3")

tabBtn2.addEventListener('click', function(){
    tabBtn2.classList.add('tabs__menu-item-active')
    tabBtn1.classList.remove('tabs__menu-item-active')
    tabBtn3.classList.remove('tabs__menu-item-active')
    tab2.classList.add('tabs__text-active')
    tab1.classList.remove('tabs__text-active')
    tab3.classList.remove('tabs__text-active')
})

tabBtn3.addEventListener('click', function(){
    tabBtn2.classList.remove('tabs__menu-item-active')
    tabBtn1.classList.remove('tabs__menu-item-active')
    tabBtn3.classList.add('tabs__menu-item-active')
    tab2.classList.remove('tabs__text-active')
    tab1.classList.remove('tabs__text-active')
    tab3.classList.add('tabs__text-active')
})

tabBtn1.addEventListener('click', function(){
    tabBtn2.classList.remove('tabs__menu-item-active')
    tabBtn1.classList.add('tabs__menu-item-active')
    tabBtn3.classList.remove('tabs__menu-item-active')
    tab2.classList.remove('tabs__text-active')
    tab1.classList.add('tabs__text-active')
    tab3.classList.remove('tabs__text-active')
})

$(document).ready(function(){
    $('.reviews__slides').slick({
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        centerMode: true
    });
})


const modalOpen = document.querySelector(".modal__btn")
const modalClose = document.querySelector(".modal__close")
const modal = document.querySelector(".modal__bg")
const modalWindow = document.querySelector(".modal__window")

modalOpen.addEventListener('click', function(){
    modal.classList.add('modal__bg-active')
})

modalClose.addEventListener('click', function(){
    modal.classList.remove('modal__bg-active')
})

modal.addEventListener('click', function(){
    modal.classList.remove('modal__bg-active')
})

modalWindow.addEventListener('click', function(e) {
    e.stopPropagation();
})


document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ){
        modal.classList.remove('modal__bg-active') 
    }
});


// Mask_tel 
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});


