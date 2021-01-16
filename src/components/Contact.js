import React from "react";
import { NavLink } from "react-router-dom";

const Contact = props => (
  <a href={`${props.chatURL}`} style={{ color: "#fff" }}>
    <li className="contact" >
      <div className="wrap">
        <span className={`contact-status ${props.status}`} >  <p className="name">{props.name}</p></span>

        <div className="meta">

          {/* <p className="preview">You just got LITT up, Mike.</p> */}
        </div>
      </div>
    </li>
  </a>
);

export default Contact;
