import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import stack_logo from "./assets/stack3.jpeg"
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
      <div className="h-8 w-8">
  <img src={stack_logo} alt="logo" className="h-20px w-4px object-contain" />
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
          <i className="fas fa-bell"></i>
          <i className="fas fa-inbox"></i>
          <i className="fas fa-user-circle"></i>
        </div>
      </header>

      <aside className="sidebar left">
        <ul>
          <li>Home</li>
          <li>Public</li>
          <li>Questions</li>
          <li>Tags</li>
          <li>Users</li>
          <li>Jobs</li>
        </ul>
      </aside>

      <main className="main-content">
        <header className="top-questions-header">
          <h1>Top Questions</h1>
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
            <div className="stats">
              <span className="stat">
                <i className="fas fa-arrow-up"></i> {question.score} votes
              </span>
              <span className="stat">
                <i className="fas fa-comments"></i> {question.answer_count} answers
              </span>
              <span className="stat">
                <i className="fas fa-eye"></i> {question.view_count} views
              </span>
            </div>
            <div className="question-meta">
              asked {new Date(question.creation_date * 1000).toLocaleString()} by{" "}
              {question.owner?.display_name}
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
