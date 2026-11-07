namespace BlazorWasm.Zodiac.Models
{
    public class ZodiacSignModel
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string MyanmarMonth { get; set; }
        public string ZodiacSignImageUrl { get; set; }
        public string ZodiacSign2ImageUrl { get; set; }
        public string Dates { get; set; }
        public string Element { get; set; }
        public string ElementImageUrl { get; set; }
        public string LifePurpose { get; set; }
        public string Loyal { get; set; }
        public string RepresentativeFlower { get; set; }
        public string Angry { get; set; }
        public string Character { get; set; }
        public string PrettyFeatures { get; set; }
        public List<TraitModel> Traits { get; set; }
    }
}
