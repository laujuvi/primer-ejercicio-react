import React from 'react';
import { Boxes } from '../boxes'

class BoxDisplay extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>

                    <Boxes/>
            </div>
        );
    }
}

export { BoxDisplay }