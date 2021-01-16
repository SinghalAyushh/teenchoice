import React from 'react';
import "./prof.scss";
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import {
    Button, Checkbox, Form, Grid,
    Message,
    Segment,
    Label,
    Input,

    Header,
} from 'semantic-ui-react'
import Pikachu from './components/layout/pikachu';
import Logo from './components/layout/partials/Logo';
class Proflay extends React.Component {

    state = {
        parentuser: '',
        Age: '',
        datad: [],
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };



    componentDidMount() {

        axios("https://3choices.in/profile/profile/")
            .then(res => {

                this.setState({ datad: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")) });

            })
            .catch(err => {
                this.setState({ error: err });
            });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('parent_user', localStorage.getItem("username"));
        form_data.append('Age', this.state.Age);

        let url = 'https://3choices.in/profile/profile/';
        axios.put(url + localStorage.getItem("df") + "/", form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        }).then(res => {
            window.location.assign(`/main/products/${localStorage.getItem("df")}`);

        })


    }


    render() {
        const { datad } = this.state;
        datad.map((c) => {
            localStorage.setItem("df", c.id);

        })


        return (
            <>
                <Logo />
                <br></br>
                <br></br>
                <br></br>




                <Grid
                    textAlign="center"
                    style={{ height: "auto" }}
                    verticalAlign="middle"


                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="violet" textAlign="center"><h1>Edit Your Details</h1></Header>
                        <React.Fragment>

                            <Segment stacked style={{
                                backgroundColor: "#151719"
                            }} >
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Field>
                                        <Label color="violet" for="age">Age</Label>
                                        <Input className="form-control" type="number" name="age" id="Age" placeholder="" value={this.state.Age} onChange={this.handleChange} />
                                    </Form.Field>




                                    <Button color="violet" type='submit'>Submit</Button>

                                </Form>
                            </Segment>



                        </React.Fragment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}













export default Proflay