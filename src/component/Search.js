import React from "react";
import '../scss/Search.scss'
export default function Searchs() {
    return(
        <>
           <div className="NewContainer">
        <h3 className="h3Newlat">Newlatters</h3>
        <h1 className="h1New">Stories and interviews</h1>
        <div>
            <p className="pNew">Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>
        </div>
        <div className="Email">
            <input className="Enter" value="Enter your Email" />
            <button className="Sub">Subscribe</button>

        </div>


    </div>
        </>
    )
 

}