// formatting cellphone number field
new Cleave("#number-input", {
    delimiters: ["(", ")", " ", " ", "-"],
    blocks: [0, 2, 0, 1, 4, 4],
    numericOnly: true
})

// generating link
document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault()

    let number = document.getElementById("number-input").value
    number = number.replace(/\D/g, "")

    let message = document.getElementById("message-input").value
    let whatsappLink
    
    if (message.trim() === "") {
        whatsappLink = `https://api.whatsapp.com/send?phone=55${number}`
    } else {
        let encodedMessage = encodeURIComponent(message)
        whatsappLink = `https://api.whatsapp.com/send?phone=55${number}&text=${encodedMessage}`
    }

    // hiding form and showing the link
    document.getElementById("form-container").style.display = "none"
    document.getElementById("link-container").style.display = "block"

    document.getElementById("link").value = whatsappLink
})

// adding event for copying link to clipboard
document.getElementById("copy-btn").addEventListener("click", function() {
    let link = document.getElementById("link").value

    navigator.clipboard.writeText(link)

    alert("Link copied to clipboard.")
})