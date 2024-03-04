import React from "react";
import img2 from '../assets/blog2.jpg'
import '../scss/ProjectChild.scss'

export default function AboutText(prop) {
    return (
        <>
            <div>
                
                <div className="AboutContainer">
                    <div className="AboutContainerChild">
                        <div className="imgBlog1">
                            <img className="imgBlog1" src={prop.image}></img>
                        </div>
                        <div className="hi">
                            <div className="blogcontent">
                                <h2>{prop.author}</h2>
                            </div>
                            <div className="blogcontent_title"></div>
                            <h2>{prop.title}</h2>

                            <p>  {prop.previewContent}</p>
                            <a className="design">{prop.tag1}</a><a className="interface">{prop.tag2}</a><a className="research">{prop.tag2}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}