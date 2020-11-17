import './css/App.scss';
import content from './content.json'
import Header from './components/Header'
import Hero from './components/Hero'
import CV from './components/CV'
import Dots from './components/Dots'
import Logo from './components/Logo'
import H3 from './components/H3'
import Text from './components/Text'
import Img from './components/Img'

console.log(content.texts.linus.position);
let arr = []
Object.keys(content).forEach(function(key){
  arr.push(content[key])
})

function App() {
  return (
    <div className="App">
      <Dots />
      <Header />
      <Logo />
      <Hero />
      <CV />
      <H3 title="Linus"/>
      <Text {...content.texts.linus}/>
      <Img {...content.images.linus}/>
    </div>
  );
}

export default App;
