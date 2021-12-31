/* Update 2021-06-01 */

// Tab
const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');

Array.prototype.forEach.call(tabItem, function(e){
  e.addEventListener('click', tabEvent);
});

function tabEvent(e) {
  const tabTarget = e.currentTarget.parentNode;
  const tabData = tabTarget.dataset.tab;

  Array.prototype.forEach.call(tabItem, function(e) {
    e.parentNode.classList.remove('active');
  });

  Array.prototype.forEach.call(tabContent, function(e) {
    e.classList.remove('active');
  });

  tabTarget.classList.add('active');
  document.querySelector('#' + tabData).classList.add('active');
}

// FAQ List
const toggleArea = document.querySelectorAll('.toggle-area');

Array.prototype.forEach.call(toggleArea, function(e){
  e.addEventListener('click', function(e){
    const targetBox = e.currentTarget.parentNode;
    targetBox.classList.toggle('active');
  });
});

function toggleClass(id) {
  if(!id.classList.contains('active')){
    id.setAttribute('class', 'active');
  } else {
    id.setAttribute('class', '');
  }
}

function historyBack() {
  window.history.back();
}

function modalClose() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}
