import React, { useState } from 'react';
import './UserForm.css';

export const UserForm = ({ updateNames }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const nameData = {
      name,
      age,
    };
    updateNames(nameData);
    setName('');
    setAge('');
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={name} onChange={nameChangeHandler} />
        <br />
        <input type="number" value={age} onChange={ageChangeHandler} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
