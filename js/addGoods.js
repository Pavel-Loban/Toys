const getTenTaskcs = () => {
    fetch(`http://localhost:3000/data`).then(
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
  getTenTaskcs();






  // const getTenTaskc = () => {
  //   fetch(`http://localhost:3000/basket`).then(
  //       (res) => {
  //           return res.json();
  //       }
  //   ).then(
  //       (goods) => {
  //           // console.log(goods[0].id);
  //           document.querySelector('.catalog_container').addEventListener('click',function(e){
  //             if(e.target.classList.contains('item__btn_add')){


  //                 const card = e.target.closest('.catalog__item');

  //                 const productInfo = {
  //                     id: card.dataset.id,
  //                     imgSrc: card.querySelector('.product_img').getAttribute('src') ,
  //                     title: card.querySelector('.item_catalog__title').innerText,
  //                     counter: card.querySelector('.item_total').value,
  //                     price: card.querySelector('.item_action_text').innerText,
  //                 };
  //                 // goods = productInfo;
  //                 // console.log(goods);
  //              }

  //         });



  //       }
  //   ).catch(
  //       (err) => {
  //           console.log(err);

  //       }
  //   );
  // };
  // getTenTaskc();


