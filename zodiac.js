const ZODIAC_RANGES = [
    { name: "Aries", start: [3, 21], end: [4, 19] },
    { name: "Taurus", start: [4, 20], end: [5, 20] },
    { name: "Gemini", start: [5, 21], end: [6, 20] },
    { name: "Cancer", start: [6, 21], end: [7, 22] },
    { name: "Leo", start: [7, 23], end: [8, 22] },
    { name: "Virgo", start: [8, 23], end: [9, 22] },
    { name: "Libra", start: [9, 23], end: [10, 22] },
    { name: "Scorpio", start: [10, 23], end: [11, 21] },
    { name: "Sagittarius", start: [11, 22], end: [12, 21] },
    { name: "Capricorn", start: [12, 22], end: [1, 19] },
    { name: "Aquarius", start: [1, 20], end: [2, 18] },
    { name: "Pisces", start: [2, 19], end: [3, 20] },
];

const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function getCalendarMonthDay(birthDate) {
    if (typeof birthDate === "string") {
        const match = birthDate.match(/^(\d{4})-(\d{2})-(\d{2})$/);

        if (!match) {
            throw new Error("Invalid birth date.");
        }

        const year = Number(match[1]);
        const month = Number(match[2]);
        const day = Number(match[3]);

        if (!isValidDateParts(year, month, day)) {
            throw new Error("Invalid birth date.");
        }

        return { month, day };
    }

    if (!(birthDate instanceof Date) || Number.isNaN(birthDate.getTime())) {
        throw new Error("Invalid birth date.");
    }

    const isUtcMidnight =
        birthDate.getUTCHours() === 0 &&
        birthDate.getUTCMinutes() === 0 &&
        birthDate.getUTCSeconds() === 0 &&
        birthDate.getUTCMilliseconds() === 0;

    return {
        month: isUtcMidnight ? birthDate.getUTCMonth() + 1 : birthDate.getMonth() + 1,
        day: isUtcMidnight ? birthDate.getUTCDate() : birthDate.getDate(),
    };
}

function isValidDateParts(year, month, day) {
    if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) {
        return false;
    }

    if (month < 1 || month > 12 || day < 1 || day > DAYS_IN_MONTH[month - 1]) {
        return false;
    }

    return month !== 2 || day !== 29 || isLeapYear(year);
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function toMonthDayValue(month, day) {
    return month * 100 + day;
}

function isDateInRange(month, day, range) {
    const value = toMonthDayValue(month, day);
    const start = toMonthDayValue(range.start[0], range.start[1]);
    const end = toMonthDayValue(range.end[0], range.end[1]);

    if (start <= end) {
        return value >= start && value <= end;
    }

    return value >= start || value <= end;
}

function getHoroscope(birthDate) {
    const { month, day } = getCalendarMonthDay(birthDate);
    const zodiac = ZODIAC_RANGES.find((range) => isDateInRange(month, day, range));

    if (!zodiac) {
        throw new Error("Invalid birth date.");
    }

    return zodiac.name;
}

if (typeof module !== "undefined") {
    module.exports = { getHoroscope };
}

// Usage example
if (typeof require !== "undefined" && typeof module !== "undefined" && require.main === module) {
    const birthDate = "1990-08-15"; // Replace with the desired birth date

    try {
        const zodiacSign = getHoroscope(birthDate);
        console.log(`Zodiac sign: ${zodiacSign}`);
    } catch (error) {
        console.error(error.message);
    }
}
