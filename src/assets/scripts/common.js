/* Update 2021-05-07 */

// Tab
const tabItem = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');

tabItem.forEach(e => {
    e.addEventListener('click', tabEvent);
})

function tabEvent(e) {
    const tabTarget = e.currentTarget.parentNode;
    const tabData = tabTarget.dataset.tab;

    tabItem.forEach(e => {
        e.parentNode.classList.remove('active');
    })
    
    tabContent.forEach(e => {
        e.classList.remove('active');
    })

    tabTarget.classList.add('active');
    document.querySelector('#' + tabData).classList.add('active');

}

