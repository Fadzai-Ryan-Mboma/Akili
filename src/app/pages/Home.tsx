import { Hero } from "../components/Hero";
import { Features } from "../components/Features";
import { Models } from "../components/Models";
import { Technology } from "../components/Technology";
import { About } from "../components/About";
import { CTA } from "../components/CTA";

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Models />
      <Technology />
      <About />
      <CTA />
    </>
  );
}