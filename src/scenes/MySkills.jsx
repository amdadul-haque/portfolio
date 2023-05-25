import { IoLogoJavascript } from "react-icons/io5";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNodeDotJs } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="h-full w-full flex flex-col justify-center items-center">
      {/* HEADER AND IMAGE SECTION */}
      <div className="w-full md:flex md:justify-center md:gap-16 ">
        <motion.div
          className="md:w-1/3 flex flex-col justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className=" font-playfair text-center font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-2/3" />
          <p className="my-10 text-center text-[18px]">
            Throughout the years, I have gained a wide range of skills, some of which are listed below.
          </p>
        </motion.div>

        {/* <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div> */}
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/2 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >

          <div>
            <div>
              {/* <ImHtmlFive />  */}
              {/* <SiCss3 /> */}
              <IoLogoJavascript className="text-yellow" />
              <FaReact className="text-blue" />
              <SiTailwindcss className="text-[#36B7F0]" />
              <SiBootstrap />
              <SiRedux />
              <FaNodeJs />
              <SiMongodb />
              <SiFirebase className="text-[#F7A110]" />
              <SiGithub />
              <SiVisualstudiocode />
              <SiFigma />
              <TbBrandNextjs />
              <SiNetlify />
            </div>
          </div>

        </motion.div>
        <motion.div
          className="md:w-1/2 mt-10 hideen xs:block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src="../assets/skill.jpg" alt="" />
        </motion.div>

      </div>
      {/* SKILLS */}
      {/* <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            With years of experience in web development, I have a deep understanding of various programming languages and frameworks, and I'm always eager to take on new challenges and learn new technologies.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I create innovative and intuitive user experiences using the latest design trends and techniques, making the web a more exciting and enjoyable place.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            As a web developer, I approach every project with a sense of imagination and curiosity, constantly exploring new possibilities and pushing the boundaries to create something truly unique.
          </p>
        </motion.div>
      </div> */}
    </section>
  );
};

export default MySkills;
