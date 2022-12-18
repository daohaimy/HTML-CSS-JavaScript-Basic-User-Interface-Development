
//  Aufgabe 3: Santa Maus
var iconWidth = 400;
var iconHeight = 140;

// Maus
function setIcon(){
mouseIcon = document.createElement('img');
mouseIcon.setAttribute("src", "./img/santa.png");
mouseIcon.setAttribute("width", iconWidth);
mouseIcon.setAttribute("height", iconHeight);

mouseIcon.style.position = 'absolute';
mouseIcon.style.left = 50 + 'px';
mouseIcon.style.top = 50 + 'px';

document.getElementById("icon").appendChild(mouseIcon);
}

function moveIcon(x, y, movementX){

mouseIcon.style.top = y - 17 + 'px';

if(movementX < 0){
    mouseIcon.style.transform = 'scaleX(-1)';
    mouseIcon.style.left = x+401- iconWidth + 'px';
}
else{
    mouseIcon.style.transform = 'scaleX(1)';
    mouseIcon.style.left = x-401 + 'px';  
}
}
window.addEventListener('mousemove', function(e){
console.log(e);
moveIcon(e.clientX, e.clientY, e.movementX);
});




//  Aufgabe 2: Geschenke
// maximalwerte px für x y
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

console.log('Width: ' + windowWidth + ' Height: ' + windowHeight);

//Länge und Breite der Geschenke
var itemWidth = 90;
var itemHeight = 90;

//Anzahl der Geschenke
var elementsCountX = Math.floor(windowWidth/itemWidth);
var elementsCountY = Math.floor(windowHeight/itemHeight);
var maximumElements = elementsCountX*elementsCountY;
var totalitemCount = 24;

//Array
var anArrayOfUniqueNumbers = [];

//start
var numberGenerator = function(arr){
    if(arr.length >= totalitemCount) return;
        var newNumber = Math.floor(Math.random() * maximumElements);
    if(arr.indexOf(newNumber) < 0){
        arr.push(newNumber);
    }
    numberGenerator(arr);
};
//end

function setItems(){
    numberGenerator (anArrayOfUniqueNumbers, maximumElements-1);
    var items = [];
    for(var i = 0; i < totalitemCount; i++){
        var cell = anArrayOfUniqueNumbers[i];
        var row = Math.floor(cell/elementsCountX); // Zeile
        var column = cell-row*elementsCountX; // Spalte
        console.log('row: ' + row + ' column: ' + column);

        items[i] = document.createElement('img');
        items[i].setAttribute("src", "./img/present.png");
        items[i].setAttribute("width", itemWidth);
        items[i].setAttribute("height", itemHeight)

        // position von Geschenke
        items[i].style.position = 'absolute'
        items[i].style.left = column*itemWidth + 'px';
        items[i].style.top =  row*itemHeight + 'px';


        /*  Aufgabe 2 Nummer versuchen (Part 1)
        let n = i + 1;

        $(".nummer").append(items);
        $(".nummer").append("<label id='label" + n + "'>" + n + "</label>");
        $("#label" + n).css({
            color: "white",
            position: "absolute",
            left: column * imgWidth + imgWidth / 2 + 'px',
            top: row * imgHeight + imgHeight / 2 + 'px'
        });
        */
        

        /*Aufgabe 2: Nummer versuchen (Part 2)
        nummer[i] = document.createElement('h6');
        nummer[i].setAttribute("width", itemWidth);
        nummer[i].setAttribute("height", itemHeight)

        // position von Nummer
        nummer[i].style.position = 'absolute'
        nummer[i].style.left = column*itemWidth /2 + 'px';
        nummer[i].style.top =  row*itemHeight /2 + 'px';
        nummer[i].style.color = 'white';
        */
        

    document.getElementById("item").appendChild(items[i]); // scheint Geschenke
    //document.getElementById("nummer").appendChild(nummer[i]);
    }
    console.log('number Generator: ' + anArrayOfUniqueNumbers);
}



/*Aufgabe 4: Spiel versuchen
let nummern = 0;
let anfangZeit, endZeit;
function spiel(el){
    let play = el.play;

    console.log(lastNumber + 1 === parseInt(play));

    if (nummern + 1 === parseInt(play)) {
        $(el).css("visibility", "hidden");
        $("#label" + play).css("visibility", "hidden");
        nummern++;
    }

    if (nummern === 1) {
        anfangZeit = window.performance.now();
    }

    if (nummern === 24) {
        endZeit = window.performance.now();
        const zeit = endZeit - anfangZeit;
        $(".countdown").text("benöftige Zeit: " + countdownZeit(zeit));
        gewinnen();
    }

}

function gewinnen(){
    $(".endeNachricht").css("visibility", "visible");
    $(".endeZeit").css("visibility", "visible");
}

*/


/*  Aufgabe 4 (Zusatzpunkte) versuchen
const countdownMinuten = 5;
let zeit = countDownMinuten * 60;

const countdown = document.getElementById('countdown');

setInterval(updateCountDown, 1000);

function updateCountdown(){
    const minutes = Math.floor(zeit/60);
    let seconds = zeit % 60;

    if (minutes < 10){
        minutes = "0" + minutes;
        }
    if (seconds < 10){
        seconds = "0" + seconds;
        }

    countdown.innerHTML = minutes + ":" + seconds;
    zeit--;
}
*/
/*
const countdownMinuten = 05;
let zeit = countDownMinuten * 60;
const countdown = document.getElementById('countdown');

function countdownZeit(){
    const minutes = Math.floor(zeit/60);
    let seconds = zeit % 60;

    if (minutes < 10){
        minutes = "0" + minutes;
        }
    if (seconds < 10){
        seconds = "0" + seconds;
        }

    countdown.innerHTML = minutes + ":" + seconds;
}
*/



window.onload = function(){
// onload: wenn man Seite neu lädt
    setItems();
    setIcon();
}


/*  Übung für onresize
window.onresize = function(){
    // onload: wenn man Seite neu lädt
    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;
    elementsCountX = Math.floor(windowWidth/itemWidth);
    elementsCountY = Math.floor(windowHeight/itemHeight);
    maximumElements = elementsCountX*elementsCountY;

    // all child elemets löschen
    const myNode = document.getElementById("item");
        while(myNode.firstChild){
            myNode.removeChild(myNode.lastChild);
        }
        setItems();
    
    }
    */



