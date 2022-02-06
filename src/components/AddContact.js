import React from "react";

//we are creating a class component
class AddContact extends React.Component {
  //when we add a name or email in the app the sate will help store the data in the addcontact array
  state = {
    name: "",
    email: "",
    number: "",
    gender: "",
    city: "",
  };

  //add to the array
  add = (e) => {
    e.preventDefault(); //to use the button without refreshing
    if (this.state.name === "" || this.state.email === "" || this.state.number === "" || this.state.gender === "" || this.state.city === "" ) { 
      alert("ALl the fields are mandatory!");
      return;}
     //adding objects to the app
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "", number:"", gender:"", city:""});
    this.props.history.push("/");
  };

  

  render() { //in class components we cant return without render
    return (
      <div className="ui main">
        <h2>Add Contact</h2>
        <form className="ui form" onSubmit={this.add}>

          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Please enter Your Name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })} />
          </div>

          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Please enter Your Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}/>
          </div>

          <div className="field">
            <label>Phone Number </label>
            <input
              type="text"
              name="number"
              placeholder="Please enter Your Phone Number"
              value={this.state.number}
              onChange={(e) => this.setState({ number: e.target.value })}/>
          </div>

          <div className="field" >
          <label>Gender</label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => this.setState({gender: e.target.value})}
              /> Male
              <input
              type="radio"
              name="gender"
              value="Female"
               onChange={(e) => this.setState({gender: e.target.value})}
              /> Female
           </div>
          
          
          <div className="field">
          <label>City</label>
            <select name="city" onClick= {(e) => this.setState({city: e.target.value})}>
              <option value="Tunis"> Tunis </option>
              <option value="Manouba"> Manouba </option>
              <option value="Ariana"> Ariana </option>
              <option value="Sfax"> Sfax </option>
              <option value="Sousse"> Sousse </option>
              <option value="Medenine"> Medenine </option>
            </select>
          </div>

          <button className="ui button blue" onClick="window.location.reload()" >Add</button>
        </form>
      </div>
    );
  }
}

export default AddContact;
