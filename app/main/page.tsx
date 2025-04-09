import React from "react";
import SideBar from "@/components/SideBar";
import SkillCard from "@/components/SkillCard";
import ProjectCard from "@/components/ProjectCard";
import Contacts from "@/components/Contacts";

export default function page() {
  return (
    <div className="flex h-screen">
      <div className="border border-[#000] w-[90rem] p-4 sticky pt-[5rem] px-8">
        <h1 className="text-4xl font-bold mb-2">BEA Ramirez</h1>
        <h5 className="text-[1.2rem] font-semibold mb-2">Backend Developer</h5>
        <p className="border w-[20rem] text-[0.9rem] mb-20">
          I build robust backends that support innovative projects and enhance
          user experiences.
        </p>
        <SideBar />
        <Contacts additional="mt-[11rem]" />
      </div>
      <div className="border border-[#000] flex-grow overflow-y-auto scrollbar-none pl-[8rem]">
        <h6 id="about" className="border"></h6>
        <div className="flex flex-col gap-6 mt-[4rem] pr-[4rem] pl-[5rem] mb-[8rem]">
          <p>
            I am a passionate developer with a love for creating innovative
            solutions that solve real-world problems. My curiosity drives me to
            continuously learn and explore new technologies, and I thrive on the
            challenges that come with coding—even when it involves debugging and
            discovering that a small oversight caused a major issue. (We&apos;ve
            all been there, right?) These moments, though frustrating, remind me
            of the importance of patience, persistence, and attention to detail
            in this field.
          </p>
          <p>
            While I may not have a specific niche yet, I take pride in being a
            versatile problem-solver. Often described as a &quot;jack of all
            trades,&quot; I see this as a strength rather than a limitation. It
            allows me to adapt to different roles, collaborate with diverse
            teams, and contribute to various aspects of a project. I believe
            that with focus and determination, I can achieve anything I set my
            mind to.
          </p>
          <p>
            Technology has always fascinated me, and I&apos;m constantly amazed
            by how rapidly it evolves. Although I never imagined myself entering
            the tech world, the decision to pursue this path was one of the best
            I&apos;ve made. What started as a spur-of-the-moment choice has
            turned into a fulfilling journey, and I&apos;ve discovered a genuine
            passion for coding and creating.
          </p>
          <p>
            Outside of work, I enjoy spending time with my two cats, diving into
            a good book, experimenting in the kitchen with baking and cooking,
            and unwinding with video games. These hobbies keep me balanced and
            inspired, both personally and professionally.
          </p>
        </div>
        <h6 id="skills" className="border">
          {""}
        </h6>
        <div className="flex flex-col gap-8 mb-[9rem] border pb-[3rem] pt-[5rem]">
          <SkillCard
            title="Programming Languages"
            description="Programming Languages I've learned throughout my college journey."
            tags={["C", "C++", "C#", "Java", "Javascript"]}
          />
          <SkillCard
            title="Web Development"
            description="Tech stacks I have used throughout my entire colege journey."
            tags={[
              "HTML5",
              "CSS",
              "Node.js",
              "React.js",
              "EJS",
              "Express.js",
              "Next.js",
            ]}
          />
          <SkillCard
            title="Database"
            description="Databases I've used."
            tags={["Firestore Database", "MongoDB", "MySQL"]}
          />
        </div>
        <h6 id="projects" className="border ">
          {""}
        </h6>
        <div className="flex flex-col gap-10 pt-12 mb-[9rem]">
          <ProjectCard
            title="Byte by Byte"
            description="Web app documenting my journey as a computer science student. Features 15+ blog posts on challenges, learning strategies, and experiences with 5+ programming languages, providing insights into mastering complex CS concepts."
            tags={["Node.js", "EJS", "MongoDB", "Express.js"]}
            image="/assets/ByteByByte.png"
            alt="byte by byte"
          />
          <ProjectCard
            title="BoardHouse Finder"
            description="Desktop app built with C# ASP.NET to assist over 10,000 Visayas State University students in finding accommodations. Integrates Google Maps for 30% faster navigation and filters 100+ listings for tailored searches."
            tags={["C#", "ASP.NET", "Google Maps API"]}
            image="/assets/BoardHouseFinder.png"
            alt="boardhouse finder"
          />
          <ProjectCard
            title="Signature Forgery Detection"
            description="Machine learning system for real-time signature authentication. Trained a model with 95% accuracy using 1000+ samples and implemented 3 image preprocessing techniques with OpenCV to enhance performance. Developed and deployed using TensorFlow/Keras, Python, and Flask."
            tags={["TensorFlow", "Keras", "OpenCV", "Python", "Flask"]}
            image="/assets/SignatureForgeryDetection.png"
            alt="signature forgery detection"
          />
          <ProjectCard
            title="Honesty Store IMS"
            description="Web-based inventory management system for honesty stores and small retailers. Features automated stock tracking, sales monitoring, and real-time reporting. Developed secure RESTful APIs, optimized database queries, and implemented role-based authentication to improve security and efficiency."
            tags={["Next.js", "Firebase", "Tailwind CSS"]}
            image="/assets/Weather.png"
            alt="weather"
          />
        </div>
      </div>
    </div>
  );
}
