import React from "react";
import img2 from '../assets/blog2.jpg'
import img0 from '../assets/blogpostcard.jpg'
import img1 from '../assets/blog1.jpg'
import '../scss/AllRecent.scss'
import LitRecentBlog from "./LitRecentBlog";

export default function BlogChild() {
    return (
        <>  
        
            <div className="AllRecent">
                <div className="allContent">
                    <LitRecentBlog
                        image={img2}
                        author="Alec Whitten • 1 Jan 2023"
                        title="UX review presentations"
                        previewContent="Like to know the secrets of transforming a 2-14
                        team into a 3x Super Bowl winning Dynasty?"
                        tag1="Design"
                        tag2="Interface"
                    />
                </div>
           </div>
        </>
    )
}