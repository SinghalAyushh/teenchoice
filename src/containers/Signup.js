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
import { NavLink, Redirect } from "react-router-dom";
import { authSignup } from "../store/actions/auth";
import Logo from '../components/layout/partials/Logo';
import axios from "axios";

class RegistrationForm extends React.Component {
  state = {
    username: "",
    email: "",
    password1: "",
    password2: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    const { username, email, password1, password2 } = this.state;

    this.props.signup(username, email, password1, password2);


  };

  handleChange = e => {

    this.setState({ [e.target.name]: e.target.value });

  };

  render() {
    const { username, email, password1, password2 } = this.state;
    const { token, error, loading, sd } = this.props;
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
      return <Redirect to="/prof" />;
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
            <Header as="h2" style={{ color: "#6163ff", position: "relative", left: "12px" }} textAlign="center">
              Signup to your account
          </Header>
            {localStorage.getItem("statd") == "201" ? <h3>verification email sent..!</h3> : error ? <h3>Recheck all the fields again or password should be greater than 6 digits</h3> : <h3>Note:Check Your Mail inbox or Spam folder after registered in!</h3>}

            <React.Fragment>
              <Form target="_blank" size="large" onSubmit={this.handleSubmit} action="/login">
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

                    value={email}
                    name="email"
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail address"
                  />
                  <Form.Input
                    onChange={this.handleChange}
                    fluid
                    value={password1}
                    name="password1"
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

                  <Button
                    style={{ backgroundColor: "#6163ff", color: "white" }}
                    size="large"
                    loading={loading}

                  >
                    Signup
                </Button>
                </Segment>
              </Form>
              <Message>
                Already have an account? <a href="/login2"><p style={{ color: "#6163ff" }}>Login</p></a>
              </Message>
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
    token: state.auth.token,
    sd: state.auth.sd,

  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: (username, email, password1, password2) =>
      dispatch(authSignup(username, email, password1, password2))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationForm);
