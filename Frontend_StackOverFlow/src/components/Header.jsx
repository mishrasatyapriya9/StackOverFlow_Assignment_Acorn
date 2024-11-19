import Collectivelogo from "../assets/circle-star (2).png";

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header className="header">
      <div className="logo-Section">
        <img
          src="https://stackoverflow.design/assets/img/logos/so/logo-stackoverflow.svg"
          alt="logo"
          className="logo"
        />
      </div>
      <input
        type="text"
        placeholder="Search your answers here..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      <div className="header-icons">
        <i className="fi fi-tr-messages" style={{ color: "black" }}></i>
        <i className="fi fi-tr-trophy-star" style={{ color: "black" }}></i>
        <i className="fi fi-tr-comment-alt-dots" style={{ color: "black" }}></i>
        <i className="fi fi-tr-circle-user" style={{ color: "black" }}></i>
      </div>
    </header>
  );
};

export default Header;
