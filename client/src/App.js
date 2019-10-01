import React from "react";
import "./sass/main.scss";
import "./dataset.js";

import Notifications from "./components/Notifications.js";

import Active from "./components/Active";
import Discussed from "./components/Discussed";
import Suggested from "./components/Suggested";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // To use the 'this' keyword, we need to bind it to our function
    // this.handleClick = this.handleClick.bind(this);
  }

  // const [show, setShow] = React.useState(true);
  render() {
    return (
      <div className="App">
        <header className="section">
          <h1 className="giant-header">Nattskiftet</h1>
        </header>
        <img src={"/moon.png"} className="logo" alt="logo" />

        {/* <div className="color-block"></div> */}
        <p className="nav-paragraph">
          <span className="trigger-link">Vi</span> uppdaterar{" "}
          <span className="trigger-link">bostäder</span> från att vara{" "}
          <span className="trigger-link">parasiterande</span> till att bli{" "}
          <span className="trigger-link">producerande</span>.
        </p>
      </div>
    );
  }
}

export default App;
