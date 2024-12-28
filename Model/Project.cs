namespace rwa_project.Model
{
    public class Project
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }

        public int MenuId { get; set; }   // Foreign key to Menu
        public Menu Menu { get; set; }    // Navigation property to Menu
    }
}