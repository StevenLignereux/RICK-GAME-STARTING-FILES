const clouds     = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads      = document.querySelectorAll(".mole");


let lastCloud;
let timeUp = false;
let score  = 0;

// Fonction qui renvoit un temps aléatoire
function randomTime(min, max) {
    
    return Math.round(Math.random(max - min) * min);

}

// Fonction qui renvoit un nuage aléatoire parmi les 6
function randomCloud(clouds) {
    
    const indexCloud  = Math.floor(Math.random()  * clouds.length);
    const cloudSelect = clouds[indexCloud];

    if (cloudSelect === lastCloud) {
        
        return randomCloud(clouds);

    }
    lastCloud = cloudSelect;

    return cloudSelect;
}



// Fonction pour afficher les têtes
function showHead() {
    
    const time  = randomTime(600, 1000);
    const cloud = randomCloud(clouds);

    cloud.classList.add("up");

    setTimeout(() => {

        if (!timeUp) showHead();
        cloud.classList.remove("up");

    }, time);
}

function playerScore(event) {

    if (!event.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;

}

heads.forEach(head => head.addEventListener("click", playerScore));

function startGame() {
    
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead();

    setTimeout(() => {

        timeUp = true;

        setTimeout(() => {

            scoreBoard.textContent = "end";

        }, 2000);

    }, 10000);

}

/* NIVEAUX */

var speed = 50;
var i = 0;
var text1 = "NOVICE";
var j = 0;
var text2 = "APPRENTI";
var k = 0;
var text3 = "EXPERT";

function typeWriter1() {
    
    if (i < text1.length) {
        
        document.getElementById("demo1").innerHTML += text1.charAt(i); 
        i++;
        setTimeout(typeWriter1, speed);

    }
}

function typeWriter2() {
    
    if (j < text2.length) {
        
        document.getElementById("demo2").innerHTML += text2.charAt(j); 
        j++;
        setTimeout(typeWriter2, speed);

    }
}

function typeWriter3() {
    
    if (k < text3.length) {
        
        document.getElementById("demo3").innerHTML += text3.charAt(k); 
        k++;
        setTimeout(typeWriter3, speed);

    }
}

document.getElementById("morty-play").addEventListener('click', function () { 

    typeWriter1();
    typeWriter2();
    typeWriter3();

});