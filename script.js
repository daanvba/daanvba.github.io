console.log("hello")

//Likebutton
var heartempty = document.querySelector('.heartempty');

heartempty.addEventListener("click", function () {
    console.log("clicked");
    heartempty.classList.toggle('heartfull');
    document.getElementById("added").innerHTML = "Het verhaal is toegevoegd aan je favorietenlijst!"
});

//Downloadbutton
var download = document.querySelector('.download');

download.addEventListener("click", function () {
    console.log("clicked");
    download.classList.toggle('downloaded');
    document.getElementById("added").innerHTML = "Het verhaal is gedownload!"
});

//Favourite
var favourite = document.querySelector('.favourite');

favourite.addEventListener("click", function () {
    console.log("clicked");
    favourite.classList.toggle('favouriteadded');
    document.getElementById("added").innerHTML = "Het verhaal is toegevoegd aan je favorietenlijst!"
});