import { About } from "./components/About";
import Details from "./components/Details";

export default function App() {
  const data = {
    name: "Ashutosh Anand",
    role: "Senior Software Engineer",
    shortDescription: "I build reliable backend systems that enables smooth and rapid web experiences",
    githubLink: "https://github.com/ashutosh-aanand",
    linkedInLink: "https://www.linkedin.com/in/ashutosh-anand1"
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-400">
      <div className="lg:flex gap-4 min-h-screen lg:px-24 lg:py-0 max-w-screen-xl mx-auto md:px-12 md:py-20 px-6 py-12">
        <About data={data}/>
        <Details/>
      </div>
    </div>
  )
}