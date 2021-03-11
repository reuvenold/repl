function check() {
    if (document.getElementById('pas').value == 'rrr009') {
        document.location = "./mainpage/";
    }
    if (document.getElementById('pas').value != 'rrr009') {
        alert('Password incorrect');
    }
}
document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 'Enter') {
        check();
    }
}
var myswitch = 1;
function change() {
    var c;
    if (myswitch == 0) {
        c = 0;
        myswitch += 1;
    } else {
        c = 1;
        myswitch -= 1;
    }
    if (c == 0) {
        document.getElementById('pas').type='password';
    } else {
        document.getElementById('pas').type='text';
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
