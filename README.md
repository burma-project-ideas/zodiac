# Zodiac


![Alt text](https://github.com/sannlynnhtun-coding/Zodiac/blob/main/wallpaper.jpg)

ပုံများ အား [mindmaestro.co.uk](https://www.mindmaestro.co.uk/zodiac-art) မှယူသုံးထားပါသည်။

1. စစခြင်း page တွင် Zodiac Signs များကို ပြသထားပါသည်။ ZodiacSigns JSON မှ ဖော်ပြနိုင်ပါသည်။ 
2. ကိုယ်သိချင်သော မွေးနေ့ကိုလဲ ရိုက်ထည့်ကာ သို့မဟုတ် Date Picker ဖြင့်ရွေးချယ်နိုင်ပါသည်။ ZodiacSignsDetail JSON မှဖော်ပြနိုင်ပါသည်။
   

တရုတ်ရာသီခွင့်နှင့်ပတ်သတ်သော Logic ကို ဤတွင်ကြည့်ရှုနိုင်ပါသည်
```javascript
function getChineseZodiac(birthYear) {
    const startYear = 1900; // Start year of the Chinese zodiac cycle
    const zodiacSigns = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    const offset = (birthYear - startYear) % 12; // Calculate the offset from the start year

    // Determine the Chinese zodiac sign based on the offset
    const zodiacSign = zodiacSigns[offset];
    return zodiacSign;
}

// Usage example
const birthYear = 1990; // Replace with the desired birth year
const chineseZodiac = getChineseZodiac(birthYear);
console.log(`Chinese zodiac sign: ${chineseZodiac}`);
```
နက္ခတ်ရာသီခွင်နှင့်ပတ်သက်သော Logic များကိုဤတွင်ကြည့်ရှုနိုင်ပါသည်
```javascript
function getHoroscope(birthDate) {
    const day = birthDate.getDate();
    const month = birthDate.getMonth() + 1;

    // Determine the Zodiac sign based on the birth date
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19))
        return "Aries";
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20))
        return "Taurus";
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20))
        return "Gemini";
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22))
        return "Cancer";
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22))
        return "Leo";
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22))
        return "Virgo";
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22))
        return "Libra";
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21))
        return "Scorpio";
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21))
        return "Sagittarius";
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19))
        return "Capricorn";
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18))
        return "Aquarius";
    else if ((month === 2 && day >= 19) || (month === 3 && day <= 20))
        return "Pisces";
    else
        throw new Error("Invalid birth date.");
}

// Usage example
const birthDate = new Date("1990-08-15"); // Replace with the desired birth date
try {
    const zodiacSign = getHoroscope(birthDate);
    console.log(`Zodiac sign: ${zodiacSign}`);
} catch (error) {
    console.error(error.message);
}
```

<table>
 <thead>
  <tr>
   <th colspan="11">Contributors</th>
  </tr>
 </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/sannlynnhtun-coding"><img src="https://github.com/sannlynnhtun-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/OatSoeKhant-Coding"><img src="https://github.com/OatSoeKhant-Coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/Rasunon-Soare"><img src="https://github.com/Rasunon-Soare.png" width="60px;"/></a></td>
            <td><a href="https://github.com/dabria2004"><img src="https://github.com/dabria2004.png" width="60px;"/></a></td>
            <td><a href="https://github.com/mgchit-coding"><img src="https://github.com/mgchit-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/myatphonekhant-developer"><img src="https://github.com/myatphonekhant-developer.png" width="60px;"/></a></td>
            <td><a href="https://github.com/MyatPhoneThant"><img src="https://github.com/MyatPhoneThant.png" width="60px;"/></a></td>
        </tr>
    </tbody>
</table>

![ZodiacFlow](https://github.com/sannlynnhtun-coding/Zodiac/141624237/95da38bd-23b6-4725-b750-71ee4458947b)

![ZodiacFlow1](https://github.com/sannlynnhtun-coding/Zodiac/141624237/b537d2f2-d390-4cf9-a031-75c71194cadc)
