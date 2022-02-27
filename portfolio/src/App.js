import './App.css';
import Header from "../src/components/Header";
import About from "./components/About";
import Project from "../src/components/Project";
import Contact from "../src/components/Contact";
import Resume from "../src/components/Resume";
import Footer from "../src/components/Footer";
import React, { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("About me");

  const renderPage = () => {
    if (currentPage === "About me") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Project />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header
        currentPage = {currentPage}
        handlePageChange = {handlePageChange}
      />
      <main>
        {renderPage()}
        <Footer />
      </main>
    </div>
  );
}

export default App;
