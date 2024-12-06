import './App.css'
import Layout from './components/Layout';
import Hero from './components/Hero';
import VenuSection from './components/VenuSection';
import PreLaunch from './components/PreLaunch';
import Footer from './components/Footer';
import ExcitingFeatures from './components/ExcitingFeatures';
import CouponSection from './components/CouponSection';
import About from './components/About';
import OurProduct from './components/OurProduct';
import Dex from './components/Dex';

function App() {
  return (
    <Layout>
      <Hero />
      <CouponSection />
      <About />
      <OurProduct />
      <Dex />
      <VenuSection />
      <ExcitingFeatures />
      <PreLaunch />
      <Footer />
    </Layout>
  )
}

export default App