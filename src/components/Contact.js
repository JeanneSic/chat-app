import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div class="Contact">
            <img
            src={props.avatar}
            alt={props.name} className="avatar"></img>
           
                <div className="status">
                    <p className="name">{props.name}</p>
                        <div className={props.online ? 'status-online' : 'status-offline'}></div>
                        <p className="status-text">{props.online ? 'Online' : 'Offline'}</p>
                </div>
           
        </div>
    )
}

Contact.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    online: PropTypes.bool,
  };

export default Contact;