const CATALOG_URL = 'http://localhost:3000/data';
const BASKET_URL = 'http://localhost:3000/basket';


const getResourse = async (url) => {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.log(err);
    throw new Error(`!!!!!!!!! ${err}`);

  }
};

const getListGood = async () => {
  const data = await getResourse(`${CATALOG_URL}`);
  // console.log(data);
  return data;
};
// getListGood();


//-----------------выводится товар на  страницу
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
  setTimeout(preloader, 100);
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

//----------отдельная страница товара
const getGoodItem = async (goodId = 1) => {
  const data = await getResourse(`${CATALOG_URL}`);
  // console.log(data);

  const goodItem = data.find(item => item.id === goodId);
  // console.log(goodItem);
  return goodItem;
};


// let goodss = localStorage.getItem('goods');
let arr = JSON.parse(localStorage.getItem('goods')) || [];


//----------------сохраняю товар в json и localStorage, который выбрал пользователь
const postData = (e) => {
  console.log('postData');
  if (localStorage.getItem('goods') !== null) {
    arr = JSON.parse(localStorage.getItem('goods'));
  }
  console.log(arr);
  const card = e.target.closest('.catalog__item');
  const countGood = card.querySelector('.item_total ');

  let good = {
    "title": card.querySelector('.item_catalog__title').innerText,
    "id": card.dataset.id,
    "imgSrc": card.querySelector('.product_img').getAttribute('src'),
    "counter": card.querySelector('.item_total').value,
    "price": card.querySelector('.item_action_text').innerText,
  };

  arr.push(good);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] !== undefined && arr[i].title === arr[j].title) {
        arr[i].counter = +arr[i].counter + (+arr[j].counter);
        arr.splice([j], 1);
      }
    }
  }
  countGood.value = 1;
  // arr += good
  // console.log(arr);



  //   fetch(`${BASKET_URL}`, {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "title": card.querySelector('.item_catalog__title').innerText,
  //       // "id": card.dataset.id,
  //       "imgSrc": card.querySelector('.product_img').getAttribute('src'),
  //       "counter": card.querySelector('.item_total').value,
  //       "price": card.querySelector('.item_action_text').innerText,
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=utf-8"
  //     }
  //   }).then(
  //     res => {
  //       return res.json();
  //     }
  //   ).then(
  //     res => {
  //       console.log(res);
  //       // alert('s444');
  //     }
  //   );
  // }

  localStorage.setItem('goods', JSON.stringify(arr));
};

const postBasket = (() => {

  [...basketWrapper.children].forEach((elem) => {

    fetch(`${BASKET_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        "title": elem.querySelector('.basket-item__title').innerText,
        "imgSrc": elem.querySelector('.basket_img').getAttribute('src'),
        "counter": elem.querySelector('.item_total').value,
        "price": elem.querySelector('.item_price ').innerText,
        "number": elem.dataset.id
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
  });
});


//-------------count goods navbar

const getCountProductsBasket = () => {
  // try {
  //   const data = await getResourse(`${BASKET_URL}`);
  //   const countBasketNavbar = document.querySelector('.amount');
  //   let counter = 0;
  //   if (data.length < 1) {
  //     countBasketNavbar.classList.add('_none');
  //   } else {
  //     countBasketNavbar.classList.remove('_none');
  //     data.forEach((elem) => {
  //       counter += Number(elem.counter);
  //     });
  //     countBasketNavbar.innerHTML = counter;
  //     countBasketNavbar.style.color = 'yellowgreen';
  //   }
  // } catch (err) {
  //   console.log('Error!!!!!', err);
  // }
  const countBasketNavbar = document.querySelector('.amount');
  if (JSON.parse(localStorage.getItem('goods')).length === 0) {
    countBasketNavbar.classList.add('_none');
  }

  let resultGoods = 0;

  if (JSON.parse(localStorage.getItem('goods') !== null)) {
    JSON.parse(localStorage.getItem('goods')).forEach((elem) => {

      if (JSON.parse(localStorage.getItem('goods')).length < 1) {
        countBasketNavbar.classList.add('_none');

      } else {
        countBasketNavbar.classList.remove('_none');
        resultGoods += +elem.counter;
        countBasketNavbar.innerHTML = resultGoods;
        countBasketNavbar.style.color = 'yellowgreen';
      }
    });
  }
};

setInterval(getCountProductsBasket, 1000);

//-------------------вывод выбранного товара в корзину
const getBasket = async () => {
  preloader();
  fetch(`${BASKET_URL}`).then(
    (res) => {
      // console.log(res.json());
      return res.json();
    }
  ).then(
    (data) => {
      basketWrapper.innerHTML = '';
      data.forEach((good) => {
        basketWrapper.innerHTML += `<div class="basket-item" data-id="${good.id}">
            <div class="basket-item__row">
              <div class="basket_container_img item__basket">
                <div href="" class="basket_catalog__image ">
                  <img class="basket_img" src="${good.imgSrc}" alt="${good.title}" />
                </div>
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




  // if (e.target.classList.contains('basket_item_delet')) {
  //   const card = e.target.closest('.basket-item');
  //   const idGood = card.dataset['id'];
  //   fetch(`${BASKET_URL}/${idGood}`, {
  //     method: 'DELETE'
  //   }).then(
  //     res => {
  //       // console.log(res.json());
  //       return res.json();
  //     }
  //   ).then(
  //     data => {
  //       // console.log('DELETE:', data);
  //     }
  //   );
  // }
};


//----------------меняем количество товара и сохраняем

const putGood = (e) => {
  // preloader();
  counterGood(e);

  if (e.target.dataset.btn === 'btn-pos' || e.target.dataset.btn === 'btn-neg') {
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
      headers: {
        "Content-type": "application/json; charset=utf-8"
      }
    }).then(
      res => {
        return res.json();
      }
    ).then(
      data => {
        console.log('PUT:', data);
      }
    );
  }

};

//----------- title basket