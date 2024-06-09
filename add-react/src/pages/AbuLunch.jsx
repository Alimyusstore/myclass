import arrowLeft from "../assest/images/arrow-89-48.png";
import lunchLogo from "../assest/images/lunch img.svg" 
import arrowCircle from "../assest/images/arrow right up-02.png"
import business from "../assest/images/kisspng-computer-icons-button-play-android-play-5abc7200e3c117.7752065415222993929329.png"
import email from "../assest/images/t3hrg8vkveg4mkqml4rlhv0ajr-79767aba08f7119e475e035ea2d7b71e.png"
import arrow from "../assest/images/arrow-up.png"
import arrowRight from "../assest/images/arrow-24-48.png"
import microsoft from "../assest/images/first lunch.png"
import second from "../assest/images/second lunch.png"
import third from "../assest/images/third.jpg"
import fourth from "../assest/images/fourth lunch.jpg"
import fifth from "../assest/images/fifth lunch.jpg"
import sixth from "../assest/images/sixth lunch.png"
import seventh from "../assest/images/seventh lunch.png"
import eight from "../assest/images/eight lunch.jpg"
import nineth from "../assest/images/ninth lunch.jpg"
import disable from "../assest/icons8-disabled-50.png"
import search from "../assest/images/[CITYPNG.COM]White Search Icon Button PNG IMG - 700x700.png";

import '../CSS/AbuLunch.css'
import Card from "./Card";



function AbuLunch(){
    return (
      <div>
        <header>
          <div className="logo">
            <a href="">
              <img
                src={lunchLogo}
                alt="lunch logo"
                title="General Electric Logo"
              />
            </a>
          </div>
          <div className="the-rest">
            <a href="#" title="News">
              <h3>News</h3>
            </a>
            <a href="#" title="investors overview">
              <h3>investors</h3>
            </a>
            <a href="#" title="About Us">
              <h3 id="about">About Us</h3>
            </a>
            <a
              href="#"
              target="_blank"
              title="Careers(Opens in a new browser tab)"
            >
              <h3 className="black">
                Careers
                <img
                  className="white"
                  src={arrowCircle}
                  alt="arrow cicle"
                  width="35px"
                />
              </h3>
            </a>
            <span title="Businesses">
              <h3>
                Business
                <img
                  className="manage"
                  src={business}
                  alt="Business"
                  width="25px"
                />
              </h3>
            </span>
            <a href="https://www.ge.com/contact/general">
              <img className="email a2" src={email} width="50px" alt="email" />
            </a>
            <a href="#">
              <img
                className="search a2"
                src={search}
                width="50px"
                alt="Search"
              />
            </a>

            <a href="#">
              <h3 className="small">
                GE <img src={arrow} alt="arrow" /> 149.16
              </h3>
            </a>
          </div>
        </header>

        <section className="background samebg">
          <h1>Once,Now,Forever.</h1>
          <button className="report">read our 23 annual report</button>
          <section className="arrowlr">
            <div className="arrow left">
              <img src={arrowLeft} alt="arrow left" />
            </div>
            <div className="arrow right">
              <img src={arrowRight} alt="arrow right" />
            </div>
          </section>
        </section>
        {/* <section className="background2 samebg"></section>
        <section className="background3 samebg"></section>
        <section className="background4 samebg"></section>
        <section className="background5 samebg"></section>
        <section className="background6 samebg"></section> */}
        <p className="today">GE Today</p>
        <section className="blend">
          <div className="div1 first">
            <div className="p1">
              <p className="ge">
                GE Aerospace & GE Vernova Ratings and Form-10
              </p>
            </div>
            <div className="write abc1 ad">
              <p className="down">performance</p>
            </div>
          </div>
          <Card
            cardImg={microsoft}
            cImgAlt="microsoft"
            cardText="  Precious Power: As Poland Deploys New Offshore Wind, GE Vernova
                Is Helping It Reach Homes and Businesses"
            downText="electrification"
          />
          <Card
            cardImg={second}
            cImgAlt="second"
            cardText="Talk of the Town: GE Vernova’s Agenda-Setting ‘Cutting Carbon’
                Podcast Series Launches Season 9"
            downText="podcast"
          />
          <Card
            cardImg={third}
            cImgAlt="third"
            cardText="GE Releases Its 4Q’23 & Full Year 2023 Results and 2024 Guidance"
            downText="performance"
          />
          <Card
            cardImg={fourth}
            cImgAlt="fourth"
            cardText=" All the Pretty Workhorses: Giant Wind Farm Comes to New Mexico,
                Featuring GE Vernova’s 3.6-154 Turbines"
            downText="energy"
          />
          <Card
            cardImg={fifth}
            cImgAlt="fith"
            cardText="GE Reports’ Top Stories of 2023"
            downText="years in review"
          />
          <Card
            cardImg={sixth}
            cImgAlt="sixth"
            cardText="Meet Some of the GE People Who Shined in 2023s"
            downText="years in review"
          />
          <Card
            cardImg={seventh}
            cImgAlt="seventh"
            cardText="To Make the Important Interesting: A Look Back at a Century of
                Advertising at GE"
            downText="ge history"
          />
          <Card
            cardImg={eight}
            cImgAlt="eigth"
            cardText=" Driving the Agenda: At an Eventful COP28, GE Leads the Charge on
                Multiple Climate Fronts"
            downText="cop28"
          />
          <Card
            cardImg={nineth}
            cImgAlt="nineth"
            cardText="Flip the Script: GEnx Program Caps Off Big Year With LATAM
                Airlines Deal"
            downText="genx engine"
          />
        </section>

        <div className="lastdiv">
          <div className="divarrow">
            <div className="space1 space">
              <img src={arrowLeft} alt="arrow left" />
            </div>
            <div className="space2 space">
              <img src={arrowRight} alt="arrow right" />
            </div>
          </div>
          <div>
            <a
              className="la"
              href="#"
              title="open in a new browser web"
              target="_blank"
            >
              visit the newsroom
            </a>
          </div>
        </div>
        <button className="fixed">
          <img src={disable} alt="disable" />
        </button>
      </div>
    );
}

export default AbuLunch





