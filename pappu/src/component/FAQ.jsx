import React from 'react'
import './FAQ.css'
import Footer from './Footer';
const FAQ = () => {

    let thirdRight=["Getting started with Netflix","Billing and Payments","Netflix Gift Cards","Can't sign in to Netflix","How to create and edit profiles"];
    let thirdLeft={"img":"https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png",des:["Netflix is a subscription-based streaming service that allows our members to watch TV shows and movies without commercials on an internet-connected device.","You can also download TV shows and movies to your iOS, Android, or Windows 10 device and watch without an internet connection.","If you're already a member and would like to learn more about using Netflix, visit Getting started with Netflix."]}
    
    let componentArr=[{"title":"TV Shows & Movies","img":"https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png",para:["Netflix content varies by region and may change over time. You can watch from a wide variety of award-winning Netflix Originals, TV shows, movies, documentaries, and more. ","The more you watch, the better Netflix gets at recommending TV shows and movies we think you’ll enjoy."]},{"title":"Supported Devices","img":"https://help.nflxext.com/7ac9b493-ae69-431a-923d-3cb8a79d7e63_what_is_netflix_3_en.png",para:["You can watch Netflix through any internet-connected device that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the  system requirements for web browser compatibility, and check our internet speed recommendations to achieve the best performance. ","Need help getting set up? Search our Help Center for the manufacturer of the device you're using.","NOTE: The Netflix app may come pre-loaded on certain devices, or you may need to download the Netflix app onto your device. Netflix app functionality may differ between devices."]},{"title":"Plans and Pricing","img":"https://help.nflxext.com/b3e9e3a3-20ff-4974-87d4-162e0a547768_what_is_netflix_4_en.png",para:["Each Netflix plan determines the number of devices you can watch Netflix on at the same time and if you prefer to view in Standard Definition (SD), High Definition (HD), or Ultra High Definition (UHD).","Compare our plans and pricing to decide which one is right for you. You can easily change your plan or cancel online at any time."]},{"title":"Get Started!","img":"https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png", para:["Follow these easy steps to start watching Netflix today:"," 1. Visit netflix.com/signup."," 2. Choose the plan that’s right for you."," 3. Create an account by entering your email address and creating a password.","4.Enter a payment method. As a Netflix member, you are charged once a month on the date you signed up. ","That's it. Enjoy Netflix!"]}]
    
    return (
        <div>
            <div className="header">
                <div className="l-header">
                    <img src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png" style={{ width: "90px", height: "60px" }} alt="netflix logo" />
                    <div className="vl"></div>
                    <div className="l-help">Help Center</div>
                </div>
                <div className="r-header">pappukr</div>
            </div>
            
            <div className="bodyContent">

             <div className="backtohomme">
                Back to Help Home
             </div>

             <div className="netflixinfo">What is Netflix?</div>

                <div className="third">
                    <div >
                       <img src={thirdLeft.img} style={{width:"100%",height:"80%"}} alt="text"/>
                       {thirdLeft.des.map((ele)=>(<p>{ele}</p>))}
                    </div>

                    <div>
                        <h1>Suggested Articles</h1>
                       { thirdRight.map((ele) =>(<ul><li><a style={{"color":"black"}}href='#'>{ele}</a></li></ul>))}
                    </div>

                </div>
                <hr/>
                

                {componentArr.map((ele)=>(<>
                <div style={{"border":"5px solid green"}}><h1>{ele.title}</h1><img src={ele.img} style={{width:"70%",height:"80%"}}/> {ele.para.map((t)=>(<p>{t}</p>))} <hr/></div></>))}
               
            </div>

            <Footer/>
          
        </div>
    )
}

export default FAQ