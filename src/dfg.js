import React, { Component } from 'react'
import Header from "./Header"
import axios from "axios";
import './App.css'
import TinderCard from 'react-tinder-card'
import { Container, Label, Button, Accordion, Icon, Segment, Dimmer, Loader, Image } from "semantic-ui-react"
import { Link } from "react-router-dom"
import "./App.css"
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as messageActions from "./store/actions/message";
import Pikachu from './components/layout/pikachu';
import Age from './age';
import { Badge } from 'antd';
import { NavLink, Redirect } from "react-router-dom";
class Sg extends Component {
    state = {
        error: null,
        data: [],
        lastDirection: [],
        data2: [],
        data3: [],
        data4: [],
        data5: [],
        data6: [],
        data9: [],
        data7: [],
        data8: [],
        datax: [],
        datac: [],
        datag: [],
        chats: [],
        req: [],
        dx: [],
        b: [],
        ids: '',
        pre: '',
        frd: [],
        dal: [],
        da: [],
        count: 0,
        datar: [],
        re: [],
        m: [],
        notd: [],
        dataq: [],
        n: [],
        r: [],
        counts: [],
        loading: false,
        friend: 0,
        date: 0,
        reject: 0,
        load: false,
        show: true,
        sho: true,
    };


    componentDidMount() {

        this.setState({ loading: true });
        this.setState({ count: JSON.parse(localStorage.getItem("cx")) })
        axios("https://3choices.in/cha/user/")
            .then(res => {
                this.setState({ data3: res.data.filter(({ username }) => username === localStorage.getItem("username")), loading: false });
                this.setState({ data4: res.data.filter(({ username }) => username === localStorage.getItem("friend")), loading: false });
                this.setState({ datax: res.data.filter(({ username }) => username === localStorage.getItem("reques")), loading: false });
                this.state.data3.map((f) => {
                    this.setState({ ids: f.id })
                    localStorage.setItem("sd", f.id);
                })
            })

        axios("https://3choices.in/profile/profile/")
            .then(res => {
                this.setState({ dx: res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")), loading: false });
                this.setState({ data: res.data.filter(({ Age, parent_user }) => Age <= localStorage.getItem("ages") && parent_user != localStorage.getItem("username") && parent_user != localStorage.getItem("gh")), loading: false });
                this.setState({ data: this.state.data.filter(({ parent_user }) => parent_user = !this.state.b.includes(parent_user)), loading: false });
                this.setState({ data: this.state.data.filter(({ parent_user }) => parent_user = !this.state.n.includes(parent_user)), loading: false });
                this.setState({ data: this.state.data.filter(({ parent_user }) => parent_user = !this.state.frd.includes(parent_user)), loading: false });
                this.setState({ data: this.state.data.filter(({ parent_user }) => parent_user = !this.state.m.includes(parent_user)), loading: false });
                this.setState({ data: this.state.data.filter(({ sex }) => sex === localStorage.getItem("intrest")), loading: false });
            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        axios("https://3choices.in/cha/contact/")
            .then(res => {
                this.setState({ data5: res.data.filter(({ user }) => user === JSON.parse(localStorage.getItem("ids2"))), loading: false });
                this.setState({ data6: res.data.filter(({ user }) => user === JSON.parse(localStorage.getItem("sd"))), loading: false });
                this.setState({ datac: res.data.filter(({ user }) => user === JSON.parse(localStorage.getItem("idsre"))), loading: false });
                this.setState({ pre: this.state.data6.length, loading: false })

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });

        axios("https://3choices.in/profile/age/")
            .then(res => {
                this.setState({ datag: res.data.filter(({ username }) => username === localStorage.getItem("username")), loading: false });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });
        axios("https://3choices.in/profile/count/")
            .then(res => {
                this.setState({ counts: res.data.filter(({ username }) => username === localStorage.getItem("username")), loading: false });

            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });




        axios("https://3choices.in/profile/friendrequests/")
            .then(res => {
                this.setState({ data2: res.data, loading: false });
                this.setState({ req: this.state.data2.filter(({ from_user }) => from_user === localStorage.getItem("username")), loading: false });
                this.state.req.map((d) => {
                    this.state.b.push(d.to_user)
                });



            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });

        axios("https://3choices.in/profile/daterequests/")
            .then(res => {
                this.setState({ dataq: res.data, loading: false });
                this.setState({ r: this.state.dataq.filter(({ from_user }) => from_user === localStorage.getItem("username")), loading: false })
                this.state.r.map((d) => {
                    this.state.n.push(d.to_user)
                });



            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });

        axios("https://3choices.in/profile/rejected/")
            .then(res => {
                this.setState({ datar: res.data, loading: false });
                this.setState({ re: this.state.datar.filter(({ from_user }) => from_user === localStorage.getItem("username")), loading: false })
                this.state.re.map((d) => {
                    this.state.m.push(d.to_user)
                });



            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });


        axios("https://3choices.in/profile/note/")
            .then(res => {
                this.setState({ notd: res.data.filter(({ to_user }) => to_user === localStorage.getItem("username")), loading: false })
            })


        axios("https://3choices.in/cha/")
            .then(res => {

                this.setState({ data9: res.data.filter(({ participants }) => participants[1] === localStorage.getItem("username")), loading: false });
                this.setState({ data8: res.data.filter(({ participants }) => participants[0] === localStorage.getItem("username")), loading: false });


                this.state.data9.map((f) => {
                    this.state.frd.push(f.participants[0])

                })
                this.state.data8.map((f) => {
                    this.state.frd.push(f.participants[1])

                })


            })
            .catch(err => {
                this.setState({ error: err, loading: false });
            });


        axios.get(`https://3choices.in/cha/?username=${localStorage.getItem("username")}`)
            .then(res => {

                this.setState({
                    chats: res.data, loading: false
                });
            });







    }
    componentWillMount() {


    }



    sendrequest = (name) => {

        if (this.state.lastDirection == "right") {
            if (localStorage.getItem("friend") != "1") {
                if (JSON.parse(localStorage.getItem("pre")) === 0) {


                    let form_dat = new FormData();
                    form_dat.append('user', this.state.ids);


                    let url2 = 'https://3choices.in/cha/contact/';
                    axios.post(url2, form_dat)
                }

                let form_data = new FormData();
                form_data.append('from_user', localStorage.getItem("username"));
                form_data.append('to_user', name);


                let url = 'https://3choices.in/profile/friendrequests/';
                axios.post(url, form_data).then(res => {
                    this.setState({ pre: 1 })
                    localStorage.setItem("friend", 1)
                    this.setState({ loading: true });
                    if (localStorage.getItem("cx") == 3) {
                        localStorage.removeItem("reject")
                        localStorage.removeItem("friend")
                        localStorage.removeItem("date")
                        localStorage.setItem("cx", 0)
                    }
                    window.location.reload()
                }
                )
            }
            else {
                alert("You can't do the same swipe twice")
                localStorage.setItem("cx", this.state.count - 1)
                window.location.reload()
                localStorage.setItem("friend", 1)

            }


        }
        else if (this.state.lastDirection == "up") {
            if (localStorage.getItem("date") != "1") {
                if (JSON.parse(localStorage.getItem("pre")) === 0) {


                    let form_dat = new FormData();
                    form_dat.append('user', this.state.ids);


                    let url2 = 'https://3choices.in/cha/contact/';
                    axios.post(url2, form_dat)
                }

                let form_data = new FormData();
                form_data.append('from_user', localStorage.getItem("username"));
                form_data.append('to_user', name);


                let url = 'https://3choices.in/profile/daterequests/';
                axios.post(url, form_data).then(res => {
                    this.setState({ pre: 1 })
                    localStorage.setItem("date", 1)
                    this.setState({ loading: true });
                    if (localStorage.getItem("cx") == 3) {
                        localStorage.removeItem("reject")
                        localStorage.removeItem("friend")
                        localStorage.removeItem("date")
                        localStorage.setItem("cx", 0)
                    }
                    window.location.reload()
                }
                )
            }
            else {

                alert("You can't do the same swipe twice")
                localStorage.setItem("cx", this.state.count - 1)
                window.location.reload()
                localStorage.setItem("date", 1)

            }

        }
    }




    swiped = (direction, nameToDelete) => {
        this.setState({ count: JSON.parse(localStorage.getItem("cx")) + 1 })
        localStorage.setItem("cx", this.state.count)

        this.setState({ lastDirection: direction })
        this.sendrequest(nameToDelete);
        localStorage.setItem("reques", nameToDelete)
        let form_d = new FormData();
        if (this.state.lastDirection === "left") {
            if (localStorage.getItem("reject") != "1") {

                form_d.append('from_user', localStorage.getItem("username"));
                form_d.append('to_user', nameToDelete);

                let urlc = 'https://3choices.in/profile/rejected/';
                axios.post(urlc, form_d).then(res => {

                    localStorage.setItem("reject", 1)
                    this.setState({ loading: true });
                    if (localStorage.getItem("cx") == 3) {
                        localStorage.removeItem("reject")
                        localStorage.removeItem("friend")
                        localStorage.removeItem("date")
                        localStorage.setItem("cx", 0)
                    }
                    window.location.reload()
                }
                )
            }
            else {
                alert("You can't do the same swipe twice")
                localStorage.setItem("cx", this.state.count - 1)
                window.location.reload()
                localStorage.setItem("reject", 1)





            }
        }
    }

    outOfFrame = (name) => {

    }

    addfriend = (id, fre) => {
        localStorage.setItem("idf", id);
        this.setState({ load: true })
        this.setState({ loading: true })

        if (this.state.pre == 0) {
            let idf = JSON.parse(localStorage.getItem("idf"))
            let form_dat = new FormData();
            form_dat.append('user', localStorage.getItem("sd"));



            let url = 'https://3choices.in/cha/contact/';
            axios.post(url, form_dat)
            localStorage.setItem("stat", "oka")
            const cobined = [fre, localStorage.getItem("username")];

            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.headers = {
                "Content-Type": "application/json",
            }

            let form_daa = new FormData();
            form_daa.append('from_user', localStorage.getItem("username"));
            form_daa.append('to_user', fre);


            let ul = 'https://3choices.in/profile/note/';
            axios.post(ul, form_daa)

            axios.post("https://3choices.in/cha/create/", {
                messages: [],
                participants: [fre, localStorage.getItem("username")]
            })
                .then(res => {
                    this.setState({ loading: false })
                    let form_dass = new FormData();

                    form_dass.append('user', fre);


                    let uxcs = 'https://3choices.in/profile/friend/';
                    axios.post(uxcs, form_dass)


                    let rl = 'https://3choices.in/profile/friendrequests/'
                    axios.delete(rl + id + "/")


                    window.location.assign(`/chat`);
                    this.props.getUserChats(localStorage.getItem("username"), localStorage.getItem("token"));
                    localStorage.removeItem("stat")
                    localStorage.setItem("friendz", "yes")
                    this.setState({ load: false })

                })
                .catch(err => {
                    this.setState({ load: false })
                    console.error(err);
                    this.setState({
                        error: err

                    });
                });





        }
        else {
            let idf = JSON.parse(localStorage.getItem("idf"))

            const comin = [localStorage.getItem("ids3"), localStorage.getItem("ids4")];
            let fr_dat = new FormData();
            fr_dat.append('user', localStorage.getItem("sd"));
            fr_dat.append('friends', comin);


            let uld = 'https://3choices.in/cha/contact/';
            axios.post(uld, fr_dat)
            const cobined = [fre, localStorage.getItem("username")];

            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.headers = {
                "Content-Type": "application/json",
            }
            let form_daa = new FormData();
            form_daa.append('from_user', localStorage.getItem("username"));
            form_daa.append('to_user', fre);


            let ul = 'https://3choices.in/profile/note/';
            axios.post(ul, form_daa)


            axios.post("https://3choices.in/cha/create/", {
                messages: [],
                participants: [fre, localStorage.getItem("username")]
            })
                .then(res => {
                    this.setState({ loading: false })
                    let form_dass = new FormData();

                    form_dass.append('user', fre);


                    let uxcs = 'https://3choices.in/profile/friend/';
                    axios.post(uxcs, form_dass)

                    let rl = 'https://3choices.in/profile/friendrequests/'
                    axios.delete(rl + id + "/")

                    window.location.assign(`/chat`);
                    this.props.getUserChats(localStorage.getItem("username"), localStorage.getItem("token"));
                    localStorage.removeItem("stat")
                    localStorage.setItem("friendz", "yes")
                    this.setState({ load: false })


                })
                .catch(err => {
                    this.setState({ load: false })
                    console.error(err);
                    this.setState({
                        error: err
                    });
                });


        }



    }
    adfriend = (id, fre) => {
        localStorage.setItem("idf", id);
        this.setState({ load: true })
        this.setState({ loading: true })

        if (this.state.pre == 0) {
            let idf = JSON.parse(localStorage.getItem("idf"))
            let form_dat = new FormData();
            form_dat.append('user', localStorage.getItem("sd"));



            let url = 'https://3choices.in/cha/contact/';
            axios.post(url, form_dat)
            localStorage.setItem("stat", "oka")
            const cobined = [fre, localStorage.getItem("username")];

            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.headers = {
                "Content-Type": "application/json",
            }

            let form_daa = new FormData();
            form_daa.append('from_user', localStorage.getItem("username"));
            form_daa.append('to_user', fre);


            let ul = 'https://3choices.in/profile/note/';
            axios.post(ul, form_daa)

            axios.post("https://3choices.in/cha/create/", {
                messages: [],
                participants: [fre, localStorage.getItem("username")]
            })
                .then(res => {
                    this.setState({ loading: false })
                    let form_das = new FormData();

                    form_das.append('user', fre);


                    let uxc = 'https://3choices.in/profile/date/';
                    axios.post(uxc, form_das)

                    let rlg = 'https://3choices.in/profile/daterequests/'
                    axios.delete(rlg + id + "/")

                    window.location.assign(`/date`);
                    this.props.getUserChats(localStorage.getItem("username"), localStorage.getItem("token"));
                    localStorage.removeItem("stat")
                    localStorage.setItem("friendz", "yes")
                    this.setState({ load: false })

                })
                .catch(err => {
                    this.setState({ load: false })
                    console.error(err);
                    this.setState({
                        error: err
                    });
                });








        }
        else {
            let idf = JSON.parse(localStorage.getItem("idf"))

            const comin = [localStorage.getItem("ids3"), localStorage.getItem("ids4")];
            let fr_dat = new FormData();
            fr_dat.append('user', localStorage.getItem("sd"));
            fr_dat.append('friends', comin);


            let uld = 'https://3choices.in/cha/contact/';
            axios.post(uld, fr_dat)
            const cobined = [fre, localStorage.getItem("username")];

            axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
            axios.defaults.xsrfCookieName = "csrftoken";
            axios.defaults.headers = {
                "Content-Type": "application/json",
            }
            let form_daa = new FormData();
            form_daa.append('from_user', localStorage.getItem("username"));
            form_daa.append('to_user', fre);


            let ul = 'https://3choices.in/profile/note/';
            axios.post(ul, form_daa)



            axios.post("https://3choices.in/cha/create/", {
                messages: [],
                participants: [fre, localStorage.getItem("username")]
            })
                .then(res => {
                    this.setState({ loading: false })
                    let form_das = new FormData();

                    form_das.append('user', fre);


                    let uxc = 'https://3choices.in/profile/date/';
                    axios.post(uxc, form_das)


                    let rlg = 'https://3choices.in/profile/daterequests/'
                    axios.delete(rlg + id + "/")

                    window.location.assign(`/date`);
                    this.props.getUserChats(localStorage.getItem("username"), localStorage.getItem("token"));
                    localStorage.removeItem("stat")
                    localStorage.setItem("friendz", "yes")
                    this.setState({ load: false })


                })
                .catch(err => {
                    this.setState({ load: false })
                    console.error(err);
                    this.setState({
                        error: err
                    });
                });


        }



    }

    remx = (id) => {
        let rl = 'https://3choices.in/profile/note/'
        axios.delete(rl + id + "/")

        window.location.reload();
    }
    confirm = (id) => {
        const combin = [localStorage.getItem("ids3"), localStorage.getItem("ids4")];
        let for_dat = new FormData();
        for_dat.append('user', localStorage.getItem("ids"));
        for_dat.append('friends', combin);


        let urld = 'https://3choices.in/cha/contact/';
        axios.post(urld, for_dat)
        const combined = [localStorage.getItem("friend"), localStorage.getItem("username")];

        axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
        axios.defaults.xsrfCookieName = "csrftoken";
        axios.defaults.headers = {
            "Content-Type": "application/json",
        }

        axios.post("https://3choices.in/cha/create/", {
            messages: [],
            participants: [localStorage.getItem("friend"), localStorage.getItem("username")]
        })
            .then(res => {
                window.location.assign(`/chat`);
                this.props.getUserChats(localStorage.getItem("username"), localStorage.getItem("token"));
                localStorage.removeItem("stat")
                localStorage.setItem("friendz", "yes")
            })
            .catch(err => {
                console.error(err);
                this.setState({
                    error: err
                });
            });



    }

    dsa = () => {
        this.setState({ opacity: 0 });
    }
    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    ShowHideDiv = (btnPassport) => {

        if (btnPassport.value == "Yes") {
            var opacity = 0;
            btnPassport.value = "No";
        } else {
            var opacity = 1;
            btnPassport.value = "Yes";
        }
    }



    render() {
        const { activeIndex } = this.state
        const { show, sho, loading, counts, dataq, notd, dx, da, b, lat1, dal, frd, pre, ids, data, req, error, datafr, data2, data3, data4, data6, chats, data5, data9, data8, datax, datac, datag } = this.state;
        var v = [];
        var bq = [];
        var opacity = 1;

        dx.map((fg) => {
            localStorage.setItem("location", fg.location)
            localStorage.setItem("intrest", fg.intrest)
        })
        localStorage.setItem("lent", dx.length)
        counts.map((ds) => {
            localStorage.setItem("idza", ds.id)
            localStorage.setItem("cd", ds.count)
        })


        chats.map((c) => {
            if (c.participants[0] === localStorage.getItem("username")) { localStorage.setItem("persons", JSON.stringify(c.participants[1])) } else {
                localStorage.setItem("person", JSON.stringify(c.participants[0]))
            }
        })




        v = data2.filter(({ to_user }) => to_user === localStorage.getItem("username"));
        bq = dataq.filter(({ to_user }) => to_user === localStorage.getItem("username"));
        var ds = 1;

        const APIKEY = 'c2514daffcbd261b8f9940d30fc01d0a'
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${localStorage.getItem("location")}&APPID=${APIKEY}`)
            .then(res => {


                localStorage.setItem("lat1", res.data.coord.lat)
                localStorage.setItem("long1", res.data.coord.lon)
            })



        data4.map((fg) => {
            localStorage.setItem("ids2", fg.id)
        })

        datax.map((fg) => {
            localStorage.setItem("idsre", fg.id)
        })

        data5.map((fgc) => {
            localStorage.setItem("ids3", fgc.id)
        })

        data6.map((fgc) => {
            localStorage.setItem("ids4", fgc.id)
        })
        datag.map((fgc) => {
            localStorage.setItem("ages", fgc.Age)
        })

        v.map((character) => {
            localStorage.setItem("friend", character.from_user)
        })


        localStorage.setItem("pre", pre.length)
        let gf = []
        axios("https://3choices.in/cha/contact/")
            .then(res => {

                this.setState({
                    pre: res.data.filter(({ user }) => user === JSON.parse(localStorage.getItem("sd")))
                });
            })


        let g = []



        if (JSON.parse(localStorage.getItem("cx")) == 1) {
            g = data.slice(0, 2);
        }
        else if (this.state.count == 2) {
            g = data.slice(0, 1);
        }
        else {
            g = data.slice(0, 3);
        }



        var q = window.innerWidth > 580 ? "17px" : "84px"

        var s = v.length + bq.length;

        axios("https://3choices.in/profile/profile/")
            .then(res => {
                localStorage.setItem("dx", res.data.filter(({ parent_user }) => parent_user === localStorage.getItem("username")))
            })

        if (localStorage.getItem("dx") === "") {

            return <Redirect to="/prof" />;


        }


        return (

            <div>

                <Pikachu>
                </Pikachu>

                <Accordion style={{ position: "relative", top: `${q}` }}>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >

                        <h5 color="violet" onClick={() => { this.setState({ show: !this.state.show }) }} ><Badge count={s} />Requests</h5>

                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <h5 color="white">
                            {loading && (
                                <Segment>
                                    <Dimmer active inverted>
                                        <Loader inverted>Loading</Loader>
                                    </Dimmer>

                                    <Image src="/images/wireframe/short-paragraph.png" />
                                </Segment>
                            )}

                            {v.map((character) =>
                                <p key={character.id}><b> You've Friend Request from {character.from_user}<br></br>  <Button onClick={() => this.addfriend(character.id, character.from_user)}>Add Friend</Button></b></p>
                            )}<br />
                            <br />
                            {bq.map((character) =>
                                <p key={character.id}><b> You've Date Request from {character.from_user}<br></br>  <Button onClick={() => this.adfriend(character.id, character.from_user)}>Date</Button></b></p>
                            )}

                        </h5>
                        <br></br>
                        <p color="white"></p>
                    </Accordion.Content>
                </Accordion>
                <br></br>
                <Accordion>
                    <Accordion.Title
                        active={activeIndex === 0}
                        index={0}
                        onClick={this.handleClick}
                    >

                        <h5 color="violet" onClick={() => { this.setState({ show: !this.state.show }) }}><Badge count={notd.length} />Notification</h5>

                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                        <h5 color="white">

                            {notd.map((character) =>
                                <h6 key={character.id}><b>{character.from_user} accepted Your request :)<br></br>  <Button onClick={() => this.remx(character.id)}>Clear</Button></b></h6>
                            )}

                        </h5>
                        <br></br>
                        <p color="white"></p>
                    </Accordion.Content>
                </Accordion>

                <br></br>
                <br></br>

                <center>{this.state.lastDirection === "right" & localStorage.getItem("friend") === null ? <h4 className='infoText' style={{ color: "purple" }}>You swiped for friend</h4> : this.state.lastDirection === "up" & localStorage.getItem("date") === null ? <h4 className='infoText' style={{ color: "purple" }}>You swiped for Date :)</h4> : this.state.lastDirection === "left" & localStorage.getItem("reject") === null ? <h4 className='infoText' style={{ color: "purple" }}>You rejected this user</h4> : localStorage.getItem("cd") === "1" ? <h4 style={{ color: "purple" }}>Swipe right for Friend ,Up for date & left for reject..!</h4> : <h6></h6>}</center>
                {
                    this.state.show ? <div >
                        <Header />
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <link href='https://fonts.googleapis.com/css?family=Damion&display=swap' rel='stylesheet' />
                        <link href='https://fonts.googleapis.com/css?family=Alatsi&display=swap' rel='stylesheet' />
                        {loading && (
                            <Segment>
                                <Dimmer active inverted>
                                    <Loader inverted>Loading</Loader>
                                </Dimmer>

                                <Image src="/images/wireframe/short-paragraph.png" />
                            </Segment>
                        )}


                        <div className='cardContainer'>
                            {g.map((character) =>



                                <TinderCard className='swipe' key={character.id} onSwipe={(dir) => this.swiped(dir, character.parent_user)} onCardLeftScreen={() => this.outOfFrame(character.parent_user)}>
                                    <div style={{ backgroundImage: 'url(' + character.image1 + ')' }} className='card'>
                                        <h3>{character.parent_user}</h3>
                                        <Button style={{ position: "relative", top: "213px" }} size="small" onClick={() =>
                                            this.props.history.push(`/main/products/${character.id}`)
                                        } onTouchStart={() =>
                                            this.props.history.push(`/main/products/${character.id}`)
                                        }>View Profile</Button>
                                    </div>
                                </TinderCard>


                            )
                            }


                        </div>
                    </div> : <> {loading && (
                        <Segment>
                            <Dimmer active inverted>
                                <Loader inverted>Loading</Loader>
                            </Dimmer>

                            <Image src="/images/wireframe/short-paragraph.png" />
                        </Segment>
                    )}
                        </>}


            </div>
        )
    }

}




const mapStateToProps = state => {
    return {
        token: state.auth.token,
        username: state.auth.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getUserChats: (username, token) =>
            dispatch(messageActions.getUserChats(username, token))
    };
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Sg)
);
