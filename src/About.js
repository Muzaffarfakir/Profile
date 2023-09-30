import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./About.css"
import mongodb from "./Mongodb.jpg"
import Fotter from "./Fotter";
import Home from "./Home";
import Data from "./Data";
import Login from "./Login";
import Particle from "./Particle";

function About() {
    let [data, Setdata] = useState([]);
    let [seen, setseen] = useState(false)

    function infi() {
        fetch('https://profile-bcak.onrender.com/').then((res) => res.json()).then((data) => {
            Setdata(data)
        }
        )
    };
    useEffect(() => {
        infi();
    }, [])


    function send() {
        setseen(!seen)




    }


    return (
        <>
            {!seen ? (<>


                <h2 className="text-center">About Me  </h2>
                <h5 className="text-center ">Here My All Projects  </h5>

                {data.map((el, k) => {
                    return <div>
                        <div class="card  my-3" >
                            <div class="row no-gutters">
                                <div class="col-md-3">
                                    <img src={`${el.img}`} class="card-img mx-3 " alt={`Logo${k}`} />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{el.title}</h5>
                                        <p class="card-text">{el.text}.</p>
                                        <a style={{ color: "black" }} href={`${el.repo}`}>{el.repo}</a>
                                        <p class="card-text"><small class="text-muted">{el.date}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                })}

            </>

            ) : (<Login />)}
            <div>
                <button onClick={send} style={{position:"absolute",left:"80%", top:"12%" }} class="btn btn-primary">Add</button>

            </div>

            <Fotter />
        </>





    )

}
export default About;
