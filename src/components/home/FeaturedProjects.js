import React from 'react';
import './FeaturedProjects.css';
import  ThreeDProjectRotator from "../layout/ThreeDRotator"
import { projects } from "../../data/projects";



const FeaturedProjects = () => {

  return (
    <ThreeDProjectRotator projects={projects}/>
  );
};

export default FeaturedProjects;