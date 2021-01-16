import React from 'react'
import { Button, Image, List, Header } from 'semantic-ui-react'
import axios from "axios"
import Logo from './components/layout/partials/Logo';
class ListExampleFloated extends React.Component {
    state = {
        data2: []
    }

    componentDidMount() {
        axios("https://3choices.in/profile/friendrequests/")
            .then(res => {
                this.setState({ data2: res.data });

            })
            .catch(err => {
                this.setState({ error: err });
            });
    }


    render() {
        const { data2 } = this.state;
        let v = [];
        v = data2.filter(({ from_user }) => from_user === localStorage.getItem("username"));

        return (
            <>
                <Logo></Logo>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Header ><h3>Friend request list:</h3></Header>
                <List divided verticalAlign='middle'>
                    {v.map((d) =>
                        <List.Item>
                            <List.Content floated='right'>
                                <Button color="red">Pending</Button>
                            </List.Content>
                            <Image avatar src='http://react.semantic-ui.com/images/avatar/small/lena.png' />
                            <List.Content>{d.to_user} </List.Content>
                        </List.Item>
                    )}
                </List>
            </>
        )
    }
}

export default ListExampleFloated