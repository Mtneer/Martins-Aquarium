

// This function will accept a person object and spit out an HTML representation of that person object
export function printFishDetail (object) {
    return `<section class="card">
        <img class="fish" src=${object.imgFile} alt="${object.name} picture"/>
        <div class="fishDetail">
            <h4>${object.name}</h4>
            <p>${object.size}</p>
            <p>${object.locHarvest}</p>
            <p>${object.food}</p>
        </div>
    </section>`
}

