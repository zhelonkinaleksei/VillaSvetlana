
const headerInfoMenu = document.querySelector(".header__info-menu");
const headerInfoBack = document.querySelector(".header__menu-back");
const headerMenu = document.querySelector(".header__menu");
    if (headerInfoMenu) {
         headerInfoMenu.addEventListener("click", function (e) {
            headerInfoBack.classList.add("header__menu-back-active");
            headerMenu.classList.add("header__menu-active");
            document.body.classList.add("_lock");
        });
 
       
    }
const headerMenuClose = document.querySelector(".header__menu-close");    
   if (headerMenuClose) {
      headerMenuClose.addEventListener("click", function (e) {
         headerInfoBack.classList.remove("header__menu-back-active");
         headerMenu.classList.remove("header__menu-active");
         document.body.classList.remove("_lock");
   });
   }




/*------------------------------------------------------------------------*/

const popupButton = document.querySelector(".right__row-button");
if (popupButton){
    const popup = document.querySelector('.popup');
    popupButton.addEventListener("click", function (){
        popup.classList.toggle("_open");
        document.body.classList.add("_lock");
     });
};

const popupCancel = document.querySelector('.popup__cancel');
  
if(popupCancel){
    popupCancel.addEventListener("click", function(){
        popup.classList.remove("_open");
        document.body.classList.remove("_lock");
    });
}

popup.addEventListener("click", function(e){
    if(!e.target.closest(".popup__content")) {
        popup.classList.remove("_open");
        document.body.classList.remove("_lock");
    };
})