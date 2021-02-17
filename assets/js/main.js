const eingabeFeld = document.getElementById("eingabe_feld");
const eingabeTrennung = document.getElementById("eingabe_trennung");
const trennVor = document.getElementById("firstIn")
const trennNach = document.getElementById("secondIn")
const firstPart = document.getElementById("first_part")
const secondPart = document.getElementById("second_part")

function trennFunction() {
    let trennItem = eingabeFeld.value;
    let trennPoint = eingabeTrennung.value;
    let trennResult = trennItem.split(trennPoint)
    firstPart.innerHTML = "Vorderer Teil:";
    secondPart.innerHTML = "Hinterer Teil:";
    if (trennItem.includes(trennPoint)) {
        firstPart.style.color = "black";
        if (trennNach.checked) {
            firstPart.innerHTML += " " + trennResult[0] + trennPoint
            secondPart.innerHTML += " " + trennResult[1]
        } else {
            firstPart.innerHTML += " " + trennResult[0]
            secondPart.innerHTML += " " + trennPoint + trennResult[1]
        }
    } else {
        firstPart.style.color = "red";
        firstPart.innerHTML += " " + "Eingabefehler bei Trennzeichen!"
        secondPart.innerHTML += " " + trennItem;
    }

}
