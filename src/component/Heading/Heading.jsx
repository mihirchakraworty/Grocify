import React from "react";

function Heading(props) {
    return (    
        <div className="mx-auto w-fit" >
            <h2 className="md:text-5xl  text-[2.5rem] font-bold"><span className="text-orange-500">{props.highlits}</span> {props.heading}</h2>
        </div>
    )
}
export default Heading;