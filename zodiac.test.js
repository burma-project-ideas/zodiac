const assert = require("node:assert/strict");
const { getHoroscope } = require("./zodiac");

const boundaryCases = [
    ["1990-03-21", "Aries"],
    ["1990-04-19", "Aries"],
    ["1990-04-20", "Taurus"],
    ["1990-05-20", "Taurus"],
    ["1990-05-21", "Gemini"],
    ["1990-06-20", "Gemini"],
    ["1990-06-21", "Cancer"],
    ["1990-07-22", "Cancer"],
    ["1990-07-23", "Leo"],
    ["1990-08-22", "Leo"],
    ["1990-08-23", "Virgo"],
    ["1990-09-22", "Virgo"],
    ["1990-09-23", "Libra"],
    ["1990-10-22", "Libra"],
    ["1990-10-23", "Scorpio"],
    ["1990-11-21", "Scorpio"],
    ["1990-11-22", "Sagittarius"],
    ["1990-12-21", "Sagittarius"],
    ["1990-12-22", "Capricorn"],
    ["1991-01-19", "Capricorn"],
    ["1991-01-20", "Aquarius"],
    ["1991-02-18", "Aquarius"],
    ["1992-02-19", "Pisces"],
    ["1992-02-29", "Pisces"],
    ["1990-03-20", "Pisces"],
];

for (const [birthDate, expectedSign] of boundaryCases) {
    assert.equal(getHoroscope(birthDate), expectedSign, `string ${birthDate}`);
    assert.equal(getHoroscope(new Date(birthDate)), expectedSign, `UTC date ${birthDate}`);

    const [year, month, day] = birthDate.split("-").map(Number);
    assert.equal(getHoroscope(new Date(year, month - 1, day)), expectedSign, `local date ${birthDate}`);
}

assert.throws(() => getHoroscope("1991-02-29"), /Invalid birth date/);
assert.throws(() => getHoroscope("not-a-date"), /Invalid birth date/);
assert.throws(() => getHoroscope(new Date("not-a-date")), /Invalid birth date/);

console.log("Zodiac tests passed.");
