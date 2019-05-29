import React, { Component } from "react";
import "./Jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container"><br></br>
      <div className="jumbotron">
        <h1 className="display-3"><i class="fas fa-jedi"></i> <em>Clicky WarZ</em></h1>
        <hr></hr>
        <p className="lead">Single Click Memory Game, version <i>starwarz</i> <br></br>  <code>Click any image below to begin!</code>  </p>
      </div>
    </div>
  );
};

export default Jumbotron;
