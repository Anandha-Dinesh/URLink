import React, { useState } from "react";

import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { SetQr, Props } from "../components/setQr";

export default function CustomTextBox() {
  const [CustomText, setCustomText] = useState<Props["url"]>("");
  const [isQrVisible, setQrVisible] = useState<Boolean>(false);
  const handleGenerateQR = () => {
    console.log("triggered");

    setQrVisible(true);
  };
  return (
    <div className="flex">
      {isQrVisible && <SetQr url={CustomText} />}
      <textarea
        id="customText"
        rows={3}
        onChange={(e: any) => {
          setCustomText(e.target.value);
        }}
      />
      <div className="flex justify-end w-full">
        <input
          type="button"
          value="CreateURL"
          onClick={() => {
            handleGenerateQR();
          }}
          className="mr-0" // Optional: to ensure the button is aligned to the very right
        />
      </div>
    </div>
  );
}
