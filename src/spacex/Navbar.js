import React from "react";
import firstimage from "./image/firstimagepage.webp";
import secondpage from "./image/secondpage.webp";
import lastpage from "./image/lastpage.gif";
import elecCar from "./image/elecCar.webp";
import carrergirl from "./image/carrer.webp";
import elecCar2 from "./image/elecCar2.webp";
import mans from "./image/mans.webp";
import man from "./image/man.webp";
import ataudi from "./image/ataudi.webp";
import "./style/navbar.css";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="cont">
            <h1>Audi Social Day</h1>
            <h3>Around 1,000 Audi employees got involved for a good cause</h3>
            <a href="#">
              <button>Learn more</button>
            </a>
          </div>
        </header>
        <div className="main">
          <div className="container">
            <div className="main-in">
              <div className="uptext">
                <h1>Current topics from the world of Audi</h1>
              </div>
              <div className="imagepage">
                <div className="firstpage">
                  <a href="#">
                    <div className="imghover">
                      <img src={firstimage} />
                    </div>
                    <h4>Experinced Professionals</h4>
                    <h1>Production specialist in assembly</h1>
                    <p>
                      Progress is what you bring with you. At Audi we want to
                      offer you the freedom to use and develop this progress.
                      With flexible working hours. With an in-house further
                      education academy. With projects which combine 100 years
                      of experience in premium mobility with an electrified
                      future. For a world that we keep on the move together –
                      with you.
                    </p>
                  </a>
                </div>
                <div className="secondpage">
                  <a href="#">
                    <div className="imghover">
                      <img src={secondpage} />
                    </div>
                    <h4>Experinced Professionals</h4>
                    <h1>Production specialist in assembly</h1>
                    <p>
                      Progress is what you bring with you. At Audi we want to
                      offer you the freedom to use and develop this progress.
                      With flexible working hours. With an in-house further
                      education academy. With projects which combine 100 years
                      of experience in premium mobility with an electrified
                      future. For a world that we keep on the move together –
                      with you.
                    </p>
                  </a>
                </div>
                <div className="lastPage">
                  <a href="#">
                    <div className="imghover">
                      <img src={lastpage} />
                    </div>
                    <h4>Experinced Professionals</h4>
                    <h1>Production specialist in assembly</h1>
                    <p>
                      Progress is what you bring with you. At Audi we want to
                      offer you the freedom to use and develop this progress.
                      With flexible working hours. With an in-house further
                      education academy. With projects which combine 100 years
                      of experience in premium mobility with an electrified
                      future. For a world that we keep on the move together –
                      with you.
                    </p>
                  </a>
                </div>
              </div>
              <div className="lastElecCar">
                <div className="fulelecttext">
                  <h3>Full electric speed ahead</h3>
                  <h4>
                    Audi recently underpinned its clear course toward
                    electromobility <br /> with strong figures and important
                    milestones. How the Four Rings <br /> are progressing on
                    their path to successful electrification.
                  </h4>
                  <a href="#">
                    <button>Read more</button>
                  </a>
                  <span>
                    ¹The vehicle shown is a concept vehicle that is not
                    available as a production vehicle.
                  </span>
                </div>
                <div className="fulelecimage">
                  <img src={elecCar} />
                </div>
              </div>
              <div className="lastElecCar">
                <div className="fulelecimage">
                  <img src={carrergirl} />
                </div>
                <div className="fulelecttext">
                  <h3>Audi Career: We are progress. With you.</h3>
                  <h4>
                    Progress is what you bring with you. At Audi we want to
                    offer you the <br /> freedom to use and develop this
                    progress. With flexible working <br /> hours. With an
                    in-house further education academy. With projects <br />
                    which combine 100 years of experience in premium mobility
                    with an <br /> electrified future. For a world that we keep
                    on the move together <br /> – with you.
                  </h4>
                  <a href="#">
                    <button>Read more</button>
                  </a>
                </div>
              </div>

              <div className="Pressreleas">
                <h1>Press releases</h1>
              </div>
              <div className="imagepage">
                <div className="firstpage">
                  <a href="#">
                    <div className="imghover">
                      <img src={elecCar2} />
                    </div>
                    <h4>Audi MediaCenter -- 07/12/2023</h4>
                    <h3>
                      Traine project at Audi <br /> Nescarsulm: NSU Prinz with
                      e- <br />
                      tron power
                    </h3>
                    <p>To the press release</p>
                  </a>
                </div>
                <div className="secondpage">
                  <a href="#">
                    <div className="imghover">
                      <img src={mans} />
                    </div>
                    <h4>Audi MediaCenter -- 07/06/2023</h4>
                    <h3>
                      Audi creators 500 new electrick <br /> mobility jobs at
                      its Ingolstadt <br /> Location
                    </h3>
                    <p>To the press release</p>
                  </a>
                </div>
                <div className="lastPage">
                  <a href="#">
                    <div className="imghover">
                      <img src={man} />
                    </div>
                    <h4>Audi MediaCenter -- 07/06/2023</h4>
                    <h3>
                      Gernot Dollner named as new <br />
                      Audi CEO
                    </h3>
                    <p>To the press release</p>
                  </a>
                </div>
              </div>
              <button className="btn">To the Audi MediaCenter</button>
              <div className="lastElecCar">
                <div className="fulelecimage">
                  <img src={ataudi} />
                </div>
                <div className="fulelecttext">
                  <h3>
                    At Audi you’ll find the right vehicle for <br /> every
                    requirement
                  </h3>
                  <h4>
                    Sporty, luxurious, or compact – at Audi you will find the
                    right vehicle <br /> for every requirement. Discover and
                    configure our series models now.
                  </h4>
                  <a href="#">
                    <button>Discover all models</button>
                  </a>
                  <p className="pert">
                    Audi Q4 Sportback e-tron:Power consumption (combined*) in
                    kWh/100 km: 19.7–16.1 <br />
                    CO₂ emissions (combined*) in g/km: 0 <br /> Information on
                    fuel/power consumption and CO₂ emissions with ranges
                    depending on the selected <br /> equipment of the vehicle.
                    <br /> Only consumption and emission values according to
                    WLTP and not according to NEDC are available for <br /> the
                    vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
