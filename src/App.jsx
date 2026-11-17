import AboutSection from './components/AboutSection.jsx';
import AnnouncementBar from './components/AnnouncementBar.jsx';
import ContactSection from './components/ContactSection.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import GallerySection from './components/GallerySection.jsx';
import Hero from './components/Hero.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import SiteFooter from './components/SiteFooter.jsx';
import SiteHeader from './components/SiteHeader.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-chrome">
        <AnnouncementBar />
        <SiteHeader />
      </header>
      <main id="main-content">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsAppButton />
      <CustomCursor />
    </>
  );
}
