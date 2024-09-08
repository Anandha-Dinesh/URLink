import "../styles/setQr.css";
import React, { useState, useEffect } from "react";
import QRCode from "qrcode";

export type Props = {
  url: string;
};

export function SetQr({ url }: Props) {
  const [currentQr, setCurrentQr] = useState<string>("");
  useEffect(() => {
    const getCurrentQr = async () => {
      try {
        if (url) {
          let qrImage = await QRCode.toDataURL(url);
          setCurrentQr(qrImage);
        } else {
          console.error("No active tab found.");
          setCurrentQr("");
        }
      } catch (error) {
        console.error("Error fetching tab URL:", error);
      }
    };

    getCurrentQr();
  }, [url]);
  return (
    <div className="df jcc alc Qr img">
        <img
          src={currentQr}
          alt="QR Code"
        />
    </div>
  );
}
