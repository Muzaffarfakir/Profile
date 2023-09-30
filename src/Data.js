import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Data() {
    let [text, setText] = useState();
    let [title, SetTitle] = useState();
    let [repo, SetRepo] = useState();
    let [img, setImg] = useState();
    let nav = useNavigate();
    let k = (e) => {
        let data = new FormData();
        let file = e.target.files[0];
        data.append("imgg", file)
        console.log(file)

        axios({
            method: "post",
            url: "http://localhost:8000/projectDataImg",
            data: data,
            config: {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }


            }
        })

    }




    function send() {
        if (text === null || text === undefined || text === "" || title === null || title === undefined || title == "" || repo === "" || repo === null || repo === undefined) {
            alert("You Forget Something !!!")
        }
        else {
            axios.post("http://localhost:8000/projectData", { text, title, repo })
            nav('/about')
        }

    }


    return (
        <>
            <form encType="multipart/form-data">

                <div className="card mx-3 my-3 ">
                    <h2 className="text-center">Add Project here</h2>

                    <div class="card my-3 mx-3">


                        <input type="file" name="imgg" encType="multipart/form-data" placeholder="Enter a Image here" onChange={k} class="form-control" aria-describedby="basic-addon2" />
                        <input style={{ marginTop: "25px" }} className="my-3" type="text" name="Title" onChange={(e) => { SetTitle(e.target.value) }} placeholder="Write a Title" class="form-control" />
                        <textarea style={{ marginTop: "25px" }} className="my-3" type="text" name="text" onChange={(e) => { setText(e.target.value) }} placeholder="Write a Text About a Project" rows={"30"} class="form-control"></textarea>
                        <input style={{ marginTop: "25px" }} className="my-3" type="text" name="Github" onChange={(e) => { SetRepo(e.target.value) }} placeholder="Github Repo" class="form-control" />

                        <span class="input-group-btn">
                            <button style={{ marginTop: "25px" }} onClick={send} class="btn btn-outline-secondary d-flex m-auto my-3" type="button">Send</button>
                        </span>
                    </div>

                </div>

            </form>

        </>
    )
}
export default Data