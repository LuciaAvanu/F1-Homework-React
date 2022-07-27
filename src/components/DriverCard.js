export const DriverCard = (props) => {
  const {
    firstName,
    lastName,
    number,
    numberImg,
    team,
    points,
    image,
    country,
    hex,
  } = props;
  const index = props.index;

  return (
    <div className="driver-card">
      <header>
        <div className="rank">{index + 1}</div>
        <div className="points">
          <button className="up-score">
            <img src="up-arrow.svg"></img>
          </button>
          <div className="points-view">
            <div className="points-nr">{points}</div>
            <div className="pts">PTS</div>
          </div>
        </div>
      </header>

      <section className="name">
        <div className="colored-line"></div>
        <div className="driver-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>

        <section className="flag"></section>
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
