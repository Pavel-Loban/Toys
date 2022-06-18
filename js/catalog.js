
let cartItemHTML = '';
let loc;
const dat = [];
//--------------------add card------------
document.querySelector('.catalog_container').addEventListener('click',function(e){
  // if(localStorage.getItem('basket-items') !== null){
  //   cartItemHTML = localStorage.getItem('basket-items');
  // }else{
  //   cartItemHTML = '';
  // }

    if(e.target.classList.contains('item__btn_add')){


        const card = e.target.closest('.catalog__item');

        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product_img').getAttribute('src') ,
            title: card.querySelector('.item_catalog__title').innerText,
            counter: card.querySelector('.item_total').value,
            price: card.querySelector('.item_action_text').innerText,
        };

         cartItemHTML += `<div class="basket-item" data-id="${productInfo.id}">
        <div class="basket-item__row">
          <div class="basket_container_img item__basket">
            <a href="" class="basket_catalog__image ">
              <img class="basket_img" src="${productInfo.imgSrc}" alt="${productInfo.title}" />
            </a>
          </div>
          <div class="basket-item__title item__basket">${productInfo.title}</div>
          <div class="item_count flex_center item__basket">
            <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
            <input class="item_total item_action_text" type="text" style="width: 30px;" value="${productInfo.counter}" readonly>
            <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
          </div>

          <div class="item_price item__basket">
            <span class="item_price item_action_text">
            ${productInfo.price}
            </span>
          </div>
          <div class="basket_item_delet item__basket">remove from cart</div>
        </div>
      </div>`;









      // const productInfo = [card.dataset.id,
      //   card.querySelector('.product_img').getAttribute('src'),
      //   card.querySelector('.item_catalog__title').innerText,
      //   card.querySelector('.item_total').value,
      //   card.querySelector('.item_action_text').innerText];

      //  dat.forEach((elem) => {
      //   cartItemHTML += `<div class="basket-item" data-id="${elem[0]}">
      //   <div class="basket-item__row">
      //     <div class="basket_container_img item__basket">
      //       <a href="" class="basket_catalog__image ">
      //         <img class="basket_img" src="${elem[1]}" alt="${elem[2]}" />
      //       </a>
      //     </div>
      //     <div class="basket-item__title item__basket">${elem[2]}</div>
      //     <div class="item_count flex_center item__basket">
      //       <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
      //       <input class="item_total item_action_text" type="text" style="width: 30px;" value="${elem[3]}" readonly>
      //       <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
      //     </div>

      //     <div class="item_price item__basket">
      //       <span class="item_price item_action_text">
      //       ${elem[4]}
      //       </span>
      //     </div>
      //     <div class="basket_item_delet item__basket">remove from cart</div>
      //   </div>
      // </div>`;
      // // console.log(cartItemHTML);
      // }) ;
      // console.log(cartItemHTML);

      card.querySelector('.item_total').value = 1;
      // dat.push(productInfo);




        loc = localStorage.setItem('basket-items',cartItemHTML);

        // saveData();



     }
});

const saveData = () => {
  localStorage.setItem('goods',JSON.stringify(dat));
  let go = JSON.parse(localStorage.getItem('goods'));
console.log(dat);

};

// const productInfo = {
//   id: card.dataset.id,
//   imgSrc: card.querySelector('.product_img').getAttribute('src') ,
//   title: card.querySelector('.item_catalog__title').innerText,
//   counter: card.querySelector('.item_total').value,
//   price: card.querySelector('.item_action_text').innerText,
// };

const postData = (e) => {

  if(e.target.classList.contains('item__btn_add')){

    const card = e.target.closest('.catalog__item');
    // const card =document.querySelector('.catalog__item');
    // if(card.dataset.id !== undefined){
    //   card.querySelector('.item_total').value++;
    // }
    // console.log(card);

    fetch('http://localhost:3000/basket', {
      method: 'POST',
      body: JSON.stringify({
          "title": card.querySelector('.item_catalog__title').innerText,
          // "id": card.dataset.id,
          "imgSrc": card.querySelector('.product_img').getAttribute('src') ,
          "counter": card.querySelector('.item_total').value,
          "price": card.querySelector('.item_action_text').innerText
      }),
      headers : {
          "Content-type": "application/json; charset=utf-8"
      }
  }).then(
      res => {
          return res.json();
      }
  ).then(
      res =>{
          console.log(res);
      }
  )

    }


};

document.querySelector('.catalog__body').addEventListener('click',postData);

// document.querySelector('.catalog__body').addEventListener('click',(e) => {
//   if(e.target.classList.contains('item__btn_add')){

//     // const card = e.target.closest('.catalog__item');
//     postData(e);
//     e.preventDefault();
//   }
// });








window.addEventListener('storage', (e) => {

  if(localStorage.getItem('basket-items') !== null){
    localStorage.setItem('basket-items', e.newValue);
    cartItemHTML = localStorage.getItem('basket-items');
  }else{
    cartItemHTML = '';
  }
});