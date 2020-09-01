import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { VyHjem } from './components/VyHjem';
import { Kontakt } from "./components/Kontakt";
import { FAQ } from "./components/FAQ";

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={VyHjem} />
            <Route path='/Kontakt' component={Kontakt} />
            <Route path='/FAQ' component={FAQ} />
      </Layout>
    );
  }
}
