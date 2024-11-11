// Маска
document.addEventListener('DOMContentLoaded', function() {
    $('#phone').mask('+7 (000) 000-00-00');
});


//Валидация email
let inputEmail = document.querySelector('#email');
let emailValue = inputEmail.value;
let emailError = document.querySelector('#email-error');
if(emailValue.includes('@')) {
    emailError.textContent = ""
} else {
    emailError.textContent = "Введите корректный e-mail, пример: ivan@gmail.com"
};


//Валидация поля ввода ожидаемого оборота
let expectations = document.querySelector('#expectations');
let expectValue = expectations.value;
let parsedExpect = parseFloat(expectValue);
let exceptError = document.querySelector('#expect-error');

if (isNaN(parsedExpect) || parsedExpect <= 0) {
    exceptError.textContent = "Введите положительное число";
} else {
    exceptError.textContent = "";
}


// Отправка формы
let form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {
    event.preventDefault(); 
    let success = document.querySelector('#success');
    console.log(success);

    // *Вариант отправки данных через api*
    // let formData = new FormData(form);
    // try {
    //     const response = await fetch('/url', {
    //         method: 'POST',
    //         body: formData,
    //     });
    //     const data = await response.json();
    //     console.log(data); 
    //     if (response.ok) {
    //         success.classList.add('active');
    //         setTimeout(() => success.classList.remove('active'), 2000);
    //     } else {
    //         console.log('Ошибка запроса');
    //     }
    // } catch (error) {
    //     console.log('Error:', error);
    // }

    // *Вариант отправки, для отображения результата*
    try {
        setTimeout(() => {
            success.classList.add('active');
            setTimeout(() => success.classList.remove('active'), 2000);
        }, 0); 
    } catch (error) {
        console.log('Error:', error);
    }
});