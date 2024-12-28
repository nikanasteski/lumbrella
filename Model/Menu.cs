namespace rwa_project.Model
{
    public class Menu
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Url { get; set; }

        public ICollection<Project> Projects { get; set; }
    }
}
