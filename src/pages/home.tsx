import GetUrl from "../components/getUrl";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/text");
  };
  return (
    <div className=" flex flex-col h-full w-full">
      <GetUrl />

      <div className="mt-auto mb-2 ml-3 inline-block">
        {/* <a href="/text">Want to send a Message to your mobile?</a> */}
        <div onClick={handleNavigate} className=" underline">
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
