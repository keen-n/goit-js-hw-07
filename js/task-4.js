const form = document.querySelector('.login-form');

form.addEventListener("submit", e => {
    e.preventDefault();

    const email = form.elements.email;
    const password = form.elements.password;

    if (email.value.trim() === '' || password.value.trim() === '') {
        return alert('All form fields must be filled in');
    }

    const formData = {
        email: email.value.trim(),
        password: password.value.trim(),
    }
    
    console.log(formData);  
    form.reset();

});

const inputs = document.querySelectorAll('label input');
inputs.forEach(input => { input.classList.add('input-form') });


