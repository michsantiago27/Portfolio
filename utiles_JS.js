
// Biblia: https://eloquentjs-es.thedojo.mx/
// Arreglos: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array
// HTML DOM: https://www.w3schools.com/js/js_htmldom.asp
// Formateo de fechas: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects
// Formateo de números (Ej. Comas separando miles): https://www.w3schools.com/jsref/jsref_tolocalestring_number.asp

// Objetos globales (basicamente una guía para cualquier coso de JS. Desmenusar conforme necesite individualmente): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects

// Pasar variables entre HTML's a través de la URL:
  window.location.href = './home.html' + '#' + [variable];  // Con esta función cambias de HTML y de paso adjuntas alguna variable en la URL que necesitarás después (como el usuario que se loggueó)
  username = window.location.hash.substring(1);  // En la función que se ejecutará después de cargar el nuevo html, se puede extraer la variable de la URL


