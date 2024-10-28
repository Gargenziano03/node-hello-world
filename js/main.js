console.log('hello node js');

const pin = process.env.PIN_KEY;
if (!pin) {
    console.log('No PIN key found, exitin');
    process.exit(1);
}

console.log(process.env.PIN_KEY);
