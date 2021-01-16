import React from 'react';
import "./prof.scss";
import axios from 'axios';
import { NavLink, Redirect } from "react-router-dom";
import { TextArea } from 'semantic-ui-react'
import { Container, Accordion, Icon, Dimmer, Loader, Image } from "semantic-ui-react"
import { ProgressBar } from 'react-bootstrap';
import {
    Button, Checkbox, Form, Grid,
    Message,
    Segment,
    Label,
    Input,
    Radio,

    Header,
} from 'semantic-ui-react'
import Pikachu from './components/layout/pikachu';
import Logo from './components/layout/partials/Logo';


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]
class Proflayout extends React.Component {

    state = {
        currentStep: 1,
        parentuser: localStorage.getItem("username"),
        Age: '',
        sex: 'Male',
        location: '',
        image1: null,
        image2: null,
        image3: null,
        loading: false,
        intrest: '',
        bio: '',
        datad: [],
        uploadPercentage: 0,

    };

    handleChan = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })


    };
    handleChange = (e, { value }) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        this.setState({ value })
    };

    handleImageChange = (e) => {
        this.setState({
            [e.target.id]: e.target.files[0]

        })
    };


    handleSubmit = (e) => {





        this.setState({ loading: true })

        let form_data = new FormData();
        form_data.append('parent_user', this.state.parentuser);
        form_data.append('Age', this.state.Age);
        form_data.append('intrest', this.state.value);
        form_data.append('sex', this.state.sex);
        form_data.append('bio', this.state.bio);
        form_data.append('location', this.state.location);

        form_data.append('image1', this.state.image1, this.state.image1.name);

        if (this.state.image2 === null) { form_data.append('image', this.state.image1, this.state.image1.name) } else {
            form_data.append('image2', this.state.image2, this.state.image2.name);
        }

        if (this.state.image3 === null) { form_data.append('imagec', this.state.image1, this.state.image1.name) } else {
            form_data.append('image3', this.state.image3, this.state.image3.name);
        }
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
        let url = 'https://3choices.in/profile/profile/';
        axios.post(url, form_data, options, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {


                this.props.history.push("/age");
                this.setState({ uploadPercentage: 100 }, () => {
                    setTimeout(() => {
                        this.setState({ uploadPercentage: 0 })
                    }, 1000);
                })
            })



    }
    _next = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev = () => {
        let currentStep = this.state.currentStep
        currentStep = currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    previousButton() {
        let currentStep = this.state.currentStep;
        if (currentStep !== 1) {
            return (
                <button
                    className="btn btn-secondary"
                    type="button" onClick={this._prev}>
                    Previous
                </button>
            )
        }
        return null;
    }
    componentDidMount() {


        this.setState({ loading: false })
        if (this.state.image2 == null) {
            this.setState({ image2: this.state.image1 })
        };
        if (this.state.image3 == null) {
            this.setState({ image3: this.state.image1 })
        };
    }
    nextButton() {
        let currentStep = this.state.currentStep;
        if (currentStep == 1) {
            return (
                <Button
                    color="violet"
                    className="btn btn-primary float-right"
                    type="button" onClick={this._next}>
                    Next
                </Button>
            )
        }
        return null;
    }



    render() {
        const { loading, uploadPercentage } = this.state;





        return (
            <>

                <Logo />
                <br></br>
                <br></br>




                <Grid
                    textAlign="center"
                    style={{ height: "auto" }}
                    verticalAlign="middle"


                >
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Header as="h2" color="violet" textAlign="center" style={{ position: "relative", left: "28%" }}>About You</Header>
                        <React.Fragment>

                            <Segment stacked style={{
                                backgroundImage: `url('http://source.unsplash.com/wSBQFWF77lI/490x1170')`
                            }} >
                                <Form onSubmit={this.handleSubmit}>

                                    {this.state.currentStep == 1 ?
                                        <>
                                            <Form.Field>
                                                <Label color="violet" for="parent_user" style={{}}>Username</Label >
                                                <br></br>
                                                <Input className="form-control" type="text" readOnly="true" name="parent_user" id="parentuser" placeholder="" value={localStorage.getItem("username")} onChange={this.handleChange} required />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="violet" for="age">Age</Label>
                                                <br></br>
                                                <Input className="form-control" type="number" name="age" id="Age" placeholder="" value={this.state.Age} onChange={this.handleChange} required />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="violet" for="location">Location</Label>
                                                <br></br>
                                                <Input className="form-control" type="text" name="loc" id="location" placeholder="" value={this.state.location} onChange={this.handleChange} required />
                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="violet" for="sex">Gender</Label>
                                                <br />

                                                <select
                                                    style={{ marginTop: "8px" }}
                                                    value={this.state.sex}
                                                    onChange={this.handleChan}
                                                    id="sex"
                                                >
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                    <option value="Not-Sure">Not-Sure</option>
                                                </select>
                                            </Form.Field>
                                            <Label color="violet" for="bio">Bio</Label>
                                            <br />



                                            <Form.Field
                                                style={{ marginTop: "8px" }}
                                                id='bio'
                                                control={TextArea}
                                                onChange={this.handleChange}

                                                placeholder='Bio'
                                                value={this.state.bio}
                                            />

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


                                            {this.previousButton()}
                                            {this.nextButton()}

                                        </>
                                        :

                                        <>
                                            <Form.Field>
                                                <Label color="violet" for="image1" >Profile </Label>
                                                <br></br>
                                                <br></br>
                                                {this.state.image1 != null ? <p style={{ color: "green" }}> Uploaded</p> :
                                                    <p style={{ color: "white" }}> Upload image</p>}
                                                <br></br>
                                                <Icon name="camera" style={{ color: "white", position: "relative", left: "1px" }} />
                                                <Input style={{ opacity: "0", top: "-53px", position: "relative" }} type="file" className="imag" id="image1" accept="image/png, image/jpeg" onChange={this.handleImageChange} required />

                                            </Form.Field>
                                            <Form.Field>
                                                <Label color="violet" for="image2" > image </Label >
                                                <br></br>
                                                <br></br>
                                                {this.state.image2 != null ? <p style={{ color: "green" }}> Uploaded</p> :
                                                    <p style={{ color: "white" }}> Upload image</p>}
                                                <br></br>
                                                <Icon name="camera" style={{ color: "white", position: "relative", left: "1px" }} />
                                                <Input style={{ opacity: "0", top: "-53px", position: "relative" }} type="file" id="image2" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                            </Form.Field>

                                            <Form.Field>
                                                <Label color="violet" for="image3" >image </Label >
                                                <br></br>
                                                <br></br>
                                                {this.state.image3 != null ? <p style={{ color: "green" }}> Uploaded</p> :
                                                    <p style={{ color: "white" }}> Upload image</p>}
                                                <br></br>
                                                <Icon name="camera" style={{ color: "white", position: "relative", left: "1px" }} />
                                                <Input style={{ opacity: "0", top: "-53px", position: "relative" }} type="file" id="image3" className="imag" accept="image/png, image/jpeg" onChange={this.handleImageChange} />

                                            </Form.Field>
                                            {uploadPercentage > 0 && <ProgressBar now={uploadPercentage} active label={`${uploadPercentage}%`} />}



                                            <Button color="violet" type='submit' loading={this.state.loading}>Next</Button>

                                            {this.previousButton()}
                                            {this.nextButton()}

                                        </>
                                    }

                                </Form>
                            </Segment>




                        </React.Fragment>
                    </Grid.Column>
                </Grid>
            </>
        )

    }
}













export default Proflayout