module.exports = function repeater(str, options) {
    let rez = [];

    options.separator = options.separator || '+';
    options.additionSeparator = options.additionSeparator || '|';
    options.repeatTimes = options.repeatTimes || 1;
    options.additionRepeatTimes = options.additionRepeatTimes || 1;

    for (let i = 0; i < options.repeatTimes; i++) {
        rez[i] = String(str);
        if (options.hasOwnProperty('addition')) {
            addArr = [];
            for (let j = 0; j < options.additionRepeatTimes; j++) {
                addArr[j] = String(options.addition);
            }
            rez[i] += addArr.join(options.additionSeparator);
        }
    }
    return rez.join(options.separator);
};
