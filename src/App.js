import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import { Footer } from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
