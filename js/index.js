// handle get pin 
function getPin() {
    const generate = Math.random() * 100000;
    const pin = (generate + "").split(".")[0];
    if (pin.length === 5) {
        return pin;
    }
    else {
        console.log('pin 4', pin);
        return getPin();
    }
}


// handle generate pin 
function generatePin() {
    const pinScreen = document.getElementById('pin');
    pinScreen.value = getPin();
}


// handle all digit using bubble
function digitHandler(event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const pinClear = document.getElementById('screen');
            pinClear.value = '';
        }
        if (digit === 'B') {
            const pinClear = document.getElementById('screen');
            pinClear.value = pinClear.value - 1;
        }
    }
    else {
        const pinScreen = document.getElementById('screen');
        pinScreen.value = pinScreen.value + digit;
    }
}


// handle verify pin 
function verifyPin() {
    const pinInput = document.getElementById('pin').value;
    const typedPin = document.getElementById('screen').value;
    if (pinInput === typedPin) {
        showCorrectValue('block', 'none');
    }
    else {
        showCorrectValue('none', 'block');
    }
}


// handle show correct massage 
function showCorrectValue(correct, incorrect) {
    const showMatch = document.getElementById('match');
    showMatch.style.display = correct;
    const notMatchShow = document.getElementById('not-match');
    notMatchShow.style.display = incorrect;
}
