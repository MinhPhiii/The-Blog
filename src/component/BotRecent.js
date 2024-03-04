import React from "react";
import '../scss/BotRecent.scss'
import img1 from '../assets/blog.jpg'
export default function BotRecent() {
    return (
        <>
            <div className="botRecentContainer">
                <div className="botRecentChil">
                    <div className="imgBotRecent">
                        <img className="imgBotRecent" src={img1}></img>
                    </div>
                    <div className="hi">
                        <div className="blogcontent">
                            <h2>Orlando Diggs • 1 Jan 2023</h2>
                        </div>
                        <div className="blogcontent_title"></div>
                        <h2>Grid system for better Design User Interface</h2>

                        <p>  A grid system is a design tool used to arrange content
                            on a webpage. It is a series of vertical and horizontal
                            lines that create a matrix of intersecting points, which
                            can be used to align and organize page elements. Grid
                            systems are used to create a consistent look and feel
                            across a website, and can help to make the layout more
                            visually appealing and easier to navigate.</p>
                        <a className="design">Design</a> <a className="interface">Interface</a>
                    </div>
                </div>




            </div>

        </>
    )
}