import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  const [time, setTime] = useState(new Date());
  const [isHours, setIsHours] = useState([]);
  const [isMinutes, setIsMinutes] = useState([]);
  const [value, setValue] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [isCvv, setIsCvv] = useState('');
  const [expiryOne, setExpiryOne] = useState('');
  const [expiryTwo, setExpiryTwo] = useState('');
  const [pass, setPass] = useState('');
  
  // Time Display
  // Update the time state every minute
  setInterval(() => {
    setTime(new Date());
  }, 60000);
  
  useEffect(() => {
    let hoursNow = time.getHours().toString().padStart(2, '0').split('');
    let minutesNow = time.getMinutes().toString().padStart(2, '0').split('');
    
    setIsHours(hoursNow);
    setIsMinutes(minutesNow);    
  }, [time]);
  // End of time display

  // Card Number Input
  
  const cardNumChange = (event) => {
    
    let inputValue = event.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    const chunks = inputValue.match(/.{1,4}/g); // Split into chunks of four numbers

    if (chunks) {
      inputValue = chunks.join('-'); // Insert hyphens every four numbers
    }

    if (inputValue.length <= 20) {
      setValue(inputValue);
      setIsVerified(inputValue.length === 19);
    }

    if (isVerified) {
      focusNext(0);
    }
  };
  // End of Card Number input

  // CVV Number Input

  const cvvHandle = (event) => {
    let inputValue = event.target.value.replace(/[^0-9]/g, '');
    
    if (inputValue.length <= 3) {
      setIsCvv(inputValue.toString());
    }

    if (inputValue.length === 3) {
      focusNext(1);
    }
  }

  // Expiry Input

  const expiryHandleOne = (event) => {
    let inputValue = event.target.value.replace(/[^0-9]/g, '');
    
    if (inputValue.length <= 2 && inputValue < 13) {
      setExpiryOne(inputValue.toString());
      if (inputValue.length === 2) {
        focusNext(2);
      }
    }
  }

  const expiryHandleTwo = (event) => {
    let inputValue = event.target.value.replace(/[^0-9]/g, '');
    
    if (inputValue.length <= 2) {
      setExpiryTwo(inputValue.toString());
    }

    if (inputValue.length === 2) {
      focusNext(3);
    }
  }

  // Handle your pay button
  const submitHandler = (event) => {
    event.preventDefault();
    if (formValidate()) {
      alert("Submitted successfully"); 
    } else {
      alert('Please fill all fields to continue!');
    }
  }

  // Validate your expiry month
  const expiryPadHandler = (event) => {
    let inputValue = event.target.value;
    if (inputValue > 0 && inputValue < 13) {
      setExpiryOne(inputValue.padStart(2, '0'));
    }
  }

  // Automatically focus on next input tag
  const focusNext = (index) => {
    const inputs = [
      document.getElementById('cvv'),
      document.getElementById('expiry1'),
      document.getElementById('expiry2'),
      document.getElementById('password')       
    ]
    inputs[index].focus();
  }

  // Click the enter key to submit
  
  const enterHandler = (event) => {
    if (event.key == 'Enter') {
      event.preventDefault();
      if (formValidate()) {
        submitHandler(event); 
      } else {
        alert('Please fill all fields to continue!');
      }    
    }
  }

  // Validate the form on enter key press
  const formValidate = () => {
    return isVerified && isCvv && expiryOne && expiryTwo && pass && pass.length >= 8;
  }

  // Handle the password
  const handlePass = (event) => {
    let inputValue = event.target.value;
    setPass(inputValue.toString());
  }

  
  return <AppContext.Provider value={{ cardNumChange, value, isVerified, isHours, isMinutes, isCvv, cvvHandle, expiryOne, expiryTwo, expiryHandleOne, expiryHandleTwo, submitHandler, expiryPadHandler, enterHandler, pass, handlePass }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider };