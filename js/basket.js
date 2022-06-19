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










// basketWrapper.addEventListener('click', function (e) {
//    let deletGood = e.target.classList.contains('basket_item_delet');

//    if (deletGood) {
//       goodsLocalStorage = goodsLocalStorage.filter((elem) => {
//          let good = e.target.closest('.basket-item');
//          // console.log(elem[0]);

//          if(elem[0] !== good.dataset.id){
//             // good.remove();
//             return elem;
//          }
//       // console.log(good.dataset.id);
//       // console.log(typeof Number(JSON.stringify(goodsLocalStorage)));

//          return goodsLocalStorage;

//       // console.log(fff);
//       });
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





// let goodsLocalStorage = JSON.parse(localStorage.getItem('goods'));
// let goodsLength;

// function render() {
//    if (localStorage.getItem('goods') !== null) {
//       goodsLocalStorage.forEach((elem) => {
//          basketWrapper.innerHTML += `
//          <div class="basket-item" data-id="${elem[0]}">
//          <div class="basket-item__row">
//            <div class="basket_container_img item__basket">
//              <a href="" class="basket_catalog__image ">
//                <img class="basket_img" src="${elem[1]}" alt="${elem[2]}" />
//              </a>
//            </div>
//            <div class="basket-item__title item__basket">${elem[2]}</div>
//            <div class="item_count flex_center item__basket">
//              <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
//              <input class="item_total item_action_text" type="text" style="width: 30px;" value="${elem[3]}" readonly>
//              <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
//            </div>

//            <div class="item_price item__basket">
//              <span class="item_price item_action_text">
//              ${elem[4]}
//              </span>
//            </div>
//            <div class="basket_item_delet item__basket">remove from cart</div>
//          </div>
//        </div>
//          `;
//       });

//       // console.log(goodsLocalStorage.length);

//       // basketWrapper.innerHTML = '';
//       // basketWrapper.insertAdjacentHTML('beforeend', localStorage.getItem('basket-items'));
//    }
//    // if (basketWrapper.childElementCount === 0) {
//    //    console.log(basketWrapper.childElementCount);

//    //    basketWrapper.innerHTML = '';
//    // }

// goodsLocalStorage = JSON.parse(localStorage.getItem('goods'));

// if(goodsLocalStorage === null){
//    localStorage.setItem('goodsLength', 0);
// }else{
//   localStorage.setItem('goodsLength', goodsLocalStorage.length);
// }


// }
// // setInterval(render, 3000);
// // render();

// // console.log(goodsLocalStorage);

// setInterval(() => {
//    // render();
//    goodsLength = localStorage.getItem('goodsLength');
//    console.log(goodsLength);
//    // console.log(JSON.parse(localStorage.getItem('goods')));

//    // console.log(JSON.stringify(goodsLocalStorage.length));
//    if(goodsLocalStorage === null){
//       basketWrapper.innerHTML = '';
//    }
//    if(  (JSON.stringify(goodsLocalStorage.length) !== goodsLength)){
//    console.log('dadada');

//       render();

//    }
// },3000);