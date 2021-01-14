import { tipList } from './tipsData.js'
import { printTipDetail } from './tip.js'

// Select the div where we want to print details about the fish
let tipsDetails = document.querySelector(".tips-container")

// loop through all the party guests
const tipsObject = tipList();

export function tipsHtmlString () {
    for (const tips of tipsObject) {
        tipsDetails.innerHTML += printTipDetail(tips)
    }
    return tipsDetails
}
