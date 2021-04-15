import PropTypes from 'prop-types';
import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        };
    }

    render() {
        return (
            <div className="Contact">
                <img
                src={this.props.avatar}
                alt={this.props.name} className="avatar"></img>
             
                    <div className="status" 
                    onClick= { event => {
                        const changeStatus = !this.state.online;
                        this.setState({online: changeStatus});
                    }
                    }
                    >
                        <p className="name">{this.props.name}</p>
                            <div className={this.state.online ? 'status-online' : 'status-offline'}></div>
                            <p className="status-text">{this.state.online ? 'Online' : 'Offline'}</p>
                    </div>
               
            </div>
        )
    }
}


Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired,
  };

export default Contact;