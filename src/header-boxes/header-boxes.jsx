import React from 'react';

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: props.headerTitle,
        }
    }
    render() {
        return (
            <span className="header-title">{this.state.headerTitle} </span>
        )
    }
}

export { HeaderTitle };