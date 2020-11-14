import React from 'react';
import '../box-components/box-style/box-description.css'

class BoxAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            boxAuthor: props.author,
        }
    }
    render() {
        return (
            <span className="box-author">{this.state.boxAuthor} </span>
        )
    }
}

export { BoxAuthor };