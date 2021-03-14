const signUpBtn = document.getElementById('signUpSave');
signUpBtn.addEventListener('click', validate);

const validator = {
    email: /.*@.*/,
    password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?;&]{8,}$/,
    username: /.{4,24}/,
}

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener('click', function () {

    const password = document.getElementById('password');
    if (password.type === 'password')
        password.type = "text";
    else
        password.type = 'password';
})

function validate() {
    const inputList = document.querySelectorAll('.form-floating input');
    console.log(inputList);
    inputList.forEach(x => {
        if (x.value.match(validator[`${x.id}`])) {
            x.classList.add('is-valid');
            x.classList.remove('is-invalid');
        }
        else {
            x.classList.add('is-invalid');
            x.classList.remove('is-valid');
        }
    }
    );
}
