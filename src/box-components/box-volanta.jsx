import React from 'react';
import '../box-components/box-style/box-description.css'

class BoxVolanta extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxVolanta: props.volanta,
        }
    }
    render() {
        return (

            <span className="box-volanta">{this.state.boxVolanta} </span>

        )
    }
}

export { BoxVolanta };