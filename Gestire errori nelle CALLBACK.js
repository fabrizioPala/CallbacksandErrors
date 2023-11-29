/*Partendo dall'esercizio Le Callback - 5, includi la gestione degli errori. Se la funzione di callback genera un errore, catturalo e gestiscilo.
Modificare la funzione performOperation per gestire l'errore e registrare un messaggio di errore.*/
function performOperation(a, b, callback) {
  let result = a + b;
  if (typeof a === "number" && typeof b === "number") {
    callback(null, result);
  } else {
    callback(new Error("imput non valido"), null);
  }
}

function displayResult(error, result) {
  if (error) {
    console.log("Error", error.message);
  } else {
    console.log(result);
  }
}

performOperation(5, 3, displayResult);
