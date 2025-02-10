// import './App.css'
import ChartComp from "./components/ChartComp";
import IBAffilations from "./components/IbAffiliation";
import IBFeatures from "./components/IbFeatures";
import IbPath from "./components/IbPath";
import MutualGrowth from "./components/MutualGrowth";
function App() {
  return (
    <div className="space-y-12">
      <IBAffilations />
      <MutualGrowth />
      <ChartComp />
      <IbPath />
      <IBFeatures />
    </div>
  );
}

export default App;
