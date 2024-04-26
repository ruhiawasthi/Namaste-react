import React from "react";
import ReactDOM from "react-dom/client";
// always use keys if you have more then one child
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading1"
);
const heading2 = React.createElement(
  "h2",
  { id: "title", key: "h2" },
  "Heading2"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(container);

// React element
const jsxHeading = (
  <div>
    <h1>jsxHeading</h1>
  </div>
);

// root.render(jsxHeading);

// React componenet
const Jsxcomponenet =()=> (
  <div>
    <h1>jsxcomponenet</h1>
  </div>
);


const Jsxcomponenet1 =()=> (
  <div>
    {jsxHeading}
    <Jsxcomponenet/>
    <h1>jsxcomponenet1</h1>
  </div>
);
root.render(<Jsxcomponenet1/>);


