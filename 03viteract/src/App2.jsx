import React from "react";

function Card({username,myobj="no attri"}) {
    console.log("props", username,myobj)
    return (
        <>
        <h1>{}</h1>
        <p className="bg-gray-300 m-4">Lorem,{username} {myobj}ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus suscipit dolorem tempore fugiat </p>
        </>
    )
}

export default Card