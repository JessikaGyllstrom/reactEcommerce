import React, {useState, createContext} from 'react';

export const ToggleContext = createContext();

const ToggleProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showWelcome, setshowWelcome] = useState(false);

  console.log(setshowWelcome)
  const toggleClose = () => {
    setIsOpen(false)
  }
                          
  return (
    <ToggleContext.Provider value={{ isOpen, setIsOpen, toggleClose, showModal, setShowModal, showWelcome, setshowWelcome }}>
      {children}
    </ToggleContext.Provider>
  )
};

export default ToggleProvider;