import React,{ useEffect} from 'react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import { Provider } from 'react-redux'
import { initStore } from './store';
import { AuthProvider } from 'providers/authProvider';
import {useAuth} from 'providers/authProvider';
const store = initStore();

const Providers = ({children}) =>
  <Provider store={store}>
    <AuthProvider>
      {children}
    </AuthProvider>
  </Provider>

const BwmApp = () =>{
  const authService = useAuth();
  useEffect(()=>{
   authService.authState();
  },[authService]);
  return(
    <Router>
    <Header logout={authService.signOut}></Header>
    <Routes></Routes>
  </Router>
  )
}
  
const App = () => {

  return (
    <Providers>
      <BwmApp></BwmApp>
    </Providers>
  );
}

export default App;
