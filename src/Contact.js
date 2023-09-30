import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Fotter from "./Fotter";

function Conatct() {
    return (
        <>

            <h1 className="text-center">Contact Us</h1>
            <hr></hr>
            <div className=" card inline-block  my-3 mx-3 mb-3  text-center">

                <div className="inline-block ">
                    <center>
                        <i class="fa-sharp fa-solid fa-phone-volume fa-lg " ></i>

                    </center>

                    <div >
                        <h2 className="text-center">By Phone</h2>

                        <p>(India +917841970061 )  </p>
                        <p>Whatsapp +917841970061 Number </p>
                        <p>Maharastra Latur Nilanga </p>

                    </div>
                    <hr></hr>
                    <div className="inline-block my-3 mx-3">
                        <h2>By Email</h2>

                        <i class="fa-sharp fa-bounce fa-solid fa-envelope fa-lg"></i>
                        <a style={{ color: 'black' }} href="mailto:fakirmuzaffar771@gmail.com">fakirmuzaffar771@gmail.com</a><br></br>
                        <br>
                        </br>
                        <i class="fa-sharp  fa-bounce fa-solid fa-envelope fa-lg"></i>
                        <a style={{ color: 'black' }} href="mailto:nisarfakir01@gmail.com">nisarfakir01@gmail.com</a>


                    </div>
                    <hr ></hr>
                    <div className="text-center inline-block mx-3 my-3">
                        <h2>Socail Media Handels</h2>
                        <i class="fa-brands fa-github fa-bounce fa-lg"></i>
                        <a style={{ color: 'black' }} href="https://github.com/">Github</a><br></br>
                        <i class="fa-brands fa-linkedin fa-bounce fa-lg"></i>
                        <a style={{ color: 'black' }} href="https://in.linkedin.com/in/muzaffar-fakir-nisar-ahmad-35b401241?trk=public_profile_samename-profile">Linkedin</a><br></br>
                        <i class="fa-brands fa-google-play fa-bounce fa-lg"></i>

                        <a style={{ color: 'black' }} href="https://play.google.com/store/apps/developer?id=Fakir+muzaffar+nisar+ahmad">Playstore</a>
                        <br></br> <i class="fa-brands fa-instagram fa-bounce fa-lg"></i>
                        <a style={{ color: 'black' }} href="https://www.instagram.com/#reactivated">Instagram</a>
                    </div>

                </div>
            </div>
            <Fotter/>

        </>
    )

}
export default Conatct;