import React from "react";
class UserClass extends  React.Component{
    
//you can use props after creating constructor and don't forget to write super
  constructor(props){
    super()
    console.log(props)
  }

 render(){
    return(<div>
        <h2>Name:{this.props.name}</h2>
        <h3>location: {this.props.location}</h3>
        <h3>github: @ruhiawasthi</h3>

    </div>)
 }
}



export default UserClass;