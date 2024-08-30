import React, { useState, useEffect } from "react";
import { SetQr } from "./setQr";

function GetUrl() {
  const [currentUrl, setCurrentUrl] = useState<string>("");
  useEffect(() => {
    const getCurrentTabUrl = async () => {
      try {
        const queryOptions = { active: true, lastFocusedWindow: true };
        const [tab] = await chrome.tabs.query(queryOptions);

        if (tab && tab.url) {
          setCurrentUrl(tab.url);
        } else {
          console.error("No active tab found.");
          setCurrentUrl("");
        }
      } catch (error) {
        console.error("Error fetching tab URL:", error);
      }
    };

    getCurrentTabUrl();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold underline">{currentUrl}</h1>
      <SetQr
        url={
          //currentUrl
          "publiclogo512.png"
        }
      />
    </>
  );
}

export default GetUrl;
