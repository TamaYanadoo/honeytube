/* Update 2021-05-24 */

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
