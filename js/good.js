
const renderMoreInfoGood = async () => {
    preloader();
    const itemId = Number(window.location.search.split('?id=')[1]);

    const goodItem = await getGoodItem(itemId);
    // console.log(goodItem);
    const headerTitle = document.querySelector('.header_block_title');
    const good = document.querySelector('.good__item');
    const imgGood = document.querySelector('.product_img');
    const titleGood = document.querySelector('.item_good__title');
    const priceGood = document.querySelector('.item_price');
    headerTitle.innerHTML = goodItem.title;
    good.dataset.id = goodItem.id;
    imgGood.src = goodItem.imgSrc;
    titleGood.innerHTML = goodItem.title;
    imgGood.alt = goodItem.title;
    priceGood.innerHTML = goodItem.price;
    // console.log(itemId);
    setTimeout(preloader, 500);
};
renderMoreInfoGood();






document.querySelector('.item_action').addEventListener('click', counterGood);
document.querySelector('.item_action').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.item_action').addEventListener('mouseup', hoverBtnMouseUp);

document.querySelector('.item_action').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.item_action').addEventListener('mouseup', hoverBtnUp);




 let input = document.querySelector('.user_name');
 let text = document.querySelector('.input_review');
class Review {
    constructor(selector1,selector2,countId){

      this.selector1 = selector1;
      this.selector2 = selector2;
      this.countId = countId;
    }
  }

  const MESSAGE_URI = 'http://localhost:3000/messages';

  let contentMessage = document.querySelector('.message-content');
  let contentUserName = document.querySelector('h5');
  let nameUser = document.querySelector('#name_user');
  let textUser = document.querySelector('#review_input');
  const itemId = Number(window.location.search.split('?id=')[1]);


  const getinfo = async () => {

    const newReview = new Review (nameUser.value.trim().replace(/\s+/g, ' '),textUser.value.trim().replace(/\s+/g, ' '),itemId);
    const currentDate = new Date();
    const timeNow = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
    const dateNow =  `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
    // const data = await getResourse(`${MESSAGE_URI}`);

    if(nameUser.value.trim() !== '' && textUser.value.trim() !== ''){
      fetch(`${MESSAGE_URI}`, {
        method: 'POST',
        body: JSON.stringify({
          "message":  newReview,
          "time": timeNow,
          "date": dateNow
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



  const renderMessages = async () => {
    const messages = await getResourse(`${MESSAGE_URI}`);
    const containerMessages = document.querySelector('.message_container');
    containerMessages.innerHTML = '';

    messages.reverse().forEach((elem) => {
      if(elem.message.countId === itemId){
        containerMessages.innerHTML += `
        <div class="message-item">
        <div class="message-avatar">
            <figure class="avatar">
                <img src="" class="rounded-circle" alt="image">
            </figure>
            <div>
                <h5> ${elem.message.selector1}</h5>
                <div class="date">${elem.date}</div>
                <div class="time">${elem.time}</div>
            </div>
        </div>
        <div class="message-content">
            ${elem.message.selector2}
        </div>
    </div>
        `;
      }
    });
  };
  renderMessages();


  document.querySelector('.btn_review').addEventListener('click', function() {
    getinfo();
    renderMessages();
  });

  document.forms[0].addEventListener('submit',(e) => {
    // console.log('sdfg');
    // alert('sdfsd');
    e.preventDefault();
});



// getResourse('data/goods.json').then((data) => console.log(data));


// {
//   "id": 1,
//   "title": "Car city",
//   "imgSrc": "img/catalog/towncars.jpg",
//   "price": "10$",
//   "messages": []
// }