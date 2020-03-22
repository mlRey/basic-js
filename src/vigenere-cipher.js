class VigenereCipheringMachine {

    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(str, key) {
        if (str === undefined || key === undefined) throw Error();
        let rez = [];
        let STR = str.toUpperCase();
        let KEY = key.toUpperCase();
        for (let i = 1; i < Math.ceil(str.length / key.length); i++) {
            KEY += KEY;
        }
        let keynum = 0;
        for (let i = 0; i < str.length; i++) {
            if (/[A-Z]/.test(STR[i])) {
                rez[i] = String.fromCharCode((STR[i].charCodeAt() + KEY[keynum].charCodeAt()) % 26 + 65);
                keynum++;
            }
            else {
                rez[i] = STR[i];
            }



        }
        return (rez.join(''));
    }



    decrypt(str, key) {
        if (str === undefined || key === undefined) throw Error();
        let rez = [];
        let STR = str.toUpperCase();
        let KEY = key.toUpperCase();
        for (let i = 1; i < Math.ceil(str.length / key.length); i++) {
            KEY += KEY;
        }
        let keynum = 0;
        for (let i = 0; i < str.length; i++) {

            if (/[A-Z]/.test(STR[i])) {
                rez[i] = String.fromCharCode((STR[i].charCodeAt() + 26 - KEY[keynum].charCodeAt()) % 26 + 65);
                keynum++;
            }
            else {
                rez[i] = STR[i];
            }
        }
        return (rez.join(''));
    }
}

module.exports = VigenereCipheringMachine;
