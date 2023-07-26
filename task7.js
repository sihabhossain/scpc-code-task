function romanToInteger(romanNumeral) {
    const romanNumerals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    };

    let integer = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
        const currentRomanNumeral = romanNumeral[i];
        const nextRomanNumeral = i < romanNumeral.length - 1 ? romanNumeral[i + 1] : null;

        const value = romanNumerals[currentRomanNumeral];
        if (nextRomanNumeral && value < romanNumerals[nextRomanNumeral]) {
            integer -= value;
        } else {
            integer += value;
        }
    }

    return integer;
}

const romanNumeral = "V";
const integer = romanToInteger(romanNumeral);
console.log(integer); 