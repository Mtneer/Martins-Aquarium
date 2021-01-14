import { locationList } from './locationData.js'
import { printLocationDetail } from './location.js'

// Select the div where we want to print details about the fish
let locationsDetails = document.querySelector(".locations-container")

// loop through all the party guests
const locationsObject = locationList();

export function locationsHtmlString () {
    let locationsHTMLstring = ""
    for (const locations of locationsObject) {
        locationsHTMLstring += printLocationDetail(locations)
    }
    locationsDetails.innerHTML += `<h2>Places I've Been</h2>
    <div class="places"> ${locationsHTMLstring}</div>`
    return locationsDetails
}