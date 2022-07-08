
const form = document.getElementById('form');
const btnForm = document.querySelector('.form__button');
let inputReq = document.querySelectorAll('._req');
const inputEmail = document.querySelector('._email');
const inputPhone = document.querySelector('.phone');
const BASKET_URI = 'http://localhost:3000/basket';


const postOrder = async (e) => {
    e.preventDefault();
    const totalPrice = document.querySelector('.total_price').innerHTML;
    const arrayGoodsOrder = [JSON.parse(localStorage.getItem('goods'))];
    const input = form.querySelectorAll('.form_input');
    await fetch(`${BASKET_URI}`, {
        method: 'POST',
        body: JSON.stringify({
            "goods": arrayGoodsOrder,
            "totalPrice": totalPrice,
            "locality": input[0].value,
            "street": input[1].value,
            "House": input[2].value,
            "Ent": input[3].value,
            "Floor": input[4].value,
            "Name": input[5].value,
            "Surname": input[6].value,
            "email": input[7].value,
            "Phone ": input[8].value,
            "Payment ": input[9].value
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
        });
    e.preventDefault();
};



form.addEventListener('click', (e) => {
    if (e.target.classList.contains('_req')) {
        e.target.addEventListener('blur', function () {
            if (e.target.value.trim() === '') {
                e.target.classList.add('_error');
            } else {
                e.target.classList.remove('_error');
            }
        });
    }
});

const validEmail = ((email) => {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(email);
});
const validPhone = ((phone) => {
    return !/^[0-9\s]*$/.test(phone);
});



form.addEventListener('submit', ((e) => {
    e.preventDefault();
    let emailVal = inputEmail.value;
    let phoneVal = inputPhone.value;

    let error = 0;
    inputReq.forEach((elem) => {
        if (elem.value === '') {
            elem.classList.add('_error');
            error++;
        } else {
            elem.classList.remove('_error');
        }
    });



    if (validEmail(emailVal)) {
        inputEmail.classList.add('_error');
        error++;
        console.log(error);
    } else {
        inputEmail.classList.remove('_error');
    }

    if (validPhone(phoneVal) || phoneVal === '') {
        inputPhone.classList.add('_error');
        error++;
        console.log(error);
    } else {
        inputPhone.classList.remove('_error');
    }


    const clearInputs = () => {
        form.querySelectorAll('.form_input').forEach((elem) => {

            elem.value = '';
        });
    };


    if (error === 0) {

        postOrder(e);

        localStorage.setItem('post', 'order');
        localStorage.removeItem('goods');
        clearInputs();
        // form.classList.add('_none');
        sendGoods();
    }
}));


showButton.addEventListener('click', () => {
    localStorage.clear();
    footer.classList.remove('showme');
    header.classList.remove('showme');
    document.querySelector('.basket-body').classList.remove('showme');
    basketTotalContainer.classList.remove('showme');
    window.location = 'catalog.html';
});
















