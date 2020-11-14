import React from 'react';
import '../box-components/box-style/box-description.css'

class BoxTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxTitle: props.title,
        }
    }
    render() {
        return (
            <span className="box-title">{this.state.boxTitle} </span>
        )
    }
}

export { BoxTitle };