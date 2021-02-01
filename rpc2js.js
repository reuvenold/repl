function getPass() {
    var put = prompt('enter password: ');
    if (put === 'rrr009') {
        document.location = "https://reuvkess.github.io/repl/rpc2.html";
    }
    if (put === '') {
        document.location = "https://reuvkess.github.io/repl/rpc2gp.html"
    }
    if (put !== 'rrr009') {
        alert('Password incorrect');
        getPass();
    }
}
ctb = function () {
    document.getElementById('bod').style.backgroundColor="lightskyblue";
}
ctr = function () {
    document.getElementById('bod').style.backgroundColor = "indianred";
}
ctg = function () {
    document.getElementById('bod').style.backgroundColor="darkseagreen";
}
var t;
t = 0;
document.addEventListener("keyup", function(event) {
    if (event.key === 'b') {
        document.getElementById('bod').style.backgroundColor="lightskyblue";
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key === 'g') {
        document.getElementById('bod').style.backgroundColor="darkseagreen";
    }
});
document.addEventListener("keyup", function(event) {
    if (event.key === 'r') {
        document.getElementById('bod').style.backgroundColor="indianred";
    }
});