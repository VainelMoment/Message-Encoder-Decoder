
const output = document.getElementById("output")
const input = document.getElementById("input")

let isDecodeMode = true;

function toggleMode(){
    isDecodeMode = !isDecodeMode;
     const modeButton = document.querySelector('button');
     document.getElementById("output").textContent = isDecodeMode ? "Decode" : "Encode";
}

function caesarEncode(message, shift) {
    let result = "";
    shift = shift % 26;  // Ensure the shift stays within the alphabet

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let code = message.charCodeAt(i);

        // Check if the character is an uppercase letter
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 + shift) % 26) + 65);

        // Check if the character is a lowercase letter
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 + shift) % 26) + 97);

        // Non-alphabet characters remain unchanged
        } else {
            result += char;
        }
    }

    return result;
}

function caesarDecode(message, shift) {
    let result = "";
    shift = shift % 26;  // Ensure the shift stays within the alphabet

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        let code = message.charCodeAt(i);

        // Check if the character is an uppercase letter
        if (code >= 65 && code <= 90) {
            result += String.fromCharCode(((code - 65 - shift + 26) % 26) + 65);

        // Check if the character is a lowercase letter
        } else if (code >= 97 && code <= 122) {
            result += String.fromCharCode(((code - 97 - shift + 26) % 26) + 97);

        // Non-alphabet characters remain unchanged
        } else {
            result += char;
        }
    }

    return result;
}

function processMessage() {
    const Message = document.getElementById("InputedMessage").value;
    const Shift = parseInt(document.getElementById("Shift").value);
    const Output = document.getElementById("OutputedMessage");

    if (isDecodeMode) {
        Output.value = caesarDecode(Message, Shift);
    } else {
        Output.value = caesarEncode(Message, Shift);
    }
}