import React, { useEffect, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Home.css'
import Typed from "typed.js"
import monogdb from "./Mongodb.jpg"
import expressjs from "./express.jpg"
import logo from "./logo192.png"
import nodejs from "./Nodejs.png"
import Fotter from "./Fotter";
import Particle from "./Particle";
import Navbar from "./Navbar";
import {useNavigate} from "react-router-dom"

function Home() {
    let s = useRef();
    let p = useRef();
    let nav=useNavigate();
    function ab(){
        nav("/About");
    }
       function con(){
        nav("/Conatct");
    }














    useEffect(() => {
        let type = new Typed(s.current, {
            strings: ["MERN DEV", "Developer", "Programer", "Muzaffar"],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        })


    }, [])



    return (

        <>
            <div id="body">










                <div className=" card text-center  bg-dark text-white">



                    <h1 className="text-center my-3 bg-dark text-white">I Am a <span ref={s}></span></h1>
                    <h6>Hello My Name is  Muzaffar This Is My Protofolio Website This is  Made in Reactjs Nodejs Expressjs Mongodb Particles.js </h6>
                    <h6>Here You Get To Know Me Or To Contact  me </h6>
                    <div className="mx-3 mb-3 my-3">
                        <a className="btn btn-outline-primary mx-3 bg-dark text-white  my-3" onClick={ab}>About Me</a>
                        <a className="btn btn-outline-primary my-3 bg-dark text-white" onClick={con}>Contact</a>

                    </div>
                    <div className="card  text-center bg-dark text-white ">
                        <h2 className=" mb-3">The Technologies Are Used In This website</h2>
                        <div className="inline-block ">
                            <a href="https://www.mongodb.com/">
                                <img src={monogdb} />

                            </a>
                            <a href="https://expressjs.com/">
                                <img src={expressjs} />

                            </a>
                            <a href="https://nodejs.org/en">
                                <img src={nodejs} />

                            </a>
                            <a href="https://react.dev/">
                                <img src={logo} />

                            </a>

                        </div>
                    </div>





                </div>
                <Particle />




                <Fotter />


            </div>

        </>
    )
}

export default Home;
