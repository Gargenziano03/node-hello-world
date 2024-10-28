console.log('hello node js');

const pin = process.env.PIN_KEY;
if (!pin) {
    console.log('No PIN key found, exitin');
    process.exit(1);
}

console.log(process.env.PIN_KEY);

const testo = process.argv[2];
if (!testo) {
    console.log('inserisci un argomento');
    process.exit(1)   
}
console.log(testo.toUpperCase());
console.log(process.argv);

