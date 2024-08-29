import GetUrl from "../components/getUrl";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/text");
  };
  return (
    <div className="flex">
      <div className="w-52 h-52">
        <GetUrl />
      </div>

      <div className=" flex justify-center align-text-bottom">
        {/* <a href="/text">Want to send a Message to your mobile?</a> */}
        <div onClick={handleNavigate} className="underline">
          Wanna send a Message to your mobile?
        </div>
      </div>
    </div>
  );
}

export default Home;
