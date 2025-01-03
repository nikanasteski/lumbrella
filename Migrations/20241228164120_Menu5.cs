using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace rwa_project.Migrations
{
    public partial class Menu5 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "MenuId1",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MenuId1",
                table: "Calendars");

            migrationBuilder.AlterColumn<string>(
                name: "MenuId",
                table: "Projects",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "MenuIdProject",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "MenuId",
                table: "Calendars",
                type: "TEXT",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "MenuIdCalendar",
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
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Projects_Menus_MenuId",
                table: "Projects",
                column: "MenuId",
                principalTable: "Menus",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
                name: "MenuIdProject",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "MenuIdCalendar",
                table: "Calendars");

            migrationBuilder.AlterColumn<int>(
                name: "MenuId",
                table: "Projects",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "MenuId1",
                table: "Projects",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "MenuId",
                table: "Calendars",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(string),
                oldType: "TEXT",
                oldNullable: true);

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
                principalColumn: "Id");
        }
    }
}
