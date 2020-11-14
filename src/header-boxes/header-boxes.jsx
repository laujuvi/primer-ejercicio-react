import React from 'react';
import './header-boxer.css'

class HeaderTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerTitle: props.headerTitle,
        }
    }
    render() {
        return (
            <header>
            <div className="header-container">
            <span className="header-title">{this.state.headerTitle} </span>
            <hr/>
            </div>
            </header>
        )
    }
}

export { HeaderTitle };