using rwa_project.Model;
using Microsoft.EntityFrameworkCore;

namespace rwa_project;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Category> Categories { get; set; }
    public DbSet<Contact> Contacts { get; set; }
    public DbSet<Email> Emails { get; set; }
    public DbSet<Phone> Phones { get; set; }
    public DbSet<Calendar> Calendars { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Menu> Menus { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Project>()
            .HasOne(p => p.Menu)
            .WithMany(m => m.Projects)
            .HasForeignKey(p => p.MenuId);
    }
}