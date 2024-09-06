const element = document.querySelector("#svar")
let passord
let tries = 0

function skrivpassord(){
    passord = prompt("Skriv inn passord:")
}
function sjekkpassord(){
    if(passord === "0609") {
        element.innerHTML = "Riktig Passord!"
    }else {
    tries++
    element.innerHTML = "Feil Passord"
    if(tries >= 3)
        element.innerHTML = "tom for forsøk!"
        window.sjekkpassordEnabled = false


}
}