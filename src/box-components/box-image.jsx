import React from 'react';
import '../box-components/box-style/box-image.css'

class BoxImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {url : props.url};
    }
    render() {
        return (
                <svg src={this.state.url} alt="DogDeveloper"></svg>
        )
    }
}

export { BoxImage };