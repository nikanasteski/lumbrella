using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace rwa_project.Migrations
{
    public partial class Menu2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "MenuId1",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "MenuId",
                table: "Calendars",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "MenuId1",
                table: "Calendars",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Projects_MenuId1",
                table: "Projects",
                column: "MenuId1");

            migrationBuilder.CreateIndex(
                name: "IX_Calendars_MenuId1",
                table: "Calendars",
                column: "MenuId1");

            migrationBuilder.AddForeignKey(
                name: "FK_Calendars_Menus_MenuId1",
                table: "Calendars",
                column: "MenuId1",
                principalTable: "Menus",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects",
                column: "MenuId1",
                principalTable: "Menus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Calendars_Menus_MenuId1",
                table: "Calendars");

            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Projects_MenuId1",
                table: "Projects");

            migrationBuilder.DropIndex(
                name: "IX_Calendars_MenuId1",
                table: "Calendars");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MenuId1",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MenuId",
                table: "Calendars");

            migrationBuilder.DropColumn(
                name: "MenuId1",
                table: "Calendars");
        }
    }
}
