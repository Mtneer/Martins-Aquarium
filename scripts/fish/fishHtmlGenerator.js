import {fishList, mostHolySoldierFish, mostHolyFish, soldierFish, nonHolyFish} from './fishData.js'

import {printFishDetail} from './fishHtmlCard.js'

// Select the div where we want to print details about the fish
let fishDetails = document.querySelector(".fishCards")

// loop through all the party guests
let fishObject = mostHolySoldierFish();
fishObject = fishObject.concat(mostHolyFish());
fishObject = fishObject.concat(soldierFish());
fishObject = fishObject.concat(nonHolyFish());

console.log(fishObject)

export function fishHtmlString () {
    for (const fish of fishObject) {
        fishDetails.innerHTML += printFishDetail(fish)
    }
    return fishDetails
}