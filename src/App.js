
//import { useState } from 'react';
import   './App.css';
import Headers from  './component/Headers';
// import Fileview from './component/Fileview';
import Sidebar from "./sidebar";


export default  function App () {
 



    return (
      <div className="App">

      <Headers  />
      <Sidebar />
      {/* <Fileview /> */}
      </div>
    );
  
  
    }