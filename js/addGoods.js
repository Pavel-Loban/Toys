// const CATALOG_URL = 'http://localhost:3000/data';
const BASKET_URL = 'http://localhost:3000/basket';
const CATALOG_URL = 'https://toys-goods.herokuapp.com/api/good';

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
  return data;
};



//-----------------выводится товар на  страницу
const renderListGoods = async () => {
  const data = await getResourse(`${CATALOG_URL}`);
  const containerGoods = document.querySelector('.catalog__body');
  containerGoods.innerHTML = '';

  data.forEach((good) => {
    containerGoods.innerHTML += `
              <div class="catalog__column">
              <div class="catalog__item item_catalog" data-id="${good.id}">
                <a href="good.html?id=${good.id}" target="_blank" class="item_catalog__image _img">
                  <img class="product_img" src="${good.img_src}" alt="plastic constructor" />
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
};



const getGoodItem = async (goodId = 1) => {
  const data = await getResourse(`${CATALOG_URL}`);

  const goodItem = data.find(item => item.id === goodId);
  return goodItem;
};



let arr = JSON.parse(localStorage.getItem('goods')) || [];

const postData = (e) => {
  if (localStorage.getItem('goods') !== null) {
    arr = JSON.parse(localStorage.getItem('goods'));
  }
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

  localStorage.setItem('goods', JSON.stringify(arr));
};


const postBasket = (() => {

  const totalPrice = document.querySelector('.total_price').innerHTML;

  [...basketWrapper.children].forEach((elem) => {

    fetch(`${BASKET_URL}`, {
      method: 'POST',
      body: JSON.stringify({
        "title": elem.querySelector('.basket-item__title').innerText,
        "imgSrc": elem.querySelector('.basket_img').getAttribute('src'),
        "counter": elem.querySelector('.item_total').value,
        "price": elem.querySelector('.item_price ').innerText,
        "number": elem.dataset.id,
        "totalPrice": totalPrice
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
      }
    );
  });
});




const getCountProductsBasket = () => {

  const countBasketNavbar = document.querySelector('.amount');
  if (JSON.parse(localStorage.getItem('goods')) !== null && JSON.parse(localStorage.getItem('goods')).length === 0) {
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


const getBasket = async () => {
  preloader();
  fetch(`${BASKET_URL}`).then(
    (res) => {
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


