
// function pageLoad() {
//     document.getElementById("demo").style.color = "red";
//   }

  document.getElementById("demo").onclick = function pageLoad() {
    location.href = "../html/subpage.html";
};

document.getElementById("user").onclick = function pageLoadUser() {
  location.href = "../html/user.html";
};

document.getElementById('price').innerHTML =  document.cookie.match('(^|;)\\s*' + "Price" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_entered'

document.getElementById('username').innerHTML = document.cookie.match('(^|;)\\s*' + "username" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_entered'



