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
    for(let i = 0; i < plength; i++)
    {
        let index = Math.floor(Math.random() * allowed.length)
        password = password + allowed[index]
    }

    

    return password
}

let plength = 12
let uppercase = true
let lowercase = false
let numbers = false
let special = false
let ans = password_generator(plength, uppercase, lowercase, numbers, special)
console.log(ans)
