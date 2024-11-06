import Footer from "./components/Footer";
import About from "./components/About";
import Header from "./components/Header";
import ProjectsOld from "./components/ProjectsOld";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] flex flex-col">

      <Header/>
      {/* <ProjectsOld/> */}
      <Projects/>
      <About/>
      <Footer/>
    </main>
  );
}
