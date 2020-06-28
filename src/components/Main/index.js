import React, { Component } from 'react';
import Developpment from './Developpment';
import Consultant from './Consultant';
import Block from './Block';

class Main extends Component {

    render() {
        return (
            <div>
                <Developpment />
                <Block 
                    class="emerald block-consulting display-flex" 
                    text="< Vous rechercher un dev ? />"
                    name="Mon Dev"
                />
                
                <Consultant />
                <Block 
                    class="emerald block-consulting display-flex" 
                    text="< Besoin d'un Consultant ? />"
                    name="Mon Consultant"
                />
            </div>
        )
    }
}


export default Main;