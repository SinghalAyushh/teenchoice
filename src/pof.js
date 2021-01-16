import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import "./pof.css"
import { productDetailURL } from "./constants";
import axios from "axios";

import Chat from "./containers/Chat";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import Bas from "./carousel"
import { Label, Button, Container, Header, Divider } from "semantic-ui-react"
import { Image, List } from 'semantic-ui-react'

import Pikachu from './components/layout/pikachu';



const heigt = window.innerWidth > 580 ? 400 : 700
const wt = window.innerWidth > 580 ? 1880 : 1000
class Basd extends React.Component {
    state = {
        loading: false,
        error: null,
        data: [],
        datag: [],
        datg: [],
        datal: [],
        datl: [],

    };

    componentDidMount() {

        this.handleFetchItem();






    }






    handleFetchItem = () => {
        const {
            match: { params }
        } = this.props;
        this.setState({ loading: true });
        axios
            .get(productDetailURL(params.productID))
            .then(res => {
                this.setState({ data: res.data, loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });





    };









    render() {
        const { data, error, loading, datag, datg, datal } = this.state;
        const item = data;
        localStorage.setItem("locat", item.location)
        const APIKEY = 'c2514daffcbd261b8f9940d30fc01d0a'
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("locat")}&APPID=${APIKEY}`)
            .then(res => {


                localStorage.setItem("lat2", res.data.coord.lat)
                localStorage.setItem("long2", res.data.coord.lon)




            })
        if (localStorage.getItem("lat1") == localStorage.getItem("lat2") && localStorage.getItem("long1") == localStorage.getItem("long2")) {
            localStorage.setItem("dist", "0")
        }

        else {



            const R = 6371e3; // metres
            const φ1 = localStorage.getItem("lat1") * Math.PI / 180; // φ, λ in radians
            const φ2 = localStorage.getItem("lat2") * Math.PI / 180;
            const Δφ = (localStorage.getItem("lat2") - localStorage.getItem("lat1")) * Math.PI / 180;
            const Δλ = (localStorage.getItem("long2") - localStorage.getItem("long1")) * Math.PI / 180;

            const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

            const d = R * c; // in metres
            localStorage.setItem("dist", Math.round(d / 1000))
        }

        localStorage.setItem("curr", item.parent_user)

        axios("https://3choices.in/profile/que/")
            .then(res => {
                this.setState({ datg: res.data.filter(({ username }) => username === localStorage.getItem("curr")) });

            })
            .catch(err => {
                this.setState({ error: err });
            });

        datg.map((td) => {
            localStorage.setItem("que1", td.que1)
            localStorage.setItem("que2", td.que2)
            localStorage.setItem("que3", td.que3)

        })

        return (
            <div class="wrapper-x">
                <div class="image-container-x">
                    <Carousel className="carousel-fade" style={{ top: "-266px", position: "relative" }}
                    >

                        <Carousel.Item>

                            <img

                                src={item.image1}
                                alt="Third slide"
                                width={wt}
                                height={heigt}
                            />
                            <Pikachu />


                        </Carousel.Item>
                        <Carousel.Item>
                            <img

                                src={item.image2}
                                alt="Third slide"
                                width={wt}
                                height={heigt}
                            />
                            <Pikachu />


                        </Carousel.Item>
                        <Carousel.Item>

                            <img

                                src={item.image3}
                                alt="Third slide"
                                width={wt}
                                height={heigt}
                            />
                            <Pikachu />


                        </Carousel.Item>
                    </Carousel>


                </div>

                { window.innerWidth < 580 ? <div class="profile-container-x" style={{ width: "88%" }}>
                    <div class="profile-pic-x" style={{ backgroundImage: `URL('${item.image1}')` }}></div>
                    {window.innerWidth < 580 ?
                        <h4 style={{ color: "purple" }}><span>{item.parent_user}</span>  ({item.Age}) </h4> : <h2 style={{ color: "purple" }}><span>{item.parent_user}</span>  ({item.Age}) </h2>}
                    <h4 style={{ color: "purple" }}>{item.location}</h4><br />
                    <h3 style={{ color: "purple" }}>Bio:</h3>
                    <p>{item.bio}</p>
                    {localStorage.getItem("curr") === localStorage.getItem("username") ? <p></p> : <b><p>You're <span style={{ color: "red" }}>{localStorage.getItem("dist")}</span>Km far from {localStorage.getItem("curr")}</p></b>
                    }<br /><br />
                    <h4 style={{ color: "purple" }}>Coffee Person or Tea Person?</h4>
                    <p>{localStorage.getItem("que1")}</p>
                    <h4 style={{ color: "purple" }}>Cat Person or Dog Person?</h4>
                    <p>{localStorage.getItem("que2")}</p>
                    <h4 style={{ color: "purple" }}>Morning Person or Evening Person?</h4>
                    <p>{localStorage.getItem("que3")}</p>
                    <br />
                    {localStorage.getItem("curr") === localStorage.getItem("username") ? <Button style={{ color: "purple" }} onClick={() =>
                        this.props.history.push(`/pof`)}>Edit</Button> : <p></p>}
                </div> :

                    <div class="profile-container-x" >
                        <div class="profile-pic-x" style={{ backgroundImage: `URL('${item.image1}')` }}></div>
                        {window.innerWidth < 580 ?
                            <h4 style={{ color: "purple" }}><span>{item.parent_user}</span>  ({item.Age}) </h4> : <h2 style={{ color: "purple" }}><span>{item.parent_user}</span>  ({item.Age}) </h2>}
                        <h4 style={{ color: "purple" }}>{item.location}</h4><br />
                        <h3 style={{ color: "purple" }}>Bio:</h3>
                        <p>{item.bio}</p>
                        {localStorage.getItem("curr") === localStorage.getItem("username") ? <p></p> : <b><p>You're <span style={{ color: "red" }}>{localStorage.getItem("dist")}</span>Km far from {localStorage.getItem("curr")}</p></b>
                        }<br /><br />
                        <h4 style={{ color: "purple" }}>Coffee Person or Tea Person?</h4>
                        <p>{localStorage.getItem("que1")}</p>
                        <h4 style={{ color: "purple" }}>Cat Person or Dog Person?</h4>
                        <p>{localStorage.getItem("que2")}</p>
                        <h4 style={{ color: "purple" }}>Morning Person or Evening Person?</h4>
                        <p>{localStorage.getItem("que3")}</p>
                        <br />
                        {localStorage.getItem("curr") === localStorage.getItem("username") ? <Button style={{ color: "purple" }} onClick={() =>
                            window.location.assign(`/pof`)}>Edit</Button> : <p></p>}
                    </div>
                }
            </div>

        );
    }
}

export default Basd;
