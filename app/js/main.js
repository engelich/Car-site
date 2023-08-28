
const menuBtn = document.querySelector('.header__button');
const menuMobile = document.querySelector('.popup');
const scrolNone = document.querySelector('body');

menuBtn.addEventListener('click',()=>{
  menuMobile.classList.toggle('popup__active');
  scrolNone.classList.toggle('popup__body-active');

});
const menuBtnM = document.querySelector('.header__button-mobil');
const menuMobileM = document.querySelector('.popup');
const scrolNoneM = document.querySelector('body');

menuBtnM.addEventListener('click',()=>{
  menuMobileM.classList.toggle('popup__active');
  scrolNoneM.classList.toggle('popup__body-active');

});

const menuBt = document.querySelector('.popup__close');
const menuMobil = document.querySelector('.popup');
const scrolNonePop = document.querySelector('body');

menuBt.addEventListener('click',()=>{
  menuMobil.classList.toggle('popup__active');
  scrolNonePop.classList.toggle('popup__body-active');
  
});

const menuBtny = document.querySelector('.top__button');
const menuMobiley = document.querySelector('.popup');
const scrolNoney = document.querySelector('body');

menuBtny.addEventListener('click',()=>{
  menuMobiley.classList.toggle('popup__active');
  scrolNoney.classList.toggle('popup__body-active');

});




 










