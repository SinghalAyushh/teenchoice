import React from "react";
import {
    Button,
    Form,
    Grid,
    Message,
    Segment,
    Icon,
    Header,
} from "semantic-ui-react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Logo from './components/layout/partials/Logo';

import { Navbar, Nav, FormControl } from 'react-bootstrap'

import { Link, Redirect } from "react-router-dom";



class Lo extends React.Component {

    render() {

        return (
            <div >
                <Logo className="brds"></Logo>
                <center>

                    <Grid
                        textAlign="center"
                        style={{ position: "relative", top: "176px" }}
                        verticalAlign="middle"


                    >
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as="h2" style={{ color: "white" }} textAlign="center">
                                Let's Chat
          </Header>


                            <React.Fragment>

                                <Segment stacked>
                                    <a href="/date">


                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"


                                        >
                                            Date Chats <span><b> <Icon marginX="8px" name="heart" /></b></span>
                                        </Button>
                                    </a>
                                    <br></br>
                                    <a href="/chat">
                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"
                                            icon="phone"

                                        >
                                            Friend Chats <b><span><Icon marginX="8px" name="user" /></span></b>
                                        </Button>
                                    </a>

                                </Segment>



                            </React.Fragment>
                        </Grid.Column>
                    </Grid>
                </center>
            </div >
        );
    }
}
export default Lo;