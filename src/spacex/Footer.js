import React from "react";
import "./style/navbar.css";
import link from "./image/icons8-linkedin.svg";
import insta from "./image/icons8-instagram.svg";
import face from "./image/icons8-facebook.svg";
import you from "./image/icons8-youtube.svg";
class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <div className="container">
            <div className="footer-inner">
              <div className="firstFooter">
                <div className="icons">
                  <a href="https://de.linkedin.com/company/audi-ag">
                    <img src={link} />
                  </a>
                  <a href="https://www.instagram.com/audiofficial/">
                    <img src={insta} />
                  </a>
                  <a href="https://www.facebook.com/audiofficial">
                    <img src={face} />
                  </a>
                  <a href="https://www.youtube.com/audi">
                    <img src={you} />
                  </a>
                </div>
                <div className="secondFooter">
                  <div className="one">
                    <h1>Topics</h1>
                    <a href="#">Company</a>
                    <a href="#">Innovation</a>
                    <a href="#">Models</a>
                    <a href="#">Brand</a>
                    <a href="#">Brand</a>
                  </div>
                  <div className="two">
                    <h1>AUDI AG</h1>
                    <a href="#">AUDI AG</a>
                    <a href="#">Documents & Policies</a>
                    <a href="#">Documents & Policies</a>
                    <a href="#">Documents & Policies</a>
                  </div>
                  <div className="three">
                    <h1>Services</h1>
                    <a href="#">myAudi</a>
                    <a href="#">Press</a>
                    <a href="#">Contact</a>
                    <a href="#">Job portal</a>
                  </div>
                </div>
              </div>
              <div className="line"></div>
              <div className="thirdFooter">
                <div className="ones">
                  <h1>© AUDI AG. All rights reserved</h1>
                </div>
                <div className="ones2">
                  <a href="#">Legal notice </a>
                  <a href="#">Legal </a>
                  <a href="#">Whistleblower System </a>
                  <a href="#">Privacy Policy </a>
                  <a href="#">Cookie Policy </a>
                  <a href="#">Cookie Consent Options</a>
                </div>
              </div>
              <div className="lastFooter">
                <p>
                  * The stated consumption and emissions values were determined
                  in accordance with the legally stipulated measurement
                  procedure. The WLTP test cycle completely replaced the NEDC
                  test cycle with <br /> effect from 1 January 2022. As a
                  result, no NEDC values are available for vehicles with a type
                  approval issued after this date.
                  <br />
                  <br />
                  The values do not refer to an individual vehicle and are not
                  part of the offer; instead, they are solely for the purpose of
                  comparing between different types of vehicles. Optional
                  equipment and <br />
                  accessories (attachments, tyre formats etc.) may alter
                  relevant vehicle parameters such as the weight, rolling
                  resistance and aerodynamics and, alongside weather and traffic
                  conditions and individual <br /> driving behaviour, may
                  influence the fuel consumption, electricity consumption, CO2
                  emissions and performance values of a vehicle. <br />
                  <br />
                  Due to the more realistic test conditions, fuel consumption
                  and CO2 emissions values will in many cases be higher in
                  accordance with the WLTP than in accordance with the NEDC.
                  There may have been <br />
                  corresponding changes to vehicle taxation since 1 September
                  2018 as a result of this. You can find further information on
                  the differences between the WLTP and the NEDC at
                  <br />
                  http://www.audi.co.uk/wltp.
                  <br />
                  <br />
                  <br />
                  Further information on the official fuel consumption and the
                  official, specific CO2 emissions of new passenger car models
                  can be found in the “Guide on the fuel economy, CO2 emissions
                  and power <br />
                  consumption of all new passenger car models”, available free
                  of charge from all sales outlets and from DAT Deutsche
                  Automobil Treuhand GmbH, Hellmuth-Hirth-Str. 1, 73760
                  Ostfildern, Germany or <br /> at www.dat.de.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
