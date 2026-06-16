using Zodiac.Core;

if (args.Length != 1)
{
    Console.WriteLine("Usage: dotnet run --project src/Zodiac.Console -- <birth-date>");
    Console.WriteLine("Example: dotnet run --project src/Zodiac.Console -- 1990-08-23");
    return 1;
}

try
{
    WesternZodiacSign sign = ZodiacCalculator.ParseWesternSign(args[0]);
    Console.WriteLine($"Zodiac sign: {sign}");
    return 0;
}
catch (FormatException error)
{
    Console.Error.WriteLine(error.Message);
    return 1;
}
