using System;
using System.ComponentModel.DataAnnotations;

namespace VyOppgave3.Model
{
    //DB for kundehenvendelser
    public class Kontaktspm
    {
        [Key]
        public int ID { get; set; }
        public String navn { get; set; }
        public String epost { get; set; }
        public String emne { get; set; }
        public String melding { get; set; }
    }
}