import { InfoContainer } from "./components/InfoContainer";
import { DriverCard } from "./components/DriverCard";
import { mockData } from "./mockData";
import { useEffect, useState } from "react";

const sortData = (data) => {
  return data.sort((a, b) => {
    return b.points - a.points;
  });
};

function App() {
  const [driversList, setDriversList] = useState(mockData);

  const incrementScore = (index) => {
    let newDriver = { ...driversList[index] };
    newDriver.points += 1;
    setDriversList([
      ...driversList.slice(0, index),
      newDriver,
      ...driversList.slice(index + 1, driversList.length),
    ]);
  };

  const flagsLink =
    "http://purecatamphetamine.github.io/country-flag-icons/3x2";

  return (
    <div className="backdrop">
      <h1 id="page-title">F1 Drivers 2022</h1>
      <InfoContainer />
      <div className="cards-container">
        {sortData(driversList).map((driver, index) => (
          <DriverCard
            key={driver.number}
            {...driver}
            index={index}
            incrementScore={incrementScore}
            flagSrc={`${flagsLink}/${driver.country}.svg`}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
