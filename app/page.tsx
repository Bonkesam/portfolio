import ClientOnly from "./components/ClientOnly"
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Welcome from "./components/Welcome";


export default function Home() {
  return (
    <ClientOnly>

      <div className="
      
        h-screen
        w-screen
        bg-custom-500
        overflow-y-auto   
      ">
        <Welcome />
        <Projects />
        <Skills />
        <Footer />

      </div>
    </ClientOnly>

  )
}
