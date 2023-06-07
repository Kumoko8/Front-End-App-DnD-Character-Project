function getApi() 
    var DNDapi = 'https://www.dnd5eapi.co/api/';
  

      fetch(DNDapi)
        .then(function (response) {
          return response.json();
        });