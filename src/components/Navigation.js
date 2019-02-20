import React from 'react';
import { Link } from 'react-router-dom';
import ResponsiveMenu from 'react-responsive-navbar';
import styled from 'styled-components'
import cplogo from '../images/logo.png';

const Wrapper = styled.div`
@import url('https://fonts.googleapis.com/css?family=Montserrat');
#nav-bar {
    color: white;
    margin: 0 auto;
    background-color: #142c82;
    width: 100%;
    padding: 1em 0 1em 0;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
.menu {
    margin-top: 1em;
}
.navcontainer {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
#logo {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
}
#logo a {
    list-style: none;
    color: white;
}
#logo img {
    width: 50px;
    border: 3px solid white;
    border-radius: 70%;
    margin-right: 15px;
}
#name-logo {
    display: inline-block;
    margin-right: 10em;
}
#name-logo:hover {
    color: #b8d6fc
}
#name-logo h2 {
    margin-bottom: -15px;
}
#nav-bar ul {
    display: flex;
    flex-direction: row;
}
#nav-bar ul li {
    list-style: none;
    margin-left: 1em;
    color: white;
}
#nav-bar ul li a {
    text-decoration: none;
    color: white;
}
#nav-bar ul li a:hover {
    color: #b8d6fc;
}
@media (max-width: 50rem) {
    #name-logo {
        display: block;
        margin: 0 auto;
    }
    #name-logo h2 {
        text-decoration: none;
    }
    .navcontainer {
        display: flex;
        flex-direction: column;
    }
    #logo {
        margin: 0 auto;
    }
    #logo a {
        text-decoration: none;
    }
    #logo {
        list-style: none;
    }
    #nav-bar ul {
        display: block;
    }
    #nav-bar ul li {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
        list-style: none;
        margin-bottom: 1em;
        margin-left: -2.4em;
        color: white;
    }
    #logo img {
        width: 50px;
        border: 3px solid white;
        border-radius: 70%;
        margin-right: 0;
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

export default () => {
    return (
        <Wrapper>
            <div id="nav-bar">
            <div className="containerwidth navcontainer">
                
                <div id="logo">
                <Link to="/">
                    <img src={cplogo} alt="CP"/>
                
                    <div id="name-logo">
                        <h2>Collin Prusse</h2>
                        <h4>Full-Stack Web Developer</h4>
                    </div>
                </Link>
                </div>
                <div className="menu">
                <ResponsiveMenu
                    menuOpenButton={<i className="fa fa-bars"></i>}
                    menuCloseButton={<i className="fa fa-times"></i>}
                    changeMenuOn="50rem"
                    largeMenuClassName="large-menu-classname"
                    smallMenuClassName="small-menu-classname"
                    menu={
                    <ul>
                        <li><Link to="/">Portfolio</Link></li>
                        <li><Link to="/about">About Me</Link></li>
                        <li><Link to="/contact">Contact Me</Link></li>
                    </ul>
                    }
                />
                    
                </div>
                
            </div>
        </div>
        </Wrapper>
    )
}