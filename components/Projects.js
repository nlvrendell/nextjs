import React from "react";
import { Tabs, Tab } from "./Tabs";
import Project from "./Project/ProjectTemplate";
import Image from "next/image";
import {
  cpms,
  certovax,
  prtc,
  strangedomain,
  conx,
  soc365,
  candidateRank,
  faxEdgeDispatcher,
  webhookMonitor,
  generatePdf,
  connectware,
} from "../public/images/";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="rjse-projects">
      <div className="justify-center text-center my-5">
        <h1 className="font-bold text-4xl">Projects</h1>
        <a
          href="https://docs.google.com/presentation/d/14_r6SUCYp93EOs9wpYo730dC0AB2Z1gw/edit?usp=drive_link&ouid=117854322814640526283&rtpof=true&sd=true"
          target="_blank"
          rel="noreferrer"
          className="text-blue-700"
        >
          (View My Portfolio)
        </a>
      </div>
      <Tabs>
        <Tab label="NetlinkVoice">
          <Animation>
            <div className="py-4">
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent img={soc365} description={"Soc 365"} />

                <ProjectComponent
                  img={candidateRank}
                  description={"CandidateRank"}
                />
              </div>
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent
                  img={faxEdgeDispatcher}
                  description={"FaxEdge Dispatcher"}
                />

                <ProjectComponent
                  img={webhookMonitor}
                  description={"WebHook Monitoring"}
                />
              </div>
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent
                  img={connectware}
                  description={"Connecware CSS Portal"}
                />
                <ProjectComponent
                  img={generatePdf}
                  description={"GeneratePDF"}
                />
              </div>
            </div>
          </Animation>
        </Tab>
        <Tab label="Eversun">
          <Animation>
            <div className="py-4">
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent
                  img={strangedomain}
                  description={"StrangeDomains"}
                />
                <ProjectComponent img={conx} description={"PRTC - SMAH"} />
              </div>
              <div className="grid grid-cols-2 mb-8">
                <ProjectComponent img={certovax} description={"CertoVax"} />
                <ProjectComponent img={prtc} description={"PRTC-SMAH"} />
              </div>
            </div>
          </Animation>
        </Tab>
        <Tab label="DSWD">
          <Animation>
            <div className="py-4">
              <ProjectComponent img={cpms} description={"DSWD-CPMS"} />
            </div>
          </Animation>
        </Tab>
      </Tabs>
    </div>
  );
};

const ProjectComponent = ({ img, description }) => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Project onClick={() => setShowModal(true)}>
      <Image
        width={"300"}
        className="w-[750px] rounded-md"
        src={img}
        alt=""
        unoptimized
      />
      <div className="absolute flex opacity-0 group-hover:opacity-100 m-auto content-center justify-center font-bold items-center  bottom-4">
        {description}
      </div>
    </Project>
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

export default Projects;
