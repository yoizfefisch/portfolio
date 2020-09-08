var x = document.getElementsByClassName("current-date");
var i;
for (i = 0; i <x.length; i++) {
  x[i].innerHTML = new Date().toISOString().substr(0, 10);
}