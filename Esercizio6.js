/*Dato l'oggetto { name: "John", age: 30 } crea una funzione che simula un'operazione asincrona, 
come il recupero dei dati da un'API. -Implementare una callback per gestire i dati recuperati.
 -Utilizzare setTimeout per simulare il ritardo dell'operazione.*/

 let obj={
    name:"Jhon",
    age: 30
}
function fetchDataFromAPI(callback) {
    console.log("Recupero dati in corso")
    setTimeout(() => {
        callback(obj);
    }, 1000);
    
    
  }
  
  function handleData(data) {
    console.log(`Dati recuperati:nome:${data.name}, età:${data.age} `)

  }
  
  fetchDataFromAPI(handleData);