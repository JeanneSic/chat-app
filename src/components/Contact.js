import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div class="Contact">
            <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Salvador Mills" className="avatar"></img>
           
                <div className="name-and-status">
                    <p className="name">Salvador Mills</p>
                    <div className="status-text">
                        <div className="status-online"></div>
                        <p className="status-text">Online</p>
                    </div>
                </div>
           
        </div>
    )
}

export default Contact;