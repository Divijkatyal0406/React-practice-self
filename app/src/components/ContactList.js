import React from 'react';
import ContactCard from './ContactCard';
import {Link,Switch,Router} from 'react-router-dom';

const ContactList = (props) => {
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContactList=props.contacts.map((contact)=>{
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCard>
    })

  return (
    <div>
      <h1>hello</h1>
      <h2>Contact List
            <Link to="/add">
                <button className='ui button blue right'>Add new contact</button>
            </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  )
}

export default ContactList;