import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Hoc from "../hoc/hoc";
import axios from "axios"


class Profile extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {

    axios("https://3choices.in/profile/profile/")
      .then(res => {

        this.setState({ data: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")) });

      })
      .catch(err => {
        this.setState({ error: err });
      });
  }



  render() {
    const { data } = this.state

    console.log(this.props.username);
    return (


      <div className="contact-profile">
        {data.map((x) =>
          this.props.username !== null ? (
            <Hoc>
              <img src={x.image1} alt="" />
              <b> <p>{localStorage.getItem("username")}</p></b>
              <div className="social-media">
                <i className="fa fa-facebook" aria-hidden="true" />
                <i className="fa fa-twitter" aria-hidden="true" />
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
            </Hoc>
          ) : null

        )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.auth.username,
    token: state.auth.token
  };
};

export default connect(mapStateToProps)(Profile);
