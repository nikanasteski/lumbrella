using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace rwa_project.Migrations
{
    public partial class CalendarAndProjectWOMenu : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calendars_Menus_MenuId",
                table: "Calendars");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Menus_MenuId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_MenuId",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Calendars_MenuId",
                table: "Calendars");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "Calendars");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "Calendars",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_MenuId",
                table: "Projects",
                column: "MenuId");

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_MenuId",
                table: "Calendars",
                column: "MenuId");

            migrationBuilder.AddForeignKey(
                name: "FK_Calendars_Menus_MenuId",
                table: "Calendars",
                column: "MenuId",
                principalTable: "Menus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Menus_MenuId",
                table: "Projects",
                column: "MenuId",
                principalTable: "Menus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
