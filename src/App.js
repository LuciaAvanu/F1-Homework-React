import { InfoContainer } from "./components/InfoContainer";
import { DriverCard } from "./components/DriverCard";
import { mockData } from "./mockData";

// sorting the mockData
mockData.sort(function (a, b) {
  return b.points - a.points;
});

function App() {
  return (
    <div className="backdrop">
      <h1 id="page-title">F1 Drivers 2022</h1>
      <InfoContainer />
      <div className="cards-container">
        {mockData.map((driver, index) => (
          <DriverCard key={driver.number} {...driver} index={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
