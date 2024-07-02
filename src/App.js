import "./App.css";
import Choicefield from "./components/Choicefield";
import Footer from "./components/Footer";
import Table from "./components/Table";
// import Typeofinstitute from "./components/Typeofinstitute";

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Previous Year Opening Closing Rank</h1>
      </div>
      <Choicefield />
      <Footer/>
    </div>
  );
}

export default App;
