function link(url) {
    document.location = url;
}
var home = document.getElementById('home');
home.innerHTML = '<img src="https://reuvensplace.com/lib/icon.home.png" alt="home"/>'
home.onclick = function() {
    link('https://reuvensplace.com');
}

var web_ttt = document.getElementById('web_ttt');
web_ttt.onclick = function() {
    link('browser/');
}
