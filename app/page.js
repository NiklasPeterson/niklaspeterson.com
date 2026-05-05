import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { getAllProjects } from "./lib/projects";

export default function Home() {
  const projects = getAllProjects().filter((p) => p.attachments.length > 0);

  return (
    <main className="w-full max-w-[1440px] flex flex-col">
      <Header/>
      <Projects projects={projects}/>
      <About/>
      <Footer/>
    </main>
  );
}
