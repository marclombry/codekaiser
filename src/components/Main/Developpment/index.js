import React, { Component } from 'react';
//import Competence from '../Competence';

class Developpment extends Component {

    state = {
        web: [
            {
                icon:'<i class="icofont-imac"></i>',
                title:'CREATION DE SITE INTERNET',
                phrase:'Réalisation de site vitrine , dynamique ou e-commerce'
            },
            {
                icon:'<i class="icofont-brainstorming"></i>',
                title:'CONCEPTION',
                phrase:"Vous avez envie de crée une application mais vous ne savez pas par quoi commencer ?  pas de problème, on s' occupe de la concéption de vos projet"
            },
            {
                title:'DEVELOPPEMENT',
                phrase:'Un projet web où mobile a concrétisé ? ou tout simplement besoin de renfort sur vos équipes?'
            },
            {
                icon:'<i class="icofont-data"></i>',
                title:'DATA',
                phrase:'Vous cherchez à optimiser votre code ou vos requêtes Sql? Nous vous proposons un audit sur mesure '
            }
            
        ],
        audit: [
            {
                icon:'<i class="icofont-listening"></i>',
                title:'AUDIT',
                phrase:'Ou en êtes vous dans la transformation digital ? Nos Experts sont la pour vous guidé dans cette transformation.'
            },
            {
                icon:'<i class="icofont-listening"></i>',
                title:'AUDIT',
                phrase:'Vous cherchez à optimiser votre code ou vos requêtes Sql? Nous vous proposons un audit sur mesure '
            },
        ]
    }
    render(){

        const {web, audit} = this.state;
        let webs ='';
      
           
        
        //console.log(web,audit)
        return(
            <div>
                <h2>Développement</h2>
                {  web.map((index) => (
                        <div>
                            {index.icon}
                            <h2>{index.title}</h2>
                            <p>{index.phrase}</p>
                        </div>
                    ))
                    
                }
                <h2>Consulting</h2>
                {  audit.map((index) => (
                        <div>
                            {index.icon}
                            <h2>{index.title}</h2>
                            <p>{index.phrase}</p>
                        </div>
                    ))
                    
                }
            </div>
        )
    }
}

export default Developpment;