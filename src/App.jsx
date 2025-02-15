import react from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const users = [
    { id: 1, name: 'Alice',age:20 },
    { id: 2, name: 'Bob',age:20 },
    { id: 3, name: 'Charlie',age:20 },
    { id: 4, name: 'Dave',  age:20 },
  ];
  const app=users.map((user) => (
    <div key={user.id}>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  ));
  return (
    <>
    {app}
    </>
  )
}


  

export default App
