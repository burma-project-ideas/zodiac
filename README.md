# Zodiac — Blazor WebAssembly

The deployed application is the Blazor WebAssembly app from [sannlynnhtun-coding/BlazorWasm.Zodiac](https://github.com/sannlynnhtun-coding/BlazorWasm.Zodiac), merged into [burma-project-ideas/zodiac](https://github.com/burma-project-ideas/zodiac) with its Git history preserved. `BlazorWasm.Zodiac/` is the application source of truth. The earlier temporary JavaScript landing page is no longer the deployment source.

Live website: [Zodiac on Vercel](https://zodiac-omega-ruddy.vercel.app/).

Choose a birthday to view the Western zodiac sign, Myanmar month, personality chart, descriptions, element, and representative flower. The app runs in the browser without a backend or database.

## Data and credits

Zodiac descriptions, traits, Myanmar text, and the original image dataset come from **Burma Project Ideas — Zodiac**. The original dataset remains at [`Zodiac.json`](Zodiac.json); the Blazor app uses its existing embedded dataset in [`BlazorWasm.Zodiac/Data/JsonData.cs`](BlazorWasm.Zodiac/Data/JsonData.cs). These are separate copies: changes to the root JSON do not automatically update the app.

- Application: [BlazorWasm.Zodiac by Sann Lynn Htun](https://github.com/sannlynnhtun-coding/BlazorWasm.Zodiac).
- Data and community project: [Burma Project Ideas — Zodiac](https://github.com/burma-project-ideas/zodiac).
- UI resource credited by the source app: [Astrology HTML template](https://kamleshyadav.com/html/astrology/version-3/index.html).
- Zodiac artwork credited by the original dataset: [Mind Maestro](https://www.mindmaestro.co.uk/zodiac-art).

Existing JavaScript examples, `src/` calculation projects, tests, and the original project notes below remain available as reference material; Vercel publishes the Blazor app.

## Run and check locally

```powershell
dotnet run --project BlazorWasm.Zodiac/BlazorWasm.Zodiac.csproj
dotnet publish BlazorWasm.Zodiac/BlazorWasm.Zodiac.csproj -c Release -o artifacts/publish
node zodiac.test.js
dotnet test tests/Zodiac.Tests/Zodiac.Tests.csproj
```

The source app currently targets .NET 6, which is out of support. Its framework and dependency versions are preserved from the source repository; upgrading them is separate maintenance work. Publishing has been checked with the installed .NET SDK. The reference test project targets .NET 10.

## Vercel deployment

Use the repository root as the Vercel Root Directory with Framework Preset **Other**. [`vercel.json`](vercel.json) runs [`scripts/vercel-build.sh`](scripts/vercel-build.sh), which installs a .NET 10 SDK when one is unavailable and publishes the source app. Vercel serves only `artifacts/publish/wwwroot`; filesystem routes serve assets before the Blazor fallback to `index.html`.

To publish locally built files, upload the contents of `artifacts/publish/wwwroot` to the existing Vercel project **zodiac**. Do not upload the repository root as static content. For automatic deployments, connect this repository to that existing project under Settings → Git and select `main` as the production branch. A manual folder upload alone does not enable automatic deployment.

The UI uses ApexCharts from cdnjs and its bundled date picker, styles, and artwork. An internet connection is needed on the first visit. The app includes the source project's PWA service worker.

## Original Burma Project Ideas project notes

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
