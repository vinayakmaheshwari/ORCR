import "./App.css";
import Choicefield from "./components/Choicefield";
import Footer from "./components/Footer";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import { Analytics } from "@vercel/analytics/react"
// import Typeofinstitute from "./components/Typeofinstitute";

function App() {
  return (
    <div className="App">
      <div id="header">
        <h1>Previous Year Opening Closing Rank</h1>
      </div>
      <Choicefield />
    <Analytics/>
      <Footer/>
    </div>
  );
}

export default App;
