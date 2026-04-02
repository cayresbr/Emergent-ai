import React, { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./contexts/LanguageContext";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <LanguageProvider>
      <div className="App bg-black min-h-screen">
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
        
        <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
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
      </div>
    </LanguageProvider>
  );
}

export default App;
