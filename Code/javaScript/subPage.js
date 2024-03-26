var total = prompt("How many units do you want to order?");
    
document.getElementById('price').innerHTML = total? total:"no_value_entered";

document.getElementById('username').innerHTML = document.cookie.match('(^|;)\\s*' + "Email" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored'

document.getElementById("back").onclick = function backTo() {
    location.href = "../html/index.html";
};