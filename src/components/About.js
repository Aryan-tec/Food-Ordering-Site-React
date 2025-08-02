import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component{
  constructor(porps){
    super();
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Paresnt ComponentDidMount")
  }
  render(){
    console.log("Parent Render");
    return (
    <div>
      <h1>This is About Section</h1>
      <UserClass  name={"Aryan Sanger (Class)"} location={"Ghaziabad"} />
    </div>
    
  );
  }
}

export default About;
