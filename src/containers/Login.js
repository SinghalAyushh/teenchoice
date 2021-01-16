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
import { authLogin } from "../store/actions/auth";
import Logo from '../components/layout/partials/Logo';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: ""
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

    return (

      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" style={{ color: "#6163ff" }} textAlign="center">
            Log-in to your account
          </Header>
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
                  placeholder="email"
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
            <Message>
              New to us? <NavLink to="/log">Sign Up</NavLink>
            </Message>


          </React.Fragment>
        </Grid.Column>
      </Grid>
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
)(LoginForm);



