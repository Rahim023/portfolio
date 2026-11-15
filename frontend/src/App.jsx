import React, { Suspense, lazy, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Particles from "./components/Particles";
import AnimatedContent from "./components/AnimatedContent";
import LanyardIntro from "./components/LanyardIntro";
import LoadingDial from "./components/LoadingDial";
import StarBorder from "./components/StarBorder";

const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Resume = lazy(() => import("./pages/Resume"));

gsap.registerPlugin(ScrollTrigger);

const INTRO_DISMISSED_KEY = "portfolio-intro-dismissed";

function wasIntroDismissed() {
  try {
    return window.sessionStorage.getItem(INTRO_DISMISSED_KEY) === "true";
  } catch (error) {
    console.warn("Could not read the intro state from session storage.", error);
    return false;
  }
}

function RouteContent({ pathname, hash, locationKey, introDismissed }) {
  const routeRef = useRef(null);

  useEffect(() => {
    if (pathname !== "/" || !hash || !introDismissed) return undefined;
    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash, locationKey, introDismissed]);

  useLayoutEffect(() => {
    const scope = routeRef.current;
    if (!scope) return undefined;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        scope.querySelectorAll("[data-scroll-reveal]").forEach((element) => {
          gsap.from(element, {
            y: 28,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: { trigger: element, start: "top 88%", once: true }
          });
        });
      }, scope);
      ScrollTrigger.refresh();
      return () => context.revert();
    });
    return () => media.revert();
  }, [pathname]);

  return (
    <div ref={routeRef}>
      <AnimatedContent className="route-animated-content" trigger="mount" distance={28} duration={0.7} ease="power3.out" blur={2}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatedContent>
    </div>
  );
}

class RouteErrorBoundary extends React.Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <div className="loading-dial" role="alert"><p>Unable to load this page.</p><button type="button" onClick={() => window.location.reload()}>Reload page<StarBorder /></button></div>;
    }
    return this.props.children;
  }
}

export default function App() {
  const location = useLocation();
  const [introOpen, setIntroOpen] = useState(() => !wasIntroDismissed());
  const [introDismissed, setIntroDismissed] = useState(() => !introOpen);
  const contentRef = useRef(null);

  const closeIntro = () => {
    try {
      window.sessionStorage.setItem(INTRO_DISMISSED_KEY, "true");
    } catch (error) {
      console.warn("Could not save the intro state to session storage.", error);
    }
    setIntroOpen(false);
  };

  useEffect(() => {
    if (contentRef.current) contentRef.current.inert = !introDismissed;
  }, [introDismissed]);

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposeScroll = () => {};

    const configureScroll = () => {
      disposeScroll();
      disposeScroll = () => {};
      if (motionPreference.matches) return;

      const lenis = new Lenis({
        autoRaf: true,
        anchors: true,
        allowNestedScroll: true,
        prevent: (element) => element.matches(".lanyard-intro, .profile-modal-backdrop, .case-study-backdrop, .contact-modal-backdrop")
      });
      lenis.on("scroll", ScrollTrigger.update);

      const syncDialogLock = () => {
        if (document.body.style.overflow === "hidden") lenis.stop();
        else lenis.start();
      };
      const observer = new MutationObserver(syncDialogLock);
      observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
      syncDialogLock();
      disposeScroll = () => {
        observer.disconnect();
        lenis.destroy();
      };
    };

    configureScroll();
    motionPreference.addEventListener("change", configureScroll);
    return () => {
      motionPreference.removeEventListener("change", configureScroll);
      disposeScroll();
    };
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) return undefined;
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    scrollToTop();
    const firstFrame = window.requestAnimationFrame(scrollToTop);
    const secondFrame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToTop);
    });
    const timer = window.setTimeout(scrollToTop, 120);

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
      window.clearTimeout(timer);
    };
  }, [location.pathname, location.search, location.hash, location.key]);

  return (
    <div className="app-shell">
      <Particles
        className="site-particles"
        particleColors={["#0ee9a1", "#d2e0e0", "#a855f7"]}
        particleCount={1180}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={50}
        glow={0.6}
        twinkle={0.35}
        moveParticlesOnHover
        hoverEffect="parallax"
        sizeRandomness={0.6}
        depthOfField={0.1}
        drift="forward"
        driftSpeed={1.2}
        variation={1}
        style={{ position: "fixed", inset: 0, zIndex: 0 }}
      />

      <div ref={contentRef} className="app-content-layer" aria-hidden={!introDismissed || undefined}>
        <NavBar />

        <main className="app-main">
          <div className="site-content">
            <RouteErrorBoundary key={location.pathname}>
              <Suspense fallback={<LoadingDial label="Loading page" />}>
                <RouteContent key={location.pathname} pathname={location.pathname} hash={location.hash} locationKey={location.key} introDismissed={introDismissed} />
              </Suspense>
            </RouteErrorBoundary>
          </div>
        </main>

        <Footer />
      </div>
      <AnimatePresence onExitComplete={() => setIntroDismissed(true)}>
        {introOpen && <LanyardIntro onClose={closeIntro} />}
      </AnimatePresence>
    </div>
  );
}
