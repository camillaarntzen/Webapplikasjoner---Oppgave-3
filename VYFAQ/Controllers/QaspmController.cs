using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using VyOppgave3.Model;

//Controller for FAQ
namespace VyOppgave3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QaspmController : ControllerBase
    {
        private readonly Context dBcontext;

        public QaspmController(Context context)
        {
            dBcontext = context;
        }

        // GET: api/Qaspm
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Qaspm>>> GetQaspm()
        {
            return await dBcontext.Qaspm.ToListAsync();
        }

        // GET: api/Qaspm
        [HttpGet("{id}")]
        public async Task<ActionResult<Qaspm>> GetQaspm(int id)
        {
            var spm = await dBcontext.Qaspm.FindAsync(id);

            if (spm == null)
            {
                return NotFound();
            }

            return spm;
        }

        // PUT: api/Qaspm
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQaspm(int stemmer, int ID)
        {

            try
            {
                var spm = dBcontext.Qaspm.Find(ID);
                spm.stemmer += stemmer;
                await dBcontext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!QaspmExists(ID))
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

        // POST: api/Qaspm
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Qaspm>> PostQaspm(Qaspm spm)
        {
           dBcontext.Qaspm.Add(spm);
            await dBcontext.SaveChangesAsync();

            return CreatedAtAction("GetQaspm", new { id = spm.ID }, spm);
        }

        // DELETE: api/Qaspm
        [HttpDelete("{id}")]
        public async Task<ActionResult<Qaspm>> DeleteQaspm(int id)
        {
            var spm = await dBcontext.Qaspm.FindAsync(id);
            if (spm == null)
            {
                return NotFound();
            }

            dBcontext.Qaspm.Remove(spm);
            await dBcontext.SaveChangesAsync();

            return spm;
        }

        private bool QaspmExists(int id)
        {
            return dBcontext.Qaspm.Any(e => e.ID == id);
        }
    }
}
