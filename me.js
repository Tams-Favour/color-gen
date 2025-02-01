const hexadecimalNumberSystem = [0,1,2,3,4,5,6,7,8,9,`A`,`B`,`C`,`D`,`E`,`F`]
let button = document.getElementById("button")
let firstHexCode = document.getElementById("first-hex-code")
let firstColorBox = document.getElementById("first-color-box")
let secondColorBox = document.getElementById("second-color-box")
let secondHexCode = document.getElementById("second-hex-code")
let thirdColorBox = document.getElementById("third-color-box")
let thirdHexCode = document.getElementById("third-hex-code")
let fourthColorBox = document.getElementById("fourth-color-box")
let fourthHexCode = document.getElementById("fourth-hex-code")
let fifthColorBox = document.getElementById("fifth-color-box")
let fifthHexCode = document.getElementById("fifth-hex-code")
let sixthColorBox = document.getElementById("sixth-color-box")
let sixthHexCode = document.getElementById("sixth-hex-code")

let mine = document.getElementById("mine")

function generateRandomNumber(){
    let randomNumber = Math.floor(Math.random() * hexadecimalNumberSystem.length)
    return randomNumber
}


button.addEventListener(`click` ,function(){
    // first color code
    let hexCodeForFirstBox = `#`
    for(let x = 0;  x < 6; x++){
        hexCodeForFirstBox +=  hexadecimalNumberSystem[generateRandomNumber()]
    }
    firstColorBox.style.backgroundColor = hexCodeForFirstBox
    firstHexCode.textContent = hexCodeForFirstBox

    // second color code
    let hexCodeForSecondBox = `#`
    for (let y = 0; y < 6; y++){
        hexCodeForSecondBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    secondColorBox.style.backgroundColor = hexCodeForSecondBox
    secondHexCode.textContent = hexCodeForSecondBox

    // third color code
    let hexCodeForThirdBox = `#`
    for (let z = 0; z < 6; z++){
        hexCodeForThirdBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    thirdColorBox.style.backgroundColor = hexCodeForThirdBox
    thirdHexCode.textContent = hexCodeForThirdBox

    // fourth color code
    let hexCodeForFourthBox = `#`
    for (let b = 0; b < 6; b++){
        hexCodeForFourthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fourthColorBox.style.backgroundColor = hexCodeForFourthBox
    fourthHexCode.textContent = hexCodeForFourthBox
    
    // fifth color code
    let hexCodeForFifthBox = `#`
    for (let b = 0; b < 6; b++){
        hexCodeForFifthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    fifthColorBox.style.backgroundColor = hexCodeForFifthBox
    fifthHexCode.textContent = hexCodeForFifthBox
    
    // sixth color code
    let hexCodeForSixthBox = `#`
    for (let b = 0; b < 6; b++){
        hexCodeForSixthBox += hexadecimalNumberSystem[generateRandomNumber()]
    }
    sixthColorBox.style.backgroundColor = hexCodeForSixthBox
    sixthHexCode.textContent = hexCodeForSixthBox
    

})



mine.addEventListener(`click`,function(){
    firstHexCode.textContent = "color code"
    firstColorBox.style.backgroundColor = "#d7d7d7"

    secondHexCode.textContent = "color code"
    secondColorBox.style.backgroundColor = "#c4c4c4"

    thirdHexCode.textContent = "color code"
    thirdColorBox.style.backgroundColor = "#d7d7d7"

    fourthHexCode.textContent = "color code"
    fourthColorBox.style.backgroundColor = "#c4c4c4"

    fifthHexCode.textContent = "color code"
    fifthColorBox.style.backgroundColor = "#d7d7d7"

    sixthHexCode.textContent = "color code"
    sixthColorBox.style.backgroundColor = "#c4c4c4"
   
})
