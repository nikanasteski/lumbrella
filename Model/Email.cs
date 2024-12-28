 namespace rwa_project.Model
{
    public class Email
    {
        public int Id { get; set; }
        public string EmailAddress { get; set; }
        public int CategoryId { get; set; }
        public Category? Category { get; set; }
    }
}

