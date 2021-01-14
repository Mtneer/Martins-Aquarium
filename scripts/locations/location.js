// This function will accept an object and spit out an HTML representation of that object
export function printLocationDetail (object) {
    return `<section>
    <img class="location" src="${object.image}" alt="Picture of ${object.locationName}">
    <p class="location_caption">${object.locationName}</p>
    </section>
    `
}


