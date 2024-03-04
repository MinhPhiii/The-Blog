import React from "react";
import '../scss/Title.scss'
export default function Title(props){
    return(
        <>
            <div className="titleContainer">
               <div className="divTitle"> 
                    <span className="spanTitle">
                        {props.title}
                    </span>
               </div>
            </div>
        </>
    )
}