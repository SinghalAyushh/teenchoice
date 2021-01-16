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

import firebase from './containers/firebase'
import Logo from './components/layout/partials/Logo';
import axios from "axios";
import { data } from "jquery";
class PForm extends React.Component {
    state = {
        pass1: "",
        pass2: "",
        Phone_Number: "",
        id: "",
        status: "",
        data: [],
        cd: '',
        load: false,
        error: '',

    };

    handleSubmi = e => {
        e.preventDefault();
        this.setState({ load: true })

        let form_data = new FormData();
        form_data.append('id', localStorage.getItem("vvv"));
        form_data.append('new_password1', this.state.pass1);
        form_data.append('new_password2', this.state.pass2);


        let url = 'https://3choices.in/auth/password/reset/confir/';
        axios.post(url, form_data)
            .then(res => {
                this.setState({ load: false })
                this.setState({ cd: "password reset succesfull" })
                window.location.assign("/login2");
            }).catch(err => {
                this.setState({ error: err, loading: false });
            });

    }

    handleSubmit = e => {





        localStorage.setItem("phone", this.state.Phone_Number)
        document.querySelector('h4').textContent += "Wait....";

        var recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');


        var number = '+91' + this.state.Phone_Number;

        firebase.auth().signInWithPhoneNumber(number, recaptcha).then((e) => {
            var code = prompt("enter OTP here:");//123456



            if (code === null) return;


            e.confirm(code).then((result) => {


                document.querySelector('label').textContent += result.user.phoneNumber + "Number verified";


                this.setState({ status: "okay" })


            }).catch(function (error) {
                console.error(error);

            });

        })
            .catch(function (error) {

                console.error(error);

            });



    };


    handleChange = e => {

        this.setState({ [e.target.name]: e.target.value });

    };



    render() {
        const { data, status, Phone_Number, pass1, pass2 } = this.state;
        axios("https://3choices.in/cha/user/")
            .then(res => {
                this.setState({ data: res.data.filter(({ email }) => email === localStorage.getItem("phone")) });
            }
            )
        data.map((fg) => {
            localStorage.setItem("vvv", fg.id)
        })



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
                            Reset Your  Password
          </Header> <br />

                        {this.state.status != "okay" ? <h6>Enter Your Registered Mobile Number..</h6> : <h6>Enter new password</h6>}
                        {this.state.cd ? <h6 style={{ color: "lightgreen" }}>{this.state.cd}</h6> : null}
                        {this.state.error ? <h6 style={{ color: "red" }}>Maybe Provided Number not registered or password didn't match or less than six characters..!</h6> : null}
                        <label></label>
                        {this.state.status != "okay" ? <h4></h4> : null}




                        {this.state.status != "okay" ?
                            <>
                                <Form size="large" onSubmit={this.handleSubmit} >
                                    <Segment stacked>
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
                                        <Button style={{ backgroundColor: "#6163ff", color: "white", textAlign: "center" }}
                                            fluid
                                        >submit</Button>
                                    </Segment>
                                </Form>

                            </>
                            :
                            <>
                                <Form size="large" onSubmit={this.handleSubmi} >
                                    <Segment stacked>
                                        <Form.Input
                                            onChange={this.handleChange}

                                            value={pass1}
                                            name="pass1"
                                            fluid
                                            icon="key"
                                            iconPosition="left"
                                            placeholder="password1"
                                            type="password"
                                        />  <Form.Input
                                            onChange={this.handleChange}
                                            value={pass2}
                                            name="pass2"
                                            fluid
                                            icon="key"
                                            iconPosition="left"
                                            placeholder="password2"
                                            type="password"
                                        />



                                        <Button style={{ backgroundColor: "#6163ff", color: "white", textAlign: "center" }}
                                            fluid loading={this.state.load}
                                        >submit</Button>
                                    </Segment>
                                </Form>


                            </>
                        }
                        {this.state.status != "okay" ? <div id="recaptcha"></div> : null}


                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}


export default PForm;

