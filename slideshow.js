var imgArray = [
    './img/yellowspringbouqet.jpeg',
    './img/rosebouqet-medium.jpeg',
    './img/Delilahsummerbouqet.jpeg'
];
var curIndex = 0;
var imgDuration = 2000;

function slideShow() {
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    if (curIndex == imgArray.length) { curIndex = 0; }
    setTimeout("slideShow()", imgDuration);
}
slideShow();