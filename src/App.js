import React,{useEffect,useContext} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Signup from './Components/Signup/Signup'
import Login from './Pages/Login'
import {AuthContext, FirebaseContext} from './store/Context'




import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);
    })
    

  })
return (
    <div>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
        <Signup/>
        </Route>
        <Route path='/login'>
        <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
