import React from 'react';
import { useContext } from 'react';
import { Store } from './store/Store';
import AppRoutes from './routes';

function App() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  console.log('current user', userInfo);
  return <AppRoutes/>
}


export default App;
