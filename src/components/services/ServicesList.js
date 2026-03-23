import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "data/services";
import "./ServicesList.css";

const ServicesList = ({ onServiceClick }) => {
  return (
    <div className="services-ist">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onClick={() => onServiceClick(service)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
