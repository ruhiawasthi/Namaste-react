import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
//   console.log(error);
  return (<>
  <h1>OOPS!</h1>
  <h2>{error.status + " Page " + error.statusText}</h2>
  </>
  );
};

export default Error;
