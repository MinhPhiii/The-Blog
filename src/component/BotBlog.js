import React from "react";
import img2 from '../assets/blog2.jpg'
import '../scss/ProjectChild.scss'

export default function BotBlog(prop) {
    return (
        <>
            <div>
                
                <div className="BotContainer">
                    <div className="BotContainerContainerChild">
                        <div className="imgBlogBot">
                            <img className="imgBlogBot" src={prop.image}></img>
                        </div>
                        <div className="hi">
                            <div className="blogcontent">
                                <p>{prop.author}</p>
                            </div>
                            <div className="blogcontent_title"></div>
                            <p>{prop.author}</p>

                            <p>  {prop.previewContent}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}