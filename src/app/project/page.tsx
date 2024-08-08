import { SiCodeproject } from "react-icons/si"
import Projects from "@/components/Projects"

const page = () => {
  return (
    <div className="container space-y-10">
      <div>
        <SiCodeproject size={40} className="mb-2" />
        <h1 className="mb-10">What I've been working on</h1>
      </div>
      <Projects />
    </div>
  )
}

export default page