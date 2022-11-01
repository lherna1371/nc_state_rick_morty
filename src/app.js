import { getCharacter } from 'rickmortyapi'

const mainChar = await getCharacter(1);
let aliveCounter = 0;
let deadCounter = 0;


document.querySelector("button").addEventListener("click", function(){
    callAPI();
})

async function callAPI() {
    // 826 characters - get random
    let number = Math.ceil(Math.random()*826);
    const character = await getCharacter(number);

    removeCurrentImage()

    // call a function to figure out if the character is dead/alive and increment counter on page

    let image = document.createElement("img");
    image.setAttribute("src", character.data.image);
    image.setAttribute("alt", character.data.name);
    image.setAttribute("id", "character-image")
    document.querySelector(".character-profile").append(image);
}


function removeCurrentImage() {
    document.querySelector("#character-image").remove();
}