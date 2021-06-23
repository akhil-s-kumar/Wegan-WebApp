import React, { useState } from "react";
import "./Disease.css";
import * as tmImage from "@teachablemachine/image";

const Disease = () => {
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");

  const handleChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile === undefined) {
      console.log("File not choosen");
    } else {
      setFile(selectedFile);
      const filePreview = URL.createObjectURL(selectedFile);
      setPreview(filePreview);
    }
  };

  async function init(event) {
    event.preventDefault();
    const URL = "https://teachablemachine.withgoogle.com/models/Kc9Bxm2We/";
    let model, maxPredictions;
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    var getImage = document.getElementById("img");
    if (getImage == null) {
      alert("No Image selected");
    } else {
      const prediction = await model.predict(getImage);
      var predictionValues = [];
      var predictionclassName = [];
      for (let i = 0; i < maxPredictions; i++) {
        const className = prediction[i].className;
        const classPrediction = prediction[i].probability.toFixed(2);
        predictionValues.push(parseFloat(classPrediction));
        predictionclassName.push(className);
      }
      console.log(predictionclassName);
      console.log(predictionValues);
      const predictionValues_max = Math.max(...predictionValues);
      const predictionValues_maxIndex =
        predictionValues.indexOf(predictionValues_max);
      const finalPrediction =
        predictionclassName[predictionValues_maxIndex] +
        " " +
        predictionValues_max +
        "%";
      console.log(finalPrediction);
    }
  }

  return (
    <div className="container-fluid uploadImage">
      <div className="container">
        <div className="wrapper">
          <div className="image">
            {file && <img src={preview} id="img" alt={file.name} />}
          </div>
          <div className="content">
            <div className="icon">
              <i className="fas fa-cloud-upload-alt"></i>
            </div>
            <div className="text">No file chosen, yet!</div>
          </div>
          <div id="cancel-btn">
            <i className="fas fa-times" type="reset"></i>
          </div>
          <div className="file-name">File name here</div>
        </div>
        <form>
          <input
            accept="image/*"
            id="default-btn"
            onChange={(e) => handleChange(e)}
            type="file"
            hidden
          />
          <label id="custom-btn" htmlFor="default-btn">
            Choose a file
          </label>
          <button onClick={(e) => init(e)} id="custom-btn">
            CLASSIFY
          </button>
        </form>
      </div>
    </div>
  );
};

export default Disease;
