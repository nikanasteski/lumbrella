using System.ComponentModel.DataAnnotations;

namespace rwa_project.Model
{
    public class Menu
    {
        public int Id { get; set; }
        [StringLength(100, MinimumLength = 3)]
        [MaxLength]
        public string Name { get; set; }
        public string Url { get; set; }

       /* public ICollection<Project> Projects { get; set; }
        public ICollection<Calendar> Calendars { get; set; }*/
    }
}
