function myFunction() {
    var vorname = document.getElementById("vorname").value;
    var name = document.getElementById("name").value;
    var straße = document.getElementById("straße").value;
    var plz = document.getElementById("plz").value;
    var ort = document.getElementById("ort").value;
    var geschlecht;
    var note;
    var abschluss = document.getElementById("abschluss").value;
    var email = document.getElementById("email").value;
    var handy = document.getElementById("handy").value;
    var bemerkung = document.getElementById("bemerkung").value;

    if (vorname == "") {
        vorname = '-'
     }

    if (name == "") {
        name = '-'
     }

    if (straße == "") {
        straße = '-'
     }

    if (plz == "") {
        plz = '-'
     }

    if (ort == "") {
        ort = '-'
     }

     if (document.getElementById("w").checked) {
        geschlecht = "w"
    } else if (document.getElementById("m").checked){
        geschlecht = "m"
    } else if (document.getElementById("d").checked){
        geschlecht = "d"
    }

    if (geschlecht == null) {
        geschlecht = "-"
    }  

    if (document.getElementById("eins").selected) {
        note = "1"
    } else if (document.getElementById("zwei").selected){
        note = "2"
    } else if (document.getElementById("drei").selected){
        note = "3"
    } else if (document.getElementById("vier").selected){
        note = "4"
    } else if (document.getElementById("fuenf").selected){
        note = "5"
    } else if (document.getElementById("sechs").selected){
        note = "6"
    }

    if (note == null) {
        note = "-"
    }  
     
     if (abschluss == "") {
        abschluss = '-'
     }

    if (email == "") {
        email = '-'
     }

    if (handy == "") {
        handy = '-'
     }

    if (bemerkung == "") {
        bemerkung = '-'
     }


alert(
    "Formular Inhalt" + "\n"+
    "Vorname:" +  vorname + "\n"+
    "Nachname:" +  name + "\n"+
    "Straße:" +  straße + "\n" +
    "PLZ:" +  plz + "\n" +
    "Ort:" +  ort + "\n" +
    "Geschlecht:" +  geschlecht + "\n" + 
    "Note:" +  note + "\n" +
    "degree:" +  abschluss + "\n" +
    "E-Mail:" +  email + "\n" +
    "Handy-Nr:" +  handy + "\n" +
    "Bemerkungen:" +  bemerkung + "\n" 
    )
}


