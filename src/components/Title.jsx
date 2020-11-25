import React from 'react';
import {InView} from 'react-intersection-observer';
import '../css/Title.scss';
  
// export const entryContext = createContext()

// export const TitleContext = (props) => {
//   const [entry, setEntry] = useState(false)

//   function handleSetEntry(e){
//     setEntry(e)
//   }
//   return (
//     <TitleContext.Provider handleSetEntry={handleSetEntry}>{props.children}</TitleContext.Provider>
//   )
// }

const Title = (props) => {

  // function onSetEntry(entry){
  //   props.handleSetEntry(entry)
  // }

  return (
    <InView 
      as="div" 
      threshold={0.5} 
      onChange={( inView, entry ) => console.log(entry)} 
      className={"Title " + props.class} 
      style={props.titlePosition}>

      <h3>{props.title}</h3>

    </InView>
  )
}

export default Title;