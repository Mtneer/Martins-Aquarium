let fishCards = [
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/1/1f/Dory-white.jpg",
        name: "Dory",
        size: "3 inches",
        locHarvest: "P Sherman 42 Wallaby Way Sydney",
        food: "Pretzels"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/d/de/Hank_FD.jpg",
        name: "Hank",
        size: "3 feet",
        locHarvest: "Monterey Bay Acquarium",
        food: "Twinkies"
    },
    {
        imgFile: "https://vignette.wikia.nocookie.net/findingdory/images/6/6c/Destiny_render.png",
        name: "Destiny",
        size: "20 feet",
        locHarvest: "Monterey Bay Acquarium",
        food: "Krill"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/8/83/71423763-2085-4F98-8461-FC6E2C48828E.png",
        name: "Bruce",
        size: "15 feet",
        locHarvest: "The open ocean",
        food: "Fish"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/disneyssebastiandory/images/7/7f/Nigel.png",
        name: "Nigel",
        size: "3 feet",
        locHarvest: "Sydney, Australia",
        food: "Crabs"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/0/0c/Bubbles.png",
        name: "Bubbles",
        size: "3 inches",
        locHarvest: "42 Wallaby Way Sydney",
        food: "Bubbles"
    }
]

// Select the div where we want to print details about the fish
let fishDetails = document.querySelector(".fishCards")

// This function will accept a person object and spit out an HTML representation of that person object
function printFishDetail(personObject){
    return `<section class="card">
        <img class="fish" src=${personObject.imgFile} alt="${personObject.name} picture"/>
        <div class="fishDetail">
            <h4>${personObject.name}</h4>
            <p>${personObject.size}</p>
            <p>${personObject.locHarvest}</p>
            <p>${personObject.food}</p>
        </div>
    </section>`
}

// loop through all the party guests
for(let i = 0; i < fishCards.length; i++){
    fishDetails.innerHTML += printFishDetail(fishCards[i])
}

