//4-since this part is repeated in ContacList we create a function component
import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email, number, gender, city} = props.contact; //constructor
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link //when we click on the contact we go to his details
          to={{ pathname: `/contact/${id}*/`, state: { contact: props.contact } }}>
          <div className="header">{name}</div>
          <div>{email} {number} {gender} {city}</div>
        </Link>
      </div>

      <Link to={{pathname : `/delete/${id}`, state:{contact: props.contact}}}>
      <i //the delete button
        className="trash alternate outline icon"
        //adding a line style
        style={{ color: "red", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.clickHander(id)}
      ></i></Link>


      <Link to={{ pathname: `/edit`, state: { contact: props.contact } }}>
        <i //the update button
          className="edit alternate outline icon"
           //adding a line style
          style={{ color: "blue", marginTop: "7px" }}
        ></i></Link>
    </div>
  );
};

export default ContactCard;
