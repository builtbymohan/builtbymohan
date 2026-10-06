import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <main className="relative z-10">
      <Hero />
      <About />
      <Experience />
      <Contact />
    </main>
  );
}
