import React, { useState } from 'react';

const ChildComponent = () => {
  const [first, setUsers] = useState([]);
  const [last, setUser] = useState([]);

  const handleAddUser = () => {
    const randomName = generateRandomName();
    const randomaName = genRan(); 
    setUsers([...first, randomName]);
    setUser([...last, randomaName]);
  };

  const generateRandomName = () => {
   
    return "John";
    
  };
  const genRan=()=>{
    return "Anand";
  }

  return (
    <div>
      <button onClick={handleAddUser}>Add User</button>
      
        {first.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
        {last.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      
    </div>
  );
};

export default ChildComponent;
