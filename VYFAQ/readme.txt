**********OM L�SNINGEN*****
Clientapp:
VyHjem.js: N�r appplikasjonen kj�res kommer VyHjem. Denne inneholder lenker til ulike deler av l�sningen eller til Vy.no. Denne siden fungerer som en index/hjem-side for prosjektet.
FAQ.js: FAQ med rating av sp�rsm�lene/svarene. Sp�rsm�lene/svarene er lagret i db.
Kontakt.js: Kontaktskjema der bruker kan sende inn sp�rsm�l/henvendelser til kundeservice. Lagres i db.

Model:
Alt tilh�rende databasen i Model. Databasen best�r av en tabell for ofte stilte sp�rsm�l og en tabell for kundehenvendelser fra kontaktskjemaet(denne vil v�re tom da databasen slettes f�r innlevering)

**********TEKNOLOGI*************
Entitiy Framework code first for databasen
SPA med React v16.8.0

*****KODE SOM IKKE ER EGENUTVIKLET*******
Animasjonene (fade up) p� indexsiden er ikke egenutviklet . For animasjoner p� objektene p� index sidene er det brukt et plugin, hentet fra: https://michalsnik.github.io/aos/
Gjenbrukt noe av koden fra gruppeoppgave 2, bla html-kode og styling for bildene p� index-siden

*******Camilla Arntzen (s326162) november 2019*****