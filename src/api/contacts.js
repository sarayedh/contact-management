//Axios in reactjs is a library that serves to create HTTP requests. 
//It helps GET DATA FROM EXTERNAL SOURCE (another link).
import axios from "axios";


export default axios.create({
 
  baseURL: "https://contact-management-db.herokuapp.com/",
   headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'}
   /*
   baseURL: "http://localhost:3006/",
   headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'}*/
    
});