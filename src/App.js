import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';
import NotFoundPage from './components/NotFoundPage';
import styled from 'styled-components';


const Wrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route path="/contact" component={Contact} exact={true}/>
          <Route path="/about" component={About} exact={true}/>
          <Route path="/" component={HomePage} exact={true}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </Wrapper>
    );
  }
}

export default App;
