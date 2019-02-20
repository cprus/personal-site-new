import React, { Component } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import Portfolio from './Portfolio';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components'

const Wrapper = styled.div`
#main-body {
    width: 100%;
    background-color: #142c82;
    color: white;
    padding: 80px 0px 200px 0px;
    text-align: center;
    margin: 0 auto;
}
.maincolor a {
    color: white;
    text-decoration: none;
}
.maincolor a:hover {
    color: #b8d6fc;
}
#main-body h2 {
    font-size: 3em;
}
#main-body h5 {
    font-size: 1.5em;
    letter-spacing: .5px;
}
#main-body i {
    margin-top: -15px;
    font-size: 3em;
}

@media (max-width: 42rem) {
    #main-body h2 {
        font-size: 2em;
    }
    #main-body h5 {
        font-size: 1em;
    }
}
.container {
    margin: 0 !important;
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
}
.containerwidth {
    max-width: 50em;
    text-align: center;
    margin: 0 auto;
}
body {
    margin: 0;
    width: 100%;
}
`;

class HomePage extends Component {
    render() {
        return (
            <Wrapper>
                <Navigation />
                <div id="main-body">
                    <h2>Full-Stack Web Developer</h2>
                    <h5>Specializing in responsive Front-End development with React and Redux</h5>
                    <div className="maincolor">
                        <AnchorLink href='#port'>
                        <p>VIEW PORTFOLIO</p>
                        <i className="fa fa-angle-down"></i>
                        </AnchorLink>
                    </div>
                </div>
                <div id="port">
                <Portfolio />
                </div>
                
                <Footer />
            </Wrapper>
        );
    }
}

export default HomePage;