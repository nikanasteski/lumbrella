using System.Net;
using System.Net.Mail;
using Microsoft.AspNetCore.Mvc;
using rwa_project.Model;


namespace rwa_project.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        private const string FixedRecipientEmail = "nikadrob@gmail.com";
        [HttpPost]
        public IActionResult SendEmail([FromBody] Email emailRequest)
        {
            try
            {
                var smtpClient = new SmtpClient("smtp-relay.brevo.com")
                {
                    Port = 587,
                    Credentials = new NetworkCredential("sinisanasteski@gmail.com", "zjZbp3CKLmsV9n5Y"),
                    EnableSsl = true,
                };

                var mailMessage = new MailMessage
                {
                    From = new MailAddress(emailRequest.From),
                    Subject = emailRequest.Subject,
                    Body = $"Osoba {emailRequest.Name} poslao/la je mail sa slijedećim sadržajem :\n{emailRequest.Body}",
                    IsBodyHtml = false,
                };
                mailMessage.To.Add(FixedRecipientEmail);

                smtpClient.Send(mailMessage);
                return Ok("Email sent successfully");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }

 
}