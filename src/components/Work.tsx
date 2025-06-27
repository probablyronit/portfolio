import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[
            {
              id: 1,
              name: "Project 1",
              category: "Web Application",
              tools: "React, Node.js, Express",
              image: "/images/placeholder.webp"
            },
            {
              id: 2,
              name: "Project 2", 
              category: "AI/ML Application",
              tools: "Python, TensorFlow, React",
              image: "/images/placeholder.webp"
            },
            {
              id: 3,
              name: "Project 3",
              category: "Desktop Application",
              tools: "C++, Qt, SQLite",
              image: "/images/placeholder.webp"
            },
            {
              id: 4,
              name: "Project 4",
              category: "Mobile App",
              tools: "React Native, Node.js",
              image: "/images/placeholder.webp"
            },
            {
              id: 5,
              name: "Project 5",
              category: "Game Development",
              tools: "Unity, C#, Blender",
              image: "/images/placeholder.webp"
            },
            {
              id: 6,
              name: "Project 6",
              category: "Full Stack Web",
              tools: "Go, React, PostgreSQL",
              image: "/images/placeholder.webp"
            }
          ].map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{project.id}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
