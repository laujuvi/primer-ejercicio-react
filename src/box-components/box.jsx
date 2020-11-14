import React from 'react';
import { BoxImage } from './box-image'
import { BoxVolanta } from './box-volanta'
import { BoxTitle } from './box-title'
import { BoxAuthor } from './box-author'
import '../box-components/box-style/box.css'


class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        url: props.url,
        volanta: props.volanta,
        title: props.title,
        author: props.author
    }
}
  render() {
    
    return (
      <div className="box">
          <BoxImage url={this.state.url}></BoxImage>
          <div>
          <BoxVolanta volanta={this.state.volanta}></BoxVolanta>
          <BoxTitle title={this.state.title}></BoxTitle>
          <div><b><BoxAuthor author={this.state.author}></BoxAuthor></b></div>
          </div>

      </div>
    )
  }
}

export { Box };