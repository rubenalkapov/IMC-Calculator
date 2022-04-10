function sendData() {
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;
    let imcElement = document.getElementById("paragraph");
    let imcString = document.getElementById("calc");
    imcElement.textContent = "";
    imcString.textContent = "";
    const imc = poids / (taille/100)**2;

    if (imc <= 18.5) {
        imcString.textContent += "Vous êtes en sous poids";
    } else if (imc <= 24.9) {
        imcString.textContent += "Votre corpulance est normale";
    } else if (imc <= 29.9) {
        imcString.textContent += "Vous êtes en surpoids";
    } else {
        imcString.textContent += "Vous êtes obèse";
    }

    imcElement.textContent += Math.round(imc);
}
