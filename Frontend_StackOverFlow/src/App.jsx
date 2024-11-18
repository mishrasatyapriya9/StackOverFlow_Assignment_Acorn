import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Collectivelogo from "../src/assets/circle-star (1).png";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [filter, setFilter] = useState("activity");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, [filter]);

  const fetchQuestions = () => {
    axios
      .get("https://api.stackexchange.com/2.3/questions", {
        params: {
          order: "desc",
          sort: filter,
          site: "stackoverflow",
        },
      })
      .then((response) => {
        setQuestions(response.data.items);
        console.log(response.data.items);
      })
      .catch((error) => {
        console.error("Error fetching data from StackExchange API", error);
      });
  };

  const handleSearch = () => {
    axios
      .get("https://api.stackexchange.com/2.3/search", {
        params: {
          intitle: searchQuery,
          site: "stackoverflow",
        },
      })
      .then((response) => {
        setQuestions(response.data.items);
      })
      .catch((error) => {
        console.error("Error searching data", error);
      });
  };

  return (
    <div className="container">
      {/* Header */}
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
          <i className="fi fi-tr-messages" style={{ color: "black" }}></i>{" "}
          <i className="fi fi-tr-trophy-star" style={{ color: "black" }}></i>
          <i
            className="fi fi-tr-comment-alt-dots"
            style={{ color: "black" }}
          ></i>
          <i className="fi fi-tr-circle-user" style={{ color: "black" }}></i>
        </div>
      </header>

      <aside className="sidebar left">
        <ul className="sidebar-menu">
          {/* Home */}
          <li className="menu-item">
            <div>
              <span className="menu-icon">
                <i className="fas fa-home"></i>{" "}
                {/* Replace with the home icon you prefer */}
              </span>
              Home
            </div>
          </li>

          {/* Public Section */}
          <li className="menu-item">
            <div>
              <span className="menu-icon">
                <i className="fas fa-globe"></i>{" "}
                {/* Replace with a globe or public icon */}
              </span>
              Public
            </div>
            <div>
              <ul className="submenu">
                <li>Questions</li>
                <li>Tags</li>
                <li>Users</li>
              </ul>
            </div>
          </li>

          {/* Collectives Section */}
          <li className="menu-item">
            <div>
              <span className="menu-icon">
                {/* <i className="fi fi-sr-circle-star"></i> */}
                <img
                  src={Collectivelogo}
                  alt="Collectives Icon"
                  className="icon-lo"
                />{" "}
              </span>
              Collectives
            </div>
            <div>
              <ul className="submenu">
                <li>Explore Jobs</li>
              </ul>
            </div>
          </li>

          {/* Find Jobs Section */}
          <li className="menu-item">
            <div>
              <span className="menu-icon">
                <i className="fas fa-briefcase"></i>{" "}
                {/* Replace with a briefcase icon */}
              </span>
              Find Jobs
            </div>
            <div>
              <ul className="submenu">
                <li>Jobs</li>
                <li>Companies</li>
              </ul>
            </div>
          </li>

          {/* Teams Section */}
          <li className="menu-item">
            <div>
              <span className="menu-icon">
                <i className="fas fa-users"></i>{" "}
                {/* Replace with a team/group icon */}
              </span>
              Teams
            </div>
            <div>
              <ul className="submenu">
                <li>Create a team</li>
              </ul>
            </div>
          </li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="top-questions-header">
          <h2 className="topquestion">Top Questions</h2>
          <div className="filters">
            {["activity", "votes", "creation"].map((option) => (
              <button
                key={option}
                className={filter === option ? "active-filter" : ""}
                onClick={() => setFilter(option)}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
          <button className="ask-button">Ask Question</button>
        </header>

        {questions.map((question) => (
          <div key={question.question_id} className="question-card">
            <h2 className="question-title">
              <a href={question.link} target="_blank" rel="noopener noreferrer">
                {question.title}
              </a>
            </h2>
            <div className="tags">
              {question.tags.map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="question-details">
              <div className="stats">
                <span className="stat">
                  <i className="fas fa-arrow-up"></i> {question?.score} votes
                </span>
                <span className="stat">
                  <i className="fas fa-comments"></i> {question?.answer_count}{" "}
                  answers
                </span>
                <span className="stat">
                  <i className="fas fa-eye"></i> {question?.view_count} views
                </span>
              </div>
              <div className="question-meta">
                asked {new Date(question.creation_date * 1000).toLocaleString()}{" "}
                by {question.owner?.display_name}
              </div>
            </div>
          </div>
        ))}
      </main>

      <aside className="sidebar right">
        <div className="widget">
          <h3>The Overflow Blog</h3>
          <ul>
            <li>The unexpected benefits of mentoring others</li>
            <li>Podcast 354: Building for AR with Niantic Labs</li>
          </ul>
        </div>
        <div className="widget">
          <h3>Hot Meta Posts</h3>
          <ul>
            <li>Tags (driver) and (device-driver) appear to be redundant</li>
            <li>How to handle duplicates where A is closed as dup of B?</li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default App;
