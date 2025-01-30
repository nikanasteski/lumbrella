using rwa_project.Model;
using Microsoft.EntityFrameworkCore;

namespace rwa_project;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Calendar> Calendars { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Menu> Menus { get; set; }
    public DbSet<Login> Logins { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder
        .Entity<Login>(
            l =>
            {
                l.HasNoKey();
            });

    }
}