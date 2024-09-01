import GetUrl from "../components/getUrl";
import { useNavigate } from "react-router-dom";
import { TitleBar } from "../components/title_bar";
import "../styles/home.css";
function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/text");
  };
  return (
    <div className="home-container">
      <TitleBar />
      <GetUrl />

      <div className="link-container">
        {/* <a href="/text">Want to send a Message to your mobile?</a> */}
        <div onClick={handleNavigate} className="home-link">
          Wanna send a Message to your mobile?
        </div>
      </div>
    </div>
  );
}

export default Home;
// "start": "react-scripts start",
// "build": "webpack --config webpack.config.js",
// "watch": "webpack -w --config webpack.config.js",
// "test": "react-scripts test",
// "eject": "react-scripts eject"
