import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import { productDetailURL } from "./constants";
import axios from "axios";

import Chat from "./containers/Chat";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import Bas from "./carousel"
import { Label } from "semantic-ui-react"
import "./dc.scss"
class Basd extends React.Component {
    render() {
        return (
            <div class="signupSection">
                <div class="info">

                </div>
                <form action="#" method="POST" class="signupForm" name="signupform">
                    <h2>Sign Up</h2>
                    <ul class="noBullet">
                        <li>
                            <label for="username"></label>
                            <input type="text" class="inputFields" id="username" name="username" placeholder="Username" value="" oninput="return userNameValidation(this.value)" required />
                        </li>
                        <li>
                            <label for="password"></label>
                            <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value="" oninput="return passwordValidation(this.value)" required />
                        </li>
                        <li>
                            <label for="email"></label>
                            <input type="email" class="inputFields" id="email" name="email" placeholder="Email" value="" required />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}
export default Basd