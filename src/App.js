import React from "react";
import "./style/App.css";

// components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import FavoriteScholarships from "./components/FavoriteScholarships/FavoriteScholarships";

const App = () => {
  return (
    <div className="App">
      <Header />
      <FavoriteScholarships />
      <Footer />
    </div>
  );
}

export default App;
