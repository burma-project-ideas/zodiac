using Zodiac.Core;

namespace Zodiac.Tests;

public sealed class ZodiacCalculatorTests
{
    public static TheoryData<string, WesternZodiacSign> BoundaryDates =>
        new()
        {
            { "1990-03-21", WesternZodiacSign.Aries },
            { "1990-04-19", WesternZodiacSign.Aries },
            { "1990-04-20", WesternZodiacSign.Taurus },
            { "1990-05-20", WesternZodiacSign.Taurus },
            { "1990-05-21", WesternZodiacSign.Gemini },
            { "1990-06-20", WesternZodiacSign.Gemini },
            { "1990-06-21", WesternZodiacSign.Cancer },
            { "1990-07-22", WesternZodiacSign.Cancer },
            { "1990-07-23", WesternZodiacSign.Leo },
            { "1990-08-22", WesternZodiacSign.Leo },
            { "1990-08-23", WesternZodiacSign.Virgo },
            { "1990-09-22", WesternZodiacSign.Virgo },
            { "1990-09-23", WesternZodiacSign.Libra },
            { "1990-10-22", WesternZodiacSign.Libra },
            { "1990-10-23", WesternZodiacSign.Scorpio },
            { "1990-11-21", WesternZodiacSign.Scorpio },
            { "1990-11-22", WesternZodiacSign.Sagittarius },
            { "1990-12-21", WesternZodiacSign.Sagittarius },
            { "1990-12-22", WesternZodiacSign.Capricorn },
            { "1991-01-19", WesternZodiacSign.Capricorn },
            { "1991-01-20", WesternZodiacSign.Aquarius },
            { "1991-02-18", WesternZodiacSign.Aquarius },
            { "1992-02-19", WesternZodiacSign.Pisces },
            { "1992-02-29", WesternZodiacSign.Pisces },
            { "1990-03-20", WesternZodiacSign.Pisces }
        };

    [Theory]
    [MemberData(nameof(BoundaryDates))]
    public void GetWesternSign_ReturnsExpectedSign_OnBoundaryDates(string birthDate, WesternZodiacSign expectedSign)
    {
        DateOnly parsedDate = DateOnly.ParseExact(birthDate, "yyyy-MM-dd");

        WesternZodiacSign sign = ZodiacCalculator.GetWesternSign(parsedDate);

        Assert.Equal(expectedSign, sign);
    }

    [Theory]
    [MemberData(nameof(BoundaryDates))]
    public void ParseWesternSign_ReturnsExpectedSign_ForIsoDateString(string birthDate, WesternZodiacSign expectedSign)
    {
        WesternZodiacSign sign = ZodiacCalculator.ParseWesternSign(birthDate);

        Assert.Equal(expectedSign, sign);
    }

    [Theory]
    [InlineData("")]
    [InlineData("1991-02-29")]
    [InlineData("1990/08/23")]
    [InlineData("not-a-date")]
    public void ParseWesternSign_ThrowsFormatException_ForInvalidDate(string birthDate)
    {
        Assert.Throws<FormatException>(() => ZodiacCalculator.ParseWesternSign(birthDate));
    }
}
