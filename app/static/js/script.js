document.getElementById('start-button').addEventListener('click', function() {
    let startTime, endTime;
    let textDisplay = document.getElementById('text-display').innerText;
    let textInput = document.getElementById('text-input');
    
    textInput.value = "";
    textInput.disabled = false;
    textInput.focus();
    
    startTime = new Date().getTime();

    textInput.addEventListener('input', function() {
        if (textInput.value === textDisplay) {
            endTime = new Date().getTime();
            let timeTaken = (endTime - startTime) / 1000;  // in seconds
            let wordsPerMinute = (textDisplay.split(' ').length / timeTaken) * 60;
            document.getElementById('result').innerText = `Speed: ${wordsPerMinute.toFixed(2)} WPM`;
            textInput.disabled = true;
        }
    });
});
