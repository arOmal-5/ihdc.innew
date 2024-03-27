import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {

  const[isDark,setIsDark]=useState('')

  
  return (
    <MyContext.Provider value={{ isDark,setIsDark}}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;