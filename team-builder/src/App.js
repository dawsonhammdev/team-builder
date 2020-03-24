import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const initialFriends = [
  { id: uuid(), fname: 'Dawson', lname: 'Hamm', projectRole: 'Developer'},
  { id: uuid(), fname: 'Ashley', lname: 'Hamm', projectRole: 'Designer' },
  { id: uuid(), fname: 'Madalyn', lname: 'Hamm', projectRole: 'Data Scientist' },
]

function App() {     
  const [friends, setFriends] = useState(initialFriends)
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    projectRole: '',
  }) 
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newFriend = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      projectRole: formValues.projectRole,
    }
    setFriends([...friends, newFriend]) 

  }
  return (
    <div className="App">
        <form onSubmit={onFormSubmit}>
        <label> First Name
          <input
            onChange={onInputChange} 
            value={formValues.fname}
            name='fname'
            type='text'
          />
        </label><br/>

        <label> Last Name
          <input
            onChange={onInputChange}
            value={formValues.lname}
            name='lname'
            type='text'
          />
        </label><br />
        <label> Project Role
          <input
            onChange={onInputChange} 
            value={formValues.projectRole}
            name='projectRole'
            type='text'
          />
        </label><br/>

        <input type='submit' />
      </form>
      <h3>Meet Our Team:</h3>
      {
        friends.map(fr => <div key={fr.id}>{fr.fname} {fr.lname} {fr.projectRole}</div>)
      }
    </div>
  );
}

export default App;
