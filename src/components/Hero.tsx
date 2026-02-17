import { motion, useScroll, useTransform } from "framer-motion";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { trackCTAClick } from "../utils/analytics";

export function Hero() {
  const { scrollY } = useScroll();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Black background layer */}
      <div className="absolute inset-0 bg-black z-0" />

      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        className="absolute inset-0 z-0 opacity-75"
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              // Matches your secondary color theme
            },
            links: {
              color: "#6ee7b7",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
      />

      <motion.div
        className="absolute inset-0 bg-[url('/images/background/home_background.png')] bg-cover bg-center bg-no-repeat blur-sm brightness-25 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{ opacity: useTransform(scrollY, [0, 1000], [1, 0.2]) }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative bg-dark-bg/0 p-8 rounded-lg z-20">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Hi, I'm <span className="text-secondary-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Mohi</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl font-semibold text-white mb-8 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]"
        >
          Masters Student @ UIUC | Ex - Software Engineer @ BlackRock
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            onClick={() => trackCTAClick("view_my_work")}
            className="px-6 py-3 bg-secondary-600 text-white font-semibold rounded-lg hover:bg-secondary-700 transition-colors shadow-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1osTZu5L_-fswDxV17telseJsZlVzlef6/view?usp=sharing"
            onClick={() => trackCTAClick("contact_me")}
            className="px-6 py-3 border-2 border-secondary-500 text-white font-semibold rounded-lg hover:bg-secondary-500/10 transition-colors shadow-lg"
          >
            Resume
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
