let fishTips = [
    {
        category: "Salinity",
        tips: ["Keep it salty", "Just dump in some salt"],
    },
    {
        category: "Temperature",
        tips: ["Very hot", "Basically boiling"],
    },
    {
        category: "Tank Cleaning",
        tips: [
            "Don't even worry about it", "Nemo will break your tank filter anyway"
        ]
    }
]

export const tipList = () => {
    return fishTips.slice()
}