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
import Logo from '../components/layout/partials/Logo';

import { Navbar, Nav, FormControl } from 'react-bootstrap'

import { Link, Redirect } from "react-router-dom";
import Bas from "../carousel"


class Log extends React.Component {

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
                            <Header as="h2" style={{ color: "#6163ff" }} textAlign="center">
                                Register your account
          </Header>


                            <React.Fragment>

                                <Segment stacked>
                                    <Link to="/signup">


                                        <Button
                                            style={{ backgroundColor: "#6163ff", color: "white" }}
                                            fluid
                                            size="large"


                                        >
                                            SignUp via Email <span><b> <Icon marginX="8px" name="mail" /></b></span>
                                        </Button>
                                    </Link>
                                    <br></br>
                                    <Link to="/signup2">
                                        <Button
                                            style={{ backgroundColor: "#6163ff", color: "white" }}
                                            fluid
                                            size="large"
                                            icon="phone"

                                        >
                                            SignUp via Phone <b><span><Icon marginX="8px" name="phone" /></span></b>
                                        </Button>
                                    </Link>

                                </Segment>



                            </React.Fragment>
                        </Grid.Column>
                    </Grid>
                </center>
            </div >
        );
    }
}
export default Log;