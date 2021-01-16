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



class Ed extends React.Component {

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
                                What You Want To Edit..?
          </Header>


                            <React.Fragment>

                                <Segment stacked>
                                    <a href="/edit">


                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"


                                        >
                                            Edit Age <span><b> <Icon marginX="8px" name="user" /></b></span>
                                        </Button>
                                    </a>
                                    <br></br>
                                    <a href="/bio">
                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"
                                            icon="phone"

                                        >
                                            Edit Bio <b><span><Icon marginX="8px" name="add" /></span></b>
                                        </Button>
                                    </a>
                                    <br></br>
                                    <a href="/intr">


                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"


                                        >
                                            Edit Intrset <span><b> <Icon marginX="8px" name="heart" /></b></span>
                                        </Button>
                                    </a>
                                    <br></br>
                                    <a href="/img">
                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"
                                            icon="phone"

                                        >
                                            Edit Photo<b><span><Icon marginX="8px" name="image" /></span></b>
                                        </Button>
                                    </a> <br></br>
                                    <a href="/loc">
                                        <Button
                                            style={{ backgroundColor: "purple", color: "white" }}
                                            fluid
                                            size="large"
                                            icon="phone"

                                        >
                                            Edit Location<b><span><Icon marginX="8px" name="location arrow" /></span></b>
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
export default Ed;