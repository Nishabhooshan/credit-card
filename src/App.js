import React, { useState } from "react";
import "./App.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <div className="App">
      <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <div className="App-payment">
        <form>
          <div className="form-group">
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              value={number}
              className="form-control"
              onChange={(e) => setNumber(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              className="form-control"
              onChange={(e) => setName(e.target.value)}
              onFocus={(e) => setFocus(e.target.name)}
            />
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={expiry}
                className="form-control"
                onChange={(e) => setExpiry(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
            <div className="col-6">
              <input
                type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                onFocus={(e) => setFocus(e.target.name)}
              />
            </div>
          </div>
          <div className="form-actions">
            <button className="btn btn-primary btn-block">PAY</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
