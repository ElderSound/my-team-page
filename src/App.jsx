import React, { useState } from "react";
import Header from "./components/Header";
import Intro from "./components/Intro";
import TeamGrid from "./components/TeamGrid";
import Footer from "./components/Footer";

export default function App() {
  
  const [isDark, setIsDark] = useState(false);

  //  Función para alternar
  const toggleDark = () => setIsDark((prev) => !prev);

  // clases del contenedor según el modo
  const containerClasses = isDark
    ? "bg-gray-900 text-gray-100"
    : "bg-white text-gray-900";

  return (
    <div className={`${containerClasses} min-h-screen flex flex-col`}>
      
      <Header isDark={isDark} toggleDark={toggleDark} />

      
      <Intro />

      
      <main className="flex-grow">
        <TeamGrid />
      </main>

      
      <Footer />
    </div>
  );
}