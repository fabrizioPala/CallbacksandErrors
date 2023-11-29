/*Crea una funzione che accetta due numeri come argomenti e una funzione di callback.
La funzione dovrebbe eseguire un'operazione matematica sui numeri e passare il risultato alla funzione di callback.
Ad esempio, puoi creare una funzione per aggiungere due numeri e passare una funzione 
di callback che visualizza il risultato.*/
function performOperation(a, b, callback) {
  let result = a + b;
  callback(result);
}

function displayResult(result) {
  console.log(result);
}

performOperation(5, 3, displayResult);
