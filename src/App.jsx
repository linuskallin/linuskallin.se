import React from 'react';
import './css/App.scss';
import content from './content.js'
// import Cursor from './components/Cursor'
import Header from './components/Header'
import Hero from './components/Hero'
import CV from './components/CV'
import Dots from './components/Dots'
import Logo from './components/Logo'
import Title from './components/Title'
import Text from './components/Text'
import Img from './components/Img'

function App() {
  return (
    <div className="App">
      <Header />
      <Logo />
      <Hero />
      <CV />
      <Dots />
      <Title {...content.texts.linus}/>
      <Text {...content.texts.linus}/>
      <Img {...content.images.linus}/>
      <Title {...content.texts.programmering}/>
      <Text {...content.texts.programmering}/>
      <Img {...content.images.programmering}/>
      <Title {...content.texts.design}/>
      <Text {...content.texts.design}/>
      <Img {...content.images.design}/>
      <Title {...content.texts.musik}/>
      <Text {...content.texts.musik}/>
      <Img {...content.images.musik}/>
      <Title {...content.texts.kontakt}/>
      <Text {...content.texts.kontakt}/>
    </div>
  );
}

export default App;