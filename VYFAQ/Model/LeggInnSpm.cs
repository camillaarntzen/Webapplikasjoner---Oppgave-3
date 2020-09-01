using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;

namespace VyOppgave3.Model
{
    //Legger inn i Qaspm-db
    public class LeggInnSpm
    {
        public static void LeggInn(IServiceScope serviceScope)
        {
            var dbContext = serviceScope.ServiceProvider.GetRequiredService<Context>();
            dbContext.Database.EnsureCreated();
            if (!dbContext.Qaspm.Any())
            {
                var Qaspm = new Qaspm[]
                {
                      new Qaspm()
                    {
                    spm = "Er toget i rute?",
                    svar = "Nei!",
                    stemmer = 1
                    },
                         new Qaspm()
                    {
                    spm = "Hvorfor er det så fullt på toget?",
                    svar = "I rushtidene er alt vi har av tilgjengelig materiell i bruk. Vi forsøker å matche etterspørselen med «riktig» kapasitet så langt det lar seg gjøre, likevel er det ikke mulig å tilby sitteplasser til alle. Vi får stadig flere togsett levert fra fabrikk så på sikt øker det muligheten til å kjøre flere avganger med doble togsett.Det kan imidlertid være mange grunner til at et tog er veldig fullt. For eksempel om en tidligere avgang ble forsinket eller innstilt kan det føre til at neste tog vil ha flere passasjerer enn vanlig. Noen ganger kan det også være uforutsette hendelser som gjør at vi ikke kan kjøre med det planlagte antall togsett eller vogner. Da blir det ofte satt opp buss i tillegg til toget.",
                    stemmer = 4
                    },

                     new Qaspm()
                    {
                    spm = "Toget mitt er innstilt. Kan jeg bruke Vy-bussen som går på samme strekning i stedet?",
                    svar = "Ja, det kan du, men da må du kjøpe bussbillett. Togbilletten din er ikke gyldig på busser, med mindre bussen du vil ta er satt opp som alternativ transport for togreisen din. Årsaken er at det foreløpig ikke er et samarbeid om billetter mellom tog og buss i Vy.Hvis toget blir innstilt kan du ta neste tog eller benytte alternativ transport, dersom vi tilbyr dette. Husk at du kan søke om prisavslag for togbilletten ved forsinkelse.Prisavslaget kan da dekke hele eller deler av kostnaden for å kjøpe billett til en Vy - buss.",
                    stemmer = 8
                    },
                      new Qaspm()
                    {
                    spm = "Kan jeg ha med små elektriske kjøretøy? (Segway, sparkesykkel, o.l.)",
                    svar = "Større tohjulinger som Segway kan i sjeldne tilfeller være mulig å ta med som spesialbagasje dersom det er plass. Ta kontakt med kundeservice god tid før reisen dersom du vil at vi skal sjekke om tohjulingen kan bli med på toget.Du kan ta med mindre enhjulinger og ståbrett, elektrisk skateboard og elektrisk sparkesykkel på toget, men du må plassere disse i området avsatt for bagasje.Hvis det ikke er plass der," +
                    " kan kjøretøyet tas med dersom det ikke er til hinder for konduktør, øvrige passasjerer eller av / påstigning.Du kan ikke plassere kjøretøyet i midtgangen, da dette er rømningsvei.Konduktøren avgjør om kjøretøyet kan tas med om bord i toget.Litium - ion batterier som benyttes i små elektriske kjøretøy skal ikke lades om bord i toget.Små elektriske kjøretøy skal være tydelig merket med produsentens navn, typebetegnelse og fabrikasjonsnummer.Merkingen skal være plassert og utført slik at det er godt synlig.",
                    stemmer = 2
                    },
                       new Qaspm()
                    {
                    spm = "Hvor mye bagasje kan jeg ha med?",
                    svar = "Du kan ta med deg inntil 30 kilo fordelt på maksimum 3 kolli. Har du mer enn dette og skal reise mellom Oslo og Voss/Bergen eller Trondheim, kan du benytte bagasjetransport.",
                    stemmer = 1
                    },
                        new Qaspm()
                    {
                    spm = "Kan jeg varme opp babymat og flasker om bord?",
                    svar = "Ja, det kan du gjøre i kafeen, dersom det er kafé på din togstrekning. Kaféen finner du på Dovrebanen (Oslo–Trondheim), Sørlandsbanen (Oslo–Stavanger), Bergensbanen (Oslo–Bergen) og Nordlandsbanen (Trondheim–Bodø)",
                    stemmer = 9
                    },
                         new Qaspm()
                    {
                    spm = "Jeg rakk ikke toget. Kan jeg få refundert billetten?",
                    svar = "Alle billetter må refunderes før avgang, du vil ikke ha krav på refusjon etter togavgangen dersom du ikke rekker toget ditt.",
                    stemmer = 7
                    }

                };

                foreach (var a in Qaspm)
                {
                    dbContext.Qaspm.Add(a);
                    dbContext.SaveChanges();
                }
            }
        }
    }
}
