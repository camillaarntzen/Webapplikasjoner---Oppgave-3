using Microsoft.EntityFrameworkCore;
using StackExchange.Redis;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace VyOppgave3.Model
{
    //DBContext
    public class Context : DbContext 
    {
        public Context(DbContextOptions<Context> options)
        : base(options) { }
        public DbSet<Qaspm> Qaspm { get; set; }
        public DbSet<Kontaktspm> Kontaktspm { get; set; }

    }
}
