import React, { useState, useEffect } from "react";
//react allows you to use state and other React features without writing a class
//USESTATE is a plain JS object used to present the current situation of a component
//USEEFFECT is used for local shtorage
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//the router connect the networks in ur business and manage traffic within these networks
//react router helps navigate between pages (contact-card and contact-list)

import {uuid} from "uuidv4";
import Axios from 'axios';
//importing components
import api from "./api/contacts";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import ContactDeleteConfirm from './components/ContactDeleteConfirm';
import EditContact from "./components/EditContact";



function App() {//functionnal component
  const LOCAL_STORAGE_KEY = "contacts";
   //we create the state which have the initial values and setcontacts update directly the state
  const [contacts, setContacts] = useState([]);
  //RetrieveContacts
  const retrieveContacts = async () => {
    const response = await api.get("/contactt");
    return response.data;
  };
 
  const addContactHandler = async (contact) => { //AddContact
    const request = {
       //id: uuid(),
       ...contact 
    }
    const response = await api.post("/create", request);
      console.log(response);
      setContacts([...contacts, response.data]);
  }


  const updateContactHandler = async (contact) => { //EditContact
    const response = await api.put(`/update`, contact);
    const { id, name, email, number, gender } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };


  const removeContactHandler = async (id) => {  //ContactDelete
    await api.delete(`/delete/${id}`);
    //we create a copy than we filter
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };


  //the data will be stored in the local storage
  //even if we refresh the page we still can see it
  useEffect(() => {
    // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (retriveContacts) setContacts(retriveContacts);
    const getAllCOntacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts);
    };

    getAllCOntacts();
  }, [contacts]);

  //useEffect(() => {
    //localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)); 
  //}, [contacts]);

  return (
    //router is the menu(page)
    //the switch looks for the match
    <div className="ui container">
      <Router>
        <Header />
        <Switch  >
          <Route 
          //the paths helps us navigate between the pages 
            path="/"  
            exact
            render={(props) => (
              <ContactList  
                {...props}
                contacts={contacts}
                getContactId={removeContactHandler}/>)}/>
          <Route
            path="/add"
            render={(props) => (
              <AddContact {...props} addContactHandler={addContactHandler} /> )}/>
          <Route
            path="/edit"
            render={(props) => (
              <EditContact
                {...props}
                updateContactHandler={updateContactHandler}/>)}/>
          <Route
           path="/delete/:id"
             render={(props) => (
              <ContactDeleteConfirm
                 {...props}
                 removeContactHandler={removeContactHandler}/> )}/>
          <Route path="/contact/:id" component={ContactDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
  
  export default App;
