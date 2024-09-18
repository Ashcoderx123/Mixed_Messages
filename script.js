const msg = ["You only live once!", "Believe in yourself", "Work hard play hard", "If it was easy then it is not worth it", "Rise above all"];

const generateMessage = Arr => {
    let message = Arr[Math.floor(Math.random() * Arr.length)];
    console.log(message, Arr.indexOf(message));
}

generateMessage(msg);
