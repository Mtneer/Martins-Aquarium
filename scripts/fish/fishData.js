let fishCards = [
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/1/1f/Dory-white.jpg",
        name: "Dory",
        size: 3,
        locHarvest: "P Sherman 42 Wallaby Way Sydney",
        food: "Pretzels"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/d/de/Hank_FD.jpg",
        name: "Hank",
        size: 36,
        locHarvest: "Monterey Bay Acquarium",
        food: "Twinkies"
    },
    {
        imgFile: "https://vignette.wikia.nocookie.net/findingdory/images/6/6c/Destiny_render.png/revision/latest?cb=20160520041520",
        name: "Destiny",
        size: 240,
        locHarvest: "Monterey Bay Acquarium",
        food: "Krill"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/8/83/71423763-2085-4F98-8461-FC6E2C48828E.png",
        name: "Bruce",
        size: 180,
        locHarvest: "The open ocean",
        food: "Fish"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/disneyssebastiandory/images/7/7f/Nigel.png",
        name: "Nigel",
        size: 36,
        locHarvest: "Sydney, Australia",
        food: "Crabs"
    },
    {
        imgFile: "https://static.wikia.nocookie.net/pixar/images/0/0c/Bubbles.png",
        name: "Bubbles",
        size: 3,
        locHarvest: "42 Wallaby Way Sydney",
        food: "Bubbles"
    }
]

export const fishList = () => {
    return fishCards.slice()
}

export const mostHolySoldierFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holySoldierFish = [];

    for (let i=0; i<fishCards.length; i++) {
        if (fishCards[i].size % 3 === 0 && fishCards[i].size % 5 === 0) {
            holySoldierFish.push(fishCards[i]);
        }
    }

    return holySoldierFish
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = [];

    for (let i=0; i<fishCards.length; i++) {
        if (fishCards[i].size % 3 === 0 && fishCards[i].size % 5 === 0) {

        } else if (fishCards[i].size % 3 === 0) {
            holyFish.push(fishCards[i]);
        }
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = [];

    for (let i=0; i<fishCards.length; i++) {
        if (fishCards[i].size % 3 === 0 && fishCards[i].size % 5 === 0) {
            
        } else if (fishCards[i].size % 5 === 0) {
            holyFish.push(fishCards[i]);
        }
    }

    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const regularFish = [];

    for (let i=0; i<fishCards.length; i++) {
        if (fishCards[i].size % 3 !== 0 && fishCards[i].size % 5 !== 0) {
            regularFish.push(fishCards[i]);
        }
    }

    return regularFish
}

