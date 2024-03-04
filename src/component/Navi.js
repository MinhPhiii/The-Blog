import React from "react";
import '../scss/Navi.scss'
import { Route, Routes, Link } from "react-router-dom";
export default function Navigation() {
    return (
        <>
            <div className="Navi">
                <div className="NaviContainer">
                    <span className="leftNavi">
                        MinhPhi
                    </span>
                    <div className="rightNavi">
                        <span className="spanNav">
                        <Link className="Link" to="/blog">Blog</Link>
                        </span >
                        <span  className="spanNav">
                        <Link className="Link" to="/project">Project</Link>
                        </span>
                        <span  className="spanNav">
                        <Link className="Link" to="/about">About</Link>
                        </span>
                        <span  className="spanNav">
                        <Link className="Link" to="/newsletter">Newsletter</Link>
                        </span>
                        <span>
                        <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round"></span>
                                </label>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )

}