var user = prompt("Enter your username:");

document.getElementById('username').innerHTML = user? user:"no_value_entered";

document.getElementById('price').innerHTML =  document.cookie.match('(^|;)\\s*' + "Price" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored'


document.getElementById("back").onclick = function backToIndex() {
    location.href = "../html/index.html";
};