import Collectivelogo from "../assets/circle-star (2).png";

const LeftSidebar = () => {
  return (
    <aside className="sidebar left">
      <ul className="sidebar-menu">
        <li className="menu-item">
          <div>
            <span className="menu-icon">
              <i className="fas fa-home"></i>
            </span>
            Home
          </div>
        </li>
        <li className="menu-item">
          <div>
            <span className="menu-icon">
              <i className="fas fa-globe"></i>
            </span>
            Public
          </div>
          <ul className="submenu">
            <li>Questions</li>
            <li>Tags</li>
            <li>Users</li>
          </ul>
        </li>
        <li className="menu-item">
          <div>
            <span className="menu-icon">
              <img
                src={Collectivelogo}
                alt="Collectives Icon"
                className="icon-lo"
              />
            </span>
            Collectives
          </div>
          <ul className="submenu">
            <li>Explore Jobs</li>
          </ul>
        </li>
        <li className="menu-item">
          <div>
            <span className="menu-icon">
              <i className="fas fa-briefcase"></i>
            </span>
            Find Jobs
          </div>
          <ul className="submenu">
            <li>Jobs</li>
            <li>Companies</li>
          </ul>
        </li>
        <li className="menu-item">
          <div>
            <span className="menu-icon">
              <i className="fas fa-users"></i>
            </span>
            Teams
          </div>
          <ul className="submenu">
            <li>Create a team</li>
          </ul>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
