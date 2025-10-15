// ---------------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------------- //

//Getting elements
const changeColorBtn = document.querySelector("#change-color-button")
const displayColorCode = document.querySelector("#display-color-code")
const container = document.querySelector("#container")

//Declaring a Global variable
let colorCode = ""

// ---------------------------------------------------------------------------------------- //

//Getting random numbers for colorCode
const redColorGenerator = () => Math.floor((Math.random() * 255) + 1)
const greenColorGenerator = () => Math.floor((Math.random() * 255) + 1)
const blueColorGenerator = () => Math.floor((Math.random() * 255) + 1)

// ---------------------------------------------------------------------------------------- //

//Change color eventListener
changeColorBtn.addEventListener("click", () => {
    const randomColorCode = [redColorGenerator(), greenColorGenerator(), blueColorGenerator()]
    colorCode = `rgb(${[...randomColorCode]})` //Turning random numbers to proper rgb format color code.

    displayColorCode.innerText = colorCode //Replaces current color code text to new.
    container.style.transition = 'background-color ease-in-out 500ms'
    container.style.backgroundColor = colorCode

    console.log("Button Clicked") //For debugging purposes
})

//Click-to-Copy eventListener
displayColorCode.addEventListener('click', () => {
    navigator.clipboard.writeText(displayColorCode.innerText)
    displayColorCode.setAttribute("title", "Copied!")

    console.log(`${colorCode} copied.`) //For debugging purposes
})

// ---------------------------------------------------------------------------------------- //
// ---------------------------------Code Ended-------------------------------------------- //