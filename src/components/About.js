import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super();
    console.log("Parent Constructor");
  }

 componentDidMount() {
    //Api calls
   console.log("parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <User name={"Ruhi Awasthi(function)"} location={"Gurugram"} />
        {/* <UserClass name={"Ruhi Awasthi(class)"} location={"Gurugram"} /> */}
        {/* <UserClass name={"Ruchi Awasthi(class)"} location={"Gurugram"} /> */}
      </div>
    );
  }
}

export default About;

