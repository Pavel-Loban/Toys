const  basketWrapper = document.querySelector('.basket-wrapper');
let local = localStorage.getItem('basket-items');

// console.log(typeof JSON.parse(JSON.stringify(local)));

function render() {
   if (local !== null) {
      basketWrapper.innerHTML = '';
      basketWrapper.insertAdjacentHTML('beforeend', localStorage.getItem('basket-items'));
   }
   if (basketWrapper.childElementCount === 0) {
      // console.log(basketWrapper.childElementCount);

      basketWrapper.innerHTML = '';
   }
   // go.forEach((elem) => {
   //    basketWrapper.innerHTML = `
   //    <div class="basket-item" data-id=${elem.id}>
   //    <div class="basket-item__row">
   //      <div class="basket_container_img item__basket">
   //        <a href="" class="basket_catalog__image ">
   //          <img class="basket_img" src="img/catalog/constructor.jpg" alt="Plastic constructor3" />
   //        </a>
   //      </div>
   //      <div class="basket-item__title item__basket">${elem.title}</div>
   //      <div class="item_count flex_center item__basket">
   //        <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
   //        <input class="item_total item_action_text" type="text" style="width: 30px;" value="5" readonly>
   //        <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
   //      </div>

   //      <div class="item_price item__basket">
   //        <span class="item_price item_action_text">
   //        ${elem.price}
   //        </span>
   //      </div>
   //      <div class="basket_item_delet item__basket">remove from cart</div>
   //    </div>
   //  </div>
   //    `;
   // });

}
// setInterval(render, 3000);
// render();



// basketWrapper.addEventListener('click', function (e) {
//    let deletGood = e.target.classList.contains('basket_item_delet');

//    if (deletGood) {
//       let good = e.target.closest('.basket-item');
//       good.remove();

//       localStorage.setItem('basket-items', basketWrapper.innerHTML);
//    }

// });



// basketWrapper.addEventListener('click', function (e) {

//    if (e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg') {
//       // console.log('yes');
//       localStorage.setItem('basket-items', basketWrapper.innerHTML);
//    }
// });

window.addEventListener('storage', e => {
   // console.log(e);
   // console.log(e.newValue);
});



//  setInterval(getBasket, 3000)
//----------вывод товара в корзину
 getBasket();

//---------------удаляю товар
basketWrapper.addEventListener('click', deleteBasketItem);

//------------сохраняю измененное количество товара

basketWrapper.addEventListener('click', putGood);

const  titleBasket = () => {
  const basketTitle = document.querySelector('.basket_title');
  // const  basketWrapper = document.querySelector('.basket-wrapper');
  if(true){
    console.log(basketWrapper.childElementCount)
    basketTitle.innerHTML = 'Cart is empty';
  }
};
basketWrapper.addEventListener('click', titleBasket);

