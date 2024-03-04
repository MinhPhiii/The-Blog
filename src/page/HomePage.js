import React from "react";
import recent1 from "../assets/blogpostcard.jpg"
import Navigation from "../component/Navi";
import Title from "../component/Title";
import RecentBlog from "../component/RecentBlog";
import BotRecent from "../component/BotRecent";
import LitRecentBlog from "../component/LitRecentBlog";
import AllRecentt from "../component/AllRecent";
import Pagination from "../component/Pagination";
import Footer from "../component/Footer";


export default function Homepage() {
    return (
        
        <>
            <Navigation/>
            
            <Title
                title="THE BLOG"
            />
            <RecentBlog/>
            <BotRecent/>
            {/* <LitRecentBlog/> */}
            <AllRecentt/>
            <Pagination/>
            <Footer/>
        </>
    )
}