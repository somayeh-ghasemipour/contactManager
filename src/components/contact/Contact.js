import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';
class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (e) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    let icon;
    if (showContactInfo) {
      icon = (
        <i
          onClick={() =>
            this.setState({
              showContactInfo: false
            })}
          className="fas fa-minus"
          style={{ cursor: 'pointer', fontSize: '15px' }}
        />
      );
    } else {
      icon = (
        <i
          onClick={() =>
            this.setState({
              showContactInfo: true
            })}
          className="fas fa-plus"
          style={{ cursor: 'pointer', fontSize: '15px' }}
        />
      );
    }
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body bg-ligh mb-3">
              <h4 className="card-header">
                {name} {icon}
                <i
                  className="fas fa-times"
                  style={{
                    cursor: 'pointer',
                    float: 'right',
                    color: 'red',
                    fontSize: '15px'
                  }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`/contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: 'pointer',
                      float: 'right',
                      color: 'black',
                      marginRight: '1rem',
                      fontSize: '15px'
                    }}
                  />
                </Link>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item bg-light">Email: {email}</li>
                  <li className="list-group-item bg-light">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired
};
export default Contact;
