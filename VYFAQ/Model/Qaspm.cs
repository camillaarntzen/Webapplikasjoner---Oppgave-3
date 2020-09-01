using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VyOppgave3.Model
{
    //FAQ-db
    public class Qaspm
    {
        [Key]
        public int ID { get; set; }
        public String spm { get; set; }
        public String svar { get; set; }
        public int stemmer { get; set; }
    }
}
