import React from 'react';
import "./prof.scss";
import axios from 'axios';
import { Icon, Radio } from 'semantic-ui-react'
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
class Intrest extends React.Component {

    state = {
        intrest: '',
        datad: [],
    };

    handleChange = (e, { value }) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        this.setState({ value })
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
        form_data.append('intrest', this.state.value);

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

                                        <Label color="violet" for="location"> Intrested in: </Label>
                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="radioGroup">Male</Label>
                                        <br />
                                        <Radio

                                            name='radioGroup'
                                            value='Male'
                                            style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}

                                            checked={this.state.value === 'Male'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="radioGroup">Female</Label>
                                        <br />
                                        <Radio

                                            name='radioGroup'

                                            value='Female'
                                            style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}
                                            checked={this.state.value === 'Female'}
                                            onChange={this.handleChange}
                                        />
                                    </Form.Field>
                                    <Form.Field>
                                        <Label style={{ marginX: "2px" }} color="violet" for="radioGroup">Not-Sure</Label>
                                        <br />
                                        <Radio

                                            name='radioGroup'
                                            value='Not-Sure'
                                            style={{ position: "relative", left: "-72px", top: "-32px", marginTop: "8px" }}
                                            checked={this.state.value === 'Not-Sure'}
                                            onChange={this.handleChange}
                                        />
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













export default Intrest