var emailInput = document.getElementById('email');
var emailError = document.getElementById('emailError');
var noEmailCheckbox = document.getElementById('noEmail');

emailInput.addEventListener('input', function () {
    emailError.textContent = '';
});

document.getElementById('continueButton').addEventListener('click', function () {
    var name = document.getElementById('name').value.trim();
    var day = document.getElementById('day').value.trim();
    var month = document.getElementById('month').value.trim();
    var year = document.getElementById('year').value.trim();
    var email = emailInput.value.trim();
    var noEmailChecked = noEmailCheckbox.checked;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('birthday', day + '/' + month + '/' + year);
    localStorage.setItem('noEmailChecked', noEmailChecked);

    var nameError = document.getElementById('nameError');
    var birthdayError = document.getElementById('birthdayError');

    nameError.textContent = '';
    birthdayError.textContent = '';
    emailError.textContent = '';

    if (name == '') {
        nameError.textContent = '*Please insert a name.';
    }
    if (day == '' || month == '' || year == '') {
        birthdayError.textContent = '*Please insert a birthday.';
    }
    if (email == '' && !noEmailChecked) {
        emailError.textContent = '*Please insert a valid email address.';
    }
    
    if (name != '' && day != '' && month != '' && year != '' && (email != '' || noEmailChecked)) {
        window.location.href = 'Page3.html';
    } else {
        alert("Unable to proceed to Page 3.");
    }
});
