// Function named myFunction that console logs the string in the text box
function retrievePatient(goBoolean) {
    console.log(document.getElementById("patientIdentifier").value);

    // Create string variable
    var patientIdentifier = document.getElementById("patientIdentifier").value;

    // Create a new variable that is the string variable with the string "Patient ID: " concatenated to it
    var output = "Patient?identifier=" + patientIdentifier;

    // Store serviceRootURL in a variable from text box with id serviceRootURL
    var serviceRootURL = document.getElementById("serviceRootURL").value;

    // If serviceRootURL ends with a slash, remove it
    if (serviceRootURL.endsWith("/")){
        serviceRootURL = serviceRootURL.slice(0, -1);
    }

    // Changes the text in the div to the string in the text box
    document.getElementById("output").innerHTML = serviceRootURL + '/' + output;

    if (goBoolean == true) {

        window.open(
            serviceRootURL + '/' + output,
            '_blank' // <- This is what makes it open in a new window.
        )

    }
}

function retrieveObservation(goBoolean) {
    console.log(document.getElementById("patientIdentifier").value);

    // Create string variable
    var patientIdentifier = document.getElementById("patientIdentifier").value;

    // Create a new variable that is the string variable with the string
    var output = "Observation?subject:Patient.identifier=" + patientIdentifier;

    // Store serviceRootURL in a variable from text box with id serviceRootURL
    var serviceRootURL = document.getElementById("serviceRootURL").value;

    // If serviceRootURL ends with a slash, remove it
    if (serviceRootURL.endsWith("/")){
        serviceRootURL = serviceRootURL.slice(0, -1);
    }

    var outputURL = serviceRootURL + '/' + output;
    // Changes the text in the div to the string in the text box
    document.getElementById("output").innerHTML = outputURL;

    if (goBoolean == true) {

        window.open(
            outputURL,
            '_blank' // <- This is what makes it open in a new window.
        )

    }
}

function retrieveObservationResult(goBoolean) {

    // Create string variable
    var observationCode = document.getElementById("observationCode").value;
    var valueQuantity = document.getElementById("valueQuantity").value;

    // Create a new variable that is the string variable with the string

    var output = "Observation?code=http://loinc.org|" + observationCode;

    if (valueQuantity != null && valueQuantity != "") {
        output = output + "&value-quantity=" + valueQuantity;
    }

    // Store serviceRootURL in a variable from text box with id serviceRootURL
    var serviceRootURL = document.getElementById("serviceRootURL").value;

    // If serviceRootURL ends with a slash, remove it
    if (serviceRootURL.endsWith("/")){
        serviceRootURL = serviceRootURL.slice(0, -1);
    }

    var outputURL = serviceRootURL + '/' + output;
    // Changes the text in the div to the string in the text box
    document.getElementById("output").innerHTML = outputURL;

    if (goBoolean == true) {

        window.open(
            outputURL,
            '_blank' // <- This is what makes it open in a new window.
        )

    }
}

function retrieveObservationResult2(goBoolean) {

    // Create string variable
    var observationCode = document.getElementById("observationCode").value;
    var valueQuantity = document.getElementById("valueQuantity").value;

    // Create a new variable that is the string variable with the string

    var output = "Patient?_has:Observation:patient:code=http://loinc.org|" + observationCode;

    if (valueQuantity != null && valueQuantity != "") {
        output = output + "&_has:Observation:patient:value-quantity=" + valueQuantity;
    }

    // Store serviceRootURL in a variable from text box with id serviceRootURL
    var serviceRootURL = document.getElementById("serviceRootURL").value;

    // If serviceRootURL ends with a slash, remove it
    if (serviceRootURL.endsWith("/")){
        serviceRootURL = serviceRootURL.slice(0, -1);
    }

    var outputURL = serviceRootURL + '/' + output;
    // Changes the text in the div to the string in the text box
    document.getElementById("output").innerHTML = outputURL;

    if (goBoolean == true) {

        window.open(
            outputURL,
            '_blank' // <- This is what makes it open in a new window.
        )

    }
}

window.onload=function(){

    var patientIdentifier = document.getElementById("patientIdentifier");
    var retrieveObservation1 = document.getElementById("retrieveObservation1");
    
    patientIdentifier.addEventListener('keyup', function(){

        if (patientIdentifier.value == null || patientIdentifier.value == "") {
            retrieveObservation1.style.backgroundColor = "red";
        }
        else {
            retrieveObservation1.style.backgroundColor = "white";
        }
        });

    
  }
