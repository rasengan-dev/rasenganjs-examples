import Button from "@/components/atoms/Button";
import { PageComponent } from "rasengan";
import teams from "@/assets/images/teams.png";
import cloud from "@/assets/images/cloud.png";
import analytics from "@/assets/images/analytics.png";
import { motion } from "framer-motion";

const Faq: PageComponent = () => {
  const sectionVariants = {
    hidden: { opacity: 0, translateY: 20 },
    visible: { opacity: 1, translateY: 0 },
  };
  // Parent container for staggered animations
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Delay each child animation by 0.3 seconds
      },
    },
  };
  return (
    <section id="faq" className="bg-custom-gradient-2">
      <div className="flex flex-col items-center text-center gap-6 px-4 pt-8 lg:flex-row lg:justify-between lg:items-start lg:text-left lg:px-[130px] lg:pt-[130px]">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black leading-snug">
          Our Features
          <span className="block">you can get</span>
        </h1>
        <p className="text-[#A6A6A6] text-sm md:text-base lg:text-lg max-w-xl">
          We offer a variety of interesting features that can help increase your
          productivity at work and make it easy to manage your projects.
        </p>
        <Button
          text="Get Started"
          className="px-6 py-3 bg-primary text-white text-sm md:text-base rounded-full"
        />
      </div>

      <div className="pt-12 px-4 lg:px-[130px]">
        <motion.div
          className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src={teams}
              alt="Collaboration Teams"
              className="w-full max-md:p-4"
            />
            <h3 className="mt-6 text-2xl md:text-3xl font-bold">
              Collaboration Teams
            </h3>
            <p className="text-[#A6A6A6] text-sm md:text-base mt-2">
              Handle projects together with your team virtually.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src={cloud}
              alt="Cloud Storage"
              className="w-full max-md:p-4"
            />
            <h3 className="mt-6 text-2xl md:text-3xl font-bold">
              Cloud Storage
            </h3>
            <p className="text-[#A6A6A6] text-sm md:text-base mt-2">
              No need to worry about storage as we provide up to 2 TB.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center"
            variants={sectionVariants}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <img
              src={analytics}
              alt="Daily Analytics"
              className="w-full max-md:p-4"
            />
            <h3 className="mt-6 text-2xl md:text-3xl font-bold">
              Daily Analytics
            </h3>
            <p className="text-[#A6A6A6] text-sm md:text-base mt-2">
              Get useful information daily to make your work easier.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

Faq.path = "/faq";
Faq.metadata = {
  title: "Faq",
  description: "Faq page",
};

export default Faq;
