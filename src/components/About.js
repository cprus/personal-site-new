import React, {Component} from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import styled from 'styled-components'
import myface from '../images/myface.jpg';

const Wrapper = styled.div`
.aboutbody {
    background-color: #142c82;
    width: 100%;
}
.aboutcontainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 30px 80px 30px;
}
.aboutinfo {
    text-align: left;
    color: white;
    margin-left: 55px;
    line-height: 2;
}
.aboutinfo a {
    text-decoration: none;
    color: white;
    text-align: center;
    vertical-align: top;
    margin-right: 25px;
}
.aboutinfo a:hover {
    color: #b8d6fc;
}
.aboutlinks {
    text-align: center;
    margin: 0 auto;
    margin-top: 2em;
}
.myface {
    margin-top: 25px;
}
.myface img {
    width: 15em;
    border-radius: 100%;
    border: 5px solid white;
    box-shadow: 5px 5px 18px #272728;
}
@media (max-width: 45rem) {
    .aboutcontainer {
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    .aboutinfo {
        margin-left: auto;
        margin-right: auto;
        text-align: center;
    }
    .aboutinfo h1 {
        margin-left: auto;
        margin-right: auto;
    }
    .myface {
        margin: 0 auto;
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
const aboutMe = "I am a recent graduate of the Coding Dojo Full-Stack Web Developer program. I am proficient in React/Redux, MEAN, and Python with Django, and am an excellent communicator and problem solver with a knack for quickly learning new technologies and libraries. I'm currently seeking an opportunity where I can use creativity alongside my technical abilities to solve unique and interesting problems."

class About extends Component {
    
    render(){
        return (
            <Wrapper>
                <div className="aboutbody">
                <Navigation />
                    <div className="containerwidth aboutcontainer">
                        
                        <div className="myface">
                            <img src={myface} alt="My Photo"/>
                        </div>
                        <div className="aboutinfo">
                        <h1>About Collin</h1>
                        <p>{aboutMe}</p>
                        <div className='aboutlinks'>
                        <a href="https://github.com/cprus" target="_blank" rel="noopener noreferrer">View My Github</a>
                        <a href="https://www.linkedin.com/in/collin-prusse/" target="_blank" rel="noopener noreferrer">View My LinkedIn</a>
                        </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </Wrapper>
        );
    }
};

export default About;