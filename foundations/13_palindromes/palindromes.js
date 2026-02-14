const palindromes = function (string) {
    const allowedChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const filteredString = Array.from(string.toLowerCase()).filter(value => allowedChars.includes(value)).toString();
    let reversed = ''

    string = string.toLowerCase();

    for (let i = filteredString.length - 1; i >= 0; i--) {
        reversed += filteredString[i];
    }

    return filteredString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
