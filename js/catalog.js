const catalog = document.querySelector('.catalog__body');
//--------------------add card------------
renderListGoods();
let cartItemHTML = '';


document.querySelector('.catalog__body').addEventListener('click', counterGood);

document.querySelector('.catalog__body').addEventListener('click', (e) => {
  // e.preventDefault();
  postData(e);

  // e.stopPropagation();

});

document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnMouseDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnMouseUp);
document.querySelector('.catalog__body').addEventListener('mousedown', hoverBtnDown);
document.querySelector('.catalog__body').addEventListener('mouseup', hoverBtnUp);

document.querySelector('.catalog__body').addEventListener('mousemove', (e) => {
  const item = e.target.parentElement;
  let n = item.querySelector('.item_total ');
  if (e.target.dataset.btn === 'btn-neg' && n.value < 2) {

    item.querySelector('[data-btn=btn-neg]').style.cursor = 'not-allowed';

  } else if (e.target.dataset.btn === 'btn-neg' && n.value > 1) {
    item.querySelector('[data-btn=btn-neg]').style.cursor = 'pointer';
  }

});



const modal = document.querySelector('#modal1');

const getModal = () => {
  modal.classList.remove('_none');
};
setTimeout(getModal, 3000);

document.querySelector('.modal_close_btn').addEventListener('click', () => {
  modal.classList.add('_none');
});

const modalInput = document.querySelector('.modal_input');

//------------ only numbers
modalInput.addEventListener('keydown', (e) => {
  if (e.keyCode === 46 || e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 27 ||
    (e.keyCode === 65 && e.ctrlKey === true) || (e.keyCode >= 35 && e.keyCode <= 39)) {
    return;
  } else {

    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  }
});

document.querySelector('.modal_send').addEventListener('mousedown', () => {
  document.querySelector('.modal_send').style.background = 'rgb(174, 230, 64)';
});

document.querySelector('.modal_send').addEventListener('mouseup', () => {
  document.querySelector('.modal_send').style.background = 'yellowgreen';
});


modalInput.addEventListener('input', (e) => {
  if (modalInput.value.length === 6) {
    modalInput.value = modalInput.value.slice(0, 4) + '(' + modalInput.value.slice(4, 6) + ')';
  }
  if (modalInput.value.length === 7) {
    modalInput.value = modalInput.value.slice(0, -1);
  }
  if (modalInput.value.length === 6) {
    modalInput.value = modalInput.value.slice(0, -2);
  }

  if (modalInput.value.length === 14 || modalInput.value.length === 11) {
    modalInput.value = modalInput.value.slice(0, -2);
  }
  if (modalInput.value.length === 10 || modalInput.value.length === 13) {
    modalInput.value = modalInput.value + '-';
  }
});




const sortCatalog = () => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (parseInt(catalog.children[i].querySelector('.item_price ').innerText) < parseInt(catalog.children[j].querySelector('.item_price ').innerText)) {
        replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};

const sortCatalogDesc = () => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (parseInt(catalog.children[i].querySelector('.item_price ').innerText) > parseInt(catalog.children[j].querySelector('.item_price ').innerText)) {
        replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};

document.querySelector('#btn_price_high').addEventListener('click', sortCatalog);
document.querySelector('#btn_price_smoll').addEventListener('click', sortCatalogDesc);


const insertAfter = (elem, refElem) => {
  return refElem.parentElement.insertBefore(elem, refElem.nextSibling);
};

const sortCatalogName = () => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (catalog.children[i].querySelector('.item_catalog__title').innerHTML > catalog.children[j].querySelector('.item_catalog__title ').innerHTML) {
        replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};
document.querySelector('#btn_a_z_high').addEventListener('click', sortCatalogName);

const sortCatalogNameRevers = () => {
  for (let i = 0; i < catalog.children.length; i++) {
    for (let j = i; j < catalog.children.length; j++) {
      if (catalog.children[i].querySelector('.item_catalog__title').innerHTML < catalog.children[j].querySelector('.item_catalog__title ').innerHTML) {
        replacedNode = catalog.replaceChild(catalog.children[j], catalog.children[i]);
        insertAfter(replacedNode, catalog.children[i]);
      }
    }
  }
};
document.querySelector('#btn_a_z_smoll').addEventListener('click', sortCatalogNameRevers);
//-----------input search

const inputSearch = document.querySelector('.input_search');
const imgSearch = document.querySelector('.img_search');

imgSearch.addEventListener('click', () => {
  inputSearch.classList.toggle('_none');
});

inputSearch.addEventListener('input', () => {
  let nameGoods = document.querySelectorAll('.item_catalog__title');

  nameGoods.forEach((elem) => {


    if (!(elem.innerHTML.toLocaleLowerCase().includes(inputSearch.value.toLocaleLowerCase())) && inputSearch.value !== '') {
      elem.closest('.catalog__column').classList.add('hidd');
      elem.closest('.catalog__column').classList.add('_none');
    } else {
      elem.closest('.catalog__column').classList.remove('_none');
    }

  });
});