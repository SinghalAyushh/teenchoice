import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import "./Header.css"
import IconButton from "@material-ui/core/IconButton"
import ChatIcon from '@material-ui/icons/Chat';
import { Container, Label, Button, Accordion, Icon, Segment, Dimmer, Loader, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
import axios from "axios"
import { withRouter } from "react-router-dom";
class Header extends React.Component {
  state = {
    data: [],
    loading: false,
  }
  componentDidMount() {
    this.setState({ loading: true });
    axios("https://3choices.in/profile/profile/")
      .then(res => {
        this.setState({ data: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")), loading: false });

      })
  }
  render() {
    const { data, loading } = this.state;
    console.log(data.length);

    return (
      <>
        {this.state.loading == true ? <>{loading && (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted>Loading</Loader>
            </Dimmer>

            <Image src="/images/wireframe/short-paragraph.png" />
          </Segment>
        )}</> : <Container className="heade">

            {data.length == 0 ? <IconButton key={data.id} onClick={() =>
              this.props.history.push(`/prof`)}><Icon name="user" fontSize="larger" className="header-icon" /></IconButton> :
              data.map((r) =>
                <IconButton key={r.id} onClick={() =>
                  this.props.history.push(`/main/products/${r.id}`)}><Icon name="user" fontSize="larger" className="header-icon" /></IconButton>
              )}

            <h5 color="purple">  Hey! {localStorage.getItem("username")}</h5>
            <a href="/cxz"><IconButton><Icon name="paper plane" fontSize="larger" className="header-icon" /></IconButton></a>


          </Container>

        }
      </>
    );
  }
}

export default withRouter(Header);