import React from "react";
import { Link } from "react-router-dom";
import Routes from "./Settings/routes/Routes";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Link to="/">Home</Link> <hr />
      <Link to="/Negative">Negative</Link> <hr />
      <Link to="/Positive">Positive</Link> <hr />
      <Link to="/SimpleHome">SimpleHome</Link> <hr />
      <Link to="/LoginToggle">LoginToggle</Link> <hr />
      {/* Adding View */}
      <h2>
        <span style={{ color: "tomato" }}>(Rapid)</span>_view_
        <span style={{ color: "yellowGreen" }}>(Dev)</span>
      </h2>
      <hr />
      <Routes />
    </div>
  );
}
