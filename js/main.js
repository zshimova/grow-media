// Маска для телефона 
document.addEventListener('DOMContentLoaded', function() {
    $('#phone').mask('+7 (000) 000-00-00');
});



// Отправка формы
let form = document.querySelector('.form');
form.addEventListener('submit', async (event) => {    
    event.preventDefault(); 
    let isValid = true;

    // Валидация имени
    let inputName = document.querySelector('#name');    
    let nameValue = inputName.value;
    let nameError = document.querySelector('#name-error');    
    if (nameValue === "") {
        nameError.textContent = "Введите Ваше имя";        
        isValid = false;   
    } else {
        nameError.textContent = "";        
    }
   
    // Валидация email
    let inputEmail = document.querySelector('#email');    
    let emailValue = inputEmail.value;
    let emailError = document.querySelector('#email-error');    
    if (emailValue.includes('@') && emailValue.includes('.')) {
        emailError.textContent = "";    
    } else {
        emailError.textContent = "Введите корректный e-mail, пример: ivan@gmail.com";        
        isValid = false; 
    }

    // Валидация телефона
    let inputPhone = document.querySelector('#phone');    
    let phoneValue = inputPhone.value;
    let phoneError = document.querySelector('#phone-error');    
    if (phoneValue === "" || phoneValue.length < 18) {
        phoneError.textContent = "Введите корректный номер телефона";        
        isValid = false;   
    } else {
        phoneError.textContent = "";        
    }

    // Валидация поля ввода ожидаемого оборота    
    let expectations = document.querySelector('#expectations');
    let expectValue = expectations.value;    
    let parsedExpect = parseFloat(expectValue);
    let expectError = document.querySelector('#expect-error');
    if (isNaN(parsedExpect) || parsedExpect <= 0) {        
        expectError.textContent = "Введите число";
        isValid = false; 
        } else {
        expectError.textContent = "";    
    }


    // Если форма не прошла валидацию, прерываем дальнейшие действия
    if (!isValid) return;

    let success = document.querySelector('#success');  

    // Вариант отправки, для отображения результата
    try {        
        setTimeout(() => {
            success.classList.add('active');            
            setTimeout(() => success.classList.remove('active'), 2000);
        }, 0);     
        } catch (error) {
        console.log('Error:', error);    
        }  

    // Вариант отправки данных через API    
    // let formData = new FormData(form);    
    // try {
    //     const response = await fetch('/url', {            
    //         method: 'POST',
    //         body: formData,        
    //     });
    //     const data = await response.json();        
    //     if (response.ok) {
    //         success.classList.add('active');
    //         setTimeout(() => success.classList.remove('active'), 2000);        
    //     } else {
    //         console.log('Ошибка запроса');        
    //     }
    // } catch (error) {        
    //     console.log('Error:', error);
    // } 
});