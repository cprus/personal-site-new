import React from 'react';
import styled from 'styled-components'
import reactlogo from '../images/react.png';

const Wrapper = styled.div`
footer {
    text-align: center;
    background-color: #2c2c2d;
    color: white;
    width: 100%;
    padding: 15px 0 15px 0;
}
footer ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
footer ul li {
    list-style: none;
}
footer ul li i {
    font-size: 2.5em;
    margin-right: 40px;
    color: white;
}
footer ul li i:hover {
    color: #b8d6fc;
}
.footerp {
    text-align: center;
    margin: 0 auto;
    margin: 0 0 0 0;
}
.footermade {
    margin-left: -25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
#react {
    width: 2em;
    margin-left: 10px;
    margin-top: 10px;
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
    return(
        <Wrapper>
            <footer>
                <ul>
                    <li><a href="https://github.com/cprus" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/collin-prusse/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://twitter.com/Collinalllcars" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                </ul>
                <p className="footerp">Copyright&copy; 2018 Collin Prusse</p>
                <div className="footermade">
                <ul>
                    <li><p>Made with React</p></li>
                    <li><img id="react" src={reactlogo} alt="React Logo"/></li>
                </ul>
                </div>
            </footer>
        </Wrapper>
    )
}