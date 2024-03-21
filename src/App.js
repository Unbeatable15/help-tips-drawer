import { useState } from 'react';
import './App.css';
import HelpDrawer from './NormalDrawer'; // Assuming the file is named HelpDrawer.jsx
import logo from './images/NCR_logo.jpeg';


function App() {
  const [open, setOpen] = useState(false);

  return (

    <div>
      <div className='logo'><img src={logo} alt='NCR logo'></img></div>

      <input type='text'></input>
      <HelpDrawer open={open} onClose={() => setOpen(false)}>
        <p>This is some helpful content.</p>
      </HelpDrawer>
    </div>
  );
}


export default App;
