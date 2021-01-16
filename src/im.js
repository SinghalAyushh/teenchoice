import React from 'react';
import "./prof.scss";
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import { ProgressBar } from 'react-bootstrap';
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
class Image extends React.Component {

    state = {
        parentuser: '',
        image1: null,
        image2: null,
        image3: null,
        datad: [],
        uploadPercentage: 0,
    };

    handleImageChange = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]

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
        const options = {
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = Math.floor((loaded * 100) / total)
                console.log(`${loaded}kb of ${total}kb | ${percent}%`);

                if (percent < 100) {
                    this.setState({ uploadPercentage: percent })
                }
            }
        }

        let form_data = new FormData();
        form_data.append('parent_user', localStorage.getItem("username"));
        form_data.append('image1', this.state.image1, this.state.image1.name);

        if (this.state.image2 === null) { form_data.append('image', this.state.image1, this.state.image1.name) } else {
            form_data.append('image2', this.state.image2, this.state.image2.name);
        }

        if (this.state.image3 === null) { form_data.append('imagec', this.state.image1, this.state.image1.name) } else {
            form_data.append('image3', this.state.image3, this.state.image3.name);
        }



        let url = 'https://3choices.in/profile/profile/';
        axios.put(url + localStorage.getItem("df") + "/", form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {



                this.setState({ uploadPercentage: 100 }, () => {
                    setTimeout(() => {

                        this.setState({ uploadPercentage: 0 })
                    }, 1000);
                })
                window.location.assign(`/main/products/${localStorage.getItem("df")}`);

            })





    }


    render() {
        const { datad, uploadPercentage } = this.state;
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
                                        <Label color="violet" for="image1" >Profile </Label>
                                        <br></br>
                                        <br></br>
                                        <Input type="file" className="imag" id="image1" accept="image/png, image/jpeg" onChange={this.handleImageChange} required />

                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="image2" > image </Label >
                                        <br></br>
                                        <br></br>
                                        <Input type="file" id="image2" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                    </Form.Field>
                                    <Form.Field>
                                        <Label color="violet" for="image3" >image </Label >
                                        <br></br>
                                        <br></br>

                                        <Input type="file" id="image3" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                    </Form.Field>
                                    {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />}



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













export default Image