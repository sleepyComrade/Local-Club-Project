"use strict"

// menu burger
const iconMenu = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');
if (iconMenu){
  iconMenu.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// scrolling on click

const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
  menuLink.addEventListener("click", onMenuLinkClick);
  }); 

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + 1;
      

      if (iconMenu.classList.contains('_active')) {
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        document.body.classList.remove('logo-back');
        document.body.classList.remove('logo-change');
      }


        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth"
        });
        e.preventDefault();
        
    }
  }
}

// test 

window.onscroll = function () {
  if (window.pageYOffset > 50) {
    document.body.classList.add('background');
  } else {
    document.body.classList.remove('background');
    document.body.classList.remove('logo-back');
  };
  if (window.pageYOffset > 900) {
         document.body.classList.add('goup');
       } else {
         document.body.classList.remove('goup');
       }
};

iconMenu.onclick = function logoBack() {
  if (iconMenu.classList.contains('_active')) {
    document.body.classList.add('logo-back');
    document.body.classList.add('logo-change');
  } else {
    document.body.classList.remove('logo-back');
    document.body.classList.remove('logo-change');
  }
};

