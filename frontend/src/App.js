import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing/Landing';
import Layout from './components/Layout/Layout';
import Quote from './pages/Quote/Quote';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' exact render={() => <Landing />} />
            <Route path='/quote/:symbol' render={() => <Quote />} />
          </Switch>
        </Layout>
      </div>
    </Router>
  );
}
