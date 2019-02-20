import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Wrapper = styled.div`
.notfound {
    background-color: #142c82;
    min-height: 100%;
    width: 100%;
    color: white;
    position: absolute; top: 0; left: 0;
}
.notfound h4 {
    font-size: 4em;
}
.notfound a {
    text-decoration: none;
    color: white;
    font-size: 2em;
}
.notfound a:hover {
    color: #b8d6fc;
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

const NotFoundPage = () => (
    <Wrapper>
        <div className="notfound">
            <div className="containerwidth">
            <h4>Page Not Found!</h4>
            <Link to="/">Return Home</Link>
            </div>
        </div>
    </Wrapper>
    
);

export default NotFoundPage;