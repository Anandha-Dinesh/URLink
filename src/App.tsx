import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  // const qrgenerator:function = async (:String) => {
    
  // }
  const [currentUrl, setCurrentUrl] = useState<string | null>(null);
  useEffect(() => {
    const getCurrentTabUrl = async () => {
        try {
            const queryOptions = { active: true, lastFocusedWindow: true };
            const [tab] = await chrome.tabs.query(queryOptions);

            if (tab && tab.url) {
                setCurrentUrl(tab.url);
            } else {
                console.error('No active tab found.');
                setCurrentUrl(null);
            }
        } catch (error) {
            console.error('Error fetching tab URL:', error);
        }
    };

    getCurrentTabUrl();
}, []);
  
 
  return (
    <h1 className="text-3xl font-bold underline">
      {currentUrl}
    </h1>
  )
}

export default App;
