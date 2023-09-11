var total = prompt("What's the total?");
    
document.getElementById('price').innerHTML = total? total:"no_value_entered";

document.getElementById('username').innerHTML = document.cookie.match('(^|;)\\s*' + "username" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored'

document.getElementById("back").onclick = function backTo() {
    location.href = "../html/index.html";
};