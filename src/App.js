import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  return (
    <>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        <Project currentSection={currentSection} />
      </main>
      <Footer />
    </>
  );
}

export default App;
