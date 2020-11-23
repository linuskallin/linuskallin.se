import React from 'react';
import './css/App.scss';
import content from './content.js'
import Header from './components/Header'
import Hero from './components/Hero'
import CV from './components/CV'
import Dots from './components/Dots'
import Logo from './components/Logo'
import Title from './components/Title'
import Text from './components/Text'
import Img from './components/Img'
import { ObserverProvider } from './components/ObserverContext'

function App() {

  return (
    <div className="App">
      <Header />
      <Logo />
      <Hero />
      <CV />
      <ObserverProvider>
        <Dots />
      </ObserverProvider>
      <ObserverProvider>
        <Title {...content.texts.linus}/>
      </ObserverProvider>
      <Text {...content.texts.linus}/>
      <Img {...content.images.linus}/>
      <ObserverProvider>
        <Title {...content.texts.programmering}/>
      </ObserverProvider>
      <Text {...content.texts.programmering}/>
      <Img {...content.images.programmering}/>
      <ObserverProvider>
        <Title {...content.texts.design}/>
      </ObserverProvider>
      <Text {...content.texts.design}/>
      <Img {...content.images.design}/>
    </div>
  );
}

export default App;