import React from 'react';

class BoxGridSelector extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className="box-selector" >
                <div className="select-boxes"><a value="3" >3</a><a value="6">6</a><a value="9" >9</a></div>
            </div>
        );
    }
}

export { BoxGridSelector }