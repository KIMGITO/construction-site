import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';
import  ThreeDProjectRotator from "../layout/ThreeDRotator"
import { projects } from "../../data/projects";



const FeaturedProjects = () => {

  return (
    <ThreeDProjectRotator projects={projects}/>
  );
};

export default FeaturedProjects;