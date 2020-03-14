const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    expr = [...expr.matchAll(/\S{10}/g)].map(letter=>letter[0]);
    let result = expr.map(letter => letter === "**********" ? ' ' : [...letter.matchAll(/\S{2}/g)].map(letter=>letter[0]));
    result = result.map(letter => Array.isArray(letter) ? letter.map(morseLetter=> morseLetter === "00" ? '' : morseLetter === "10" ? "." : "-").join('') : ' ');  
    result = result.map(letter=> letter === ' ' ? ' ' : MORSE_TABLE[letter]).join('');
    return result;
}

module.exports = {
    decode
}
