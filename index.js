var imgs = Array.from(document.querySelectorAll(".item img"))
var boxcontainer = document.getElementById("boxContainer")
var innerbox = document.getElementById("innerBox")
var close = document.getElementById("close")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var currentIndex = 0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (eventInfo) {
        boxcontainer.style.display = "flex";
        var imgScr = eventInfo.target.getAttribute("src")
        innerbox.style.backgroundImage = "Url(" + imgscr + ")"
        currentIndex = imgs.indexOf(eventInfo.target)
    }
    )
}
close.addEventListener("click", closeSlide)
function closeSlide() {
    boxcontainer.style.display = "none";
} next.addEventListener("click", nextSlider)
function nextSlider() {
    currentIndex++;
    if (currentIndex == imgs.length) {
        currentIndex = 0;
    }

    console.log(currentIndex);
    var imgScr = imgs[currentIndex].target.getAttribute("src")
    innerbox.style.backgroundImage = "Url(" + imgScr + ")"
}
prev.addEventListener("click", prevSlider)
function prevSlider() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = imgs.length - 1;
    }

    var imgScr = imgs[currentIndex].target.getAttribute("src")
    innerbox.style.backgroundImage = "Url(" + imgScr + ")"

}