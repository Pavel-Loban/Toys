
//--------------------add card------------
renderListGoods();
let cartItemHTML = '';
let loc;
const dat = [];


document.querySelector('.catalog__body').addEventListener('click', counterGood);


document.querySelector('.catalog__body').addEventListener('click',(e) => {
  postData(e);
  e.stopPropagation();
  // e.preventDefault();
} );



document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnMouseUp);
document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnUp);