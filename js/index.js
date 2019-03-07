var container = document.getElementById("main-container");
var image = document.getElementsByClassName("bg-img");
var overlay = document.getElementsByClassName("overlay-img");
var title = document.getElementsByClassName("main-title");

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function moveBackground(event) {
    var mouseXposition = event.clientX;
    var mouseYposition = event.clientY;
    var i;

    var calculatedXbg = mouseXposition / (windowWidth / 2);
    var calculatedYbg = mouseYposition / (windowHeight / 2);

    var calculatedX = mouseXposition / (windowWidth / 2.5);
    var calculatedY = mouseYposition / (windowHeight / 2.5);
    for(i=0; i < image.length; i++) {
        var trueIdx = i+1;
        image[i].style.transform="translate(-"+calculatedXbg.toString()+"%,-"+calculatedYbg.toString()+"%)";
        image[i].style.background="url('./img/bg"+ trueIdx.toString() + ".jpg') no-repeat";
        image[i].style.backgroundSize="cover";
        image[i].style.backgroundPosition ="center";
        overlay[i].style.transform="translate(-"+calculatedX.toString()+"%,-"+calculatedY.toString()+"%)";
        overlay[i].style.background="url('./img/overlay"+ trueIdx.toString() + ".png') no-repeat";
        overlay[i].style.backgroundSize="cover";
        overlay[i].style.backgroundPosition ="center";
    }
}

container.addEventListener("mousemove", moveBackground);

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slideshow");
    if (n > slides.length) {slideIndex=1}
    if (n < 1) {slideIndex = slides.length}
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display="block";
    title[1].style.padding="0 3em";
    title[2].style.padding="0em 4.5em";
}

function openImg(imgName) {
    var i, x;
    x = document.getElementsByClassName("picture");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(imgName).style.display = "block";
  }

function opentab(tabName) {
    var i, x, tabs, contentClass;
    x = document.getElementsByClassName("tabcontent");
    for(i = 0; i< x.length; i++) {
        x[i].style.display = "none";
    }
    
    contentClass = document.getElementsByClassName("content-container");
    tabs = document.getElementsByClassName("nav ul li a");
    for(i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
        console.log(tabs[i].className);
    }

    if(tabName === 'about') {
        document.getElementById(tabName).style.display = "flex";
        for(i=0; i < contentClass.length; i++) {
            contentClass[0].style.background = "url('../img/abt-bg.jpg')";
            contentClass[0].style.backgroundSize="cover";
            contentClass[0].style.backgroundPosition ="center";
        }
        $("nav ul li .abt").addClass("active");
        $("nav ul li .gal").removeClass("active");
    }

    if(tabName === 'img-gallery') {
        document.getElementById(tabName).style.display = "flex";
        for(i=0; i < contentClass.length; i++) {
            contentClass[0].style.background = "url('../img/gallery-bg.jpg')";
            contentClass[0].style.backgroundSize="cover";
            contentClass[0].style.backgroundPosition ="center";
        }
        $("nav ul li .gal").addClass("active");
        $("nav ul li .abt").removeClass("active");
        
    }
}

$(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".content-container").toggleClass("item_open");
    return false;
  });

  window.addEventListener("load", function(){
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
  });