**********OM LØSNINGEN*****
Clientapp:
VyHjem.js: Når appplikasjonen kjøres kommer VyHjem. Denne inneholder lenker til ulike deler av løsningen eller til Vy.no. Denne siden fungerer som en index/hjem-side for prosjektet.
FAQ.js: FAQ med rating av spørsmålene/svarene. Spørsmålene/svarene er lagret i db.
Kontakt.js: Kontaktskjema der bruker kan sende inn spørsmål/henvendelser til kundeservice. Lagres i db.

Model:
Alt tilhørende databasen i Model. Databasen består av en tabell for ofte stilte spørsmål og en tabell for kundehenvendelser fra kontaktskjemaet(denne vil være tom da databasen slettes før innlevering)

**********TEKNOLOGI*************
Entitiy Framework code first for databasen
SPA med React v16.8.0

*****KODE SOM IKKE ER EGENUTVIKLET*******
Animasjonene (fade up) på indexsiden er ikke egenutviklet . For animasjoner på objektene på index sidene er det brukt et plugin, hentet fra: https://michalsnik.github.io/aos/
Gjenbrukt noe av koden fra gruppeoppgave 2, bla html-kode og styling for bildene på index-siden

*******Camilla Arntzen (s326162) november 2019*****