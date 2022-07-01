


// const form = () => {
//     const formBascet = document.getElementById('form');
//     const inputs = document.querySelectorAll('input');

//     const message = {
//         loading: 'Загрузка...',
//         success: 'Спасибо!',
//         failure: 'Что-то не так...'
//     };

//     const postData = async (url, data) => {
//         document.querySelector('.status').innerHTML = message.loading;
//         let res = await  fetch(url,{
//             method: "POST",
//             body:data
//         });

//         return await res.text();
//     };

//     const clearInputs = () => {
//         inputs.forEach((item) => {
//             item.value = '';
//         });
//     };

//     formBascet.addEventListener('submit', (e) => {
//         e.preventDefault();

//         let statusMessage = document.createElement('div');
//         statusMessage.classList.add('status');
//         formBascet.appendChild(statusMessage);

//         const formData = new FormData(formBascet);

//         postData(`${BASKET_URL}`,formData).then(
//             res => {
//                 console.log(res);
//                 statusMessage.innerHTML = message.success;
//             }).catch(() => {
//                 statusMessage.innerHTML = message.failure;

//             }).finally(() => {
//                 clearInputs();
//                 setTimeout(() => {
//                     statusMessage.remove();
//                 }, 5000);
//             });
//     });
// };
// window.addEventListener('DOMContentLoaded', () => {
//     "use strict";
//     // form();
// });

// export default form;


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const inputs = form.querySelectorAll('input');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
        console.log(inputs[3].value);
        // let error = formValidate(form);
    }


    const postData = async (url, data) => {

                let res = await  fetch(url,{
                    method: "POST",
                    body:data
                });

                return await res.json();
            };





    // function formValidate(form) {
    //     let error = 0;
    //     let formReq = document.querySelectorAll('._req');

    //     for (let index = 0; index < formReq.length; index++) {
    //         const input = formReq[index];
    //         // formRemoveError(input);

    //         if(input.classList.contains('_email')){
    //             if(emailTest(input)){
    //                 formAddError(input);
    //                 error++;
    //             }
    //         }else{
    //             if(input.value === ''){
    //                 formAddError(input);
    //                 error++;
    //                 console.log(error,input.parentElement);
    //             }
    //         }
    //     }
    // }

    // function formAddError (input) {
    //     // input.parentElement.classlist.add('_error');
    //     if(input.value === '')
    //     input.classlist.add('_error');
    // }
    // function formRemoveError (input)  {
    //     // input.parentElement.classlist.remove('_error');
    //     input.classlist.remove('_error');
    // }

    function emailTest (input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
// const btnForm = document.querySelector('.form__button');


// btnForm.addEventListener('submit',((e) => {
//     e.preventDefault();


// }));