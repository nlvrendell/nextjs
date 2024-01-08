import { motion } from "framer-motion";

const UpperBody = () => {
  return (
    <>
      <div className="h-100 bg-custom-gray font-inter p-12">
        <div className="mx-40">
          <Animation>
            <p className="text-secondary text-lg mt-10">Hi, my name is</p>
            <div className="text-white text-xl font-bold">
              <p className="-mb-52">Rendell</p> <br />
              <p>Jay S. Eyas</p>
            </div>
          </Animation>
          <SlideAnimation>
            <p className="text-secondary text-lg">I build things for the web</p>
          </SlideAnimation>
        </div>
      </div>
    </>
  );
};

const Animation = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, duration: 5 }}
      transition={{
        ease: "linear",
        duration: 2,
      }}
    >
      {props.children}
    </motion.div>
  );
};

const SlideAnimation = (props) => {
  return (
    <motion.div
      initial={{ x: -200 }}
      animate={{ x: 0 }}
      transition={{
        ease: "linear",
        duration: 0.5,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export default UpperBody;
