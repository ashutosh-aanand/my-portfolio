import { About } from "./components/About";
import Details from "./components/Details";

export default function App() {
  return (
    <div className="h-screen bg-slate-800 text-slate-400">
      <div className="lg:flex gap-4 bg-slate-700 h-screen lg:px-24 lg:py-0">
        <About/>
        <Details/>
      </div>
    </div>
  )
}