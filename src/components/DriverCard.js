import { useState, useEffect } from "react";
import Flag from "react-world-flags";

export const DriverCard = (props) => {
  let {
    firstName,
    lastName,
    number,
    numberImg,
    team,
    points,
    image,
    hex,
    incrementScore,
    country,
  } = props;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleUpScore = () => {
    incrementScore(index);
  };

  const index = props.index;
  return (
    <div
      className="driver-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={isHovered ? { borderColor: hex } : { borderColor: "black" }}
    >
      <header>
        <div className="rank">{index + 1}</div>
        <div className="points">
          <button className="up-score" onClick={handleUpScore}>
            <img src="up-arrow.svg"></img>
          </button>
          <div className="points-view">
            <div className="points-nr">{points}</div>
            <div className="pts">PTS</div>
          </div>
        </div>
      </header>

      <section className="name">
        <div className="colored-line" style={{ backgroundColor: hex }}></div>
        <div className="driver-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>

        <section className="flag">
          <Flag height="30.7" width="46" code={country} />
        </section>
      </section>
      <div className="team-name">{team}</div>

      <section className="driver-image-section">
        <div className="driver-number">
          <img src={`${numberImg}`}></img>
        </div>
        <img className="driver-img" src={image}></img>
      </section>
    </div>
  );
};
