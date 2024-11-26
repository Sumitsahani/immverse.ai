import React from "react";

import "./MainComponents.css";
import { CiSquarePlus } from "react-icons/ci";

const MainComponents = () => {
  return (
    <>
      <div className="rectangale-main-top">
        <h3>My Journey</h3>
        <img src="src/img/img1.png" alt="Journey" />
      </div>
      <div className="card-container">
        <div className="card">
          Your target <br/> A+
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>

        <div className="card">
          Current grade <br/> B+
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>
        <div className="card">
          Target days remaining <br/> 17 days
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>
        <div className="card">
          Your category <br/> AI
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>
        <div className="card">
          Current streak <br/> 7 days
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>
        <div className="card">
          Daily challenge{" "} <br/> Completed
          <div className="plus-icon">
            <CiSquarePlus />
          </div>
        </div>
      </div>
      <div className="rectangale-main-top">
        <h3>My Journey</h3>
        <img src="src/img/img3.png" alt="Journey" />
      </div>
      <div className="top-main-bootom">
        <h3>My Learning Path</h3>
        <div className="main-component">
          <div className="left">
            <div className="border-card">
              <h3>Artificial Intelligence</h3>

              <div className="AI">
                <div>
                  <img src="src/img/hirec.jpg" alt="Journey" />
                  <div className="text">
                    <p>AI course 1</p>
                  </div>
                </div>
                <button>start</button>
              </div>
              <div className="AI">
                <div>
                  <img src="src/img/hirec.jpg" alt="Journey" />
                  <div className="text">
                    <p>AI course 1</p>
                  </div>
                </div>
                <button>start</button>
              </div>
              <div className="AI">
                <div>
                  <img src="src/img/hirec.jpg" alt="Journey" />
                  <div className="text">
                    <p>AI course 1</p>
                  </div>
                </div>
                <button>start</button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right-top">
              <h3>Last Quiz</h3>
              <div className="right-top-b">
                <img src="src/img/passed.png" alt="Journey" />
                <div className="status">
                  <p>Correct Answer - 8</p>
                  <p>Incorrect Answer - 1</p>
                  <p>Skipped - 0</p>
                </div>
              </div>
            </div>
            <div className="right-bottom">
              <div className="right-top">
                <h3>Area's Improvement</h3>
                <div className="right-top-bootom">
                  <div className="right-bootom-card">
                    <img src="src/img/learn.webp" alt="Alexander Grambhell" />
                    <h5>Alexander Grambhell</h5>
                  </div>
                  <div className="right-bootom-card">
                    <img src="src/img/learn.webp" alt="Alexander Grambhell" />
                    <h5>Alexander Grambhell</h5>
                  </div>
                  <div className="right-bootom-card">
                    <img src="src/img/learn.webp" alt="Alexander Grambhell" />
                    <h5>Alexander Grambhell</h5>
                  </div>
                  <div className="right-bootom-card">
                    <img src="src/img/learn.webp" alt="Alexander Grambhell" />
                    <h5>Alexander Grambhell</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponents;
