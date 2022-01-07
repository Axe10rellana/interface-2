const Header = () => {
  return (
    <header className="header">
      <small className="header__link">RIGHT NOW</small>
      <h1 className="header__title">Home</h1>
      <div className="header__content">
        <div className="header__data">
          <small>LATITUDE</small>
          <p>37.777913</p>
        </div>
        <div className="header__data">
          <small>LONGITUDE</small>
          <p>-122.432433</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
