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
import { resetCalls } from 'react-ga';
class Forget extends React.Component {

    state = {
        parentuser: '',
        mail: '',
        error: '',
        load: '',
        status: '',

    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    };



    componentDidMount() {


    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ load: true })
        let form_data = new FormData();
        form_data.append('email', this.state.mail);

        let url = 'https://3choices.in/auth/password/reset/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }

        }).then(res => {
            console.log("data", res)
            this.setState({ load: false })
            this.setState({ status: res.data.success })

        }).catch(err => {
            this.setState({ error: err, load: false });
        });



    }


    render() {



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
                    <Grid.Column style={{ maxWidth: 450 }}> {this.state.error ? <p>Provided email didn't match check again!</p> :

                        <Header as="h2" color="violet" textAlign="center">{this.state.status ? <h3>{this.state.status}</h3> : <h3>Enter Your Registered Email</h3>}</Header>
                    }
                        <React.Fragment>

                            <Segment stacked style={{
                                backgroundColor: "#151719"
                            }} >
                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Field>
                                        <Label color="violet" for="age">Email</Label>
                                        <Input className="form-control" type="text" name="age" id="mail" placeholder="" value={this.state.mail} onChange={this.handleChange} />
                                    </Form.Field>




                                    <Button loading={this.state.load} color="violet" type='submit'>Submit</Button>

                                </Form>
                            </Segment>



                        </React.Fragment>
                    </Grid.Column>
                </Grid>
            </>
        )
    }
}













export default Forget