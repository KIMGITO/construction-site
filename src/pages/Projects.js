import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/seo/SEO";
import { projects } from "../data/projects";
import ThreeDProjectRotator from "../components/layout/ThreeDRotator";
import "./Projects.css";
import { COMPANY } from "utils/constants";

const Projects = () => {
  // const [filter, setFilter] = useState("all");
  // const [visibleProjects, setVisibleProjects] = useState(6);

  // const categories = [
  //   { value: "all", label: "All Projects" },
  //   { value: "Commercial", label: "Commercial" },
  //   { value: "Residential", label: "Residential" },
  //   { value: "Renovation", label: "Renovations" },
  // ];

  // const filteredProjects =
  //   filter === "all"
  //     ? projects
  //     : projects.filter((project) => project.category === filter);

  // const loadMore = () => {
  //   setVisibleProjects((prev) => Math.min(prev + 3, filteredProjects.length));
  // };

  return (
    <>
      <SEO
        title="Our Construction Projects Portfolio"
        url="/projects"
        description={`View ${COMPANY.name} portfolio of successful commercial and residential projects.`}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="projects-page"
      >
        <div className="page-header">
          <h1>Our Project Portfolio</h1>
          <p className="font-primary">
            Excellence & beauty in every build{" "}
            <p>Explore our completed projects</p>
          </p>
        </div>

        {/* <ProjectFilter
          categories={categories}
          activeFilter={filter}
          onFilterChange={setFilter}
        /> */}

        <ThreeDProjectRotator projects={projects.slice(0, 6)} />
      </motion.div>
    </>
  );
};

export default Projects;
