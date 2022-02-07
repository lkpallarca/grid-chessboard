const startButton = document.getElementById('strt');


function shoutOutPatrick(piece, box) {
    document.getElementById(piece).classList.add('from');
    document.getElementById(box).classList.add('to');
}

function shoutOutSamson(piece, movement, box) {
    piece.classList.add(movement);
    piece.classList.remove('from');
    document.getElementById(box).classList.remove('to');
}

startButton.addEventListener('click', function() {
    this.classList.add('active');
    
    if(!document.getElementById('wp5').classList.contains('move-1')){
        shoutOutPatrick('wp5', 'moveto-1');
    }
});

document.getElementById('wp5').addEventListener('click', function() {
    if(startButton.classList.contains('active')){
        shoutOutSamson(this, 'move-1', 'moveto-1');
        
        if(!document.getElementById('bp5').classList.contains('move-2')){
            shoutOutPatrick('bp5', 'moveto-2');
        }
    }
});

document.getElementById('bp5').addEventListener('click', function() {
    if(document.getElementById('wp5').classList.contains('move-1')) {
        shoutOutSamson(this, 'move-2', 'moveto-2');
    }

    if(document.getElementById('wp5').classList.contains('move-1') && 
    !document.getElementById('wq').classList.contains('move-3')){
       shoutOutPatrick('wq', 'moveto-3');
    }

});

document.getElementById('wq').addEventListener('click', function() {
    if(document.getElementById('bp5').classList.contains('move-2')) {
        shoutOutSamson(this, 'move-3', 'moveto-3');
    }

    if(document.getElementById('bp5').classList.contains('move-2') && 
    !document.getElementById('bkn1').classList.contains('move-4')){
        shoutOutPatrick('bkn1', 'moveto-4');
    }

    if(document.getElementById('bb2').classList.contains('move-6')) {
        shoutOutSamson(this, 'move-7', 'moveto-7');
    }

    if(document.getElementById('bb2').classList.contains('move-6') && 
    this.classList.contains('move-7')){
        document.getElementById('bp6').classList.add('remove');
    }

    if(document.getElementById('wq').classList.contains('move-7')){
        document.getElementById('win').classList.remove('notYet');
    }

});

document.getElementById('bkn1').addEventListener('click', function() {
    if(document.getElementById('wq').classList.contains('move-3')) {
        shoutOutSamson(this, 'move-4', 'moveto-4');
    }

    if(document.getElementById('wq').classList.contains('move-3') && 
    !document.getElementById('bkn1').classList.contains('move-5') &&
    !document.getElementById('wb2').classList.contains('move-5')){
        shoutOutPatrick('wb2', 'moveto-5');
     }
});

document.getElementById('wb2').addEventListener('click', function() {
    if(document.getElementById('bkn1').classList.contains('move-4')) {
        shoutOutSamson(this, 'move-5', 'moveto-5');
    }

    if(document.getElementById('bkn1').classList.contains('move-4') && 
    !document.getElementById('wb2').classList.contains('move-6') &&
    !document.getElementById('bb2').classList.contains('move-6')){
        shoutOutPatrick('bb2', 'moveto-6');
     }
});

document.getElementById('bb2').addEventListener('click', function() {
    if(document.getElementById('wb2').classList.contains('move-5')) {
        shoutOutSamson(this, 'move-6', 'moveto-6');
    }

    if(document.getElementById('wb2').classList.contains('move-5') && 
    !document.getElementById('bb2').classList.contains('move-7') &&
    !document.getElementById('wq').classList.contains('move-7')){
        shoutOutPatrick('wq', 'moveto-7');
     }
});

function reset() {
    for(let i = 0; i < document.querySelectorAll('.cell > img').length; i++){
        document.querySelectorAll('.cell > img')[i].removeAttribute('class');
        document.querySelectorAll('.cell > img')[i].classList.add('piece');
    }
    
    for(let i = 0; i < document.querySelectorAll('.cell').length; i++){
        document.querySelectorAll('.cell')[i].classList.remove('to');
    }

    if(!document.getElementById('wq').classList.contains('move-7')){
        document.getElementById('win').classList.add('notYet');
    }
}

function dropdown() {
    document.getElementById('list').classList.toggle('drpdwn');
}

setTimeout(loadingScreen, 2000);

function loadingScreen(){
    document.querySelector('.loader').classList.add('stop-load');
}

$window.addEventListener("load", loadingScreen);