import React from 'react';
import Sidepanel from './containers/Sidepanel';
import Profile from './containers/Profile';
import "./assets/style.css"
import Pikachu from './components/layout/pikachu';
import { Icon } from "semantic-ui-react"
import { Link } from "react-router-dom"
import BaseRouter from "./routes";
class Chatlayout extends React.Component {
    render() {
        return (
            <>
                <Pikachu />

                <Link to="/main"><Icon name="arrow left" className="fg" style={{}} /></Link>
                <div id="frame">

                    <Sidepanel />
                    <div className="content">
                        <h5 style={{
                            position: "relative",
                            left: "53px",
                            color: "black",
                            top: "31px"
                        }}>Let's Chat</h5>

                        <Profile />
                        <BaseRouter />

                    </div>
                </div>
            </>
        )
    }
}

export default Chatlayout