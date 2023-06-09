const btn = document.getElementById('btn');
const mail = document.getElementById('mail');
const error = document.getElementById('error');

function isValidEmail(email) {
    // This is a simple email validation function that matches most email patterns, but not all
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

btn.addEventListener('click', () => {
    if (!isValidEmail(mail.value)){
        error.style.display = "block";
        error.innerHTML= "Please enter a valid email address";
    }
    else{
        error.innerHTML= " ";
        mail.value = " ";
    }
});


mail.addEventListener('focus', () => {
    error.style.display = "none";
    empty.style.display = "none";
})