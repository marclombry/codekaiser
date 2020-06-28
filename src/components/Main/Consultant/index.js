import React, { Component } from 'react';
import { FaCode } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
class Consultant extends Component {
    state = {
        audit: [
            {
                icon:<FaEdit size='6em' color='#495A6A' />,
                title:'AUDIT',
                phrase:'Ou en êtes vous dans la transformation digital ? Nos Experts sont la pour vous guidé dans cette transformation.',
                link:''
            },
            {
                icon:<FaCode size='6em' color='#495A6A' />,
                title:'CODE REVIEW',
                phrase:'Vous cherchez à optimiser votre code ou vos requêtes Sql? Nous vous proposons un audit sur mesure ',
                link:''
            },
            {
                icon:<FaChalkboardTeacher size='6em' color='#495A6A' />,
                title:'Formation',
                phrase:'Vous chercher une mise a niveau ou acquérir de nouvelle compétence ? Suivez nos formations ou optez pour une formations "sur mesure"',
                link:''
            },
        ],

        display:false
    }
 
    render(){

        const {audit} = this.state;

        return(
            <div>
                <h2 id="consulting">Consulting</h2>
                <div class="display-flex flex-wrap-wrap justify-content-space-around">
                    
                    {  audit.map((index) => (
                            <div key={index} className="width400px">
                                {index.icon}
                                <h3>{index.title}</h3>
                                <p>{index.phrase}</p>
                            </div>
                        ))
                        
                    }
                </div>
            </div>
        )
    }
}

export default Consultant;