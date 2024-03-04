import React from "react";
import arrowLeft from "../assets/arrow-left.svg"
import arrowRight from "../assets/arrow-right.svg"
import "../scss/pagination.scss"

export default function Pagination(){
    return(
        <>  
            <div className="paginationContainer">
                <div className="pagitionChild">
                <div className="ChildImg">
                        <img className="arrow" src={arrowLeft}></img>
                        <span className="befordandfter">Previous</span>

                </div>
                <div className="center">
                    
                    <pan className="active">1</pan>
                    <pan className="default">2</pan>
                    <pan className="default">3</pan>
                    <pan className="default">...</pan>
                    <pan className="default">8</pan>
                    <pan className="default">9</pan>
                    <pan className="default">10</pan>
                </div>
                <div className="ChildImg">
                    <span>Next</span>
                    <img className="arrow" src={arrowRight}></img>
                </div>
                </div>
                
            </div>
        </>
    )
}