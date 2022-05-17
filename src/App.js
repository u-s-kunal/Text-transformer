
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("success"); // whether success mode is enabled or not;
  const [alert, setAlert] = useState(null)

  const showAlert = (messege) => {
    setAlert({
      msg: messege
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 1500);


  const toggleMode = () => {
    if (mode === 'success') {
      setMode('dark');
      document.body.style.backgroundColor = '#4576ad';
      document.body.style.color = 'white';
      showAlert('Dark mode enabled');
    } else {
      setMode('success')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('light mode enabled');

    }

    
     
  }
 
  
  return (
    <>
      <Navbar title='TextTransForm' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter the text to Analyze :" />
    </>
  );
}

export default App;
