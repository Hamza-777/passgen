const alphabetsSmall = 'abcdefghijklmnopqrstuvwxyz';
const alphabetsCaps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*_-+=';
let options = {
    smallCount: 3,
    capsCount: 3,
    numsCount: 3,
    symbolsCount: 3
}

const shuffle = (chars) => {
    chars = chars.split('');
    for (let i = chars.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = chars[i];
        chars[i] = chars[j];
        chars[j] = temp;
    }
    chars = chars.join('');
    return chars;
}

const passgenSelected = (props = options) => {
    let small = shuffle(alphabetsSmall + alphabetsSmall + alphabetsSmall),
        caps = shuffle(alphabetsCaps + alphabetsCaps + alphabetsCaps),
        nums = shuffle(numbers + numbers + numbers),
        syms = shuffle(symbols + symbols + symbols),
        chars = '';
    props.smallCount > 0 ? (chars += small.substring(0, props.smallCount)) : '';
    props.capsCount > 0 ? (chars += caps.substring(0, props.capsCount)) : '';
    props.numsCount > 0 ? (chars += nums.substring(0, props.numsCount)) : '';
    props.symbolsCount > 0 ? (chars += syms.substring(0, props.symbolsCount)) : '';
    return generatePasswordSelected(chars);
}

const generatePasswordSelected = (chars) => {
    let password = shuffle(chars);
    return password;
}

const passgen = (len = 7, wantcaps = true, wantnums = true, wantsymbols = true) => {
    let chars = alphabetsSmall;
    wantcaps ? (chars += alphabetsCaps) : '';
    wantnums ? (chars += numbers) : '';
    wantsymbols ? (chars += symbols) : '';
    chars = shuffle(chars);
    return generatePassword(len, chars);
}

const generatePassword = (len, chars) => {
    let password = '';
    for(let i = 0; i < len; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

module.exports = {
    passgen,
    passgenselected
}