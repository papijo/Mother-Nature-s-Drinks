/* Image Loop*/

var images = [
    "images/Slider/16.jpg",
    "images/Slider/17.jpg",
    "images/Slider/18.jpg",
    "images/Slider/19.jpg",
    "images/Slider/20.jpg"
];

var num = 0;

function next() {
    var slider = document.getElementById("slider");
    num += 1;
    if (num >= images.length){
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("slider");
    num --;
    if (num < 0){
        num = images.length - 1;
    }
    slider.src = images[num];            
}