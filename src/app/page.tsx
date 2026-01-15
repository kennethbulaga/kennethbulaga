import { Navbar, Hero, Projects, Experience, Education, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Experience />
        <Education />
        <Footer />
      </main>
    </>
  );
}
