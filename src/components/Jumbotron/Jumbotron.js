import React, { Component } from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container"><br></br>
      <div className="jumbotron shadow bg-light rounded mb-5 border border-light">
        <h1 className="display-4"><i className="fas fa-jedi"></i> <em>Clicky WarZ</em></h1>
        <hr></hr>
        <p className="lead">Single Click Memory Game,  <em>version starwarz</em> <br></br>  <code>Click any image below to begin!</code>  </p>
      </div>
    </div>
  );
};

export default Jumbotron;
