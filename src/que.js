import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import "./ad.css"
import { productDetailURL } from "./constants";
import axios from "axios";
import "./af.css"
import { Rating, Icon, Form, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Image from './components/elements/Image';
import Bas from './carousel'
import Logo from './components/layout/partials/Logo';



export default class Que extends React.Component {

    state = {
        username: "",
        que1: 'Coffee',
        que2: 'Cat',
        que3: 'Morning',

    };

    handleChan = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })


    };



    handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('username', localStorage.getItem("username"));
        form_data.append('que1', this.state.que1);
        form_data.append('que2', this.state.que2);
        form_data.append('que3', this.state.que3);

        let url = 'https://3choices.in/profile/que/';
        axios.post(url, form_data)
            .then(res => {


            })
        localStorage.setItem("dx", "sd")

        window.location.assign("/main");
    }
    render() {

        return (
            <>


                <Logo />
                <br></br>
                <br></br>
                <br></br>
                <br></br>


                <div class="cover" style={{ position: "relative", top: "39px" }} >
                    <Form onSubmit={this.handleSubmit} >
                        <Form.Field>
                            <h1>Coffee person or tea person..?</h1>
                            <select
                                style={{ marginTop: "8px" }}
                                value={this.state.que1}
                                onChange={this.handleChan}
                                id="que1"
                            >
                                <option value="Coffee">Coffee</option>
                                <option value="Tea">Tea</option>

                            </select>
                        </Form.Field>
                        <Form.Field>
                            <h1>Cat person or Dog person..?</h1>
                            <select
                                style={{ marginTop: "8px" }}
                                value={this.state.que2}
                                onChange={this.handleChan}
                                id="que2"
                            >
                                <option value="Cat">Cat</option>
                                <option value="Dog">Dog</option>

                            </select>
                        </Form.Field>
                        <Form.Field>
                            <h1>Morning person or Evening person..?</h1>
                            <select
                                style={{ marginTop: "8px" }}
                                value={this.state.que3}
                                onChange={this.handleChan}
                                id="que3"
                            >
                                <option value="Morning">Morning</option>
                                <option value="Evening">Evening</option>

                            </select>
                        </Form.Field>
                        <Button type='submit'>Submit</Button>
                    </Form>
                </div>
                <div id="madeby">

                </div>

            </>

        );
    }

}