import React from 'react';
import '../box-components/box-style/box-image.css'
import { Box } from './box'

const boxData = [{
    url:'https://pbs.twimg.com/profile_images/1119111560654233602/d0DFiz6W_400x400.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i0.wp.com/www.myconfinedspace.com/wp-content/uploads/2015/11/Developer-Dog.jpg?resize=640%2C480&ssl=1',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i.pinimg.com/474x/cf/38/bc/cf38bce422f12b2f1c6392faf844f81a.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://pbs.twimg.com/profile_images/1119111560654233602/d0DFiz6W_400x400.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i0.wp.com/www.myconfinedspace.com/wp-content/uploads/2015/11/Developer-Dog.jpg?resize=640%2C480&ssl=1',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i.pinimg.com/474x/cf/38/bc/cf38bce422f12b2f1c6392faf844f81a.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://pbs.twimg.com/profile_images/1119111560654233602/d0DFiz6W_400x400.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i0.wp.com/www.myconfinedspace.com/wp-content/uploads/2015/11/Developer-Dog.jpg?resize=640%2C480&ssl=1',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i.pinimg.com/474x/cf/38/bc/cf38bce422f12b2f1c6392faf844f81a.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  ]

class Boxes extends React.Component {

    render() {
        return (boxData.map((answer, i) => <Box key={i} url={answer.url} volanta={answer.volanta} title={answer.title} author={answer.author}></Box>
        )
            )

        
    }
}

export { Boxes };