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

/*  Aufgabe 4
    function getPlace(postleitzahl) {
        // ForEach does not work cause return wont stop loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
        for (let i = 0; i < arrayOfPlz.length; i++) {
            if (arrayOfPlz[i][0] == postleitzahl) {
                return arrayOfPlz[i][1];
            }
        }
        return undefined;
    }
    function getPlz(platz) {
        for (let i = 0; i < arrayOfPlz.length; i++) {
            if (arrayOfPlz[i][1] == platz) {
                return arrayOfPlz[i][0];
            }
        }
        return undefined;
    }

    function submitEnde(){
        let platz = getPlace(document.getElementById("postalcode").value);
        const postalcode = getPlz(document.getElementById("place").value);

        if (postalcode === undefined) {
            alert("Ort konnte nicht im Postleitzahlregister gefunden werden.");
            event.preventDefault();
        }
    
        if (platz === undefined) {
            alert("Postleitzahl und Ort stimmen nicht überein.\nMeinten Sie:" + postalcode + " " + getPlace(postalcode));
            document.getElementById("postalcode").value = postalcode;
            event.preventDefault();
        }

    }
*/


