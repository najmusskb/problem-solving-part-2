function reversestring(text) {
    let reversee = '';
    for (const letter of text) {
        // console.log(letter);
        reversee = letter + reversee;
    }

    return reversee;
}


const greetings = 'helo how are you'
const reversed = reversestring(greetings);
console.log(reversed);