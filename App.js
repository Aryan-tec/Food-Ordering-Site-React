import React from "react";
import ReactDOM from "react-dom/client";

const erp= <span>hello Sanger</span>

const Title =() => (
  <h1 className="head" tabIndex="5">
    {erp}
    Namaste React By JSX
  </h1>
);

//React Component
const HeadingComponent = () =>(
  <div id="container">
    <Title />
    <h1 className="heading">Namaste React using Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
