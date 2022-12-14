import logo from './logo.svg';
import {React,useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import {v4} from 'uuid';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactDetail from './ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  // const contacts=[
  //   {
  //     id:1,
  //     "name":"Divij",
  //     "email":"divij@gmail.com"
  //   },
  //   {
  //     id:2,
  //     "name":"Divij1",
  //     "email":"divij1@gmail.com"
  //   },
  //   {
  //     id:3,
  //     "name":"Divij2",
  //     "email":"divij2@gmail.com"
  //   }
  // ]
  const [contacts,setContacts]=useState([]);
  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:v4(),...contact}]);
  }

  const removeContactHandler=(id)=>{
    const newContactList=contacts.filter((contact)=>{
      return contact.id!==id;
    })
    setContacts(newContactList);
  }
  
  useEffect(() => {
    const retrievedContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    console.log(retrievedContacts);
    setContacts(retrievedContacts);
  }, [])


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
  }, [contacts])

  
  return (
    <div className='ui container'>
          <Header/>
        <Router>
          <Switch>
            <Route path="/add" render={(props)=><AddContact {...props} addContactHandler={addContactHandler}/>}></Route>
            <Route path="/" exact render={(props)=><ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />}></Route>
            <Route path="/contact/:id" component={ContactDetail}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
