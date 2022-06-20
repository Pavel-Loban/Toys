// getGoodItem();
// window.onload = function () {
//     document.body.classList.add('loaded_hiding');
//     window.setTimeout(function () {
//       document.body.classList.add('loaded');
//       document.body.classList.remove('loaded_hiding');
//     }, 1000);
//   }
// const preloader = () => {
//     document.body.classList.add('loaded_hiding');
//       document.body.classList.toggle('loaded');
//   };

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