import React from 'react';

class BoxImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {url : props.url};
    }
    render() {
        return (
                <img src={this.state.url} alt="DogDeveloper"></img>
        )
    }
}

export { BoxImage };