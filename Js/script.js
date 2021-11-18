function makeitfull(event) {
    var ele = event.target.parentElement.parentElement;
    if (ele.classList.contains('fullcard')) {
        ele.classList.remove('fullcard');
    } else {
        var eles = document.querySelectorAll('li.fullcard');
        if (eles.length) {
            eles[0].classList.remove('fullcard');
        }
        ele.classList.add('fullcard');
    }
}

function swipeleft() {
    var eles = document.querySelectorAll('li[data-card');
    var length = eles.length;

    for (var i = 0; i < length; i++) {
        eles[i].setAttribute('data-card', parseInt(eles[i].getAttribute('data-card')) % 5 + 1);
    }
}

function swiperight() {
    var eles = document.querySelectorAll('li[data-card');
    var length = eles.length;

    for (var i = 0; i < length; i++) {
        eles[i].setAttribute('data-card', (parseInt(eles[i].getAttribute('data-card')) + 3) % 5 + 1);
    }
}

function showontop(event) {
    cname = event.target.dataset.cardname;
    var ele1 = document.querySelector(`.slides li.${cname}`);
    var ele2 = document.querySelector(`.slides li[data-card="3"]`);
    ele2.setAttribute("data-card", ele1.dataset.card);
    ele1.setAttribute("data-card", "3");

    if (ele2.classList.contains("fullcard")) {
        ele2.classList.remove("fullcard");
        ele1.classList.add("fullcard");
    }
}


function leftswipe() {
    swiperight();
}

function rightswipe() {
    swipeleft();
}

var startingx, startingy, movingx, movingy;
function touchStart(evt) {
    startingx = evt.touches[0].clientX;
    startingy = evt.touches[0].clientY;
}

function touchMove(evt) {
    movingx = evt.touches[0].clientX;
    movingy = evt.touches[0].clientY;
}

function touchEnd() {
    // alert(startingx + 100 < movingx); //right
    // alert(startingx - 100 > movingx); //left
    // alert(startingy - 100 > movingy); //up
    // alert(startingy + 100 < movingy); //down

    if (Math.abs(startingx - movingx) > 100) {
        if (startingx + 100 < movingx) {
            rightswipe();
        }
        else if (startingx - 100 > movingx) {
            leftswipe();
        }
    }
    startingx = undefined;
    startingy = undefined;
    movingx = undefined;
    movingy = undefined;
}

