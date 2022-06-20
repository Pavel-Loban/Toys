const CATALOG_URL = 'http://localhost:3000/data';
const BASKET_URL = 'http://localhost:3000/basket';


const getResourse = async(url) => {
  try {
    const res = await fetch(url);
    return res.json();
  }catch (err) {
    console.log(err)
    throw new Error(`!!!!!!!!! ${err}`);

  }
};

const getListGood = async () => {
  const data = await getResourse(`${CATALOG_URL}`);
  // console.log(data);
  return data;
};
// getListGood();


//-----------------выводится товар на страницу
const renderListGoods = async () => {
  preloader();
  const data = await getResourse(`${CATALOG_URL}`);
  // const goodsList = await getListGood();
  // console.log(data);
  const containerGoods = document.querySelector('.catalog__body');
      containerGoods.innerHTML = '';

      data.forEach((good) => {
        containerGoods.innerHTML += `
              <div class="catalog__column">
              <div class="catalog__item item_catalog" data-id="${good.id}">
                <a href="good.html?id=${good.id}" target="_blank" class="item_catalog__image _img">
                  <img class="product_img" src="${good.imgSrc}" alt="plastic constructor" />
                </a>
                <div class="item_catalog_content">
                  <div class="content">
                    <a href="good.html?id=${good.id}" target="_blank" class="item_catalog__link">
                      <h4 class="item_catalog__title">${good.title}</h4></a>
                  </div>
                </div>
                <div class="item_action">
                  <div class="item_price">
                    <span class="item_price item_action_text">${good.price}</span>
                  </div>
                  <div class="item_count flex_center">
                    <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                  <input  class="item_total item_action_text" type="text" style="width: 30px;" value="1" readonly>
                  <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
                  </div>
                  <div class="btn_add flex_center">
                    <div  class="item__btn_add item_action_text flex_center" >Add</div>
                  </div>
                </div>
              </div>
            </div>
                `;
      });
setTimeout(preloader,100);
};

const getTenTaskcs = () => {
  fetch(`${CATALOG_URL}`).then(
    (res) => {
      // console.log(res.json());
      return res.json();
    }
  ).then(
    (data) => {
      // console.log(data);
      const containerGoods = document.querySelector('.catalog__body');
      containerGoods.innerHTML = '';

      data.forEach((good) => {
        containerGoods.innerHTML += `
              <div class="catalog__column">
              <div class="catalog__item item_catalog" data-id="${good.id}">
                <a href="" class="item_catalog__image _img">
                  <img class="product_img" src="img/catalog/constructor.jpg" alt="plastic constructor" />
                </a>
                <div class="item_catalog_content">
                  <div class="content">
                    <a href="" class="item_catalog__link">
                      <h4 class="item_catalog__title">${good.title}</h4></a>
                  </div>
                </div>
                <div class="item_action">
                  <div class="item_price">
                    <span class="item_price item_action_text">${good.price}</span>
                  </div>
                  <div class="item_count flex_center">
                    <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                  <input  class="item_total item_action_text" type="text" style="width: 30px;" value="1" readonly>
                  <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
                  </div>
                  <div class="btn_add flex_center">
                    <div  class="item__btn_add item_action_text flex_center" >Add</div>
                  </div>
                </div>
              </div>
            </div>
                `;
      });
    }
  ).catch(
    (err) => {
      console.log(err);
    }
  );
};


const getGoodItem = async (goodId = 1) => {
  const data = await getResourse(`${CATALOG_URL}`);
  // console.log(data);
  const goodItem = data.find(item => item.id === goodId);
  // console.log(goodItem);
  return goodItem;
};



//----------------сохраняю товар в json, который выбрал пользователь
const postData = (e) => {

  if (e.target.classList.contains('item__btn_add')) {

    const card = e.target.closest('.catalog__item');
      fetch(`${BASKET_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        "title": card.querySelector('.item_catalog__title').innerText,
        // "id": card.dataset.id,
        "imgSrc": card.querySelector('.product_img').getAttribute('src'),
        "counter": card.querySelector('.item_total').value,
        "price": card.querySelector('.item_action_text').innerText,
      }),
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
    }).then(
      res => {
        return res.json();
      }
    ).then(
      res => {
        console.log(res);
      }
    );
  }
};



//-------------------вывод выбранного товара в корзину
const getBasket = () => {
  preloader();
  fetch(`${BASKET_URL}`).then(
    (res) => {
      // console.log(res.json());

      return res.json();
    }
  ).then(
    (data) => {
      // console.log(data);
      //   const  basketWrapper = document.querySelector('.basket-wrapper');
      basketWrapper.innerHTML = '';

      data.forEach((good) => {
        basketWrapper.innerHTML += `<div class="basket-item" data-id="${good.id}">
            <div class="basket-item__row">
              <div class="basket_container_img item__basket">
                <a href="" class="basket_catalog__image ">
                  <img class="basket_img" src="${good.imgSrc}" alt="${good.title}" />
                </a>
              </div>
              <div class="basket-item__title item__basket">${good.title}</div>
              <div class="item_count flex_center item__basket">
                <a class="item__btn item_action_text flex_center" data-btn="btn-neg">-1</a>
                <input class="item_total item_action_text" type="text" style="width: 30px;" value="${good.counter}" readonly>
                <a class="item__btn item_action_text flex_center" data-btn="btn-pos">+1</a>
              </div>

              <div class="item_price item__basket">
                <span class="item_price item_action_text">
                ${good.price}
                </span>
              </div>
              <div class="basket_item_delet item__basket">remove from cart</div>
            </div>
          </div>`;
      });
      setTimeout(preloader, 500);
    }
  ).catch(
    (err) => {
      console.log(err);

    }
  );
};







//--------------удаляю товар из корзины

const deleteBasketItem = (e) => {

  if (e.target.classList.contains('basket_item_delet')) {
    const card = e.target.closest('.basket-item');
    const idGood = card.dataset['id'];
    fetch(`${BASKET_URL}/${idGood}`, {
      method: 'DELETE'
    }).then(
      res => {
        // console.log(res.json());

        return res.json();
      }
    ).then(
      data => {
        // console.log('DELETE:', data);
      }
    );
  }

  titleBasket();

};


//----------------меняем количество товара и сохраняем

const putGood = (e) => {
  // preloader();
  counterGood(e);

    if(e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg'){
      const counterItem = e.target.closest('.item_count');
      const card = e.target.closest('.basket-item');
      const idGood = card.dataset['id'];
      const counter = counterItem.querySelector('.item_total').value;
      console.log(counter);

      fetch(`${BASKET_URL}/${idGood}`, {
        method: 'PUT',
        body: JSON.stringify({
            "counter": counter,
            "title": card.querySelector('.basket-item__title').innerText,
            // "id": card.dataset.id,
            "imgSrc": card.querySelector('.basket_img').getAttribute('src'),
            "price": card.querySelector('.item_price').innerText
        }),
        headers : {
            "Content-type": "application/json; charset=utf-8"
        }
    }).then(
        res => {
            return res.json();
        }
    ).then(
        data =>{
            console.log('PUT:', data);
        }
    );
  }

  };

  //----------- title basket







