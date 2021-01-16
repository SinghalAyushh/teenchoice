import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import "./ad.css"
import { productDetailURL } from "./constants";
import axios from "axios";
import "./af.css";
import { Rating, Icon, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import Image from './components/elements/Image';
import Bas from './carousel'
import Logo from './components/layout/partials/Logo';



export default class Age extends React.Component {

    state = {
        Age: 0,
        username: ""
    }

    handleChange = (e) => this.setState({ Age: e.target.value })


    handleSubmit = (e) => {
        e.preventDefault();

        let form_data = new FormData();
        form_data.append('username', localStorage.getItem("username"));
        form_data.append('Age', this.state.Age);

        let url = 'https://3choices.in/profile/age/';
        axios.post(url, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then(res => {


            })

        this.props.history.push("/que");
    }


    render() {
        const { Age } = this.state
        return (
            <>
                <Logo />
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>



                <div class="cover" style={{ position: "absolute", top: "12%" }} >
                    <h1>Select Age For  Your Match:</h1>
                    <div>
                        <div>💓 Age: {Age}</div>

                        <input
                            type='range'
                            min={0}
                            max={60}
                            value={Age}
                            onChange={this.handleChange}
                            size="larger"
                            color="white"
                        />
                        <br />
                        <Rating icon="heart" rating={this.state.Age} maxRating={(Math.round(this.state.Age / 10))} />
                        <br></br>
                        <br></br>
                        <Button color="violet" onClick={this.handleSubmit}>Next</Button>

                    </div>
                    <div id="madeby">
                        <span>


                        </span>
                    </div>
                </div>
            </>

        );
    }

}
