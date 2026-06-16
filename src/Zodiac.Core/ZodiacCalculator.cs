using System.Globalization;

namespace Zodiac.Core;

public static class ZodiacCalculator
{
    private static readonly ZodiacRange[] WesternZodiacRanges =
    [
        new(WesternZodiacSign.Aries, 3, 21, 4, 19),
        new(WesternZodiacSign.Taurus, 4, 20, 5, 20),
        new(WesternZodiacSign.Gemini, 5, 21, 6, 20),
        new(WesternZodiacSign.Cancer, 6, 21, 7, 22),
        new(WesternZodiacSign.Leo, 7, 23, 8, 22),
        new(WesternZodiacSign.Virgo, 8, 23, 9, 22),
        new(WesternZodiacSign.Libra, 9, 23, 10, 22),
        new(WesternZodiacSign.Scorpio, 10, 23, 11, 21),
        new(WesternZodiacSign.Sagittarius, 11, 22, 12, 21),
        new(WesternZodiacSign.Capricorn, 12, 22, 1, 19),
        new(WesternZodiacSign.Aquarius, 1, 20, 2, 18),
        new(WesternZodiacSign.Pisces, 2, 19, 3, 20)
    ];

    public static WesternZodiacSign GetWesternSign(DateOnly birthDate)
    {
        foreach (ZodiacRange range in WesternZodiacRanges)
        {
            if (range.Contains(birthDate))
            {
                return range.Sign;
            }
        }

        throw new ArgumentOutOfRangeException(nameof(birthDate), "Invalid birth date.");
    }

    public static WesternZodiacSign ParseWesternSign(string birthDate)
    {
        if (!DateOnly.TryParseExact(
                birthDate,
                "yyyy-MM-dd",
                CultureInfo.InvariantCulture,
                DateTimeStyles.None,
                out DateOnly parsedDate))
        {
            throw new FormatException("Birth date must be in yyyy-MM-dd format.");
        }

        return GetWesternSign(parsedDate);
    }

    private readonly record struct ZodiacRange(
        WesternZodiacSign Sign,
        int StartMonth,
        int StartDay,
        int EndMonth,
        int EndDay)
    {
        public bool Contains(DateOnly date)
        {
            int value = ToMonthDayValue(date.Month, date.Day);
            int start = ToMonthDayValue(StartMonth, StartDay);
            int end = ToMonthDayValue(EndMonth, EndDay);

            if (start <= end)
            {
                return value >= start && value <= end;
            }

            return value >= start || value <= end;
        }

        private static int ToMonthDayValue(int month, int day) => month * 100 + day;
    }
}
