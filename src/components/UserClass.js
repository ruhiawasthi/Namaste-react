import { userInfo } from "os";
import React from "react";
class UserClass extends React.Component {
  //you can use props after creating constructor and don't forget to write super
  constructor(props) {
    super();
    console.log("Child Constructor");

    this.state = {
      userInfo: {
        name: "abc",
        twitter_username: "abcruhi",
      },
    };
  }

  async componentDidMount() {
    //Api calls
    const data = await fetch(" https://api.github.com/users/ruhiawasthi");
    const json = await data.json();
    console.log("json:", json);
    this.setState({
        userInfo:json
    })
    console.log("Child componentDidMount");

    //  this.timer= setInterval(()=>{
    //     console.log("setInterval");
    // }, 1000);
  }

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUnmount(){
    // clearInterval(this.timer)
    console.log(" componentWillUnmount");
  }

  render() {
    console.log("Child Render");
    const {name, twitter_username, location}= this.state.userInfo;
    return (
      <div className="user-class">
        <h2>Name:{name}</h2>
        <h3>Twitter Username:{twitter_username}</h3>
        <h3>location: {location}</h3>
        <h3>github: @ruhiawasthi</h3>
      </div>
    );
  }
}

export default UserClass;




// import { userInfo } from "os";
// import React from "react";
// class UserClass extends React.Component {
//   //you can use props after creating constructor and don't forget to write super
//   constructor(props) {
//     super();
//     console.log("Child Constructor");

//     this.state = {
//       count: 0,
//       userInfo: {
//         name: AbortController,
//         twitter_username: runInThisContext,
//       },
//     };
//   }

//   async componentDidMount() {
//     //Api calls
//     const data = await fetch(" https://api.github.com/users/ruhiawasthi");
//     const json = await data.json();
//     console.log("json:", json);
//     this.setState({
//         userInfo:json
//     })
//     console.log("Child componentDidMount");
//   }

//   render() {
//     console.log("Child Render");
//     const { count } = this.state;
//     return (
//       <div className="user-class">
//         <h2>Count:{count}</h2>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Increase Count
//         </button>
//         <h2>Count2:{this.state.count2}</h2>
//         <h2>Name:{this.props.name}</h2>
//         <h3>location: {this.props.location}</h3>
//         <h3>github: @ruhiawasthi</h3>
//       </div>
//     );
//   }
// }

// export default UserClass;
