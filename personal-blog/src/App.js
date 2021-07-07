import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects/Projects";
import "./App.css";
import "./Responsive.css";
const App = () => {
  const [NavLinks, setNavLinks] = useState([
    { id: 1, name: "Home", anchor: "/", active: true },
    { id: 2, name: "Projects", anchor: "/projects", active: false },
    { id: 3, name: "Contact", anchor: "/contact", active: false },
    { id: 4, name: "About me", anchor: "/about", active: false },
  ]);
  //Change active Link
  const [blogCateg, setBlogCateg] = useState([
    { id: 1, name: "Most recent", active: true },
    { id: 2, name: "Popular", active: false },
    { id: 3, name: "Animations", active: false },
    { id: 4, name: "Piece of my life", active: false },
  ]);

  //fetch data from mongodb to show articles:D
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles();
      setArticles(articlesFromServer);
    };
    getArticles();
  }, []);

  const fetchArticles = async () => {
    const res = await fetch("http://localhost:8000/posts");
    const data = await res.json();
    return data;
  };
  //end here

  const changeActive = (id) => {
    let navLinksCopy = NavLinks.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setNavLinks(navLinksCopy);
  };
  const changeActiveCategory = (id) => {
    let blogCategCopy = blogCateg.map((link) =>
      id === link.id ? { ...link, active: true } : { ...link, active: false }
    );
    setBlogCateg(blogCategCopy);
  };

  return (
    <Router>
      <div className="container">
        <NavBar navlinks={NavLinks} onChangeActive={changeActive} />
        <Route
          path="/"
          exact
          component={(props) => (
            <Home
              blogCateg={blogCateg}
              onChangeActiveCategory={changeActiveCategory}
              articles={articles}
            />
          )}
        />
        <Route path="/projects" exact component={() => <Projects />} />
      </div>
    </Router>
  );
};

export default App;
