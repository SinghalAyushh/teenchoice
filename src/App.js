import React from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch, withRouter, Redirect } from "react-router-dom";


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
import Lo from "./cxz";
import Chat from "./containers/Chat";
import Hoc from "./hoc/hoc";
import Chatlayout from "./chatlayout"
import Chatlayou from "./datelayout"
import ProductDetail from "./Profind"

import Proflayout from "./prof"
import Sg from "./dfg"
import Base from "./ad"
import Basd from "./pof"
import Land from "./landing"
import Age from "./age"
import Que from "./que"
import Proflay from "./asd"
import ListExampleFloated from "./reqs"
import Articles from "./Profind"
import Intrest from "./l"
import Loc from "./i"
import Image from "./im"
import Bio from "./s"
import Ed from "./edit"
import Bg from "./choices"
import Forget from "./forget"
import PForm from "./phone"
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
            <Route exact path="/">
              <Redirect to="/main" />
            </Route>
            <ProtectedRoute path="/chat" component={Chatlayout} >



            </ProtectedRoute>
            <ProtectedRoute path="/date" component={Chatlayou} >



            </ProtectedRoute>

            <Route path="/log" component={Log} />
            <Route path="/choices" component={Bg} />
            <Route path="/login" component={Login} />
            <Route path="/phone" component={PForm} />
            <Route path="/login2" component={Login2Form} />
            <Route path="/signup" component={Signup} />
            <Route path="/signup2" component={Signup2} />
            <Route exact path="/prof" component={Proflayout} />
            <ProtectedRoute exact path="/main" component={Sg} />

            <Route exact path="/land" component={Land} />
            <Route exact path="/emails" component={Forget} />
            <Route exact path="/age" component={Age} />
            <Route exact path="/que" component={Que} />
            <Route exact path="/cxz" component={Lo} />
            <Route exact path="/asd" component={Articles} />
            <Route exact path="/main/products/:productID" component={Basd} />
            <ProtectedRoute exact path="/edit" component={Proflay} />
            <ProtectedRoute exact path="/intr" component={Intrest} />
            <ProtectedRoute exact path="/loc" component={Loc} />
            <ProtectedRoute exact path="/img" component={Image} />
            <ProtectedRoute exact path="/bio" component={Bio} />
            <ProtectedRoute exact path="/pof" component={Ed} />
            <ProtectedRoute exact path="/reqs" component={ListExampleFloated} />

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
