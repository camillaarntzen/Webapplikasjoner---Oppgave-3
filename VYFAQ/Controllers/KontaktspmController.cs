using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VyOppgave3.Model;

//Controller for kundehenvendelser
namespace VyOppgave3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class KontaktspmController : ControllerBase
    {
        private readonly Context dBContext;

        public KontaktspmController(Context context)
        {
            dBContext = context;
        }

        // GET: api/Kontaktspm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Kontaktspm>>> GetKontaktspm()
        {
            return await dBContext.Kontaktspm.ToListAsync();
        }

        // GET: api/Kontaktspm
        [HttpGet("{id}")]
        public async Task<ActionResult<Kontaktspm>> GetKontaktspm(int id)
        {
            var kontaktspm = await dBContext.Kontaktspm.FindAsync(id);

            if (kontaktspm == null)
            {
                return NotFound();
            }

            return kontaktspm;
        }

        // PUT: api/Kontaktspm/
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutKontaktspm(int id, Kontaktspm kontaktspm)
        {
            if (id != kontaktspm.ID)
            {
                return BadRequest();
            }

            dBContext.Entry(kontaktspm).State = EntityState.Modified;

            try
            {
                await dBContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!KontaktspmExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Kontaktspm
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Kontaktspm>> PostKontaktspm(Kontaktspm kontaktspm)
        {
            dBContext.Kontaktspm.Add(kontaktspm);
            await dBContext.SaveChangesAsync();

            return CreatedAtAction("GetKontaktspm", new { id = kontaktspm.ID }, kontaktspm);
        }

        // DELETE: api/Kontaktspm
        [HttpDelete("{id}")]
        public async Task<ActionResult<Kontaktspm>> DeleteKontaktspm(int id)
        {
            var kontaktspm = await dBContext.Kontaktspm.FindAsync(id);
            if (kontaktspm == null)
            {
                return NotFound();
            }

            dBContext.Kontaktspm.Remove(kontaktspm);
            await dBContext.SaveChangesAsync();

            return kontaktspm;
        }

        private bool KontaktspmExists(int id)
        {
            return dBContext.Kontaktspm.Any(e => e.ID == id);
        }
    }
}
