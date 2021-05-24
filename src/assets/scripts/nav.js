
// Nav
let lastScrollTop = 0;
const delta = 5;
const fixBox = document.querySelector('nav');
const fixBoxHeight = fixBox.offsetHeight;
let didScroll;
window.onscroll = function (e) {
  didScroll = true;
};

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  let nowScrollTop = window.scrollY;
  if (Math.abs(lastScrollTop - nowScrollTop) <= delta) {
    return;
  }
  if (nowScrollTop > lastScrollTop && nowScrollTop > fixBoxHeight) {
    //Scroll down
    fixBox.classList.remove('active');
  } else {
    if (nowScrollTop + window.innerHeight < document.body.offsetHeight) {
      //Scroll up
      fixBox.classList.add('active');
    }
  }
  lastScrollTop = nowScrollTop;
}

const $navItem = document.querySelectorAll('nav a')
Array.prototype.forEach.call($navItem, function(e){
  e.addEventListener('click', navClickEvent);
});

function navClickEvent(e){
  Array.prototype.forEach.call($navItem, function(e) {
    e.classList.remove('active');
  });
  e.currentTarget.classList.add('active')
}