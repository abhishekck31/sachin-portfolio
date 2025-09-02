import HeroSection from "./components/HeroSection"
import WorkSection from "./components/WorkSection"
import GallerySection from "./components/GallerySection"
import TrustedClientsSection from "./components/TrustedClientsSection"
import AboutSection from "./components/AboutSection"
import ServicesSection from "./components/ServicesSection"
import ContactSection from "./components/ContactSection"

export default function Home() {
  return (
    <>
      <HeroSection />
  <WorkSection />
  <GallerySection />
      <TrustedClientsSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </>
  )
}
