import React, { Component } from 'react';

/**For hjem-siden */
export class VyHjem extends Component {
    static displayName = VyHjem.name;

    render() {
        return (
            <div>
                <div id="home">
                    <h1 id="indexOverskrift">Velkommen til Vy kundeservice</h1>
                    <p id="intro">Har du krav på prisavslag eller erstatning? Har du spørsmål om kontrollgebyr? Å reise skal være enkelt,
                        men likevel kan det være ting du lurer på eller vil kontakte oss om. Konsernets strategi kalles «Den beste reisen»,
                        som også er konsernets visjon. Strategien tar utgangspunkt i kundene og deres behov og beskriver
                    omstillingen vi skal gjennom for å tilby kundene den beste reisen.</p>
                    <a href="/Kontakt"> <div class="goteborg" data-aos="fade-right">
                        <div class="bildeLinker">
                            <img src="https://images.vy.no/fsqhqrvdy4/Mann på toget.jpg" alt="Goteborg" />
                            <h2 class="title">Kontakt oss  <span class="glyphicon glyphicon-arrow-right"></span></h2>
                            <p id="titleTekst">Finn ut hvordan du kontakter VyGruppen</p>
                        </div>
                    </div>
                    </a>
                    <a href="/FAQ">
                        <div class="norskeFjorder" data-aos="fade-left">
                            <div class="bildeLinker">
                                <img src="https://images.vy.no/spcqk8yg35/Fjord.jpg" alt="Goteborg" />
                                <h2 class="title">Spørsmål og svar  <span class="glyphicon glyphicon-arrow-right"></span></h2>
                                <p id="titleTekst">Hva lurer du på? Velg tema og finn svar på alt fra hvem som kan få rabatt og hvordan du søker om refusjon til hvordan appen fungerer og hva slags bagasje du kan ta med om bord.</p>
                            </div>
                        </div>
                    </a>
                    <p id="boxOverskrift">Hva kan vi hjelpe deg med?</p>
                    <div id="boxOne" data-aos="fade-up">
                        <a href="https://www.vy.no/kundeservice/kontrollgebyr">
                            <p id="cardTitle">Kontrollgebyr på toget  <span class="glyphicon glyphicon-arrow-right"></span></p>
                        </a>
                        <p id="cardUnder">
                            Slik kan du klage eller søke om betalingsendring hvis du har fått bot fra oss.
                        </p>
                    </div>

                    <div id="boxTwo" data-aos="fade-up">
                        <a href="https://www.vy.no/kundeservice/prisavslag-og-erstatning">
                            <p id="cardTitle">Forsinket eller innstillt tog?  <span class="glyphicon glyphicon-arrow-right"></span></p>
                        </a>
                        <p id="cardUnder">
                            Søk om refusjon, erstatning eller prisavslag.
                        </p>
                    </div>

                    <div id="boxThree" data-aos="fade-up">
                        <a href="https://www.vy.no/kundeservice/hittegods">
                            <p id="cardTitle">Mistet eller glemt noe underveis?  <span class="glyphicon glyphicon-arrow-right"></span></p>
                        </a>
                        <p id="cardUnder">
                            Finn kontaktinformasjon for hittegods og les om gjenglemt bagasje.
                        </p>
                    </div>

                    <div id="boxFour" data-aos="fade-up">
                        <a href="https://www.vy.no/kundeservice/skjema/tilbakemelding">
                            <p id="cardTitle">Gi oss tilbakemelding  <span class="glyphicon glyphicon-arrow-right"></span></p>
                        </a>
                        <p id="cardUnder">
                            Vil du klage eller fortelle oss noe? Vi tar imot ris og ros.
                        </p>
                    </div>
                    <div id="trs"></div>
                </div>
            </div>
        );
    }
}