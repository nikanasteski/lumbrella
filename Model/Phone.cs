namespace rwa_project.Model
{
    public class Phone
    {
        public int Id { get; set; }
        public string PhoneNumber { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}
