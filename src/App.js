import { useState } from "react";
import Header from "./components/Header";
import Project from "./components/Project";
import Footer from "./components/Footer";

function App() {
  const [currentSection, setCurrentSection] = useState("About Me");

  return (
    <div>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <Project currentSection={currentSection} />
      <Footer />
    </div>
  );
}

export default App;
