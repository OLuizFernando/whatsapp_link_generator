let number = document.getElementById("number-input")

number.addEventListener("input", function() {

    // removing non-numerics characters using regex and limiting to 11 digits
    let cleanValue = number.value.replace(/\D/g, "").substring(0, 11)

    // splitting the string into an array of individual characters
    let numbersArray = cleanValue.split("")

    // the variable will receive the formated number
    let formatedNumber = ""

    if (numbersArray.length > 0) {
        formatedNumber += `(${numbersArray.slice(0, 2).join("")})`
    }
    
    if (numbersArray.length > 2) {
        formatedNumber += ` ${numbersArray.slice(2, 3).join("")}`
    }

    if (numbersArray.length > 3) {
        formatedNumber += ` ${numbersArray.slice(3, 7).join("")}`
    }

    if (numbersArray.length > 7) {
        formatedNumber += `-${numbersArray.slice(7, 11).join("")}`
    }

    // sending the formated number to "number-input" field
    number.value = formatedNumber
})