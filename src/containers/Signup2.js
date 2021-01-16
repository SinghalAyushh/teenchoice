import React from "react";
import {
    Button,
    Form,
    Grid,
    Header,
    Message,
    Segment,
    Label
} from "semantic-ui-react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/otp";
import firebase from './firebase'
import Logo from '../components/layout/partials/Logo';
import axios from "axios";
class RegistrationForm extends React.Component {
    state = {
        username: "",
        Phone_Number: "",
        password: "",
        password2: ""

    };



    handleSubmit = e => {



        const { username, Phone_Number, password, password2 } = this.state;


        this.props.signup(username, Phone_Number, password, password2);


        console.log(localStorage.getItem("token"))
        if (localStorage.getItem("token") != null) {
            document.querySelector('h4').textContent += "Wait....";

            var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');


            var number = '+91' + this.state.Phone_Number;

            firebase.auth().signInWithPhoneNumber(number, recaptcha).then(function (e) {
                var code = prompt("enter OTP here:");//123456


                if (code === null) return;


                e.confirm(code).then(function (result) {
                    localStorage.setItem("status", "okay");

                    document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";
                    window.location.reload();

                }).catch(function (error) {
                    console.error(error);

                });

            })
                .catch(function (error) {

                    console.error(error);

                });

        }

    };


    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });

    };



    render() {
        const { username, Phone_Number, password, password2, isload } = this.state;
        const { error, loading, token } = this.props;
        if (token && localStorage.getItem("status") != null) {
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
            localStorage.setItem("dx", "ass");
            return <Redirect to="/prof" />;

        }

        localStorage.setItem("token", "1223")
        return (
            <div>
                <Logo className="brds" />

                <br></br>
                <br></br>
                <Grid
                    textAlign="center"
                    style={{ height: "100vh" }}
                    verticalAlign="middle"
                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" style={{ color: "#6163ff", position: "relative", left: "12px" }} textAlign="center">
                            Signup to your account
          </Header> <br />
                        <h4></h4>

                        {token ? <h5 style={{ Color: "green" }}>Welcome! Enter OTP  <span><h5 style={{ Color: "red" }}>if OTP not received click regenrate button below</h5></span> </h5> : error ? <h5>Recheck all the fields again  may be Mobile.Number or Username is already registered or password should be greater than 6 digits</h5> : <h5>After Signing Up Check Your message for Otp Verification</h5>}
                        <label></label>


                        <Form size="large" onSubmit={this.handleSubmit} >
                            <Segment stacked>
                                <Form.Input
                                    onChange={this.handleChange}
                                    value={username}
                                    name="username"
                                    fluid
                                    icon="user"
                                    iconPosition="left"
                                    placeholder="Username"
                                />
                                <Form.Input
                                    onChange={this.handleChange}

                                    value={Phone_Number}
                                    name="Phone_Number"
                                    fluid
                                    icon="phone"
                                    iconPosition="left"
                                    placeholder="phone-number"
                                    type="number"
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
                                <Form.Input
                                    onChange={this.handleChange}
                                    fluid
                                    value={password2}
                                    name="password2"
                                    icon="lock"
                                    iconPosition="left"
                                    placeholder="Confirm password"
                                    type="password"
                                />


                                <Button style={{ backgroundColor: "#6163ff", color: "white", textAlign: "center" }}
                                    fluid
                                    loading={loading} >SignUp</Button>
                            </Segment>
                        </Form>



                        <div id="recaptcha"></div>
                        <Message>
                            Already have an account? <NavLink to="/login2" style={{ color: "#6163ff" }} >Login</NavLink>
                        </Message>
                        <Message>
                            If Otp not Recieved click? <Button onClick={this.otps}>generate OTP</Button>
                        </Message>

                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

        error: state.auth.error,
        token: state.auth.token,
        loading: state.auth.loading,

    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (username, Phone_Number, password, password2) =>
            dispatch(authSignup(username, Phone_Number, password, password2))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RegistrationForm);

