import { UserForm } from './components/UserForm';
import { Users } from './components/Users';
import React, { useState } from 'react';

function App() {
  const [names, setNames] = useState([]);
  const nameListUpdater = (name) => {
    setNames((prevState) => {
      return [name, ...prevState];
    });
  };

  return (
    <div className>
      <UserForm updateNames={nameListUpdater} />
      <Users data={names} />
    </div>
  );
}

export default App;
