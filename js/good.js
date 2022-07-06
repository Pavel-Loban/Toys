const moreImg = document.querySelector('.more_img');
const headerTitle = document.querySelector('.header_block_title');
const good = document.querySelector('.good__item');
const imgGood = document.querySelector('.product_img');
const titleGood = document.querySelector('.item_good__title');
const priceGood = document.querySelector('.item_price');

const renderMoreInfoGood = async () => {
    preloader();
    const itemId = Number(window.location.search.split('?id=')[1]);

    const goodItem = await getGoodItem(itemId);

    headerTitle.innerHTML = goodItem.title;
    good.dataset.id = goodItem.id;
    imgGood.style.background = `url(${goodItem.img_src}) no-repeat`;
    imgGood.style.height = '100%';
    imgGood.style.width = '100%';
    imgGood.style.backgroundPosition = 'center';
    imgGood.style.backgroundSize = 'cover';
    titleGood.innerHTML = goodItem.title;
    imgGood.alt = goodItem.title;
    priceGood.innerHTML = goodItem.price;

    goodItem.more_image.forEach((img,index) => {
      if(index === 0){
        moreImg.innerHTML += `
      <div class="image _img active-image"><img src=${img} alt="example"></div>
      `;
      }else
      moreImg.innerHTML += `
      <div class="image _img"><img src=${img} alt="example"></div>
      `;
    });

    setTimeout(preloader, 500);
};
renderMoreInfoGood();


moreImg.addEventListener('click', (e) => {
  let images = document.querySelectorAll('.image');

  if(e.target.parentElement.classList.contains('image')){
    imgGood.style.background = `url(${e.target.src}) no-repeat`;
    imgGood.style.height = '100%';
    imgGood.style.width = '100%';
    imgGood.style.backgroundPosition = 'center';
    imgGood.style.backgroundSize = 'cover';
    images.forEach((elem) => {
      elem.classList.remove('active-image');
    });
    e.target.parentElement.classList.add('active-image');
  }
});

let bg = document.querySelector('.item_good__image ');

let fog1 = document.querySelector('.mouse-parallax-fog-1');
let fog2 = document.querySelector('.mouse-parallax-fog-2');
bg.addEventListener('mousemove', function(e) {
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
    imgGood.style.height = '300%';
    imgGood.style.width = '300%';
    imgGood.style.transform = 'translate(-' + x * 100 + '%, -' + y * 90 + '%)';
});

bg.addEventListener('mouseout', function(e) {
  imgGood.style.height = '100%';
  imgGood.style.width = '100%';
  imgGood.style.backgroundPosition = 'center';
    imgGood.style.backgroundSize = 'cover';
    let x = e.clientX / window.innerWidth;
    let y = e.clientY / window.innerHeight;
  imgGood.style.transform = 'translate(-' + x * 0 + 'px, -' + y * 0 + 'px)';
});


document.querySelector('.item_action').addEventListener('click', counterGood);
document.querySelector('.item_action').addEventListener('mousedown', hoverBtnMouseDown);

document.querySelector('.item_action').addEventListener('mouseup', hoverBtnMouseUp);

document.querySelector('.item_action').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.item_action').addEventListener('mouseup', hoverBtnUp);



//-------------------review------------
 let input = document.querySelector('.user_name');
 let text = document.querySelector('.input_review');
class Review {
    constructor(selector1,selector2,countId){

      this.selector1 = selector1;
      this.selector2 = selector2;
      this.countId = countId;
    }
  }

  // const MESSAGE_URI = 'http://localhost:3000/messages/';
  const MESSAGE_URI = 'https://toys-goods.herokuapp.com/api/messages';

  let contentMessage = document.querySelector('.message-content');
  let contentUserName = document.querySelector('h5');
  let nameUser = document.querySelector('#name_user');
  let textUser = document.querySelector('#review_input');
  const itemId = Number(window.location.search.split('?id=')[1]);


  const getinfo = async (event) => {
    event.preventDefault();
    // event.stopPropagation()
    const newReview = new Review (nameUser.value.trim().replace(/\s+/g, ' '),textUser.value.trim().replace(/\s+/g, ' '),itemId);
    const currentDate = new Date();
    const timeNow = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const dateNow =  `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;


    if(nameUser.value.trim() !== '' && textUser.value.trim() !== ''){
      event.preventDefault();

       await fetch(`${MESSAGE_URI}`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json; charset=utf-8",
          // "Content-type": "application/x-www-form-urlencoded",
        },
        body: JSON.stringify({
          "selector1":  newReview.selector1,
          "selector2":  newReview.selector2,
          "countid": newReview.itemId,
          "timemessage": timeNow,
          "datemessage": dateNow
        })

      })
      .then(
        res => {
          console.log( itemId)
          return res.json();
        }
      ).catch(err => {
          return ('!!Error', err);
        });
    }
  };




//   const postResource = async (url, sendData) =>{
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json;charset=utf-8'
//         },
//         body: JSON.stringify(sendData)
//     };

//     const res = await fetch(url, options);

//     if(!res.ok){
//         throw new Error(`Error code/// ${res.status}`);
//     }

//     return res.json();
// };
//----------------
  const renderMessages = async () => {
    const messages = await getResourse(`${MESSAGE_URI}`);
    const containerMessages = document.querySelector('.message_container');
    containerMessages.innerHTML = '';

    messages.reverse().forEach((elem) => {
      if(elem.countid === itemId){

        containerMessages.innerHTML += `
        <div class="message-item">
        <div class="message-avatar">
            <figure class="avatar">
            </figure>
            <div>
                <h5> ${elem.selector1}</h5>
                <div class="date">${elem.datemessage}</div>
                <div class="time">${elem.timemessage}</div>
            </div>
        </div>
        <div class="message-content">
            ${elem.selector2}
        </div>
    </div>
        `;
      }
    });
  };
  renderMessages();



// const formReviwe = document.querySelector('.form_review');

//   document.querySelector('.btn_review').addEventListener('click', function(e) {

//     e.preventDefault();

//     getinfo(e);
//     renderMessages();
//   });

  document.querySelector('.form_review').addEventListener('submit', function(event) {
    "use strict"
    event.preventDefault();
    // event.stopPropagation()
    // console.log('ggg');

    getinfo(event);
    input.value = '';
    text.value = '';
    renderMessages();
  });



//--------------hover submit---

const hoverSubmitDown = (e) => {
  if(e.target.classList.contains('btn_review')){
      e.target.style.backgroundColor = 'rgb(174, 230, 64)';
  }

};
const hoverSubmitUp = (e) => {
  if(e.target.classList.contains('btn_review')){
      e.target.style.backgroundColor = 'yellowgreen';
  }
};

document.querySelector('.button_container').addEventListener('mousedown',hoverSubmitDown);
document.querySelector('.button_container').addEventListener('mouseup',hoverSubmitUp);
