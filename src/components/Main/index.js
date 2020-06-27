import React, { Component } from 'react';
import Developpment from './Developpment';
import Consultant from './Consultant';


class Main extends Component {

    render() {
        return (
            <div>
                <Developpment />
                <Consultant />
            </div>
        )
    }
}

export default Main;