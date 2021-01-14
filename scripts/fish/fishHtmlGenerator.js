import {fishList} from './fishData.js'
import {printFishDetail} from './fishHtmlCard.js'

// Select the div where we want to print details about the fish
let fishDetails = document.querySelector(".fishCards")

// loop through all the party guests
const fishObject = fishList();

export function fishHtmlString () {
    for (const fish of fishObject) {
        fishDetails.innerHTML += printFishDetail(fish)
    }
    return fishDetails
}