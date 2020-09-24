import React, { Fragment } from 'react';
import Balance from '../layout/Balance';
import History from '../layout/History';
import InputForm from '../layout/InputForm';

const Home = () => {
  return (
    <div className="home">
      <div className="first-row">
        <InputForm />
        <div className="balance">
          <Balance />
        </div>
      </div>
      <History />
    </div>
  );
};

export default Home;
