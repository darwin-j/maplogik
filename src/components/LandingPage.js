import React from "react";
import Image from "react-bootstrap/Image";
import Navibar from "./Navibar";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <>
      <Navibar />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", marginTop: "300px" }}>
          <Link to="student" style={{ textDecoration: "none" }}>
            <div style={{ marginLeft: "100px" }}>
              <Image rounded src={"../studentButton.jpg"} width={"270px"} />
              <p
                style={{
                  marginTop: "-130px",
                  marginLeft: "20px",
                  fontSize: "45px",
                  fontWeight: "",
                  color: "black",
                }}
              >
                For Students
              </p>
            </div>
          </Link>
          <Link to="business" style={{ textDecoration: "none" }}>
            <div style={{ marginLeft: "100px" }}>
              <Image rounded src={"../businessButton.jpg"} width={"270px"} />
              <p
                style={{
                  marginTop: "-130px",
                  marginLeft: "20px",
                  fontSize: "45px",
                  fontWeight: "",
                  color: "white",
                }}
              >
                For Business
              </p>
            </div>
          </Link>
        </div>
        <div style={{ alignItems: "flex-end", marginLeft: "150px" }}>
          <img width={"630px"} src={"../landing.jpg"} alt="landing" />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
