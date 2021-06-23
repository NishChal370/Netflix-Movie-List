import React from "react";

function Card(props){
    return(
        <>
            <div className="container" >
                <div>
                    <img src={props.Link} alt="this is image"/>
                </div>
                <div className="movieDetl">
                    <p>Netflix Original Series</p>
                    <h1>{props.movieName}</h1>
                    <a href={props.movieLink}>
                        <button>Watch Me</button>
                    </a>
                    
                </div>
            </div>
        </>
    );
}

//send to CardDisplay.js
export default Card;