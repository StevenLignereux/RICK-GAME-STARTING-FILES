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

showHead();