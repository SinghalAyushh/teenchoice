import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";
import "./ad.css"
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
class Base extends React.Component {
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
            <>
                <div className="wrapper">
                    <div className="image-container">
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

                    <div className="profile-container">
                        <div className="profile-pic" style={{ backgroundImage: `URL('${item.image1}')` }}></div>
                        <h1 style={{ opacity: "0" }}>{item.parent_user}</h1>

                        <Label className="afsx" style={{ fontSize: "1.9rem", backgroundColor: "inherit", color: "white" }}>{item.parent_user}  ({item.Age}) </Label>
                        <Divider></Divider>
                        <br></br><br></br>
                        <br></br>

                        <Container>
                            {window.innerWidth < 580 ?
                                <Header style={{ color: "whitesmoke", position: "relative", left: "-2px", top: "-46px" }}><p>{item.bio}</p></Header> : <h4 style={{ color: "whitesmoke" }}><p>{item.bio}</p></h4>} <Divider></Divider><br></br>
                            {window.innerWidth < 580 ?
                                <p>{item.location}</p> : <h4 style={{ color: "whitesmoke" }}><p>{item.location}</p></h4>} <Divider></Divider><br></br>
                            {localStorage.getItem("curr") === localStorage.getItem("username") ? <p></p> : <b><p style={{ color: "white" }}>You're {localStorage.getItem("dist")}Km far from {localStorage.getItem("curr")}</p> <Divider></Divider></b>}
                            <br></br>


                        </Container>

                    </div>


                </div>
                <List divided verticalAlign='middle'>

                    <List.Item>
                        <List.Content floated='right'>
                            <h6 style={{ color: "purple" }}> {localStorage.getItem("que1")}</h6>
                        </List.Content>

                        <List.Content>  <Label style={{ backgroundColor: "inherit" }}> <h6>coffe person or tea person..?</h6> </Label></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right'>
                            <h6 style={{ color: "purple" }}> {localStorage.getItem("que2")}</h6>
                        </List.Content>

                        <List.Content>  <Label style={{ backgroundColor: "inherit" }}>  <h6>cat person or dog person..?</h6> </Label></List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Content floated='right' >
                            {window.innerWidth < 580 ?
                                <h6 style={{
                                    color: "purple", fontSize: "0.8rem", position: "relative",
                                    top: "86px",
                                    left: "33px"
                                }}> {localStorage.getItem("que3")}</h6> : <h6 style={{
                                    color: "purple"

                                }}> {localStorage.getItem("que3")}</h6>
                            }

                        </List.Content>
                        <List.Content>   <Label style={{ backgroundColor: "inherit", textAlign: "center" }}><h6>Morning person or Evening person..?</h6></Label> </List.Content>
                    </List.Item>
                </List>
                <Divider /><br />


            </>

        );
    }
}

export default Base;
