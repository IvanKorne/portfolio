import dynamic from "next/dynamic";
import About from "./_components/About";
import Experience from "./_components/Experience";
import Projects from "./_components/Projects";
import Footer from "./_components/Footer";
import Contact from "./_components/Contact";
import Sidebar from "./_components/Sidebar";
import Intro from "./_components/Intro";

export default function Home() {
  const Header = dynamic(() => import("./_components/Header"), { ssr: false });
  return (
    <main className="flex flex-col">
      <Header />
      <div>
        <Intro />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Sidebar />
      </div>
      <Footer />
    </main>
  );
}
