import React from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="App bg-black min-h-screen">
        <Header />
        <main>
          <Hero />
          <About />
          <Menu />
          <Reviews />
          <Location />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
