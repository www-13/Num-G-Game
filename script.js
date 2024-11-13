let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
console.log(randomNumber) 

function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value)
    const message = document.getElementById('message');
    const restart = document.getElementById('restartGame');

    attempts += 0.5;
    console.log(attempts)

    if (userGuess === randomNumber) {
        message.style.color = 'green';
        message.innerHTML = '🎉 True! You guessed the number after ' + attempts + ' attempts.';
        restart.className = 'btn-secondary';
    } else if (userGuess < randomNumber) {
        message.style.color = 'red';
        message.innerHTML = '📉 Your guess is too low!';
    } else if (userGuess > randomNumber) {
        message.style.color = 'red';
        message.innerHTML = '📈 Your guess is too high!';
    }
}

function restartGame() { 
    window.location.reload();
}


document.getElementById('submitGuess').addEventListener('click', checkGuess);
document.getElementById('restartGame').addEventListener('click', restartGame)

   // randomNumber = Math.floor(Math.random() * 100) + 1;
    // document.getElementById('message').innerHTML = '';
   //  document.getElementById('userGuess').value = '';