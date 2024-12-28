using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace rwa_project.Migrations
{
    public partial class Menu4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects");

            migrationBuilder.AlterColumn<string>(
                name: "MenuId1",
                table: "Projects",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "TEXT");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects",
                column: "MenuId1",
                principalTable: "Menus",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects");

            migrationBuilder.AlterColumn<string>(
                name: "MenuId1",
                table: "Projects",
                type: "TEXT",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Menus_MenuId1",
                table: "Projects",
                column: "MenuId1",
                principalTable: "Menus",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
