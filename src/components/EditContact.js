import React, {Component} from "react";
class EditContact extends Component {
  constructor(props) {
    super(props);
    const { id, name, email, number, gender, city} = props.location.state.contact;
    this.state = {
      id,name,email,number, gender, city};
  }

  state = { //contain data or information about the component
    name: "",
    email: "",
    number: "",
    gender: "",
    city: "",
  };

  handleChange = (evt) => {
    this.setState({
        [evt.target.name]: evt.target.value
    });}
  
update = (evt) => {
  evt.preventDefault();
  if(this.state.name === "" || this.state.email === "" || this.state.number === "" || this.state.gender ==="" || this.state.city ===""){
      alert("All the fields are mandatory!");
      return; }
  console.log(this.state);
  this.props.updateContactHandler(this.state);
  this.setState(
      {name: "",email: "",number: "", gender:"", city:""}
  );
  this.props.history.push("/");
  //used to move from the current page to another one. 
  //It takes the first argument as a destination path and a second argument as the state
}


render() {
  return (
      <>
          <div className="ui main mt-8">
              <h2>Add Contact </h2>
              <form action="" className="ui form" autoComplete="off" onSubmit={this.update}>
                 
                  <div className="field">
                      <label > Name</label>
                      <input type="text"
                             name="name" placeholder="Please enter the new Name"
                             value={this.state.name}
                             onChange={this.handleChange} />
                  </div>

                  <div className="field">
                      <label > Email</label>
                      <input type="email"
                             name="email" placeholder="Please enter the new Email"
                             value={this.state.email}
                             onChange={this.handleChange}/>
                  </div>
                  
                  <div className="field">
                      <label > Phone Number </label>
                      <input type="text"
                             name="number" placeholder="Please enter the Phone Number"
                             value={this.state.number}
                             onChange={this.handleChange}/>
                  </div>

                  
                 <div className="field"    >
                     <label>Gender</label>
                     <input type="radio"
                            name="gender"
                            value="Male"
                            checked={this.state.gender === "Male"}
                            onChange={this.handleChange} 
                            /> Male
                     <input type="radio"
                            name="gender"
                            value="Female"
                            checked={this.state.gender === "Female"}
                            onChange={this.handleChange}
                          /> Female
                   </div >

                  
                   <div className="field">
                      <label>City</label>
                      <select name="city"  onClick = {this.handleChange}>
                         <option value="Tunis" selected={this.state.city=== "Tunis"}> Tunis </option>
                         <option value="Manouba" selected={this.state.city=== "Manouba"}> Manouba </option>
                         <option value="Ariana" selected={this.state.city=== "Ariana"}> Ariana </option>
                         <option value="Sfax" selected={this.state.city=== "Sfax"}> Sfax </option>
                         <option value="Sousse" selected={this.state.city=== "Sousse"}> Sousse </option>
                         <option value="Medenine" selected={this.state.city=== "Medenine"}> Medenine </option>
                      </select>
                    </div>
                 
                  <button className="ui button blue"  > Update </button>

              </form>

              {/*{this.state.name}
              {this.seperator(this.state.name)}
              {this.state.email}*/}
          </div>
      </>

  );
}


}

export default EditContact;
