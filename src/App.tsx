import AppBar from './components/AppBar/AppBar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Solution from './components/Solution/Solution';
import Process from './components/Process/Process';
import MVPs from './components/MVPs/MVPs';
import Pricing from './components/Pricing/Pricing';
import Team from './components/Team/Team';
import WhyUs from './components/WhyUs/WhyUs';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <>
      <AppBar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Process />
        <MVPs />
        <Pricing />
        <Team />
        <WhyUs />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
