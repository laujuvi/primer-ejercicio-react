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
    url:'https://i0.wp.com/securityaffairs.co/wordpress/wp-content/uploads/2017/08/dohacker.jpg?resize=876%2C659',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://hackbrightacademy.com/content/uploads/2016/01/dog.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i.pinimg.com/originals/02/64/25/0264251795850cec04d06051b5da63c2.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://us.123rf.com/450wm/justaman/justaman1601/justaman160100001/52067781-perro-que-se-sienta-en-una-computadora-port%C3%A1til.jpg?ver=6',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://i.imgur.com/Dxj5Jdb.jpg',
    volanta: 'Analisis',
    title:'La amenaza verde',
    author: 'Por Fernando Laborda'
  },
  {
    url:'https://lh3.googleusercontent.com/proxy/Vvetk4OMwNoGN9PfeLqrRwKv0rQ0hF3k1NXgudd3ylRsGx7z41AUZbiJvxrA3KzZHe0TEaddznOFhh5c0g',
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