import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Introduccion.css';

function Introduccion() {

  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div className="introduccion">
      <Link to="/"><h1>introducción</h1></Link>
      <hr/>
      <div className="container">
        <div className="item">
          <Link to="/introduccion">
            <i class="fa fa-angle-double-down" aria-hidden="true"></i>
          </Link>
          <p>LABORATORIO</p>
        </div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <div className="item">sv</div>
        <div className="item">sv</div>
        <div className="item">sv</div>
        <div className="item">sv</div>
      </div>
    </div>
  );
}
 
export default Introduccion;