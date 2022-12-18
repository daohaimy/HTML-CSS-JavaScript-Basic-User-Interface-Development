let windowHeight = window.innerHeight;
let windowWidth = window.innerWidth;

let imgWidth = 120;
let imgHeight = 100;
let iconWidth = 400;
let iconHeight = 150;

let elementCountX = Math.floor(windowWidth / imgWidth);
let elementCountY = Math.floor(windowHeight / imgHeight);
let maximumCountXY = elementCountX * elementCountY;
let totalItemCount = 24;
let usedCells = [];
let lastX = 0;
let lastNumber = 0;

let arrayOfUniqueNumbers = [];

let startTime, endTime;

mouseImg = document.createElement('img');
mouseImg.setAttribute("src", "assets/IMG/santa.png");
mouseImg.setAttribute("width", iconWidth);
mouseImg.setAttribute("height", iconHeight);
mouseImg.setAttribute("class", "santa");
mouseImg.style.position = "absolute";
mouseImg.style.left = 50 + 'px';
mouseImg.style.top = 50 + 'px';
$(".giftDiv").append(mouseImg);


$(document).mousemove(function (e) {
    window.x = e.pageX - iconWidth + iconWidth * 0.01;
    window.y = e.pageY - iconWidth * 0.04;

    mouseImg.style.top = window.y + 'px';

    if (lastX < e.pageX) {
        mouseImg.style.left = window.x + 'px';

        $(".santa").removeAttr("id");
        mouseImg.style.left = window.x + 'px';
    } else {
        $(".santa").attr("id", "santaleft");
        mouseImg.style.left = e.pageX + 'px';
    }
    lastX = e.pageX;
});


let numberGen = function (arr) {
    if (arr.length >= totalItemCount) return;
    let newNumber = Math.floor(Math.random() * maximumCountXY);
    if (arr.indexOf(newNumber) < 0) {
        arr.push(newNumber);
    }
    numberGen(arr);
};
window.onload = function () {
    numberGen(arrayOfUniqueNumbers);
    for (let i = 0; i < totalItemCount; i++) {
        let cell = getRandomNonDupCell();
        let row = Math.floor(cell / elementCountX);
        let column = cell - row * elementCountX;
        let item = document.createElement('img');
        let n = i + 1;
        item.setAttribute("src", "assets/IMG/present.png");
        item.setAttribute("width", imgWidth);
        item.setAttribute("height", imgHeight);
        item.setAttribute("id", n);
        item.setAttribute("onmouseover", "btnHover(this)");

        item.style.position = "absolute";
        item.style.left = column * imgWidth + 'px';
        item.style.top = row * imgHeight + 'px';
        $(".giftDiv").append(item);

        $(".giftDiv").append("<label id='label" + n + "'>" + n + "</label>");
        if (n < 10) {
            $("#label" + n).css({
                color: "#FFFFFF",
                fontSize: "x-large",
                position: "absolute",
                left: column * imgWidth + imgWidth / 2.1 + 'px',
                top: row * imgHeight + imgHeight / 2.2 + 'px'
            });
        } else {
            $("#label" + n).css({
                color: "#FFFFFF",
                fontSize: "x-large",
                position: "absolute",
                left: column * imgWidth + imgWidth / 2.4 + 'px',
                top: row * imgHeight + imgHeight / 2.2 + 'px'
            });
        }
    }

};

function btnHover(el) {
    let id = el.id;

    console.log(lastNumber + 1 === parseInt(id));

    if (lastNumber + 1 === parseInt(id)) {
        $(el).css("visibility", "hidden");
        $("#label" + id).css("visibility", "hidden");
        lastNumber++;
    }

    if (lastNumber === 1) {
        startTime = window.performance.now();
    }

    if (lastNumber === 24) {
        endTime = window.performance.now();

        const time = endTime - startTime;

        $(".endTime").text("Zeit: " + millisToMinutesAndSeconds(time));
        won();
    }

}

function getRandomNonDupCell() {
    let randNumber;
    do {
        randNumber = Math.floor(Math.random() * maximumCountXY);
        if (usedCells.indexOf(randNumber) <= 0) {
            break;
        }
    } while (true);
    usedCells.push(randNumber);
    return randNumber;
}

function won() {
    $(".endMessage").css("visibility", "visible");
    $(".endTime").css("visibility", "visible");
}

// https://stackoverflow.com/questions/21294302/converting-milliseconds-to-minutes-and-seconds-with-javascript
function millisToMinutesAndSeconds(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (
        parseInt(seconds) === 60 ?
            (minutes + 1) + ":00" :
            minutes + ":" + (seconds < 10 ? "0" : "") + seconds
    );
}

