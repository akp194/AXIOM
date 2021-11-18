function makeitfull(event) {
    var ele = event.target.parentElement.parentElement;
    if (ele.classList.contains('fullcard')) {
        ele.classList.remove('fullcard');
    } else {
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