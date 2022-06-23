
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

document.querySelector('.catalog__body').addEventListener('mousemove',(e) => {
  const item = e.target.parentElement;
  let n = item.querySelector('.item_total ');
  if(e.target.dataset.btn === 'btn-neg' && n.value < 2){

    item.querySelector('[data-btn=btn-neg]').style.cursor = 'not-allowed';

  } else if(e.target.dataset.btn === 'btn-neg' && n.value > 1){
    item.querySelector('[data-btn=btn-neg]').style.cursor = 'pointer';
  }

});