# Zodiac


![Alt text](https://github.com/sannlynnhtun-coding/Zodiac/blob/main/wallpaper.jpg)

ပုံများ အား [mindmaestro.co.uk](https://www.mindmaestro.co.uk/zodiac-art) မှယူသုံးထားပါသည်။

> Summary
Date ရွေးမယ် ရလာတာကို Zodiac Sign Logic နဲ့ တွက်ချက်မယ် ရလာတဲ့ Data ကို ချိတ်ဆက်ပြီး ပြသမယ်

1. ကိုယ်သိချင်သောမွေးနေ့အားရွေးချယ်ပြီး တွက်ချက်ရန် Logic အား Javascript Codeတွင် ကြည့်ရှုနိုင်ပါသည်။
2. ၎င်းကထွက်လာသော Zodiac Signနှင့်သက်ဆိုင်သောသော Data များအား Zodiac Sign Detail တွင် ချိတ်ဆက်၍ပြသနိုင်ပါသည်။ Data များကို [Zodiac.json](https://github.com/sannlynnhtun-coding/Zodiac/blob/main/Zodiac.json) တွင်ရရှိနိုင်ပါသည်။ ပုံများလည်း ထည့်သွင်းပေးထားပါသည်။

### Participants
1. [Kaung Myat Thu (Flutter)](https://github.com/Kaung-Myat/Horoscope)
2. [Kyaw Mg Mg Thu (JavaScript)](https://github.com/KyawMgMgThu/Zodaic_Sign)
3. [William Phyo (Next.Js)](https://github.com/phyoko72/zodiac)
4. [Arkar Myo Min (JavaScript)](https://akmm-dev.github.io/Zodiac/)
5. [Min Thike Tun (React.Js)](https://github.com/Minthiketun/zodiac)
6. [Wai Yan Min Lwin (Next.Js)](https://github.com/wyMinLwin/zodiac-next)
7. [Zin Moe Aung (TypeScript)](https://github.com/Zinmoeag/zodiac)
8. [Htar Htar Ei (React + Vite)](https://github.com/htarhtarei670/Zodiac-Web-app)

![Alt text](https://github.com/sannlynnhtun-coding/Zodiac/blob/main/ZodiacFlow1.png)

![Alt text](https://github.com/sannlynnhtun-coding/Zodiac/blob/main/ZodiacFlow2.png)

<table>
 <thead>
  <tr>
   <th colspan="11">Contributors</th>
  </tr>
 </thead>
    <tbody>
        <tr>
            <td><a href="https://github.com/sannlynnhtun-coding"><img src="https://github.com/sannlynnhtun-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/OatSoeK"><img src="https://github.com/OatSoeK.png" width="60px;"/></a></td>
            <td><a href="https://github.com/naykhantkyaw-coding"><img src="https://github.com/naykhantkyaw-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/phyuphyuthin-coding"><img src="https://github.com/phyuphyuthin-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/mgchit-coding"><img src="https://github.com/mgchit-coding.png" width="60px;"/></a></td>
            <td><a href="https://github.com/myatphonekhant-developer"><img src="https://github.com/myatphonekhant-developer.png" width="60px;"/></a></td>
            <td><a href="https://github.com/myatphonethant-dev"><img src="https://github.com/myatphonethant-dev.png" width="60px;"/></a></td>
            <td><a href="https://github.com/akmm-dev"><img src="https://github.com/akmm-dev.png" width="60px;"/></a></td>
        </tr>
    </tbody>
</table>

တရုတ်ရာသီခွင့်နှင့်ပတ်သတ်သော Logic ကို ဤတွင်ကြည့်ရှုနိုင်ပါသည်။
Chinese Zodiac Logic ကို ပြန် Change ပေးထားပါတယ်။ <br />
[Arkar Myo Min](https://github.com/akmm-dev) မှကူညီပေးထားပါတယ်။ <br />

အောက်က Link မှာလည်း JavaScript Code နဲ့ ရေးထားပေးတာမို့ သွားစမ်းကြည့်လို့ရပါတယ်။  <br />
https://playcode.io/1636595

Reference - https://www.knowprogram.com/js/chinese-zodiac-calculator-in-javascript/

```javascript
function getChineseZodiacSign(birthYear) {
  const zodiacAnimals = ['Monkey 🐒', 'Rooster 🐓', 'Dog 🐕', 'Pig 🐖', 'Rat 🐀', 'Ox 🐂', 'Tiger 🐅', 'Rabbit 🐇', 'Dragon 🐉', 'Snake 🐍', 'Horse 🐎', 'Sheep 🐑'];

  // Calculate the Chinese zodiac year.
  const zodiacYear = birthYear % 12;

  // Return the Chinese zodiac animal for the calculated year.
  return zodiacAnimals[zodiacYear];
}

// Usage example
const birthYear = 2024; // Replace with the desired birth year
const chineseZodiac = getChineseZodiacSign(birthYear);
console.log(`Chinese zodiac sign: ${chineseZodiac}`);
```
နက္ခတ်ရာသီခွင်နှင့်ပတ်သက်သော Logic များကိုဤတွင်ကြည့်ရှုနိုင်ပါသည်
```javascript
const { getHoroscope } = require("./zodiac");

// Usage example
const birthDate = "1990-08-15"; // Replace with the desired birth date
try {
    const zodiacSign = getHoroscope(birthDate);
    console.log(`Zodiac sign: ${zodiacSign}`);
} catch (error) {
    console.error(error.message);
}
```

