
import React ,  {useState , useContext} from 'react';
import {FirebaseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Login.css';
import {useHistory} from 'react-router-dom'


function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const history = useHistory()
  const handleLogin = (e) =>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      history.push('/')
    }).catch((err)=>{
      alert(err.message)
    })
  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt ="img"></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            id="lname"
            onChange={(e)=> setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a className='link' href = "/signup">Signup</a>
      </div>
    </div>
  );
}

export default Login;
