import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { WhyMindery } from './components/WhyMindery'
import { Programs } from './components/Programs'
import { Built } from './components/Built'
import { Comparison } from './components/Comparison'
import { Pricing } from './components/Pricing'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <div className='flex flex-col'>
      <Navbar />
      <HeroSection />
      <WhyMindery />
      <Programs />
      <Built />
      <Comparison />
      <Pricing />
      <Reviews />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  )
}

export default App
