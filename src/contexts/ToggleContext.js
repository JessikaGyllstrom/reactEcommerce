import React, {useState, createContext} from 'react';

export const ToggleContext = createContext();

const ToggleProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log('toggle provider')

  const toggleClose = () => {
    setIsOpen(false)
    console.log('set "is open" to false')
  }
                          
  return <ToggleContext.Provider value={{isOpen, setIsOpen, toggleClose}}>{children}</ToggleContext.Provider>;
};

export default ToggleProvider;