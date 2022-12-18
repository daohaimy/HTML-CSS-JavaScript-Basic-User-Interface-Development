let form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(e.target);

})

function getLabelByControl(el) {
  const idVal = el.id;
  let labels = document.getElementsByTagName('label');
  for (let i = 0; i < labels.length; i++) {
      if (labels[i].htmlFor === idVal)
          // remove required asterisk cause its not in the template
          return labels[i].innerHTML;
  }
}

function Platz(postleitzahl) {
  for (let i = 0; i < arrayOfPlz.length; i++) {
      if (arrayOfPlz[i][0] === postleitzahl) {
          return arrayOfPlz[i][1];
      }
  }
  return undefined;
}


function Plz(platze) {
  for (let i = 0; i < arrayOfPlz.length; i++) {
      if (arrayOfPlz[i][1] === platz) {
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
