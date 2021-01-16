import React from "react";
import { Spin, } from "antd";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import * as navActions from "../store/actions/nav";
import * as messageActions from "../store/actions/message";
import Contact from "../components/Contact";
import axios from "axios"
import { Icon } from "semantic-ui-react"

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

class Sidepanel extends React.Component {
  state = {
    loginForm: true,
    chats: [],
    data4: [],
    b: [],
    datar: [],
  };

  componentWillReceiveProps() {




    axios.get(`https://3choices.in/cha/?username=${localStorage.getItem("username")}`)
      .then(res => {

        this.setState({
          chats: res.data.filter(i => !this.state.b.includes(i.participants[1]))
        });
      });

  }


  openAddChatPopup() {
    this.props.addChat();
  }
  componentDidMount() {

    axios("https://3choices.in/profile/profile/")
      .then(res => {

        this.setState({ data4: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")) });

      })
      .catch(err => {
        this.setState({ error: err });
      });

    axios("https://3choices.in/profile/date/")
      .then(res => {
        this.setState({ datar: res.data });

        this.state.datar.map((d) => {
          this.state.b.push(d.user);
        });
      })

  }


  render() {
    const { data4 } = this.state;

    let activeChats = this.state.chats.map(c => {
      if (c.participants[0] === localStorage.getItem("username")) {
        { localStorage.setItem("persons", c.participants[1]) }
        return (
          <Contact
            key={c.id}
            name={c.participants[1]}
            picURL="http://emilcarlsson.se/assets/louislitt.png"
            status="busy"
            chatURL={`/chat/${c.id}`}

          />
        );
      }
      else {
        { localStorage.setItem("persons", c.participants[0]) }
        return (
          <Contact
            key={c.id}
            name={c.participants[0]}
            picURL="http://emilcarlsson.se/assets/louislitt.png"
            status="busy"
            chatURL={`/chat/${c.id}`}
          />
        );
      }

    });





    return (
      <div id="sidepanel">

        <div id="profile">
          <div className="wrap">
            {data4.map((s) =>
              <img
                id="profile-img"
                src={s.image1}
                className="online"
                alt=""
              />)}
            <h3>{this.props.username}</h3>

            <div id="status-options">
              <ul>
                <li id="status-online" className="active">
                  <span className="status-circle" /> <p>Online</p>
                </li>
                <li id="status-away">
                  <span className="status-circle" /> <p>Away</p>
                </li>
                <li id="status-busy">
                  <span className="status-circle" /> <p>Busy</p>
                </li>
                <li id="status-offline">
                  <span className="status-circle" /> <p>Offline</p>
                </li>
              </ul>
            </div>

          </div>
        </div>
        <div id="search">
          <label htmlFor="">
            <i className="fa fa-search" aria-hidden="true" />
          </label>
          <input type="text" placeholder="Search Chats..." />
        </div>
        <br></br>
        <h6>Friend list:</h6>

        <div id="contacts">
          <ul>{activeChats}</ul>
        </div>
        <div id="bottom-bar">
          <button id="addChat" onClick={() => this.openAddChatPopup()}>
            <i className="fa fa-user-plus fa-fw" aria-hidden="true" />
            <span>Create chat</span>
          </button>
          <button id="settings">
            <i className="fa fa-cog fa-fw" aria-hidden="true" />
            <span>Settings</span>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

    username: state.auth.username,
    chats: state.message.chats,
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {

    addChat: () => dispatch(navActions.openAddChatPopup()),

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidepanel);
