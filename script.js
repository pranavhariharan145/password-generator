function password_generator(plength, uppercase, lowercase, numbers, special)
{
    const upperchar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowerchar = "abcdefghijklmnopqrstuvwxyz"
    const number = "1234567890"
    const specialchar = "!@#$%^&*"

    let allowed = ""
    let password = ""
    if(uppercase)
    {
        allowed = allowed + upperchar
    }
    if(lowercase)
    {
        allowed = allowed + lowerchar
    }
    if(numbers)
    {
        allowed = allowed + number
    }
    if(special)
    {
        allowed = allowed + specialchar
    }

    if(plength <= 0)
    {
        password = "Enter value more than 0"
    }
    if(allowed.length === 0)
    {
        password = "Choose any 1 option below"
    }
    for(let i = 0; i < plength; i++)
    {
        let index = Math.floor(Math.random() * allowed.length)
        password = password + allowed[index]
    }

    return password

}

let plength = 6
let uppercase = false
let lowercase = false
let numbers = false
let special = false
let text = document.getElementById("textbox")
let ucase = document.getElementById("upper")
let lcase = document.getElementById("lower")
let ncase = document.getElementById("number")
let scase = document.getElementById("special")

document.getElementById("submit").onclick = function()
{
    if(ucase.checked)
    {
        uppercase = true
    }
    else{
        uppercase = false
    }
    if(lcase.checked)
    {
        lowercase = true
    }
    else{
        lowercase = false
    }
    if(ncase.checked)
    {
        numbers = true
    }
    else{
        numbers = false
    }
    if(scase.checked)
    {
        special = true
    }
    else{
        special = false
    }
    let ans = password_generator(plength, uppercase, lowercase, numbers, special)
    text.value = ans

}
