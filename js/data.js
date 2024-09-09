const storedData = localStorage.getItem('userInput');
//obtengo valor deel localStorage
document.getElementById('data').textContent = storedData ? storedData : "No hay datos guardados";
//muestra valor en el span con iddata