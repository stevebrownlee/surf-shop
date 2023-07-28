const { getInventory } = require("./data.js")
const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")

const sequinasInventory = getInventory()

for (let surfProduct of sequinasInventory) {
    let message = ""

    if (isClothing(surfProduct)) {
        message = `${surfProduct.description} is a clothing product`
    }

    if (isGear(surfProduct)) {
        message = `${surfProduct.description} is a surfing gear product`
    }


    if (isSurfboard(surfProduct)) {
        message = `${surfProduct.description} is a surfboard`
    }

    if (isBargain(surfProduct)) {
        message = `${surfProduct.description} is currently on sale`
    }

    if (message !== "") {
        console.log(message)
    }
}

console.log("\n------------------------\n")


for (const product of sequinasInventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}

console.log("\n------------------------\n")

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' }))
