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
                    class="emerald block-consulting" 
                    text="Vous rechercher un dev ?"
                    
                />
                <Consultant />
                
            </div>
        )
    }
}


export default Main;