import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../../data/services";
import "./ServicesList.css";

const ServicesList = () => {
  return (
    <div className="services-list">
      <div className="container">
        <div className="services-grid-detailed">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
