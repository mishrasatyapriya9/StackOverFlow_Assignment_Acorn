import TimeAgo from "../utils/TimeAgoCheck";

const MainContentQuestions = ({ questions, filter, setFilter }) => {
  return (
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
      {questions.slice(0, 6).map((question) => (
        <div key={question.question_id} className="question-card">
          <h2 className="question-title">
            <a href={question.link} target="_blank" rel="noopener noreferrer">
              {question.title}
            </a>
          </h2>
          <div className="tags">
            {question.tags.slice(0, 5).map((tag) => (
              <span key={tag} className="tag">
                {tag}
              </span>
            ))}
          </div>
          <div className="question-details">
            <div className="stats">
              <span className="stat">
                <i className="fas fa-arrow-up" style={{ color: "orange" }}></i>{" "}
                {question?.score}
              </span>
              <span className="stat">
                <i className="fas fa-comments"></i> {question?.answer_count}
              </span>
              <span className="stat">
                <i className="fas fa-eye"></i> {question?.view_count}
              </span>
            </div>
            <div className="question-meta">
              asked {TimeAgo(question.creation_date)} :{" "}
              <i style={{ color: "#005fa3" }}>{question.owner?.display_name}</i>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainContentQuestions;
