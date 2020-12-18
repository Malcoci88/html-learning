
function zero(value){
    if (value < 10)
   { value = '0'+value;}
   return value;
}

var data = new Date();
document.getElementById('data').innerHTML = zero(data.getDate());

var luna = new Date();
document.getElementById('luna').innerHTML = zero(luna.getMonth()+1);

var anul = new Date();
document.getElementById('anul').innerHTML = anul.getFullYear();

var ora = new Date();
document.getElementById('ora').innerHTML = zero(ora.getHours());

var min = new Date();
document.getElementById('min').innerHTML = zero(min.getMinutes());



function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className = "nav mobile";
    } else {
        x.className = "nav";
    }
}