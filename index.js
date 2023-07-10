// Code your solutions in this file
function writeCards(names, surprise) {
    const thankYous = [];
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
    }
    return thankYous;
}

function countDown(number) {
    for (; number >= 0; number--) {
        console.log(number);
    }
}