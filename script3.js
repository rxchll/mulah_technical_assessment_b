document.addEventListener('DOMContentLoaded', function () {
    var name = localStorage.getItem('name');
    var birthday = localStorage.getItem('birthday');
    var email = localStorage.getItem('email');
    var noEmailChecked = localStorage.getItem('noEmailChecked') == 'true'; 
    var number = localStorage.getItem('phone');

    document.getElementById('nameDisplay').textContent = name || 'N/A';
    document.getElementById('emailDisplay').textContent = noEmailChecked ? 'No email provided' : (email || 'N/A');
    document.getElementById('birthdayDisplay').textContent = birthday || 'N/A';
    document.getElementById('phoneDisplay').textContent = number || 'N/A';
});
