import About from "./components/about";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Skills from "./components/skills";
const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Projects />
        <Experience />
        <Footer />
      </main>
    </div>
  );
};

export default App;
