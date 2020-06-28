import React, { Component } from 'react';

class Slide extends Component {

    state = {
        "slidetitle":"Code Kaiser",
        "catchphrase":"Consultant en développement informatique"
    }
   
    render() {
    
        return (
            <div className="img-background">
                <h1 className="slide-title">{this.state.slidetitle}</h1>
                <div className="catchphrase text-intro">{this.state.catchphrase}</div>
            </div>
        )
    }
}
export default Slide;