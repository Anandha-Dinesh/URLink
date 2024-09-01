import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SetQr, Props } from "../components/setQr";
import { TitleBar } from "../components/title_bar";

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
    <div className="flex flex-col ml-3">
      <TitleBar />
      <div className={isQrVisible ? "mt-0" : "mt-10"}>
        {isQrVisible ? (
          <SetQr url={CustomText} />
        ) : (
          <div className="mt-auto text-pretty">
            Type something below and Scan QR
          </div>
        )}
      </div>
      <textarea
        id="customText"
        className="mr-3 mt-2 mb-2 shadow-md shadow-slate-200"
        rows={isQrVisible ? 2 : 3}
        placeholder="Type something U want to send..."
        onChange={(e: any) => {
          setCustomText(e.target.value);
          handleGenerateQR();
          if (CustomText.length === 0) setQrVisible(false);
        }}
      />
      <div className="mt-auto mb-2 ml-3 inline-block">
        {/* <a href="/text">Want to send a Message to your mobile?</a> */}
        <div onClick={handleNavigate} className=" underline">
          Wanna send URL to your Mobile?
        </div>
      </div>
    </div>
  );
}
