//bilderna i slideshowen
var imgArray = [
    './img/yellowspringbouqet.jpeg',
    './img/rosebouqet-medium.jpeg',
    './img/Delilahsummerbouqet.jpeg'
];
var curIndex = 0;
//Hur länge varje bild ska visas
var imgDuration = 2000;

function slideShow() {
    //Bilden med id image1 ska vara lika med objekten i imgArrayen som har positionen som curlIndex säger.
    document.getElementById('image1').src = imgArray[curIndex];
    curIndex++;
    //Om curIndex blir samma värde som hur många objekt som finns i imgArray så börjar curIndex om från början
    if (curIndex == imgArray.length) { curIndex = 0; }
    //Startar funktionen igen efter en viss tid för att byta bild
    setTimeout("slideShow()", imgDuration);
}//Startar slideshowen när sidan laddas in
slideShow();