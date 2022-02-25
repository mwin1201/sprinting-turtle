import logo from './logo.svg';
import './App.css';
import Header from "../src/components/Header";
import Hero from "../src/components/Hero";
import Project from "../src/components/Project";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Project />
        <Footer />
      </main>
    </div>

  );
}

export default App;
