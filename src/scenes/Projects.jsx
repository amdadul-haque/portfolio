import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, liveUrl, imgUrl, descripttion }) => {
  const overlayStyles = `cursor-pointer absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative hover:scale-150">
      <a href={liveUrl} target="_blank">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {descripttion}
          </p>
        </div>
        <img src={imgUrl} alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          With a portfolio of successful web development projects, I have demonstrated my ability to deliver high-quality work that meets client needs and exceeds expectations.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <Project title="BOOM" liveUrl={"https://myboom.ca"} imgUrl="../assets/boom.png" descripttion={"Boom – the fastest marketplace for finding buyers locally! Our platform makes it easy for you to connect with buyers in your area who are looking for the items you have to sell."} />

          <Project title="Start With Five" liveUrl={"https://play.google.com/store/apps/details?id=com.startwithfive.app&pli=1"} imgUrl="../assets/start-with-five-admin.png" descripttion={"With Five App ivesting platfrom for both accredited and non-accredited US residents. We built the admin dashboard for the app"} />
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
