// This function will accept an object and spit out an HTML representation of that object
export function printTipDetail (object) {
    let tipHTML = `<section class="card">
    <div class="fishDetail">
        <h3>${object.category}</h3>
        <ul>`
    for (let i=0; i<object.tips.length; i++) {
        tipHTML += `<li>${object.tips[i]}</li>`
    }
    tipHTML += "</div></section>"
    return tipHTML
}

