import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import arjitImage from "./Images/arjit.jpeg";
import anuragImage from "./Images/anurag kulkarni.jpeg";
import sidImage from "./Images/sid.jpeg";
import selena from "./Images/selena.jpeg";
import chitra from "./Images/chitra.jpeg";
import shreya from "./Images/shreya.jpeg";
import '../Styles/Home.css';
const Home = () => {
  return (
    <React.Fragment>
      <div className="container mt-5" style={{ background: '#f0f0f0', padding: '10px', borderRadius: '20px' }}>
        <center>
          <h4 className="display-3 fw-bold" style={{ color:"rgb(44, 82, 85)"}}>Listen to Your Favorite Songs </h4>
        </center>
        <div className="row">
          {/* First Row */}
          <div className="col-sm">
            <div className="card hover-card">
              <img className="card-img-top" src={arjitImage} alt="Arjit" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Arjit Singh Top Tracks</h5>
                <p className="card-text">BOLLYWOOD</p>
                <a href="https://open.spotify.com/artist/4YRxDV8wJFPHPTeXepOstw" className="btn btn-primary" >View Songs</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card hover-card">
              <img className="card-img-top" src={anuragImage} alt="Anurag" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Anurag Kulkarni Top Tracks</h5>
                <p className="card-text">TOLLYWOOD</p>
                <a href="https://open.spotify.com/artist/6LWyVEIBnx7MoRBhQxu9om" className="btn btn-primary">View Songs</a>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card hover-card">
              <img className="card-img-top" src={sidImage} alt="Card cap" height="200px" />
              <div className="card-body">
                <h5 className="card-title">Sid Sriram Top Tracks</h5>
                <p className="card-text">TOLLYWOOD & KOLLYWOOD</p>
                <a href="https://open.spotify.com/artist/7qjJw7ZM2ekDSahLXPjIlN" className="btn btn-primary">View Songs</a>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="row mt-4">
            <div className="col-sm">
              <div className="card hover-card">
                <img className="card-img-top" src={selena} alt="Card cap" height="200px" />
                <div className="card-body">
                  <h5 className="card-title">Selena Gomez Top Tracks</h5>
                  <p className="card-text">HOLLYWOOD</p>
                  <a href="https://open.spotify.com/artist/0C8ZW7ezQVs4URX5aX7Kqx" className="btn btn-primary">View Songs</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card hover-card">
                <img className="card-img-top" src={chitra} alt="Card cap" height="200px" />
                <div className="card-body">
                  <h5 className="card-title">Chitra Top Tracks</h5>
                  <p className="card-text">TOLLYWOOD</p>
                  <a href="https://open.spotify.com/album/0qX8LWGDoeKwtGqY9eHqwQ" className="btn btn-primary">View Songs</a>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div className="card hover-card">
                <img className="card-img-top" src={shreya} alt="Card cap" height="200px" />
                <div className="card-body">
                  <h5 className="card-title">Shreya Goshal Top Tracks</h5>
                  <p className="card-text">BOLLYWOOD & TOLLYWOOD</p>
                  <a href="https://open.spotify.com/artist/0oOet2f43PA68X5RxKobEy" className="btn btn-primary">View Songs</a>
                </div>
              </div>
            </div>
          </div>
          <br></br>
        </div>
        <br></br><br></br><br></br><br></br>
      </div>
    </React.Fragment>
  );
};

export default Home;
