// getTenTaskcs();
//--------------------add card------------
renderListGoods();
let cartItemHTML = '';
let loc;
const dat = [];



// const saveData = () => {
//   localStorage.setItem('goods',JSON.stringify(dat));
//   let go = JSON.parse(localStorage.getItem('goods'));
// console.log(dat);

// };

document.querySelector('.catalog__body').addEventListener('click', counterGood);


document.querySelector('.catalog__body').addEventListener('click',(e) => {
  // const card = e.target.closest('.catalog__item');
  postData(e);
  e.stopPropagation();
  // card.querySelector('.item_total').value = 1;
  // e.preventDefault();
} );

// document.querySelector('.catalog__body').addEventListener('click',(e) => {
//   if(e.target.classList.contains('item__btn_add')){

//     // const card = e.target.closest('.catalog__item');
//     postData(e);
//     e.preventDefault();
//   }
// });


// window.addEventListener('storage', (e) => {

//   if(localStorage.getItem('basket-items') !== null){
//     localStorage.setItem('basket-items', e.newValue);
//     cartItemHTML = localStorage.getItem('basket-items');
//   }else{
//     cartItemHTML = '';
//   }
// });

document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnMouseUp);
document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnUp);