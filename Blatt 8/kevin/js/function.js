/*jshint esversion: 6 */

function showInformationAlert() {
    const forms = document.querySelectorAll('form');
    const form = forms[0];

    let alertMessage = "Formular Inhalt";
    Array.from(form.elements).forEach((input) => {
        if (input.type === "radio" || input.type === "reset" || input.type === "submit") {
            if (input.id === "female") {

                /* Source: https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value */
                let radios = document.getElementsByName('gender');
                for (let i = 0, length = radios.length; i < length; i++) {
                    if (radios[i].checked) {
                        alertMessage += "\nGeschlecht:" + radios[i].value;
                    }
                }
            }
            return;
        }

        if (input.value === "") {
            alertMessage += "\n" + getFilteredLabelByControl(input) + "-";
            return;
        }

        alertMessage += "\n" + getFilteredLabelByControl(input) + input.value;
    });

    alert(alertMessage);
}

/* Source: https://stackoverflow.com/questions/285522/find-html-label-associated-with-a-given-input */
function getLabelByControl(el) {
    const idVal = el.id;
    let labels = document.getElementsByTagName('label');
    for (let i = 0; i < labels.length; i++) {
        if (labels[i].htmlFor === idVal)
            // remove required asterisk cause its not in the template
            return labels[i].innerHTML;
    }
}

function getFilteredLabelByControl(el) {
    let label = getLabelByControl(el);
    if (label === "Bemerkungen:") {
        return label;
    }

    if (label === "Vorname *") {
        return "Vorname: ";
    }

    return label.replace("*", "") + ":";
}

function getPlace(plz) {
    // ForEach does not work cause return wont stop loop - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    for (let i = 0; i < arrayOfPlz.length; i++) {
        if (arrayOfPlz[i][0] === plz) {
            return arrayOfPlz[i][1];
        }
    }

    return undefined;
}

function getPlz(place) {
    for (let i = 0; i < arrayOfPlz.length; i++) {
        if (arrayOfPlz[i][1] === place) {
            return arrayOfPlz[i][0];
        }
    }

    return undefined;
}

function submitForm() {
    let place = getPlace(document.getElementById("postalcode").value);
    const postalcode = getPlz(document.getElementById("place").value);

    if (postalcode === undefined) {
        alert("Ort konnte nicht im Postleitzahlregister gefunden werden.");

        // ToDo: deprecated!
        event.preventDefault();
        return;
    }

    if (place === undefined) {
        alert("Postleitzahl und Ort stimmen nicht überein.\nMeinten Sie:" + postalcode + " " + getPlace(postalcode));
        document.getElementById("postalcode").value = postalcode;
        event.preventDefault();
        return;
    }

    showInformationAlert();
}
