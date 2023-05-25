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
  const overlayStyles = `cursor-pointer absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 top-0 left-0
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative hover:scale-150 md:min-h-[300px] bg-[#f0f0f0] flex items-center">
      <a href={liveUrl} target="_blank">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">
            {descripttion}
          </p>
        </div>
        <img src={imgUrl} className="object-fill" alt={projectTitle} />
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
        <p className="mt-10 text-[20px] mb-10">
          Here are some of the projects I've worked on. I'm always looking for new opportunities to learn and grow as a developer.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Project title="BOOM" liveUrl={"https://myboom.ca"} imgUrl="../assets/boom.png" descripttion={"Boom – the fastest marketplace for finding buyers locally! Our platform makes it easy for you to connect with buyers in your area who are looking for the items you have to sell."} />
          <Project title="Start With Five" liveUrl={"https://play.google.com/store/apps/details?id=com.startwithfive.app&pli=1"} imgUrl="../assets/start-with-five-admin.png" descripttion={"With Five App ivesting platfrom for both accredited and non-accredited US residents. We built the admin dashboard for the app"} />
          <Project title="Prottoy Ltd" liveUrl={"https://prottoy.com.bd"} imgUrl="../assets/prottoy.png" descripttion={"Prottoy is an EdTech startup based in Bangladesh working to effectively introduce educational technology in the already existing educational infrastructure of the country."} />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
