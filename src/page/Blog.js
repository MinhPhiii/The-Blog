import React from "react";
import Navigation from "../component/Navi";
import BlogChild from "../component/BlogChild";
import '../scss/Blog.scss'
import AboutText from "../component/aaaa";
import img0 from '../assets/blogpostcard.jpg'
import img1 from '../assets/pic1.jpg'
import img2 from '../assets/pic2.jpg'
import img3 from '../assets/pic3.jpg'
import img4 from '../assets/pic4.jpg'
import ProjectChild from "../component/ProjectChild";
import BotBlog from "../component/BotBlog";
import Searchs from "../component/Search";
import Footer from "../component/Footer";
export default function Blog() {
    return (
        <>

            <Navigation />
            <div className="Grid">
                <div className="GridContainer" >
                    <div className="item1">
                        <h2 className="h2blogpost">Recent Blog posts</h2>
                        <div>
                            <AboutText
                                image={img0}
                                author="Alec Whitten • 1 Jan 2023"
                                title="UX review presentations"
                                previewContent="Like to know the secrets of transforming a 2-14
                     team into a 3x Super Bowl winning Dynasty?"
                                tag1="Design"
                                tag2="Interface"
                            />
                        </div>
                        <div><AboutText
                            image={img1}
                            author="Alec Whitten • 1 Jan 2023"
                            title="UX review presentations"
                            previewContent="Like to know the secrets of transforming a 2-14
                  team into a 3x Super Bowl winning Dynasty?"
                            tag1="Design"
                            tag2="Interface"
                        /></div>
                        <div><AboutText
                            image={img2}
                            author="Alec Whitten • 1 Jan 2023"
                            title="UX review presentations"
                            previewContent="Like to know the secrets of transforming a 2-14
                  team into a 3x Super Bowl winning Dynasty?"
                            tag1="Design"
                            tag2="Interface"
                        /></div>
                        <div><AboutText
                            image={img3}
                            author="Alec Whitten • 1 Jan 2023"
                            title="UX review presentations"
                            previewContent="Like to know the secrets of transforming a 2-14
                  team into a 3x Super Bowl winning Dynasty?"
                            tag1="Design"
                            tag2="Interface"
                        /></div>
                        <div><AboutText
                            image={img4}
                            author="Alec Whitten • 1 Jan 2023"
                            title="UX review presentations"
                            previewContent="Like to know the secrets of transforming a 2-14
                  team into a 3x Super Bowl winning Dynasty?"
                            tag1="Design"
                            tag2="Interface"
                        /></div>

                    </div>
                    <div className="item2">
                        <span className="spanBlog">Sunday, 1 Jan 2023</span>
                        <h2>Gird system for better Design User Interface</h2>
                        <BotBlog
                            image={img4}
                            author="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                            previewContent="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                        />
                        <BotBlog
                            image={img1}
                            author="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                            previewContent="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                        />
                        <BotBlog
                            image={img3}
                            author="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                            previewContent="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                        />
                        <BotBlog
                            image={img2}
                            author="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                            previewContent="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                        />
                        <BotBlog
                            image={img4}
                            author="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                            previewContent="As a passionate and experienced UI designer, I am
                    dedicated to creating intuitive and engaging user
                    experiences that meet the needs of my clients and
                    their users. I have a strong understanding of design
                    principles and a proficiency in design tools, and I
                    am comfortable working with cross-functional teams
                    to bring projects to fruition. I am confident in my
                    ability to create designs that are both visually
                    appealing and functional, and I am always looking
                    for new challenges and opportunities to grow as a
                    designer."
                        />
                        <Searchs />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}