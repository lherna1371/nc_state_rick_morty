import { getCharacter } from 'rickmortyapi'

// const mainChar = await getCharacter(1);
let aliveCounter = 0;
let deadCounter = 0;


document.querySelector("button").addEventListener("click", function(){
    callAPI();
})

async function callAPI() {
    // 826 characters - get random
    let number = Math.ceil(Math.random()*826);
    const character = await getCharacter(number); // returns JSON

    // updated the image
    let image = document.querySelector("#character-image")
    image.src = character.data.image;
    image.alt = character.data.name;

    // display character name and status
    document.querySelector(".character-status").textContent = `${character.data.name} is ${character.data.status}`;

    character.data.status // contains dead/alive/unknown

    if  (character.data.status === "Alive") {
        aliveCounter++
    } else if (character.data.status === "Dead"){
        deadCounter++
    } else {
        console.log("Character status is Unknown!")
    }

    document.querySelector("#dead-counter").textContent = deadCounter;
    document.querySelector("#alive-counter").textContent = aliveCounter;

}