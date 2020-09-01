import React, { Component } from 'react';
import axios from "axios"; 

/**For vudering til FAQ */
export class Vurdering extends Component {

    //For ratingen av svarene
    stemmeHandler(id, stemmer) {
        axios.put('api/Qaspm/' + id + '?stemmer=' + stemmer)
            .then(responses => {
                console.log(responses)
            })
            .catch(error => {
                console.log(error)
            })
        window.location.reload(false)
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4 text-right">
                    <button id="voteBtn" className="btn btn-primary" onClick={() => this.stemmeHandler(this.props.RatingId, 1)}> <span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span>   Stem opp</button>
                </div>
                <div className="col-md-4 text-center">
                    <p id="stemmer">{this.props.rating} stemmer</p>
                </div>
                <div className="col-md-4 text-left">
                    <button id="voteBtn" className="btn btn-primary" onClick={() => this.stemmeHandler(this.props.RatingId, (-1))}><span class="glyphicon glyphicon-thumbs-down" aria-hidden="true"></span>   Stem ned</button>
                </div>
            </div>
            )
    }
}
