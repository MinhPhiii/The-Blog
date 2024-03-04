import React from "react";
import img2 from '../assets/blog2.jpg'
// import '../scss/MidProjects.scss'
import '../scss/ProjectChild.scss'
export default function MidProjects(prop) {
    return (
        <>
            <div>
                
                <div className="ProjectContainer">
                    <div className="ProjectContainerChild">
                        <div className="imgMidProject">
                            <img className="imgMidProject" src={prop.image}></img>
                        </div>
                        <div className="hi">
                            <div className="blogcontent">
                                <h2>{prop.author}</h2>
                            </div>
                            

                            <p>  {prop.previewContent}</p>
                            <a className="design">{prop.tag1}</a><a className="interface">{prop.tag2}</a><a className="research">{prop.tag2}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}