import AboutSection from './components/AboutSection.tsx';
import ContactSection from './components/ContactSection.tsx';
import ProjectsSection from './components/ProjectsSection.tsx';
import Header from './components/header.tsx';
import HeroSection from './components/heroSection.tsx';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default App
