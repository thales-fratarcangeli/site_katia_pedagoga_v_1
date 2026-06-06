import { CartProvider } from "./context/CartContext"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import Categories from "./components/Categories"
import FeaturedMaterials from "./components/FeaturedMaterials"
import Benefits from "./components/Benefits"
import HowItWorks from "./components/HowItWorks"
import Testimonials from "./components/Testimonials"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Toast from "./components/Toast"

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <main>
          <Hero />
          <TrustStrip />
          <Categories />
          <FeaturedMaterials />
          <Benefits />
          <HowItWorks />
          <Testimonials />
          <Newsletter />
        </main>
        <Footer />
        <Toast />
      </div>
    </CartProvider>
  )
}
