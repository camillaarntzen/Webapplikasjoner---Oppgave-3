import React, { Component } from 'react';
import { Vurdering } from './Vurdering';

/**For ofte stilte spørsmål og svar */
export class FAQ extends Component {
    static displayName = FAQ.name;

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    //Henter fra controller
    componentDidMount() {
        fetch("api/Qaspm")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson });
                console.log(this.state);
            })
            .catch(error => {
                console.error(error)
            });

    }

    render() {
        return (
            <div>
                <div id="content">
                    <h1 id="faqOverskrift">FAQ</h1>
                    <p id="faqUnderskrift">Få svar på de mest stilte spørsmålene hos Vy. Hva lurer du på? Finn svar
                        på alt fra hvem som kan få rabatt og hvordan du søker om refusjon til hvordan appen
                        fungerer og hva slags bagasje du kan ta med om bord. Fant du ikke svar på det du lurte på? Kontakt oss via kontaktskjemaet <a href="/Kontakt">her</a> </p>

                </div>
                <br/>
                <div className="container-fluid" id="faqC">
                    {this.state.data.map((obj, i) => {
                        return (
                            <div key={i} className="card text-black bg-light mb-3" id="kort">
                                <div id={obj.id} className="card-header text-light bg-dark"><h5 className="card-title text-center">Spørsmål: {obj.spm}</h5></div>
                                <div className="card-body text-black bg-light">
                                    <p className="" id="svarTekst"><b>Svar: </b> {obj.svar}</p>
                                </div>
                                <div className="card-footer text-light bg-dark">
                                    <Vurdering rating={obj.stemmer} RatingId={obj.id} />
                                    </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
