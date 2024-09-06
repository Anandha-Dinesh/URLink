import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetQr, Props } from "../components/setQr";
import { TitleBar } from "../components/title_bar";
import "../styles/home.css";
import "../styles/custom_text.css";

export default function CustomTextBox() {
  const [CustomText, setCustomText] = useState<Props["url"]>("");
  const [isQrVisible, setQrVisible] = useState<Boolean>(false);
  const handleGenerateQR = () => {
    console.log("triggered");

    setQrVisible(true);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <div className="home-container">
      <TitleBar />
      <div className={isQrVisible ? "qrvisible" : "qrnotvisible"}>
        {isQrVisible ? (
          <SetQr url={CustomText} />
        ) : (
          <div className="qrnotvisible-text">
            Type something below and Scan QR
          </div>
        )}
      </div>
      <textarea
        id="customText"
        className="textarea"
        rows={isQrVisible ? 2 : 3}
        placeholder="Type something U want to send..."
        onChange={(e: any) => {
          setCustomText(e.target.value);
          handleGenerateQR();
          if (CustomText.length === 0) setQrVisible(false);
        }}
      />
      <div className="link-container">
        {/* <a href="/text">Want to send a Message to your mobile?</a> */}
        <div onClick={handleNavigate} className="home-link">
          URL {"-->"} Mobile
        </div>
      </div>
    </div>
  );
}
