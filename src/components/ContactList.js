import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

//to access props (the contact array from app.js)
const ContactList = (props) => {
  //the render will collect from the root of the app the list of all 
  //the components which their state or their props changed map them 
  //The map() function is used to iterate over an array and manipulate or change data items.
  const renderContactList = props.contacts.map((contact, index) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        onDelete={props.removeContact}/>);});

  return (
    <div className="main"> 
      <h2> 
        The List of Contacts
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
}
export default ContactList;
