import React from 'react';
import styled from 'styled-components'
import rentmindmelogo from '../images/rmmpersonal.jpg';
import expensify from '../images/expensify.png';
import weatherapp from '../images/weather.jpg';
import reduxblog from '../images/reduxblog.jpg';
import indecisionapp from '../images/indecision.jpg';

const Wrapper = styled.div`
.portbody {
    background-color: #b8d6fc;
    padding-top: 20px;
}
.portitems {
    /* display: flex;
    justify-content: space-between;
    flex-wrap: wrap; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2em;
}
.portitems img {
    width: 14em;
    border-radius: 2%;
    box-shadow: 1px 1px 18px #272728;
    transition: transform .2s;
}
.portitems img:hover {
    transform: scale(1.1);
}
.port-item {
    width: 14em;
}
@media (max-width:45rem) {
    .portitems {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .portbody {
        text-align: center;
    }
    .port-item {
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 2em;
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

export default () => (
    <Wrapper>
    <div className="portbody">
        <div className="containerwidth">
            <div className="portitems">
                <div className="port-item">
                    <a href="https://www.rentmindme.com" target="_blank" rel="noopener noreferrer">
                    <img src={rentmindmelogo} alt = "RentMindMe"/>
                    </a>
                    <p>Developer for RentMindMe, a platform for property landlords and tenants to facilitate payments, maintenance requests, and manage properties.</p>
                </div>
                <div className="port-item">
                    <a href="https://expensify-app-react-28.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={expensify} alt = "Expensify App"/>
                    </a>
                    <p>Responsive expenses tracking application using React and Redux for the front-end, and Firebase for back-end storage and login authentication.</p>
                </div>
                <div className="port-item">
                    <a href="https://weather-app-collin-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={weatherapp} alt = "Weather App"/>
                    </a>
                    <p>A simple weather search app using a weather API to view trends in the weather. Information is stored in Redux and a third-party library is used to graph out the data.</p>
                </div>
                <div className="port-item">
                    <a href="https://redux-blog-collin-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={reduxblog} alt = "Redux Blog"/>
                    </a>
                    <p>Simple blog post application created in React that stores posts within the Redux store.</p>
                </div>
                <div className="port-item">
                    <a href="https://indecisionapp-collin-portfolio.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img src={indecisionapp} alt = "Indecision App"/>
                    </a>
                    <p>A to-do type application that stores user input data in the React front-end store, and randomly selects a task to be completed.</p>
                </div>
            </div>
        </div>
    </div>
    </Wrapper>
    
);