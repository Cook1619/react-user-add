import React from 'react';
import { User } from './User';

export const Users = ({ data }) => {
  return (
    <div>
      {data.length <= 0 && <h1>No DATA</h1>}
      {data.length > 0 &&
        data.map(({ name, age }, index) => (
          <User name={name} age={age} key={index} />
        ))}
    </div>
  );
};
