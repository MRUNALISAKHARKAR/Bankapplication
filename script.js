var num1 = 0;
var num2 = 0;

document.addEventListener('DOMContentLoaded', function() {
    generateCaptcha();
    document.getElementById("submit-btn").addEventListener("click", handleSubmit);
    document.getElementById("captcha-reload").addEventListener("click", generateCaptcha);
})

function generateCaptcha() {
    num1 = Math.floor(Math.random() * 100) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;

    document.getElementById("captcha-show").innerHTML = `${num1} + ${num2} = `;
    console.log("Captcha generated");
}

function handleSubmit() {

    var captcha_valid = false;
    var captcha_input = parseInt(document.getElementById("captcha-form").value);

    if (num1 + num2 == captcha_input) {
        captcha_valid = true;
        console.log("Captcha Correct");
    } else {
        console.log("Invalid Captcha");
    }

    localStorage.setItem("fullname", document.getElementById("fullname-field").value)
    localStorage.setItem("email", document.getElementById("email-field").value)

    // get name email on other page using:
    var fullname = localStorage.getItem("fullname");
    var email = localStorage.getItem("email");

    console.log("Submitted");
    window.location.href = "./thankyou.html";

}

function myFunction() {
    console.debug('Isnide my function callout');

}