import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios";
import { useCookies } from "react-cookie";
import Home from "./Home";
import About from "./About";
import Data from "./Data";
import { useNavigate } from "react-router-dom";

function Login() {
    let [name, setNAME] = useState();
    let [pass, setPASS] = useState();
    let [_, setCookies] = useCookies(["access_token"])
    let nav=useNavigate()
    function send() {
        axios.post("http://localhost:8000/devLogData", { name, pass }).then((res) => {
            console.log(res)
            if (res.data.mess === "exist") {
                setCookies(res.data.token);
                nav("/AddProject")



            }
            else {
                alert("Invalid User !")
            }
        })

    }

    return (
        <>
    
                <>
                    <h2 className="text-center m-4"> Only developer can use Not For Users (developer Login)</h2>
                    <div className="card my-3 mx-3 mb-3" >
                        <h2 className="text-center">Login</h2>



                        <input style={{ marginTop: '20px' }} className="my-3 mx-3" type="text" name="name" onChange={(e) => { setNAME(e.target.value) }} class="form-control" placeholder="Enter A Name Here" />
                        <input style={{ marginTop: '20px' }} className="my-3 mx-3" type="password" name="pass" onChange={(e) => { setPASS(e.target.value) }} class="form-control" placeholder="Enter A Pass Here" />

                        <span class="input-group-btn">
                            <button onClick={send} class="btn btn-outline-secondary d-flex my-3 m-auto" type="button">Send</button>
                        </span>
                    </div>
                </>
          

        




        </>
    )


}
export default Login