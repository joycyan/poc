var total = prompt("What's the total?");
    
document.getElementById('price').innerHTML = total? total:"no_value_entered";


document.getElementById("back").onclick = function backTo() {
    location.href = "../html/index.html";
};