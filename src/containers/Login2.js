import React from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect, Link } from "react-router-dom";
import { authLogin } from "../store/actions/otp";
import Logo from '../components/layout/partials/Logo';
import axios from "axios";

class Login2Form extends React.Component {
    state = {
        email: "",
        password: "",
        count: "",
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        const { email, password } = this.state;
        this.props.login(email, password);
    };


    render() {
        const { error, loading, token } = this.props;
        const { email, password } = this.state;
        localStorage.setItem("token", token);
        if (token && localStorage.getItem("status") != null) {
            localStorage.setItem("dx", "hg")
            let form_data = new FormData();
            form_data.append('username', localStorage.getItem("username"));
            form_data.append('count', 1);

            let url = "https://3choices.in/profile/count/";
            axios.post(url, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(res => {


                })

            window.location.assign("/main");

        }
        return (
            <>
                <Logo className="brds" />
                <Grid
                    textAlign="center"
                    style={{ height: "100vh" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <centre><Header as="h2" style={{ position: "relative", color: "#6163ff", left: "25px" }} textAlign="center">
                            Log-in to your account
          </Header></centre>
                        {error && <p>Provided credentials didn't match check again!</p>}

                        <React.Fragment>
                            <Form size="large" onSubmit={this.handleSubmit}>
                                <Segment stacked>
                                    <Form.Input
                                        onChange={this.handleChange}
                                        value={email}
                                        name="email"
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder="email or Mobile number"
                                    />
                                    <Form.Input
                                        onChange={this.handleChange}
                                        fluid
                                        value={password}
                                        name="password"
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder="Password"
                                        type="password"
                                    />

                                    <Button
                                        style={{ backgroundColor: "#6163ff", color: "white" }}
                                        fluid
                                        size="large"
                                        loading={loading}
                                        disabled={loading}
                                    >
                                        Login
                </Button>
                                </Segment>
                            </Form>
                            <br></br>
                                New to us? <NavLink to="/signup2" >Sign Up</NavLink>
                            <br></br>
                            <Link to="/choices">Forget Password ?</Link>



                        </React.Fragment>
                    </Grid.Column>
                </Grid>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(authLogin(email, password))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login2Form);



