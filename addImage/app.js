const addBtn = document.querySelector('.addBtn');
const rmBtn = document.querySelector('.rmBtn');
// const addBtn3 = document.querySelector('.btn3');
// const allBtns = document.querySelectorAll('.btn');
const imageOvrLay = document.getElementsByTagName('img');
const clrAll = document.querySelector('.clear-all');
const imageUrl = document.getElementById('imageUrl');

console.log(imageOvrLay);


addBtn.addEventListener('click', () => {
  console.log('add image')
})
rmBtn.addEventListener('click', () => {
  console.log('removed image')
})
// addBtn3.addEventListener('click', () => {
//   console.log('add button 3')
// })

clrAll.addEventListener('click', () => {
  imageUrl.value = '';
})

// document.getElementById('addImage').addEventListener('click', () => {
//   const imageUrl = document.getElementById('imageUrl').value;
//   if (imageUrl) {
//     // Send the image URL to the content script
//     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//       chrome.tabs.sendMessage(tabs[0].id, { imageUrl: imageUrl });
//     });
//   }
// });





