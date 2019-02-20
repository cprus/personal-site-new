import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components'

const Wrapper = styled.div`
.contactbody {
    background-color: #142c82;
    width: 100%;
}
.contactform {
    color: white;
    padding-bottom: 3em;
}
.contactform h2 {
    font-size: 3em;
    margin-bottom: 2em;
}
.contactform p {
    line-height: 2em;
    max-width: 40rem;
    margin: 0 auto;
    margin-bottom: 15em;
}
#span {
    color: #b8d6fc;
    text-decoration: underline;
}
.contactform i {
    color: white;
    font-size: 2em;
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

export default () => {
        return (
            <Wrapper>
                <div className="contactbody">
                <Navigation />
                <div className="containerwidth contactform">
                    <h2>Contact Me!</h2>

                    <p>Please feel free to contact me with any questions about my work or any possible employment opportunities. The best way to get a hold of me is to send me a message on LinkedIn. You can find my profile <a href="https://www.linkedin.com/in/collin-prusse/" target="_blank"><span id="span">here.</span></a></p>

                </div>
                <Footer/>
                </div>
            </Wrapper>
        );
    }

    