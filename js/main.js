const sliderElem = document.getElementById("slider");
const chairElem = document.getElementById("chair");
const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
]
sliderElem.addEventListener ("input", function(event) {
    //console.log("changed");
    console.log(event.currentTarget.value);
    const index = event.currentTarget.value;
    console.log(images [index]);
    const newSrc = images[index];

    //chairElem.src = newSrc;
    chairElem.setAttribute("src", newSrc);
});