import React,{Component} from 'react'
import "./Body.style.scss"
import Home from "../../Pages/Home/Home.component"
import Service from "../../Pages/Service/Service.component"
import Work from "../../Pages/Work/Work.component"
import Blogs from "../../Pages/Blogs/Blogs.component"
import ContactUs from "../../Pages/ContactUs/ContactUs.component"
import {Switch, Route} from "react-router-dom"
  
const Body = () => {
    return (
        <div>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/service" component={Service} exact />
                <Route path="/work" component={Work} exact />
                <Route path="/blogs" component={Blogs} exact />
                <Route path="/contactus" component={ContactUs} exact />
            </Switch>
        </div>
    )
}

export default Body
