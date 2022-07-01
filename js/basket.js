const basketWrapper = document.querySelector('.basket-wrapper');
// let local = localStorage.getItem('basket-items');
const btnCheckout = document.querySelector('.title_checkout');
const btnPlusMinus = document.querySelectorAll('.item__btn ');
const totalPrice = document.querySelector('.total_price');
const cardTotal = document.querySelector('.item_total');
const cardPrice = document.querySelector('.item_price ');
preloader();
setTimeout(preloader, 1000);
if(basketWrapper.innerHTML === ''){

}
//------------total price
const total = () => {
  const basketWrapper = document.querySelector('.basket-wrapper');

  let result = 0;

  if (basketWrapper.childElementCount > 0) {
    totalPrice.innerHTML = '';
    [...basketWrapper.children].forEach((elem) => {
      const total = +elem.querySelector('.item_total').value;
      const price = parseInt(elem.querySelector('span').innerHTML);
      result += price * total;
      totalPrice.innerHTML = result;
    });
  } else {
    totalPrice.innerHTML = 0;

  }
  // getBasket();
  // console.log(goodss);

};
setInterval(total, 500);

const titleBasket = () => {
  const titleBasket = document.querySelector('.basket_title');
  if (basketWrapper.childElementCount === 0) {

    titleBasket.innerHTML = 'Сart is empty';
  }
};
setInterval(titleBasket, 1000);

const reSaveGoods = ((e) => {

  if (e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg') {
    const container = e.target.closest('.basket-item');
    const count = container.querySelector('.item_total').value;
    const title = container.querySelector('.basket-item__title').innerHTML;
    if (localStorage.getItem('goods') !== null) {
      arr = JSON.parse(localStorage.getItem('goods'));
      arr.forEach(elem => {
        if (elem.title === title) {
          elem.counter = +elem.counter;

          elem.counter = count;
        }
      });
    }
    localStorage.setItem('goods', JSON.stringify(arr));
  }
});

window.addEventListener('click', reSaveGoods);


//----------deled good
const delGoods = (e) => {
  const delGood = e.target.closest('.basket_item_delet');
  const item = e.target.closest('.basket-item');
  const titleGood = item.querySelector('.basket-item__title').innerHTML;

  if (localStorage.getItem('goods') !== null ) {
    arr = JSON.parse(localStorage.getItem('goods'));

    if (delGood) {
      arr.forEach((elem, index) => {
        if (elem.title === titleGood) {
          arr.splice(index, 1);
        }
      });
    }
    localStorage.setItem('goods', JSON.stringify(arr));
  }
};
document.querySelector('.basket-wrapper').addEventListener('click', delGoods);


//--------- вывод из локал товаров
const renderGoods = () => {

  if (JSON.parse(localStorage.getItem('goods')) !== null) {

    basketWrapper.innerHTML = '';
    JSON.parse(localStorage.getItem('goods')).forEach((elem) => {
      basketWrapper.innerHTML += `<div class="basket-item" data-id="${elem.id}">
            <div class="basket-item__row">
              <div class="basket_container_img item__basket">
                <div href="" class="basket_catalog__image ">
                  <img class="basket_img" src="${elem.imgSrc}" alt="${elem.title}" />
                </div>
              </div>
              <div class="basket-item__title item__basket">${elem.title}</div>
              <div class="item_count flex_center item__basket">
                <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                <input class="item_total item_action_text" type="text" style="width: 30px;" value="${elem.counter}" readonly>
                <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
              </div>
              <div class="item_price item__basket">
                <span class="item_price item_action_text">
                ${elem.price}
                </span>
              </div>
              <div class="basket_item_delet item__basket">remove from cart</div>
            </div>
          </div>`;
    });
  }
};
renderGoods();
setInterval(renderGoods, 2000);


//---------- проверка колва товара в локал и на странице
const getQuantityOfgoods = () => {
  // if (goodss !== null) {
  //   if (JSON.parse(localStorage.getItem('goods')).length !== arr.length) {
  //     renderGoods();
  //     console.log('rendergoods');
  //   }
  // }
  if(basketWrapper.childElementCount === 0){
    document.querySelector('.title_checkout').classList.add('_none');
  }else{
    document.querySelector('.title_checkout').classList.remove('_none');
  }
};
const intervalGetQuantityOfgoods = setInterval(getQuantityOfgoods, 1000);



//----------------hover checkout
btnCheckout.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('title_checkout')) {
    e.target.style.backgroundColor = 'rgb(174, 230, 64)';
  }
});
btnCheckout.addEventListener('mouseup', (e) => {
  if (e.target.classList.contains('title_checkout')) {
    e.target.style.backgroundColor = 'yellowgreen';
  }
});

// -----------hover plus minus
basketWrapper.addEventListener('mousedown', hoverBtnMouseDown);

basketWrapper.addEventListener('mouseup', hoverBtnMouseUp);



//---------------удаляю товар
// basketWrapper.addEventListener('click', deleteBasketItem);

//------------сохраняю измененное количество товара
basketWrapper.addEventListener('click', counterGood);
// basketWrapper.addEventListener('click', putGood);

const titleContainerBasket = document.querySelector('.basket_title');

document.querySelector('.title_checkout').addEventListener('click', () => {
  // postBasket();
  clearInterval(intervalGetQuantityOfgoods);
  header.classList.add('_none');
  titleContainerBasket.classList.add('_none');
  basketWrapper.classList.add('_none');
  footer.classList.add('_none');
  document.querySelector('.title_checkout').classList.add('_none');
  document.querySelector('#checkout').classList.add('_none');
  document.querySelector('.form_body').classList.remove('_none');
  document.querySelector('.form').style.opacity = 1;

});


