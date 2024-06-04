import React from "react"
import photo from './assets/myphoto.jpeg'

export default function Info(){
    return(
        <div className="info">
            <img src={photo} className="my-photo"/>
            <h1>Riya Singh</h1>
            <h3>Frontend Developer</h3>
            <a href="https://twitchytongue.com/"><h4>twitchytongue.com</h4></a>
            <div className="info-buttons">
                <a href="mailto:riyasingh813@gmail.com"><button><i class="fas fa-envelope"></i>Email</button></a>
                <a href="https://www.linkedin.com/in/riya-singh-a94448a2/"><button className="linkedIn"><i class="fab fa-linkedin"></i>LinkedIn</button></a>
            </div>
        </div>
    )
}