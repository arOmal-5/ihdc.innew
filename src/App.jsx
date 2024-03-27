
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserCreateAccount from './Components/UserCreateAccount';
import UserLogin from './Components/UserLogin';
import UserSign from './Components/UserSign';
import { useContext } from 'react';
import MyContext from './store/MyContext';
import PassAndOtp from './Components/PassAndOtp';
import InfromationPage from './Components/InfromationPage';
import PendingPage from './Components/PendingPage';


function App() {

  const{isDark,setIsDark}=useContext(MyContext)


  const bodyBackgroundColor = isDark ? 'rgb(21, 32, 43)' : '#ffffff';

  // Update CSS variable in the document body
  document.body.style.setProperty('--body-background-color', bodyBackgroundColor ,);
  

  const handleDark = () => {
    setIsDark(true);
  };

  const handleLight = () => {
    setIsDark(false);
  };
  return (
    <div className="App">


<div className='flex items-center text-center justify-start m-2 cursor-pointer'>
<p className='' style={{ color: isDark ? "white" : "black", fontStyle: isDark ? 'italic' : 'normal', fontSize: '14px' }} onClick={handleDark}>MOODY</p>
<p className='' style={{ color: isDark ? "white" : "black", margin: '0 10px' }}> / </p>
<p className='' style={{ color: isDark ? "white" : "black", fontStyle: isDark ? 'normal' : 'italic', fontSize: '14px' }} onClick={handleLight}>LIGHT</p>

</div>

    
     <Routes>
      <Route path="" element = {<UserLogin/>}/>
      <Route path="/signup" element={<UserCreateAccount/>} />
      <Route path="/signin" element={<UserSign/>} />
      <Route path="/passOtp" element={<PassAndOtp/>} />
      <Route path="/informationpage" element={<InfromationPage/>} />
      <Route path="/pending" element={<PendingPage/>} />
      
     </Routes>
    
    
  
    </div>
  );
}

export default App;
