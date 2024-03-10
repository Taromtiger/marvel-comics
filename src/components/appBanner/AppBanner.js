import './appBanner.scss';

const avengers = '../resources/Avengers.png';
const avengersLogo = '../resources/Avengers_logo.png';

const AppBanner = () => {
  return (
    <div className="app__banner">
      <img src={avengers} alt="Avengers" />
      <div className="app__banner-text">
        New comic every week!
        <br />
        Stay tuned!
      </div>
      <img src={avengersLogo} alt="Avengers logo" />
    </div>
  );
};

export default AppBanner;
