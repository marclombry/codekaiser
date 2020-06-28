import React, { Component } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
class Footer extends Component {

    displayMention(){
        alert("ce site est un site a but pédagogique il ne stock aucune donnée")
    }

    render() {
        return (
            <div className="bg-emerald display-flex flex-wrap justify-content-space-around">
                <ul className="list-none ">
                    <li><a href="https://www.marclombry.com/" className="no-deco cloud">Contactez nous</a></li>
                    <li className="cloud" onClick={this.displayMention}>Mentions légales</li>
                    <li><FaGithub size="1em" color="white"/><a href="https://github.com/marclombry" className="no-deco cloud"> GitHub</a></li>
                    <li><FaLinkedin size="1em" color="white"/><a href="https://www.linkedin.com/in/marc-lombry-718207122/?originalSubdomain=fr" className="no-deco cloud"> Linkedin</a></li>
                </ul>
            </div>
        )
    }
}

export default Footer;