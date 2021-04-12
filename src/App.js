import React from 'react';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
    <Contact 
    name='Mae Wood'
    avatar='https://randomuser.me/api/portraits/women/33.jpg'
    online/>

<Contact 
    name='Jenny Day'
    avatar='https://randomuser.me/api/portraits/women/72.jpg'
    />

<Contact 
    name='Kevin West'
    avatar='https://randomuser.me/api/portraits/men/36.jpg'
    online/>
    </div>
  );
}

export default App;
