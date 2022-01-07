const Sidebar = () => {
  return (
    <aside className="sidebar">
      <p className="sidebar__title">
        {" "}
        <i className="fas fa-chevron-left"></i> APRILZERO
      </p>
      <a className="sidebar__link" href="#explorer">
        EXPLORER
      </a>
      <div className="sidebar__content">
        <div className="sidebar__data">
          <small>SECONDS TRACKED</small>
          <p>9,199,980.56</p>
        </div>
        <div className="sidebar__data">
          <small>MILES TRAVELED</small>
          <p>58,531</p>
        </div>
        <div className="sidebar__data">
          <small>LOCATIONS</small>
          <p>289</p>
        </div>
        <div className="sidebar__data">
          <small>COUNTRIES</small>
          <p>9</p>
        </div>
        <div className="sidebar__data">
          <small>CITIES</small>
          <p>58</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
