import React from "react";
import img2 from '../assets/blog2.jpg'
import img0 from '../assets/blogpostcard.jpg'
import img1 from '../assets/blog1.jpg'
import '../scss/AllRecent.scss'
import LitRecentBlog from "./LitRecentBlog";

export default function NewlattersChild() {
    return (
        <>  
        <h2 className="h2left">All blog post</h2>
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


                    <LitRecentBlog
                        image={img0}
                        author="Phoenix Baker • 1 Jan 2023"
                        title="Building your API Stack"
                        previewContent="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                        tag1="Design"
                        tag2="Research"
                    />


                    <LitRecentBlog
                        image={img1}
                        author="Phoenix Baker • 1 Jan 2023"
                        title="Building your API Stack"
                        previewContent="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                        tag1="Design"
                        tag2="Research"
                    />


                    

                </div>




            </div>

        </>
    )
}