
//--------------------add card------------
renderListGoods();
let cartItemHTML = '';


document.querySelector('.catalog__body').addEventListener('click', counterGood);


document.querySelector('.catalog__body').addEventListener('click',(e) => {
  // e.preventDefault();
  postData(e);
  // e.stopPropagation();

} );

document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnMouseUp);
document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnUp);