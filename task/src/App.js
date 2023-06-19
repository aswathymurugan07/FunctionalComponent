import React from 'react';

import ChildComponent from './ChildComponent'; 
const App = () => { 
  return ( 
  <div> 
    <h2>User List</h2> 
    <table border="1px"> 
      <thead> 
        <tr>
           <th>FirstName</th>
           <th>Lastname</th>
        </tr> 
      </thead> 
      <tbody> 
        <ChildComponent /> 
      </tbody> 
    </table> 
  </div> ); 
  }; 
 
export default App;