import React, { Component } from 'react';
//import Competence from '../Competence';
import { FaCog } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaCodeBranch } from "react-icons/fa";



class Developpment extends Component {

    state = {
        web: [
            {
                icon:<FaDesktop size='6em' color='#495A6A' />,
                title:'CREATION DE SITE INTERNET',
                phrase:'Réalisation de site vitrine , dynamique ou e-commerce',
                link:''
            },
            {
                icon:<FaCog size='6em' color='#495A6A' />,
                title:'CONCEPTION',
                phrase:"Vous avez envie de crée une application mais vous ne savez pas par quoi commencer ?  pas de problème, on s' occupe de la concéption de vos projet",
                link:''
            },
            {
                icon:<FaCodeBranch size='6em' color='#495A6A' />,
                title:'DEVELOPPEMENT',
                phrase:'Un projet web où mobile a concrétisé ? ou tout simplement besoin de renfort sur vos équipes?',
                link:''
            },
            {
                icon:<FaDatabase size='6em' color='#495A6A' />,
                title:'DATA',
                phrase:'Vous cherchez à optimiser votre code ou vos requêtes Sql? Nous vous proposons un audit sur mesure ',
                link:''
            }
            
        ],

        display:false
    }

    showFormation(e){
       
      
    }

    render(){

        const {web} = this.state;
        
        
        //console.log(web,audit)
        return(
            <div>
                <h2 id="developpement">Développement</h2>
                <div className="display-flex flex-wrap-wrap justify-content-space-around">
                   
                    {  web.map((index) => (
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

export default Developpment;