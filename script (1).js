var num1 = 0;
var num2 = 0;

document.addEventListener('DOMContentLoaded', function () {
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

function generateText() {
    console.log("generateText start");

    var num = parseInt(document.getElementById("loan-amount-field").value);

    var a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    var b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if ((num = num.toString()).length > 9) return 'overflow';
    console.log(num);

    var n = ("000000000" + num)
    n = n.substring(n.length - 9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})/);

    console.log(n);
    if (!n) return;
    var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';

    console.log("generateText end");
    console.log(str);
    document.getElementById("loan-amount-text").innerText = str;
}

function handleSubmit() {
    var fullname = document.getElementById("fullname-field");
    var email = document.getElementById("email-field");
    var pan = document.getElementById("pan-field");
    var loan_amount = document.getElementById("loan-amount-field");
    var captcha_input = parseInt(document.getElementById("captcha-form").value);

    if (!/^[A-Za-z]{4,}\s[A-Za-z]{4,}/.test(fullname.value)) {
        alert("Invalid Full Name");
        return;
    }
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        alert("Invalid Email");
        return;
    }
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}/.test(pan.value)) {
        alert("Invalid PAN");
        return;
    }
    try {
        parseInt(loan_amount.value)
    } catch (error) {
        alert("Invalid Loan Amount");
    }

    if (num1 + num2 == captcha_input) {

        localStorage.setItem("fullname", fullname.value);
        localStorage.setItem("email", email.value);

        window.location.href = "./thankyou.html";
    }
    else {
        generateCaptcha();
        alert("Invalid CAPTCHA");
    }
}