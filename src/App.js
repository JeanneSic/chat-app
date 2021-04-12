import React from 'react';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
    <Contact 
    name='Mae Wood'
    avatar='https://randomuser.me/api/portraits/women/33.jpg'
    online/>

    <ContactList />
    </div>
  );
}

export default App;
