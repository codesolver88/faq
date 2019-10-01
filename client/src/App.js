import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const [users, setUser] = React.useState(null)
  React.useEffect(()=>{
    axios.get('/api')
    .then(res => {
      setUser(res.data)
      console.log()
    })
  },[])



  return users && (
    <div className="App">
     {users.users.map(u => {
        return <div key={u.id}>{u.name}</div>
     })}
    </div>
  );
}

export default App;
