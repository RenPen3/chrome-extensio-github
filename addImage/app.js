const addBtn = document.querySelector('.addBtn');
const rmBtn = document.querySelector('.rmBtn');
const imgOvrLayCon = document.querySelector('.image-overlay-container');
const imageOvrLay = document.getElementById('imgOvrLay');
const clrAll = document.querySelector('.clear-all');
const imageUrl = document.getElementById('imageUrl');


// Add image button
addBtn.addEventListener('click', () => {
  console.log('add image')

})

// Remove image button
rmBtn.addEventListener('click', () => {
  console.log('removed image')
})

// Clear URL link
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





