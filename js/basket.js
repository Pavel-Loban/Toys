const  basketWrapper = document.querySelector('.basket-wrapper');
let local = localStorage.getItem('basket-items');
const btnCheckout = document.querySelector('.title_checkout');
const btnPlusMinus = document.querySelectorAll('.item__btn ');
const totalPrice = document.querySelector('.total_price');
const cardTotal = document.querySelector('.item_total');
const cardPrice = document.querySelector('.item_price ');

//------------total price
const total = () => {
  const  basketWrapper = document.querySelector('.basket-wrapper');
  const titleBasket = document.querySelector('.basket_title');
    let result = 0;

    if(basketWrapper.childElementCount === 0){
      totalPrice.innerHTML = 0;
      titleBasket.innerHTML = 'Сart is empty';
    }else{
      totalPrice.innerHTML = '';
      basketWrapper.childNodes.forEach(elem => {
        const price = parseInt(elem.querySelector('span').innerHTML);
        const total = parseInt(elem.querySelector('.item_total ').value);

        result += price*total;
        totalPrice.innerHTML = result;
      });

    }
    // getBasket();
  };
  setTimeout(total,1000);
//----------------hover checkout
btnCheckout.addEventListener('mousedown', (e) => {
  if(e.target.classList.contains('title_checkout')){
    e.target.style.backgroundColor = 'rgb(174, 230, 64)';
  }
});
btnCheckout.addEventListener('mouseup', (e) => {
  if(e.target.classList.contains('title_checkout')){
    e.target.style.backgroundColor = 'yellowgreen';
  }
});

// -----------hover plus minus
basketWrapper.addEventListener('mousedown', hoverBtnMouseDown);

basketWrapper.addEventListener('mouseup', hoverBtnMouseUp);



// console.log(typeof JSON.parse(JSON.stringify(local)));

// function render() {
//    if (local !== null) {
//       basketWrapper.innerHTML = '';
//       basketWrapper.insertAdjacentHTML('beforeend', localStorage.getItem('basket-items'));
//    }
//    if (basketWrapper.childElementCount === 0) {
//       // console.log(basketWrapper.childElementCount);

//       basketWrapper.innerHTML = '';
//    }
//    // go.forEach((elem) => {
//    //    basketWrapper.innerHTML = `
//    //    <div class="basket-item" data-id=${elem.id}>
//    //    <div class="basket-item__row">
//    //      <div class="basket_container_img item__basket">
//    //        <a href="" class="basket_catalog__image ">
//    //          <img class="basket_img" src="img/catalog/constructor.jpg" alt="Plastic constructor3" />
//    //        </a>
//    //      </div>
//    //      <div class="basket-item__title item__basket">${elem.title}</div>
//    //      <div class="item_count flex_center item__basket">
//    //        <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
//    //        <input class="item_total item_action_text" type="text" style="width: 30px;" value="5" readonly>
//    //        <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
//    //      </div>

//    //      <div class="item_price item__basket">
//    //        <span class="item_price item_action_text">
//    //        ${elem.price}
//    //        </span>
//    //      </div>
//    //      <div class="basket_item_delet item__basket">remove from cart</div>
//    //    </div>
//    //  </div>
//    //    `;
//    // });

// }
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

// window.addEventListener('storage', e => {
//    // console.log(e);
//    // console.log(e.newValue);
// });



//  setInterval(getBasket, 3000)
//----------вывод товара в корзину
 getBasket();

//---------------удаляю товар
basketWrapper.addEventListener('click', deleteBasketItem);

//------------сохраняю измененное количество товара

basketWrapper.addEventListener('click', putGood);




