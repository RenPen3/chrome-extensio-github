const addBtn1 = document.querySelector('.btn1');
const addBtn2 = document.querySelector('.btn2');
const addBtn3 = document.querySelector('.btn3');
const allBtns = document.querySelectorAll('.btn');
const clrAll = document.querySelector('.clear-all');
const urlInput = document.getElementById('url');


addBtn1.addEventListener('click', () => {
  console.log('add button 1')
})
addBtn2.addEventListener('click', () => {
  console.log('add button 2')
})
addBtn3.addEventListener('click', () => {
  console.log('add button 3')
})

clrAll.addEventListener('click', () => {
  urlInput.value = '';
})





