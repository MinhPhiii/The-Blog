import React from "react";
import Navigation from "../component/Navi";

import Footer from "../component/Footer";
import Searchs from "../component/Search";
import AllRecentt from "../component/AllRecent";
import NewlattersChild from "../component/NewsletterChild";

export default function Newsletter(){
    return(
        <>
        <Navigation/>
        <Searchs/>
        <NewlattersChild/>
        <Footer/>
        </>
    )
}