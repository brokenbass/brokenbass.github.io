let dino = document.getElementById('dino');
let cactus = document.getElementById('cactus');

document.addEventListener('keydown', function(event){
    jump();
});

function jump(){
    if(dino.classList != 'jump'){
        dino.classList.add('jump');
    }
    setTimeout(function(){
        dino.classList.remove('jump')
    }, 400)
}
let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){
        alert('Проиграл ты, только не плачь')
    }
}, 10);