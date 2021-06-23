import React from "react";
import "./Section.css";
import Image from "./sectionImage.svg";
import Image2 from "./sectionImage2.svg";
import Image3 from "./sectionImage3.svg";

const Section = () => {
  return (
    <div>
      <div className="container-fluid section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" alt="img" src={Image} />
            </div>
            <div className="col-lg-7">
              <h1 className="sectionHead">Do's and Don'ts</h1>
              <p className="sectionPara">
                The Algorithm works well with a single leaf at a time, so try
                uploading images with one leaf. The Algorithm won't predict when
                more leaves in one image, it is good at predicting one leaf at a
                time
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-7">
              <h1 className="sectionHead">Present</h1>
              <p className="sectionPara">
                WEGAN identifies whether the plant is healthy or diseased based
                on the leaf. As of now, it works for grapes, tomatoes and pepper
                bell. And the diseases it detects are bacterial spot, early
                blight, black rot.
              </p>
            </div>
            <div className="col-lg-5">
              <img className="img-fluid" alt="img" src={Image2} />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid section">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-lg-5">
              <img className="img-fluid" alt="img" src={Image3} />
            </div>
            <div className="col-lg-7">
              <h1 className="sectionHead">WEGAN Chatbot</h1>
              <p className="sectionPara">
                Our conversation friendly chatbot answers your questions
                regarding your plants. You can get suggestions on disease
                control, plant specific fertilizers, pests control and growth
                conditions. It also provides you with the link to know more
                about your doubts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
