import { Navbar, Hero, Projects, Education, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Projects />
        <Education />
        <Footer />
      </main>
    </>
  );
}
