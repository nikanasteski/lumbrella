using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using rwa_project.Model;

namespace rwa_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        //[HttpPost]
        //public async Task<IActionResult> Login([FromBody] Login login)
        //{
        //    if (login == null || string.IsNullOrEmpty(login.Username) || string.IsNullOrEmpty(login.Password))
        //    {
        //        return BadRequest("Invalid login request.");
        //    }

        //    var user = await _context.Logins
        //        .Where(u => u.Username == login.Username && u.Password == login.Password)
        //        .FirstOrDefaultAsync();

        //    if (user != null)
        //    {
        //        return Ok("Login successful!");
        //    }
        //    else
        //    {
        //        return Unauthorized("Invalid username or password.");
        //    }
        //}

        // GET: Login/Check
        [HttpGet]
        public IActionResult Check(string username, string password)
        {
            var user = _context.Logins.FirstOrDefault(u => u.Username == username && u.Password == password);
            if (user != null)
            {
                return Ok("User found");
            }
            return NotFound("User not found");
        }
    }

}


