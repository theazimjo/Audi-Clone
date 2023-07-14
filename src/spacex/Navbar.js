import React from "react";
import myImage from "./image/global.svg";
import "./style/navbar.css";
class Navbar extends React.Component {
  open() {
    let element = document.getElementById("Loading");
    element.style.height = "890px";
    element.style.display = "block";
    element.style.transition = "0.4s";
  }
  exit() {
    let element = document.getElementById("Loading");
    element.style.height = "0";
    element.style.display = "none";
    element.style.transition = "0.4s";
  }

  render() {
    return (
      <>
        <div className="nav">
          <div className="container">
            <div className="wrap-name">
              <div className="logo">
                <a href="#"></a>
              </div>
              <div className="logonav">
                <ul>
                  <li>
                    <a href="#">Company</a>
                  </li>
                  <li>
                    <a href="#">Innovation</a>
                  </li>
                  <li>
                    <a href="#">Models</a>
                  </li>
                  <li>
                    <a href="#">Brand</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                </ul>
              </div>
              <div className="leftnav" onClick={() => this.open()}>
                <img src={myImage} alt="Image" />
                <div className="flextechnolog">
                  <h4>Audi in your Region:</h4>
                  <p>Global</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <header>
          <div className="cont">
            <h1>Audi Social Day</h1>
            <h3>Around 1,000 Audi employees got involved for a good cause</h3>
            <a href="#">
              <button>Learn more</button>
            </a>
          </div>
        </header>
        <div className="uploading" id="Loading">
          <div className="container">
            <div className="uploading-inner">
              <h1>Audi worldwide</h1>

              <div className="flextech2">
                <div className="inflechtechinner">
                  <p>
                    Models, products and services – switch to your country /
                    sales region website and discover the regional <br />
                    diversity of Audi.
                  </p>
                  <div className="flextech3">
                    <div className="one">
                      <p>Your country / sales region</p>
                      <input
                        type="text"
                        placeholder="Please select your country / sales region"
                      ></input>
                    </div>
                    <div className="two">
                      <button>Switch</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wrap-exit">
            <div className="round-exit" onClick={() => this.exit()}>
              <div className="line-1"></div>
              <div className="line-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
