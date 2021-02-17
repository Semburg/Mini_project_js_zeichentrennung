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
    firstPart.style.color = "black";
    secondPart.style.color = "black";


    if (trennItem == 0 || trennItem == null, trennPoint == 0 || trennPoint == null){
        // alert("Please Fill All Required Field");
        firstPart.style.color = "red";
        secondPart.style.color = "red";
        firstPart.innerHTML += " " + "Eingabe bei Eingabefeld und/oder Trennfeld fehlt!"
        secondPart.innerHTML += " " + "Eingabe bei Eingabefeld und/oder Trennfeld fehlt!";
        return false;
    } else if (trennItem.includes(trennPoint)) {
        
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
