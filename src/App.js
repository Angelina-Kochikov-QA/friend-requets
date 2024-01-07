import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {

  const [friends, setFriends] = useState(data);
  

const removeFriend = (id) => {
  let newFriends = friends.filter((item) => item.id !== id);
    setFriends(newFriends);
}

  return (<div>

      <div className="container">
    <h1>You have {friends.length} New friend requests</h1>
    </div>
  
  {friends.map((item => {
    const {id, friendName, message, image} = item;


    return (<div key={id}>

      <div className="container">
        <h2>{id}-{friendName}</h2>
      </div>

      <div className="container">
        <p>Message: "{message}"</p>
      </div>

      <div className="container">
        <img src={image} width="300px" alt="friend"/>
      </div>


      <div className="container">
        <button className="btn" onClick={() => removeFriend(id)}>Remove request</button>
      </div>

      </div>)

      
  }))}
  <div className='container'>
  <button className='btn' onClick={() => setFriends([])}>Delete all requests</button>
  </div>
  </div>
  

)

}

export default App;