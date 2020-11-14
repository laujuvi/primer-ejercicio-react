import React from 'react';
import { Boxes } from '../boxes'
import { BoxGridSelector } from '../box-grid-selector'

class BoxDisplay extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <BoxGridSelector></BoxGridSelector>
                <div className="content">
                    <Boxes></Boxes>
                </div>
            </div>
        );
    }
}

export { BoxDisplay }