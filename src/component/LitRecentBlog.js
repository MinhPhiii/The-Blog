import React from "react";
import img2 from '../assets/blog2.jpg'
import '../scss/LitRecentBlog.scss'

export default function LitRecentBlog(prop) {
    return (
        <>
            <div>
                
                <div className="LitRecentContainer">
                    <div className="litRcentChild">
                        <div className="imgBotRecent">
                            <img className="imgBotRecent" src={prop.image}></img>
                        </div>
                        <div className="hi">
                            <div className="blogcontent">
                                <h2>{prop.author}</h2>
                            </div>
                            <div className="blogcontent_title"></div>
                            <h2>{prop.title}</h2>

                            <p>  {prop.previewContent}</p>
                            <a className="design">{prop.tag1}</a> <a className="interface">{prop.tag2}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}