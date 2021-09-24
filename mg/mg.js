function dep_on() {
    document.getElementsByTagName("tahi")[0].style.display = 'block';
}
function dep_off() {
    document.getElementsByTagName("tahi")[0].style.display = 'none';
}

document.getElementsByName("addDependency")[0].addEventListener("click", function() {
    if (document.getElementsByName("addDependency")[0].checked == 1) {
        dep_on();
    } else {
        dep_off();
    }
});