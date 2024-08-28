import GetUrl from "../components/getUrl";

function Home() {
  return (
    <div className="flex">
      <div className="w-52 h-52">
        <GetUrl />
      </div>

      <div className=" flex justify-center align-text-bottom">
        <a href="/text">Want to send a Message to your mobile?</a>
      </div>
    </div>
  );
}

export default Home;
