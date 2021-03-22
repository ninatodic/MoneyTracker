import React, { useEffect, useContext } from 'react';
import Balance from '../layout/Balance';
import History from '../layout/History';
import InputForm from '../layout/InputForm';
import AuthContext from '../../context/Auth/AuthContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();

    // eslint-disable-next-line
  }, []);

  return (
    <div className='home'>
      <div className='first-row'>
        <InputForm />
        <Balance />
      </div>
      <History />
    </div>
  );
};

export default Home;
