import React, { createContext } from 'react';
import { useInView } from 'react-intersection-observer';

export const ObserverContext = createContext();

export const ObserverProvider = (props) => {
  const {ref, inView, entry} = useInView({
    threshold: 0,
    rootMargin: "250px"
  });

  return (
    <ObserverContext.Provider value={ref} inView={inView} entry={entry}>{props.children}</ObserverContext.Provider>
  )
}