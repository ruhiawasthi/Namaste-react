import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  useEffect(()=>{
     timer= setInterval(()=>{
        console.log("setInterval");
    }, 1000);

    return()=>{
      clearInterval(timer);
    }
  
  })
  return (
    <div className="user-class">
      <h2>Count:{count}</h2>
      <h2>Name:{name}</h2>
      <h3>Location:{location}</h3>
      <h3>Github:@ruhiwasthi</h3>
    </div>
  );
};

export default User;
