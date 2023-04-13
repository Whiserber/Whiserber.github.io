var quotes = [
    '"No importa si puedes hacerlo, lo importante es que quieras hacerlo" - Chika',
    '"Sigamos haciendo incontables promesas" - Aqours 6th Live Windy Stage'
  ];
  
  var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerHTML = randomQuote;