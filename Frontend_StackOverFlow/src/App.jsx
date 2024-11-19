import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainContent from "./components/MainContentQuestions";
import RightSidebar from "./components/RightSidebar";

const App = () => {
  const [questions, setQuestions] = useState([]);
  const [overflowBlogs, setOverflowBlogs] = useState([]);
  const [hotMetaPosts, setHotMetaPosts] = useState([]);
  const [filter, setFilter] = useState("activity");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchQuestions();
    fetchOverflowBlogs();
    fetchHotMetaPosts();
  }, [filter]);

  const fetchOverflowBlogs = () => {
    setOverflowBlogs([
      { title: "The unexpected benefits of mentoring others" },
      { title: "Podcast 354: Building for AR with Niantic Labs" },
    ]);
  };

  const fetchHotMetaPosts = () => {
    setHotMetaPosts([
      "Tags (driver) and (device-driver) appear to be redundant",
      "How to handle duplicates where A is closed as dup of B?",
      "Ambiguous tag [containers]",
    ]);
  };

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
    setSearchQuery("");
  };

  return (
    <div className="container">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <LeftSidebar />
      <MainContent
        questions={questions}
        filter={filter}
        setFilter={setFilter}
      />
      <RightSidebar overflowBlogs={overflowBlogs} hotMetaPosts={hotMetaPosts} />
    </div>
  );
};

export default App;
