document.getElementById('buttonText').addEventListener('click', function() {
    // obtengo el valor del input
    const inputText = document.getElementById('inputText').value;
    // guardo en localStorage
    localStorage.setItem('userInput', inputText);
});
