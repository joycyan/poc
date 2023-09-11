var user = prompt("Enter your username:");

document.getElementById('username').innerHTML = user? user:"no_value_entered";

document.getElementById("back").onclick = function backToIndex() {
    location.href = "../html/index.html";
};