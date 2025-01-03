using rwa_project.Model;
using Microsoft.EntityFrameworkCore;

namespace rwa_project;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Calendar> Calendars { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Menu> Menus { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

      /*  modelBuilder.Entity<Project>()
        .HasOne(p => p.Menu)
        .WithMany(m => m.Projects)
        .HasForeignKey(p => p.MenuId);

        modelBuilder.Entity<Calendar>()
        .HasOne(c => c.Menu)
        .WithMany(m => m.Calendars)
        .HasForeignKey(c => c.MenuId);  */
    }
}