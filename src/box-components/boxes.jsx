import React from 'react';
import { Box } from './box'
import boxData from '../data/box-data.json'



class Boxes extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      quantBoxes: props.quantBoxes || 9
    };
  }

  
  boxesHandleChange = (e) =>{ this.setState({quantBoxes: e})} 

  render() {
    return (boxData.slice(0, this.state.quantBoxes).map((data, i) => <Box key={i} url={data.url} volanta={data.volanta} title={data.title} author={data.author}></Box>
    )
    )


  }
}

export { Boxes };