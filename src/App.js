import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Topiclist from "./Components/TopicList";
import Progress from "./Components/Progress";

function App() {
  return (
    <>
      <Navbar />
      {/* <Progress /> */}
      <main className="container mt-2  p-5">
        <Progress />
        <div className="myrow">
          <Topiclist />
        </div>
      </main>
    </>
  );
}

export default App;
