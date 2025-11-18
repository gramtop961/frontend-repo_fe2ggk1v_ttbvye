import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
      <footer className="py-10 border-t border-yellow-500/10 bg-neutral-950 text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} HiveHub — Built for the swarm
      </footer>
    </div>
  );
}

export default App;
