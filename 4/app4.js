const tell = document.querySelector("#count")
const klikk = document.querySelector("#click")




function count() {
    let i = 1; 
while (i <= 10) { 
    tell.innerHTML += i + "<br>";
    i++; 

}
}

for (let o = 1; o <= 10; o++) {
    klikk.innerHTML += o + "<br>";
}
