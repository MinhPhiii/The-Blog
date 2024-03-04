import React from "react";
import '../scss/RecentAllBlog.scss'
import img0 from '../assets/blogpostcard.jpg'
import img1 from '../assets/blog1.jpg'
import img2 from '../assets/blog2.jpg'


export default function RecentBlog() {
    return (
        <>
        
            <h2 className="h2left">Recent blog posts</h2>
            <div className="Blogcontainer">
                <div className="BlogChild">
                <div className="blogLeft">
                    <div className="img-center">
                        <img className="img-center" src={img0}></img>
                    </div>
                    <div className="one">
                        <div className="blogcontent">
                            <h2 className="h2title">Olivia Rhye • 1 Jan 2023</h2>
                        </div>
                        <div className="blogcontent_title"></div>
                        <h2>UX review presentations</h2>

                        <p>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                        <a className="design">Design</a> <a className="research">Research</a> <a className="Presentation">Presentation</a>
                    </div>
                </div>
                <div className="blogRight">
                    <div className="top">
                        <div className="img-center1">
                            <img className="img-center1" src={img1}></img>
                        </div>
                        <div className="one">
                            <div className="blogcontent">
                                <h2 className="h2title">Phoenix Baker • 1 Jan 2023</h2>
                            </div>
                            <div className="blogcontent_title"></div>
                            <h2>Migrating to Linear 101</h2>
                            <p>Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...</p>   
                            <a className="design1">Design</a> <a className="research1">Research</a>                        
                        </div>
                    </div>
                    <div className="bot">
                        <div className="img-center">
                            <img className="img-center1" src={img2}></img>
                        </div>
                        <div className="one">
                            <div className="blogcontent">
                                <h2 className="h2title">Lana Steiner • 1 Jan 2023</h2>
                            </div>
                            <div className="blogcontent_title"></div>
                            <h2>Building your API Stack</h2>
                            <p>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                            <a className="design2">Design</a> <a className="research">Research</a>
                        </div>
                    </div>

                </div>
                </div>
                
               
            </div>


        </>
    )
}