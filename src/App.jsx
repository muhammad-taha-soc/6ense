import './App.css'
import Layout from './components/Layout';
import Hero from './components/Hero';
import Footer from './components/Footer';
import CouponSection from './components/CouponSection';
import About from './components/About';
import OurProduct from './components/OurProduct';
import Dex from './components/Dex';
import Wallet from './components/Wallet';
import OurPartner from './components/OurPartner';
import Stats from './components/Stats';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <Layout>
      <Hero />   
      <CouponSection />
      <About />
      <OurProduct />
      <Dex />
      <Wallet/>
      <Stats />
      <OurPartner />
      <ChatBot />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default App