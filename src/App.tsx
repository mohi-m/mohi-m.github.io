import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Loading } from "./components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can remove this in production)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <AnimatePresence>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Education />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
