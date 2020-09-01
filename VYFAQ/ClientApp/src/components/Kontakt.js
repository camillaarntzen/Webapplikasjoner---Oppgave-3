import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label, FormFeedback } from 'reactstrap';
import { render } from 'react-dom';
import axios from "axios";


/**For kontaktskjema for henvendelser fra kunder**/
export class Kontakt extends Component {
    static displayName = Kontakt.name;

    //Konstruktør
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            navn: '',
           epost: '',
            emne: '',
            melding: '',
           
        }
    }

    //Henter fra db via controller
    componentDidMount() {
        fetch("api/Kontaktspm")
            .then(response => response.json())
            .then(responseJson => {
                this.setState({ data: responseJson });
                console.log(this.state);
            })
            .catch(error => {
                console.error(error)
            });
    }

    changeHandler = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    submitQ = (event) => {
        event.preventDefault();
        axios.post('api/Kontaktspm', this.state)
            .then(response => {
                this.setState({
                    navn: '',
                    epost: '',
                    emne: '',
                    melding: '',
                   
                })
            })
            .catch(error => {
                console.log(error)
            })
        window.location.reload(false)
    };

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }
    state = {
        chars_left: 1000,
        max_char: 1000
    }

  

    //For max antall tegn tilbakemelding under inputfelt
    handleWordCount = event => {
        const charCount = event.target.value.length;
        const maxChar = this.state.max_char;
        const charLength = charCount;
        this.setState({ chars_left: charLength });
    }


    render() {
        return (
            <div>
                <h1 id="kontaktOverskrift">Kontaktskjema</h1>
                <div id="under">
                    <p id="kontaktUnderskrift">Har du krav på prisavslag eller erstatning? Har du spørsmål om kontrollgebyr? Å reise skal være enkelt, men likevel kan det være ting du lurer på eller vil kontakte oss om. Fyll ut skjemaet med kontaktinformasjon og det du lurer på. Vi hjelper deg med det du lurer på!
                        Vi anbefaler å sjekke vår <a href="/FAQ">FAQ</a> først, kanskje ditt spørsmål er besvart der.</p>
                </div>

                <Form id="kontaktForm" onSubmit={this.submitQ}>
                    <FormGroup>
                        <Label for="name" id="nameInputLabel">Fullt navn *</Label>
                        <Input ref="name" type="text" name="navn" id="nameInput" placeholder="Navn.." value={this.state.navn} onChange={this.changeHandler} className="form-control" required />
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleEmail" id="inputLabel">Epost *</Label>
                        <Input refs="email" type="email" name="epost" id="emailInput" placeholder="Epost.." value={this.state.epost} onChange={this.changeHandler} className="form-control" required />
                     
                    </FormGroup>

                    <FormGroup>
                        <Label for="Emne" id="inputLabel">Emne *</Label>
                        <Input refs="emne" type="text" name="emne" id="emneInput" placeholder="Emne.." value={this.state.emne} onChange={this.changeHandler} className="form-control" required />
                    
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText" id="inputLabel">Hva kan vi hjelpe deg med? *</Label><br />
                        <div id="dont">  <span>Ikke skriv sensitiv informasjon i feltet, som bankkortnummer eller helseopplysninger. Vi spør senere, hvis vi trenger det.</span></div>
                        <Input refs="melding" type="textarea" name="melding" id="textInput" maxlength="1000" placeholder="Skriv her" value={this.state.melding} onChange={this.changeHandler} className="form-control" required onInput={this.handleWordCount} />
                        <span id="sessionNum_counter">{this.state.chars_left} / 1000</span><br />
                        
                    </FormGroup>

                    <Button id="sendQuestion" type="submit">Send spørsmål </Button>
                </Form>
            </div>
        );
    }
}
