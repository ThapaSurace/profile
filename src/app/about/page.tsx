import Timeline from "@/components/Timeline";
import { Separator } from "@/components/ui/separator";

const page = () => {
  return (
    <div className="container space-y-10">
      <div>
        <h1 className="mb-4">About Me</h1>
        <p>
          Hi, I’m Suresh Thapa, a dedicated MERN stack developer with a passion
          for creating dynamic and user-friendly web applications. With a strong
          foundation in front-end and back-end technologies, I specialize in
          building responsive and scalable web solutions.
        </p>
        <p>
          I recently completed a MERN stack course and have since applied my
          skills in several hands-on projects, including a Fiverr clone and an
          e-commerce website. My expertise spans across technologies like
          MongoDB, Express.js, React, Node.js, and Tailwind CSS, allowing me to
          craft efficient and modern web applications.
        </p>
      </div>
      <Separator />
      <div>
        <h2 className="mb-4">Work Experience</h2>
        <Timeline />
      </div>
    </div>
  );
};

export default page;
