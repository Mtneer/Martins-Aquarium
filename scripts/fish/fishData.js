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
        imgFile: "https://vignette.wikia.nocookie.net/findingdory/images/6/6c/Destiny_render.png/revision/latest?cb=20160520041520",
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

export const fishList = () => {
    return fishCards.slice()
}