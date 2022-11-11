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


function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) {return false;}
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            /*create a DIV element for each matching element:*/
            b = document.createElement("DIV");
            /*make the matching letters bold:*/
            b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
            b.innerHTML += arr[i].substr(val.length);
            /*insert a input field that will hold the current array item's value:*/
            b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
            /*execute a function when someone clicks on the item value (DIV element):*/
            b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            // Edit the LOINC code in the observationCode text box
            document.getElementById("observationCode").value = observationDict[inp.value];
            closeAllLists();
            });
            a.appendChild(b);
        }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
        } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
        } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
        }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
        if (elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
        } 
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    }


/*An array containing all the display names in loinc:*/
var observationDN = ["Potassium", "Systolic blood pressure"];
var observationDict = {
    "Potassium": "6298-4",
    "Systolic blood pressure": "8480-6"
};
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


    /*initiate the autocomplete function on the "observationName" element, and pass along the display names array as possible autocomplete values:*/
    autocomplete(document.getElementById("observationName"), observationDN);


}