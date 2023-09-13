
// function pageLoad() {
//     document.getElementById("demo").style.color = "red";
//   }

  document.getElementById("demo").onclick = function pageLoad() {
    location.href = "../html/subpage.html";
};

document.getElementById("user").onclick = function pageLoadUser() {
  location.href = "../html/user.html";
};

document.getElementById('price').innerHTML =  document.cookie.match('(^|;)\\s*' + "Unit" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_storeded';

const str = document.cookie.match('(^|;)\\s*' + "Email" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored';

document.getElementById('username').innerHTML = decodeURI(str);

document.getElementById('pageview').innerHTML = document.cookie.match('(^|;)\\s*' + "pageviewCount" + '\\s*=\\s*([^;]+)')?.pop() || 'no_value_stored';




