import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import 'bootstrap/dist/css/bootstrap.css';


export class Footer extends Component {
    static displayName = Footer.name;


    render() {
        return (
            <div>
                <footer class="footer-distributed">
                    <div id="logoFooter">
                        <img src="https://www.vy.no/web-assets/favicons/favicon-512x512.png" id="logo" />
                    </div>
                    <div class="footer-left">
                        <p id="footerOverskrift">Vygruppen</p>
                        <div id="footerLinker">
                            <ul>
                                <li><a href="/Om">Om oss</a></li>
                                <li><a href="#">Bærekraft og<br /> samfunnsansvar</a></li>
                                <li><a href="#">Kariere i Vy</a></li>
                                <li><a href="#">Presse og nyheter</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-center">
                        <p id="footerOverskrift">Kunderservice</p>
                        <div id="footerLinker">
                            <ul>
                                <li><a href="/FAQ">Spørsmål og svar</a></li>
                                <li><a href="/Kontakt">Hjelp og kontakt</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p id="footerOverskrift"> Vilkår og personvern</p>
                        <div id="footerLinker">
                            <ul>
                                <li><a href="#"> Transportvilkår </a></li>
                                <li><a href="#">Refusjonsbetingelser</a></li>
                                <li><a href="#">Personvern</a> </li>
                                <li><a href="#">Informasjonskapsler</a> </li>
                                <li><a href="/Om">Om nettsiden</a></li>
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}