import React from "react";
import Navigation from "../component/Navi";
import Title from "../component/Title";

import img2 from '../assets/blog2.jpg'
import img0 from '../assets/blogpostcard.jpg'
import img1 from '../assets/blog1.jpg'
import '../scss/Projects.scss'
import ProjectChild from "../component/ProjectChild";
import Footer from "../component/Footer";
import MidProjects from "../component/MidProjects";
export default function Projects(){
    return(
        <>
            <Navigation/>
            <Title
                title="PROJECTS"
            />
            
            <div className="Projects">
                <div className="ProjectChild">
               
                    <ProjectChild
                        image={img2}
                        author="Alec Whitten • 1 Jan 2023"
                        title="UX review presentations"
                        previewContent="Like to know the secrets of transforming a 2-14
                    team into a 3x Super Bowl winning Dynasty?"
                        tag1="Design"
                        tag2="Interface"
                    />
            
                   


                    < ProjectChild 
                        
                        image={img1}
                        author="Phoenix Baker • 1 Jan 2023"
                        title="Building your API Stack"
                        previewContent="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                        tag1="Design"
                        tag2="Research"
                    />
                </div>




            </div>
            <div className="Projects">
                <div className="ProjectChild">
               
                    <MidProjects
                        image={img2}
                        author="UX review presentations Design Process to Teams, How to Solve USer Problems withs Data & inlcusive Collaboration Designons "
                        title="UX review presentations"
                        previewContent="Like to know the secrets of transforming a 2-14
                    team into a 3x Super Bowl winning Dynasty?
                    Like to know the secrets of transforming a 2-14
                    team into a 3x Super Bowl winning Dynasty?Like to know the secrets of transforming a 2-14
                    team into a 3x Super Bowl winning Dynasty?"
                        tag1="Design"
                        tag2="Interface"
                    />
                </div>




            </div>
            <div className="Projects">
                <div className="ProjectChild">
               
                    <ProjectChild
                        image={img2}
                        author="Alec Whitten • 1 Jan 2023"
                        title="UX review presentations"
                        previewContent="Like to know the secrets of transforming a 2-14
                    team into a 3x Super Bowl winning Dynasty?"
                        tag1="Design"
                        tag2="Interface"
                    />
            
                   


                    < ProjectChild 
                        
                        image={img1}
                        author="Phoenix Baker • 1 Jan 2023"
                        title="Building your API Stack"
                        previewContent="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                        tag1="Design"
                        tag2="Research"
                    />
                </div>




            </div>
            <Footer/>
        </>
    )
}