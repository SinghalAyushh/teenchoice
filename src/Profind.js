import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch, withRouter } from "react-router-dom";


import * as actions from "./store/actions/auth";
import * as navActions from "./store/actions/nav";
import * as messageActions from "./store/actions/message";
import WebSocketInstance from "./websocket";

import "semantic-ui-css/semantic.min.css";

import ProtectedRoute from "./Protectedroute";
import Login from "./containers/Login";
import Login2Form from "./containers/Login2";
import Signup from "./containers/Signup";
import Signup2 from "./containers/Signup2";
import Log from "./containers/Log";
import Chat from "./containers/Chat";
import Hoc from "./hoc/hoc";
import Chatlayout from "./chatlayout"
import ProductDetail from "./Profind"

import Proflayout from "./prof"
import Sg from "./dfg"
import Base from "./ad"
import Land from "./landing"
import Age from "./age"
import Que from "./que"
import Proflay from "./asd"

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  constructor(props) {
    super(props);
    WebSocketInstance.addCallbacks(
      this.props.setMessages.bind(this),
      this.props.addMessage.bind(this)
    );
  }

  render() {
    return (


      <Router>
        <Hoc>
          <Switch>

            <ProtectedRoute path="/" component={Chatlayout} >


              <ProtectedRoute path="/ch/:chatID" component={Chat} />
            </ProtectedRoute>

            <Route path="/log" component={Log} />
            <Route path="/login" component={Login} />
            <Route path="/login2" component={Login2Form} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup2" component={Signup2} />
            <Route exact path="/prof" component={Proflayout} />
            <Route exact path="/main" component={Sg} />
            <Route exact path="/chat/products/:productID" component={Base} />
            <Route exact path="/land" component={Land} />
            <Route exact path="/age" component={Age} />
            <Route exact path="/que" component={Que} />
            <ProtectedRoute exact path="/pof" component={Proflay} />

          </Switch>
        </Hoc>

      </Router >




    );
  }
}

const mapStateToProps = state => {
  return {
    showAddChatPopup: state.nav.showAddChatPopup,
    authenticated: state.auth.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
    closeAddChatPopup: () => dispatch(navActions.closeAddChatPopup()),
    addMessage: message => dispatch(messageActions.addMessage(message)),
    setMessages: messages => dispatch(messageActions.setMessages(messages))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
